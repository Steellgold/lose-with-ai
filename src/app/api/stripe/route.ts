import { env } from "@/lib/env.mjs";
import { prisma } from "@/lib/utils/db/prisma";
import { stripe } from "@/lib/utils/stripe";
import { headers } from "next/headers";
import type Stripe from "stripe";

export const POST = async(req: Request): Promise<Response> => {
  const body = await req.text();
  const signature = headers().get("Stripe-Signature") as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      env.STRIPE_WEBHOOK_SECRET
    );
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return new Response(`Webhook Error: ${error.message}`, { status: 400 });
  }

  const session = event.data.object as Stripe.Checkout.Session;

  if (event.type === "checkout.session.completed") {
    // Retrieve the subscription details from Stripe.
    const subscription = await stripe.subscriptions.retrieve(
      session.subscription as string
    );

    const paymentsByID = {
      "price_1OOSeKEKNcTJdINCKSEmVuKr": 10,
      "price_1OOShTEKNcTJdINClVHnGPyW": 10,
      "price_1OOShGEKNcTJdINCdpXpPSvY": 20,
      "price_1OOShPEKNcTJdINCEyLO4mC2": 20
    };

    await prisma.user.update({
      where: {
        id: session?.metadata?.userId
      },
      data: {
        credit: {
          increment: paymentsByID[subscription.items.data[0].price.id as keyof typeof paymentsByID] ?? 1
        }
      }
    });
  }

  return new Response(null, { status: 200 });
};
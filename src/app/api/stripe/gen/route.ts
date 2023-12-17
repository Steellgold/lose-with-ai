/* eslint-disable camelcase */
import { env } from "@/lib/env.mjs";
import { stripe } from "@/lib/utils/stripe";
import { createClient } from "@/lib/utils/supabase/server";
import { cookies } from "next/headers";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { z } from "zod";

export const POST = async(req: NextRequest): Promise<NextResponse> => {
  const supabase = createClient(cookies());
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const schema = z.object({
    type: z.string()
  }).safeParse(await req.json());

  if (!schema.success) {
    return NextResponse.json({ error: schema.error });
  }

  if (schema.data.type === "10") {
    const session10 = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price: env.STRIPE_CREDITS_10,
          quantity: 1
        }
      ],
      metadata: {
        userId: user.id,
        priceId: env.STRIPE_CREDITS_10
      },
      allow_promotion_codes: true,
      success_url: env.NEXT_PUBLIC_APP_URL,
      cancel_url: env.NEXT_PUBLIC_APP_URL
    });

    return NextResponse.json({ url: session10.url });
  } else if (schema.data.type === "20") {
    const session20 = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price: env.STRIPE_CREDITS_20,
          quantity: 1
        }
      ],
      metadata: {
        userId: user.id,
        priceId: env.STRIPE_CREDITS_20
      },
      allow_promotion_codes: true,
      success_url: env.NEXT_PUBLIC_APP_URL,
      cancel_url: env.NEXT_PUBLIC_APP_URL
    });

    return NextResponse.json({ url: session20.url });
  }

  return NextResponse.json({ url: env.NEXT_PUBLIC_APP_URL });
};
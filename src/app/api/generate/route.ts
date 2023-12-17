import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { createClient } from "@/lib/utils/supabase/server";
import { z } from "zod";
import { getSportNarmol } from "@/lib/utils/types/names";
import { openai } from "@/lib/utils/openai";
import type { ChatCompletionRequestMessage } from "openai-edge";

const SP = "https://gist.githubusercontent.com/Steellgold/db3b69bf9e29762b216f9b5db7a8ea4e/raw/42fa4c6ebc0109578b3e61295413a99d69315467/system";
const UP = "https://gist.githubusercontent.com/Steellgold/db3b69bf9e29762b216f9b5db7a8ea4e/raw/42fa4c6ebc0109578b3e61295413a99d69315467/user";

// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
export const POST = async(request: NextRequest): Promise<NextResponse | StreamingTextResponse> => {
  const supabase = createClient(cookies());
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ data: null });

  console.log(user.id, user.email);
  const d = await request.json();

  const schema = z.object({
    description: z.string().min(1).max(500).nullable().optional(),
    language: z.string().min(1).max(50),
    sport: z.number().min(0).max(23)
  }).safeParse(d);

  console.log(schema, d);

  if (!schema.success) {
    console.log(schema.error);
    return NextResponse.json({ data: null });
  }

  const { description, language, sport } = schema.data;

  console.log(description, language, sport);

  const systemText = await fetch(SP).then(res => res.text());
  const userText = await fetch(UP).then(res => res.text());

  const userFinalPrompt = userText
    .replace("[DESCRIPTION]", description ?? "No description provided, make a good program without it!")
    .replace("[LANG]", language)
    .replace("[TYPE]", JSON.stringify(getSportNarmol(sport)));

  const messages: ChatCompletionRequestMessage[] = [
    { role: "system", content: systemText },
    { role: "user", content: userFinalPrompt }
  ];

  // await prisma.user.update({
  //   data: { credits: { decrement: 1 } },
  //   where: { id: user.id }
  // });

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const res = await openai.createChatCompletion({
    messages,
    model: "gpt-3.5-turbo",
    stream: true,
    stop: ["#"],
    temperature: 0.2
  });

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const stream: ReadableStream<unknown> = OpenAIStream(res);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  return new StreamingTextResponse(stream);
};
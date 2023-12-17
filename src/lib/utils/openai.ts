import { Configuration, OpenAIApi } from "openai-edge";
import { env } from "../env.mjs";

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
export const openai = new OpenAIApi(new Configuration({ apiKey: env.OPENAI_KEY }));
import { Configuration, OpenAIApi } from "openai-edge";
import { env } from "../env.mjs";

export const openai = new OpenAIApi(new Configuration({ apiKey: env.OPENAI_KEY }));
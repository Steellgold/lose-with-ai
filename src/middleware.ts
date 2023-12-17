import { NextResponse, type NextRequest } from "next/server";
import { createClient } from '@/lib/utils/supabase/middleware';
import { env } from "./lib/env.mjs";

export const middleware = async(request: NextRequest): Promise<unknown> => {
  try {
    const { supabase, response } = createClient(request);
    const s = await supabase.auth.getSession();

    if (!s.data.session) {
      throw NextResponse.next({
        status: 302,
        headers: {
          location: env.NEXT_PUBLIC_APP_URL + "/auth"
        }
      });
    }

    return response;
  } catch (e) {
    return NextResponse.next({
      request: {
        headers: request.headers
      }
    });
  }
};
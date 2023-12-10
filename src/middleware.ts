import { NextResponse, type NextRequest } from "next/server";
import { createClient } from "@/lib/utils/supabase/middleware";

export const middleware = async(request: NextRequest): Promise<unknown> => {
  try {
    const { supabase, response } = createClient(request);
    await supabase.auth.getSession();

    return response;
  } catch (e) {
    return NextResponse.next({
      request: {
        headers: request.headers
      }
    });
  }
};
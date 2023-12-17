"use client";

import { env } from "@/lib/env.mjs";
import { useUser } from "@/lib/providers";
import { createClient } from "@/lib/utils/supabase/client";
import { Button, Card, CardBody, Input, cn } from "@nextui-org/react";
import { MailIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export const AuthPage = () => {
  const supabase = createClient();
  const { user } = useUser();
  const router = useRouter();

  if (user) router.push("/app");

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const [error, setError] = useState<Error | null>(null);

  return (
    <div className="mx-auto max-w-[500px]">
      <Card className={cn("max-w-full w-[500px]")}>
        <CardBody className="overflow-hidden">
          <div className="p-3 flex flex-col gap-1 mb-2">
            <h1 className="text-center text-2xl font-bold">Let{"'"}s get started!</h1>
            <p className="text-center text-small">Just enter your email and we{"'"}ll help you get started.</p>
          </div>

            <form className="flex flex-col gap-2 w-full" onSubmit={(e) => {
              setLoading(true);
              e.preventDefault();

              if (email) {
                setLoading(false);
                if (!emailRegex.test(email)) return setError(new Error("Invalid email!"));
              } else {
                setLoading(false);
                return setError(new Error("Email is required!"));
              }

              
              supabase.auth.signInWithOtp({ email, options: { emailRedirectTo: env.NEXT_PUBLIC_APP_URL + "/auth/callback" } })
                .then(() => {
                  toast("Magic link sent to your email!", { icon: <MailIcon size={18} /> });
                  setLoading(false);
                  setError(null);
                })
                .catch((error) => {
                  toast("Error sending magic link!", { icon: <MailIcon size={18} />, description: error.message, });
                  setLoading(false);
                  setError(error);
                });
            }}>
              <div className="flex flex-col gap-2">
                <Input size="sm" placeholder="Enter your email" type="email" isDisabled={loading}
                  onChange={(e) => setEmail(e.target.value)} value={email}
                  errorMessage={error?.message}
                  isInvalid={!!error}
                  color={error ? "danger" : "default"}
                />

                <Button color="secondary" isLoading={loading} type="submit" onSubmit={() => setLoading(true)}>
                  Send magic link
                </Button>
              </div>
            </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default AuthPage;
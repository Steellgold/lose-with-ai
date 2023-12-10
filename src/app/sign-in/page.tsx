"use client";

import { createClient } from "@/lib/utils/supabase/client";
import { Button, Card, CardBody, Input, Link, Tab, Tabs, cn } from "@nextui-org/react";
import { Eye, EyeOffIcon } from "lucide-react";
import { useState, type ReactElement, useMemo } from "react";
import { useForm } from "react-hook-form";

export const Page = (): ReactElement => {
  const supabase = createClient();
  
  // LOGIN
  const [login_email, login_setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // SIGN UP
  const [name, setName] = useState<string>("");
  const [register_email, register_setEmail] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [selected, setSelected] = useState<string>("sign-in");
  
  // const [login_isVisible, login_setIsVisible] = useState(false);
  // const [register_isVisible, register_setIsVisible] = useState(false);
  // const [registerConfirm_isVisible, registerConfirm_setIsVisible] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const validateEmail = (value) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const signInSubmit = data => console.log("aaaaaa", data);
  const signUpSubmit = data => {
    if (data.password !== data.confirmPassword) {
      return;
    }
  }

  return (
    <div className="mx-auto max-w-[500px]">
      <Card className={cn("max-w-full w-[500px] h-[550px]")}>
        <CardBody className="overflow-hidden">
          <Tabs fullWidth size="md" aria-label="Tabs form" selectedKey={selected} onSelectionChange={(key) => setSelected(key)}>
            <Tab key="sign-in" title="Login">
              {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
              <form className="flex flex-col gap-4" onSubmit={handleSubmit(signInSubmit)}>
                <Input isRequired label="Email" placeholder="Enter your email" type="email" {...register("email", { required: true })}
                  color={errors.email ? "danger" : "default"} errorMessage={errors.email ? "Email is required" : ""} />

                <Input isRequired label="Password" placeholder="Enter your password"
                  type="password" {...register("password", { required: true })}
                />
                
                <p className="text-center text-small">
                  Need to create an account?{" "}
                  <Link size="sm" color="secondary" className="cursor-pointer" onPress={() => setSelected("sign-up")}>Sign up</Link>
                </p>
                
                <div className="flex gap-2 justify-end">
                  <Button fullWidth color="secondary" type="submit">Login</Button>
                </div>
              </form>
            </Tab>

            <Tab key="sign-up" title="Sign up">
              <form className="flex flex-col gap-4 h-[300px]" onSubmit={handleSubmit(signUpSubmit)}>
                <Input isRequired label="Name" placeholder="Enter your name" type="text" {...register("name", { required: true })} />
                <Input isRequired label="Email" placeholder="Enter your email" type="email" {...register("email", { required: true })} />
                
                <Input isRequired label="Password" placeholder="Enter your password" type="password"
                  color={errors.password ? "danger" : "default"}
                  errorMessage={() => {
                    if (errors.password) {
                      return "Password is required";
                    }
                  }}
                />

                <Input isRequired label="Confirm password" placeholder="Confirm your password" type="password"
                  color={errors.confirmPassword ? "danger" : "default"}
                  errorMessage={() => {
                    if (errors.confirmPassword) {
                      return "Confirm password is required";
                    }

                    if (confirmPassword !== password) {
                      return "Confirm password must match password";
                    }
                  }}
                  {...register("confirmPassword", { required: true })}
                />

                <p className="text-center text-small">
                  Already have an account?{" "}
                  <Link size="sm" color="secondary" className="cursor-pointer" onPress={() => setSelected("login")}>Login</Link>
                </p>
                
                <div className="flex gap-2 justify-end">
                  <Button fullWidth color="secondary" type="submit">Sign up</Button>
                </div>
              </form>
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
};

export default Page;
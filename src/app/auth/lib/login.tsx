import { Button, Input, Link } from "@nextui-org/react"
import { useState } from "react";
import { FieldValues, Resolver, useForm } from "react-hook-form";

type FormValues = {
  email: string;
  password: string;
};

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values,
    errors: {
      email: "Email is required",
      password: "Password is required",
    }
  };
}

type TabProps = {
  setSelected: (key: string) => void;
}

export const LoginTab = ({ setSelected }: TabProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver });
  const [formData, setFormData] = useState<FormValues>();

  return (
    <form className="flex flex-col gap-4 h-[300px]" onSubmit={(handleSubmit((data) => setFormData(data)))}>
      <Input isRequired label="Email" placeholder="Enter your email" type="email"
        {...register("email", { required: true })} />
      
      <Input isRequired label="Password" placeholder="Enter your password" type="password"
        {...register("password", { required: true })}
      />

      <p className="text-center text-small">
        Don{"'"}t have an account?{" "}
        <Link size="sm" color="secondary" className="cursor-pointer" onPress={() => setSelected("sign-up")}>Sign up</Link>
      </p>
      
      <div className="flex gap-2 justify-end">
        <Button fullWidth color="secondary" type="submit">Sign in</Button>
      </div>
    </form>
  )
}
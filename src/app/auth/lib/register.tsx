import { Button, Input, Link } from "@nextui-org/react"
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";

const schema = z.object({
  name: z.string()
    .min(3, { message: "Name must be at least 3 characters" })
    .max(20, { message: "Name must be at most 20 characters" }),
  email: z.string().email({ message: "Email is invalid" }),
  password: z.string()
    .min(8, { message: "Password must be at least 8 characters" }),
  confirmPassword: z.string()
    .min(8, { message: "Password must be at least 8 characters" })
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"]
});

type TabProps = {
  setSelected: (key: string) => void;
}

export const RegisterTab = ({ setSelected }: TabProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(schema) });

  return (
    <form className="flex flex-col gap-4 h-[300px]" onSubmit={(handleSubmit((data) => {
      console.log(JSON.stringify(data, null, 2));
      // Check if n
    }))}>
      <Input
        isRequired type="text" label="Name" placeholder="Enter your name"
        isInvalid={errors.name?.type === "required" || errors.name?.type === "minLength" || errors.name?.type === "maxLength"}
        color={errors.name?.type === "required" ? "danger" : "default"}
        maxLength={20} minLength={3}
        errorMessage={
          errors.name?.type === "required" ?  "Name is required" :
          errors.name?.type === "minLength" ? "Name must be at least 3 characters" :
          errors.name?.type === "maxLength" ? "Name must be at most 20 characters" :
          undefined
        }
        {...register("name")}
      />

      <Input
        isRequired type="email" label="Email" placeholder="Enter your email"
        isInvalid={errors.email?.type === "required" || errors.email?.type === "pattern"}
        color={errors.email?.type === "required" ? "danger" : "default"}
        errorMessage={errors.email?.type === "required" ? "Email is required" : errors.email?.type === "pattern" ? "Email is invalid" : undefined}
        {...register("email")}
      />

      <Input
        isRequired type="password" label="Password" placeholder="Enter your password"
        isInvalid={errors.password?.type === "required" || errors.password?.type === "pattern"}
        color={errors.password?.type === "required" ? "danger" : "default"}
        errorMessage={errors.password?.type === "required" ? "Password is required" : errors.password?.type === "pattern" ? "Password must be at least 8 characters, 1 uppercase letter, 1 lowercase letter, and 1 number" : undefined}
        {...register("password")}
      />

      <Input
        isRequired type="password" label="Confirm Password" placeholder="Confirm your password"
        isInvalid={errors.confirmPassword?.type === "required" || errors.confirmPassword?.type === "pattern"}
        color={errors.confirmPassword?.type === "required" ? "danger" : "default"}
        errorMessage={errors.confirmPassword?.type === "required" ? "Password is required" : errors.confirmPassword?.type === "pattern" ? "Password must be at least 8 characters, 1 uppercase letter, 1 lowercase letter, and 1 number" : undefined}
        {...register("confirmPassword")}
      />

      <p className="text-center text-small">
        Already have an account?{" "}
        <Link size="sm" color="secondary" className="cursor-pointer" onPress={() => setSelected("sign-in")}>Sign in</Link>
      </p>
      
      <div className="flex gap-2 justify-end">
        <Button fullWidth color="secondary" type="submit">Sign up</Button>
      </div>
    </form>
  )
}
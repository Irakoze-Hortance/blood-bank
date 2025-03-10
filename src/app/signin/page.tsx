"use client";
import ForgotPasswordDialog from "@/components/ForgotPassword";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signIn } from "@/services/auth";
import { ISignIn, signInSchema } from "@/types/auth";
import { IApiErrorResponse } from "@/types/shared";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dialog } from "@radix-ui/react-dialog";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const LoginForm = () => {
  const router = useRouter();
  const { mutate, isPending: isSigningIn } = useMutation({
    onSuccess(data) {
      const token = data?.data?.access_token;
      localStorage.setItem("token", token);
      toast.success("Welcome back");
      router.push("/resolver");
    },
    onError(error: IApiErrorResponse) {
      toast.error(error?.message ?? "Failed to add new computer");
    },
    mutationFn: signIn,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignIn>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = async (data: ISignIn) => {
    mutate(data);
  };

  return (
    <div className="container max-w-md  p-4 mx-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 border p-12 bg-white"
      >
        <h1 className="text-3xl font-bold text-center">Welcome Back</h1>
        <Input
          label="Email"
          type="email"
          {...register("email")}
          placeholder="Enter your email"
          error={errors.email?.message}
        />
        <Input
          label="Password"
          type="password"
          {...register("password")}
          placeholder="Enter your password"
          error={errors.password?.message}
        />
        <Dialog>
          <ForgotPasswordDialog />
        </Dialog>
        <div>
          <Button
            type="submit"
            isLoading={isSigningIn}
            className="w-full"
            variant="default"
          >
            Sign In
          </Button>
        </div>
        <p className="text-end text-sm text-gray-400">Don't have an account?</p>
        <Link href="/signup">
          <Button variant={"default"} className="w-full">
            Sign Up
          </Button>
        </Link>
      </form>
    </div>
  );
};

const Login = () => {
  return (
    <div className="container flex flex-col md:flex-row items-center justify-center w-full min-h-screen">
      <LoginForm />
      <img
        src="https://img.freepik.com/free-vector/hand-holding-blood-bag-type-ab-donation_1308-112043.jpg"
        className="w-40 md:w-1/2"
      />
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogOverlay, DialogTitle, DialogClose } from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";
import { toast, Toaster } from "sonner";

const forgotPasswordSchema = z.object({
    email: z.string().email("Invalid email address"),
});

type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

const ForgotPasswordDialog = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<ForgotPasswordFormData>({
        resolver: zodResolver(forgotPasswordSchema),
    });

    const onSubmit = async (data: ForgotPasswordFormData) => {
        setIsSubmitting(true);
        try {
            await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/forgot-password`, data);
            toast.success("Password reset link sent. Please check your email.");
        } catch (error) {
            console.error("Error sending password reset link:", error);
            toast.error("Failed to send password reset link. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Dialog>
            <Toaster richColors position="top-right"/>
            <DialogTrigger asChild>
                <p className="underline text-end cursor-pointer">Forgot Password?</p>
            </DialogTrigger>
            <DialogOverlay className="fixed inset-0 bg-black/50" />
            <DialogContent className="fixed inset-0 flex items-center justify-center p-4">
                <div className="w-96 p-6 bg-white rounded-md shadow-lg relative">
                    <DialogTitle className="text-lg font-semibold text-gray-900 mb-4">Forgot Password</DialogTitle>
                    <DialogClose asChild>
                        <button className="absolute top-3 right-3 text-gray-400 hover:text-gray-600" aria-label="Close">
                            ✕
                        </button>
                    </DialogClose>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                {...register("email")}
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                                placeholder="Enter your email"
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition-colors"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Sending..." : "Send Reset Link"}
                        </button>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ForgotPasswordDialog;
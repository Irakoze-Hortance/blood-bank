"use client";
import React from "react";
import Link from "next/link";
const SignUp = () => {
    return (
        <div className="container flex flex-col md:flex-row items-center justify-center w-full min-h-screen">
            <img src="https://img.freepik.com/free-vector/hand-holding-blood-bag-type-ab-donation_1308-112043.jpg" className="w-full md:w-1/2" />
            <SignUpForm />
        </div>
    );
};

const SignUpForm = () => {
    return (
        <div className="container max-w-md  p-4 mx-4">
            <p className="text-left text-sm text-gray-400">
                <span>
                    Already Have an Account?
                    <Link href="/signin" className="text-red-500"> Sign In</Link>
                </span>
            </p>
            <h1 className="text-3xl font-bold text-center">Create an account</h1>
            <div className="mt-6">
                <form className="space-y-4 border p-12 bg-white">
                    <div>
                        <label className="text-sm p-1">Firstname</label>
                        <input
                            className="w-full p-2 border border-gray-300 rounded-md"
                            placeholder="Enter Your Firstname"
                        />
                    </div>
                    <div>
                        <label className="text-sm p-1">Lastname</label>
                        <input
                            className="w-full p-2 border border-gray-300 rounded-md"
                            placeholder="Enter Your Lastname"
                        />
                    </div>
                    <div>
                        <label className="text-sm p-1">Phone Number</label>
                        <input
                            className="w-full p-2 border border-gray-300 rounded-md"
                            placeholder="Enter Your phone number"
                        />
                    </div>
                    <div>
                        <label className="text-sm p-1">Gender</label>
                        <select
                            className="w-full p-2 border border-gray-300 rounded-md"
                        >
                            <option value="">Select</option>
                            <option value="">Male</option>
                            <option value="">Female</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-sm p-1">Location</label>
                            <input
                                className="w-full p-2 border border-gray-300 rounded-md"
                                placeholder="Enter Your location"
                            />
                        </div>
                    <div>
                        <label className="text-sm p-1">Password</label>
                        <input
                            type="password"
                            className="w-full p-2 border border-gray-300 rounded-md"
                            placeholder="Enter Your Password"
                        />
                    </div>
                    <button type="submit" className="w-full bg-primary text-white p-2 rounded-md">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
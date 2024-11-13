"use client"
import Link  from "next/link";

const LoginForm=()=>{
    return (
        <div className="container max-w-md  p-4 mx-4">
                <form className="space-y-4 border p-12 bg-white">
                <h1 className="text-3xl font-bold text-center">Welcome Back</h1>
                <div>
                    <label className="text-sm p-1">Email</label>
                    <input
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Enter Your Email"
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
                    <p  className="underline text-end ">Forgot Password?</p>
                    <div>
                    <button className="w-full bg-primary p-2 text-white rounded-md">
                        <Link href="/dashboard">Sign In</Link>
                    </button>
                    </div>
            <p className="text-end text-sm text-gray-400">
                    Don't have an account?
            </p>     
            <button className="w-full bg-black p-2 text-white ">
                <Link href="/signup">Sign Up</Link>
                </button>               
            </form>

        </div>
    )
}

const Login = () => {
    return (
            <div className="container flex flex-col md:flex-row items-center justify-center w-full min-h-screen">
                <LoginForm />
                <img src="https://img.freepik.com/free-vector/hand-holding-blood-bag-type-ab-donation_1308-112043.jpg" className="w-40 md:w-1/2" />
            </div>
    );
}

export default Login;
"use client";
import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
const LandingNavbar = () => {
    const router = useRouter();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null; 
    }
    return (
        <div className="container mx-auto px-4">
            <nav>
                <ul className="flex flex-col md:flex-row justify-between p-3 items-center md:items-end">
                    <li className="mb-2 md:mb-0">Home</li>
                    <li className="mb-2 md:mb-0">Process</li>
                    <li className="mb-2 md:mb-0">Testimony</li>
                    <li className="mb-2 md:mb-0">Contact Us</li>

                    <li className="bg-primary rounded-3xl w-full md:w-40 text-center p-3 text-white mb-2 md:mb-0">
                        <Link href="/signup">Sign Up</Link>
                    </li>
                    <li className="border rounded-3xl border-black w-full md:w-40 p-3 text-center">
                        <Link href="/signin">Sign In</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default LandingNavbar;
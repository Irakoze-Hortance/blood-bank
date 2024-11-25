"use client";
import React from "react";
import { Camera } from "lucide-react";

const ProfilePage=()=>{
    return(
        <div className="container flex m-2 p-2">
            <div className="container bg-white border w-1/4 p-2 m-4">
                <h1 className="text-2xl font-bold">Personal data</h1>
                <div className="relative m-4">

                    <div className="w-60 h-full rounded-full bg-gray-100 overflow-hidden">
                        <img 
                            src="https://media.istockphoto.com/id/1664886899/photo/face-thinking-and-asian-man-in-studio-for-planning-decision-or-questions-on-grey-background.jpg?s=612x612&w=0&k=20&c=8aY4VOjesC4br-F2tomtj9bFglMRSl_fCeh4gQG-RSk=" 
                            alt="Profile"
                            className="w-60 h-60 object-cover"
                        />
                        </div>
        
                        <div className="absolute bottom-2 right-40 ">
                        <button 
                            className="bg-red-500 p-2 rounded-full shadow-lg hover:bg-red-600 transition-colors"
                            aria-label="Change profile picture"
                        >
                            <Camera className="w-4 h-4 text-white" />
                        </button>
                        </div>
                </div>
                
                <div className="text-sm text-gray-300 text-center">
                <p className="text-black ">Yvette Gahamanyi</p>
                <p>January 22, 2002</p>
                <p>Ruhengeri</p>
                <p>Female</p>                    
                </div>

                <div className="flex ">
                    <div className="bg-gray-400 rounded-md m-2 p-4 w-1/2">
                        <p>AB+</p>
                        <p>Blood group</p>
                    </div>
                    <div className="bg-gray-400 rounded-md m-2 p-4 w-1/2">
                        <p>03</p>
                        <p>Donations</p>
                    </div>
                </div>

                <div className="flex justify-center">
                    <p>I'm available to donate</p>
                    <input type="radio" className="m-2"/>
                </div>                    
            </div>
        </div>      
    )
}

export default ProfilePage;
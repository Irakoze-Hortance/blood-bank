"use client";

export const Topbar=()=>{
    return(
        <div className="flex justify-between items-center p-3  mt-4">
            <h1 className="text-2xl font-bold">Volunteer</h1>
            <div className="flex items-center">
                <div className="mr-3">Julia Hahrie</div>
                <div className="bg-primary rounded-full w-10 h-10 flex justify-center items-center text-white">JD</div>
            </div>
        </div>
    )
}
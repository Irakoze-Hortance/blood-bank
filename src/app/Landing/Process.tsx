import React from "react";

const processes = [
    {
        id: 1,
        title: "Register",
        description: "Create an account with us to get started. It only takes a few minutes"
    },
    {
        id: 2,
        title: "Schedule",
        description: "Schedule a donation appointment at a center near you"
    },
    {
        id: 3,
        title: "Donate",
        description: "Donate blood and save a life"
    }
];

export const Process = () => {
    return (
        <div className="container mx-auto px-4">
            <h1 className="text-red-500 font-bold text-4xl text-center mt-6">Donation Process</h1>
            <div className="flex flex-wrap justify-center mt-6">
                {processes.map((process) => (
                    <ProcessCard key={process.id} number={process.id} title={process.title} description={process.description} />
                ))}
            </div>
        </div>
    );
};

interface ProcessCardProps {
    number: number;
    title: string;
    description: string;
}

const ProcessCard: React.FC<ProcessCardProps> = ({ number, title, description }) => {
    return (
        <div className="relative pt-8 max-w-md mx-auto m-4 w-full sm:w-1/2 lg:w-1/3">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-12 rounded-full bg-white border flex items-center justify-center">
                    <span className="text-xl font-bold text-black">{number}</span>
                </div>
            </div>

            <div className="bg-white rounded-3xl border p-8 pt-10">
                <div className="text-center space-y-4">
                    <h3 className="text-2xl font-bold text-black uppercase">
                        {title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};
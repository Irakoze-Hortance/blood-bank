import React from 'react';

export const ImageSections = () => {
  return (
    <div className="relative  w-full mt-4 rounded-lg m-4 p-4">

      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
        <div 
          className="absolute inset-0 bg-center bg-cover bg-no-repeat w-full z-0 "
          style={{
            backgroundImage: "url('https://www.hcadam.com/api/public/content/f5eac321c46942c9a3ac409d816f3a63?v=ab1c3f58')"
          }}
        />
      </div>


      <div className="relative z-20 h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ">
        <div className="space-y-4">

          <p className="text-red-500 font-semibold tracking-wide uppercase mt-4">
            Blood donation made easy
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white max-w-3xl leading-tight">
            Spare only 15 minutes and save one life
          </h1>


          <div className="pt-4">
            <button
              className="bg-red-500 text-white px-8 py-3 rounded-3xl font-medium 
                         hover:bg-red-600 transition-colors duration-300 
                         transform hover:scale-105 mb-4"
            >
              Donate now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


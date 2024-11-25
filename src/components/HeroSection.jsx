import React from 'react';
import forestNightSkyBg from './forest-night-sky-bg.jpg';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center bg-[#333333] px-6 md:px-12">
      {/* Background with Center Fade Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center mask-fade"
        style={{
          backgroundImage: `url(${forestNightSkyBg})`,
        }}
      ></div>

      {/* Foreground Content */}
      <div className="z-10 flex flex-col items-center space-y-6">
        <h1 className="text-5xl md:text-7xl font-extrabold">
          Explore My Work
        </h1>
        <p className="mt-4 text-xl md:text-2xl">
          Ben Blankenbiller - UNL Software Engineering
        </p>
        <button className="px-8 py-3 text-lg bg-gradient-to-r from-green-400 to-blue-600 hover:opacity-90 transition rounded-lg shadow-lg flex items-center justify-center space-x-3">
          <span>See My Portfolio</span>
          {/* GitHub Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="w-6 h-6"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38C13.71 14.53 16 11.54 16 8c0-4.42-3.58-8-8-8z"
          />
        </svg>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

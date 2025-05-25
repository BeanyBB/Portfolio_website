import React from 'react';
import earth from './earth.jpg';
import mars from './mars.jpg';
import moon from './moon.jpg';
import nelnet from './nelnet.jpg';
import unl from './unl.jpg';
import mutual from './mutual.jpg';

const AboutMe = () => {
  return (
    <section className="py-16 px-8">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">My Experience</h2>
      <div className="max-w-10xl mx-auto flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-6">
        {/* Earth Section */}
        <div className="relative text-white rounded-lg p-8 flex justify-center h-48 w-full md:w-1/3 flex-grow group transition-all duration-300">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover transition-opacity duration-1000 group-hover:opacity-0 rounded-lg"
            style={{
              backgroundImage: `url(${earth})`,
            }}
          ></div>

          {/* Background Color on Hover */}
          <div className="absolute inset-0 bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-lg"></div>

          {/* Foreground Content */}
          <h3 className="z-10 text-2xl font-bold group-hover:opacity-0 transition-opacity duration-1000">
            Internship Experience
          </h3>
          <p className="absolute z-10 inset-0 flex items-center justify-center px-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
            Worked with Nelnet using AngularJS to build impactful software solutions.
          </p>

          {/* Circle with Logo */}
          <div className="absolute bottom-[-20px] right-[-20px] bg-white rounded-full h-16 w-16 border-4 border-gray-700 overflow-hidden shadow-lg">
            <img src={nelnet} alt="Earth Logo" className="h-full w-full object-cover" />
          </div>
        </div>

        {/* Mars Section */}
        <div className="relative text-white rounded-lg p-8 flex justify-center h-48 w-full md:w-1/3 flex-grow group transition-all duration-300">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover transition-opacity duration-1000 group-hover:opacity-0 rounded-lg"
            style={{
              backgroundImage: `url(${mars})`,
            }}
          ></div>

          {/* Background Color on Hover */}
          <div className="absolute inset-0 bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-lg"></div>

          {/* Foreground Content */}
          <h3 className="z-10 text-2xl font-bold group-hover:opacity-0 transition-opacity duration-1000">
            Senior Design Project
          </h3>
          <p className="absolute z-10 inset-0 flex items-center justify-center px-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
            Currently working on a team of 6 to develop an event/issue/log handler and visualizer for Mutual of Omaha internal tools.
          </p>

          {/* Circle with Logo */}
          <div className="absolute bottom-[-20px] right-[-20px] bg-white rounded-full h-16 w-16 border-4 border-gray-700 overflow-hidden shadow-lg">
            <img src={unl} alt="Mars Logo" className="h-full w-full object-cover" />
          </div>
        </div>

        {/* Moon Section */}
        <div className="relative text-white rounded-lg p-8 flex justify-center h-48 w-full md:w-1/3 flex-grow group transition-all duration-300">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover transition-opacity duration-1000 group-hover:opacity-0 rounded-lg"
            style={{
              backgroundImage: `url(${moon})`,
            }}
          ></div>

          {/* Background Color on Hover */}
          <div className="absolute inset-0 bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-lg"></div>

          {/* Foreground Content */}
          <h3 className="z-10 text-2xl font-bold group-hover:opacity-0 transition-opacity duration-1000">
            Current Internship
          </h3>
          <p className="absolute z-10 inset-0 flex items-center justify-center px-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
            Working as an Information Service Devloper intern for Mutual of Omaha this Summer!
          </p>

          {/* Circle with Logo */}
          <div className="absolute bottom-[-20px] right-[-20px] bg-white rounded-full h-16 w-16 border-4 border-gray-700 overflow-hidden shadow-lg">
            <img src={mutual} alt="Moon Logo" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;



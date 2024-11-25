import React from 'react';
import spacestars from './spacestars.jpg';

const Skills = () => {
  const skills = ['AngularJS', 'React', 'Tailwind CSS', 'JavaScript', 'Git', 'Node.js'];

  return (
    <section className="rounded-section bg-[#001B3F] text-white relative mx-4 md:mx-8 p-8 md:p-12">
      {/* Background Effects */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 rounded-[inherit]"
        style={{
          backgroundImage: `url(${spacestars})`,
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#001B3F] opacity-90 rounded-[inherit]"></div>

      {/* Section Content */}
      <div className="relative z-10">
        <h2 className="text-4xl font-bold text-center mb-8 tracking-wider">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="relative flex items-center justify-center bg-gradient-to-tr from-[#0D3B66] to-[#0A2342] rounded-xl shadow-lg py-6 hover:scale-105 hover:shadow-2xl transition-transform duration-300 group overflow-hidden"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              {/* Skill Name */}
              <span className="relative z-10 text-xl font-semibold tracking-wide transition-transform duration-300 group-hover:scale-110">
                {skill}
              </span>
              {/* Rotating Border */}
              <div className="absolute inset-0 border-2 border-transparent rounded-xl group-hover:border-cyan-500 transition-all duration-500 animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;


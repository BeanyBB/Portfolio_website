import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      name: 'Do Not Disturb Feature',
      description: 'Contributed to the open-source app Zulip.',
      link: '#',
    },
    {
      name: 'Personal Portfolio',
      description: 'Built a portfolio website using React and Tailwind.',
      link: '#',
    },
    // Add more placeholder projects as needed
  ];

  return (
    <section className="py-16 px-8">
      <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#013220] rounded-lg shadow-lg p-6 hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p className="mt-2">{project.description}</p>
            <a
              href={project.link}
              className="mt-4 inline-block text-blue-400 underline"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
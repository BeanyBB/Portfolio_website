import React from 'react';
import katanaKlashImage from './katana-klash.png'; // Import the screenshot
import macIcon from './mac-logo.png'; // Import Mac logo
import windowsIcon from './windows-logo.png'; // Import Windows logo

const Projects = () => {
  const projects = [
    {
      name: 'Katana Klash',
      description:
        'A thrilling Python game where players battle enemies using katanas. Built with Pygame for a fast-paced gaming experience.',
      image: katanaKlashImage, // Path to the screenshot
      link: 'https://github.com/BeanyBB/Katana-Clash', // Link to GitHub repository
      macDownloadLink: '/Katana-Clash-Dist_mac.zip', // Path to macOS zip file in the public folder
      windowsDownloadLink: '/Katana-Clash-Dist_win.zip', // Path to Windows zip file in the public folder
    },
    {
      name: 'Personal Portfolio & Future ML Project',
      description: 'Showcasing my portfolio and an upcoming machine learning project.',
      image: null, // No image for this combined section
      subProjects: [
        {
          name: 'Personal Portfolio',
          description: 'Built a portfolio website using React and Tailwind.',
          link: 'https://github.com/BeanyBB/Portfolio_website', // Updated link
          isCurrent: true, // Flag to customize this sub-project
        },
        {
          name: 'Sentiment Analysis App (Coming Soon)',
          description:
            'A machine learning project to analyze and visualize sentiment trends using Python and TensorFlow.',
          link: '#',
        },
      ],
    },
  ];

  return (
    <section className="py-16 px-8">
      <h2 className="text-5xl font-extrabold text-center mb-12 tracking-wide text-white">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group rounded-lg overflow-hidden shadow-lg bg-gradient-to-r from-purple-600 via-blue-600 to-green-400 p-6 hover:scale-105 transition-transform duration-300"
          >
            {/* Image Section */}
            {project.image && (
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
            )}
            {/* Content Section */}
            <div className="p-6 bg-[rgba(0,0,0,0.6)] rounded-lg">
              {/* Title and Conditional "View Project" Button */}
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-white">
                  {project.name}
                </h3>
                {project.link && index === 0 && ( // Only show for the first project (Katana Klash)
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-green-500 text-white font-medium rounded-lg shadow-md hover:bg-green-600 transition"
                  >
                    View on Github
                  </a>
                )}
              </div>
              {/* Project Description */}
              <p className="text-sm text-gray-300 mb-4">{project.description}</p>
              {project.subProjects ? (
                <div className="space-y-6">
                  {project.subProjects.map((subProject, subIndex) => (
                    <div
                      key={subIndex}
                      className="bg-gray-800 p-4 rounded-md shadow-md"
                    >
                      <h4 className="text-lg font-semibold text-white">
                        {subProject.name}
                      </h4>
                      <p className="text-sm text-gray-400">
                        {subProject.description}
                      </p>
                      {subProject.isCurrent ? (
                        <a
                          href={subProject.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 inline-block px-3 py-1 bg-green-500 text-white font-medium rounded-md shadow-md hover:bg-green-600 transition"
                        >
                          View on GitHub
                        </a>
                      ) : (
                        <a
                          href={subProject.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`mt-2 inline-block px-3 py-1 ${
                            subProject.link === '#'
                              ? 'bg-gray-500 text-gray-300 cursor-not-allowed'
                              : 'bg-green-500 text-white hover:bg-green-600'
                          } font-medium rounded-md shadow-md transition`}
                        >
                          {subProject.link === '#' ? 'Coming Soon' : 'View Project'}
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  {/* Download Game Buttons */}
                  <div className="flex space-x-4 mt-4">
                    {/* Mac Download Button */}
                    {project.macDownloadLink && (
                      <a
                        href={project.macDownloadLink}
                        download
                        className="flex items-center px-4 py-2 bg-blue-500 text-white font-medium rounded-lg shadow-md hover:bg-blue-600 transition"
                      >
                        <img
                          src={macIcon}
                          alt="Mac Logo"
                          className="w-6 h-6 mr-2"
                        />
                        Download for Mac
                      </a>
                    )}
                    {/* Windows Download Button */}
                    {project.windowsDownloadLink && (
                      <a
                        href={project.windowsDownloadLink}
                        download
                        className="flex items-center px-4 py-2 bg-blue-500 text-white font-medium rounded-lg shadow-md hover:bg-blue-600 transition"
                      >
                        <img
                          src={windowsIcon}
                          alt="Windows Logo"
                          className="w-6 h-6 mr-2"
                        />
                        Download for Windows
                      </a>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;


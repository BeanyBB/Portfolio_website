import React, { useState, useEffect, useRef } from 'react';
import resumeImage from './resume.png'; // Replace with your PNG file path

const Resume = () => {
  const [isInView, setIsInView] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [isTranslationComplete, setIsTranslationComplete] = useState(false); // New state
  const fullText = 'Hover to view my Resume!';
  const alienText = 'לראות את קורות החיים של';
  const resumeRef = useRef(null);

  useEffect(() => {
    const currentRef = resumeRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
          setDisplayedText(''); // Reset text when out of view
          setIsTranslationComplete(false); // Reset translation state
        }
      },
      {
        root: null, // Observe within the viewport
        threshold: 0.6, // Trigger when 60% of the component is visible
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      let i = 0;
      let translatingText = alienText.split('');
      setDisplayedText(alienText); // Start with the full alien text

      const interval = setInterval(() => {
        if (i < fullText.length) {
          translatingText[i] = fullText[i]; // Replace alien character with English character
          setDisplayedText(translatingText.join('')); // Update the displayed text
          i++;
        } else {
          clearInterval(interval);
          setIsTranslationComplete(true); // Mark translation as complete
        }
      }, 100); // Adjust translation speed
      return () => clearInterval(interval);
    }
  }, [isInView]);

  const handleMouseEnter = () => {
    if (isTranslationComplete) {
      setIsHovered(true);

      // Automatically scroll the section into view
      if (resumeRef.current) {
        resumeRef.current.scrollIntoView({
          behavior: 'smooth', // Smooth scrolling animation
          block: 'center', // Centers the section in the viewport
        });
      }
    }
  };

  const handleMouseLeave = () => setIsHovered(false);

  return (
    <section
      ref={resumeRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`rounded-section md:mx-8 md:my-8 bg-[#002B5B] relative transition-all duration-500 ${
        isHovered ? 'h-[900px]' : 'h-[200px]'
      }`}
    >
      {/* Centered "Resume" Text */}
      <div
        className={`flex items-center justify-center absolute inset-0 transition-opacity duration-500 ${
          isHovered ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <h2 className="text-4xl font-bold text-green-500 font-mono">
          {displayedText}
          <span className="animate-pulse text-green-500">|</span> {/* Blinking cursor */}
        </h2>
      </div>

      {/* Resume Content */}
      <div
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl flex items-center justify-center gap-12 transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Resume Image */}
        <img
          src={resumeImage}
          alt="My Resume"
          className="rounded-lg shadow-lg w-[300px] md:w-[650px] object-contain"
        />

        {/* Text and Button */}
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-4xl font-bold text-white">Resume</h2>
          <a
            href={resumeImage}
            download="bblankenbiller_resume.png"
            className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;


























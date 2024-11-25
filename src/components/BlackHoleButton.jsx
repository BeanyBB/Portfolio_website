import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const BlackHoleButton = () => {
  const [state, setState] = useState('idle'); // 'idle', 'fading', 'blackhole', 'singularity', 'command'
  const [circleSize, setCircleSize] = useState(64); // Initial size of the black hole circle (in px)
  const [spinSpeed, setSpinSpeed] = useState(3); // Initial spin speed (in seconds)
  const [fakeCommands, setFakeCommands] = useState([]);
  const commandsContainerRef = useRef(null);

  // Function to generate a random string for command lines
  const generateRandomLine = () => {
    const screenWidth = window.innerWidth; // Get the screen width in pixels
    const charWidth = 8; // Approximate width of a single character in monospace font (in px)
    const lineLength = Math.floor(screenWidth / charWidth); // Calculate number of characters to fill the width
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:",.<>?/\\';
    let result = '';
    for (let i = 0; i < lineLength; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  };

  // Function to ensure enough lines to fill the screen
  const initializeLines = () => {
    if (commandsContainerRef.current) {
      const containerHeight = commandsContainerRef.current.offsetHeight;
      const lineHeight = 16; // Approximate line height for font size in `text-sm`
      const requiredLines = Math.ceil(containerHeight / lineHeight);
      const initialLines = Array.from({ length: requiredLines }, generateRandomLine);
      setFakeCommands(initialLines);
    }
  };

  const handleBlackHole = () => {

    // Transition to black hole animation after fade-out finishes
    setTimeout(() => {
      setState('blackhole');

      // Gradually increase size and speed while black hole is active
      const interval = setInterval(() => {
        setCircleSize((prev) => Math.min(prev + 30, 800)); // Grow the circle faster to a max size of 800px
        setSpinSpeed((prev) => Math.max(prev - 0.3, 0.3)); // Increase spin speed (min 0.3s per rotation)
      }, 50); // Faster updates every 50ms

      // Stop the interval and move to singularity after 2 seconds
      setTimeout(() => {
        clearInterval(interval);
        setState('singularity');
      }, 2000); // Transition to singularity after 2 seconds
    }, 500); // 500ms fade-out duration

    // Show the command prompt after the singularity screen
    setTimeout(() => {
      initializeLines();
      setState('command');
    }, 10000); // 2s (blackhole) + 8s (singularity)

    // Return to main screen after command prompt simulation
    setTimeout(() => window.location.reload(), 20000); // Total: 20s
  };

  // Simulate commands in the command prompt
  useEffect(() => {
    if (state === 'command') {
      let totalCommands = 0;

      const interval = setInterval(() => {
        if (totalCommands >= 200) {
          clearInterval(interval);
          return;
        }

        setFakeCommands((prev) => [...prev.slice(-50), generateRandomLine()]); // Keep only the last 30 lines
        totalCommands++;
      }, 25); // Speed: 50ms per command (fast)

      return () => clearInterval(interval);
    }
  }, [state]);

  // Scroll simulation: Always keep the last lines visible
  useEffect(() => {
    if (commandsContainerRef.current) {
      commandsContainerRef.current.scrollTop = commandsContainerRef.current.scrollHeight;
    }
  }, [fakeCommands]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
    <div className="w-full flex justify-center mt-10">
      {/* Main Screen Button */}
      {state === 'idle' && (
        <button
          onClick={handleBlackHole}
          className="px-6 py-3 mb-6 text-lg font-bold text-white bg-gradient-to-r from-purple-500 to-indigo-700 hover:bg-indigo-800 hover:scale-110 transition-transform rounded-full shadow-lg animate-pulse"
        >
          Enter the Black Hole
        </button>
      )}

      {/* Black Hole Animation */}
    {state === 'blackhole' && (
    <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-[3000ms] ${
        state === 'blackhole' ? 'opacity-100' : 'opacity-0'
        }`}
    >
        <div
        className={`bg-gradient-to-r from-purple-700 via-pink-500 to-yellow-400 rounded-full animate-spin transition-all duration-[3000ms] ${
            state === 'blackhole' ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
        }`}
        style={{
            width: `${circleSize}px`,
            height: `${circleSize}px`,
            animationDuration: `${spinSpeed}s`, // Dynamically adjust spin speed
        }}
        ></div>
    </div>
    )}



      {/* Singularity Screen */}
      {state === 'singularity' && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white animate-pulse">
            Welcome to the Singularity 🌌
          </h1>
        </div>
      )}

      {/* Command Prompt */}
      {state === 'command' && (
        <div
          className="fixed inset-0 bg-black text-green-500 font-mono text-sm p-4 overflow-hidden z-50 transition-opacity duration-1000"
          ref={commandsContainerRef}
        >
          <div>
            {fakeCommands.map((cmd, index) => (
              <p key={index} className="whitespace-pre-wrap">{cmd}</p>
            ))}
          </div>
        </div>
      )}
    </div>
    </motion.div>
  );
};

export default BlackHoleButton;









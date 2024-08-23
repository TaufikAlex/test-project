import React from 'react';

// Define the props interface
interface LoadingProps {
  text?: string; // Optional text prop for a loading message
}

// Loading component
const Loading: React.FC<LoadingProps> = ({ text }) => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <img
        src="/pokemonball.png" // Ensure the image path is correct
        alt="Loading"
        className="w-24 h-24 animate-spin" // Add any desired styles
      />
      {text && <p className="mt-4 text-lg text-gray-700">{text}</p>}
    </div>
  );
};

export default Loading;

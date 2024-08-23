import React from 'react';

interface BadgeProps {
  type: string;
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({ type, children }) => {
  const badgeStyles: Record<string, string> = {
    fire: 'bg-red-500 text-white',
    water: 'bg-blue-500 text-white',
    grass: 'bg-green-500 text-white',
    // Add more types as needed
  };

  return (
    <span
      className={`px-2 py-1 text-xs font-semibold rounded ${
        badgeStyles[type] || 'bg-gray-300 text-black'
      }`}
    >
      {children}
    </span>
  );
};

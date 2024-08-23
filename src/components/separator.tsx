import React from 'react';

interface SeparatorProps {
  orientation?: 'horizontal' | 'vertical';
}

export const Separator: React.FC<SeparatorProps> = ({
  orientation = 'horizontal',
}) => {
  return (
    <div
      className={`separator ${
        orientation === 'vertical'
          ? 'separator-vertical'
          : 'separator-horizontal'
      }`}
      style={{
        border: orientation === 'horizontal' ? '1px solid gray' : 'none',
        borderLeft: orientation === 'vertical' ? '1px solid gray' : 'none',
        height: orientation === 'horizontal' ? '1px' : 'auto',
        width: orientation === 'vertical' ? '1px' : '100%',
      }}
    />
  );
};

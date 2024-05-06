import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
  className: string; // Propiedad className opcional de tipo string
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

import React from "react";

/**
 * Button component.
 * @param {ButtonProps} props - The props for the button component.
 */

type ButtonProps = {
  text: string;
  type?: "button" | "submit" | "reset";
  onClick: (e: Event) => void;
};

const Button = ({ text, type, onClick }: ButtonProps) => {
  return (
    <button
      className="px-4 py-2 font-semibold bg-gray-50 text-gray-450 rounded"
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;

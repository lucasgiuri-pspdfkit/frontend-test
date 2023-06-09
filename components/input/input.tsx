import React, { useState } from "react";

type InputProps = {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  type?: "text" | "password" | "email";
};

/**
 * Input component.
 * @param {InputProps} props - The props for the input component.
 */

const Input = ({
  placeholder,
  value,
  onChange,
  type = "text", // Default type is 'text'
}: InputProps) => {
  const [defaultValue, setDefaultValue] = useState(value);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setDefaultValue(newValue);
    onChange(newValue);
  };

  return (
    <input
      type={type}
      className="w-full px-4 py-2 border border-gray-100 focus:ring-0 outline-gray-200"
      placeholder={placeholder}
      defaultValue={defaultValue}
      onChange={handleInputChange}
    />
  );
};

export default Input;

import React from "react";

type TextProps = {
  type: "title" | "subtitle" | "text" | "italic";
  text: string;
};

/**
 * Text component.
 * Renders a text element based on the specified type.
 * @param {TextProps} props - The props for the Text component.
 */
const Text = ({ type, text }: TextProps) => {
  if (type === "title") {
    return <h2 className="text-3xl font-bold text-gray-500">{text}</h2>;
  } else if (type === "subtitle") {
    return <h3 className="text-lg font-bold text-gray-450">{text}</h3>;
  }

  return (
    <span
      className={`${
        type === "italic" ? "italic" : ""
      } font-semibold text-gray-400 text-sm`}
    >
      {text}
    </span>
  );
};

export default Text;

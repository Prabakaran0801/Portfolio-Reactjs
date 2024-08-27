import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border-b border-teal-300"
    : "text-text-gray-500  hover:border-teal-500";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-4 py-2 text-lg cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;

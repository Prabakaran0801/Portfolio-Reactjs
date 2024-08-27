import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

const ProjectCard = ({ imageUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div c>
      <div
        className="h-52 md:h-72 rounded-t-lg relative group "
        style={{
          background: `url(${imageUrl})`,
          backgroundSize: "contain",
        }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-slate-500 hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-slate-500 absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>

          <Link
            href={previewUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-slate-500 hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-slate-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2"> {title}</h5>
        <p className=" text-slate-500">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;

"use client";
import React, { useTransition, useState } from "react";
// import TabButton from "./TabButton";
// import Image from "next/image";
import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
  Skill_data,
} from "@/constants";
import SkillDataProvider from "./sub/SkillDataProvider";
import SkillText from "./sub/SkillText";

// const TAB_DATA = [
//   {
//     title: "Skills",
//     id: "skills",
//     content: (
//       <ul className="list-disc pl-2">
//         <li>HTML</li>
//         <li>CSS</li>
//         <li>Bootstrap</li>
//         <li>Tailwind CSS</li>
//         <li>JavaScript</li>
//         <li>React.js</li>
//         <li>Next.js</li>
//         <li>Node.js</li>
//         <li>Express</li>
//         <li>MongoDB</li>
//       </ul>
//     ),
//   },
//   {
//     title: "Education",
//     id: "education",
//     content: (
//       <ul className="list-disc pl-2">
//         <li>Bachlore of Bussiness Administration (BBA)</li>
//         <li>MERN-Stack</li>
//       </ul>
//     ),
//   },
//   {
//     title: "Certifications",
//     id: "certifications",
//     content: (
//       <ul className="list-disc pl-2">
//         <li>ETHER Info Tech-Course completion</li>
//         <li>ETHER Info Tech-Internship</li>
//       </ul>
//     ),
//   },
// ];

const AboutSection = () => {
  // const [tab, setTab] = useState("skills");
  // const [isPending, startTransition] = useTransition();

  // const handleTabChange = (id) => {
  //   startTransition(() => {
  //     setTab(id);
  //   });
  // };
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20"
      style={{ transform: "scale(0.9)" }}
    >
      <SkillText />

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Skill_data.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Frontend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Backend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Full_stack.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Other_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
    // <section className="text-white mt-28 " id="about">
    //   <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:py-16">
    //     <Image
    //       src="/images/about-image.jpg"
    //       alt="about-img"
    //       className=" rounded-3xl"
    //       height={500}
    //       width={500}
    //       style={{ width: "100%", height: "auto" }}
    //     />
    //     <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
    //       <h2 className="text-4xl font-bold text-white mb-4"> About Me</h2>
    //       <p className="text-base mt-2 lg:text-lg">
    //         I am a full stack web developer with a passion for creating
    //         interactive and responsive web applications. I have work with
    //         JavaScript, React, Redux, Node.js, Express,MongoDB, HTML, CSS, and
    //         Git. I am a quick learner and I am always looking to expand my
    //         knowledge and skill set. I am a team player and I am excited to work
    //         with others to create amazing applications.
    //       </p>
    //       <div className="flex flex-row justify-start mt-8">
    //         <TabButton
    //           selectTab={() => handleTabChange("skills")}
    //           active={tab === "skills"}
    //         >
    //           skills
    //         </TabButton>
    //         <TabButton
    //           selectTab={() => handleTabChange("education")}
    //           active={tab === "education"}
    //         >
    //           Educations
    //         </TabButton>
    //         <TabButton
    //           selectTab={() => handleTabChange("certifications")}
    //           active={tab === "certifications"}
    //         >
    //           Certifications
    //         </TabButton>
    //       </div>
    //       <div className="mt-8">
    //         {TAB_DATA.find((t) => t.id === tab).content}
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default AboutSection;

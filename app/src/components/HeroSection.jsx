"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Resume from "../../../public/pdf/Resume.pdf";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12 ">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="col-span-8 place-self-center"
        >
          <h1 className="text-white mb-4 sm:text-left text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className=" text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Praba!",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "React JS Developer",
                1000,
              ]}
              wrapper="span"
              speed={20}
              style={{ display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p
            className="text-gray-500 text-base sm:text-left mb-6 sm:text-lg
          lg:text-xl"
          >
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications.
          </p>

          <div>
            <Link
              href=""
              className="px-6 inline-block py-3 mr-3 w-full sm:w-fit text-center rounded-full bg-gradient-to-br from-green-400 to-blue-500  hover:from-zinc-400 hover:to-cyan-300 text-black"
            >
              Hire me
            </Link>
            <a
              href={Resume}
              target="_blank"
              download="Resume"
              className="px-1 inline-block py-1 w-full sm:w-fit  text-center rounded-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-zinc-400 hover:to-cyan-300  mt-3"
            >
              {" "}
              <span
                className=" block bg-black 
              hover:from-zinc-400 text-white hover:to-cyan-300 rounded-full px-3 py-2"
              >
                Download CV
              </span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 pr-30 lg:mt-0"
        >
          <div className="rounded-full bg-gray-900 w-[250px] h-[250px] lg:w-[270px] lg:h-[270px] relative pr-24 ">
            <Image
              src="/images/hero-image.png"
              alt="heroimage"
              height={250}
              width={200}
              className="absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
const projectsData = [
  {
    id: 1,
    title: "Portfolio",
    descripton:
      "I have developed a sleek and modern portfolio website using Next.js 13, integrated with Tailwind CSS for responsive and visually appealing design. This website showcases my skills, projects, and experience in full-stack development.",
    image: "/images/projects/Portfoliot_humbnail.png",
    tag: ["All", "web"],
    gitUrl: "https://github.com/Prabakaran0801/Portfolio-Reactjs",
    previewUrl: "https://portfolio-reactjs-flame.vercel.app/",
  },

  {
    id: 2,
    title: "Crypto Website",
    descripton:
      "Developed a dynamic and data-driven cryptocurrency details website using React.js with Vite for a fast development environment. The project integrates Ant Design for an elegant and intuitive user interface, along with Redux Toolkit for state management. Leveraging Chart.js and React Chart.js 2, the platform provides real-time data visualization of cryptocurrency trends. Additional tools like Moment.js for date handling, Millify for data formatting, and React Router DOM for seamless navigation enhance the user experience. Environment variables are managed securely with dotenv, ensuring a robust and scalable solution for crypto enthusiasts.",
    image: "/images/projects/Crypto_thumbnail.png",
    tag: ["All", "web"],
    gitUrl:
      "https://github.com/Prabakaran0801/Project-Cypto/tree/main/crypto-market",
    previewUrl: "https://project-crypto-market.netlify.app/",
  },
  {
    id: 3,
    title: "Star Events Website",
    descripton:
      "Developed a comprehensive ticket booking platform utilizing Next.js 14, Clerk for seamless user authentication, and Razorpay for secure payment processing. The frontend, designed with Tailwind CSS and TypeScript, ensures a responsive and intuitive user experience. The backend is powered by MongoDB, providing efficient data handling and storage for user data and bookings. This project showcases expertise in full-stack development, integrating modern technologies to deliver a robust, user-friendly solution for event ticketing.",
    image: "/images/projects/Star_events_thumbnail.png",
    tag: ["All", "web"],
    gitUrl: "https://github.com/Prabakaran0801",
    previewUrl: "https://event-management-three-phi.vercel.app/",
  },
  {
    id: 4,
    title: "Social Eye's (Social Media) Website",
    descripton:
      "Developed a full-fledged social media platform using the MERN stack, comprising MongoDB, Express.js, React.js, and Node.js. The backend leverages powerful tools like bcrypt for secure password hashing, JSON Web Tokens for authentication, and Mongoose for efficient database management. File handling is managed with Multer and GridFS, while security is enhanced through Helmet and CORS. The frontend is crafted using React.js with Material-UI for a responsive and visually appealing user interface, along with state management handled by Redux Toolkit. Form validation is streamlined with Formik and Yup, and the site is optimized with Web Vitals for performance metrics. This project demonstrates expertise in building secure, scalable, and user-friendly social networking applications.",
    image: "/images/projects/1.png",
    tag: ["All", "web"],
    gitUrl: "https://github.com/Prabakaran0801/SocialEyes",
    previewUrl: "/",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagchange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row sticky justify-center  items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagchange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagchange}
          name="web"
          isSelected={tag === "web"}
        />
        <ProjectTag
          onClick={handleTagchange}
          name="mobile"
          isSelected={tag === "mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.descripton}
              imageUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;

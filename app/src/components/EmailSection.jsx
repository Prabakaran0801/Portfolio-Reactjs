"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccessMessage("Email sent successfully!");
        setFormData({ email: "", subject: "", message: "" });
      } else {
        setErrorMessage("Failed to send email. Please try again.");
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again.");
    }

    setIsSubmitting(false);
  };

  return (
    <section
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
      id="contact"
    >
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-slate-400 mb-4 max-w-md">
          My inbox is always open to you! Whether you have a question or just
          want to say hi.
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/Prabakaran0801" target="_blank">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>

          <Link
            href="https://www.linkedin.com/in/prabakaran-m08/"
            target="_blank"
          >
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div className="z-10">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="youremail@gmail.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just Saying hi"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="bg-emerald-300 hover:bg-emerald-500 text-white font-medium py-2.5 px-2.5 rounded-lg w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
          {successMessage && (
            <p className="text-green-500 mt-4">{successMessage}</p>
          )}
          {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;

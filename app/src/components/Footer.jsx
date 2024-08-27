import Image from "next/image";
import Link from "next/link";
import Gmail from "../../../public/gmail.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";

const Footer = () => {
  return (
    <footer className="footer sticky border border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-8 flex flex-col md:flex  justify-between md:flex-row items-center gap-2">
        <div className="flex  justify-center items-center">
          <Image
            src={Gmail}
            height={30}
            width={30}
            alt="Gmail Icon"
            className="text-white"
          />
          <Link
            href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=DmwnWtDvfTHMjFwSwXgMTjHsHcKWcHXscJdWDqzhQkCHvSzpzTkxwShJrbdZSKtzHZFfGvZTTpqB"
            target="_blank"
            className="ml-3 text-emerald-300  hover:text-emerald-500"
          >
            mprabakaran0108@gmail.com
          </Link>
        </div>
        <div className="flex  justify-center items-center">
          <Image
            src={LinkedinIcon}
            height={30}
            width={30}
            alt="Linkedin Icon"
          />
          <Link
            href="https://www.linkedin.com/in/prabakaran-m08/"
            target="_blank"
            className="ml-3 text-emerald-300  hover:text-emerald-500"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

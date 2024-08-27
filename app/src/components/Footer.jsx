import Image from "next/image";
import Link from "next/link";
import Gmail from "../../../public/gmail.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";

const Footer = () => {
  return (
    <footer className="footer sticky border border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
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
            className="ml-5 text-emerald-300  hover:text-emerald-500"
          >
            mprabakaran0108@gmail.com
          </Link>
        </div>

        <Link
          href="https://www.linkedin.com/in/prabakaran-m08/"
          target="_blank"
        >
          <Image src={LinkedinIcon} alt="Linkedin Icon" />
        </Link>

        {/* <p className="text-slate-600 ">All rights reserved.</p> */}
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="border-t mt-10 py-6 text-center text-sm text-gray-600 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-5">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Mohamed Ragab Bahr — Released under the MIT License.
        </p>


        <div className="flex gap-5 justify-center text-gray-600">
          <a
            href="mailto:mobahr1998@gmail.com"
            className="hover:text-sky-600 transition"
            aria-label="Email"
          >
            <LuMail size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/mohamed-bahr-84656a278/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-600 transition"
            aria-label="LinkedIn"
          >
            <LuLinkedin size={18} />
          </a>
          <a
            href="https://github.com/MoBahr98"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-600 transition"
            aria-label="GitHub"
          >
            <LuGithub size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

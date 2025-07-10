import React from "react";
import { FaGithub, FaLinkedin, FaPinterest } from "react-icons/fa";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="py-8 px-[7vw] lg:px-[15vw] bg-[#fff0f5] font-sans">
      <div className="container mx-auto text-center">
        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center space-x-6 mt-2">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "projects" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-brown-700 text-brown-700 text-base font-bold my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mt-6 text-brown-700">
          <a
            href="https://github.com/pooja742"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-[#8245ec] transition-transform transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/pooja-nunavath/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-[#8245ec] transition-transform transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="http://pinterest.com/delusion_28"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-[#8245ec] transition-transform transform hover:scale-110"
          >
            <FaPinterest />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuItems = [
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isScrolled
          ? 'bg-[rgba(255,245,247,0.3)] backdrop-blur-sm shadow-none'
          : 'bg-transparent'
      }`}
    >
      <div className='py-5 flex justify-between items-center'>
        {/* Logo */}
        <div className='text-lg font-semibold cursor-pointer'>
          <span className='text-[#7f1d1d]'>Pooja's</span>
          <span className='text-[#7f1d1d]'> </span>
          <span className='text-[#7f1d1d]'>Portfolio</span>
        </div>

        {/* Desktop Menu */}
        <ul className='hidden md:flex space-x-8 text-[#7f1d1d]'>
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#b91c1c] ${
                activeSection === item.id ? 'text-[#b91c1c]' : ''
              }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>{item.label}</button>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className='hidden md:flex space-x-4'>
          <a
            href='https://github.com/pooja742'
            target='_blank'
            rel='noopener noreferrer'
            className='text-[#7f1d1d] hover:text-[#b91c1c]'
          >
            <FaGithub size={24} />
          </a>
          <a
            href='https://www.linkedin.com/in/pooja-nunavath/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-[#7f1d1d] hover:text-[#b91c1c]'
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className='md:hidden'>
          {isOpen ? (
            <FiX
              className='text-3xl text-[#b91c1c] cursor-pointer'
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className='text-3xl text-[#b91c1c] cursor-pointer'
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#f4f4f5] bg-opacity-80 backdrop-blur-lg rounded-lg shadow-lg md:hidden'>
          <ul className='flex flex-col items-center space-y-4 py-4 text-[#7f1d1d]'>
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-white ${
                  activeSection === item.id ? 'text-[#b91c1c]' : ''
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>{item.label}</button>
              </li>
            ))}
            <div className='flex space-x-4 pt-2'>
              <a
                href='https://github.com/pooja742'
                target='_blank'
                rel='noopener noreferrer'
                className='text-[#7f1d1d] hover:text-white'
              >
                <FaGithub size={24} />
              </a>
              <a
                href='https://www.linkedin.com/in/pooja-nunavath/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-[#7f1d1d] hover:text-white'
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

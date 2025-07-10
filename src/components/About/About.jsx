import React from 'react';
import Typewriter from 'typewriter-effect';
import aboutImage from 'C:/Users/N POOJA/Downloads/portfolio website/myportfolio/src/assets/images/aboutme.jpg';
import aboutMe from '../../assets/images/aboutme.jpg';

const About = () => {
  return (
    <section
      id='about'
      className='pt-10 pb-16 px-[7vw] md:px-[10vw] lg:px-[15vw] font-sans min-h-[90vh] flex items-center'
    >
      <div className='flex flex-col-reverse md:flex-row items-center justify-between gap-10 w-full'>
        {/* Left Side */}
        <div className='w-full md:w-1/2 text-left'>
          {/* Greeting */}
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-brown-700 mb-2 leading-tight'>
            Hello, I am
          </h1>

          {/* Name */}
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-brown-700 mb-4 leading-tight'>
            Pooja
          </h2>

          {/* Typewriter Animation */}
          <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight'>
            <span className='text-[#c2185b] mr-2'>I am</span>
            <Typewriter
              options={{
                strings: [
                  'a Student',
                  'a Passionate Learner',
                  'Curious & Consistent',
                  'a Beginner',
                ],
                autoStart: true,
                loop: true,
                delay: 100,
                deleteSpeed: 50,
                pauseFor: 2000,
              }}
              onInit={(typewriter) => {
                const cursor = document.querySelector('.Typewriter__cursor');
                if (cursor) cursor.style.color = '#8245ec';
              }}
            />
          </h3>

          {/* About Paragraph */}
          <p className='text-base sm:text-lg md:text-lg text-rose-600 font-medium mb-6 leading-relaxed'>
            I am a Data Science student at CMR Institute of Technology, Hyderabad.
            A beginner in the world of coding with a strong interest in Data
            Structures, Algorithms, and Core CS concepts. Currently exploring AI/ML
            and Web Development through hands-on projects. Skilled in tools like Git,
            Power BI, and basic AWS, with a good understanding of databases and
            version control. Eager to grow by applying my knowledge to real-world
            problems.
          </p>

          {/* Resume Button */}
          <a
            href='https://drive.google.com/file/d/18y_VJCGeSFJUMSWHEtfBsXhhvw9d6nfL/view?usp=sharing'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block text-white py-2 px-6 rounded-full text-base font-semibold transition duration-300 transform hover:scale-105'
            style={{
              background: 'linear-gradient(90deg, #ec4899, #fbcfe8)',
              boxShadow: '0 0 4px #ec4899, 0 0 8px #f9a8d4, 0 0 20px #f9a8d4',
            }}
          >
            Download Resume
          </a>
        </div>

        {/* Right Side (Image with Glow) */}
        <div className='w-full md:w-1/2 flex justify-center md:justify-end'>
          <div className='w-80 h-80 md:w-96 md:h-96 rounded-lg overflow-hidden relative shadow-xl glow-box'>
            <img
              src={aboutImage}
              alt='Pooja'
              className='w-full h-full object-cover rounded-lg'
            />
          </div>
        </div>
      </div>

      {/* Glow effect styling */}
      <style>{`
        .glow-box::before {
          content: '';
          position: absolute;
          top: -12px;
          left: -12px;
          right: -12px;
          bottom: -12px;
          border-radius: 1rem;
          background: radial-gradient(circle, rgba(252,231,243,0.4) 0%, rgba(236,72,153,0.3) 40%, transparent 80%);
          z-index: -1;
          filter: blur(25px);
          animation: glow-pulse 3s infinite ease-in-out;
        }

        @keyframes glow-pulse {
          0%, 100% {
            opacity: 0.8;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default About;

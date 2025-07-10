import React from 'react';
import { education } from '../../constants';

const Education = () => {
  return (
    <section
      id='education'
      className='py-24 px-[7vw] md:px-[10vw] lg:px-[16vw] bg-[#fff0f5] font-sans'
    >
      {/* Section Header */}
      <div className='text-center mb-16'>
        <h2 className='text-4xl font-bold text-[#c2185b]'>EDUCATION</h2>
        <div className='w-32 h-1 bg-[#c2185b] mx-auto mt-4'></div>
        <p className='text-gray-600 mt-4 text-lg font-medium'>
         Education built my foundation in tech and problem-solving.
        </p>
      </div>

      {/* Timeline */}
      <div className='relative'>
        {/* Vertical Line */}
        <div className='absolute sm:left-1/2 left-4 w-1 bg-[#c2185b] h-full'></div>

{education.map((edu, index) => (
  <div
    key={edu.id}
    className={`mb-10 flex flex-col sm:flex-row items-center ${
      index % 2 === 0 ? 'sm:justify-start' : 'sm:justify-end'
    }`}
  >
    {/* Timeline Circle */}
    <div className='absolute sm:left-1/2 left-4 transform -translate-x-1/2 bg-white border-4 border-[#f472b6] w-10 h-10 rounded-full flex justify-center items-center z-10'>
    </div>

    {/* Content Box */}
    <div
      className={`w-full sm:max-w-md p-6 bg-white border border-pink-300 rounded-2xl shadow-lg transition transform hover:scale-105 ${
        index % 2 === 0 ? 'sm:ml-12' : 'sm:mr-12'
      } mt-6`}
    >
      <div className='flex flex-col gap-2'>
        <h3 className='text-xl font-semibold text-[#c2185b]'>{edu.degree}</h3>
        <h4 className='text-md text-gray-600'>{edu.school}</h4>
        <p className='text-sm text-gray-500'>{edu.date}</p>
      </div>
      <p className='text-sm text-gray-700 mt-3 font-semibold'>
        Grade: {edu.grade}
      </p>
      <p className='text-sm text-gray-600 mt-2'>{edu.desc}</p>
    </div>
  </div>
))}

      </div>
    </section>
  );
};

export default Education;

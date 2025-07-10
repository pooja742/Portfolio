// src/components/Skills/Skills.jsx
import React from "react";

const skillsData = {
  Technical: [
    { name: "HTML", level: "Proficient", link: "https://drive.google.com/file/d/16eXAyLP1XmTwY6kcn3zzpxY9r-8fczJm/view?usp=sharing" },
    { name: "IT Fundamentals", level: "Proficient", link: "https://pwc.tekstac.com/blocks/tekbadges/badge.php?id=25980&text=UUskK" },
    { name: "GenAI", level: "Proficient", link: "https://learn.microsoft.com/en-us/users/npooja-6742/achievements/4gx3gqpk" },
    { name: "Java", level: "Intermediate", link: "https://pwc.tekstac.com/blocks/tekbadges/badge.php?id=32522&text=riysX" },
    { name: "CSS", level: "Intermediate", link: "https://drive.google.com/file/d/16eXAyLP1XmTwY6kcn3zzpxY9r-8fczJm/view?usp=sharing" },
    { name: "RDBMS", level: "Intermediate", link: "https://pwc.tekstac.com/blocks/tekbadges/badge.php?id=27460&text=mxluo" },
    { name: "Power BI", level: "Intermediate", link: "https://drive.google.com/file/d/1pv3h5q3Tv6TqRXgwbWAMhuvYDzy-6o5H/view?usp=sharing" },
    { name: "Data Science", level: "Moderate", link: "https://drive.google.com/file/d/1t38Rya97rNRK6uDTiSqzPvy4SwrLEK8m/view?usp=sharing" },
    { name: "JavaScript", level: "Beginner", link: "https://drive.google.com/file/d/16pp5iv3M8BNHvyndGnS7DxGOmqFxJogQ/view?usp=sharing" },
    { name: "MongoDB", level: "Beginner", link: "https://drive.google.com/file/d/1xP3NC7rinffELdlO8UXAD-Kxe6Dtk9Gy/view?usp=sharing" },
    { name: "Python", level: "Beginner", link: "https://drive.google.com/file/d/1K6S_dAhwpVi0xmpM5pK3cn2NBtdwuFP3/view?usp=sharing" },
    { name: "AWS", level: "Beginner", link: "https://drive.google.com/file/d/1VJzS4gV42_tHCf0wmNlaZPfGcVmQ4a5V/view?usp=sharing" },
    { name: "Android", level: "Beginner", link: "https://drive.google.com/file/d/1NprvzGrJjUpiRz8vzZrUFyEzPdOdFQfJ/view?usp=sharing" },
    { name: "AIML", level: "Beginner", link: "https://drive.google.com/file/d/1nqOS2UsR9D63psWZXMCGXtvFBtjpxR2v/view?usp=sharing" },
    { name: "Cybersecurity", level: "Beginner", link: "https://drive.google.com/file/d/1y2yP_0zktmXqpl__tZ0_5Ao-O5XOXFXt/view?usp=sharing" },
    { name: "DSA", level: "Beginner", link: "https://smartinterviews.in/certificate/17dc9099" },
  ],

  Others: [
    { name: "ServiceNow", level: "Beginner", link: "https://learning.servicenow.com/lxp?id=nl_public&user=22r01a6742408068" },
    { name: "Salesforce", level: "Basic", link: "https://www.salesforce.com/trailblazer/npooja" },
    { name: "SAP", level: "Basic", link: "https://pwc.tekstac.com/blocks/tekbadges/badge.php?id=36350" },
    { name: "Content Writing", level: "Proficient", link: "https://drive.google.com/file/d/1d7_KcaJGLy0DVUGumNoaf7LNms2LL4S9/view?usp=sharing" },
    { name: "Presentation Skills", level: "Proficient", link: "https://drive.google.com/file/d/17dN05_I-UK3R8Vn8YgfSgivsBM6pii9C/view?usp=sharing" },
    { name: "Active Participation", level: "Proficient", link: "https://drive.google.com/file/d/1r7TSiwgWNCNKouNol0_-OGxjXBut3sk7/view?usp=sharing" },
    { name: "MS Excel", level: "Intermediate" },
    { name: "MS Word", level: "Intermediate" },
    { name: "MS PowerPoint", level: "Intermediate" },
  ],
};

const SkillBox = ({ title, skills }) => (
  <div className="w-full md:w-1/2 p-4 transition transform hover:scale-105">
    <div className="rounded-3xl border-4 border-pink-700 bg-white shadow-lg shadow-gray-300 p-6">
      <h3 className="text-center text-pink-700 text-2xl font-bold mb-4">{title}</h3>
      <div className="flex flex-wrap gap-3 justify-center">
        {skills.map((skill) => (
          <a
            key={skill.name}
            href={skill.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-4 py-2 rounded-2xl border border-pink-300 bg-pink-100 text-center shadow-md hover:shadow-lg transition-all duration-300"
          >
            <span className="block text-pink-700 font-bold text-sm">{skill.name}</span>
            <span className="block text-pink-500 text-xs mt-1 group-hover:underline">{skill.level}</span>
            <div className="absolute inset-0 rounded-2xl ring-pink-400 ring-1 opacity-0 group-hover:opacity-100 transition duration-300 animate-pulse"></div>
          </a>
        ))}
      </div>
    </div>
  </div>
);

const Skills = () => (
  <section
    id="skills"
    className="py-20 px-[8vw] bg-white font-sans"
  >
    <div className="text-center mb-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-pink-700">SKILLS</h2>
      <div className="w-24 h-1 bg-pink-600 mx-auto mt-2"></div>
      <p className="text-gray-600 mt-4 text-lg font-medium">
        Skills I’ve built through learning and experience.
      </p>
    </div>

    {/* Responsive Two Column Layout */}
    <div className="flex flex-col lg:flex-row gap-8">
      <SkillBox title="Technical" skills={skillsData.Technical} />
      <SkillBox title="Others" skills={skillsData.Others} />
    </div>
  </section>
);

export default Skills;

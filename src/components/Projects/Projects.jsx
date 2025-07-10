import React, { useState } from 'react';
import { projects } from '../../constants';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (proj) => setSelectedProject(proj);
  const closeModal = () => setSelectedProject(null);

  return (
    <section
      id="projects"
      className="py-24 px-[7vw] md:px-[10vw] bg-[#fff0f5] font-sans border-t border-pink-200"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-[#c2185b]">PROJECTS</h2>
        <div className="w-32 h-1 bg-[#c2185b] mx-auto mt-4"></div>
        <p className="text-gray-600 mt-4 text-lg font-medium">
          Innovative ideas turned into code — my projects showcase.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj) => (
          <div
            key={proj.id}
            onClick={() => openModal(proj)}
            className="bg-white border border-[#c2185b] rounded-2xl p-6 cursor-pointer transition transform hover:scale-105"
          >
            <h3 className="bg-gray-50 p-2 text-center font-semibold text-[#c2185b] mb-4 rounded">
              {proj.title}
            </h3>
            <div className="flex justify-center gap-4 mb-4">
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-100 text-[#c2185b] font-bold border border-purple-400 px-4 py-1 rounded"
              >
                View Code
              </a>
              {proj.webapp && (
                <a
                  href={proj.webapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-100 text-[#c2185b] font-bold border border-purple-400 px-4 py-1 rounded"
                >
                  View Live
                </a>
              )}
            </div>
            <p className="text-[#c2185b] mb-4">{proj.description}</p>
            <div className="flex flex-wrap gap-2">
              {proj.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-[#ffc0cb] text-white px-3 py-1 font-medium rounded-full border border-[#c2185b]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl w-full max-w-md p-6 relative shadow-2xl">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-xl font-bold text-[#c2185b]"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold text-[#c2185b] mb-4">{selectedProject.title}</h3>
            <p className="text-[#c2185b] mb-4">{selectedProject.description}</p>
            <div className="flex gap-4 mb-4">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-100 text-[#c2185b] font-bold px-4 py-2 rounded border border-purple-400"
              >
                View Code
              </a>
              {selectedProject.webapp && (
                <a
                  href={selectedProject.webapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-100 text-[#c2185b] font-bold px-4 py-2 rounded border border-purple-400"
                >
                  View Live
                </a>
              )}
            </div>
            <div className="flex gap-2 flex-wrap">
              {selectedProject.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-[#ffc0cb] text-white px-3 py-1 font-medium rounded-full border border-[#c2185b]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;

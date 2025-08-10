import { projects } from '../data/content.js';
import ProjectCard from '../components/ProjectCard';
import React, { useState, useEffect } from 'react';

const ProjectCardSkeleton = () => (
  <div className="glass rounded-xl shadow-card p-6 flex flex-col h-full bg-gradient-to-br from-transparent to-night-gradient-teal-end/10 animate-pulse">
    <div className="w-full h-48 bg-gray-700 rounded-xl mb-4"></div>
    <div className="h-6 bg-gray-700 rounded w-3/4 mb-2"></div>
    <div className="h-4 bg-gray-700 rounded w-full mb-4"></div>
    <div className="h-4 bg-gray-700 rounded w-5/6 mb-4"></div>
    <div className="h-4 bg-gray-700 rounded w-1/2 mb-4"></div>
    <div className="flex justify-between mt-auto space-x-4">
      <div className="h-10 bg-gray-700 rounded-full w-1/2"></div>
      <div className="h-10 bg-gray-700 rounded-full w-1/2"></div>
    </div>
  </div>
);

const Projects = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Show skeleton for 1.5 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="projects" className="py-20 px-4">
      <h2 className="text-4xl font-serif font-bold text-center text-comet-white mb-12">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading ? (
          Array.from({ length: 3 }).map((_, index) => <ProjectCardSkeleton key={index} />)
        ) : (
          projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))
        )}
      </div>
    </section>
  );
};

export default Projects;

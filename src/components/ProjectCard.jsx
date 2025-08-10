import AIEvidence from './AIEvidence';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="glass rounded-xl shadow-card p-6 flex flex-col h-full bg-gradient-to-br from-transparent to-night-gradient-teal-end/10"
      whileHover={{ y: -8, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-xl mb-4" loading="lazy" />
      <h3 className="text-2xl font-header font-bold text-comet-white mb-2">{project.title}</h3>
      <p className="text-comet-white text-sm mb-4 flex-grow">{project.description}</p>

      <div className="mb-4">
        <p className="text-comet-white text-sm font-semibold">Category: <span className="font-normal">{project.category}</span></p>
        <p className="text-comet-white text-sm font-semibold">Technologies: <span className="font-normal">{project.technologies.join(', ')}</span></p>
        <p className="text-comet-white text-sm font-semibold">AI Tools Used: <span className="font-normal">{project.aiToolsUsed.join(', ')}</span></p>
        <p className="text-comet-white text-sm font-semibold">AI Impact: <span className="font-normal">{project.aiImpact}</span></p>
      </div>

      {project.aiEvidence && <AIEvidence evidence={project.aiEvidence} />}

      <div className="flex justify-between mt-4 space-x-4">
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-4 py-2 bg-deep-sky-blue text-comet-white rounded-full text-sm font-medium shadow-md hover:bg-night-gradient-teal-end transition-all duration-300"
          >
            Live Demo
          </a>
        )}
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-4 py-2 bg-warm-earth-brown text-comet-white rounded-full text-sm font-medium shadow-md hover:bg-soft-gold transition-all duration-300"
          >
            GitHub Repo
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;

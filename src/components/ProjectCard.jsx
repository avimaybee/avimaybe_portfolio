import AIEvidence from './AIEvidence';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-neutral-off-white rounded-lg shadow-lg p-6">
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
      <h3 className="text-2xl font-serif font-bold text-primary-deep-sky-blue mb-2">{project.title}</h3>
      <p className="text-desaturated-gray">{project.description}</p>
      {project.aiEvidence && <AIEvidence evidence={project.aiEvidence} />}
    </div>
  );
};

export default ProjectCard;

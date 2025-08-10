import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ReactSVG } from 'react-svg';
import skillsData from '../data/skills.json';
import { projects } from '../data/content';

const SkillsConstellation = ({ prefersReducedMotion }) => {
  const [activeSkill, setActiveSkill] = useState(null);
  const svgRef = useRef(null);

  // Calculate path length for animation
  const [pathLengths, setPathLengths] = useState({});

  useEffect(() => {
    if (svgRef.current) {
      const newPathLengths = {};
      skillsData.forEach(skill => {
        skill.connections.forEach(connectionId => {
          const connectedSkill = skillsData.find(s => s.id === connectionId);
          if (connectedSkill) {
            const pathId = `path-${skill.id}-${connectedSkill.id}`;
            const reversedPathId = `path-${connectedSkill.id}-${skill.id}`;
            // Only add if not already added (to avoid duplicates for bidirectional connections)
            if (!newPathLengths[pathId] && !newPathLengths[reversedPathId]) {
              const pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
              const d = `M${skill.position.x},${skill.position.y} L${connectedSkill.position.x},${connectedSkill.position.y}`;
              pathElement.setAttribute("d", d);
              svgRef.current.appendChild(pathElement);
              newPathLengths[pathId] = pathElement.getTotalLength();
              svgRef.current.removeChild(pathElement);
            }
          }
        });
      });
      setPathLengths(newPathLengths);
    }
  }, []);

  const handleSkillHover = (skill) => {
    setActiveSkill(skill);
  };

  const handleSkillLeave = () => {
    setActiveSkill(null);
  };

  const transition = prefersReducedMotion ? { duration: 0 } : { duration: 2, ease: "easeInOut" };
  const springTransition = prefersReducedMotion ? { type: "tween", duration: 0 } : { type: "spring", stiffness: 200 };
  const tooltipTransition = prefersReducedMotion ? { duration: 0 } : { type: "spring", stiffness: 400, damping: 20 };

  return (
    <section id="skills" className="py-20 px-4 bg-deep-sky-blue text-comet-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center z-10 relative">
        <h2 className="text-5xl font-header font-bold mb-12">My Skills Constellation</h2>
        <p className="text-lg md:text-xl mb-12 leading-relaxed">Explore my core competencies and how they connect, powered by AI.</p>

        <div className="relative w-full" style={{ paddingBottom: '75%' }}> {/* Aspect ratio container */}
          <svg
            ref={svgRef}
            viewBox="0 0 800 600"
            className="absolute top-0 left-0 w-full h-full"
          >
            {/* Render connections */}
            {skillsData.map(skill => (
              skill.connections.map(connectionId => {
                const connectedSkill = skillsData.find(s => s.id === connectionId);
                if (!connectedSkill) return null;

                const pathId = `path-${skill.id}-${connectedSkill.id}`;
                const reversedPathId = `path-${connectedSkill.id}-${skill.id}`;

                // Only render if this path hasn't been rendered in reverse
                if (pathLengths[pathId] || pathLengths[reversedPathId]) {
                  return (
                    <motion.path
                      key={pathId}
                      d={`M${skill.position.x},${skill.position.y} L${connectedSkill.position.x},${connectedSkill.position.y}`}
                      stroke="#ecd7cf"
                      strokeWidth="1"
                      initial={{ strokeDasharray: pathLengths[pathId] || pathLengths[reversedPathId], strokeDashoffset: pathLengths[pathId] || pathLengths[reversedPathId] }}
                      animate={{ strokeDashoffset: 0 }}
                      transition={transition}
                    />
                  );
                }
                return null;
              })
            ))}

            {/* Render stars */}
            {skillsData.map((skill, index) => (
              <motion.circle
                key={skill.id}
                cx={skill.position.x}
                cy={skill.position.y}
                r="8"
                fill="#fafbff"
                className="cursor-pointer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={prefersReducedMotion ? { duration: 0 } : { delay: index * 0.1, type: "spring", stiffness: 200 }}
                onHoverStart={() => handleSkillHover(skill)}
                onHoverEnd={handleSkillLeave}
              />
            ))}
          </svg>
        </div>

        {/* Tooltip */}
        {activeSkill && (
          <motion.div
            className="absolute bg-deep-sky-blue text-comet-white p-4 rounded-lg shadow-lg glass-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={tooltipTransition}
            style={{
              top: activeSkill.position.y + 20, // Adjust position relative to star
              left: activeSkill.position.x + 20,
              transform: 'translate(-50%, -50%)', // Center the tooltip
              zIndex: 100,
            }}
          >
            <h4 className="font-bold text-lg mb-2">{activeSkill.name}</h4>
            <p className="text-sm">Level: {activeSkill.details.level}</p>
            <p className="text-sm">AI Impact: {activeSkill.details.aiImpact}</p>
            {activeSkill.details.projects.length > 0 && (
              <div className="mt-2">
                <p className="text-sm font-semibold">Related Projects:</p>
                <ul className="list-disc list-inside text-sm">
                  {activeSkill.details.projects.map(projectId => {
                    const project = projects.find(p => p.id === projectId);
                    return project ? <li key={projectId}>{project.title}</li> : null;
                  })}
                </ul>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default SkillsConstellation;

import React, { useRef, useEffect, useCallback } from 'react';

const CosmicDust = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const animationFrameId = useRef(null);

  const createParticle = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return null;

    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.5 + 0.5, // 0.5 to 2
      speedX: (Math.random() - 0.5) * 0.5, // -0.25 to 0.25
      speedY: (Math.random() - 0.5) * 0.5, // -0.25 to 0.25
      opacity: Math.random() * 0.5 + 0.2, // 0.2 to 0.7
    };
  }, []);

  const drawParticles = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.current.forEach(particle => {
      particle.x += particle.speedX;
      particle.y += particle.speedY;

      // Wrap particles around the canvas
      if (particle.x < 0) particle.x = canvas.width;
      if (particle.x > canvas.width) particle.x = 0;
      if (particle.y < 0) particle.y = canvas.height;
      if (particle.y > canvas.height) particle.y = 0;

      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
      ctx.fill();
    });

    animationFrameId.current = requestAnimationFrame(drawParticles);
  }, []);

  const initParticles = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    particles.current = [];
    for (let i = 0; i < 100; i++) { // Number of particles
      particles.current.push(createParticle());
    }

    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
    }
    animationFrameId.current = requestAnimationFrame(drawParticles);
  }, [createParticle, drawParticles]);

  useEffect(() => {
    initParticles();

    const handleResize = () => initParticles();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [initParticles]);

  return <canvas ref={canvasRef} className="absolute inset-0 z-[-3] pointer-events-none"></canvas>;
};

export default CosmicDust;

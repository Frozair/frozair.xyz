'use client';

import React, { useEffect, useRef } from 'react';

interface Props {
  numParticles?: number;
  particleRGB?: string;
  particleOpacity?: string | number;
  bgColor?: string;
}

const AnimatedBackground: React.FC<Props> = ({
  numParticles = 50,
  particleRGB = '51, 153, 255',
  particleOpacity = Math.min(Math.max(Math.random() * 0.5, 0.5), 0.3),
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // canvas.width = canvas.parentElement!.offsetWidth;
      // canvas.height = canvas.parentElement!.offsetHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Particles configuration
    const particlesArray: Particle[] = [];

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.color = `rgba(${particleRGB}, ${particleOpacity})`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas!.width) this.x = 0;
        else if (this.x < 0) this.x = canvas!.width;

        if (this.y > canvas!.height) this.y = 0;
        else if (this.y < 0) this.y = canvas!.height;
      }

      draw() {
        ctx!.fillStyle = this.color;
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    const init = () => {
      for (let i = 0; i < numParticles; i++) {
        particlesArray.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (const particle of particlesArray) {
        particle.update();
        particle.draw();
      }
      
      requestAnimationFrame(animate);
    };

    // Wait to animate the component until after it's loaded and in the DOM.
    // This is kind of hacky and I should probably find a better way to animate this
    // once the component finishes loading.
    const removeOpacity = () => {
      canvasRef.current?.classList.add('animate-in',  'fade-in');
      canvasRef.current?.classList.remove('opacity-0');
    };

    init();
    animate();
    removeOpacity();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      className="absolute inset-0 -z-10 opacity-0"
      style={{ transitionDuration: '2500ms' }}
    />
  );
};

export default AnimatedBackground;

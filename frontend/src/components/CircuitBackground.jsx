import React, { useEffect, useRef } from 'react';

const CircuitBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speed = Math.random() * 2 + 1;
        // 0 = right, 1 = down, 2 = left, 3 = up
        this.direction = Math.floor(Math.random() * 4);
        this.life = Math.random() * 100 + 50;
        this.color = Math.random() > 0.5 ? '#60A5FA' : '#A855F7'; // Blue or Purple
        this.history = [];
        this.historyMax = 10;
      }

      update() {
        this.life--;
        if (this.life <= 0) {
          this.reset();
          return;
        }

        // Store history for tail effect
        this.history.push({ x: this.x, y: this.y });
        if (this.history.length > this.historyMax) {
          this.history.shift();
        }

        // Move based on direction
        if (this.direction === 0) this.x += this.speed;
        else if (this.direction === 1) this.y += this.speed;
        else if (this.direction === 2) this.x -= this.speed;
        else if (this.direction === 3) this.y -= this.speed;

        // Randomly change direction (90 degrees only)
        if (Math.random() < 0.02) {
           const turn = Math.random() > 0.5 ? 1 : -1;
           this.direction = (this.direction + turn + 4) % 4;
        }

        // Boundary check
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
          this.reset();
        }
      }

      draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

        // Draw tail
        if (this.history.length > 1) {
          ctx.beginPath();
          ctx.strokeStyle = this.color;
          ctx.lineWidth = 0.5;
          ctx.moveTo(this.history[0].x, this.history[0].y);
          for (let i = 1; i < this.history.length; i++) {
             ctx.lineTo(this.history[i].x, this.history[i].y);
          }
          ctx.lineTo(this.x, this.y);
          ctx.stroke();
        }
      }
    }

    const init = () => {
      particles = [];
      const particleCount = window.innerWidth < 768 ? 30 : 60;
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      // Create trailing effect by drawing semi-transparent rectangle
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40"
    />
  );
};

export default CircuitBackground;

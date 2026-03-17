import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const BrandBuilder = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let stars = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Star {
      constructor() {
        this.reset();
        // Start at random opacity to avoid "popping" in all at once
        this.opacity = Math.random();
        this.fadingIn = Math.random() > 0.5;
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2;
        this.speed = Math.random() * 0.5 + 0.1;
      }

      update() {
        // Move slightly
        this.y -= this.speed;
        
        // Fade in/out effect
        if (this.fadingIn) {
            this.opacity += 0.01;
            if (this.opacity >= 1) this.fadingIn = false;
        } else {
            this.opacity -= 0.01;
            if (this.opacity <= 0.2) this.fadingIn = true;
        }

        // Reset if goes off screen
        if (this.y < 0) {
          this.reset();
          this.y = canvas.height;
        }
      }

      draw() {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      resizeCanvas();
      stars = [];
      // Density of stars
      const starCount = Math.floor((canvas.width * canvas.height) / 3000);
      for (let i = 0; i < starCount; i++) {
        stars.push(new Star());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach(star => {
        star.update();
        star.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', init);
    init();
    animate();

    return () => {
      window.removeEventListener('resize', init);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative w-full h-[500px] bg-black overflow-hidden flex items-center justify-center">
      {/* Canvas Background */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full"
      />

      {/* Content Container */}
      <div className="relative z-10 text-center px-4 max-w-7xl mx-auto w-full">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          <span className="text-[#6200ea]">Let's</span>{' '}
          <span className="text-[#6200ea]">Build your</span>{' '}
          <span className="text-[#6200ea]">BRAND!</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-400 text-lg md:text-xl mb-12 tracking-wide"
        >
          Without further delay in searching, let's start execution
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <button className="bg-[#6200ea] hover:bg-[#5000c0] text-white font-bold py-4 px-8 uppercase tracking-wider text-sm transition-colors min-w-[200px]">
            Click to Call
          </button>
          
          <button className="bg-[#6200ea] hover:bg-[#5000c0] text-white font-bold py-4 px-8 uppercase tracking-wider text-sm transition-colors min-w-[200px]">
            Chat on WhatsApp
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandBuilder;

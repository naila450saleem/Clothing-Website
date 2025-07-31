import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      currentX += (mouseX - currentX) * 0.1;
      currentY += (mouseY - currentY) * 0.1;

      if (cursor) {
        cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="
        fixed top-0 left-0 
        w-[50px] h-[50px] 
        border-2 border-slate-500 
        rounded-full 
        pointer-events-none 
        z-[9999] 
        transition-colors duration-200 
        bg-transparent
      "
    />
  );
};

export default CustomCursor;

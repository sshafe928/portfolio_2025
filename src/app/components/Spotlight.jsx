'use client'
import React, { useState, useEffect } from 'react';

const Spotlight = () => {
const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

useEffect(() => {
    const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
    window.removeEventListener('mousemove', handleMouseMove);
    };
}, []);

const spotlightStyle = {
    background: `radial-gradient(circle 350px at ${mousePosition.x}px ${mousePosition.y}px, rgba(110, 117, 197, 0.35), rgba(0, 0, 0, 0.05))`,
    height: '150vh',
    width: '150vw',
    position: 'fixed',
    top: 0,
    left: 0,
    pointerEvents: 'none',
    zIndex: 0,
};

return <div style={spotlightStyle}></div>;
};

export default Spotlight;
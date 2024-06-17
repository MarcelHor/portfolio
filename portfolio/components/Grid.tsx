"use client";
import React, {useState} from 'react';


const Grid = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Function to update mouse position
    const handleMouseMove = (event) => {
        const { clientX, clientY } = event;
        setMousePosition({ x: clientX, y: clientY-50 });
    };

    return (
        <div className="background-container" onMouseMove={handleMouseMove}>
            <div className="image dark"></div>
            <div className="image light" style={{
                clipPath: `circle(150px at ${mousePosition.x}px ${mousePosition.y}px)`,
            }}></div>

        </div>
    );
};

export default Grid;
"use client";
import {useEffect, useState} from 'react';

export default function Grid() {
    const [mousePosition, setMousePosition] = useState({x: 0, y: 0});

    const handleMouseMove = (event: MouseEvent) => {
        const {clientX, clientY} = event;
        setMousePosition({x: clientX - (window.innerWidth / 2) - 128, y: clientY - (window.innerHeight / 2) - 128});
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
            <div
                className="grid-light w-full h-full absolute top-0 left-0 pointer-events-auto"
                style={{
                    maskPosition: `${mousePosition.x + window.innerWidth / 2}px ${mousePosition.y + window.innerHeight / 2}px`,
                }}
            />
            <div className="grid-dark w-full h-full absolute top-0 left-0 pointer-events-none"/>
        </div>
    );
}

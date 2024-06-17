"use client";
import {useEffect, useState} from 'react';

export default function Grid() {
    const [mousePosition, setMousePosition] = useState({x: 0, y: 0});
    const [isActive, setIsActive] = useState(false);

    const handleMouseMove = (event: MouseEvent) => {
        const {clientX, clientY} = event;
        const scrollX = window.scrollX || window.pageXOffset;
        const scrollY = window.scrollY || window.pageYOffset;
        setMousePosition({x: clientX - 128 + scrollX, y: clientY - 180 + scrollY});
    };

    useEffect(() => {
        if (isActive) {
            window.addEventListener('mousemove', handleMouseMove);
        } else {
            window.removeEventListener('mousemove', handleMouseMove);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [isActive]);

    return (
        <div
            className="absolute top-0 left-0 w-full h-full"
            onMouseEnter={() => setIsActive(true)}
            onMouseLeave={() => setIsActive(false)}>
            <div
                className={`grid-light w-full h-full absolute top-0 left-0`}
                style={{
                    maskPosition: `${mousePosition.x}px ${mousePosition.y}px`,
                    opacity: isActive ? 1 : 0,
                }}/>
            <div className="grid-dark w-full h-full absolute top-0 left-0"/>
        </div>
    );
}

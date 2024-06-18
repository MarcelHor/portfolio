"use client";
import {useEffect, useLayoutEffect, useState} from 'react';

const CustomCursor = () => {
    const [position, setPosition] = useState({x: 0, y: 0});
    const [trailingPosition, setTrailingPosition] = useState({x: 0, y: 0});
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const setFromEvent = (event: MouseEvent) => {
            const {clientX, clientY} = event;
            const scrollX = window.scrollX || window.pageXOffset;
            const scrollY = window.scrollY || window.pageYOffset;
            setPosition({x: clientX + scrollX, y: clientY + scrollY});
        };

        document.addEventListener('mousemove', setFromEvent);

        return () => {
            document.removeEventListener('mousemove', setFromEvent);
        };
    }, []);

    // TODO: Check performance, use transition?
    useLayoutEffect(() => {
        let animationFrameId: number;

        const followCursor = () => {
            setTrailingPosition((prev) => {
                const x = prev.x + (position.x - prev.x) * 0.1;
                const y = prev.y + (position.y - prev.y) * 0.1;
                return {x, y};
            });
            animationFrameId = requestAnimationFrame(followCursor);
        };

        followCursor();

        return () => cancelAnimationFrame(animationFrameId);
    }, [position]);

    const handleHover = () => {
        setIsHovered(true);
    };

    const handleLeave = () => {
        setIsHovered(false);
    };

    useEffect(() => {
        document.querySelectorAll('button, a').forEach((el) => {
            el.addEventListener('mouseenter', handleHover);
            el.addEventListener('mouseleave', handleLeave);
        });

        return () => {
            document.querySelectorAll('button, a').forEach((el) => {
                el.removeEventListener('mouseenter', handleHover);
                el.removeEventListener('mouseleave', handleLeave);
            });
        };
    }, []);

    return (
        <>
            <div
                className="w-4 h-4 rounded-full border-2 border-white shadow-md pointer-events-none z-50 absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{left: `${position.x}px`, top: `${position.y}px`}}
            />
            <div
                className={`w-4 h-4 rounded-full border-2 border-white shadow-md pointer-events-none z-50 absolute transform -translate-x-1/2 -translate-y-1/2 ${
                    isHovered ? 'scale-150' : ''
                }`}
                style={{
                    left: `${trailingPosition.x}px`,
                    top: `${trailingPosition.y}px`,
                    transition: 'transform 0.1s ease-out',
                }}
            />
        </>
    );
};

export default CustomCursor;

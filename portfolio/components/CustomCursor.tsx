"use client";
import {useEffect, useLayoutEffect, useState} from 'react';
import {usePathname} from "@/lib/navigation";

const CustomCursor = () => {
    const [position, setPosition] = useState({x: 0, y: 0});
    const [trailingPosition, setTrailingPosition] = useState({x: 0, y: 0});
    const [isHovered, setIsHovered] = useState(false);
    const [firstMove, setFirstMove] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const setFromEvent = (event: MouseEvent) => {
            const {clientX, clientY} = event;
            setPosition({x: clientX, y: clientY});
            if (!firstMove) {
                setFirstMove(true);
            }
        };

        document.addEventListener('mousemove', setFromEvent);

        return () => {
            document.removeEventListener('mousemove', setFromEvent);
        };
    }, [firstMove]);

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
        const elements = document.querySelectorAll('button, a, .mouse-hover, input, textarea');
        elements.forEach((el) => {
            el.addEventListener('mouseenter', handleHover);
            el.addEventListener('mouseleave', handleLeave);
        });

        return () => {
            elements.forEach((el) => {
                el.removeEventListener('mouseenter', handleHover);
                el.removeEventListener('mouseleave', handleLeave);
            });
        };
    }, [pathname]);


    return (
        <div className="fixed inset-0 pointer-events-none z-50 hidden sm:block">
            {firstMove && (
                <>
                    <div
                        className="custom-cursor w-4 h-4 rounded-full border-2 border-white shadow-md absolute transform -translate-x-1/2 -translate-y-1/2"
                        style={{left: `${position.x}px`, top: `${position.y}px`}}
                    />
                    <div
                        className={`trailing-cursor w-4 h-4 rounded-full border-2 border-white shadow-md absolute transform -translate-x-1/2 -translate-y-1/2 ${isHovered ? 'scale-150' : ''}`}
                        style={{
                            left: `${trailingPosition.x}px`,
                            top: `${trailingPosition.y}px`,
                            transition: 'transform 0.1s ease-out',
                        }}
                    />
                </>
            )}
        </div>
    );
};

export default CustomCursor;

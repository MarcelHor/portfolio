"use client";
import {motion, Variants} from "framer-motion";
import {ReactNode, ElementType} from "react";

interface MotionFadeInProps {
    children: ReactNode;
    duration?: number;
    distance?: number;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
    as?: ElementType;
    className?: string;
}

export default function FadeIn({
                                   children,
                                   duration = 0.5,
                                   distance = 50,
                                   delay = 0,
                                   direction = "up",
                                   as: Tag = "div",
                                   className,
                               }: MotionFadeInProps) {

    const variants: Variants = {
        hidden: {
            opacity: 0,
            y: direction === "up" ? distance : direction === "down" ? -distance : 0,
            x: direction === "left" ? distance : direction === "right" ? -distance : 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
        },
    };

    const MotionTag = motion(Tag);

    return (
        <MotionTag
            initial="hidden"
            whileInView="visible"
            viewport={{once: false}}
            variants={variants}
            transition={{duration, delay}}
            className={className}
        >
            {children}
        </MotionTag>
    );
}

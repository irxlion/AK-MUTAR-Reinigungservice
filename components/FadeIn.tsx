
import React from 'react';
import { motion } from 'framer-motion';

interface FadeInProps {
    children: React.ReactNode;
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right';
    className?: string;
    fullWidth?: boolean;
}

export const FadeIn: React.FC<FadeInProps> = ({
    children,
    delay = 0,
    direction = 'up',
    className = "",
    fullWidth = false
}) => {
    const directions = {
        up: { y: 40, x: 0 },
        down: { y: -40, x: 0 },
        left: { x: 40, y: 0 },
        right: { x: -40, y: 0 },
    };

    return (
        <motion.div
            initial={{
                opacity: 0,
                ...directions[direction]
            }}
            whileInView={{
                opacity: 1,
                x: 0,
                y: 0
            }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration: 0.7,
                delay: delay,
                ease: [0.21, 0.47, 0.32, 0.98]
            }}
            className={`${fullWidth ? 'w-full' : ''} ${className}`}
        >
            {children}
        </motion.div>
    );
};

export const StaggerContainer: React.FC<{ children: React.ReactNode, className?: string, delayChildren?: number }> = ({
    children,
    className = "",
    delayChildren = 0
}) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
                visible: {
                    transition: {
                        staggerChildren: 0.1,
                        delayChildren: delayChildren,
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

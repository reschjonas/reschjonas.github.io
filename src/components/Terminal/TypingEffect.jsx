import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TypingEffect = ({ text, speed = 30, delay = 0, onComplete, className = '' }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        let timeout;

        const startTyping = () => {
            let currentIndex = 0;
            const interval = setInterval(() => {
                if (currentIndex <= text.length) {
                    setDisplayedText(text.slice(0, currentIndex));
                    currentIndex++;
                } else {
                    clearInterval(interval);
                    setIsComplete(true);
                    if (onComplete) onComplete();
                }
            }, speed);

            return () => clearInterval(interval);
        };

        if (delay > 0) {
            timeout = setTimeout(startTyping, delay);
        } else {
            startTyping();
        }

        return () => clearTimeout(timeout);
    }, [text, speed, delay, onComplete]);

    return (
        <span className={`text-glow ${className}`}>
            {displayedText}
            {!isComplete && <span className="cursor">&nbsp;</span>}
        </span>
    );
};

export default TypingEffect;

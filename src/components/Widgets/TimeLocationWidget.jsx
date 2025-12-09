import React, { useState, useEffect } from 'react';
import { Clock, MapPin } from 'lucide-react';

const TimeLocationWidget = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-full gap-2">
            <div className="text-2xl md:text-4xl font-bold text-glow font-mono">
                {time.toLocaleTimeString([], { hour12: false })}
            </div>
            <div className="flex items-center gap-1 text-xs opacity-60">
                <MapPin size={10} />
                <span>Chemnitz, DE</span>
            </div>
        </div>
    );
};

export default TimeLocationWidget;

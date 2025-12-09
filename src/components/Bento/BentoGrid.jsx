import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export const BentoGrid = ({ className, children }) => {
    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4 max-w-7xl mx-auto h-full",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoItem = ({
    className,
    title,
    description,
    header,
    icon,
    children,
}) => {
    return (
        <div
            className={cn(
                "row-span-1 rounded-xl group/bento transition duration-200 p-4 justify-between flex flex-col space-y-4",
                "border border-[var(--terminal-text)] bg-[rgba(13,13,13,0.8)] backdrop-blur-sm shadow-[0_0_10px_rgba(0,0,0,0.5)]",
                "hover:bg-[rgba(255,176,0,0.05)] hover:border-[var(--terminal-glow)] hover:shadow-[0_0_15px_var(--terminal-glow)]",
                className
            )}
        >
            {header}
            <div className="group-hover/bento:translate-x-2 transition duration-200 flex flex-col flex-1 min-h-0">
                <div className="flex items-center gap-2">
                    {icon}
                    <div className="font-bold text-[var(--terminal-text)] mb-2 mt-2">
                        {title}
                    </div>
                </div>
                <div className="font-normal text-[var(--terminal-text)] text-xs opacity-70 mb-2">
                    {description}
                </div>
                <div className="flex-1 min-h-0 relative">
                    {children}
                </div>
            </div>
        </div>
    );
};

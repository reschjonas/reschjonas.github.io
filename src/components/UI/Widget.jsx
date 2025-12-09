import React from 'react';

const Widget = ({ title, children, className = '', type = 'double' }) => {
    const borderClass = type === 'double' ? 'tui-border-double' : 'tui-border-solid';

    return (
        <div className={`tui-panel ${borderClass} p-4 md:p-6 ${className}`}>
            {title && (
                <div className="tui-title">
                    {title}
                </div>
            )}
            <div className="h-full overflow-auto tui-scroll">
                {children}
            </div>
        </div>
    );
};

export default Widget;

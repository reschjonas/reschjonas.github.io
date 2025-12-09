import React from 'react';

const TerminalLayout = ({ children }) => {
    return (
        <div className="crt min-h-screen p-4 md:p-8 box-border relative overflow-hidden">
            <div className="relative z-10 max-w-4xl mx-auto">
                {children}
            </div>
        </div>
    );
};

export default TerminalLayout;

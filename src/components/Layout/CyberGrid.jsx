import React from 'react';

const CyberGrid = () => {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(13,13,13,0.9)_0%,rgba(13,13,13,0.4)_100%)] z-10" />
            <div
                className="absolute inset-0 z-0 opacity-20"
                style={{
                    backgroundImage: `
            linear-gradient(var(--terminal-text) 1px, transparent 1px),
            linear-gradient(90deg, var(--terminal-text) 1px, transparent 1px)
          `,
                    backgroundSize: '40px 40px',
                    transform: 'perspective(500px) rotateX(60deg) translateY(-100px) translateZ(-200px)',
                    animation: 'gridMove 20s linear infinite',
                }}
            />
            <style jsx>{`
        @keyframes gridMove {
          0% { transform: perspective(500px) rotateX(60deg) translateY(0) translateZ(-200px); }
          100% { transform: perspective(500px) rotateX(60deg) translateY(40px) translateZ(-200px); }
        }
      `}</style>
        </div>
    );
};

export default CyberGrid;

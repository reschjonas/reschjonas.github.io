import React from 'react';
import Widget from '../UI/Widget';
import { content } from '../../data/content';

const ProfileWidget = () => {
    return (
        <Widget title="User Profile" className="h-full">
            <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-32 h-32 border-2 border-[var(--terminal-text)] rounded-full flex items-center justify-center overflow-hidden relative group">
                    {/* ASCII Art Placeholder or Image */}
                    <pre className="text-[0.5rem] leading-[0.5rem] font-mono">
                        {`
  .:::.  
 .:::::. 
.:::::::.
:::::::::
':::::::'
 ':::::' 
  ':::'  
`}
                    </pre>
                    <div className="absolute inset-0 bg-[var(--terminal-text)] opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-glow">{content.header.title}</h2>
                    <p className="opacity-80 text-sm">{content.header.subtitle}</p>
                </div>

                <div className="w-full border-t border-dashed border-[var(--terminal-text)] my-4"></div>

                <div className="w-full text-left space-y-2 text-sm">
                    <div className="flex justify-between">
                        <span className="opacity-70">LOC:</span>
                        <span>{content.header.location}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="opacity-70">STAT:</span>
                        <span className="text-green-500">ONLINE</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="opacity-70">ROLE:</span>
                        <span>Student</span>
                    </div>
                </div>
            </div>
        </Widget>
    );
};

export default ProfileWidget;

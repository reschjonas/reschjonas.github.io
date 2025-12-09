import React from 'react';

const CommandPrompt = ({ path = '~', user = 'visitor', host = 'reschj.one', command = '', showCursor = false }) => {
    return (
        <div className="flex flex-wrap items-center gap-2 mb-2 font-bold">
            <span className="text-green-500">
                {user}@{host}
            </span>
            <span className="text-white">:</span>
            <span className="text-blue-500">{path}</span>
            <span className="text-white">$</span>
            <span className="ml-2 text-glow">
                {command}
                {showCursor && <span className="cursor">&nbsp;</span>}
            </span>
        </div>
    );
};

export default CommandPrompt;

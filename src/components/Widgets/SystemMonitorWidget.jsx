import React, { useState, useEffect } from 'react';
import { Activity, Cpu, HardDrive } from 'lucide-react';

const SystemMonitorWidget = () => {
    const [stats, setStats] = useState({ cpu: 12, ram: 45, net: 2 });

    useEffect(() => {
        const interval = setInterval(() => {
            setStats({
                cpu: Math.floor(Math.random() * 30) + 10,
                ram: Math.floor(Math.random() * 10) + 40,
                net: Math.floor(Math.random() * 50) + 10,
            });
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col h-full justify-between p-1">
            <div className="space-y-3">
                {/* CPU */}
                <div className="space-y-1">
                    <div className="flex justify-between text-xs opacity-70">
                        <div className="flex items-center gap-1"><Cpu size={10} /> CPU</div>
                        <span>{stats.cpu}%</span>
                    </div>
                    <div className="h-1.5 bg-[rgba(255,176,0,0.1)] rounded-full overflow-hidden">
                        <div
                            className="h-full bg-[var(--terminal-text)] transition-all duration-500"
                            style={{ width: `${stats.cpu}%` }}
                        />
                    </div>
                </div>

                {/* RAM */}
                <div className="space-y-1">
                    <div className="flex justify-between text-xs opacity-70">
                        <div className="flex items-center gap-1"><HardDrive size={10} /> RAM</div>
                        <span>{stats.ram}%</span>
                    </div>
                    <div className="h-1.5 bg-[rgba(255,176,0,0.1)] rounded-full overflow-hidden">
                        <div
                            className="h-full bg-[var(--terminal-text)] transition-all duration-500"
                            style={{ width: `${stats.ram}%` }}
                        />
                    </div>
                </div>

                {/* NET */}
                <div className="space-y-1">
                    <div className="flex justify-between text-xs opacity-70">
                        <div className="flex items-center gap-1"><Activity size={10} /> NET</div>
                        <span>{stats.net} MB/s</span>
                    </div>
                    <div className="h-1.5 bg-[rgba(255,176,0,0.1)] rounded-full overflow-hidden">
                        <div
                            className="h-full bg-[var(--terminal-text)] transition-all duration-500"
                            style={{ width: `${stats.net}%` }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SystemMonitorWidget;

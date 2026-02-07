import BentoCard from './BentoCard';
import { ImageOff } from 'lucide-react';
import { useState } from 'react';

interface ProjectCardProps {
    title: string;
    subtitle?: string;
    image?: string;
    link?: string;
    className?: string;
    background?: 'gradient' | 'mesh' | 'glow' | 'animated';
}

export default function ProjectCard({
    title,
    subtitle,
    image,
    link = '#',
    className = '',
    background = 'gradient',
}: ProjectCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <BentoCard className={`${className} p-0`} background={background}>
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="h-full flex flex-col p-6 sm:p-7 group cursor-pointer decoration-none"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="flex-1 flex items-center justify-center relative rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/5 group-hover:border-indigo-500/30 transition-all duration-500 overflow-hidden mb-5 sm:mb-6 shadow-2xl">
                    {image ? (
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            style={{
                                filter: isHovered ? 'blur(0px) saturate(1) brightness(1)' : 'blur(0.5px) saturate(0.8) brightness(0.9)',
                            }}
                        />
                    ) : (
                        <div className="relative z-10 text-center">
                            <div className="mb-3 flex justify-center">
                                <div className="p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20 group-hover:border-indigo-500/50 transition-all duration-300">
                                    <ImageOff className="w-8 h-8 text-indigo-400/60 group-hover:text-indigo-400/100 transition-colors duration-300" />
                                </div>
                            </div>
                            <p className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors duration-300 font-medium">
                                No preview available
                            </p>
                        </div>
                    )}

                    {isHovered && (
                        <div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"
                            style={{
                                animation: 'shimmer 1.5s infinite',
                            }}
                        />
                    )}
                </div>

                <div className="flex flex-col gap-1.5">
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-indigo-300 transition-colors duration-300 leading-tight">
                        {title || 'Project Title'}
                    </h3>

                    {subtitle && (
                        <p className="text-sm text-gray-400 leading-relaxed line-clamp-2 group-hover:text-gray-300 transition-colors duration-300">
                            {subtitle}
                        </p>
                    )}
                </div>
            </a>

            <style>{`
                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
            `}</style>
        </BentoCard>
    );
}
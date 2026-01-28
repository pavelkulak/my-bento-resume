import BentoCard from './BentoCard';
import { ImageOff } from 'lucide-react';
import { useState } from 'react';

interface ProjectCardProps {
    title: string;
    subtitle?: string;
    image?: string;
    link?: string; // Добавили проп для ссылки
    className?: string;
    background?: 'gradient' | 'mesh' | 'glow' | 'animated';
}

export default function ProjectCard({
    title,
    subtitle,
    image,
    link = '#', // Значение по умолчанию
    className = '',
    background = 'gradient',
}: ProjectCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <BentoCard className={`${className} p-0`} background={background}>
            {/* Оборачиваем всё в ссылку */}
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="h-full flex flex-col p-6 group cursor-pointer decoration-none"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Screenshot frame */}
                <div className="flex-1 flex items-center justify-center relative rounded-lg bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/5 group-hover:border-indigo-500/20 transition-all duration-300 overflow-hidden mb-4">
                    {image ? (
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            style={{
                                filter: 'blur(0.5px) saturate(0.7) brightness(0.85)',
                            }}
                        />
                    ) : (
                        <div className="relative z-10 text-center">
                            <div className="mb-3 flex justify-center">
                                <div className="p-3 rounded-lg bg-indigo-500/10 border border-indigo-500/20 group-hover:border-indigo-500/50 transition-all duration-300">
                                    <ImageOff className="w-8 h-8 text-indigo-400/60 group-hover:text-indigo-400/100 transition-colors duration-300" />
                                </div>
                            </div>
                            <p className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                                No preview available
                            </p>
                        </div>
                    )}

                    {/* Shimmer effect */}
                    {isHovered && (
                        <div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"
                            style={{
                                animation: 'shimmer 2s infinite',
                            }}
                        />
                    )}
                </div>

                {/* Content Area */}
                <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-indigo-300 transition-colors duration-300">
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
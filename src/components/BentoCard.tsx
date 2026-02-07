import { type ReactNode, useState } from 'react';

interface BentoCardProps {
    children: ReactNode;
    className?: string;
    background?: 'gradient' | 'mesh' | 'glow' | 'animated';
}

export default function BentoCard({
    children,
    className = '',
    background = 'gradient',
}: BentoCardProps) {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    const getBackgroundClass = () => {
        switch (background) {
            case 'mesh':
                return 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900';
            case 'glow':
                return 'bg-gradient-to-br from-slate-950 via-slate-900 to-black';
            case 'animated':
                return 'bg-gradient-to-br from-indigo-950/40 via-slate-900 to-slate-950';
            default:
                return 'bg-gradient-to-br from-slate-900/80 via-slate-950 to-black/80';
        }
    };

    return (
        <div
            className={`w-full relative rounded-2xl overflow-hidden transition-all duration-500 group ${className}`}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`absolute inset-0 ${getBackgroundClass()}`} />

            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `
            linear-gradient(90deg, rgba(100, 116, 139, 0.15) 1px, transparent 1px),
            linear-gradient(rgba(100, 116, 139, 0.15) 1px, transparent 1px)
          `,
                    backgroundSize: '50px 50px',
                }}
            />

            {background === 'animated' && (
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                        background: `linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(168, 85, 247, 0.1) 50%, rgba(99, 102, 241, 0.05) 100%)`,
                        animation: 'gradient-shift 6s ease-in-out infinite',
                    }}
                />
            )}

            {isHovered && (
                <>
                    <div
                        className="absolute pointer-events-none blur-2xl transition-all duration-200"
                        style={{
                            width: '400px',
                            height: '400px',
                            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.4), transparent 70%)',
                            left: mousePos.x - 200,
                            top: mousePos.y - 200,
                        }}
                    />
                    <div
                        className="absolute pointer-events-none blur-xl transition-all duration-200"
                        style={{
                            width: '200px',
                            height: '200px',
                            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.3), transparent 70%)',
                            left: mousePos.x - 100,
                            top: mousePos.y - 100,
                        }}
                    />
                </>
            )}

            <div className="absolute inset-0 rounded-2xl border border-white/5 group-hover:border-indigo-500/30 transition-all duration-300 pointer-events-none" />

            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-purple-500/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10 h-full w-full">{children}</div>

            <style>{`
        @keyframes gradient-shift {
          0%, 100% {
            background: linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(168, 85, 247, 0.1) 50%, rgba(99, 102, 241, 0.05) 100%);
          }
          50% {
            background: linear-gradient(135deg, rgba(99, 102, 241, 0.25) 0%, rgba(168, 85, 247, 0.2) 50%, rgba(99, 102, 241, 0.15) 100%);
          }
        }
      `}</style>
        </div>
    );
}

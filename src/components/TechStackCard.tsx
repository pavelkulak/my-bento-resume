import BentoCard from './BentoCard';
import { Code2 } from 'lucide-react';

const techStack = [
    { name: 'React', icon: 'devicon-react-original', color: 'text-cyan-400', bg: 'bg-cyan-400/10' },
    { name: 'TypeScript', icon: 'devicon-typescript-plain', color: 'text-blue-400', bg: 'bg-blue-400/10' },
    { name: 'HTML5', icon: 'devicon-html5-plain', color: 'text-orange-500', bg: 'bg-orange-500/10' },
    { name: 'CSS3', icon: 'devicon-css3-plain', color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { name: 'Node.js', icon: 'devicon-nodejs-plain', color: 'text-green-400', bg: 'bg-green-400/10' },
    { name: 'Redux Toolkit', icon: 'devicon-redux-original', color: 'text-purple-500', bg: 'bg-purple-500/10' },
    { name: 'TanStack Query', icon: 'devicon-react-original', color: 'text-red-500', bg: 'bg-red-500/10' },
    { name: 'Zustand', icon: 'devicon-zustand-plain', color: 'text-amber-500', bg: 'bg-amber-500/10' },
    { name: 'Framer Motion', icon: 'devicon-framermotion-original', color: 'text-pink-500', bg: 'bg-pink-500/10' },
    { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain', color: 'text-cyan-400', bg: 'bg-cyan-400/10' },
    { name: 'Git', icon: 'devicon-git-plain', color: 'text-orange-500', bg: 'bg-orange-500/10' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain', color: 'text-yellow-500', bg: 'bg-yellow-500/10' },

];

export default function TechStackCard() {
    return (
        <BentoCard className="col-span-1 md:col-span-2 lg:col-span-2 p-6 sm:p-8 bg-white/[0.02]">
            <div className="flex flex-col h-full w-full">
                <h2 className="w-full text-lg sm:text-xl font-semibold text-white mb-6 sm:mb-8 flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-purple-500/20">
                        <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                    </div>
                    Мой стек технологий
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 w-full my-auto">
                    {techStack.map((tech, index) => {
                        return (
                            <div
                                key={tech.name}
                                className="w-full group relative flex flex-col items-center justify-center p-2 sm:p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/20 transition-all duration-500 animate-fadeInUp min-w-0"
                                style={{
                                    animationDelay: `${index * 50}ms`,
                                    animationFillMode: 'forwards'
                                }}
                            >
                                <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-xl blur-xl ${tech.bg}`} />

                                <div className={`p-1.5 sm:p-3 rounded-lg ${tech.bg} mb-1.5 sm:mb-3 group-hover:scale-110 transition-transform duration-500`}>
                                    <i className={`${tech.icon} ${tech.color} text-2xl sm:text-4xl`}></i>
                                </div>

                                <p className="text-[9px] sm:text-xs text-gray-400 group-hover:text-white font-medium text-center leading-tight break-words w-full px-1 transition-colors duration-300">
                                    {tech.name}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>

            <style>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeInUp {
                    opacity: 0;
                    animation: fadeInUp 0.4s ease-out forwards;
                }
            `}</style>
        </BentoCard>
    );
}
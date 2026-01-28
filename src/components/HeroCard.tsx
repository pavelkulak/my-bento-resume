import BentoCard from './BentoCard';
import { Sparkles } from 'lucide-react';

export default function HeroCard() {
    return (
        <BentoCard className="col-span-2 row-span-2 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 p-8">
            <div className="h-full flex flex-col justify-between">
                <div>
                    {/* Статус-бар */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 mb-8">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                        <span className="text-emerald-300 text-sm font-medium">Available for work</span>
                    </div>

                    {/* Главный блок с фото и именем */}
                    <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
                        {/* Аватарка: жесткие размеры и запрет на сжатие */}
                        <div className="w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden shrink-0 border-4 border-white/5">
                            <img
                                src="./avatar.png"
                                alt="avatar"
                                className="w-full h-full object-cover object-[center_20%]"
                            />
                        </div>

                        {/* Текст: центровка на мобилках, влево на десктопе */}
                        <div className="text-center md:text-left">
                            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent pb-2">
                                Pavel Kulakov
                            </h1>
                            <p className="text-2xl md:text-3xl text-gray-300 font-light mt-2">
                                Frontend Developer
                            </p>
                        </div>
                    </div>

                    {/* Описание */}
                    <p className="text-gray-400 text-lg leading-relaxed max-w-md text-center md:text-left">
                        Crafting exceptional digital experiences with modern web technologies.
                        Passionate about clean code, beautiful UI, and seamless user experiences.
                    </p>
                </div>
                <div className="flex flex-col items-center md:items-start gap-6">
                    <p className="text-gray-400 text-lg leading-relaxed max-w-md text-center md:text-left">
                        Crafting exceptional digital experiences with modern web technologies.
                        Passionate about clean code, beautiful UI, and seamless user experiences.
                    </p>

                    <a
                        href="/path-to-your-cv.pdf"
                        target="_blank"
                        className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white transition-all duration-300 hover:bg-white/10 hover:border-purple-500/50 overflow-hidden"
                    >
                        {/* Внутреннее свечение при ховере */}
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />

                        <span className="relative text-sm font-medium">View Resume</span>
                        <svg
                            className="relative w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </div>

                {/* Футер карточки */}
                <div className="flex items-center justify-center md:justify-start gap-2 text-purple-300 mt-8">
                    <Sparkles className="w-5 h-5 animate-pulse" />
                    <span className="text-sm">Building the future, one component at a time</span>
                </div>
            </div>
        </BentoCard>
    );
}
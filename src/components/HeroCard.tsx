import BentoCard from './BentoCard';
import { Sparkles } from 'lucide-react';

export default function HeroCard() {
    return (
        <BentoCard className="col-span-1 md:col-span-2 row-span-1 md:row-span-2 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 p-6 sm:p-8">
            <div className="h-full flex flex-col justify-between">
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 mb-6 sm:mb-8 transition-transform hover:scale-105 cursor-default">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                        <span className="text-emerald-300 text-xs sm:text-sm font-medium">В поиске работы</span>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 mb-6 sm:mb-8">
                        <div className="w-32 h-32 sm:w-48 sm:h-48 md:w-60 md:h-60 rounded-full overflow-hidden shrink-0 border-4 border-white/5 shadow-2xl transition-transform hover:rotate-3 duration-500">
                            <img
                                src="./avatar.png"
                                alt="avatar"
                                className="w-full h-full object-cover object-[center_20%]"
                            />
                        </div>

                        <div className="text-center md:text-left">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent pb-2 leading-tight">
                                Павел Кулаков
                            </h1>
                            <p className="text-xl sm:text-2xl md:text-3xl text-indigo-300/80 font-light mt-1 sm:mt-2">
                                Frontend разработчик
                            </p>
                        </div>
                    </div>

                    <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl text-center md:text-left mx-auto md:mx-0">
                        Разрабатываю высококлассные цифровые продукты на базе современного стека. Увлечен чистым кодом, дизайном интерфейсов и созданием интуитивно понятных веб-приложений.
                    </p>
                </div>

                <div className="flex flex-col items-center md:items-start gap-6 mt-8">
                    <a
                        href="/cv.pdf"
                        target="_blank"

                        className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white transition-all duration-300 hover:bg-white/10 hover:border-purple-500/50 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />

                        <span className="relative text-sm font-medium">Резюме</span>
                        <svg
                            className="relative w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>

                    <div className="flex items-center justify-center md:justify-start gap-2 text-purple-300/60 hover:text-purple-300 transition-colors cursor-default">
                        <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 animate-pulse" />
                        <span className="text-xs sm:text-sm italic">Создаю интерфейсы, которые нравятся людям</span>
                    </div>
                </div>
            </div>
        </BentoCard>
    );
}
import { useEffect, useRef } from 'react';
import HeroCard from './components/HeroCard';
import TechStackCard from './components/TechStackCard';
import ProjectCard from './components/ProjectCard';
import SocialCard from './components/SocialCard';
import ContributionGrid from './components/ContributionGrid';
import { ArrowUp } from 'lucide-react';
import TimeCard from './components/TimeCard';
import StatusCard from './components/StatusCard';


function App() {
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!gridRef.current) return;

            const { clientX, clientY } = e;
            const x = (clientX / window.innerWidth) * 100;
            const y = (clientY / window.innerHeight) * 100;

            gridRef.current.style.setProperty('--mouse-x', `${x}%`);
            gridRef.current.style.setProperty('--mouse-y', `${y}%`);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="min-h-screen bg-black relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(99,102,241,0.12),transparent_50%)] pointer-events-none" />

            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px',
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 py-16">
                <div
                    ref={gridRef}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-min items-stretch"
                >
                    <HeroCard />
                    <SocialCard />
                    <ContributionGrid />
                    <TechStackCard />

                    <ProjectCard
                        title="Stream-Vibe"
                        image="./stream-vibe.png"
                        className="col-span-1 md:col-span-2 lg:col-span-2"
                        background="glow"
                        link="https://movie-tracker-eosin.vercel.app/"
                        subtitle="Сервис для просмотра трейлеров к фильмам"
                    />
                    <ProjectCard
                        title="All-parkings"
                        subtitle="Умный сервис поиска и бронирования парковок с интерактивной картой и конструктором мест."
                        className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1 md:row-span-2"
                        background="animated"
                        image="./parking-dark.png"
                        link="https://all-parkings.vercel.app/"
                    />
                </div>

                <footer className="mt-16 flex justify-center text-gray-600 text-sm">
                    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-white transition-colors">
                        <ArrowUp className="w-10 h-10" />
                    </button>
                </footer>
            </div>
        </div>
    );
}

export default App;

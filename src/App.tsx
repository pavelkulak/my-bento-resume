import { useEffect, useRef } from 'react';
import HeroCard from './components/HeroCard';
import TechStackCard from './components/TechStackCard';
import ProjectCard from './components/ProjectCard';
import SocialCard from './components/SocialCard';
import ContributionGrid from './components/ContributionGrid';
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

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div
                    ref={gridRef}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-min items-stretch"
                >
                    <HeroCard />
                    <SocialCard />
                    <ContributionGrid />
                    <TechStackCard />

                    <ProjectCard
                        title="To-Do List"
                        image="./to-do.png"
                        className="col-span-2 lg:col-span-2"
                        background="glow"
                        link="https://todudo.netlify.app/"
                    />
                    <ProjectCard
                        title="All-parkings"
                        subtitle="Умный сервис поиска и бронирования парковок с интерактивной картой и конструктором мест."
                        className="col-span-2 lg:col-span-2 row-span-2"
                        background="animated"
                        image="./parking-dark.png"
                        link="https://all-parkings.vercel.app/"
                    />



                    {/* <ProjectCard
                        title="CV"
                        image='./cv.png'
                        className="col-span-2 lg:col-span-2"
                        background="mesh"
                    /> */}



                </div>

                <footer className="mt-16 text-center text-gray-600 text-sm">
                    <p>Crafted with passion by Pavel</p>
                    <p className="mt-2">2025 - Present</p>
                </footer>
            </div>
        </div>
    );
}

export default App;

import { useEffect, useState } from 'react';
import BentoCard from './BentoCard';
import { Clock } from 'lucide-react';

export default function TimeCard() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const seconds = time.getSeconds().toString().padStart(2, '0');

    return (
        <BentoCard className="bg-gradient-to-br from-orange-500/10 to-red-500/10 p-6">
            <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-orange-400" />
                <span className="text-sm text-gray-400">Local Time</span>
            </div>

            <div className="font-mono">
                <div className="text-4xl font-bold text-white mb-1">
                    {hours}:{minutes}
                    <span className="text-2xl text-gray-400 ml-1">{seconds}</span>
                </div>
                <div className="text-sm text-gray-400">
                    {time.toLocaleDateString('en-US', {
                        weekday: 'long',
                        month: 'short',
                        day: 'numeric',
                    })}
                </div>
            </div>
        </BentoCard>
    );
}

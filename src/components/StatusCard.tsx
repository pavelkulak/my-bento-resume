import BentoCard from './BentoCard';
import { Activity, Coffee, Headphones } from 'lucide-react';

export default function StatusCard() {
    return (
        <BentoCard className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10">
            <div className="flex items-center gap-3 mb-4">
                <Activity className="w-5 h-5 text-emerald-400" />
                <span className="text-sm text-gray-400">Current Status</span>
            </div>

            <div className="space-y-4">
                <div className="flex items-center gap-3">
                    <Coffee className="w-5 h-5 text-amber-400" />
                    <span className="text-white">Fueled by coffee</span>
                </div>

                <div className="flex items-center gap-3">
                    <Headphones className="w-5 h-5 text-purple-400" />
                    <span className="text-white">Coding with music</span>
                </div>

                <div className="mt-4 p-3 rounded-lg bg-white/5 border border-white/10">
                    <p className="text-xs text-gray-400 mb-1">Currently working on</p>
                    <p className="text-sm text-white font-medium">Next-gen web applications</p>
                </div>
            </div>
        </BentoCard>
    );
}

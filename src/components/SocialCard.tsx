import BentoCard from './BentoCard';
import { Github, Mail, Send, Phone } from 'lucide-react';

const socials = [
    {
        name: 'Telegram',
        icon: Send,
        url: 'https://t.me/kulakpavel',
        color: 'hover:text-white',
        bgColor: 'hover:bg-white/10',
    },
    {
        name: '+7 919 827 84 48',
        icon: Phone,
        url: 'tel:+79198278448',
        color: 'hover:text-emerald-400',
        bgColor: 'hover:bg-emerald-500/10',
    },
    {
        name: 'GitHub',
        icon: Github,
        url: 'https://github.com/pavelkulak',
        color: 'hover:text-white',
        bgColor: 'hover:bg-white/10',
    },

    {
        name: 'CodeWars',
        icon: Github,
        url: 'https://www.codewars.com/users/pavelkulak',
        color: 'hover:text-white',
        bgColor: 'hover:bg-white/10',
    },
    {
        name: 'Email',
        icon: Mail,
        url: 'mailto:kulak-pavel@yandex.ru',
        color: 'hover:text-purple-400',
        bgColor: 'hover:bg-purple-500/10',
    },

];

export default function SocialCard() {
    return (
        <BentoCard className="col-span-1 md:col-span-2 p-6 sm:p-8">
            <h2 className="text-lg sm:text-xl font-semibold text-white mb-6 sm:mb-8 flex items-center gap-2">
                <Send className="w-5 h-5 text-indigo-400" />
                Свяжитесь со мной
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {socials.map((social, index) => {
                    const Icon = social.icon;
                    return (
                        <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group flex items-center gap-3 px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 ${social.bgColor}`}
                            style={{
                                animationDelay: `${index * 100}ms`,
                                animation: 'slideIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                                opacity: 0,
                            }}
                        >
                            <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                                <Icon className={`w-5 h-5 text-gray-400 transition-colors duration-300 ${social.color}`} />
                            </div>
                            <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm font-medium">
                                {social.name}
                            </span>
                        </a>
                    );
                })}
            </div>

            <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
        </BentoCard>
    );
}

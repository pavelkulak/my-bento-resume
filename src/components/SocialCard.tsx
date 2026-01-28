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
        name: '+7 919 827 84 48', // Красивый формат для пользователя
        icon: Phone,
        url: 'tel:+79198278448',   // Технический формат без пробелов для вызова
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
        <BentoCard className="col-span-2 p-6">
            <h2 className="text-xl font-semibold text-white mb-6">Let's Connect</h2>

            <div className="grid grid-cols-2 gap-3 ">
                {socials.map((social, index) => {
                    const Icon = social.icon;
                    return (
                        <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group flex items-center gap-3  px-2 py-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 ${social.bgColor}`}
                            style={{
                                animationDelay: `${index * 100}ms`,
                                animation: 'slideIn 0.5s ease-out forwards',
                                opacity: 0,
                            }}
                        >
                            <Icon className={`w-5 h-5 text-gray-400 transition-colors duration-300 ${social.color}`} />
                            <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
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

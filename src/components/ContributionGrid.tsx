import { GitHubCalendar } from 'react-github-calendar';
import BentoCard from './BentoCard';
import { GitCommit, ExternalLink } from 'lucide-react';

export default function ContributionGrid() {
  const theme = {
    dark: ['#161b22', '#065f46', '#059669', '#10b981', '#34d399'],
  };

  return (
    <BentoCard className="col-span-2 lg:col-span-2 p-6 flex flex-col justify-between min-w-0">
      <div className="w-full">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-500/10">
              <GitCommit className="w-5 h-5 text-emerald-400" />
            </div>
            <h2 className="text-xl font-semibold text-white">GitHub Activity</h2>
          </div>

          <a
            href="https://github.com/pavelkulak"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Контейнер с overflow-hidden, чтобы календарь не распирал карточку */}
        <div className="w-full overflow-hidden py-2 calendar-wrapper">
          <GitHubCalendar
            username="pavelkulak"
            // Используем автоматический расчет размера, чтобы он вписывался в контейнер
            blockSize={12}
            blockMargin={4}
            colorScheme="dark"
            theme={{ dark: theme.dark }}
          />
        </div>
      </div>



      {/* Магия масштабирования через CSS */}
      <style>{`
        .calendar-wrapper svg {
          width: 100% !important;
          height: auto !important;
          display: block;
        }
        /* Убираем стандартные паддинги библиотеки, если они мешают */
        .react-github-calendar__chart {
          margin: 0 !important;
          padding: 0 !important;
        }
      `}</style>
    </BentoCard>
  );
}
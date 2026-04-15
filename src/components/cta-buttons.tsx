import type { SVGProps } from "react";

function OnlyFansIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 3.6a8.4 8.4 0 110 16.8 8.4 8.4 0 010-16.8zm0 2.4a6 6 0 100 12 6 6 0 000-12zm0 2.4a3.6 3.6 0 110 7.2 3.6 3.6 0 010-7.2z" />
    </svg>
  );
}

function ChatIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
    </svg>
  );
}

interface CtaButtonsProps {
  onlyfans: string;
  chatterbot: string;
}

export function CtaButtons({ onlyfans, chatterbot }: CtaButtonsProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-3 mt-6 w-full max-w-sm">
      <a
        href={onlyfans}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2.5 w-full px-6 py-3.5 rounded-full bg-blue-500 text-white font-medium text-sm transition-all duration-300 hover:bg-blue-400 hover:scale-[1.02]"
      >
        <OnlyFansIcon className="w-5 h-5" />
        OnlyFans
      </a>
      {/* <a
        href={chatterbot}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2.5 w-full px-6 py-3.5 rounded-full border border-white/20 bg-white/5 text-white font-medium text-sm backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:scale-[1.02]"
      >
        <ChatIcon className="w-5 h-5" />
        Chatterbot
      </a> */}
    </div>
  );
}

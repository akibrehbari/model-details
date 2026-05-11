import type { SVGProps } from "react";

function OnlyFansIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm0 2.4c5.304 0 9.6 4.296 9.6 9.6s-4.296 9.6-9.6 9.6S2.4 17.304 2.4 12 6.696 2.4 12 2.4zM8.664 7.2C6.24 7.2 4.272 9.168 4.272 11.592c0 2.424 1.968 4.392 4.392 4.392 1.68 0 3.144-.948 3.888-2.34h-1.68a2.688 2.688 0 01-2.208 1.152 2.712 2.712 0 01-2.712-2.712 2.712 2.712 0 012.712-2.712c.96 0 1.8.492 2.28 1.236h1.68a4.368 4.368 0 00-3.96-2.408zm6.912.144v8.448h1.656v-3.24c.288.06.588.096.888.096 2.016 0 3.648-1.632 3.648-3.648 0-2.016-1.632-3.648-3.648-3.648-.888 0-1.704.312-2.352.816l-.192-.824zm1.68 1.44c1.104 0 2.004.9 2.004 2.004s-.9 2.004-2.004 2.004a2.01 2.01 0 01-2.004-2.004c0-1.104.9-2.004 2.004-2.004z" />
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
        Message me
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

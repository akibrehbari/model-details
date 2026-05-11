import type { SVGProps } from "react";

function OnlyFansIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 58 32" fill="currentColor" {...props}>
      {/* O — thick ring */}
      <path fillRule="evenodd" clipRule="evenodd" d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm0 6c5.523 0 10 4.477 10 10s-4.477 10-10 10S6 21.523 6 16 10.477 6 16 6z" />
      {/* F */}
      <path d="M36 0h22v6H42v8h14v6H42v12h-6V0z" />
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

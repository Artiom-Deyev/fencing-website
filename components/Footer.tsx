'use client';

import Link from 'next/link';
import { Send } from 'lucide-react';

// SVG-иконка Instagram с поддержкой className
const InstagramIcon = ({ className = "" }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}   // ← теперь принимает className
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function Footer() {    

    return (
    <footer className="bg-zinc-950 text-white/70 border-t border-amber-500/30 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <p>© 2026 Секция Фехтования Северо-Запад в Москве. Все права защищены.</p>
          <p className="mt-2">
            Контакты: +7 (903) 572-96-56 | info@fencing-moscow.ru
          </p>
        </div>

        {/* Социальные сети */}
        <div className="mt-10 flex justify-center gap-6">
          {/* Telegram */}
          <Link
            href="https://t.me/твой_канал"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2 text-white/70 hover:text-amber-400 transition-all duration-300"
          >
            <div className="w-11 h-11 flex items-center justify-center rounded-full border border-white/20 group-hover:border-amber-400 group-hover:bg-amber-400/10 transition-all">
              <Send className="w-6 h-6" />
            </div>
            <span className="text-xs tracking-widest">TELEGRAM</span>
          </Link>

          {/* Instagram */}
          <Link
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2 text-white/70 hover:text-amber-400 transition-all duration-300"
          >
            <div className="w-11 h-11 flex items-center justify-center rounded-full border border-white/20 group-hover:border-amber-400 group-hover:bg-amber-400/10 transition-all">
              <InstagramIcon className="w-6 h-6" />
            </div>
            <span className="text-xs tracking-widest">INSTAGRAM</span>
          </Link>
        </div>
      </div>  
            
      </footer>
    );
}
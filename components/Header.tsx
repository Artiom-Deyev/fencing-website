'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
//import { px } from 'framer-motion';

function NavLinks({onClose} : { onClose: () => void}) {
  return (
    <>
      <Link
        href="/"
        className="text-white hover:text-amber-400 transition py-3 pl-4 text-lg sm:text-xl md:text-2xl font-medium whitespace-nowrap"
        onClick={onClose}
      >
        Главная
      </Link>
      <Link
        href="/about"
        className="text-white hover:text-amber-400 transition py-3 pl-2 text-lg sm:text-xl md:text-2xl font-medium whitespace-nowrap"
        onClick={onClose}
      >
        О секции
      </Link>
      <Link
        href="/schedule"
        className="text-white hover:text-amber-400 transition py-3 pl-2 text-lg sm:text-xl md:text-2xl font-medium whitespace-nowrap"
        onClick={onClose}
      >
        Расписание
      </Link>
      <Link
        href="/trainers"
        className="text-white hover:text-amber-400 transition py-3 pl-2 text-lg sm:text-xl md:text-2xl font-medium whitespace-nowrap"
        onClick={onClose}
      >
        Тренеры
      </Link>
      <Link
        href="/contacts"
        className="text-white hover:text-amber-400 transition py-3 pl-2 text-lg sm:text-xl md:text-2xl font-medium whitespace-nowrap"
        onClick={onClose}
      >
        Контакты
      </Link>
    </>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false)

  return (
    <header className="bg-zinc-950 border-b border-amber-500/30 sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">

  {/* ЛЕВАЯ ЧАСТЬ — только логотип */}
  <Link href="/" className="flex items-center gap-3">
    <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-zinc-950 font-bold text-xl shrink-0">
      {/* ⚔️ */}
      <Image
        className="h-8 w-8"
        src="/images/logo.png"
        alt="Лого"
        width={24}
        height={24}
      />
    </div>
    <span className="text-xl sm:text-2xl md:text-2xl font-bold text-white tracking-tighter">
      ФЕХТОВАНИЕ<br /> <span className='whitespace-nowrap'>СЕВЕРО-ЗАПАД</span> 
    </span>
  </Link>

  {/* ПРАВАЯ ЧАСТЬ — меню + кнопка */}
  <div className="hidden xl:flex items-center gap-10 xl:gap-12">
    <nav className="flex items-center gap-8 xl:gap-10">
      <NavLinks onClose={handleClose} />
    </nav>

    <Button
      asChild
      className="
        bg-amber-600 hover:bg-amber-700 
        text-zinc-950 
        font-semibold 
        px-6 py-5 
        
        text-lg 
        shadow-md shadow-amber-500/20 
        hover:shadow-lg hover:shadow-amber-500/40
        transition-all duration-300
      "
    >
      <Link href="/contacts">Записаться</Link>
    </Button>
  </div>

  {/* Бургер-меню для мобильных и планшетов */}
  <Sheet open={open} onOpenChange={setOpen}>
    <SheetTrigger asChild className="xl:hidden">
      <Button variant="ghost" size="lg" className="text-white p-3 border-white">
        <Menu className="h-7 w-7" />
      </Button>
    </SheetTrigger>

          <SheetContent side="right" className="bg-zinc-950 border-amber-500/30 w-80"> 
            <SheetHeader>
              <SheetTitle className="text-white text-2xl border-b-white">Меню</SheetTitle>
            </SheetHeader>

            <nav className="flex flex-col gap-6 mt-10 text-lg px-2">
              <NavLinks onClose={handleClose}/>
              <Button
                asChild
                className="bg-amber-500 hover:bg-amber-600 text-zinc-950 mt-4 text-lg py-8 mx-2"
              >
                <Link href="/contacts" onClick={() => setOpen(false)}>
                  Записаться на пробное
                </Link>
              </Button>
            </nav>

          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
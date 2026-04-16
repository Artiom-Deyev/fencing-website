'use client';

import { useState } from 'react';
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';

interface Trainer {
  id: number;
  name: string;
  title: string;
  description: string;
  image: string;
}

export default function Trainers() {
  const [selectedTrainer, setSelectedTrainer] = useState<Trainer | null>(null);

  const trainers: Trainer[] = [
    {
      id: 1,
      name: "Тихомирова Елена Александровна",
      title: "Тренер Клуба",
      description: "Воспитала чемпионов России, членов юниорской сборной команды России, мастеров спорта. Мастер спорта по фехтованию на рапирах, чемпион СССР, доцент кафедры фехтования РГУФКСМиТ.",
      image: "/images/tikhomirova.JPG",
    },
    {
      id: 2,
      name: "Деев Артём Михайлович",
      title: "Воспитал призеров чемпионатов России и ОАЭ, мастеров спорта. Мастер спорта по фехтованию на рапирах.",
      description: "Мастер ",
      image: "/images/deev.jpg",         
    },
  ];

  return (
    <>
      <main className="min-h-screen bg-zinc-950 text-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-16">Тренеры</h1>

    {/* Карточки тренеров */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {trainers.map((trainer) => (
          <Card
            key={trainer.id}
            className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-amber-400/30 hover:border-amber-400/70 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300 group overflow-hidden cursor-pointer"
            onClick={() => setSelectedTrainer(trainer)}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={trainer.image}
          alt={trainer.name}
          fill
          className={`object-cover transition-transform duration-700 ease-out ${trainer.id === 2 ? 'object-top' : 'object-center'} md:group-hover:scale-[1.06]`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={82}
        />
      </div>

      {/* Карточки тренеров */}
      <CardHeader className="pb-4 pt-6 px-6">
       
        <CardTitle className="text-amber-400 text-xl md:text-2xl font-semibold tracking-wide leading-[1.15] break-words">
          {trainer.name}
        </CardTitle>
        
        <p className="text-amber-500/90 text-sm mt-2 leading-snug">
          {trainer.title}
        </p>
      </CardHeader>

      <CardContent className="px-6 pb-8 text-zinc-300 leading-relaxed text-[15px]">
        {trainer.description}
      </CardContent>
          </Card>
  ))}

          {/* Модальное окно карточек тренеров */}
          <Dialog open={!!selectedTrainer} onOpenChange={() => setSelectedTrainer(null)}>
            <DialogContent className="max-w-2xl bg-zinc-950 border-amber-400/50 p-0 overflow-hidden">
              {selectedTrainer && (
                <>
                  <button
                      onClick={() => setSelectedTrainer(null)}
                      className="absolute top-4 right-4 z-50 bg-black/60 hover:bg-black/80 text-white w-9 h-9 rounded-full flex items-center justify-center cursor-pointer border-white transition-colors">
                      ✕
                    </button>

                    {/* Изображение тренера в модальном окне */}
                  <div className="relative h-80 sm:h-96 md:-[460px]">
                    <Image
                      src={selectedTrainer.image}
                      alt={selectedTrainer.name}
                      fill
                      className={`object-cover ${selectedTrainer.id === 2 ? 'object-top' : 'object-center'}`}
                      sizes="90vw"
                      quality={90}
                      priority={false}
                    />
                  </div>

                  <div className="p-8 md:p-8">
                    <DialogTitle className=" text-2xl md:text-3xl text-amber-400 mb-4">
                      {selectedTrainer.name}
                    </DialogTitle>
                    <p className="text-amber-500/90 text-[15px]  md:text-lg mb-4 leading-relaxed">
                      {selectedTrainer.title}
                    </p>
                    <p className="text-zinc-300 text-base leading-relaxed">
                      {selectedTrainer.description}
                    </p>
                  </div>
                </>
              )}
            </DialogContent>
          </Dialog>

        </div>
      </div>
    </main>
    
    </>
    
  );
}

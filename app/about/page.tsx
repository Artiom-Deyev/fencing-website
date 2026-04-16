'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';

interface Article {
  id: number;
  title: string;
  description: string;
  image: string;
}

export default function About() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const articles: Article[] = [
    {
      id: 1,
      title: "О Cекции",
      description: "Секция фехтования (в данный момент специализирующаяся на фехтовании на рапирах, но в дальнейшем планиурем разивать и фехтование на шпагах). ",
      image: "/images/about-1.jpeg",
    },
    {
      id: 2,
      title: "О Залах",
      description: "Все залы находятся в Северо-западном округе Москвы, в удобной транспортной доступности от метро. Залы оборудованы всем необходимым для занятий фехтованием, а также раздевалками.",
      image: "/images/about-2.jpeg",
    },
    {
      id: 3,
      title: "О Занятиях",
      description: "В секции занимаются дети от 6 лет и взрослые. В секции работают опытные тренеры, которые подготовили призеров и победителей всероссийских и международных соревнований, а также чемпионов ОАЭ.",
      image: "/images/about-3.jpeg",
    },
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-12">О секции</h1>

        {/* Заглавная фотография с заголовком — исправленная мобильная версия */}
      <div className="relative w-full max-w-5xl mx-auto h-[420px] md:h-[560px] rounded-3xl overflow-hidden mb-12 shadow-2xl">
        <Image
          src="/images/gallery-1.jpeg"
          alt="Фехтование в нашей секции"
          fill
          className="object-cover opacity-45"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />

        {/* Заголовок поверх фото — улучшенная адаптивность */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="inline-flex items-center gap-3 mb-3 md:mb-4">
            <div className="h-px w-10 md:w-12 bg-amber-400" />
            <span className="text-amber-400 text-xs md:text-sm tracking-[3px] md:tracking-[4px] font-medium">МОСКВА</span>
            <div className="h-px w-10 md:w-12 bg-amber-400" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tighter leading-none mb-2 md:mb-4 px-2">
            ФЕХТОВАНИЕ <br /> СЕВЕРО-ЗАПАД
          </h1>
          
          <p className="text-base sm:text-lg md:text-2xl text-white/90 font-light tracking-wide px-4">
            Секция спортивного фехтования
          </p>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      {/* Основной текст */}
      <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">   {/* было mb-20 */}
        <p className="text-lg md:text-xl text-white/80 leading-relaxed px-4">
          Наша секция объединяет любителей и профессиональных спортсменов всех возрастов. 
          Мы сочетаем традиции советской школы фехтования с современными методиками подготовки, а также международными практиками.
        </p>
      </div>

        {/* Карточки "О Секции" */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {articles.map((article) => (
            <Card
              key={article.id}
              className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-amber-400/30 
              hover:border-amber-400/70 hover:shadow-2xl hover:shadow-amber-500/10 
              transition-all duration-300 group overflow-hidden cursor-pointer"
              onClick={() => setSelectedArticle(article)}
            >
              <div className="relative h-48 sm:h-52 lg:h-56 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <CardHeader className="pb-3 pt-5 px-6">
                <CardTitle className="text-amber-400 text-xl font-semibold tracking-wide group-hover:text-amber-300 transition-colors">
                  {article.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="px-6 pb-6 text-zinc-300 text-[15px] leading-relaxed">
                {article.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Модальное окно карточек */}
      <Dialog open={!!selectedArticle} onOpenChange={() => setSelectedArticle(null)}>
        <DialogContent className="max-w-2xl bg-zinc-950 border-amber-400/50 p-0 overflow-hidden">
          {selectedArticle && (
            <>
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 z-50 bg-black/60 hover:bg-black/80 text-white w-9 h-9 rounded-full flex items-center justify-center cursor-pointer border-none transition-colors">
                ✕
              </button>

              <div className="relative h-80 sm:h-96 md:h-[460px]">
                <Image
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 md:p-8">
                <DialogTitle className="text-2xl md:text-3xl text-amber-400 mb-4">
                  {selectedArticle.title}
                </DialogTitle>
                <p className="text-zinc-300 leading-relaxed text-[15px] md:text-lg">
                  {selectedArticle.description}
                </p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </main>
);
}
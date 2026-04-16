'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card,  CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';
import Gallery from '@/components/Gallery';


const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const staggerChildren = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: .2, 
    },
  },
};

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[75vh] sm:min-h-[80vh] md:min-h-[70vh] lg:min-h-[85vh] flex items-center justify-center bg-zinc-950 overflow-hidden px-4 sm:px-6 pb-6">
      
      {/* Фон */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/hero-bg.webp"
          alt="Фехтование в Москве"
          fill
          className="object-cover object-top xxl:object-center opacity-50"
          priority
          quality={85}
          sizes='(max-width: 768px) 100vw, 1200px'
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/70 via-zinc-950/50 to-zinc-900/80" />

      <motion.div
        className="relative z-10 text-center w-full max-w-5xl pt-12 sm:pt-16 md:pt-8 lg:pt-12 xl:pt-16"
        initial="hidden"
        animate="visible"
        variants={staggerChildren}
      >
      <motion.h1
        variants={fadeInUp}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter mb-4 sm:mb-6 md:mb-8  leading-tight"
      >
        ФЕХТОВАНИЕ В МОСКВЕ <br /> СЕВЕРО-ЗАПАД
      </motion.h1>

    <motion.p
      variants={fadeInUp}
      className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-amber-400 mb-8 sm:mb-10 md:mb-12 max-w-4xl mx-auto leading-relaxed whitespace-normal"
    >
      Профессиональная секция для детей и взрослых. <br className="2xl:hidden" />
      Опытные тренеры • Современный зал • Победы на турнирах
    </motion.p>

    <motion.div
      variants={fadeInUp}
      className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
    >
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
        <Button
          size="lg"
          asChild
          className="bg-amber-500 hover:bg-amber-600 text-zinc-950 text-base sm:text-lg md:text-xl px-8 sm:px-10 md:px-12 py-5 sm:py-6 md:py-7 font-semibold w-full sm:w-auto shadow-lg shadow-amber-500/20"
        >
          <Link href="/contacts">Записаться на пробное занятие</Link>
        </Button>
      </motion.div>

      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
        <Button
          size="lg"
          variant="outline"
          asChild
          className="
          bg-transparent 
          border-2 border-amber-400 
          text-amber-400 
          hover:bg-amber-400 
          hover:text-zinc-950 
          hover:border-amber-400
          text-base sm:text-lg md:text-xl 
          px-8 sm:px-10 md:px-12 
          py-5 sm:py-6 md:py-7 
          font-semibold 
          w-full sm:w-auto 
          transition-all duration-300
          shadow-md hover:shadow-lg hover:shadow-amber-400/30
        "
        >
          <Link href="/about">Узнать о секции</Link>
        </Button>
      </motion.div>
    </motion.div>
  </motion.div>


  {/* Силуэт */}
  <motion.div
    className="absolute bottom-8 right-8 hidden lg:block opacity-30"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 0.3, scale: 1 }}
    transition={{ duration: 1.2, delay: 0.6, ease: 'easeOut' }}
  >
    {/* <span className="text-[180px] md:text-[240px] lg:text-[300px] text-amber-400/10">⚔️</span> */}
  </motion.div>
</section>

      {/* Преуимущества */}
      <section className="py-16 bg-zinc-950">

        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Почему выбирают нас</h2>
          <div className="grid md:grid-cols-3 gap-6">

            {/* Преуимущества-Тренеры */}
            <Card className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-amber-400/30 hover:border-amber-400/60 hover:shadow-[0_0_25px_-5px] hover:shadow-gold/20 transition-all duration-300 group overflow-hidden">
              <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <CardHeader className="pb-3">
                <CardTitle className="text-amber-400 text-xl font-semibold tracking-wide group-hover:text-amber-300 transition-colors">
                  Опытные тренеры
                </CardTitle>
              </CardHeader>
              <CardContent className="text-zinc-300 leading-relaxed">
                <p>Опытные тренеры с опытом больше 20и лет(в том числе международным), подготовившие призеров и победителей всероссйиских и международных соревнований, а также чемпионов ОАЭ.</p>
              </CardContent>
            </Card>

            {/* Преуимущества- Залы */}
            <Card className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-amber-400/30 hover:border-amber-400/60 hover:shadow-[0_0_25px_-5px] hover:shadow-gold/20 transition-all duration-300 group overflow-hidden">
              <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <CardHeader className="pb-3">
                <CardTitle className="text-amber-400 text-xl font-semibold tracking-wide group-hover:text-amber-300 transition-colors">
                  Залы
                </CardTitle>
              </CardHeader>
              <CardContent className="text-zinc-300 leading-relaxed">
                <p>Оборудованные залы (с раздевалками и всем необходимым) расположенные в удобной траснпортной досупности на северо-западе Москвы.</p>
              </CardContent>
            </Card>

            {/* Преуимущества-соревнования */}
            <Card className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-amber-400/30 hover:border-amber-400/60 hover:shadow-[0_0_25px_-5px] hover:shadow-gold/20 transition-all duration-300 group overflow-hidden">
              <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <CardHeader className="pb-3">
                <CardTitle className="text-amber-400 text-xl font-semibold tracking-wide group-hover:text-amber-300 transition-colors">
                  Участия в спортивных меропирятия
                </CardTitle>
              </CardHeader>
              <CardContent className="text-zinc-300 leading-relaxed">
                <p>Участия в соревнованиях, присвоение спортивных разрядов, проходжение диспанцеризаций, участие в показательных меропирятия, а также участие в спортивных сборах и спортивных лагерях.</p>
              </CardContent>
            </Card>

            {/* Преуимущества-Подход */}
            <Card className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-amber-400/30 hover:border-amber-400/60 hover:shadow-[0_0_25px_-5px] hover:shadow-gold/20 transition-all duration-300 group overflow-hidden">
              <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <CardHeader className="pb-3">
                <CardTitle className="text-amber-400 text-xl font-semibold tracking-wide group-hover:text-amber-300 transition-colors">
                  Подход к тренировочному процессу
                </CardTitle>
              </CardHeader>
              <CardContent className="text-zinc-300 leading-relaxed">
                <p>Мы воспринимаем тренировочный процесс (и занятия спортом вообще) как часть воспитания личности. Поэтому мы делаем акцент не только на достижения результата, но и на всеобщее развитие спортсмена как личности, как человека.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
  
      {/* Галерея */}
      <section className="py-12 bg-zinc-950 border-t border-b border-amber-500/30">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Наши тренировки</h2>

          <div className="w-24 h-0.5 bg-amber-500 mx-auto mt-2 mb-12"></div>
          
          <Gallery />

        </div>
      </section>

      {/* Отзывы */}
      <section className="py-16 bg-zinc-950">
        {/* Аналогично карточкам — 3–4 отзыва в grid - заполни позже */}
      </section>

      
    </>
  );
}

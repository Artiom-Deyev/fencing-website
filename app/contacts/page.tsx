'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
{/* Импорт компонентов для формы EmailJS */}
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';


export default function ContactsPage() {
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsLoading(true);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      toast.success('✅ Заявка отправлена!', {
        description: 'Мы перезвоним вам в ближайшее время.',
        duration: 7000,
        position: 'top-center',
        className: 'bg-zinc-900 border border-[#D4AF37] text-white',
        descriptionClassName: 'text-zinc-400',
        action: {
          label: 'Закрыть',
          onClick: () => {},
        },
      });

      form.current.reset(); // очищаем форму
    } catch (error) {
      console.error(error);
      toast.error('❌ Ошибка отправки', {
        description: 'Попробуйте позже или напишите нам напрямую.',
        duration: 6000,
        position: 'top-center',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="container mx-auto py-12 px-4">
        
        {/* Заголовок */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Контакты
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Наши залы находятся в двух удобных районах Москвы
          </p>
        </div>

        {/* Адреса */}
        <div className="max-w-3xl mx-auto mb-16 space-y-6">
          <div className="bg-zinc-900/70 border border-zinc-700 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-amber-400 mb-4">
              Первый зал
            </h2>
            <p className="text-lg leading-relaxed text-zinc-300">
              Улица Паршина, дом 39<br />
              (спортивный зал курчатовской школы «Меридиан»)
            </p>
          </div>

          <div className="bg-zinc-900/70 border border-zinc-700 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-amber-400 mb-4">
              Второй зал
            </h2>
            <p className="text-lg leading-relaxed text-zinc-300">
              Улица Свободы, 91<br />
              (Культурный Центр Алые Паруса)
            </p>
          </div>

          {/* Кнопка CTA */}
          <div className="text-center mt-10">
            <a
              href="#callback-form"
              className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-600 text-black font-semibold text-lg px-10 py-4 rounded-xl transition-all"
            >
              Перезвоните нам
              <span>→</span>
            </a>
          </div>
        </div>

        {/* Карты с жёлтыми акцентами */}
        <div className="max-w-5xl mx-auto space-y-12">
          
          {/* Карта 1 — Паршина */}
          <Card className="overflow-hidden border-2 border-amber-500/30 shadow-2xl bg-zinc-900">
            <CardHeader className="bg-zinc-950 border-b border-amber-500/20 py-6">
              <CardTitle className="text-2xl font-bold text-center text-white">
                Ул. Паршина, 39 (Меридиан)
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=37.450055%2C55.787923&z=17&pt=37.450055%2C55.787923"
                width="100%"
                height="320"           // ← было 480
                className="md:h-[420px] lg:h-[480px]"  // на больших экранах — выше
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </CardContent>
          </Card>

          {/* Карта 2 — Свободы */}
          <Card className="overflow-hidden border-2 border-amber-500/30 shadow-2xl bg-zinc-900">
            <CardHeader className="bg-zinc-950 border-b border-amber-500/20 py-6">
              <CardTitle className="text-2xl font-bold text-center text-white">
                Второй зал — ул. Свободы, 91 <br className="sm:hidden" /> (Алые Паруса)
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=37.445482%2C55.866647&z=17&pt=37.445482%2C55.866647,pm2rdm"
                width="100%"
                height="320"           // ← было 500
                className="md:h-[420px] lg:h-[500px]"  // на больших экранах — выше
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </CardContent>
          </Card>
        </div>
      </div>
        
      {/* ====================== Форма Обратного Звонка ====================== */}
      <div id="callback-form" className="max-w-lg sm:max-w-xl md:max-w-3xl mx-auto py-12 md:py-20 px-4">

        {/* Заголовок формы */}
        <div className="mb-10 md:mb-14 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Обратный звонок
          </h1>
          <p className="text-zinc-400 mt-3 text-lg md:text-xl lg:text-2xl">
            Мы свяжемся с вами в течение дня
          </p>
        </div>

        {/* Карточка формы — адаптивные отступы */}
        <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-[#D4AF37] rounded-3xl p-6 sm:p-8 md:p-12 lg:p-14 shadow-2xl">

          <form ref={form} onSubmit={sendEmail} className="space-y-6 sm:space-y-8">
            
            {/* Имя */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white text-base sm:text-lg">
                Имя
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Иван Иванов"
                required
                className="bg-zinc-950 border-zinc-700 text-white placeholder:text-zinc-500 
                focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] 
                h-12 sm:h-14 text-base sm:text-lg w-full"
              />
            </div>

            {/* Телефон */}
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-white text-base sm:text-lg">
                Телефон
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+7 (999) 123-45-67"
                required
                className="bg-zinc-950 border-zinc-700 text-white placeholder:text-zinc-500 
                focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] 
                h-12 sm:h-14 text-base sm:text-lg w-full"
              />
            </div>

            {/* Сообщение */}
            <div className="space-y-2">
              <Label htmlFor="message" className="text-white text-base sm:text-lg">
                Когда удобно перезвонить?
              </Label>
              <Textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Например: сегодня после 18:00 или в любое время днём"
                className="bg-zinc-950 border-zinc-700 text-white placeholder:text-zinc-500 
                focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] 
                resize-y min-h-[120px] sm:min-h-[140px] text-base sm:text-lg w-full"
              />
            </div>

            {/* Кнопка */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 sm:h-16 text-base sm:text-xl font-semibold 
              bg-gradient-to-r from-[#D4AF37] to-amber-500 
              hover:from-amber-500 hover:to-[#D4AF37] 
              text-black transition-all duration-300 
              disabled:opacity-70 mt-4"
            >
              {isLoading ? 'Отправляем...' : 'Перезвоните нам'}
            </Button>
          </form>
        </div>

        {/* Подсказка */}
        <p className="text-center text-zinc-500 text-sm mt-8">
          Все поля обязательны для заполнения
        </p>
      </div>

    </main>
  );
}
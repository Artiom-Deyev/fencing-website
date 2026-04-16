import { Card, CardContent, CardHeader } from '@/components/ui/card';

type Training = {
  time: string;
  group: string;
  trainer: string;
  price: string;
};

type DaySchedule = {
  day: string;
  hall: string;
  trainings: Training[];
};

export default function ScheduleGallery() {
  const schedule: DaySchedule[] = [
    {
      day: "Понедельник",
      hall: "Зал №1 (основной)",
      trainings: [
        { time: "17:00 – 18:00", group: "Младшая группа", trainer: "Артём Деев", price: "1200 ₽/занятие" },
        { time: "18:00 – 19:00", group: "Средняя группа", trainer: "Артём Деев", price: "1200 ₽/занятие" },
        { time: "18:00 – 19:00", group: "Взрослая группа", trainer: "Артём Деев", price: "1200 ₽/занятие" },
      ],
    },
    {
      day: "Вторник",
      hall: "Зал №2 (малый)",
      trainings: [
        { time: "18:00 – 19:00", group: "Младшая группа", trainer: "Артём Деев", price: "8500 ₽/мес" },
        { time: "19:00 – 20:00", group: "Младшая группа", trainer: "Артём Деев", price: "8500 ₽/мес" },
        { time: "20:00 – 21:00", group: "Средняя группа", trainer: "Артём Деев", price: "8500 ₽/мес" },
      ],
    },
    {
      day: "Среда",
      hall: "Зал №1 (основной)",
      trainings: [
        { time: "17:30 – 18:30", group: "Младшая группа", trainer: "Артём Деев", price: "1200 ₽/занятие" },
        { time: "18:30 – 19:30", group: "Средняя группа", trainer: "Артём Деев", price: "1200 ₽/занятие" },
        { time: "19:30 – 20:30", group: "Взрослая группа", trainer: "Артём Деев", price: "1200 ₽/занятие" },
      ],
    },
    {
      day: "Четверг",
      hall: "Зал №2 (малый)",
      trainings: [
        { time: "18:00 – 19:00", group: "Младшая группа", trainer: "Артём Деев", price: "8500 ₽/мес" },
        { time: "19:00 – 20:00", group: "Младшая группа", trainer: "Артём Деев", price: "8500 ₽/мес" },
        { time: "20:00 – 21:00", group: "Средняя группа", trainer: "Елена Тихомирова", price: "8500 ₽/мес" },
      ],
    },
    {
      day: "Пятница",
      hall: "Зал №1 (основной)",
      trainings: [
        { time: "15:00 – 16:00", group: "Младшая группа", trainer: "Артём Деев", price: "8500 ₽/мес" },
        { time: "16:00 – 17:00", group: "Младшая группа", trainer: "Артём Деев", price: "8500 ₽/мес" },
        { time: "17:00 – 18:00", group: "Средняя группа", trainer: "Елена Тихомирова", price: "8500 ₽/мес" },
      ],
    },
  ];

  {/* Уведомление о летнем перерыве */}
  const isSummerBreak = false;

  return (
    <main className="min-h-screen bg-zinc-950 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-16">Расписание занятий</h1>

       {/* Компактное уведомление о летнем перерыве */}
        {isSummerBreak && (
          <div className="max-w-xl mx-auto mb-12 bg-zinc-900 border border-amber-400/30 rounded-2xl p-5 md:p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-amber-400 text-xl">⚠️</span>
              <h2 className="text-xl font-semibold text-amber-400">Летний перерыв</h2>
            </div>
    
            <p className="text-white/80 text-[15px] leading-relaxed">
              С 1 июня по 31 августа 2026 года занятия в секции не проводятся.
            </p>
            <p className="text-amber-400/90 text-sm mt-1">
              Набор на новый сезон начнётся в сентябре
            </p>
          </div>
    )}

        {/* Вывод расписания */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {schedule.map((dayItem, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-amber-400/30 
              hover:border-amber-400/60 hover:shadow-xl hover:shadow-amber-500/10 
              transition-all duration-300 overflow-hidden"
            >
              <CardHeader className="pb-4 pt-6 px-6 border-b border-amber-400/10">

                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold text-amber-400 tracking-wide">
                  {dayItem.day}
                </h3>
                </div>
                <p className="text-amber-400/80 text-sm mt-1">
                  {dayItem.hall}
                </p>  
              </CardHeader>

              <CardContent className="p-6 py-2 space-y-6">
                {dayItem.trainings.map((training, i) => (
                  <div key={i} className={`${i !== 0 ? 'pt-6 border-t border-amber-400/10' : ''}`}>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-lg font-semibold text-white">{training.time}</span>
                      <span className="px-3 py-1 text-xs bg-amber-400/10 text-amber-400 rounded-full">
                        {training.price}
                      </span>
                    </div>

                    <p className="text-white font-medium">{training.group}</p>
                    <p className="text-zinc-400 text-sm">
                      Тренер: <span className="text-white">{training.trainer}</span>
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center text-zinc-500 text-sm">
          * Расписание может меняться. Актуальную информацию уточняйте по телефону или в Telegram.
        </div>
      </div>
    </main>
  );
}
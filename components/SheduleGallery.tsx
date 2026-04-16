import { Card, CardContent, CardHeader } from '@/components/ui/card';

export default function ScheduleGallery() {
  const schedule = [
    {
      day: "Понедельник",
      time: "17:30 – 18:30",
      group: "Младшие дети (7–10 лет)",
      trainer: "Артём Деев",
      price: "Абонемент — 2800 ₽/мес",
    },
    {
      day: "Вторник",
      time: "18:00 – 19:30",
      group: "Средняя группа (11–14 лет)",
      trainer: "Елена Тихомирова",
      price: "Абонемент — 3200 ₽/мес",
    },
    {
      day: "Среда",
      time: "17:30 – 18:30",
      group: "Младшие дети (7–10 лет)",
      trainer: "Артём Деев",
      price: "Абонемент — 2800 ₽/мес",
    },
    {
      day: "Четверг",
      time: "18:00 – 19:30",
      group: "Взрослые и подростки",
      trainer: "Екатерина Пронина",
      price: "Абонемент — 3500 ₽/мес",
    },
    {
      day: "Пятница",
      time: "17:30 – 19:00",
      group: "Подготовка к соревнованиям",
      trainer: "Артём Деев",
      price: "По договорённости",
    },
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* <h1 className="text-5xl md:text-6xl font-bold text-center mb-16">Расписание занятий</h1> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {schedule.map((item, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-amber-400/30 
                         hover:border-amber-400/60 hover:shadow-xl hover:shadow-amber-500/10 
                         transition-all duration-300 overflow-hidden group"
            >
              <CardHeader className="pb-4 pt-6 px-6 border-b border-amber-400/10">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold text-amber-400 tracking-wide">
                    {item.day}
                  </h3>
                  <span className="text-xs px-3 py-1 bg-amber-400/10 text-amber-400 rounded-full font-medium">
                    {item.time}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="px-6 py-6 space-y-4">
                <div>
                  <p className="text-white font-medium">{item.group}</p>
                </div>

                <div className="text-zinc-400">
                  Тренер: <span className="text-white font-medium">{item.trainer}</span>
                </div>

                <div className="pt-3 border-t border-amber-400/10">
                  <p className="text-amber-300 text-lg font-semibold">
                    {item.price}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Примечание внизу */}
        <div className="mt-12 text-center text-zinc-500 text-sm">
          * Расписание может меняться. Актуальную информацию уточняйте по телефону или в WhatsApp.
        </div>
      </div>
    </main>
  );
}
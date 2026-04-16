'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const images = [
  '/images/gallery-1.jpeg',
  '/images/gallery-2.jpeg',
  '/images/gallery-3.jpeg',
  '/images/gallery-4.jpeg',
  '/images/gallery-5.jpeg',
  '/images/gallery-6.jpeg',
];

export default function Gallery() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <div
            key={i}
            className="relative aspect-video overflow-hidden rounded-xl cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => setSelected(src)}
          >
            <Image
              src={src}
              alt={`Фехтование ${i + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={75}
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent 
          className="
            max-w-[95vw] 
            sm:max-w-[90vw] 
            md:max-w-[85vw] 
            lg:max-w-[80vw] 
            xl:max-w-[75vw] 
            2xl:max-w-[1200px]
            p-0 bg-black border-0 overflow-hidden
          "
        >
          <DialogTitle className="sr-only">Просмотр фотографии</DialogTitle>
          
          {selected && (
            <Image
              src={selected}
              alt="Фото крупно"
              width={1600}
              height={1000}
              className="w-full h-auto max-h-[90vh] object-contain"
              quality={90}
              priority={false}
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
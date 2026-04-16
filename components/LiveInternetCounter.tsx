'use client';

import { useEffect, useState } from 'react';

export default function LiveInternetCounter() {
  const [html, setHtml] = useState<string>('');

  useEffect(() => {
    // Всё вычисляем один раз на клиенте
    const referrer = document.referrer || '';
    const currentUrl = window.location.href;
    const pageTitle = (document.title || '').substring(0, 150);
    const random = Math.random();

    const hitUrl = `https://counter.yadro.ru/hit?t52.6;r${encodeURIComponent(referrer)};s${screen.width}*${screen.height}*${screen.colorDepth || 24};u${encodeURIComponent(currentUrl)};h${encodeURIComponent(pageTitle)};${random}`;

    const counterHtml = `
      <a href="https://www.liveinternet.ru/click" 
         target="_blank" 
         rel="noopener noreferrer">
        <img 
          id="licntA0FD" 
          width="88" 
          height="31" 
          style="border:0" 
          title="LiveInternet: показано число просмотров и посетителей за 24 часа" 
          src="${hitUrl}" 
          alt="" 
        />
      </a>
    `;

    setHtml(counterHtml);
  }, []);   // ← оставляем пустой массив

  if (!html) {
    return null; // ничего не рендерим, пока не посчитали ссылку
  }

  return (
    <div 
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
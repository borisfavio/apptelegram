// src/utils/telegram.js
export const tg = window.Telegram.WebApp;

export const initTelegram = () => {
  tg.ready();
  tg.expand();
};

export const getUserInfo = () => {
  return tg.initDataUnsafe?.user || null;
};

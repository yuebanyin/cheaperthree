import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { routes } from '@/routes';
import en from '../public/locale/en.json';
import zh_cn from '../public/locale/zh-cn.json';
import { lsGetItem, initRem } from '@/utils';
import '@/styles/global.scss';
import '@/styles/tailwindcss.scss';

// 设置多语言
const resources = {
  en: {
    translation: en,
  },
  zh_cn: {
    translation: zh_cn,
  },
};

// 初始化多语言包
i18n.use(initReactI18next).init({
  resources,
  lng: lsGetItem('lang') || 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

const container = document.getElementById('root');

const root = createRoot(container);

// 适配
initRem();

root.render(
  <React.Suspense fallback={null}>
    <RouterProvider router={createBrowserRouter(routes)} />
  </React.Suspense>,
);

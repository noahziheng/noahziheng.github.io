// src/i18n.js
import { register, init, getLocaleFromNavigator } from 'svelte-i18n';

register('en-US', () => import('./en-US.json'));
register('zh-CN', () => import('./zh-CN.json'));

init({
  fallbackLocale: 'en-US',
  initialLocale: getLocaleFromNavigator(),
});
import { en, type Dict } from './en';
import { id } from './id';

export const locales = ['en', 'id'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

const dicts: Record<Locale, Dict> = { en, id };

export const t = (locale: Locale): Dict => dicts[locale];

/** Path halaman utama per bahasa: Inggris di "/", Indonesia di "/id/". */
export const homePath = (locale: Locale): string => (locale === defaultLocale ? '/' : `/${locale}/`);

export { site } from './site';
export type { Dict };

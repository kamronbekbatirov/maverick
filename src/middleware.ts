import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n/request';

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale: 'ru',
  
  // Always use locale prefix, but redirect root to default locale
  localePrefix: 'as-needed',
  
  // Disable automatic locale detection based on Accept-Language header
  localeDetection: false
});

export const config = {
  // Match only internationalized pathnames
  matcher: [
    // Match the root path
    '/',
    // Match all paths with locale prefixes
    '/(ru|en|uz)/:path*',
    // Match paths that need locale detection
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|logo.png|logo-hero.png).*)'
  ]
};

'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { Menu, X, Globe } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const t = useTranslations('navigation');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const languages = [
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'uz', name: 'O\'zbek', flag: '🇺🇿' }
  ];

  const switchLanguage = (newLocale: string) => {
    const path = pathname.split('/').slice(2).join('/');
    router.push(`/${newLocale}/${path}`);
    setIsLangMenuOpen(false);
  };

  const currentLanguage = languages.find(lang => lang.code === locale);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-red-600/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center space-x-3">
            <div className="w-10 h-10 flex items-center justify-center">
              <img src="/logo.png" alt="Maverick" className="w-full h-full object-contain" />
            </div>
            <span className="text-white text-xl font-bold tracking-wide">MAVERICK</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href={`/${locale}`} className="text-white hover:text-red-400 transition-colors">
              {t('home')}
            </Link>
            <Link href={`/${locale}#services`} className="text-white hover:text-red-400 transition-colors">
              {t('services')}
            </Link>
            <Link href={`/${locale}#about`} className="text-white hover:text-red-400 transition-colors">
              {t('about')}
            </Link>
            <Link href={`/${locale}#contact`} className="text-white hover:text-red-400 transition-colors">
              {t('contact')}
            </Link>
          </nav>

          {/* Language Selector & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center space-x-1 text-white hover:text-red-400 transition-colors"
              >
                <Globe size={20} />
                <span className="hidden sm:inline">{currentLanguage?.name}</span>
                <span className="sm:hidden">{currentLanguage?.flag}</span>
              </button>

              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-black/95 backdrop-blur-md rounded-lg border border-red-600/20 shadow-lg">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => switchLanguage(lang.code)}
                      className={`w-full text-left px-4 py-2 hover:bg-red-600/10 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                        locale === lang.code ? 'text-red-400' : 'text-white'
                      }`}
                    >
                      <span className="mr-2">{lang.flag}</span>
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white hover:text-red-400 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 backdrop-blur-md rounded-b-lg border-t border-red-600/20">
              <Link
                href={`/${locale}`}
                className="block px-3 py-2 text-white hover:text-red-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('home')}
              </Link>
              <Link
                href={`/${locale}#services`}
                className="block px-3 py-2 text-white hover:text-red-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('services')}
              </Link>
              <Link
                href={`/${locale}#about`}
                className="block px-3 py-2 text-white hover:text-red-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('about')}
              </Link>
              <Link
                href={`/${locale}#contact`}
                className="block px-3 py-2 text-white hover:text-red-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('contact')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

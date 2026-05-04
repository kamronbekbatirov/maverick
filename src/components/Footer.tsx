'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Send, Facebook } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Send, href: '#', label: 'Telegram' },
    { icon: Facebook, href: '#', label: 'Facebook' }
  ];

  const contactInfo = [
    { icon: Phone, text: '+998 90 123 45 67', href: 'tel:+998901234567' },
    { icon: Mail, text: 'info@maverick.uz', href: 'mailto:info@maverick.uz' },
    { icon: MapPin, text: 'Ташкент, Узбекистан', href: '#' }
  ];

  return (
    <footer id="contact" className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            className="col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link href={`/${locale}`} className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 flex items-center justify-center">
                <img src="/logo.png" alt="Maverick" className="w-full h-full object-contain" />
              </div>
              <span className="text-2xl font-bold tracking-wide">MAVERICK</span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Ваш надежный партнер в мире современных услуг. От автомойки до развлечений.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Навигация</h3>
            <div className="space-y-2">
              <Link href={`/${locale}`} className="block text-gray-400 hover:text-red-400 transition-colors">
                Главная
              </Link>
              <Link href={`/${locale}#services`} className="block text-gray-400 hover:text-red-400 transition-colors">
                Услуги
              </Link>
              <Link href={`/${locale}#about`} className="block text-gray-400 hover:text-red-400 transition-colors">
                О нас
              </Link>
              <Link href={`/${locale}#contact`} className="block text-gray-400 hover:text-red-400 transition-colors">
                Контакты
              </Link>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            className="col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Услуги</h3>
            <div className="space-y-2">
              <div className="text-gray-400">
                Maverick Detailing
              </div>
              <div className="text-gray-400">
                Игровой клуб <span className="text-red-400 text-xs">(скоро)</span>
              </div>
              <div className="text-gray-400">
                Ресторан <span className="text-red-400 text-xs">(скоро)</span>
              </div>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            className="col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">{t('contact')}</h3>
            <div className="space-y-3">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center space-x-3 text-gray-400 hover:text-red-400 transition-colors"
                >
                  <info.icon size={18} />
                  <span>{info.text}</span>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">{t('follow')}</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm mb-4 sm:mb-0">
            {t('copyright')}
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
              Условия использования
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

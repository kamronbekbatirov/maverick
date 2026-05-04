'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Smartphone, Car, MapPin, Wrench } from 'lucide-react';

export default function DetailingSection() {
  const t = useTranslations('detailing');

  const features = [
    {
      icon: Smartphone,
      title: t('features.app'),
      description: 'Интуитивный интерфейс для быстрого заказа'
    },
    {
      icon: Car,
      title: t('features.garage'),
      description: 'Сохраняйте информацию о всех ваших автомобилях'
    },
    {
      icon: MapPin,
      title: t('features.location'),
      description: 'Мы приедем в любое удобное для вас место'
    },
    {
      icon: Wrench,
      title: t('features.professional'),
      description: 'Современные инструменты и качественная химия'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
            <span className="text-gradient">{t('title')}</span>
          </h2>
          <p className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
          <p className="text-lg text-gray-500 max-w-4xl mx-auto leading-relaxed">
            {t('description')}
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Car Wash Process */}
        <motion.div
          className="bg-black rounded-2xl p-8 md:p-12 text-white relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-8 text-center">
              Как это работает?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h4 className="text-xl font-semibold mb-2">Скачайте приложение</h4>
                <p className="text-gray-300">Добавьте свой автомобиль в виртуальный гараж</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h4 className="text-xl font-semibold mb-2">Выберите услугу</h4>
                <p className="text-gray-300">Укажите тип мойки и дополнительные услуги</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h4 className="text-xl font-semibold mb-2">Мы приедем к вам</h4>
                <p className="text-gray-300">Профессиональная мойка в удобном для вас месте</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <a 
            href="https://t.me/maverickuz_bot" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-600/25"
          >
            {t('cta')}
          </a>
          <p className="text-gray-500 mt-4">Приложение скоро будет доступно в App Store и Google Play</p>
        </motion.div>
      </div>
    </section>
  );
}

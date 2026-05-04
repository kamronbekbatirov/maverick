'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Gamepad2, Utensils, Plus } from 'lucide-react';

export default function FutureServices() {
  const t = useTranslations('future');

  const services = [
    {
      icon: Gamepad2,
      title: t('gaming.title'),
      description: t('gaming.description'),
      color: 'from-purple-600 to-blue-600',
      status: 'Скоро'
    },
    {
      icon: Utensils,
      title: t('restaurant.title'),
      description: t('restaurant.description'),
      color: 'from-orange-600 to-red-600',
      status: 'В разработке'
    },
    {
      icon: Plus,
      title: t('more.title'),
      description: t('more.description'),
      color: 'from-gray-600 to-black',
      status: 'Планируется'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:scale-105">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-red-100 text-red-600 text-xs font-semibold px-3 py-1 rounded-full">
                    {service.status}
                  </span>
                </div>

                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-black mb-4">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Decorative Element */}
                <div className="absolute bottom-0 right-0 w-32 h-32 opacity-5">
                  <service.icon className="w-full h-full text-black" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          className="mt-20 bg-white rounded-2xl p-8 md:p-12 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-black mb-12">
            Наша дорожная карта
          </h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-red-600 hidden md:block"></div>
            
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-8 text-center md:text-right">
                  <h4 className="text-xl font-bold text-black mb-2">2025 - Сейчас</h4>
                  <p className="text-gray-600">Maverick Detailing - выездная автомойка</p>
                </div>
                <div className="w-4 h-4 bg-red-600 rounded-full z-10 my-4 md:my-0"></div>
                <div className="md:w-1/2 md:pl-8"></div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-8"></div>
                <div className="w-4 h-4 bg-gray-300 rounded-full z-10 my-4 md:my-0"></div>
                <div className="md:w-1/2 md:pl-8 text-center md:text-left">
                  <h4 className="text-xl font-bold text-black mb-2">2026</h4>
                  <p className="text-gray-600">Открытие игрового клуба</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-8 text-center md:text-right">
                  <h4 className="text-xl font-bold text-black mb-2">2027</h4>
                  <p className="text-gray-600">Запуск ресторана</p>
                </div>
                <div className="w-4 h-4 bg-gray-300 rounded-full z-10 my-4 md:my-0"></div>
                <div className="md:w-1/2 md:pl-8"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { useState, useEffect } from 'react';
import { Moon, Sun, Calendar, Users, Briefcase, Mail, Linkedin, Phone, ChevronDown } from 'lucide-react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const services = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Event Management",
      description: "Kompletní organizace firemních akcí, teambuildingy, konference a networking eventy na klíč.",
      features: ["Plánování a koordinace", "Výběr venue", "Catering & logistika"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Vzdálená HR podpora",
      description: "Profesionální HR služby pro firmy bez interního HR oddělení nebo jako posila vašemu týmu.",
      features: ["Recruitment", "Onboarding", "HR administration"]
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "HR Consulting",
      description: "Strategické poradenství v oblasti lidských zdrojů, kultury a procesů.",
      features: ["HR strategie", "Nastavení procesů", "Employee experience"]
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg' 
          : 'bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg sm:text-xl">S</span>
              </div>
              <span className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                Sára Slavíková
              </span>
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors shadow-md"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-gray-700" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 dark:from-purple-900 dark:via-pink-900 dark:to-blue-900">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 text-center relative z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg">
              <span className="block">Sára Slavíková</span>
              <span className="block text-white/95">
                Event & HR Pro
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-8 sm:mb-12 px-4 drop-shadow-md">
              Profesionální event management a vzdálená HR podpora pro moderní firmy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <a
                href="#services"
                className="w-full sm:w-auto px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:bg-white/90 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Zjistit více
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-white/20 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-white/30"
              >
                Kontaktovat
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/70" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 sm:py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Služby na míru
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Komplexní podpora pro vaše eventy a HR potřeby
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-6 sm:p-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-800/50 rounded-2xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700 dark:text-gray-300">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                O mně
              </h2>
              <div className="space-y-4 text-base sm:text-lg text-gray-600 dark:text-gray-300">
                <p>
                  Jsem profesionální event manažerka a HR specialistka s vášní pro vytváření nezapomenutelných zážitků 
                  a podporu firemní kultury.
                </p>
                <p>
                  S letitou praxí v organizaci firemních akcí a řízení lidských zdrojů nabízím komplexní řešení 
                  šitá na míru vašim potřebám. Věřím, že kvalitní eventy a spokojení zaměstnanci jsou základem 
                  úspěšné firmy.
                </p>
                <p>
                  Spolupracuji s firmami všech velikostí – od startupů až po velké korporace. Vzdálená forma 
                  práce mi umožňuje být flexibilní a efektivní.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Users className="w-32 h-32 sm:w-48 sm:h-48 text-purple-600 dark:text-purple-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Pojďme spolupracovat
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Ozvěte se a probereme, jak vám mohu pomoci
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-800/50 rounded-2xl p-6 sm:p-8 lg:p-12 border border-gray-200 dark:border-gray-700">
              <div className="space-y-6">
                <a
                  href="mailto:sara@example.com"
                  className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-900 rounded-xl hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                    <p className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">sara@example.com</p>
                  </div>
                </a>

                <a
                  href="tel:+420123456789"
                  className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-900 rounded-xl hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Telefon</p>
                    <p className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">+420 123 456 789</p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-900 rounded-xl hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">LinkedIn</p>
                    <p className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">Sára Slavíková</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2026 Sára Slavíková. Event Management & HR Services.
          </p>
        </div>
      </footer>
    </div>
  );
}

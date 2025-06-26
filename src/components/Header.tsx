import React, { useState, useEffect } from 'react';
import { Menu, X, Music, Zap } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { href: '#home', label: 'Início' },
    { href: '#about', label: 'Sobre' },
    { href: '#members', label: 'Integrantes' },
    { href: '#projects', label: 'Projetos' },
    { href: '#casa-cajueiro', label: 'Casa Cajueiro' },
    { href: '#partners', label: 'Parceiros' },
    { href: '#services', label: 'Serviços' },
    { href: '#contact', label: 'Contato' }
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-ancestral-bark/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Music className="w-8 h-8 text-ancestral-gold animate-pulse" />
              <Zap className="w-4 h-4 text-tech-circuit absolute -top-1 -right-1" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-ancestral-gold font-organic">
                Tecnofonia Ancestral
              </h1>
              <p className="text-xs text-ancestral-sage">Coletivo Cultural</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white hover:text-ancestral-gold transition-colors duration-300 font-medium"
              >
                {item.label}
              </a>
            ))}
            <button className="bg-ancestral-gold text-ancestral-bark px-6 py-2 rounded-full font-semibold hover:bg-ancestral-ochre transition-colors duration-300">
              Apoie o Coletivo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-ancestral-bark/95 rounded-lg p-4">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-2 text-white hover:text-ancestral-gold transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button className="w-full mt-4 bg-ancestral-gold text-ancestral-bark py-2 rounded-full font-semibold">
              Apoie o Coletivo
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
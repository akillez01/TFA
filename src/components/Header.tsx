import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import logoSemNome from '../assets/logo-sem-nome.png';

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
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-2xl'
          : 'bg-black/20 backdrop-blur-sm'
        }`}
    >
      <nav className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 min-w-0">
            <img
              src={logoSemNome}
              alt="Logo Tecnofonia Ancestral"
              className="w-10 h-10 md:w-11 md:h-11 rounded-full object-cover border border-ancestral-gold/40 shrink-0"
            />
            <div className="leading-tight min-w-0">
              <p className="text-base md:text-xl font-bold text-ancestral-gold font-organic whitespace-nowrap truncate">
                Tecnofonia Ancestral
              </p>
              <p className="text-[11px] md:text-xs text-ancestral-sage tracking-wide">Coletivo Cultural</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white/90 hover:text-ancestral-gold transition-colors duration-300 font-medium text-sm xl:text-base"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-ancestral-gold text-black px-5 py-2 rounded-full font-semibold hover:bg-ancestral-ochre transition-colors duration-300"
            >
              Apoie o Coletivo
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-3 bg-black/90 border border-white/10 rounded-2xl p-4 shadow-xl">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-2.5 text-white/90 hover:text-ancestral-gold transition-colors duration-300 border-b border-white/5 last:border-b-0"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block w-full mt-4 bg-ancestral-gold text-black py-3 rounded-full font-semibold text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Apoie o Coletivo
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
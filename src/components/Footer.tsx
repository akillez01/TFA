import React from 'react';
import { Heart, Music, Zap, Instagram, Youtube, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Início", href: "#home" },
    { name: "Sobre", href: "#about" },
    { name: "Projetos", href: "#projects" },
    { name: "Casa Cajueiro", href: "#casa-cajueiro" },
    { name: "Contato", href: "#contact" }
  ];

  const services = [
    { name: "Produção Cultural", href: "#services" },
    { name: "Gravação", href: "#services" },
    { name: "Assessoria", href: "#services" },
    { name: "Curadoria", href: "#services" },
    { name: "Formação", href: "#services" }
  ];

  return (
    <footer className="bg-ancestral-bark text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="relative">
                  <Music className="w-8 h-8 text-ancestral-gold" />
                  <Zap className="w-4 h-4 text-tech-circuit absolute -top-1 -right-1" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-ancestral-gold font-organic">
                    Tecnofonia Ancestral
                  </h3>
                  <p className="text-xs text-ancestral-sage">Coletivo Cultural</p>
                </div>
              </div>
              <p className="text-ancestral-sage text-sm leading-relaxed mb-4">
                Unindo tecnologia e ancestralidade a favor da música independente, 
                cultura popular e formação artística comunitária.
              </p>
              <div className="flex space-x-3">
                <a href="#" className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-full hover:scale-110 transition-transform duration-300">
                  <Instagram className="w-4 h-4 text-white" />
                </a>
                <a href="#" className="bg-red-600 p-2 rounded-full hover:scale-110 transition-transform duration-300">
                  <Youtube className="w-4 h-4 text-white" />
                </a>
                <a href="#" className="bg-blue-600 p-2 rounded-full hover:scale-110 transition-transform duration-300">
                  <Facebook className="w-4 h-4 text-white" />
                </a>
                <a href="#" className="bg-ancestral-gold p-2 rounded-full hover:scale-110 transition-transform duration-300">
                  <Mail className="w-4 h-4 text-ancestral-bark" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-ancestral-gold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-ancestral-sage hover:text-ancestral-gold transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-ancestral-gold mb-4">Serviços</h4>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href={service.href}
                      className="text-ancestral-sage hover:text-ancestral-gold transition-colors duration-300 text-sm"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-lg font-semibold text-ancestral-gold mb-4">Apoie o Coletivo</h4>
              <p className="text-ancestral-sage text-sm mb-4">
                Ajude-nos a manter nossos projetos culturais e a Casa Cajueiro.
              </p>
              <button className="w-full bg-ancestral-gold text-ancestral-bark py-2 px-4 rounded-lg font-semibold hover:bg-ancestral-ochre transition-colors duration-300 text-sm">
                <Heart className="w-4 h-4 inline mr-2" />
                Fazer Doação
              </button>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-ancestral-earth pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-ancestral-sage text-sm mb-4 md:mb-0">
                © {currentYear} Tecnofonia Ancestral. Todos os direitos reservados.
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-ancestral-sage hover:text-ancestral-gold transition-colors duration-300">
                  Política de Privacidade
                </a>
                <a href="#" className="text-ancestral-sage hover:text-ancestral-gold transition-colors duration-300">
                  Termos de Uso
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
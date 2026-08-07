import { ArrowDown, Mic2, Radio, Users } from 'lucide-react';
import logoTfa from '../assets/logo-tfa.png';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-28 md:pt-32 pb-16 md:pb-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-4 md:left-10 animate-float hidden sm:block">
          <Users className="w-16 h-16 text-ancestral-sage/30" />
        </div>
        <div className="absolute top-40 right-6 md:right-20 animate-float" style={{ animationDelay: '1s' }}>
          <Radio className="w-12 h-12 text-tech-circuit/40" />
        </div>
        <div className="absolute bottom-36 left-4 md:left-20 animate-float hidden md:block" style={{ animationDelay: '2s' }}>
          <Mic2 className="w-14 h-14 text-ancestral-gold/30" />
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <p className="text-[11px] md:text-xs uppercase tracking-[0.25em] text-white/70 mb-5 md:mb-6">
            Sao Paulo · Cultura Popular · Musica Independente
          </p>

          <h1 className="text-[2.8rem] leading-[0.95] sm:text-6xl md:text-7xl font-bold text-white mb-5 md:mb-6 font-organic">
            <span className="text-ancestral-gold block">Tecnofonia</span>
            <br />
            <span className="text-ancestral-sage block">Ancestral</span>
          </h1>

          <img
            src={logoTfa}
            alt="Logo Tecnofonia Ancestral"
            className="w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 mx-auto mb-7 md:mb-8 rounded-full object-cover border-2 border-ancestral-gold/50 shadow-2xl shadow-black/40"
          />

          <p className="text-lg sm:text-xl md:text-2xl text-white mb-6 md:mb-8 leading-relaxed max-w-4xl mx-auto">
            Unimos <span className="text-tech-circuit font-semibold">tecnologia</span>,{' '}
            <span className="text-ancestral-gold font-semibold">ancestralidade</span> e acao coletiva
            para fortalecer artistas independentes e perifericos.
          </p>

          <p className="text-base sm:text-lg text-ancestral-sage mb-10 md:mb-12 max-w-3xl mx-auto">
            Da Casa Cajueiro aos encontros culturais, atuamos com producao musical,
            assessoria artistica, registros audiovisuais e formacao comunitaria.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="#projects"
              className="bg-ancestral-gold text-black px-7 py-3.5 rounded-full font-semibold text-base md:text-lg hover:bg-ancestral-ochre transition-all duration-300 hover:scale-105"
            >
              Conheça Nossos Projetos
            </a>
            <a
              href="#contact"
              className="border-2 border-ancestral-gold text-ancestral-gold px-7 py-3.5 rounded-full font-semibold text-base md:text-lg hover:bg-ancestral-gold hover:text-black transition-all duration-300"
            >
              Apoie o Coletivo
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-5 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-ancestral-gold" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
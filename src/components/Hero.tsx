import React from 'react';
import { ArrowDown, Headphones, Leaf, Cpu } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 animate-float">
          <Leaf className="w-16 h-16 text-ancestral-sage/30" />
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
          <Cpu className="w-12 h-12 text-tech-circuit/40" />
        </div>
        <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '2s' }}>
          <Headphones className="w-14 h-14 text-ancestral-gold/30" />
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-organic">
            <span className="text-ancestral-gold">Tecnofonia</span>
            <br />
            <span className="text-ancestral-sage">Ancestral</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
            Unindo <span className="text-tech-circuit font-semibold">tecnologia</span> e{' '}
            <span className="text-ancestral-gold font-semibold">ancestralidade</span>{' '}
            a favor da música independente
          </p>

          <p className="text-lg text-ancestral-sage mb-12 max-w-2xl mx-auto">
            Coletivo cultural dedicado à música independente, cultura popular, 
            arte periférica e formação artística comunitária
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-ancestral-gold text-ancestral-bark px-8 py-4 rounded-full font-semibold text-lg hover:bg-ancestral-ochre transition-all duration-300 hover:scale-105">
              Conheça Nossos Projetos
            </button>
            <button className="border-2 border-ancestral-gold text-ancestral-gold px-8 py-4 rounded-full font-semibold text-lg hover:bg-ancestral-gold hover:text-ancestral-bark transition-all duration-300">
              Apoie o Coletivo
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-ancestral-gold" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
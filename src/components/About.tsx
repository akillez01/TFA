import React from 'react';
import { Heart, Users, Music2, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-r from-ancestral-forest to-ancestral-bark">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-ancestral-gold mb-6 font-organic">
              Sobre o Coletivo
            </h2>
            <div className="w-24 h-1 bg-ancestral-gold mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-4">Nossa História</h3>
              <p className="text-ancestral-sage leading-relaxed">
                O Tecnofonia Ancestral surge da necessidade de criar pontes entre 
                a sabedoria ancestral e as possibilidades tecnológicas contemporâneas. 
                Nosso coletivo nasce do encontro de artistas, produtores e educadores 
                comprometidos com a valorização da cultura popular e da música independente.
              </p>
              <p className="text-ancestral-sage leading-relaxed">
                Acreditamos que a tecnologia deve servir à preservação e difusão 
                das tradições culturais, criando novos caminhos para a expressão 
                artística comunitária e o fortalecimento da identidade cultural.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-ancestral-earth/30 p-6 rounded-lg text-center hover:bg-ancestral-earth/50 transition-colors duration-300">
                <Heart className="w-12 h-12 text-ancestral-gold mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2">Paixão</h4>
                <p className="text-sm text-ancestral-sage">Pela música e cultura popular</p>
              </div>
              <div className="bg-ancestral-earth/30 p-6 rounded-lg text-center hover:bg-ancestral-earth/50 transition-colors duration-300">
                <Users className="w-12 h-12 text-ancestral-gold mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2">Comunidade</h4>
                <p className="text-sm text-ancestral-sage">Fortalecimento coletivo</p>
              </div>
              <div className="bg-ancestral-earth/30 p-6 rounded-lg text-center hover:bg-ancestral-earth/50 transition-colors duration-300">
                <Music2 className="w-12 h-12 text-ancestral-gold mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2">Independência</h4>
                <p className="text-sm text-ancestral-sage">Música autoral e autêntica</p>
              </div>
              <div className="bg-ancestral-earth/30 p-6 rounded-lg text-center hover:bg-ancestral-earth/50 transition-colors duration-300">
                <Sparkles className="w-12 h-12 text-ancestral-gold mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2">Inovação</h4>
                <p className="text-sm text-ancestral-sage">Tecnologia a serviço da arte</p>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-ancestral-gold/10 p-8 rounded-lg border-l-4 border-ancestral-gold">
            <blockquote className="text-xl italic text-white text-center">
              "A tecnologia deve amplificar as vozes ancestrais, não silenciá-las. 
              Nossa missão é criar espaços onde tradição e inovação dançam juntas 
              em harmonia, fortalecendo nossa identidade cultural."
            </blockquote>
            <p className="text-ancestral-gold text-center mt-4 font-semibold">
              - Manifesto Tecnofonia Ancestral
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
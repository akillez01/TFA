import React from 'react';
import { Home, Hammer, Users, Calendar, MapPin, Heart } from 'lucide-react';

const CasaCajueiro = () => {
  return (
    <section id="casa-cajueiro" className="py-20 bg-gradient-to-br from-ancestral-bark to-ancestral-clay">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-ancestral-gold mb-6 font-organic">
              Casa Cajueiro
            </h2>
            <div className="w-24 h-1 bg-ancestral-gold mx-auto mb-8"></div>
            <p className="text-xl text-ancestral-sage max-w-2xl mx-auto">
              Nosso espaço cultural comunitário, onde a música e a cultura florescem
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-4">Nossa Casa</h3>
              <p className="text-ancestral-sage leading-relaxed">
                A Casa Cajueiro é mais que um espaço físico - é o coração pulsante 
                do Tecnofonia Ancestral. Localizada em uma região periférica, 
                representa nossa filosofia de democratização cultural e acesso à arte.
              </p>
              <p className="text-ancestral-sage leading-relaxed">
                Através de mutirões comunitários e parcerias locais, transformamos 
                este espaço em um centro de referência para atividades culturais, 
                ensaios, gravações e formação artística.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center">
                  <div className="bg-ancestral-gold/20 p-4 rounded-lg mb-2">
                    <Users className="w-8 h-8 text-ancestral-gold mx-auto" />
                  </div>
                  <p className="text-white font-semibold">Comunidade</p>
                  <p className="text-ancestral-sage text-sm">Ativa e participativa</p>
                </div>
                <div className="text-center">
                  <div className="bg-ancestral-gold/20 p-4 rounded-lg mb-2">
                    <Calendar className="w-8 h-8 text-ancestral-gold mx-auto" />
                  </div>
                  <p className="text-white font-semibold">Atividades</p>
                  <p className="text-ancestral-sage text-sm">Semanais e mensais</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Casa Cajueiro"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ancestral-bark/80 to-transparent rounded-lg"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center text-white mb-2">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">Espaço Cultural Comunitário</span>
                </div>
                <h4 className="text-xl font-bold text-ancestral-gold">Casa Cajueiro</h4>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-ancestral-earth/30 p-6 rounded-lg">
              <Home className="w-12 h-12 text-ancestral-gold mb-4" />
              <h4 className="text-xl font-bold text-white mb-3">Espaço Físico</h4>
              <p className="text-ancestral-sage">
                Sala de ensaios, estúdio de gravação caseiro, área de convivência 
                e espaço para oficinas culturais.
              </p>
            </div>

            <div className="bg-ancestral-earth/30 p-6 rounded-lg">
              <Hammer className="w-12 h-12 text-ancestral-gold mb-4" />
              <h4 className="text-xl font-bold text-white mb-3">Reformas</h4>
              <p className="text-ancestral-sage">
                Mutirões comunitários para melhorias estruturais, 
                equipamentos e acessibilidade do espaço.
              </p>
            </div>

            <div className="bg-ancestral-earth/30 p-6 rounded-lg">
              <Heart className="w-12 h-12 text-ancestral-gold mb-4" />
              <h4 className="text-xl font-bold text-white mb-3">Comunidade</h4>
              <p className="text-ancestral-sage">
                Ponto de encontro para artistas locais, famílias 
                e jovens interessados em cultura e música.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button className="bg-ancestral-gold text-ancestral-bark px-8 py-3 rounded-full font-semibold hover:bg-ancestral-ochre transition-colors duration-300 mr-4">
              Conheça Nosso Espaço
            </button>
            <button className="border border-ancestral-gold text-ancestral-gold px-8 py-3 rounded-full font-semibold hover:bg-ancestral-gold hover:text-ancestral-bark transition-all duration-300">
              Apoie as Reformas
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CasaCajueiro;
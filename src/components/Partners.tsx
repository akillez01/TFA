import React from 'react';
import { Music, Mic2, Guitar, Drum, Piano, Headphones } from 'lucide-react';

const Partners = () => {
  const artists = [
    {
      name: "Canirins",
      style: "Música Popular Brasileira",
      description: "Duo focado na valorização da música brasileira tradicional com arranjos contemporâneos.",
      icon: Guitar
    },
    {
      name: "Omi Okun",
      style: "Música Afro-Brasileira",
      description: "Projeto dedicado à música de matriz africana e aos ritmos tradicionais brasileiros.",
      icon: Drum
    },
    {
      name: "Emilio Dias",
      style: "Canção Autoral",
      description: "Compositor e intérprete com trabalhos voltados à música autoral e poesia cantada.",
      icon: Mic2
    },
    {
      name: "Kapai Kalapalo",
      style: "Música Indígena",
      description: "Artista indígena dedicado à preservação e divulgação da cultura musical Kalapalo.",
      icon: Music
    },
    {
      name: "Luciana Félix",
      style: "MPB Contemporânea",
      description: "Cantora e compositora com forte presença na cena da música popular brasileira.",
      icon: Headphones
    },
    {
      name: "Tony Sagga",
      style: "Reggae e World Music",
      description: "Músico multi-instrumentista com influências do reggae e world music.",
      icon: Guitar
    },
    {
      name: "Os Estilhaços",
      style: "Rock Alternativo",
      description: "Banda de rock alternativo com letras engajadas e sonoridade única.",
      icon: Piano
    }
  ];

  return (
    <section id="partners" className="py-20 bg-gradient-to-r from-ancestral-earth to-ancestral-forest">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-ancestral-gold mb-6 font-organic">
              Artistas Parceiros
            </h2>
            <div className="w-24 h-1 bg-ancestral-gold mx-auto mb-8"></div>
            <p className="text-xl text-ancestral-sage max-w-2xl mx-auto">
              Conheça os talentosos artistas que fazem parte da nossa rede colaborativa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artists.map((artist, index) => (
              <div
                key={index}
                className="bg-ancestral-bark/40 p-6 rounded-lg hover:bg-ancestral-bark/60 transition-all duration-300 hover:scale-105 border border-ancestral-gold/20 group"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-ancestral-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-ancestral-gold/30 transition-colors duration-300">
                    <artist.icon className="w-8 h-8 text-ancestral-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{artist.name}</h3>
                  <p className="text-ancestral-gold font-semibold mb-3">{artist.style}</p>
                  <p className="text-ancestral-sage text-sm leading-relaxed mb-4">{artist.description}</p>
                  
                  <div className="flex justify-center gap-2">
                    <button className="text-ancestral-gold hover:text-white transition-colors duration-300">
                      <Music className="w-5 h-5" />
                    </button>
                    <button className="text-ancestral-gold hover:text-white transition-colors duration-300">
                      <Headphones className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-ancestral-sage mb-6">
              Interessado em fazer parte da nossa rede de parceiros?
            </p>
            <button className="bg-ancestral-gold text-ancestral-bark px-8 py-3 rounded-full font-semibold hover:bg-ancestral-ochre transition-colors duration-300">
              Seja um Parceiro
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
import React from 'react';
import { User, Music, Mic, Guitar, Drum, Piano } from 'lucide-react';

const Members = () => {
  const members = [
    {
      name: "Yayá Prates",
      role: "Fundadora e Produtora Cultural",
      bio: "Especialista em produção cultural com foco na valorização da música popular brasileira.",
      icon: Music
    },
    {
      name: "Alexandre Xéu",
      role: "Músico e Educador",
      bio: "Multi-instrumentista dedicado à educação musical comunitária e preservação das tradições.",
      icon: Guitar
    },
    {
      name: "Felipe Fererê",
      role: "Produtor Musical",
      bio: "Produtor focado em música independente e tecnologias de gravação acessíveis.",
      icon: Mic
    },
    {
      name: "Tabs Ferreira",
      role: "Artista Visual e Designer",
      bio: "Responsável pela identidade visual e projetos de arte digital do coletivo.",
      icon: User
    },
    {
      name: "Rafael Trevigno",
      role: "Músico e Compositor",
      bio: "Compositor e intérprete com trabalhos voltados à fusão entre tradição e contemporaneidade.",
      icon: Piano
    },
    {
      name: "Thábata Ferreira",
      role: "Percussionista e Educadora",
      bio: "Especialista em ritmos tradicionais e educação musical para jovens e adultos.",
      icon: Drum
    }
  ];

  return (
    <section id="members" className="py-20 bg-gradient-to-br from-ancestral-clay to-ancestral-earth">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-ancestral-gold mb-6 font-organic">
              Integrantes
            </h2>
            <div className="w-24 h-1 bg-ancestral-gold mx-auto mb-8"></div>
            <p className="text-xl text-ancestral-sage max-w-2xl mx-auto">
              Conheça os fundadores e principais articuladores do Tecnofonia Ancestral
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map((member, index) => (
              <div
                key={index}
                className="bg-ancestral-bark/40 p-6 rounded-lg hover:bg-ancestral-bark/60 transition-all duration-300 hover:scale-105 border border-ancestral-gold/20"
              >
                <div className="text-center mb-4">
                  <div className="w-20 h-20 bg-ancestral-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <member.icon className="w-10 h-10 text-ancestral-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-ancestral-gold font-semibold mb-4">{member.role}</p>
                  <p className="text-ancestral-sage text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Members;
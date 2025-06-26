import React from 'react';
import { Star, Calendar, MapPin, Users2, Camera, Play } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Luzeiro de Maria",
      subtitle: "Projeto Musical Colaborativo",
      description: "Projeto musical que une artistas de diferentes gerações em homenagem às tradições marianas e à cultura popular brasileira.",
      features: ["Colaboração intergeracional", "Gravação coletiva", "Preservação cultural", "Lançamento digital"],
      image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "Finalizado",
      year: "2023"
    },
    {
      title: "1° Encontro Tecnofonia Ancestral",
      subtitle: "Festival Cultural Comunitário",
      description: "Primeiro encontro do coletivo reunindo artistas, produtores e comunidade para celebrar a união entre tecnologia e ancestralidade.",
      features: ["Shows ao vivo", "Oficinas culturais", "Feira de artesanato", "Roda de conversa"],
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "Realizado",
      year: "2023"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-r from-ancestral-forest to-ancestral-earth">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-ancestral-gold mb-6 font-organic">
              Projetos Realizados
            </h2>
            <div className="w-24 h-1 bg-ancestral-gold mx-auto mb-8"></div>
            <p className="text-xl text-ancestral-sage max-w-2xl mx-auto">
              Conheça alguns dos principais projetos desenvolvidos pelo coletivo
            </p>
          </div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'md:grid-flow-col-dense' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                  <div className="relative group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-ancestral-gold/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Play className="w-16 h-16 text-white" />
                    </div>
                  </div>
                </div>

                <div className={`space-y-4 ${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-ancestral-gold text-ancestral-bark px-3 py-1 rounded-full text-sm font-semibold">
                      {project.status}
                    </span>
                    <div className="flex items-center text-ancestral-sage">
                      <Calendar className="w-4 h-4 mr-1" />
                      {project.year}
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold text-white font-organic">{project.title}</h3>
                  <p className="text-ancestral-gold text-lg font-semibold">{project.subtitle}</p>
                  <p className="text-ancestral-sage leading-relaxed">{project.description}</p>

                  <div className="grid grid-cols-2 gap-2 mt-6">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-ancestral-sage">
                        <Star className="w-4 h-4 text-ancestral-gold mr-2" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-4 mt-6">
                    <button className="bg-ancestral-gold text-ancestral-bark px-6 py-2 rounded-full font-semibold hover:bg-ancestral-ochre transition-colors duration-300">
                      Ver Mais
                    </button>
                    <button className="border border-ancestral-gold text-ancestral-gold px-6 py-2 rounded-full font-semibold hover:bg-ancestral-gold hover:text-ancestral-bark transition-all duration-300">
                      <Camera className="w-4 h-4 inline mr-2" />
                      Galeria
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
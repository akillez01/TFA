import React from 'react';
import { Youtube, Instagram, Camera, Music, Play, Eye } from 'lucide-react';

const Publications = () => {
  const videos = [
    {
      title: "Luzeiro de Maria - Gravação Coletiva",
      description: "Registro do processo de gravação colaborativa do projeto Luzeiro de Maria",
      thumbnail: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400",
      duration: "12:34",
      views: "2.1K"
    },
    {
      title: "1° Encontro Tecnofonia - Highlights",
      description: "Melhores momentos do primeiro encontro do coletivo",
      thumbnail: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400",
      duration: "8:45",
      views: "1.8K"
    },
    {
      title: "Casa Cajueiro - Reforma Comunitária",
      description: "Documentário sobre o processo de reforma da Casa Cajueiro",
      thumbnail: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=400",
      duration: "15:20",
      views: "3.2K"
    },
    {
      title: "Oficina de Percussão - Thábata Ferreira",
      description: "Registro da oficina de percussão ministrada por Thábata Ferreira",
      thumbnail: "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=400",
      duration: "22:15",
      views: "987"
    }
  ];

  const socialStats = [
    { platform: "YouTube", followers: "3.2K", content: "Vídeos" },
    { platform: "Instagram", followers: "5.8K", content: "Posts" },
    { platform: "Spotify", followers: "1.5K", content: "Streams" }
  ];

  return (
    <section id="publications" className="py-20 bg-gradient-to-r from-ancestral-forest to-ancestral-earth">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-ancestral-gold mb-6 font-organic">
              Publicações e Registros
            </h2>
            <div className="w-24 h-1 bg-ancestral-gold mx-auto mb-8"></div>
            <p className="text-xl text-ancestral-sage max-w-2xl mx-auto">
              Acompanhe nossos registros audiovisuais e publicações nas redes sociais
            </p>
          </div>

          {/* Social Media Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {socialStats.map((stat, index) => (
              <div key={index} className="bg-ancestral-bark/40 p-6 rounded-lg text-center">
                <h3 className="text-2xl font-bold text-ancestral-gold mb-2">{stat.followers}</h3>
                <p className="text-white font-semibold">{stat.platform}</p>
                <p className="text-ancestral-sage text-sm">{stat.content}</p>
              </div>
            ))}
          </div>

          {/* Video Gallery */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {videos.map((video, index) => (
              <div
                key={index}
                className="bg-ancestral-bark/40 rounded-lg overflow-hidden hover:bg-ancestral-bark/60 transition-all duration-300 hover:scale-105 group"
              >
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Play className="w-16 h-16 text-white" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-white mb-2">{video.title}</h3>
                  <p className="text-ancestral-sage text-sm mb-3">{video.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-ancestral-sage text-sm">
                      <Eye className="w-4 h-4 mr-1" />
                      {video.views} visualizações
                    </div>
                    <Youtube className="w-5 h-5 text-red-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="bg-ancestral-gold/10 p-8 rounded-lg border border-ancestral-gold/30 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Acompanhe Nosso Conteúdo
            </h3>
            <p className="text-ancestral-sage mb-6 max-w-2xl mx-auto">
              Inscreva-se em nossos canais para não perder nenhum registro dos nossos projetos, 
              ensaios e eventos culturais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors duration-300 flex items-center justify-center">
                <Youtube className="w-5 h-5 mr-2" />
                YouTube
              </button>
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center">
                <Instagram className="w-5 h-5 mr-2" />
                Instagram
              </button>
              <button className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors duration-300 flex items-center justify-center">
                <Music className="w-5 h-5 mr-2" />
                Spotify
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
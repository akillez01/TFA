import React from 'react';
import { Mic, Camera, FileText, Users, Music, Award, Headphones, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Mic,
      title: "Produção Cultural",
      description: "Desenvolvimento completo de projetos culturais e musicais",
      features: ["Planejamento estratégico", "Execução de eventos", "Gestão de recursos"]
    },
    {
      icon: Headphones,
      title: "Gravação e Mixagem",
      description: "Serviços de gravação com equipamentos profissionais",
      features: ["Estúdio móvel", "Mixagem digital", "Masterização"]
    },
    {
      icon: FileText,
      title: "Assessoria Artística",
      description: "Consultoria para desenvolvimento da carreira artística",
      features: ["Planejamento de carreira", "Estratégias de divulgação", "Networking"]
    },
    {
      icon: Award,
      title: "Elaboração de Portfólios",
      description: "Criação de materiais promocionais e artísticos",
      features: ["Press kit", "Bio artística", "Material gráfico"]
    },
    {
      icon: Users,
      title: "Curadoria Musical",
      description: "Seleção e programação de eventos musicais",
      features: ["Seleção de artistas", "Programação", "Produção executiva"]
    },
    {
      icon: Music,
      title: "Venda de Shows",
      description: "Intermediação e agenciamento de apresentações",
      features: ["Booking", "Negociação", "Logística"]
    },
    {
      icon: Camera,
      title: "Registro Audiovisual",
      description: "Documentação de eventos e projetos culturais",
      features: ["Fotografia", "Filmagem", "Edição"]
    },
    {
      icon: Zap,
      title: "Formação Comunitária",
      description: "Oficinas e cursos de capacitação artística",
      features: ["Oficinas musicais", "Capacitação técnica", "Educação cultural"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-ancestral-clay to-ancestral-bark">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-ancestral-gold mb-6 font-organic">
              Serviços e Ações
            </h2>
            <div className="w-24 h-1 bg-ancestral-gold mx-auto mb-8"></div>
            <p className="text-xl text-ancestral-sage max-w-2xl mx-auto">
              Oferecemos uma gama completa de serviços para fortalecer a cena musical independente
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-ancestral-earth/30 p-6 rounded-lg hover:bg-ancestral-earth/50 transition-all duration-300 hover:scale-105 border border-ancestral-gold/20 group"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-ancestral-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-ancestral-gold/30 transition-colors duration-300">
                    <service.icon className="w-8 h-8 text-ancestral-gold" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-ancestral-sage text-sm mb-4 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center justify-center text-ancestral-sage text-xs">
                        <div className="w-1 h-1 bg-ancestral-gold rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-ancestral-gold/10 p-8 rounded-lg border border-ancestral-gold/30">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Precisa de Nossos Serviços?</h3>
              <p className="text-ancestral-sage mb-6 max-w-2xl mx-auto">
                Entre em contato conosco para discutir seu projeto musical ou cultural. 
                Oferecemos consultoria gratuita e orçamentos personalizados.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-ancestral-gold text-ancestral-bark px-8 py-3 rounded-full font-semibold hover:bg-ancestral-ochre transition-colors duration-300">
                  Solicitar Orçamento
                </button>
                <button className="border border-ancestral-gold text-ancestral-gold px-8 py-3 rounded-full font-semibold hover:bg-ancestral-gold hover:text-ancestral-bark transition-all duration-300">
                  Agendar Consultoria
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
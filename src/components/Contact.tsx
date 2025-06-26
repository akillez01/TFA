import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Youtube, Facebook, Heart } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      info: "contato@tecnofoniaancestral.com",
      link: "mailto:contato@tecnofoniaancestral.com"
    },
    {
      icon: Phone,
      title: "Telefone",
      info: "(11) 99999-9999",
      link: "tel:+5511999999999"
    },
    {
      icon: MapPin,
      title: "Casa Cajueiro",
      info: "São Paulo, SP",
      link: "#"
    }
  ];

  const socialLinks = [
    { icon: Instagram, name: "Instagram", link: "#", color: "bg-gradient-to-r from-purple-500 to-pink-500" },
    { icon: Youtube, name: "YouTube", link: "#", color: "bg-red-600" },
    { icon: Facebook, name: "Facebook", link: "#", color: "bg-blue-600" }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-ancestral-bark to-ancestral-earth">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-ancestral-gold mb-6 font-organic">
              Contato
            </h2>
            <div className="w-24 h-1 bg-ancestral-gold mx-auto mb-8"></div>
            <p className="text-xl text-ancestral-sage max-w-2xl mx-auto">
              Entre em contato conosco para parcerias, colaborações ou para apoiar nossos projetos
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-ancestral-earth/30 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-6">Envie uma Mensagem</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-ancestral-sage mb-2">Nome</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-ancestral-bark/50 border border-ancestral-gold/30 rounded-lg text-white placeholder-ancestral-sage/60 focus:border-ancestral-gold focus:ring-1 focus:ring-ancestral-gold transition-colors"
                    placeholder="Seu nome completo"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-ancestral-sage mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-ancestral-bark/50 border border-ancestral-gold/30 rounded-lg text-white placeholder-ancestral-sage/60 focus:border-ancestral-gold focus:ring-1 focus:ring-ancestral-gold transition-colors"
                    placeholder="seu@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-ancestral-sage mb-2">Assunto</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-ancestral-bark/50 border border-ancestral-gold/30 rounded-lg text-white focus:border-ancestral-gold focus:ring-1 focus:ring-ancestral-gold transition-colors"
                    required
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="parceria">Parceria</option>
                    <option value="servicos">Serviços</option>
                    <option value="apoio">Apoio ao Coletivo</option>
                    <option value="casa-cajueiro">Casa Cajueiro</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-ancestral-sage mb-2">Mensagem</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-ancestral-bark/50 border border-ancestral-gold/30 rounded-lg text-white placeholder-ancestral-sage/60 focus:border-ancestral-gold focus:ring-1 focus:ring-ancestral-gold transition-colors resize-none"
                    placeholder="Sua mensagem..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-ancestral-gold text-ancestral-bark py-3 rounded-lg font-semibold hover:bg-ancestral-ochre transition-colors duration-300 flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Enviar Mensagem
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Informações de Contato</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      className="flex items-center p-4 bg-ancestral-earth/30 rounded-lg hover:bg-ancestral-earth/50 transition-colors duration-300"
                    >
                      <div className="w-12 h-12 bg-ancestral-gold/20 rounded-full flex items-center justify-center mr-4">
                        <info.icon className="w-6 h-6 text-ancestral-gold" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{info.title}</h4>
                        <p className="text-ancestral-sage">{info.info}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Redes Sociais</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      className={`${social.color} p-3 rounded-full hover:scale-110 transition-transform duration-300`}
                    >
                      <social.icon className="w-6 h-6 text-white" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-ancestral-gold/10 p-6 rounded-lg border border-ancestral-gold/30">
                <div className="flex items-center mb-4">
                  <Heart className="w-6 h-6 text-ancestral-gold mr-2" />
                  <h4 className="text-xl font-bold text-white">Apoie o Coletivo</h4>
                </div>
                <p className="text-ancestral-sage mb-4">
                  Ajude-nos a manter nossos projetos culturais e a Casa Cajueiro funcionando.
                </p>
                <button className="w-full bg-ancestral-gold text-ancestral-bark py-3 rounded-lg font-semibold hover:bg-ancestral-ochre transition-colors duration-300">
                  Fazer Doação
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
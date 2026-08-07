import { MessageCircle } from 'lucide-react';

const whatsappLink =
  'https://wa.me/5511999999999?text=Ola%2C%20quero%20falar%20sobre%20producao%20musical%2C%20eventos%20e%20parcerias%20com%20o%20Tecnofonia%20Ancestral.';

const WhatsAppFab = () => {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fab-wa"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
};

export default WhatsAppFab;

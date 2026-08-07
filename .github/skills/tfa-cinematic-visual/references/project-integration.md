# Mapa de integracao no projeto

## Pontos de edicao usuais
- [src/App.tsx](src/App.tsx): ordem das secoes e insercao do bloco cinematografico.
- [src/index.css](src/index.css): tokens e camadas globais de atmosfera.
- [src/components/Hero.tsx](src/components/Hero.tsx): headline principal e CTA.
- [src/components/About.tsx](src/components/About.tsx), [src/components/Projects.tsx](src/components/Projects.tsx), [src/components/Publications.tsx](src/components/Publications.tsx), [src/components/Contact.tsx](src/components/Contact.tsx): aplicar `data-reveal`.

## Componentes sugeridos
- `CinematicStory.tsx`: paineis com video + overlays e ScrollTrigger.
- `WhatsAppFab.tsx`: CTA flutuante para contato rapido.

## Validacao
- Rodar lint e build de producao.
- Conferir em viewport de 390px.

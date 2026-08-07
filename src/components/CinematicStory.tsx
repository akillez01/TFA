import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

type Scene = {
  id: string;
  chapter: string;
  title: string;
  emphasis: string;
  chips: string[];
  hud: string;
  video: string;
};

const scenes: Scene[] = [
  {
    id: 'casa-cajueiro',
    chapter: 'Capitulo 01 · Casa Cajueiro',
    title: 'Um territorio criativo para a musica independente',
    emphasis: 'entre arte, formacao e comunidade',
    chips: ['Home studio colaborativo', 'Ensaios e gravacoes', 'Formacao humanizada'],
    hud: 'TERRITORIO · SAO PAULO',
    video: 'https://videos.pexels.com/video-files/1190298/1190298-hd_1920_1080_30fps.mp4'
  },
  {
    id: 'luzeiro-de-maria',
    chapter: 'Capitulo 02 · Luzeiro de Maria',
    title: 'O projeto que acendeu a nossa caminhada',
    emphasis: 'unindo tradicao e tecnologia',
    chips: ['Lei Aldir Blanc', 'Pocket show autoral', 'Audiovisual independente'],
    hud: 'MARCO INICIAL · 2022',
    video: 'https://videos.pexels.com/video-files/1105666/1105666-hd_1920_1080_30fps.mp4'
  },
  {
    id: 'encontro-tecnofonia',
    chapter: 'Capitulo 03 · Encontro Tecnofonia',
    title: 'Arte periferica em dialogo com o futuro',
    emphasis: 'fortalecendo artistas independentes',
    chips: ['Evento gratuito', 'Webserie documental', 'Rede de artistas parceiros'],
    hud: 'CULTURA VIVA · 2024',
    video: 'https://videos.pexels.com/video-files/1540406/1540406-hd_1920_1080_25fps.mp4'
  }
];

const CinematicStory = () => {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let lenis: Lenis | null = null;
    let ticker: ((time: number) => void) | null = null;

    const ctx = gsap.context(() => {
      if (reducedMotion || !rootRef.current) return;

      lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 1 });
      lenis.on('scroll', ScrollTrigger.update);

      ticker = (time: number) => {
        lenis?.raf(time * 1000);
      };

      gsap.ticker.add(ticker);
      gsap.ticker.lagSmoothing(0);

      const panels = gsap.utils.toArray<HTMLElement>('.cine-panel', rootRef.current);
      if (!panels.length) return;

      gsap.set(panels, { autoAlpha: 0 });
      gsap.set(panels[0], { autoAlpha: 1 });

      const storyTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top top',
          end: () => `+=${panels.length * window.innerHeight * 1.85}`,
          pin: true,
          scrub: 0.7,
          invalidateOnRefresh: true
        }
      });

      panels.forEach((panel, index) => {
        const at = index;
        const media = panel.querySelector('.cine-media');
        const overlay = panel.querySelector('.cine-overlay');

        storyTimeline.to(panel, { autoAlpha: 1, duration: 0.22 }, at);

        if (media) {
          storyTimeline.fromTo(
            media,
            { scale: 1.16 },
            { scale: 1.03, duration: 0.9, ease: 'none' },
            at
          );
        }

        if (overlay) {
          storyTimeline.fromTo(
            overlay,
            { autoAlpha: 0, y: 40 },
            { autoAlpha: 1, y: 0, duration: 0.28, ease: 'power2.out' },
            at + 0.08
          );

          if (index < panels.length - 1) {
            storyTimeline.to(
              overlay,
              { autoAlpha: 0, y: -24, duration: 0.2 },
              at + 0.72
            );
          }
        }

        if (index < panels.length - 1) {
          storyTimeline.to(panel, { autoAlpha: 0, duration: 0.22 }, at + 0.8);
        }
      });

      ScrollTrigger.refresh();
    }, rootRef);

    return () => {
      ctx.revert();
      if (ticker) gsap.ticker.remove(ticker);
      lenis?.destroy();
    };
  }, []);

  return (
    <section ref={rootRef} className="cine-story" aria-label="Narrativa do Tecnofonia Ancestral">
      <div className="cine-stage">
        {scenes.map((scene) => (
          <article key={scene.id} className="cine-panel" aria-label={scene.chapter}>
            <video
              className="cine-media"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=1280"
            >
              <source src={scene.video} type="video/mp4" />
            </video>

            <div className="cine-vignette" aria-hidden="true" />

            <div className="cine-overlay">
              <p className="cine-label">{scene.chapter}</p>
              <h2 className="cine-title">
                {scene.title} <em>{scene.emphasis}</em>
              </h2>
              <div className="cine-chips">
                {scene.chips.map((chip) => (
                  <span key={chip}>{chip}</span>
                ))}
              </div>
            </div>

            <p className="cine-hud" aria-hidden="true">{scene.hud}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CinematicStory;

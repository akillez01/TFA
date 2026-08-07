import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
import About from './components/About';
import CasaCajueiro from './components/CasaCajueiro';
import CinematicStory from './components/CinematicStory';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Members from './components/Members';
import Partners from './components/Partners';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Services from './components/Services';
import WhatsAppFab from './components/WhatsAppFab';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reducedMotion) {
      document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
      return;
    }

    const ctx = gsap.context(() => {
      document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
        gsap.fromTo(
          el,
          { y: 36, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              once: true
            }
          }
        );
      });

      const cursor = document.querySelector<HTMLElement>('.cursor-dot');
      if (cursor && window.matchMedia('(pointer: fine)').matches) {
        const cursorX = gsap.quickTo(cursor, 'x', { duration: 0.28, ease: 'power3' });
        const cursorY = gsap.quickTo(cursor, 'y', { duration: 0.28, ease: 'power3' });

        const onPointerMove = (event: PointerEvent) => {
          cursorX(event.clientX);
          cursorY(event.clientY);
        };
        window.addEventListener('pointermove', onPointerMove);

        const hoverEntries: Array<{ element: Element; enter: () => void; leave: () => void }> = [];
        document.querySelectorAll('a, button').forEach((el) => {
          const enter = () => cursor.classList.add('is-hover');
          const leave = () => cursor.classList.remove('is-hover');
          el.addEventListener('pointerenter', enter);
          el.addEventListener('pointerleave', leave);
          hoverEntries.push({ element: el, enter, leave });
        });

        ScrollTrigger.create({
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          onKill: () => {
            window.removeEventListener('pointermove', onPointerMove);
            hoverEntries.forEach(({ element, enter, leave }) => {
              element.removeEventListener('pointerenter', enter);
              element.removeEventListener('pointerleave', leave);
            });
          }
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-ancestral-earth via-ancestral-clay to-ancestral-bark text-[#f5efe6] relative overflow-x-hidden">
      <div className="grain-overlay" aria-hidden="true" />
      <div className="cursor-dot" aria-hidden="true" />
      <Header />
      <Hero />
      <CinematicStory />
      <div data-reveal>
        <About />
      </div>
      <div data-reveal>
        <Members />
      </div>
      <div data-reveal>
        <Projects />
      </div>
      <div data-reveal>
        <CasaCajueiro />
      </div>
      <div data-reveal>
        <Partners />
      </div>
      <div data-reveal>
        <Services />
      </div>
      <div data-reveal>
        <Publications />
      </div>
      <div data-reveal>
        <Contact />
      </div>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

export default App;
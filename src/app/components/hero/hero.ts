import { Component, afterNextRender } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var gsap: any;

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section
      id="home"
      class="min-h-screen flex flex-col justify-center relative overflow-hidden py-20"
    >
      <!-- Abstract Shapes -->
      <div
        class="blob-1 absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] -z-10 opacity-0"
      ></div>
      <div
        class="blob-2 absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] -z-10 opacity-0"
      ></div>

      <div class="relative z-10 max-w-5xl">
        <h2
          class="hero-subtitle opacity-0 translate-y-4 text-blue-500 font-bold uppercase tracking-widest text-sm mb-6 flex items-center gap-3"
        >
          <span class="w-8 h-[2px] bg-blue-500"></span> Hello, I'm Dev
        </h2>

        <h1
          class="hero-title text-6xl md:text-8xl lg:text-9xl font-extrabold leading-[0.9] mb-8 text-white relative"
        >
          <div class="overflow-hidden"><div class="hero-line translate-y-[100%]">DIGITAL</div></div>
          <div class="overflow-hidden">
            <div class="hero-line translate-y-[100%]">
              <span class="text-stroke">DESIGNER</span>
            </div>
          </div>
          <div class="overflow-hidden"><div class="hero-line translate-y-[100%]">& DEV.</div></div>
        </h1>

        <p
          class="hero-desc opacity-0 translate-y-4 text-slate-400 text-lg md:text-xl max-w-xl leading-relaxed mb-12 border-l border-white/10 pl-6"
        >
          I create bold digital experiences using modern technologies. Focused on interaction,
          motion, and accessibility.
        </p>

        <div class="hero-btns opacity-0 translate-y-4 flex flex-wrap gap-8 items-center">
          <a
            href="#projects"
            class="group flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-blue-500 hover:text-white transition-all duration-300"
          >
            See My Work
            <span class="material-icons-outlined group-hover:translate-x-1 transition-transform"
              >arrow_forward</span
            >
          </a>

          <a
            href="#contact"
            class="flex items-center gap-2 text-white hover:text-blue-400 transition-colors uppercase font-bold tracking-wider text-sm"
          >
            <span
              class="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center"
            >
              <span class="material-icons-outlined text-sm">arrow_downward</span>
            </span>
            Scroll Down
          </a>
        </div>
      </div>

      <!-- Decoration Code -->
      <div
        class="code-deco absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block opacity-0 font-mono text-xs text-right"
      >
        <p>const portfolio = &#123;</p>
        <p class="pl-4">style: 'Avista',</p>
        <p class="pl-4">mode: 'Dark',</p>
        <p class="pl-4">status: 'Ready'</p>
        <p>&#125;;</p>
      </div>
    </section>
  `,
  styles: [],
})
export class HeroComponent {
  constructor() {
    afterNextRender(() => {
      this.initAnimations();
    });
  }

  initAnimations() {
    const tl = gsap.timeline({ delay: 0.2 });

    tl.to('.blob-1, .blob-2', { opacity: 1, duration: 2, ease: 'power2.out' })
      .to('.hero-subtitle', { opacity: 1, y: 0, duration: 0.8 }, '-=1.5')
      .to('.hero-line', { y: 0, stagger: 0.15, duration: 1, ease: 'power4.out' }, '-=0.5')
      .to('.hero-desc', { opacity: 1, y: 0, duration: 0.8 }, '-=0.5')
      .to('.hero-btns', { opacity: 1, y: 0, duration: 0.8 }, '-=0.6')
      .to('.code-deco', { opacity: 0.2, duration: 1 }, '-=0.8');

    // Float animation for blobs
    gsap.to('.blob-1', { y: -50, duration: 5, repeat: -1, yoyo: true, ease: 'sine.inOut' });
    gsap.to('.blob-2', { y: 30, duration: 7, repeat: -1, yoyo: true, ease: 'sine.inOut' });
  }
}

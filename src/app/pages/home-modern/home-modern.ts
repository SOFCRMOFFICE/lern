import {
  Component,
  ElementRef,
  ViewChild,
  ViewChildren,
  QueryList,
  afterNextRender,
  Inject,
  PLATFORM_ID,
  OnDestroy,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import { Swiper } from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Lenis from 'lenis';

@Component({
  selector: 'app-home-modern',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      id="main-wrapper"
      class="bg-zinc-950 min-h-screen text-slate-200 font-sans selection:bg-cyan-500/30 selection:text-cyan-100 overflow-x-hidden transition-colors duration-1000 ease-in-out"
    >
      <!-- FLOATING BACKGROUND ELEMENTS -->
      <div class="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          class="float-element absolute top-[10%] left-[5%] w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] mix-blend-screen will-change-transform"
        ></div>
        <div
          class="float-element absolute top-[40%] right-[10%] w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] mix-blend-screen will-change-transform"
        ></div>
        <div
          class="float-element absolute bottom-[10%] left-[20%] w-72 h-72 bg-pink-500/10 rounded-full blur-[90px] mix-blend-screen will-change-transform"
        ></div>
      </div>

      <!-- NAV (Fixed) -->
      <nav
        class="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center mix-blend-difference text-white pointer-events-none"
      >
        <div
          class="text-xl font-black tracking-tighter pointer-events-auto cursor-pointer hover:scale-110 transition-transform"
        >
          DEV.PORTFOLIO
        </div>
        <div class="hidden md:flex gap-8 text-sm font-medium pointer-events-auto">
          <a
            href="#about"
            (click)="scrollTo('#about')"
            class="hover:text-cyan-400 transition-colors relative group cursor-pointer"
          >
            About
            <span
              class="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-400 group-hover:w-full transition-all duration-300"
            ></span>
          </a>
          <a
            href="#work"
            (click)="scrollTo('#work')"
            class="hover:text-cyan-400 transition-colors relative group cursor-pointer"
          >
            Work
            <span
              class="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-400 group-hover:w-full transition-all duration-300"
            ></span>
          </a>
          <a
            href="#contact"
            (click)="scrollTo('#contact')"
            class="hover:text-cyan-400 transition-colors relative group cursor-pointer"
          >
            Contact
            <span
              class="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-400 group-hover:w-full transition-all duration-300"
            ></span>
          </a>
        </div>
        <button
          #magneticBtn
          class="pointer-events-auto px-6 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-xs font-bold uppercase tracking-widest relative overflow-hidden group cursor-pointer"
        >
          <span class="relative z-10 group-hover:text-black transition-colors duration-300"
            >Let's Talk</span
          >
          <div
            class="absolute inset-0 bg-white transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"
          ></div>
        </button>
      </nav>

      <!-- HERO SECTION -->
      <header
        id="hero-section"
        (mousemove)="onHeroMouseMove($event)"
        class="relative h-screen flex flex-col items-center justify-center overflow-hidden data-color='zinc'"
      >
        <div class="absolute inset-0 z-0">
          <!-- Parallax Backgrounds -->
          <div
            class="parallax-bg absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-purple-600/20 rounded-full blur-[120px] will-change-transform"
            data-speed="0.05"
          ></div>
          <div
            class="parallax-bg absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-cyan-600/10 rounded-full blur-[120px] will-change-transform"
            data-speed="-0.05"
          ></div>
          <svg class="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
            <filter id="noiseFilter">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.65"
                numOctaves="3"
                stitchTiles="stitch"
              />
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilter)" />
          </svg>
        </div>

        <div class="z-10 text-center px-4 relative">
          <div class="overflow-hidden mb-2">
            <p
              class="hero-label text-cyan-400 font-mono text-sm tracking-[0.2em] transform translate-y-full"
            >
              CREATIVE DEVELOPER
            </p>
          </div>

          <h1
            class="hero-title text-7xl md:text-[9rem] font-black leading-[0.9] tracking-tighter mix-blend-overlay opacity-90"
          >
            <div class="overflow-hidden">
              <span
                class="block transform translate-y-full parallax-text will-change-transform"
                data-speed="0.02"
                >DIGITAL</span
              >
            </div>
            <div class="overflow-hidden">
              <span
                class="block transform translate-y-full text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500 parallax-text will-change-transform"
                data-speed="0.04"
                >CRAFTSMAN</span
              >
            </div>
          </h1>

          <div class="mt-8 overflow-hidden">
            <p
              class="hero-desc text-slate-400 max-w-md mx-auto leading-relaxed transform translate-y-full parallax-text will-change-transform"
              data-speed="0.01"
            >
              Building immersive digital experiences with code, motion, and impeccable design
              application.
            </p>
          </div>
        </div>

        <div
          class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce"
        >
          <span class="text-[10px] uppercase tracking-widest">Scroll</span>
          <div class="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </header>

      <!-- INFINITE MARQUEE SECTION -->
      <section
        class="py-12 bg-cyan-500 overflow-hidden relative z-20 -rotate-2 scale-110 my-10 origin-center shadow-2xl"
      >
        <div class="marquee-track flex whitespace-nowrap will-change-transform">
          <div
            class="marquee-content flex gap-8 text-4xl md:text-6xl font-black uppercase text-zinc-950 items-center"
          >
            <span *ngFor="let item of [1, 2, 3, 4]"
              >Frontend • Creative • animations • WebGL • TypeScript • Design •
            </span>
          </div>
          <!-- Duplicate for seamless loop -->
          <div
            class="marquee-content flex gap-8 text-4xl md:text-6xl font-black uppercase text-zinc-950 items-center aria-hidden='true'"
          >
            <span *ngFor="let item of [1, 2, 3, 4]"
              >Frontend • Creative • animations • WebGL • TypeScript • Design •
            </span>
          </div>
        </div>
      </section>

      <!-- MANIFESTO SECTION -->
      <section
        id="about"
        class="min-h-screen py-24 flex items-center justify-center px-6 relative"
        data-color="zinc"
      >
        <div class="max-w-4xl mx-auto">
          <p
            #manifestoText
            class="text-4xl md:text-6xl font-bold leading-tight text-slate-600 text-center"
          >
            I believe that <span class="text-white">perfect code</span> creates
            <span class="text-white">silent magic</span>. Users shouldn't just use a website; they
            should <span class="text-cyan-400">feel</span> the interaction. Every pixel matters.
            Every millisecond counts.
          </p>
        </div>
      </section>

      <!-- HORIZONTAL SCROLL SECTION (Philosophy/Process) -->
      <section
        id="process"
        class="h-screen overflow-hidden flex flex-col relative bg-slate-100 text-black"
        data-color="light"
      >
        <div class="absolute top-10 left-10 z-10">
          <h2 class="text-xs font-mono tracking-widest text-black/50">MY PROCESS</h2>
        </div>
        <div
          class="horizontal-container flex h-full items-center pl-20 overflow-x-visible will-change-transform"
        >
          <!-- Card 1 -->
          <div
            class="horizontal-panel w-[80vw] md:w-[60vw] h-[70vh] flex-shrink-0 bg-white border border-black/10 p-12 rounded-3xl mr-10 flex flex-col justify-between shadow-2xl skew-x-1 hover:skew-x-0 transition-transform duration-500"
          >
            <div class="text-9xl font-black text-black/5">01</div>
            <div>
              <h3 class="text-4xl font-bold mb-4">Discovery</h3>
              <p class="text-lg text-slate-600">
                Deep dive into the problem space. Understanding users, constraints, and business
                goals before writing a single line of code.
              </p>
            </div>
          </div>
          <!-- Card 2 -->
          <div
            class="horizontal-panel w-[80vw] md:w-[60vw] h-[70vh] flex-shrink-0 bg-zinc-900 text-white p-12 rounded-3xl mr-10 flex flex-col justify-between shadow-2xl skew-x-1 hover:skew-x-0 transition-transform duration-500"
          >
            <div class="text-9xl font-black text-white/10">02</div>
            <div>
              <h3 class="text-4xl font-bold mb-4 flex items-center gap-3">
                Design <span class="text-cyan-400 text-sm">FIGMA / SPLINE</span>
              </h3>
              <p class="text-lg text-slate-300">
                Crafting high-fidelity prototypes and motion studies. Every interaction is validated
                before implementation.
              </p>
            </div>
          </div>
          <!-- Card 3 -->
          <div
            class="horizontal-panel w-[80vw] md:w-[60vw] h-[70vh] flex-shrink-0 bg-cyan-400 text-zinc-900 p-12 rounded-3xl mr-10 flex flex-col justify-between shadow-2xl skew-x-1 hover:skew-x-0 transition-transform duration-500"
          >
            <div class="text-9xl font-black text-black/10">03</div>
            <div>
              <h3 class="text-4xl font-bold mb-4">Development</h3>
              <p class="text-lg font-medium">
                Clean, performant, and accessible code. Utilizing modern frameworks and best
                practices to ensure longevity/scalability.
              </p>
            </div>
          </div>
          <!-- Card 4 -->
          <div
            class="horizontal-panel w-[80vw] md:w-[60vw] h-[70vh] flex-shrink-0 bg-zinc-950 text-white p-12 rounded-3xl mr-20 flex flex-col justify-between shadow-2xl skew-x-1 hover:skew-x-0 transition-transform duration-500"
          >
            <div class="text-9xl font-black text-white/5">04</div>
            <div>
              <h3 class="text-4xl font-bold mb-4">Refinement</h3>
              <p class="text-lg text-slate-400">
                Polishing animating, performance profiling, and iterative improvements based on
                real-world usage.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- SERVICES / SKILLS GRID -->
      <section class="py-32 px-6 bg-zinc-950 relative overflow-hidden" data-color="zinc">
        <div class="container mx-auto">
          <div
            class="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/10 pb-8"
          >
            <h2 class="text-5xl font-black">Expertise</h2>
            <p class="text-slate-400 max-w-xs text-right mt-4 md:mt-0">
              A curated stack for modern web development.
            </p>
          </div>

          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5"
          >
            <div
              *ngFor="let skill of skills; let i = index"
              class="service-card group bg-zinc-950 p-10 hover:bg-zinc-900 transition-colors duration-500 relative overflow-hidden"
            >
              <div
                class="absolute top-0 left-0 w-1 h-0 bg-cyan-500 group-hover:h-full transition-all duration-300"
              ></div>
              <div
                class="text-4xl mb-6 opacity-50 group-hover:scale-110 transition-transform duration-300 group-hover:text-cyan-400"
              >
                {{ skill.icon }}
              </div>
              <h3 class="text-xl font-bold mb-3">{{ skill.title }}</h3>
              <p class="text-sm text-slate-400 leading-relaxed">{{ skill.desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- SELECTED PROJECTS (Swiper) -->
      <section id="work" class="py-32 overflow-hidden" data-color="zinc">
        <div class="container mx-auto px-6 mb-16">
          <h2 class="text-xs font-mono text-cyan-500 tracking-widest mb-4">SELECTED WORKS</h2>
          <div class="text-5xl font-black">Featured Projects</div>
        </div>

        <div class="swiper-container w-full h-[60vh] md:h-[80vh] px-6">
          <div class="swiper-wrapper">
            <div
              *ngFor="let project of projects"
              class="swiper-slide w-[85vw] md:w-[60vw] h-full relative group cursor-drag"
            >
              <div
                class="absolute inset-0 bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 shadow-xl"
              >
                <img
                  [src]="project.img"
                  class="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-1000 origin-center"
                  alt=""
                  loading="lazy"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"
                ></div>

                <div class="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                  <div class="flex items-center gap-4 mb-4">
                    <span
                      *ngFor="let tag of project.tags"
                      class="px-3 py-1 rounded-full border border-white/20 bg-white/5 text-xs font-mono uppercase backdrop-blur-md"
                    >
                      {{ tag }}
                    </span>
                  </div>
                  <h3
                    class="text-4xl md:text-6xl font-black mb-4 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100"
                  >
                    {{ project.title }}
                  </h3>
                  <p
                    class="text-slate-300 max-w-lg translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200"
                  >
                    {{ project.desc }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- EXPERIENCE TIMELINE -->
      <section class="py-32 relative" data-color="zinc">
        <div class="container mx-auto px-6 max-w-4xl">
          <h2 class="text-4xl font-black mb-20 text-center">Journey</h2>

          <div class="relative border-l border-white/10 ml-6 md:ml-0 space-y-20">
            <div
              *ngFor="let job of experience"
              class="relative pl-12 md:pl-0 md:flex md:gap-12 group timeline-item"
            >
              <!-- Dot -->
              <div
                class="absolute left-[-5px] top-2 w-2.5 h-2.5 bg-cyan-500 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.5)] z-10 md:left-auto md:right-full md:mr-[-5px] group-hover:scale-150 transition-transform"
              ></div>

              <div class="md:w-1/3 md:text-right md:pr-12">
                <span class="text-cyan-400 font-mono text-sm">{{ job.period }}</span>
                <h4 class="text-xl font-bold mt-1">{{ job.role }}</h4>
              </div>
              <div class="md:w-2/3 md:border-l md:border-white/10 md:pl-12 pb-1 relative">
                <h5 class="text-lg font-bold text-slate-300 mb-2">{{ job.company }}</h5>
                <p class="text-slate-400 text-sm leading-relaxed">{{ job.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- STATS -->
      <section class="py-20 border-y border-white/5 bg-white/2" data-color="zinc">
        <div class="container mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          <div *ngFor="let stat of stats" class="stat-item">
            <div
              class="text-5xl md:text-6xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-600 count-up"
              [attr.data-val]="stat.value"
            >
              0
            </div>
            <div class="text-xs font-mono uppercase tracking-widest text-cyan-500">
              {{ stat.label }}
            </div>
          </div>
        </div>
      </section>

      <!-- FOOTER / CTA -->
      <section
        id="contact"
        class="py-32 relative overflow-hidden flex flex-col items-center justify-center text-center"
        data-color="zinc"
      >
        <div
          class="absolute inset-0 bg-gradient-to-b from-transparent to-cyan-900/10 pointer-events-none"
        ></div>

        <p class="text-cyan-400 font-mono mb-6">WHAT'S NEXT?</p>
        <h2
          class="text-6xl md:text-9xl font-black mb-12 tracking-tighter hover:tracking-wide transition-all duration-700 cursor-default"
        >
          LET'S WORK<br />TOGETHER
        </h2>

        <a
          href="mailto:hello@example.com"
          class="px-10 py-5 bg-white text-black font-bold rounded-full text-lg hover:scale-110 active:scale-95 transition-all shadow-[0_0_50px_rgba(255,255,255,0.3)]"
        >
          Start a Project
        </a>

        <footer
          class="mt-32 w-full border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center px-12 text-sm text-slate-500"
        >
          <div>© 2026 Developed with Angular 19 & GSAP.</div>
          <div class="flex gap-6 mt-4 md:mt-0">
            <a href="#" class="hover:text-white transition-colors">GitHub</a>
            <a href="#" class="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" class="hover:text-white transition-colors">Twitter</a>
          </div>
        </footer>
      </section>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }
      /* Swiper CSS fallback if not global */
      .swiper-slide {
        transition: transform 0.3s;
      }
      .cursor-drag {
        cursor: grab;
      }
      .cursor-drag:active {
        cursor: grabbing;
      }
      .will-change-transform {
        will-change: transform;
      }
    `,
  ],
})
export class HomeModernComponent implements OnDestroy {
  @ViewChildren('manifestoText') manifestoText!: QueryList<ElementRef>;
  @ViewChild('magneticBtn') magneticBtn!: ElementRef;

  private lenis!: Lenis;
  private resizeObserver!: ResizeObserver;

  skills = [
    { title: 'Frontend Architecture', desc: 'Scalable Angular & React systems', icon: '⚡' },
    { title: 'Motion Design', desc: 'GSAP, WebGL, Interactive UI', icon: '🎨' },
    { title: 'UI/UX Engineering', desc: 'Pixel-perfect implementation', icon: '📐' },
    { title: 'Performance', desc: 'Core Web Vitals optimization', icon: '🚀' },
  ];

  projects = [
    {
      title: 'Neon Finance',
      desc: 'A decentralized trading platform with real-time data visualization and WebGL chart rendering.',
      img: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop',
      tags: ['Angular', 'Three.js', 'Web3'],
    },
    {
      title: 'Aero Systems',
      desc: 'Dashboard for autonomous drone fleet management utilizing Mapbox and WebSocket streams.',
      img: 'https://images.unsplash.com/photo-1559028013-ca602932a829?q=80&w=2940&auto=format&fit=crop',
      tags: ['React', 'D3.js', 'Socket.io'],
    },
    {
      title: 'Luxe Interiors',
      desc: 'E-commerce experience containing AR product previews and seamless page transitions.',
      img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop',
      tags: ['Next.js', 'Framer Motion', 'Shopify'],
    },
    {
      title: 'Cyber Security',
      desc: 'Corporate identity and landing page with scroll-hijacking storytelling elements.',
      img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2940&auto=format&fit=crop',
      tags: ['Nuxt', 'GSAP', 'WebGL'],
    },
  ];

  experience = [
    {
      period: '2024 - Present',
      role: 'Senior Frontend Engineer',
      company: 'TechNova',
      desc: 'Leading the frontend team in rebuilding the core SaaS product using Angular and Nx. Improved build times by 40%.',
    },
    {
      period: '2022 - 2024',
      role: 'Creative Developer',
      company: 'Studio Pulse',
      desc: 'Developed award-winning marketing sites for Fortune 500 clients creating heavy animation-driven experiences.',
    },
    {
      period: '2020 - 2022',
      role: 'Frontend Developer',
      company: 'WebSolutions',
      desc: 'Collaborated with designers to implement responsive UI components and design systems.',
    },
  ];

  stats = [
    { label: 'Years Experience', value: 6 },
    { label: 'Projects Delivered', value: 42 },
    { label: 'Awards Won', value: 12 },
    { label: 'Coffees Consumed', value: 3650 },
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      console.log('GSAP: Browser detected, registering plugins...');
      gsap.registerPlugin(ScrollTrigger, TextPlugin);

      afterNextRender(() => {
        console.log('GSAP: afterNextRender triggered, initializing animations...');
        // Force scroll to top to ensure triggers work from start
        window.scrollTo(0, 0);

        try {
          // --- LENIS SMOOTH SCROLL ---
          this.initLenis();

          // Use a small timeout to ensure DOM is fully painted
          setTimeout(() => {
            this.initHero();
            this.initMagneticButton();
            this.initMarquee();
            this.initManifesto();
            this.initHorizontalScroll(); // NEW
            this.initServices();
            this.initSwiper();
            this.initTimeline();
            this.initStats();
            this.initFloatingElements(); // NEW
            this.initScrollColorFade(); // NEW

            // Recalculate ScrollTrigger positions after everything is set
            console.log('GSAP: Refreshing ScrollTrigger...');
            ScrollTrigger.refresh();
          }, 100);
        } catch (e) {
          console.error('GSAP Error:', e);
        }
      });
    }
  }

  ngOnDestroy(): void {
    if (this.lenis) {
      this.lenis.destroy();
    }
  }

  private initLenis() {
    // Initialize Lenis for smooth scrolling
    this.lenis = new Lenis({
      lerp: 0.1, // Smoothness (0-1), lower is smoother
      wheelMultiplier: 1.2, // Scrolling speed
      infinite: false,
    });

    // Synchronize Lenis with GSAP ScrollTrigger
    this.lenis.on('scroll', ScrollTrigger.update);

    // Add Lenis's requestAnimationFrame to GSAP's ticker for best performance
    gsap.ticker.add((time) => {
      this.lenis.raf(time * 1000);
    });

    // Disable GSAP's default lag smoothing to avoid jumps during heavy scroll
    gsap.ticker.lagSmoothing(0);
  }

  public scrollTo(target: string) {
    if (this.lenis) {
      this.lenis.scrollTo(target);
    } else {
      const el = document.querySelector(target);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // --- PARALLAX EFFECT ---
  public onHeroMouseMove(event: MouseEvent) {
    if (!isPlatformBrowser(this.platformId)) return;

    const { clientX, clientY } = event;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Normalize mouse position (-1 to 1)
    const x = (clientX / windowWidth) * 2 - 1;
    const y = (clientY / windowHeight) * 2 - 1;

    // Animate background blobs
    gsap.to('.parallax-bg', {
      x: (i, target) => x * 50 * (Number(target.dataset.speed) || 0.1) * 100,
      y: (i, target) => y * 50 * (Number(target.dataset.speed) || 0.1) * 100,
      duration: 1.5,
      ease: 'power3.out',
      overwrite: 'auto', // Prevent conflicting tweens
    });

    // Animate Text slightly
    gsap.to('.parallax-text', {
      x: (i, target) => x * 30 * (Number(target.dataset.speed) || 0.05) * 50,
      y: (i, target) => y * 30 * (Number(target.dataset.speed) || 0.05) * 50,
      duration: 1.5,
      ease: 'power3.out',
      overwrite: 'auto',
    });
  }

  // --- MAGNETIC BUTTON ---
  private initMagneticButton() {
    const btn = this.magneticBtn?.nativeElement;
    if (!btn) return;

    // Use quickTo for high performance mouse tracking
    const xTo = gsap.quickTo(btn, 'x', { duration: 0.8, ease: 'power4.out' });
    const yTo = gsap.quickTo(btn, 'y', { duration: 0.8, ease: 'power4.out' });

    btn.addEventListener('mousemove', (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      xTo(x * 0.5); // Strength
      yTo(y * 0.5);
    });

    btn.addEventListener('mouseleave', () => {
      xTo(0);
      yTo(0);
    });
  }

  // --- INFINITE MARQUEE ---
  private initMarquee() {
    // Horizontal endless loop
    gsap.to('.marquee-track', {
      xPercent: -50, // Move half way (since we doubled content)
      duration: 20,
      ease: 'none',
      repeat: -1,
      force3D: true, // Hardware acceleration
    });
  }

  private initHero() {
    const tl = gsap.timeline();
    tl.to('.hero-label', { y: 0, duration: 1, ease: 'expo.out', delay: 0.2 })
      .to('.hero-title span', { y: 0, duration: 1.5, stagger: 0.1, ease: 'power4.out' }, '-=0.8')
      .to('.hero-desc', { y: 0, duration: 1, ease: 'power3.out' }, '-=1');
  }

  private initManifesto() {
    // Animate words opacity based on scroll
    const el = document.querySelector('.max-w-4xl p');
    if (el) {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1,
        },
        opacity: 0.2,
        y: 50,
      });
    }
  }

  // --- HORIZONTAL SCROLL ---
  private initHorizontalScroll() {
    const section = document.getElementById('process');
    const container = document.querySelector('.horizontal-container');

    if (section && container) {
      const scrollAmount = container.scrollWidth - window.innerWidth;

      gsap.to(container, {
        x: -scrollAmount,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: `+=${scrollAmount + 1000}`, // Increased scroll duration for smoother feel
          pin: true,
          scrub: 1, // Smooth scrub
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
        force3D: true,
      });
    }
  }

  private initServices() {
    gsap.from('.service-card', {
      scrollTrigger: {
        trigger: '.grid',
        start: 'top 85%', // Trigger slightly earlier
      },
      y: 80,
      opacity: 0,
      stagger: 0.1,
      duration: 1.2,
      ease: 'power3.out', // Smoother easing
    });
  }

  private initSwiper() {
    // Determine number of slides to loop properly (Swiper loop requires enough slides)
    // If few slides, duplicate data internally or disable loop, but for now we assume sufficient data
    new Swiper('.swiper-container', {
      modules: [Navigation, Pagination, Autoplay],
      slidesPerView: 'auto',
      spaceBetween: 30,
      centeredSlides: true,
      grabCursor: true,
      loop: true,
      speed: 1000, // Slower swiper transition
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    });
  }

  private initTimeline() {
    gsap.from('.timeline-item', {
      scrollTrigger: {
        trigger: '.space-y-20',
        start: 'top 75%',
      },
      x: -30,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: 'power3.out',
    });
  }

  private initStats() {
    gsap.utils.toArray('.count-up').forEach((el: any) => {
      const val = parseInt(el.getAttribute('data-val') || '0');
      gsap.to(el, {
        innerText: val,
        duration: 3, // Longer duration for drama
        snap: { innerText: 1 },
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          once: true,
        },
      });
    });
  }

  // --- FLOATING ELEMENTS ---
  private initFloatingElements() {
    gsap.to('.float-element', {
      y: 'random(-40, 40)',
      x: 'random(-20, 20)',
      duration: 'random(8, 15)', // Slower, more ambient
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
      stagger: 2,
      force3D: true,
    });
  }

  // --- SCROLL COLOR FADE ---
  private initScrollColorFade() {
    const sections = document.querySelectorAll('[data-color]');
    const main = document.getElementById('main-wrapper');

    sections.forEach((section: any) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top 50%',
        end: 'bottom 50%',
        onEnter: () => this.updateColor(main, section.dataset.color),
        onEnterBack: () => this.updateColor(main, section.dataset.color),
        // Add smoothing to prevent rapid toggling
        toggleActions: 'play none none reverse',
      });
    });
  }

  private updateColor(element: HTMLElement | null, colorTheme: string) {
    if (!element) return;

    if (colorTheme === 'light') {
      gsap.to(element, {
        backgroundColor: '#f1f5f9',
        color: '#09090b',
        duration: 0.8,
        ease: 'power2.inOut',
      });
    } else {
      // Default dark (Zinc 950)
      gsap.to(element, {
        backgroundColor: '#09090b',
        color: '#e2e8f0',
        duration: 0.8,
        ease: 'power2.inOut',
      });
    }
  }
}

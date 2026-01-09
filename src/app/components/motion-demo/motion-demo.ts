import {
  Component,
  ElementRef,
  ViewChild,
  ViewChildren,
  QueryList,
  afterNextRender,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Draggable } from 'gsap/Draggable';

@Component({
  selector: 'app-framer-motion-demo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="min-h-screen bg-[#050505] text-white overflow-x-hidden font-sans selection:bg-cyan-500/30 relative"
    >
      <!-- Global Parallax Background Elements -->
      <div class="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          class="parallax-orb absolute top-[10%] left-[5%] w-64 h-64 bg-purple-600/10 rounded-full blur-[80px]"
          data-speed="0.2"
        ></div>
        <div
          class="parallax-orb absolute top-[40%] right-[10%] w-96 h-96 bg-cyan-600/10 rounded-full blur-[100px]"
          data-speed="0.5"
        ></div>
        <div
          class="parallax-orb absolute bottom-[20%] left-[15%] w-72 h-72 bg-pink-600/10 rounded-full blur-[90px]"
          data-speed="0.3"
        ></div>
      </div>

      <!-- HERO SECTION -->
      <section class="relative min-h-screen flex items-center justify-center overflow-hidden z-10">
        <!-- Background Elements -->
        <div class="absolute inset-0 z-0">
          <div
            class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-150 contrast-150 mix-blend-overlay"
          ></div>
        </div>

        <div
          class="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div class="hero-content">
            <div
              class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm"
            >
              <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              <span class="text-xs font-medium tracking-wider text-slate-300 uppercase"
                >Interactive Experience</span
              >
            </div>

            <h1
              class="hero-title text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-[0.9]"
            >
              <div class="overflow-hidden">
                <span
                  class="block bg-gradient-to-r from-white via-white to-slate-500 bg-clip-text text-transparent"
                  >MOTION</span
                >
              </div>
              <div class="overflow-hidden">
                <span
                  class="block text-stroke-thin text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
                  >UNLEASHED</span
                >
              </div>
            </h1>

            <p class="hero-desc text-lg md:text-xl text-slate-400 max-w-xl mb-10 leading-relaxed">
              Experience the fusion of <span class="text-white font-bold">GSAP</span> power and
              <span class="text-white font-bold">Performance</span>. High-performance animations for
              the modern web.
            </p>

            <div class="flex flex-wrap gap-4">
              <button
                class="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-slate-200 transition-colors flex items-center gap-2 group"
              >
                Explore Demo
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="group-hover:translate-y-1 transition-transform"
                >
                  <path d="M12 5v14M19 12l-7 7-7-7" />
                </svg>
              </button>
              <button
                class="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-lg hover:bg-white/5 transition-colors"
              >
                View Source
              </button>
            </div>
          </div>

          <!-- Hero 3D Abstract Element -->
          <div class="hero-visual relative h-[600px] hidden lg:flex items-center justify-center">
            <div
              #heroCard
              class="relative w-80 h-[480px] rounded-3xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-white/10 backdrop-blur-xl shadow-2xl flex flex-col items-center justify-center p-8 transform preserve-3d"
            >
              <div
                class="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-3xl"
              ></div>
              <div
                class="w-24 h-24 mb-6 rounded-2xl bg-gradient-to-tr from-cyan-400 to-blue-500 shadow-lg shadow-cyan-500/30 flex items-center justify-center text-4xl"
              >
                🚀
              </div>
              <h3 class="text-3xl font-bold mb-2">Future UI</h3>
              <p class="text-center text-slate-400 text-sm">Drag me around to feel the physics!</p>
            </div>

            <!-- Floating parallax elements specific to hero -->
            <div
              class="parallax-orb absolute top-10 right-10 w-20 h-20 bg-yellow-500/20 rounded-full blur-2xl opacity-60 pointer-events-none"
              data-speed="0.8"
            ></div>
            <div
              class="parallax-orb absolute bottom-20 left-20 w-16 h-16 bg-blue-500/20 rounded-full blur-xl opacity-60 pointer-events-none"
              data-speed="0.4"
            ></div>
          </div>
        </div>
      </section>

      <!-- MARQUEE SECTION -->
      <section class="py-20 bg-black overflow-hidden border-y border-white/5 z-10 relative">
        <div #marqueeContainer class="flex whitespace-nowrap">
          <div
            class="marquee-content flex gap-12 items-center text-8xl font-black text-transparent text-stroke-thin opacity-30 select-none"
          >
            <span>GSAP SCROLLTRIGGER</span>
            <span>★</span>
            <span>INTERACTIVE</span>
            <span>★</span>
            <span>ANGULAR 19</span>
            <span>★</span>
            <span>PERFORMANCE</span>
            <span>★</span>
            <span>GSAP SCROLLTRIGGER</span>
            <span>★</span>
            <span>INTERACTIVE</span>
            <span>★</span>
          </div>
        </div>
      </section>

      <!-- FEATURES GRID -->
      <section class="py-32 relative z-10">
        <div class="container mx-auto px-6">
          <div class="mb-20">
            <span class="text-cyan-400 font-bold tracking-widest uppercase text-sm mb-2 block"
              >Core Capabilities</span
            >
            <h2 class="text-4xl md:text-5xl font-black mb-6">Why Use GSAP?</h2>
            <div class="h-1 w-20 bg-gradient-to-r from-cyan-500 to-purple-500"></div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              *ngFor="let feat of features; let i = index"
              #featureCard
              class="group relative p-8 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-cyan-500/30 transition-colors duration-500 overflow-hidden"
              (mouseenter)="onCardHover(i)"
              (mouseleave)="onCardLeave(i)"
            >
              <div
                class="absolute top-0 right-0 p-8 opacity-10 font-black text-6xl group-hover:opacity-20 transition-opacity duration-300 select-none"
              >
                0{{ i + 1 }}
              </div>

              <div class="relative z-10">
                <div
                  class="w-14 h-14 mb-6 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-2xl group-hover:scale-110 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/50 transition-all duration-300"
                >
                  {{ feat.icon }}
                </div>
                <h3 class="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">
                  {{ feat.title }}
                </h3>
                <p class="text-slate-400 leading-relaxed">{{ feat.desc }}</p>
              </div>

              <div
                class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
              ></div>
            </div>
          </div>
        </div>
      </section>

      <!-- HORIZONTAL SCROLL GALLERY (Previously Parallax Showcase) -->
      <section
        #horizontalSection
        class="h-screen bg-[#0a0a0a] relative overflow-hidden flex items-center z-10 border-y border-white/5"
      >
        <div #horizontalWrapper class="flex items-center px-20 gap-20 w-fit">
          <!-- Intro Text Card -->
          <div class="w-[60vw] md:w-[40vw] flex-shrink-0">
            <h2 class="text-6xl font-black mb-8 leading-tight">
              Horizontal <br />
              <span class="text-cyan-400">Scroll Gallery</span>
            </h2>
            <p class="text-xl text-slate-400 mb-8 leading-relaxed">
              Transform vertical scrolling into horizontal exploration. This section is pinned while
              you scroll, creating a unique navigation experience ideal for storytelling or
              galleries.
            </p>
            <div class="flex items-center gap-4">
              <div class="px-4 py-2 bg-white/10 rounded-full text-sm font-bold animate-bounce">
                Scroll Down ↓
              </div>
            </div>
          </div>

          <!-- Gallery Item 1 -->
          <div
            class="w-[80vw] md:w-[60vw] flex-shrink-0 h-[70vh] relative group overflow-hidden rounded-3xl border border-white/10 bg-slate-900"
          >
            <img
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
              alt="Abstract 1"
              class="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
            />
            <div
              class="absolute bottom-0 left-0 p-12 bg-gradient-to-t from-black/90 to-transparent w-full"
            >
              <h3 class="text-4xl font-bold mb-2">Immersive Depth</h3>
              <p class="text-slate-300">Layered visuals create a sense of space.</p>
            </div>
            <!-- Parallax element inside card -->
            <div
              class="parallax-orb absolute top-10 right-10 w-32 h-32 bg-purple-500/30 rounded-full blur-2xl"
              data-speed="0.2"
            ></div>
          </div>

          <!-- Gallery Item 2 -->
          <div
            class="w-[80vw] md:w-[60vw] flex-shrink-0 h-[70vh] relative group overflow-hidden rounded-3xl border border-white/10 bg-slate-900"
          >
            <img
              src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
              alt="Abstract 2"
              class="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
            />
            <div
              class="absolute bottom-0 left-0 p-12 bg-gradient-to-t from-black/90 to-transparent w-full"
            >
              <h3 class="text-4xl font-bold mb-2">Fluid Motion</h3>
              <p class="text-slate-300">Smooth transitions powered by GSAP.</p>
            </div>
          </div>

          <!-- Gallery Item 3 -->
          <div
            class="w-[80vw] md:w-[60vw] flex-shrink-0 h-[70vh] relative group overflow-hidden rounded-3xl border border-white/10 bg-slate-900"
          >
            <img
              src="https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
              alt="Abstract 3"
              class="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
            />
            <div
              class="absolute bottom-0 left-0 p-12 bg-gradient-to-t from-black/90 to-transparent w-full"
            >
              <h3 class="text-4xl font-bold mb-2">Interactive Art</h3>
              <p class="text-slate-300">Engage users with reactive elements.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- INTERACTIVE PLAYGROUND -->
      <section
        class="py-32 bg-gradient-to-b from-[#050505] to-[#0f172a] relative overflow-hidden z-20"
      >
        <div class="container mx-auto px-6 text-center relative z-10">
          <h2 class="text-4xl font-black mb-12">Interactive Physics Playground</h2>

          <div
            #playground
            class="w-full max-w-4xl mx-auto h-96 bg-slate-900/50 backdrop-blur-md rounded-3xl border border-white/10 relative overflow-hidden shadow-2xl flex items-center justify-center group"
          >
            <div
              class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"
            ></div>

            <div
              #ball
              class="w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full shadow-lg shadow-pink-500/30 cursor-grab active:cursor-grabbing relative z-10 flex items-center justify-center font-bold text-xs tracking-wider"
            >
              DRAG ME
            </div>

            <p class="absolute bottom-6 left-0 right-0 text-slate-500 text-sm font-mono">
              Powered by GSAP Draggable
            </p>
          </div>
        </div>
        <!-- Parallax BG for Playground -->
        <div
          class="parallax-orb absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-purple-900/20 to-transparent pointer-events-none"
          data-speed="0.1"
        ></div>
      </section>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }
      .text-stroke-thin {
        -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
      }
      .preserve-3d {
        transform-style: preserve-3d;
        transition: transform 0.1s;
      }
    `,
  ],
})
export class FramerMotionDemoComponent {
  @ViewChildren('featureCard') featureCards!: QueryList<ElementRef>;
  @ViewChild('marqueeContainer') marqueeContainer!: ElementRef;
  @ViewChild('horizontalSection') horizontalSection!: ElementRef;
  @ViewChild('horizontalWrapper') horizontalWrapper!: ElementRef;
  @ViewChild('heroCard') heroCard!: ElementRef;
  @ViewChild('ball') ball!: ElementRef;
  @ViewChild('playground') playground!: ElementRef;

  features = [
    {
      title: 'Timeline Control',
      desc: 'Precisely choreograph complex multi-element sequences with GSAP Timelines.',
      icon: '⏱️',
    },
    {
      title: 'Spring Physics',
      desc: 'GSAP Elastic ease provides apple-like fluid spring animations for natural interactions.',
      icon: '🌀',
    },
    {
      title: 'Scroll Triggers',
      desc: 'Trigger, scrub, and pin animations based on scroll position effortlessly.',
      icon: '📜',
    },
    {
      title: 'SVG Morphing',
      desc: 'Seamlessly morph intricate SVG paths for delightful visual data transitions.',
      icon: '🔷',
    },
    {
      title: 'Draggable',
      desc: 'Interactive physics-based dragging with inertia and momentum retention.',
      icon: '✋',
    },
    {
      title: 'Layout Animations',
      desc: 'Automatic FLIP animations for shared layout transitions between states.',
      icon: '📐',
    },
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      gsap.registerPlugin(ScrollTrigger, Draggable);

      afterNextRender(() => {
        this.initHeroAnimations();
        this.initMarquee();
        this.initHorizontalScroll();
        this.initGlobalParallax();
        this.initPhysics();
      });
    }
  }

  private initHeroAnimations() {
    // 1. Split text reveal
    const tl = gsap.timeline();

    tl.from('.hero-title span', {
      duration: 1.5,
      y: 100,
      opacity: 0,
      stagger: 0.1,
      ease: 'power4.out',
    })
      .from(
        '.hero-desc',
        {
          duration: 1,
          y: 20,
          opacity: 0,
          ease: 'power3.out',
        },
        '-=1'
      )
      .from(
        '.hero-content button',
        {
          duration: 0.8,
          y: 20,
          opacity: 0,
          stagger: 0.1,
          ease: 'back.out(1.7)',
        },
        '-=0.8'
      )
      .from(
        this.heroCard.nativeElement,
        {
          duration: 1.2,
          scale: 0.8,
          opacity: 0,
          rotationY: 45,
          ease: 'power3.out',
        },
        '-=1'
      );

    // 3D Tilt Effect on Hero Card
    this.heroCard.nativeElement.addEventListener('mousemove', (e: MouseEvent) => {
      const rect = this.heroCard.nativeElement.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -10; // Max 10 deg
      const rotateY = ((x - centerX) / centerX) * 10;

      gsap.to(this.heroCard.nativeElement, {
        rotateX: rotateX,
        rotateY: rotateY,
        duration: 0.5,
        ease: 'power2.out',
      });
    });

    this.heroCard.nativeElement.addEventListener('mouseleave', () => {
      gsap.to(this.heroCard.nativeElement, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.8,
        ease: 'elastic.out(1, 0.5)',
      });
    });
  }

  private initMarquee() {
    gsap.to(this.marqueeContainer.nativeElement.querySelector('.marquee-content'), {
      xPercent: -50,
      ease: 'none',
      duration: 20,
      repeat: -1,
    });
  }

  private initHorizontalScroll() {
    const section = this.horizontalSection.nativeElement;
    const wrapper = this.horizontalWrapper.nativeElement;

    // Calculate scroll amount: content width - screen width
    // We use a functional value for 'end' to handle resizes better, but for demo simplicity:
    const getScrollAmount = () => -(wrapper.scrollWidth - window.innerWidth);

    gsap.to(wrapper, {
      x: getScrollAmount,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: () => `+=${wrapper.scrollWidth - window.innerWidth}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      },
    });
  }

  private initGlobalParallax() {
    // Select all elements with 'parallax-orb' class or 'data-speed' attribute
    const elements = document.querySelectorAll('.parallax-orb, [data-speed]');

    elements.forEach((el: any) => {
      const speed = parseFloat(el.getAttribute('data-speed') || '0.5');

      // Standard vertical parallax
      gsap.to(el, {
        y: (i, target) => -ScrollTrigger.maxScroll(window) * speed * 0.1,
        ease: 'none',
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0,
        },
      });
    });
  }

  private initPhysics() {
    Draggable.create(this.ball.nativeElement, {
      type: 'x,y',
      bounds: this.playground.nativeElement,
      inertia: true,
      edgeResistance: 0.65,
      onPress: () => {
        gsap.to(this.ball.nativeElement, { scale: 1.1, duration: 0.2 });
      },
      onRelease: () => {
        gsap.to(this.ball.nativeElement, { scale: 1, duration: 0.2, ease: 'elastic.out(1, 0.3)' });
      },
    });
  }

  onCardHover(index: number) {
    const card = this.featureCards.toArray()[index].nativeElement;
    gsap.to(card, { scale: 1.02, duration: 0.3, ease: 'power2.out' });
  }

  onCardLeave(index: number) {
    const card = this.featureCards.toArray()[index].nativeElement;
    gsap.to(card, { scale: 1, duration: 0.5, ease: 'elastic.out(1, 0.3)' });
  }
}

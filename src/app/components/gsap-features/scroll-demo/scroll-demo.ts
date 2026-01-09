import { Component, ElementRef, ViewChild, afterNextRender } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap, ScrollTrigger } from 'gsap/all';

@Component({
  selector: 'app-scroll-demo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="min-h-screen bg-gray-900 text-white overflow-hidden relative" #sectionRef>
      <div class="container mx-auto px-6 py-20">
        <h2 class="text-4xl md:text-6xl font-bold mb-12 text-center gradient-text">
          Scroll Master
        </h2>

        <div class="flex flex-col gap-32">
          <!-- Horizontal Scroll Section -->
          <div class="relative h-[500px]" #pinContainer>
            <div class="absolute top-0 left-0 w-full h-full flex items-center overflow-x-hidden">
              <div class="flex gap-8 px-8" #horizontalWrapper>
                <div
                  class="card w-[400px] h-[300px] bg-blue-600/20 backdrop-blur-lg border border-blue-500/30 rounded-2xl p-8 flex-shrink-0 flex items-center justify-center transform hover:scale-105 transition-transform duration-300"
                >
                  <h3 class="text-3xl font-bold">Card 1</h3>
                </div>
                <div
                  class="card w-[400px] h-[300px] bg-purple-600/20 backdrop-blur-lg border border-purple-500/30 rounded-2xl p-8 flex-shrink-0 flex items-center justify-center transform hover:scale-105 transition-transform duration-300"
                >
                  <h3 class="text-3xl font-bold">Card 2</h3>
                </div>
                <div
                  class="card w-[400px] h-[300px] bg-pink-600/20 backdrop-blur-lg border border-pink-500/30 rounded-2xl p-8 flex-shrink-0 flex items-center justify-center transform hover:scale-105 transition-transform duration-300"
                >
                  <h3 class="text-3xl font-bold">Card 3</h3>
                </div>
                <div
                  class="card w-[400px] h-[300px] bg-emerald-600/20 backdrop-blur-lg border border-emerald-500/30 rounded-2xl p-8 flex-shrink-0 flex items-center justify-center transform hover:scale-105 transition-transform duration-300"
                >
                  <h3 class="text-3xl font-bold">Card 4</h3>
                </div>
              </div>
            </div>
          </div>

          <!-- Parallax Section -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-16 py-20">
            <div class="relative h-[400px] rounded-2xl overflow-hidden group">
              <div
                class="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-600 opacity-20 group-hover:opacity-30 transition-opacity"
              ></div>
              <div
                class="parallax-image absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center scale-125"
                #parallaxImg1
              ></div>
              <div class="absolute inset-0 flex items-center justify-center z-10">
                <h3 class="text-4xl font-bold text-white shadow-xl">Parallax</h3>
              </div>
            </div>

            <div class="flex flex-col justify-center space-y-6">
              <p class="text-xl text-gray-300 reveal-text" #textReveal>
                Experience smooth scrolling effects controlled by GSAP ScrollTrigger. Elements pin,
                slide, and fade with precise timing.
              </p>
              <div class="flex gap-4">
                <button
                  (click)="scrollToTop()"
                  class="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full border border-white/10 transition-colors"
                >
                  Scroll To Top
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .gradient-text {
        background: linear-gradient(to right, #60a5fa, #c084fc, #f472b6);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    `,
  ],
})
export class ScrollDemoComponent {
  @ViewChild('horizontalWrapper') horizontalWrapper!: ElementRef;
  @ViewChild('pinContainer') pinContainer!: ElementRef;
  @ViewChild('parallaxImg1') parallaxImg1!: ElementRef;
  @ViewChild('textReveal') textReveal!: ElementRef;

  constructor() {
    afterNextRender(() => {
      gsap.registerPlugin(ScrollTrigger);
      this.initHorizontalScroll();
      this.initParallax();
      this.initTextReveal();
    });
  }

  initHorizontalScroll() {
    const sections = this.horizontalWrapper.nativeElement;

    gsap.to(sections, {
      xPercent: -100,
      x: () => window.innerWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: this.pinContainer.nativeElement,
        pin: true,
        scrub: 1,
        start: 'center center',
        end: () => '+=' + sections.offsetWidth,
        invalidateOnRefresh: true,
      },
    });
  }

  initParallax() {
    gsap.to(this.parallaxImg1.nativeElement, {
      yPercent: 20,
      ease: 'none',
      scrollTrigger: {
        trigger: this.parallaxImg1.nativeElement.parentElement,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  }

  initTextReveal() {
    gsap.from(this.textReveal.nativeElement, {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: this.textReveal.nativeElement,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });
  }

  scrollToTop() {
    gsap.to(window, { duration: 1, scrollTo: 0, ease: 'power2.inOut' });
  }
}

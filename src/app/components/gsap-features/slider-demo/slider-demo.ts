import {
  Component,
  ElementRef,
  ViewChild,
  afterNextRender,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap/all';
import { register } from 'swiper/element/bundle';

// Register Swiper custom elements
if (typeof window !== 'undefined') {
  register();
}

@Component({
  selector: 'app-slider-demo',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <section class="py-20 bg-[#0b0f19] text-white overflow-hidden">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold mb-12 text-center gradient-text">
          Animated Portfolio Slider
        </h2>

        <div class="relative group">
          <swiper-container
            #swiperRef
            class="mySwiper rounded-3xl overflow-hidden shadow-2xl h-[600px]"
            init="false"
          >
            <swiper-slide *ngFor="let slide of slides; let i = index">
              <div class="relative w-full h-full">
                <!-- Background Image with Parallax -->
                <img
                  [src]="slide.image"
                  [alt]="slide.title"
                  class="absolute inset-0 w-full h-full object-cover slide-bg"
                />
                <div class="absolute inset-0 bg-black/50"></div>

                <!-- Content -->
                <div
                  class="absolute inset-0 flex flex-col items-center justify-center text-center p-12 space-y-6"
                >
                  <h3 class="text-5xl md:text-7xl font-bold slide-title opacity-0">
                    {{ slide.title }}
                  </h3>
                  <p class="text-xl md:text-2xl text-gray-300 max-w-2xl slide-desc opacity-0">
                    {{ slide.description }}
                  </p>
                  <div class="pt-8 slide-cta opacity-0">
                    <button
                      class="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-bold transition-all transform hover:scale-105"
                    >
                      Explore Project
                    </button>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper-container>

          <!-- Navigation Buttons -->
          <div
            class="absolute top-1/2 -left-6 md:-left-12 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <button
              class="prev-btn w-12 h-12 md:w-16 md:h-16 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 transition-all"
            >
              <span class="text-2xl">←</span>
            </button>
          </div>
          <div
            class="absolute top-1/2 -right-6 md:-right-12 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <button
              class="next-btn w-12 h-12 md:w-16 md:h-16 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 transition-all"
            >
              <span class="text-2xl">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .gradient-text {
        background: linear-gradient(to right, #3b82f6, #8b5cf6, #ec4899);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      swiper-container {
        --swiper-navigation-color: #fff;
        --swiper-pagination-color: #fff;
      }
    `,
  ],
})
export class SliderDemoComponent {
  @ViewChild('swiperRef') swiperRef!: ElementRef;

  slides = [
    {
      title: 'Digital Innovation',
      description:
        'Creating cutting-edge solutions for the modern web using advanced GSAP animations and robust Angular architecture.',
      image:
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
    },
    {
      title: 'UI Excellence',
      description:
        'Meticulous attention to detail in every interactive element, ensuring a premium user experience across all devices.',
      image:
        'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop',
    },
    {
      title: 'Future Vision',
      description:
        'Spearheading the next generation of web applications with a focus on speed, performance, and accessibility.',
      image:
        'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop',
    },
  ];

  constructor() {
    afterNextRender(() => {
      this.initSwiper();
    });
  }

  initSwiper() {
    const swiperEl = this.swiperRef.nativeElement;

    const swiperParams = {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        clickable: true,
      },
      navigation: {
        nextEl: '.next-btn',
        prevEl: '.prev-btn',
      },
      on: {
        init: (swiper: any) => {
          this.animateSlide(swiper.slides[swiper.activeIndex]);
        },
        slideChange: (swiper: any) => {
          // Reset other slides
          swiper.slides.forEach((slide: HTMLElement) => {
            gsap.set(slide.querySelectorAll('.slide-title, .slide-desc, .slide-cta'), {
              opacity: 0,
              y: 30,
            });
          });
          // Animate new active slide
          this.animateSlide(swiper.slides[swiper.activeIndex]);
        },
      },
    };

    Object.assign(swiperEl, swiperParams);
    swiperEl.initialize();
  }

  animateSlide(slideEl: HTMLElement) {
    const title = slideEl.querySelector('.slide-title');
    const desc = slideEl.querySelector('.slide-desc');
    const cta = slideEl.querySelector('.slide-cta');
    const bg = slideEl.querySelector('.slide-bg');

    const tl = gsap.timeline();

    tl.fromTo(
      bg,
      { scale: 1.2, filter: 'blur(10px)' },
      { scale: 1, filter: 'blur(0px)', duration: 1.5, ease: 'power2.out' }
    );

    tl.fromTo(
      [title, desc, cta],
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'back.out(1.7)' },
      '-=1'
    );
  }
}

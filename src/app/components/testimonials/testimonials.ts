import { Component, afterNextRender } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var gsap: any;
declare var ScrollTrigger: any;

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="testimonials" class="py-32 border-t border-white/5">
      <div class="text-center mb-20 testimonial-header opacity-0 translate-y-10">
        <span class="text-blue-500 font-bold uppercase tracking-widest text-sm mb-2 block"
          >Testimonials</span
        >
        <h2 class="text-4xl md:text-5xl font-bold text-white">Client Stories</h2>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          *ngFor="let t of testimonials"
          class="testimonial-card opacity-0 translate-y-10 p-10 border border-white/5 bg-[#0e121e] hover:border-blue-500/30 transition-colors relative"
        >
          <span class="material-icons-outlined text-4xl text-blue-500/20 mb-6 block"
            >format_quote</span
          >

          <p class="text-lg text-slate-300 mb-8 leading-relaxed">"{{ t.text }}"</p>

          <div class="flex items-center gap-4">
            <div
              class="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center font-bold text-slate-500"
            >
              {{ t.name.charAt(0) }}
            </div>
            <div>
              <h4 class="font-bold text-white">{{ t.name }}</h4>
              <span class="text-xs text-blue-500 uppercase tracking-widest">{{ t.role }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact Footer -->
      <div
        id="contact"
        class="contact-footer opacity-0 scale-95 mt-32 py-20 bg-blue-600 rounded-3xl text-center relative overflow-hidden group"
      >
        <div
          class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"
        ></div>

        <div class="relative z-10">
          <h2 class="text-4xl md:text-6xl font-bold text-white mb-8">Let's Work Together</h2>
          <a
            href="mailto:hello@example.com"
            class="inline-block px-10 py-5 bg-white text-blue-600 font-bold rounded-full hover:scale-105 transition-transform shadow-2xl"
          >
            Start a Project
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class TestimonialsComponent {
  testimonials = [
    {
      text: 'The designs were exactly what we needed. Clean, modern, and very effective.',
      name: 'Alex Morgan',
      role: 'CEO, BrightTech',
    },
    {
      text: 'Incredible attention to detail. The animations brought our landing page to life.',
      name: 'Sarah Lee',
      role: 'Product Lead',
    },
    {
      text: 'A true professional. Delivered on time and exceeded our expectations.',
      name: 'David Kim',
      role: 'Founder, Studio X',
    },
  ];

  constructor() {
    afterNextRender(() => {
      this.initAnimations();
    });
  }

  initAnimations() {
    gsap.to('.testimonial-header', {
      scrollTrigger: { trigger: '#testimonials', start: 'top 80%' },
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out',
    });

    gsap.to('.testimonial-card', {
      scrollTrigger: { trigger: '#testimonials', start: 'top 75%' },
      opacity: 1,
      y: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: 'power2.out',
    });

    gsap.to('.contact-footer', {
      scrollTrigger: { trigger: '#contact', start: 'top 85%' },
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: 'elastic.out(1, 0.75)',
    });
  }
}

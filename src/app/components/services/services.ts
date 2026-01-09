import { Component, afterNextRender } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var gsap: any;
declare var ScrollTrigger: any;

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="services" class="py-32">
      <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div class="service-header opacity-0 translate-y-10">
          <span class="text-blue-500 font-bold uppercase tracking-widest text-sm mb-2 block"
            >My Expertise</span
          >
          <h2 class="text-4xl md:text-5xl font-bold text-white">What I Do</h2>
        </div>
        <p class="service-desc opacity-0 translate-y-10 text-slate-400 max-w-md">
          I help brands stand out in the digital era. Together we will set the new status quo. No
          nonsense, always on the cutting edge.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-6">
        <div
          *ngFor="let s of services; let i = index"
          class="service-card opacity-0 translate-y-20 group p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-blue-500/30 transition-all duration-500 relative overflow-hidden"
        >
          <span
            class="absolute top-0 right-0 p-4 text-8xl font-bold text-white/[0.02] group-hover:text-white/[0.05] transition-colors select-none font-['Syne']"
          >
            0{{ i + 1 }}
          </span>

          <div
            class="mb-8 w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-blue-500 group-hover:border-blue-500 transition-all duration-500"
          >
            <span class="material-icons-outlined text-white text-2xl">{{ s.icon }}</span>
          </div>

          <h3
            class="text-2xl font-bold text-white mb-4 group-hover:translate-x-2 transition-transform"
          >
            {{ s.title }}
          </h3>
          <p class="text-slate-400 leading-relaxed mb-8">
            {{ s.desc }}
          </p>

          <a
            href="#contact"
            class="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white/50 group-hover:text-blue-400 transition-colors"
          >
            Start Project <span class="material-icons-outlined text-sm">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class ServicesComponent {
  services = [
    {
      title: 'UI/UX Design',
      desc: 'Creating intuitive, aesthetically pleasing interfaces that drive user engagement and satisfaction.',
      icon: 'design_services',
    },
    {
      title: 'Web Develop',
      desc: 'Building responsive, high-performance websites using the latest technologies and best practices.',
      icon: 'code',
    },
    {
      title: 'Animation',
      desc: 'Adding life to your website with smooth micro-interactions and engaging motion design.',
      icon: 'animation',
    },
  ];

  constructor() {
    afterNextRender(() => {
      this.initAnimations();
    });
  }

  initAnimations() {
    gsap.to('.service-header', {
      scrollTrigger: { trigger: '#services', start: 'top 80%' },
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out',
    });

    gsap.to('.service-desc', {
      scrollTrigger: { trigger: '#services', start: 'top 80%' },
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: 0.2,
      ease: 'power2.out',
    });

    gsap.to('.service-card', {
      scrollTrigger: { trigger: '#services', start: 'top 75%' },
      opacity: 1,
      y: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: 'power2.out',
    });
  }
}

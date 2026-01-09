import { Component, afterNextRender } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var gsap: any;
declare var ScrollTrigger: any;

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="py-32">
      <div class="mb-20 project-header opacity-0 translate-y-10">
        <span class="text-[#72ddf7] font-bold uppercase tracking-widest text-sm mb-2 block"
          >Portfolio</span
        >
        <h2 class="text-4xl md:text-5xl font-bold text-[#f7aef8]">Selected Works</h2>
      </div>

      <div class="grid md:grid-cols-2 gap-12">
        <div
          *ngFor="let p of projects"
          class="project-item opacity-0 translate-y-20 group cursor-pointer"
        >
          <div
            class="relative overflow-hidden rounded-3xl mb-6 bg-slate-900 aspect-[4/3] shadow-2xl transition-all duration-500 hover:scale-[1.02]"
          >
            <!-- Image -->
            <img
              [src]="p.img"
              alt=""
              class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
            />

            <!-- Hover Overlay -->
            <div
              class="absolute inset-0 bg-[#050505]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center z-10 backdrop-blur-sm"
            >
              <span
                class="px-6 py-3 bg-[#fdc5f5] text-[#050505] font-bold uppercase tracking-wider rounded-full transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-[0_0_20px_#fdc5f5]"
                >View Project</span
              >
            </div>
          </div>

          <div class="flex justify-between items-end">
            <div>
              <div class="flex gap-2 mb-3">
                <span
                  *ngFor="let t of p.tags"
                  class="text-xs font-mono px-2 py-1 border border-[#b388eb]/30 rounded text-[#b388eb] bg-[#b388eb]/5"
                >
                  {{ t }}
                </span>
              </div>
              <h3
                class="text-2xl font-bold text-[#f7aef8] group-hover:text-[#72ddf7] transition-colors"
              >
                {{ p.title }}
              </h3>
            </div>
            <span
              class="material-icons-outlined text-[#8093f1] -rotate-45 group-hover:rotate-0 group-hover:text-[#fdc5f5] transition-all duration-500 text-3xl"
              >arrow_forward</span
            >
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Fintech Dashboard',
      tags: ['Angular', 'D3.js'],
      img: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=2000&auto=format&fit=crop', // Data Viz / Abstract
      icon: 'insights',
    },
    {
      title: 'E-Commerce Platform',
      tags: ['React', 'Stripe'],
      img: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2000&auto=format&fit=crop', // Shopping / Tech
      icon: 'shopping_bag',
    },
    {
      title: 'AI Chat Interface',
      tags: ['Vue', 'OpenAI'],
      img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop', // AI / Abstract
      icon: 'smart_toy',
    },
    {
      title: 'Travel App UI',
      tags: ['Figma', 'Mobile'],
      img: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2000&auto=format&fit=crop', // Travel
      icon: 'flight',
    },
  ];

  constructor() {
    afterNextRender(() => {
      this.initAnimations();
    });
  }

  initAnimations() {
    gsap.to('.project-header', {
      scrollTrigger: { trigger: '#projects', start: 'top 80%' },
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out',
    });

    gsap.to('.project-item', {
      scrollTrigger: { trigger: '#projects', start: 'top 70%' },
      opacity: 1,
      y: 0,
      stagger: 0.2,
      duration: 1,
      ease: 'power3.out',
    });
  }
}

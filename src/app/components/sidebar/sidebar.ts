import { Component, ElementRef, ViewChildren, QueryList, afterNextRender } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var gsap: any;

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <aside class="h-full bg-[#0b0f19] border-r border-white/5 flex flex-col items-center py-8">
      <!-- Logo -->
      <div class="mb-12 logo-anim opacity-0">
        <span class="font-['Syne'] font-bold text-3xl text-white tracking-tighter"
          >A<span class="text-blue-500">.</span></span
        >
      </div>

      <!-- Nav Items -->
      <nav class="flex-1 w-full flex flex-col items-center gap-2">
        <a
          *ngFor="let item of navItems"
          href="#{{ item.id }}"
          class="nav-item group relative p-3 rounded-xl transition-all hover:bg-white/5 w-12 h-12 flex items-center justify-center opacity-0 translate-x-[-20px]"
        >
          <span
            class="material-icons-outlined text-slate-400 group-hover:text-blue-500 transition-colors text-xl"
            >{{ item.icon }}</span
          >

          <!-- Tooltip -->
          <span
            class="absolute left-14 bg-blue-600 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none"
          >
            {{ item.label }}
          </span>

          <!-- Active Dot -->
          <div
            class="absolute -right-1 w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          ></div>
        </a>
      </nav>

      <!-- Socials -->
      <div class="flex flex-col gap-4 mt-auto social-item opacity-0">
        <a href="#" class="text-slate-500 hover:text-white transition-colors">
          <span class="material-icons-outlined text-sm">alternate_email</span>
        </a>
      </div>
    </aside>
  `,
})
export class SidebarComponent {
  navItems = [
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'services', label: 'Services', icon: 'grid_view' },
    { id: 'projects', label: 'Projects', icon: 'layers' },
    { id: 'testimonials', label: 'Reviews', icon: 'format_quote' },
    { id: 'contact', label: 'Contact', icon: 'mail' },
  ];

  constructor() {
    afterNextRender(() => {
      this.initAnimations();
    });
  }

  initAnimations() {
    const tl = gsap.timeline({ delay: 0.5 });

    tl.to('.logo-anim', { opacity: 1, duration: 0.8, ease: 'power2.out' })
      .to(
        '.nav-item',
        {
          opacity: 1,
          x: 0,
          stagger: 0.1,
          duration: 0.5,
          ease: 'back.out(1.7)',
        },
        '-=0.4'
      )
      .to('.social-item', { opacity: 1, y: 0, duration: 0.5 }, '-=0.2');
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../components/sidebar/sidebar';

import { ProjectsComponent } from '../../components/projects/projects';
import { TestimonialsComponent } from '../../components/testimonials/testimonials';
import { ServicesComponent } from '../../components/services/services';

// GSAP Demos
import { ScrollDemoComponent } from '../../components/gsap-features/scroll-demo/scroll-demo';
import { TextDemoComponent } from '../../components/gsap-features/text-demo/text-demo';

import { SliderDemoComponent } from '../../components/gsap-features/slider-demo/slider-demo';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,

    ProjectsComponent,
    TestimonialsComponent, // Keeping existing components but wrapping them
    ServicesComponent,
    // Demos
    ScrollDemoComponent,
    TextDemoComponent,

    SliderDemoComponent,
  ],
  template: `
    <div
      class="flex min-h-screen bg-[#050505] text-[#f7aef8] font-sans selection:bg-[#fdc5f5] selection:text-[#8093f1]"
    >
      <!-- Pastel Glows (Background) -->
      <div
        class="fixed inset-0 pointer-events-none z-0 overflow-hidden mix-blend-screen opacity-30"
      >
        <div
          class="absolute top-[10%] left-[5%] w-64 h-64 rounded-full blur-[80px]"
          style="background-color: rgba(253, 197, 245, 0.2)"
        ></div>
        <div
          class="absolute top-[50%] right-[10%] w-96 h-96 rounded-full blur-[100px]"
          style="background-color: rgba(128, 147, 241, 0.2)"
        ></div>
      </div>

      <!-- Sidebar -->
      <app-sidebar
        class="w-20 lg:w-24 fixed h-full z-50 hidden md:block border-r border-[#fdc5f5]/10 bg-[#050505]/80 backdrop-blur-md"
      ></app-sidebar>

      <!-- Main Content -->
      <main class="flex-1 md:ml-20 lg:ml-24 transition-all duration-300 relative z-10">
        <div class="max-w-7xl mx-auto px-6 lg:px-12 py-12">
          <!-- Header -->
          <h1
            class="text-5xl md:text-7xl font-black mb-12 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#f7aef8] to-[#72ddf7]"
          >
            EXPLORE<br />WORK
          </h1>

          <!-- Sections (Child Components might need internal styling updates, 
               but we wrap them to inherit some color context) -->
          <div class="space-y-20">
            <section
              class="p-8 border border-[#fdc5f5]/10 rounded-3xl bg-[#fdc5f5]/5 backdrop-blur-sm"
            >
              <h2 class="text-2xl font-bold mb-8 text-[#72ddf7] uppercase tracking-widest">
                Selected Projects
              </h2>
              <app-projects></app-projects>
            </section>

            <section
              class="p-8 border border-[#8093f1]/10 rounded-3xl bg-[#8093f1]/5 backdrop-blur-sm"
            >
              <h2 class="text-2xl font-bold mb-8 text-[#b388eb] uppercase tracking-widest">
                Capabilities
              </h2>
              <app-services></app-services>
            </section>

            <section>
              <app-slider-demo></app-slider-demo>
            </section>

            <!-- GSAP Demos Re-styled -->
            <div class="space-y-12">
              <div class="border-t border-[#fdc5f5]/10 pt-12">
                <h2 class="text-3xl font-bold text-[#fdc5f5] mb-6">Interactive Text</h2>
                <app-text-demo></app-text-demo>
              </div>
              <div class="border-t border-[#fdc5f5]/10 pt-12">
                <h2 class="text-3xl font-bold text-[#fdc5f5] mb-6">Scroll Effects</h2>
                <app-scroll-demo></app-scroll-demo>
              </div>
            </div>

            <section class="pb-20">
              <app-testimonials></app-testimonials>
            </section>
          </div>
        </div>
      </main>
    </div>
  `,
  styles: [],
})
export class PortfolioComponent {}

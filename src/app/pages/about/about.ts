import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FramerMotionDemoComponent } from '../../components/motion-demo/motion-demo';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, FramerMotionDemoComponent],
  template: `
    <div
      class="min-h-screen bg-[#050505] text-[#f7aef8] font-sans selection:bg-[#fdc5f5] selection:text-[#8093f1] pt-20 pb-20"
    >
      <!-- Background Glow -->
      <div
        class="fixed inset-0 pointer-events-none z-0 overflow-hidden mix-blend-screen opacity-20"
      >
        <div
          class="absolute top-0 right-0 w-[50vw] h-[50vw] rounded-full blur-[120px]"
          style="background: radial-gradient(#b388eb, transparent)"
        ></div>
      </div>

      <div class="max-w-4xl mx-auto px-6 relative z-10">
        <!-- Header -->
        <h2 class="text-6xl md:text-8xl font-black mb-12 flex flex-col gap-2">
          <span class="text-[#72ddf7]">CREATIVE</span>
          <span class="text-[#f7aef8]">COLLECTIVE</span>
        </h2>

        <div class="grid gap-12">
          <!-- Card 1 -->
          <div
            class="bg-[#fdc5f5]/5 border border-[#fdc5f5]/10 p-10 rounded-3xl backdrop-blur-md hover:bg-[#fdc5f5]/10 transition-colors duration-500"
          >
            <h3 class="text-3xl font-bold mb-6 text-[#fdc5f5]">Who We Are</h3>
            <p class="text-xl leading-relaxed text-[#f7aef8]/80">
              We are digital artisans dedicated to crafting silent magic. We don't just build
              websites; we engineer feelings, utilizing code as our canvas and motion as our paint.
            </p>
          </div>

          <!-- Card 2 -->
          <div
            class="bg-[#8093f1]/5 border border-[#8093f1]/10 p-10 rounded-3xl backdrop-blur-md hover:bg-[#8093f1]/10 transition-colors duration-500"
          >
            <h3 class="text-3xl font-bold mb-6 text-[#8093f1]">Our Mission</h3>
            <p class="text-xl leading-relaxed text-[#b388eb]/90">
              To push the boundaries of the browser. We believe in a web that is alive, responsive,
              and deeply immersive.
            </p>
          </div>

          <!-- Tech Stack -->
          <div class="bg-[#050505] border border-white/5 p-10 rounded-3xl">
            <h3 class="text-3xl font-bold mb-8 text-[#72ddf7]">Tech Stack</h3>
            <ul class="flex flex-wrap gap-4">
              <li
                class="px-6 py-2 rounded-full border border-[#fdc5f5]/20 bg-[#fdc5f5]/5 text-[#fdc5f5] font-mono uppercase text-sm"
              >
                Angular 19
              </li>
              <li
                class="px-6 py-2 rounded-full border border-[#f7aef8]/20 bg-[#f7aef8]/5 text-[#f7aef8] font-mono uppercase text-sm"
              >
                GSAP
              </li>
              <li
                class="px-6 py-2 rounded-full border border-[#b388eb]/20 bg-[#b388eb]/5 text-[#b388eb] font-mono uppercase text-sm"
              >
                Three.js
              </li>
              <li
                class="px-6 py-2 rounded-full border border-[#8093f1]/20 bg-[#8093f1]/5 text-[#8093f1] font-mono uppercase text-sm"
              >
                Tailwind CSS
              </li>
              <li
                class="px-6 py-2 rounded-full border border-[#72ddf7]/20 bg-[#72ddf7]/5 text-[#72ddf7] font-mono uppercase text-sm"
              >
                WebGL
              </li>
            </ul>
          </div>
        </div>

        <!-- Motion Demo Embedded -->
        <div class="mt-20">
          <app-framer-motion-demo></app-framer-motion-demo>
        </div>
      </div>
    </div>
  `,
})
export class AboutComponent {}

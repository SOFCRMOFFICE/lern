import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="py-20">
      <div class="flex items-center gap-4 mb-12">
        <h2 class="text-3xl font-bold text-slate-100 flex items-center">
          <span class="text-purple-500 mr-2">01.</span> About Me
        </h2>
        <div class="h-[1px] bg-slate-700 flex-1 max-w-xs"></div>
      </div>

      <div class="grid md:grid-cols-3 gap-12">
        <div class="md:col-span-2 space-y-6 text-slate-400 leading-relaxed text-lg">
          <p>
            Hello! My name is Dev and I enjoy creating things that live on the internet. My interest
            in web development started back in 2012 when I decided to try editing custom Tumblr
            themes — turns out hacking together HTML & CSS was pretty fun!
          </p>
          <p>
            Fast-forward to today, and I've had the privilege of working at an
            <span class="text-purple-400">advertising agency</span>, a
            <span class="text-purple-400">start-up</span>, and a
            <span class="text-purple-400">huge corporation</span>. My main focus these days is
            building accessible, inclusive products and digital experiences.
          </p>
          <p>Here are a few technologies I've been working with recently:</p>

          <ul class="grid grid-cols-2 gap-2 mt-4 font-mono text-sm">
            <li class="flex items-center gap-2">
              <span class="text-purple-500">▹</span> JavaScript (ES6+)
            </li>
            <li class="flex items-center gap-2"><span class="text-purple-500">▹</span> Angular</li>
            <li class="flex items-center gap-2"><span class="text-purple-500">▹</span> Node.js</li>
            <li class="flex items-center gap-2">
              <span class="text-purple-500">▹</span> TypeScript
            </li>
            <li class="flex items-center gap-2">
              <span class="text-purple-500">▹</span> Tailwind CSS
            </li>
            <li class="flex items-center gap-2"><span class="text-purple-500">▹</span> Figma</li>
          </ul>
        </div>

        <!-- Profile Image / Card -->
        <div class="relative group mx-auto md:mx-0 w-64 h-64 md:w-auto md:h-auto">
          <div
            class="absolute inset-0 border-2 border-purple-500 rounded-lg translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"
          ></div>
          <div
            class="absolute inset-0 bg-purple-500/20 rounded-lg group-hover:bg-transparent transition-colors z-10"
          ></div>
          <!-- Placeholder Image using gradient -->
          <div
            class="w-full h-full min-h-[300px] bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center relative overflow-hidden"
          >
            <span
              class="material-icons-outlined text-9xl text-slate-600 group-hover:text-slate-500 transition-colors"
              >person</span
            >
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class AboutSectionComponent {}

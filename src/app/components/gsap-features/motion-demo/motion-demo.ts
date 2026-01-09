import { Component, ElementRef, ViewChild, AfterViewInit, afterNextRender } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

@Component({
  selector: 'app-motion-demo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section
      class="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center relative overflow-hidden"
    >
      <h2 class="text-4xl font-bold mb-12 relative z-10">MotionPath</h2>

      <div
        class="relative w-full max-w-4xl h-[600px] border border-gray-800 rounded-2xl bg-gray-950/50 backdrop-blur-sm"
      >
        <!-- SVG Path Visualizer -->
        <svg
          class="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 900 600"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            id="motionPath"
            d="M100,300 C150,100 350,100 450,300 S750,500 800,300"
            fill="none"
            stroke="#3b82f6"
            stroke-width="2"
            stroke-dasharray="10 5"
            class="opacity-30"
          />
        </svg>

        <!-- Moving Object -->
        <div
          #rocket
          class="absolute w-16 h-16 z-20 top-0 left-0 bg-transparent flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2"
        >
          <div class="text-4xl transform rotate-45">🚀</div>
          <div
            class="absolute -bottom-2 w-2 h-6 bg-orange-500 blur-md rounded-full animate-pulse"
          ></div>
        </div>
      </div>

      <div class="mt-8 z-10">
        <p class="text-gray-400 text-sm">
          The rocket follows the SVG path accurately using MotionPathPlugin.
        </p>
      </div>
    </section>
  `,
  styles: [],
})
export class MotionDemoComponent {
  @ViewChild('rocket') rocket!: ElementRef;

  constructor() {
    afterNextRender(() => {
      gsap.registerPlugin(MotionPathPlugin);
      this.initAnimation();
    });
  }

  initAnimation() {
    gsap.to(this.rocket.nativeElement, {
      duration: 5,
      repeat: -1,
      repeatDelay: 1,
      yoyo: true, // go back and forth
      ease: 'power1.inOut',
      motionPath: {
        path: '#motionPath',
        align: '#motionPath',
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
      },
    });
  }
}

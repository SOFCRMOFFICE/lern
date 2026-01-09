import { Component, ElementRef, ViewChild, afterNextRender } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap/all';
import { TextPlugin } from 'gsap/TextPlugin';

@Component({
  selector: 'app-text-demo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section
      class="min-h-[50vh] bg-black text-white flex flex-col items-center justify-center p-10 relative overflow-hidden"
    >
      <!-- Background Matrix Effect (Fake) -->
      <div
        class="absolute inset-0 opacity-10 pointer-events-none font-mono text-xs overflow-hidden leading-none text-green-500 select-none"
      >
        {{ backgroundCode }}
      </div>

      <div class="z-10 text-center space-y-8">
        <h2 class="text-3xl md:text-5xl font-mono">
          <span class="text-green-500">>_</span>
          <span #typewriter></span><span class="cursor-blink">|</span>
        </h2>

        <div class="h-20 flex items-center justify-center">
          <p #scrambleText class="text-xl md:text-2xl text-gray-300 font-bold tracking-wider"></p>
        </div>

        <button
          (click)="replayAnimation()"
          class="px-6 py-2 border border-green-500 text-green-500 rounded hover:bg-green-500/10 font-mono transition-colors"
        >
          Replay Text Sequence
        </button>
      </div>
    </section>
  `,
  styles: [
    `
      .cursor-blink {
        animation: blink 1s step-end infinite;
      }
      @keyframes blink {
        0%,
        100% {
          opacity: 1;
        }
        50% {
          opacity: 0;
        }
      }
    `,
  ],
})
export class TextDemoComponent {
  @ViewChild('typewriter') typewriter!: ElementRef;
  @ViewChild('scrambleText') scrambleText!: ElementRef;

  backgroundCode = Array(500).fill('01').join(' ');

  constructor() {
    afterNextRender(() => {
      gsap.registerPlugin(TextPlugin);
      this.startAnimation();
    });
  }

  startAnimation() {
    const tl = gsap.timeline();

    // Typewriter
    tl.to(this.typewriter.nativeElement, {
      text: {
        value: 'Initializing System...',
        delimiter: '',
      },
      duration: 1.5,
      ease: 'none',
    })
      .to(this.typewriter.nativeElement, {
        text: 'Loading Modules...',
        duration: 1.5,
        ease: 'none',
        delay: 0.5,
      })
      .to(this.typewriter.nativeElement, {
        text: 'GSAP TextPlugin Active',
        duration: 1.5,
        ease: 'none',
        delay: 0.5,
      });

    // Pseudo-Scramble Effect (using replacement)
    // Note: True ScrambleTextPlugin is paid, so we emulate it with characters
    const chars = '!<>-_\\/[]{}—=+*^?#________';

    tl.to(
      this.scrambleText.nativeElement,
      {
        duration: 2,
        text: {
          value: 'ENCRYPTED DATA DECRYPTED',
          delimiter: '',
        },
        onUpdate: () => {
          // A simple visual noise effect during transition could be added here if needed
        },
      },
      '-=1'
    );
  }

  replayAnimation() {
    gsap.set(this.typewriter.nativeElement, { text: '' });
    gsap.set(this.scrambleText.nativeElement, { text: '' });
    this.startAnimation();
  }
}

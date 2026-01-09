import { Component, ElementRef, ViewChild, afterNextRender } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap, Flip, Draggable } from 'gsap/all';

@Component({
  selector: 'app-ui-interaction-demo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="min-h-screen bg-white text-gray-900 py-20 px-6">
      <div class="container mx-auto max-w-6xl">
        <h2 class="text-4xl font-bold mb-16 text-center">Interactive UI</h2>

        <!-- Flip Plugin Demo -->
        <div class="mb-24">
          <h3 class="text-2xl font-bold mb-8 flex items-center gap-2">
            <span class="w-2 h-8 bg-blue-600 rounded-full"></span>
            Flip Layout Transition
          </h3>

          <div class="flex justify-end gap-4 mb-8">
            <button
              (click)="toggleLayout()"
              class="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              Toggle Layout
            </button>
          </div>

          <div
            class="gallery-container p-4 bg-gray-100 rounded-xl min-h-[400px]"
            [class.grid-layout]="isGridView"
            [class.flex-col]="!isGridView"
          >
            <div
              class="item w-full h-40 bg-blue-500 rounded-lg shadow-lg flex items-center justify-center text-white text-2xl font-bold mb-4"
              id="item-1"
            >
              Item 1
            </div>
            <div
              class="item w-full h-40 bg-purple-500 rounded-lg shadow-lg flex items-center justify-center text-white text-2xl font-bold mb-4"
              id="item-2"
            >
              Item 2
            </div>
            <div
              class="item w-full h-40 bg-pink-500 rounded-lg shadow-lg flex items-center justify-center text-white text-2xl font-bold mb-4"
              id="item-3"
            >
              Item 3
            </div>
            <div
              class="item w-full h-40 bg-orange-500 rounded-lg shadow-lg flex items-center justify-center text-white text-2xl font-bold mb-4"
              id="item-4"
            >
              Item 4
            </div>
          </div>
        </div>

        <!-- Draggable Demo -->
        <div>
          <h3 class="text-2xl font-bold mb-8 flex items-center gap-2">
            <span class="w-2 h-8 bg-purple-600 rounded-full"></span>
            Draggable & Physics
          </h3>

          <div
            class="relative h-[500px] bg-gray-100 rounded-2xl overflow-hidden border-2 border-dashed border-gray-300 flex items-center justify-center"
            #dragContainer
          >
            <p
              class="absolute text-gray-400 pointer-events-none font-bold uppercase tracking-widest"
            >
              Interactive Area
            </p>

            <div
              class="drag-box w-32 h-32 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-2xl cursor-grab active:cursor-grabbing flex items-center justify-center text-white font-bold"
              #draggableBox
            >
              Drag Me
            </div>

            <div
              class="drag-spinner w-24 h-24 absolute top-10 right-10 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full shadow-lg cursor-grab active:cursor-grabbing flex items-center justify-center text-white text-sm font-bold"
              #spinnerBox
            >
              Spin Me
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .gallery-container.grid-layout {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
      }
      .gallery-container.grid-layout .item {
        width: 100%;
        height: 100%;
        margin-bottom: 0;
      }
    `,
  ],
})
export class UiInteractionDemoComponent {
  @ViewChild('draggableBox') draggableBox!: ElementRef;
  @ViewChild('spinnerBox') spinnerBox!: ElementRef;
  @ViewChild('dragContainer') dragContainer!: ElementRef;

  isGridView = false;

  constructor() {
    afterNextRender(() => {
      gsap.registerPlugin(Flip, Draggable);
      this.initDraggable();
    });
  }

  toggleLayout() {
    const state = Flip.getState('.item');
    this.isGridView = !this.isGridView;

    // Allow Angular to update DOM first
    setTimeout(() => {
      Flip.from(state, {
        duration: 0.7,
        ease: 'power1.inOut',
        absolute: true, // Optimizes for layout changes
        stagger: 0.05,
        onEnter: (elements: Element[]) =>
          gsap.fromTo(elements, { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 0.5 }),
        onLeave: (elements: Element[]) =>
          gsap.to(elements, { opacity: 0, scale: 0, duration: 0.5 }),
      });
    });
  }

  initDraggable() {
    Draggable.create(this.draggableBox.nativeElement, {
      type: 'x,y',
      bounds: this.dragContainer.nativeElement,
      inertia: true, // Note: inertia is paid, but Draggable itself is free. If no inertia plugin, it just won't have momentum.
      edgeResistance: 0.65,
      onDragStart: function () {
        gsap.to(this['target'], { scale: 1.1, duration: 0.2 });
      },
      onDragEnd: function () {
        gsap.to(this['target'], { scale: 1, duration: 0.2 });
      },
    });

    Draggable.create(this.spinnerBox.nativeElement, {
      type: 'rotation',
      inertia: true,
    });
  }
}

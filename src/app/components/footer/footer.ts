import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="bg-gray-800 text-white mt-12 py-6">
      <div class="max-w-6xl mx-auto px-4 text-center">
        <p>&copy; 2025 MyApp. All rights reserved.</p>
        <p class="text-sm text-gray-400 mt-2">Built with Angular & Tailwind CSS</p>
      </div>
    </footer>
  `
})
export class FooterComponent {}

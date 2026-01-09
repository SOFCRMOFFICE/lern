import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="max-w-6xl mx-auto px-4 py-12">
      <h2 class="text-4xl font-bold text-amber-600 mb-6">Welcome Home</h2>
      <p class="text-lg text-gray-700 mb-8">
        This is your Angular application with server-side rendering. Explore the navigation to see different pages.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-gray-100 p-6 rounded-lg shadow">
          <h3 class="text-xl font-bold text-amber-600 mb-2">Feature 1</h3>
          <p class="text-gray-600">Responsive design with Tailwind CSS</p>
        </div>
        <div class="bg-gray-100 p-6 rounded-lg shadow">
          <h3 class="text-xl font-bold text-amber-600 mb-2">Feature 2</h3>
          <p class="text-gray-600">Server-side rendering enabled</p>
        </div>
        <div class="bg-gray-100 p-6 rounded-lg shadow">
          <h3 class="text-xl font-bold text-amber-600 mb-2">Feature 3</h3>
          <p class="text-gray-600">Modern Angular architecture</p>
        </div>
      </div>
    </div>
  `
})
export class HomeComponent {}

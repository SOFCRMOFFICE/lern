import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <header class="bg-slate-600 text-white shadow-md">
      <nav class="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 class="text-2xl font-bold">MyApp</h1>
        <ul class="flex gap-6">
          <li><a routerLink="/" class="hover:text-amber-200 transition">Home</a></li>
          <li><a routerLink="/about" class="hover:text-amber-200 transition">About</a></li>
          <li><a routerLink="/contact" class="hover:text-amber-200 transition">Contact</a></li>
        </ul>
      </nav>
    </header>
  `
})
export class HeaderComponent {}

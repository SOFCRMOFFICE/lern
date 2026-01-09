import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface SubmittedData {
  id: number;
  name: string;
  email: string;
  message: string;
  timestamp: Date;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="max-w-6xl mx-auto px-4 py-12">
      <h2 class="text-4xl font-bold text-amber-600 mb-6">Contact Us</h2>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Contact Form -->
        <form class="bg-white rounded-lg shadow-lg p-8" (ngSubmit)="onSubmit()" [class.shake]="showError">
          <div class="mb-4">
            <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
            <input 
              type="text" 
              id="name" 
              [(ngModel)]="formData.name" 
              name="name"
              (blur)="validateName()"
              [class.border-red-500]="errors.name"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 transition" 
              placeholder="Your name">
            <p *ngIf="errors.name" class="text-red-500 text-sm mt-1 animate-pulse">{{ errors.name }}</p>
          </div>

          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              id="email" 
              [(ngModel)]="formData.email" 
              name="email"
              (blur)="validateEmail()"
              [class.border-red-500]="errors.email"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 transition" 
              placeholder="Your email">
            <p *ngIf="errors.email" class="text-red-500 text-sm mt-1 animate-pulse">{{ errors.email }}</p>
          </div>

          <div class="mb-6">
            <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
            <textarea 
              id="message" 
              [(ngModel)]="formData.message" 
              name="message"
              (blur)="validateMessage()"
              [class.border-red-500]="errors.message"
              rows="5" 
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 transition" 
              placeholder="Your message"></textarea>
            <p *ngIf="errors.message" class="text-red-500 text-sm mt-1 animate-pulse">{{ errors.message }}</p>
          </div>

          <button 
            type="submit" 
            [disabled]="isSubmitting"
            class="w-full bg-amber-600 text-white font-medium py-2 px-4 rounded-md hover:bg-amber-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
            {{ isSubmitting ? 'Sending...' : 'Send Message' }}
          </button>
        </form>

        <!-- Success & Error Messages -->
        <div class="space-y-4">
          <div *ngIf="submitted" class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded animate-bounce">
            ✓ Thank you for your message! We'll be in touch soon.
          </div>
          
          <div *ngIf="showError" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded animate-bounce">
            ✗ Please fix the errors above before submitting.
          </div>

          <!-- Contact Information -->
          <div class="bg-white rounded-lg shadow-lg p-8">
            <h3 class="text-2xl font-bold mb-6">Get in Touch</h3>
            <div class="space-y-4">
              <div>
                <h4 class="font-bold text-gray-800">Email</h4>
                <p class="text-gray-600">contact@example.com</p>
              </div>
              <div>
                <h4 class="font-bold text-gray-800">Phone</h4>
                <p class="text-gray-600">+1 (555) 123-4567</p>
              </div>
              <div>
                <h4 class="font-bold text-gray-800">Address</h4>
                <p class="text-gray-600">123 Main Street<br>City, State 12345</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Submitted Data Table -->
      <div *ngIf="submittedDataList.length > 0" class="mt-12 bg-white rounded-lg shadow-lg p-8 animate-fadeIn">
        <h3 class="text-2xl font-bold mb-6 text-gray-800">Submitted Messages ({{ submittedDataList.length }})</h3>
        
        <div class="overflow-x-auto">
          <table class="w-full border-collapse">
            <thead>
              <tr class="bg-amber-600 text-white">
                <th class="border border-gray-300 px-4 py-3 text-left">ID</th>
                <th class="border border-gray-300 px-4 py-3 text-left">Name</th>
                <th class="border border-gray-300 px-4 py-3 text-left">Email</th>
                <th class="border border-gray-300 px-4 py-3 text-left">Message</th>
                <th class="border border-gray-300 px-4 py-3 text-left">Date</th>
                <th class="border border-gray-300 px-4 py-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr 
                *ngFor="let item of submittedDataList" 
                class="hover:bg-gray-100 transition animate-slideIn"
                [style.animation-delay]="(submittedDataList.indexOf(item) * 0.1) + 's'">
                <td class="border border-gray-300 px-4 py-3 font-semibold text-amber-600">{{ item.id }}</td>
                <td class="border border-gray-300 px-4 py-3">{{ item.name }}</td>
                <td class="border border-gray-300 px-4 py-3 text-blue-600">{{ item.email }}</td>
                <td class="border border-gray-300 px-4 py-3 max-w-xs truncate">{{ item.message }}</td>
                <td class="border border-gray-300 px-4 py-3 text-sm text-gray-600">{{ item.timestamp | date:'short' }}</td>
                <td class="border border-gray-300 px-4 py-3 text-center">
                  <button 
                    (click)="deleteData(item.id)"
                    class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition text-sm">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `,
  styles: [`
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateX(-20px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
      20%, 40%, 60%, 80% { transform: translateX(10px); }
    }

    .animate-fadeIn {
      animation: fadeIn 0.5s ease-in-out;
    }

    .animate-slideIn {
      animation: slideIn 0.4s ease-in-out forwards;
      opacity: 0;
    }

    .shake {
      animation: shake 0.5s;
    }
  `]
})
export class ContactComponent {
  submitted = false;
  showError = false;
  isSubmitting = false;
  submittedDataList: SubmittedData[] = [];
  nextId = 1;

  formData = {
    name: '',
    email: '',
    message: ''
  };

  errors = {
    name: '',
    email: '',
    message: ''
  };

  validateName(): void {
    if (!this.formData.name.trim()) {
      this.errors.name = 'Name is required';
    } else if (this.formData.name.length < 2) {
      this.errors.name = 'Name must be at least 2 characters';
    } else {
      this.errors.name = '';
    }
  }

  validateEmail(): void {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!this.formData.email.trim()) {
      this.errors.email = 'Email is required';
    } else if (!emailPattern.test(this.formData.email)) {
      this.errors.email = 'Please enter a valid email';
    } else {
      this.errors.email = '';
    }
  }

  validateMessage(): void {
    if (!this.formData.message.trim()) {
      this.errors.message = 'Message is required';
    } else if (this.formData.message.length < 10) {
      this.errors.message = 'Message must be at least 10 characters';
    } else {
      this.errors.message = '';
    }
  }

  isFormValid(): boolean {
    this.validateName();
    this.validateEmail();
    this.validateMessage();
    return !this.errors.name && !this.errors.email && !this.errors.message;
  }

  onSubmit(): void {
    if (!this.isFormValid()) {
      this.showError = true;
      setTimeout(() => { this.showError = false; }, 3000);
      return;
    }

    this.isSubmitting = true;

    // Simulate API call
    setTimeout(() => {
      const newData: SubmittedData = {
        id: this.nextId++,
        name: this.formData.name,
        email: this.formData.email,
        message: this.formData.message,
        timestamp: new Date()
      };

      this.submittedDataList.unshift(newData);
      this.submitted = true;
      this.isSubmitting = false;
      
      // Reset form
      this.formData = { name: '', email: '', message: '' };
      this.errors = { name: '', email: '', message: '' };

      // Hide success message after 3 seconds
      setTimeout(() => { this.submitted = false; }, 3000);
    }, 500);
  }

  deleteData(id: number): void {
    this.submittedDataList = this.submittedDataList.filter(item => item.id !== id);
  }
}

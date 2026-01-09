import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface AppData {
  id: number;
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataSubject = new BehaviorSubject<AppData[]>([
    {
      id: 1,
      title: 'Angular Development',
      description: 'Build modern web applications with Angular'
    },
    {
      id: 2,
      title: 'Server-Side Rendering',
      description: 'Improve performance with SSR'
    },
    {
      id: 3,
      title: 'Tailwind CSS',
      description: 'Utility-first CSS framework for styling'
    }
  ]);

  public data$: Observable<AppData[]> = this.dataSubject.asObservable();

  constructor() {}

  getData(): AppData[] {
    return this.dataSubject.value;
  }

  addData(item: AppData): void {
    const currentData = this.dataSubject.value;
    this.dataSubject.next([...currentData, item]);
  }
}

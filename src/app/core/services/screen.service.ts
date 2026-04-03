import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScreenService {
  private mediaQuery = window.matchMedia('(max-width: 960px)');
  public isTablet = signal(this.mediaQuery.matches);

  constructor() {
    this.mediaQuery.addEventListener('change', (e) => {
      this.isTablet.set(e.matches);
    });
  }
}

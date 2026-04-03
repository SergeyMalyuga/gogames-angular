import {inject, Injectable, signal} from '@angular/core';
import {BodyService} from './body.service';

@Injectable({
  providedIn: 'root'
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

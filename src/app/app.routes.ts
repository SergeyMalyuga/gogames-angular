import {Routes} from '@angular/router';
import {AppRoute} from './constants/consts';

export const routes: Routes = [
  {
    path: AppRoute.MAIN,
    title: 'MainComponent',
    loadComponent: () => import('./pages/main/main.component').then(m => m.MainComponent),
  }
];

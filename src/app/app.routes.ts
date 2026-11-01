import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'detalhe',
    loadComponent: () => import('./detalhe/detalhe.page').then((m) => m.DetalhePage),
  },
];

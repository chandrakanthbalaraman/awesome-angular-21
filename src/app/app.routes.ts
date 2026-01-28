import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'module-01-signals', pathMatch: 'full' },
  {
    path: 'module-01-signals',
    loadChildren: () => import('./modules/module-01-signals/routes'),
  },
  {
    path: 'module-02-components',
    loadChildren: () => import('./modules/module-02-components/routes'),
  },
];

import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('./module-01.component').then((m) => m.Module01Component),
    children: [
      { path: '', redirectTo: 'basic', pathMatch: 'full' },
      {
        path: 'basic',
        loadComponent: () =>
          import('./lessons/lesson-01-basic-signals/basic-signals.component').then(
            (m) => m.BasicSignalsComponent,
          ),
      },
      {
        path: 'computed',
        loadComponent: () =>
          import('./lessons/lesson-02-computed/signal-computed.component').then(
            (m) => m.SignalComputedComponent,
          ),
      },
      {
        path: 'effect',
        loadComponent: () =>
          import('./lessons/lesson-03-effect/signal-effect.component').then(
            (m) => m.SignalEffectComponent,
          ),
      },
      {
        path: 'inputs',
        loadComponent: () =>
          import('./lessons/lesson-04-inputs/signal-inputs.component').then(
            (m) => m.SignalInputsComponent,
          ),
      },
      {
        path: 'outputs',
        loadComponent: () =>
          import('./lessons/lesson-05-outputs/signal-outputs.component').then(
            (m) => m.SignalOutputsComponent,
          ),
      },
      {
        path: 'queries',
        loadComponent: () =>
          import('./lessons/lesson-06-queries/signal-queries.component').then(
            (m) => m.SignalQueriesComponent,
          ),
      },
      {
        path: 'model',
        loadComponent: () =>
          import('./lessons/lesson-07-model/signal-model.component').then(
            (m) => m.SignalModelComponent,
          ),
      },
      {
        path: 'rxjs-interop',
        loadComponent: () =>
          import('./lessons/lesson-08-rxjs-interop/rxjs-interop.component').then(
            (m) => m.RxjsInteropComponent,
          ),
      },
      {
        path: 'exercise',
        loadComponent: () =>
          import('./lessons/exercise-shopping-cart/shopping-cart.component').then(
            (m) => m.ShoppingCartComponent,
          ),
      },
    ],
  },
] satisfies Routes;

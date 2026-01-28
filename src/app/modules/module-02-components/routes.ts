import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('./module-02.component').then((m) => m.Module02Component),
    children: [
      { path: '', redirectTo: 'standalone', pathMatch: 'full' },
      {
        path: 'standalone',
        loadComponent: () =>
          import('./lessons/lesson-01-standalone/standalone.component').then(
            (m) => m.StandaloneComponent,
          ),
      },
      {
        path: 'lifecycle',
        loadComponent: () =>
          import('./lessons/lesson-02-lifecycle/lifecycle.component').then(
            (m) => m.LifecycleComponent,
          ),
      },
      {
        path: 'communication',
        loadComponent: () =>
          import('./lessons/lesson-03-communication/communication.component').then(
            (m) => m.CommunicationComponent,
          ),
      },
      {
        path: 'projection',
        loadComponent: () =>
          import('./lessons/lesson-04-projection/projection.component').then(
            (m) => m.ProjectionComponent,
          ),
      },
      {
        path: 'change-detection',
        loadComponent: () =>
          import('./lessons/lesson-05-change-detection/change-detection.component').then(
            (m) => m.ChangeDetectionComponent,
          ),
      },
      {
        path: 'encapsulation',
        loadComponent: () =>
          import('./lessons/lesson-06-encapsulation/encapsulation.component').then(
            (m) => m.EncapsulationComponent,
          ),
      },
      {
        path: 'exercise',
        loadComponent: () =>
          import('./lessons/exercise-card-component/card-exercise.component').then(
            (m) => m.CardExerciseComponent,
          ),
      },
    ],
  },
] satisfies Routes;

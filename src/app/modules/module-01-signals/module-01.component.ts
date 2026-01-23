import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-module-01',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="module-container">
      <h1>Module 01: Signals Deep Dive</h1>

      <nav class="lesson-nav">
        <a routerLink="basic" routerLinkActive="active">1. Basic Signals</a>
        <a routerLink="computed" routerLinkActive="active">2. Computed</a>
        <a routerLink="effect" routerLinkActive="active">3. Effects</a>
        <a routerLink="inputs" routerLinkActive="active">4. Signal Inputs</a>
        <a routerLink="outputs" routerLinkActive="active">5. Signal Outputs</a>
        <a routerLink="queries" routerLinkActive="active">6. Signal Queries</a>
        <a routerLink="model" routerLinkActive="active">7. Model Signals</a>
        <a routerLink="rxjs-interop" routerLinkActive="active">8. RxJS Interop</a>
        <a routerLink="exercise" routerLinkActive="active">🏋️ Exercise</a>
      </nav>

      <div class="lesson-content">
        <router-outlet />
      </div>
    </div>
  `,
  styles: [
    `
      .module-container {
        padding: 1rem;
      }
      .lesson-nav {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-bottom: 1rem;
        padding: 1rem;
        background: #f5f5f5;
        border-radius: 8px;
      }
      .lesson-nav a {
        padding: 0.5rem 1rem;
        text-decoration: none;
        color: #333;
        border-radius: 4px;
        transition: background 0.2s;
      }
      .lesson-nav a:hover {
        background: #e0e0e0;
      }
      .lesson-nav a.active {
        background: #1976d2;
        color: white;
      }
      .lesson-content {
        padding: 1rem;
        border: 1px solid #ddd;
        border-radius: 8px;
      }
    `,
  ],
})
export class Module01Component {}

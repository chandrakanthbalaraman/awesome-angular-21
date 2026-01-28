import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModuleHeaderComponent, ModuleConfig } from './module-header.component';
import { ModuleNavbarComponent, LessonTab } from './module-navbar.component';

@Component({
  selector: 'app-module-layout',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, ModuleHeaderComponent, ModuleNavbarComponent],
  template: `
    <div class="module-page">
      <app-module-header [config]="config()" />
      <app-module-navbar [tabs]="tabs()" [color]="config().color" />
      <section class="lesson-content">
        <router-outlet />
      </section>
    </div>
  `,
  styles: [
    `
      .module-page {
        min-height: 100vh;
      }

      .lesson-content {
        max-width: 1000px;
        margin: 0 auto;
        padding: 2rem;
      }
    `,
  ],
})
export class ModuleLayoutComponent {
  config = input.required<ModuleConfig>();
  tabs = input.required<LessonTab[]>();
}

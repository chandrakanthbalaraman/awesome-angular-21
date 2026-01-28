import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export interface LessonTab {
  route: string;
  number?: string;
  label: string;
  icon?: string;
  isExercise?: boolean;
}

@Component({
  selector: 'app-module-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="lesson-tabs" [attr.data-color]="color()">
      @for (tab of tabs(); track tab.route) {
        <a
          [routerLink]="tab.route"
          routerLinkActive="active"
          class="tab"
          [class.exercise-tab]="tab.isExercise"
        >
          @if (tab.icon) {
            <span class="tab-icon">{{ tab.icon }}</span>
          } @else if (tab.number) {
            <span class="tab-number">{{ tab.number }}</span>
          }
          <span class="tab-label">{{ tab.label }}</span>
        </a>
      }
    </nav>
  `,
  styles: [
    `
      .lesson-tabs {
        display: flex;
        flex-wrap: wrap;
        gap: 0.25rem;
        padding: 1rem 2rem;
        background: white;
        border-bottom: 1px solid #e2e8f0;
        max-width: 100%;
        overflow-x: auto;
      }

      .tab {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.625rem 1rem;
        text-decoration: none;
        color: #64748b;
        font-size: 0.875rem;
        font-weight: 500;
        border-radius: 8px;
        transition: all 0.2s ease;
        white-space: nowrap;
      }

      .tab:hover {
        background: #f1f5f9;
        color: #334155;
      }

      /* Blue Theme */
      .lesson-tabs[data-color='blue'] .tab.active {
        background: #eff6ff;
        color: #2563eb;
      }
      .lesson-tabs[data-color='blue'] .tab.active .tab-number {
        background: #2563eb;
        color: white;
      }

      /* Teal Theme */
      .lesson-tabs[data-color='teal'] .tab.active {
        background: #ccfbf1;
        color: #0d9488;
      }
      .lesson-tabs[data-color='teal'] .tab.active .tab-number {
        background: #0d9488;
        color: white;
      }

      /* Purple Theme */
      .lesson-tabs[data-color='purple'] .tab.active {
        background: #f3e8ff;
        color: #7c3aed;
      }
      .lesson-tabs[data-color='purple'] .tab.active .tab-number {
        background: #7c3aed;
        color: white;
      }

      /* Orange Theme */
      .lesson-tabs[data-color='orange'] .tab.active {
        background: #ffedd5;
        color: #ea580c;
      }
      .lesson-tabs[data-color='orange'] .tab.active .tab-number {
        background: #ea580c;
        color: white;
      }

      .tab-number {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
        background: #e2e8f0;
        border-radius: 6px;
        font-size: 0.75rem;
        font-weight: 700;
        transition: all 0.2s ease;
      }

      .tab-icon {
        font-size: 1rem;
      }

      .exercise-tab.active {
        background: #fef3c7 !important;
        color: #b45309 !important;
      }
    `,
  ],
})
export class ModuleNavbarComponent {
  tabs = input.required<LessonTab[]>();
  color = input<'blue' | 'teal' | 'purple' | 'orange'>('blue');
}

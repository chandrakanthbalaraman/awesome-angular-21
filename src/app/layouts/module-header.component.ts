import { Component, ChangeDetectionStrategy, input } from '@angular/core';

export interface ModuleConfig {
  number: string;
  title: string;
  description: string;
  phase: string;
  phaseTitle: string;
  lessonCount: string;
  duration: string;
  color: 'blue' | 'teal' | 'purple' | 'orange';
}

@Component({
  selector: 'app-module-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <header class="module-header" [attr.data-color]="config().color">
      <div class="header-content">
        <div class="breadcrumb">
          <span>{{ config().phase }}</span>
          <span class="separator">›</span>
          <span>{{ config().phaseTitle }}</span>
        </div>
        <div class="title-row">
          <span class="module-badge">{{ config().number }}</span>
          <h1>{{ config().title }}</h1>
        </div>
        <p class="module-description">{{ config().description }}</p>
        <div class="module-meta">
          <span class="meta-item">📚 {{ config().lessonCount }}</span>
          <span class="meta-item">⏱️ {{ config().duration }}</span>
        </div>
      </div>
    </header>
  `,
  styles: [
    `
      .module-header {
        color: white;
        padding: 2.5rem 2rem 1.5rem;
        padding-left: 4rem;
      }

      /* Color Themes */
      .module-header[data-color='blue'] {
        background: linear-gradient(135deg, #1e3a5f 0%, #2563eb 100%);
      }
      .module-header[data-color='blue'] .module-badge {
        color: #1e3a5f;
      }

      .module-header[data-color='teal'] {
        background: linear-gradient(135deg, #134e4a 0%, #0d9488 100%);
      }
      .module-header[data-color='teal'] .module-badge {
        color: #134e4a;
      }

      .module-header[data-color='purple'] {
        background: linear-gradient(135deg, #4c1d95 0%, #7c3aed 100%);
      }
      .module-header[data-color='purple'] .module-badge {
        color: #4c1d95;
      }

      .module-header[data-color='orange'] {
        background: linear-gradient(135deg, #9a3412 0%, #ea580c 100%);
      }
      .module-header[data-color='orange'] .module-badge {
        color: #9a3412;
      }

      .header-content {
        max-width: 1000px;
        margin: 0 auto;
      }

      .breadcrumb {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.75rem;
        opacity: 0.7;
        margin-bottom: 0.75rem;
      }

      .separator {
        opacity: 0.5;
      }

      .title-row {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        margin-bottom: 0.5rem;
      }

      .module-badge {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        background: white;
        font-size: 0.875rem;
        font-weight: 700;
        border-radius: 8px;
      }

      h1 {
        font-size: 1.75rem;
        font-weight: 600;
        margin: 0;
        color: white;
      }

      .module-description {
        font-size: 0.9375rem;
        opacity: 0.85;
        margin: 0 0 0.75rem;
        max-width: 550px;
        color: white;
      }

      .module-meta {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 1rem;
      }

      .meta-item {
        font-size: 0.8125rem;
        opacity: 0.8;
      }
    `,
  ],
})
export class ModuleHeaderComponent {
  config = input.required<ModuleConfig>();
}

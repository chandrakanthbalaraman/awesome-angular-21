import { Component, ChangeDetectionStrategy } from '@angular/core';

/**
 * Lesson 1: Standalone Components
 *
 * TODO: Implement examples for:
 * - Creating standalone components (default in Angular 21)
 * - Importing other standalone components directly
 * - No NgModules needed - components are self-contained
 * - The `imports` array in @Component decorator
 *
 * Docs: https://angular.dev/guide/components/standalone
 */
@Component({
  selector: 'app-standalone',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <h2>Lesson 1: Standalone Components</h2>
    <p>Learn: Self-contained components without NgModules</p>

    <!-- YOUR CODE HERE -->
  `,
  styles: [],
})
export class StandaloneComponent {}

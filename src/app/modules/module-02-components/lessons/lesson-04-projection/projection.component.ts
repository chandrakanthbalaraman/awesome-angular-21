import { Component, ChangeDetectionStrategy } from '@angular/core';

/**
 * Lesson 4: Content Projection
 *
 * TODO: Implement examples for:
 * - Single slot ng-content
 * - Multi-slot projection with selectors
 * - Conditional projection with ngProjectAs
 * - Default content fallback
 *
 * Docs: https://angular.dev/guide/components/content-projection
 */
@Component({
  selector: 'app-projection',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <h2>Lesson 4: Content Projection</h2>
    <p>Learn: ng-content, multi-slot projection, selectors</p>

    <!-- YOUR CODE HERE -->
  `,
  styles: [],
})
export class ProjectionComponent {}

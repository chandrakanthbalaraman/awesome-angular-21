import { Component, ChangeDetectionStrategy } from '@angular/core';

/**
 * Lesson 5: Change Detection
 *
 * TODO: Implement examples for:
 * - Default vs OnPush strategies
 * - How Signals automatically trigger change detection
 * - Manual change detection with ChangeDetectorRef
 * - Zoneless Angular (experimental)
 *
 * Docs: https://angular.dev/guide/components/change-detection
 */
@Component({
  selector: 'app-change-detection',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <h2>Lesson 5: Change Detection</h2>
    <p>Learn: OnPush strategy, Signals, Zoneless Angular</p>

    <!-- YOUR CODE HERE -->
  `,
  styles: [],
})
export class ChangeDetectionComponent {}

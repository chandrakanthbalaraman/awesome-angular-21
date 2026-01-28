import { Component, ChangeDetectionStrategy } from '@angular/core';

/**
 * Lesson 6: View Encapsulation
 *
 * TODO: Implement examples for:
 * - Emulated encapsulation (default)
 * - ShadowDom encapsulation
 * - None encapsulation
 * - When to use each strategy
 *
 * Docs: https://angular.dev/guide/components/styling
 */
@Component({
  selector: 'app-encapsulation',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <h2>Lesson 6: View Encapsulation</h2>
    <p>Learn: Emulated, ShadowDOM, None encapsulation</p>

    <!-- YOUR CODE HERE -->
  `,
  styles: [],
})
export class EncapsulationComponent {}

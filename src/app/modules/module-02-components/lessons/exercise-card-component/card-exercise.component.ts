import { Component, ChangeDetectionStrategy } from '@angular/core';

/**
 * Exercise: Reusable Card Component
 *
 * TODO: Build a production-ready reusable card component with:
 * - Multi-slot content projection (header, body, footer)
 * - Configurable variants (default, outlined, elevated)
 * - Theme support (light/dark)
 * - Hover animations
 * - OnPush change detection
 *
 * Requirements:
 * 1. Create CardComponent with header, body, footer slots
 * 2. Add @Input for variant and theme
 * 3. Use proper encapsulation
 * 4. Demonstrate in this component with sample cards
 */
@Component({
  selector: 'app-card-exercise',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <h2>🏋️ Exercise: Reusable Card Component</h2>
    <p>Build a production-ready card component with content projection</p>

    <!-- YOUR CODE HERE -->
  `,
  styles: [],
})
export class CardExerciseComponent {}

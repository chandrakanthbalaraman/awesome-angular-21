import { Component, ChangeDetectionStrategy } from '@angular/core';

/**
 * Exercise: Shopping Cart with Signals
 *
 * Build a shopping cart that demonstrates:
 * - signal() for cart items
 * - computed() for total price, item count
 * - effect() for localStorage persistence
 * - input/output for product components
 *
 * Requirements:
 * 1. Add/remove products
 * 2. Update quantities
 * 3. Calculate totals (computed)
 * 4. Persist to localStorage (effect)
 */
@Component({
  selector: 'app-shopping-cart',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h2>🏋️ Exercise: Shopping Cart</h2>
    <p>Build a shopping cart using all signals concepts!</p>

    <!-- YOUR CODE HERE -->
  `,
  styles: [],
})
export class ShoppingCartComponent {
  // YOUR CODE HERE
}

import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

/**
 * Lesson 2: Computed Signals
 *
 * TODO: Implement examples for:
 * - computed() - derive values from other signals
 * - Lazy evaluation
 * - Memoization
 *
 * Docs: https://angular.dev/guide/signals#computed-signals
 */
@Component({
  selector: 'app-signal-computed',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h2>Lesson 2: Computed Signals</h2>
    <p>Learn: computed(), lazy evaluation, memoization</p>

    <h3>Shopping Cart</h3>
    <p>Items: {{ items().length }}</p>
    <p>Subtotal: \${{ subtotal() }}</p>
    <p>Tax: \${{ tax() }}</p>
    <p>Total: \${{ total() }}</p>
    <hr />
    <p>Cart Status: {{ cartStatus() }}</p>
    <button (click)="addItem()">Add Item</button>
    <button (click)="removeItem()">Remove Item</button>
    <button (click)="clearCart()">Clear Cart</button>
  `,
  styles: [],
})
export class SignalComputedComponent {
  // 1 Primitive signals
  items = signal<CartItem[]>([
    { id: 1, name: 'Item 1', price: 10, quantity: 1 },
    { id: 2, name: 'Item 2', price: 20, quantity: 2 },
    { id: 3, name: 'Item 3', price: 30, quantity: 3 },
  ]);

  // 2 Computed signals
  subtotal = computed(() =>
    this.items().reduce((acc, item) => acc + item.price * item.quantity, 0),
  );
  tax = computed(() => this.subtotal() * 0.1);
  total = computed(() => this.subtotal() + this.tax());

  cartStatus = computed(() => {
    const total = this.total();
    if (this.items().length === 0) return '🛒 Empty cart';
    if (total > 100) return '💰 Great deal!';
    if (total > 50) return '🎉 Free shipping!';
    return `📦 ${this.items().length} items`;
  });

  addItem() {
    this.items.update((c) => [
      ...c,
      { id: c.length + 1, name: `Item ${c.length + 1}`, price: 10, quantity: 1 },
    ]);
  }

  removeItem() {
    this.items.update((c) => c.slice(0, c.length - 1));
  }

  clearCart() {
    this.items.set([]);
  }

  reset() {
    this.items.set([]);
  }
}

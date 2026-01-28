import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, computed, effect, signal } from '@angular/core';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface Product {
  id: number;
  name: string;
  price: number;
}
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
  imports: [CommonModule],
  template: `
    <h2>🏋️ Exercise: Shopping Cart</h2>
    <p>Build a shopping cart using all signals concepts!</p>

    <!-- YOUR CODE HERE -->
    <div class="cart-container">
      <div class="products-list">
        <h3>Available Products</h3>
        @for (product of products(); track product.id) {
          <div class="product-card">
            <h4>{{ product.name }}</h4>
            <p>$ {{ product.price }}</p>
            <button (click)="addProduct(product)">Add to Cart</button>
          </div>
        } @empty {
          <li>No products available</li>
        }
      </div>

      <div class="cart-summary">
        <h3>Shopping Cart</h3>
        <p>Items: {{ totalItems() }}</p>
        <p>Total: \${{ totalPrice() }}</p>

        <ul>
          @for (item of cartItems(); track item.id) {
            <li>
              {{ item.name }} x {{ item.quantity }}
              <button (click)="updateQuantity(item.id, item.quantity - 1)">-</button>
              <button (click)="updateQuantity(item.id, item.quantity + 1)">+</button>
              <button (click)="removeProduct(item.id)">Remove</button>
            </li>
          } @empty {
            <li>Your cart is empty</li>
          }
        </ul>
      </div>
    </div>
  `,
  styles: [
    `
      .cart-container {
        display: flex;
        gap: 2rem;
      }
      .products-list {
        flex: 1;
      }
      .cart-summary {
        flex: 1;
      }
      .product-card {
        border: 1px solid #ccc;
        padding: 1rem;
        margin-bottom: 1rem;
      }
    `,
  ],
})
export class ShoppingCartComponent {
  // YOUR CODE HERE
  products = signal([
    { id: 1, name: 'Laptop', price: 1200 },
    { id: 2, name: 'Mouse', price: 25 },
    { id: 3, name: 'Keyboard', price: 75 },
    { id: 4, name: 'Monitor', price: 300 },
  ]);
  // 1. Cart items signal
  cartItems = signal<CartItem[]>([]);

  // 2. Computed properties
  totalItems = computed(() => this.cartItems().length);
  totalPrice = computed(() =>
    this.cartItems().reduce((sum, item) => sum + item.price * item.quantity, 0),
  );

  // 3. Effect for localStorage persistence
  constructor() {
    const saved = localStorage.getItem('shoppingCart');
    if (saved) {
      this.cartItems.set(JSON.parse(saved));
    }
    effect(() => {
      localStorage.setItem('shoppingCart', JSON.stringify(this.cartItems()));
    });
  }

  // 4. Add product
  addProduct(product: Product) {
    this.cartItems.update((items) => {
      const existingItem = items.find((item) => item.id === product.id);
      if (existingItem) {
        return items.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }
      return [...items, { ...product, quantity: 1 }];
    });
  }

  // 5. Remove product
  removeProduct(productId: number) {
    this.cartItems.update((items) => items.filter((item) => item.id !== productId));
  }

  // 6. Update quantity
  updateQuantity(productId: number, quantity: number) {
    if (quantity <= 0) {
      this.removeProduct(productId);
    } else {
      this.cartItems.update((items) =>
        items.map((item) => (item.id === productId ? { ...item, quantity } : item)),
      );
    }
  }
}

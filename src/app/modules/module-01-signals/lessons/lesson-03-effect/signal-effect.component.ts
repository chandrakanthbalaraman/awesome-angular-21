import { Component, ChangeDetectionStrategy, effect, signal } from '@angular/core';

/**
 * Lesson 3: Signal Effects
 *
 * TODO: Implement examples for:
 * - effect() - side effects when signals change
 * - Cleanup function
 * - Lifecycle considerations
 *
 * Docs: https://angular.dev/guide/signals#effects
 */
@Component({
  selector: 'app-signal-effect',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h2>Lesson 3: Signal Effects</h2>
    <p>Learn: effect(), cleanup, lifecycle</p>

    <h3>Search Input</h3>
    <input
      type="text"
      [value]="searchInput()"
      (input)="searchInput.set($event.target.value)"
      placeholder="Search..."
    />

    <h3>Counter</h3>
    <p>Count: {{ counter() }}</p>
    <button (click)="increment()">Increment</button>
    <button (click)="decrement()">Decrement</button>

    <h3>Theme</h3>
    <button (click)="setTheme('light')">Light</button>
    <button (click)="setTheme('dark')">Dark</button>
    <button (click)="setTheme('system')">System</button>
    <p>Theme: {{ theme() }}</p>
  `,
  styles: [],
})
export class SignalEffectComponent {
  searchInput = signal('');

  counter = signal(0);

  theme = signal<'light' | 'dark' | 'system'>('light');

  constructor() {
    effect(() => {
      const query = this.searchInput();
      console.log('Search query changed:', query);

      // Call API, update UI, etc.
      if (query.length > 2) {
        this.performSearch(query);
      }
    });

    effect(() => {
      console.log('Counter changed:', this.counter());
    });

    // 2️⃣ Effect with multiple dependencies
    effect(() => {
      const count = this.counter();
      const theme = this.theme();

      console.log(`Count is ${count} in ${theme} theme`);
    });

    // 3️⃣ Cleanup function
    effect((cleanup) => {
      console.log('Counter changed:', this.counter());

      cleanup(() => {
        console.log('Counter reset:', this.counter());
      });
    });

    // 3️⃣ Effect with cleanup
    effect((onCleanup) => {
      const query = this.searchInput();

      // Setup (e.g., start timer, add listener)
      const timerId = setTimeout(() => {
        console.log('Debounced search:', query);
      }, 500);

      // Cleanup function - runs before next effect
      onCleanup(() => {
        clearTimeout(timerId);
        console.log('Cleanup previous effect');
      });
    });

    // 4️⃣ Effect for localStorage sync
    effect(() => {
      const theme = this.theme();
      localStorage.setItem('theme', theme);
      document.body.className = theme;
    });

    // 5️⃣ Effect for logging
    effect(() => {
      console.log('Component state:', {
        search: this.searchInput(),
        count: this.counter(),
        theme: this.theme(),
      });
    });
  }

  performSearch(query: string) {
    // Call API, update UI, etc.
    console.log('Searching for:', query);
  }

  increment() {
    this.counter.update((c) => c + 1);
  }

  decrement() {
    this.counter.update((c) => c - 1);
  }

  setTheme(theme: 'light' | 'dark' | 'system') {
    this.theme.set(theme);
  }
}

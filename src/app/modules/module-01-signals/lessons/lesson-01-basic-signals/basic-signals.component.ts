import { JsonPipe } from '@angular/common';
import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

/**
 * Lesson 1: Basic Signals
 *
 * TODO: Implement examples for:
 * - signal() - create a signal
 * - set() - replace the value
 * - update() - update based on previous value
 *
 * Docs: https://angular.dev/guide/signals
 */
@Component({
  selector: 'app-basic-signals',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [JsonPipe],
  template: `
    <h2>Lesson 1: Basic Signals</h2>
    <p>Learn: signal(), set(), update()</p>

    <!-- YOUR CODE HERE -->
    <div>
      <p>Count: {{ count() }}</p>
      <button (click)="increment()">Increment</button>
      <button (click)="reset()">Reset</button>
      <button (click)="decrement()">Decrement</button>
    </div>
    <div>
      <p>Name: {{ name() }}</p>
      <button (click)="updateName()">Update Name</button>
    </div>
    <div>
      <p>Is Active: {{ isActive() }}</p>
      <button (click)="toggleActive()">Toggle Active</button>
    </div>
    <div>
      <p>Person: {{ person() | json }}</p>
      <button (click)="updatePerson()">Update Person</button>
    </div>
  `,
  styles: [],
})
export class BasicSignalsComponent {
  // 1 Primitive signals
  count = signal(0);
  name = signal('Angular');
  isActive = signal(true);

  // 2 Object Signals
  person = signal({
    name: 'John Doe',
    age: 30,
    isActive: true,
  });

  updateName() {
    this.name.set('John Doe');
  }

  toggleActive() {
    this.isActive.update((c) => !c);
  }

  updatePerson() {
    this.person.update((p) => ({
      ...p,
      name: 'Angular',
      age: 30,
      isActive: true,
    }));
  }

  increment() {
    this.count.update((c) => c + 1);
  }

  decrement() {
    this.count.update((c) => c - 1);
  }

  reset() {
    this.count.set(0);
  }
}

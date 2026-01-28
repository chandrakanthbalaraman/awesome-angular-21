import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CustomInputComponent } from './custom-input.component';

/**
 * Lesson 7: Model Signals
 *
 * TODO: Implement examples for:
 * - model() - two-way binding with signals
 * - Banana-in-box syntax [(model)]
 * - Comparison with traditional ngModel
 *
 * Docs: https://angular.dev/guide/signals/model
 */
@Component({
  selector: 'app-signal-model',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CustomInputComponent],
  template: `
    <h2>Lesson 7: Model Signals</h2>
    <p>Learn: model(), two-way binding</p>

    <custom-input [(value)]="name" label="Name" placeholder="Enter your name" />

    <custom-input [(value)]="email" label="Email" placeholder="Enter your email" />

    <p>Name: {{ name() }}</p>
    <p>Email: {{ email() }}</p>

    <button (click)="fillForm()">Fill Form</button>
    <button (click)="clearForm()">Clear Form</button>
  `,
  styles: [],
})
export class SignalModelComponent {
  // YOUR CODE HERE

  name = signal<string>('');
  email = signal<string>('');

  fillForm() {
    this.name.set('John Doe');
    this.email.set('john.doe@example.com');
  }

  clearForm() {
    this.name.set('');
    this.email.set('');
  }
}

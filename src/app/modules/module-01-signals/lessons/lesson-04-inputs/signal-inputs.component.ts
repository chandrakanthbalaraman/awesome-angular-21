import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SignalUserInputComponent } from './signal-user-input.component';

/**
 * Lesson 4: Signal Inputs
 *
 * TODO: Implement examples for:
 * - input() - signal-based component inputs
 * - input.required() - required inputs
 * - transform option
 *
 * Docs: https://angular.dev/guide/signals/inputs
 */
@Component({
  selector: 'app-signal-inputs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SignalUserInputComponent],
  template: `
    <h2>Lesson 4: Signal Inputs</h2>
    <p>Learn: input(), input.required(), transform</p>

    <app-signal-user-input
      [name]="'John'"
      [age]="30"
      [email]="'john@test.com'"
      [userRole]="'ADMIN'"
      [displayName]="'John Doe'"
    />
  `,
  styles: [],
})
export class SignalInputsComponent {
  // YOUR CODE HERE
}

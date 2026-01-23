import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CounterOutputComponent } from './counter-output.component';

/**
 * Lesson 5: Signal Outputs
 *
 * TODO: Implement examples for:
 * - output() - signal-based component outputs
 * - emit() - emitting values
 * - OutputEmitterRef patterns
 *
 * Docs: https://angular.dev/guide/components/outputs
 */
@Component({
  selector: 'app-signal-outputs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CounterOutputComponent],
  template: `
    <h2>Lesson 5: Signal Outputs</h2>
    <p>Learn: output(), emit patterns</p>

    <p>Parent Count: {{ parentCount() }}</p>
    <!-- YOUR CODE HERE -->
    <counter-output
      (countChanged)="onCountChanged($event)"
      (onValueChange)="onValueChanged($event)"
      (resetClicked)="onResetClicked()"
      (actionPerformed)="onActionPerformed($event)"
    ></counter-output>
  `,
  styles: [],
})
export class SignalOutputsComponent {
  // YOUR CODE HERE

  parentCount = signal(0);

  onCountChanged(count: number) {
    console.log('Count changed:', count);
    this.parentCount.set(count);
  }

  onValueChanged(value: number) {
    console.log('Value changed:', value);
  }

  onResetClicked() {
    console.log('Reset clicked');
    this.parentCount.set(0);
  }

  onActionPerformed(action: { action: string; value: number; timestamp: Date }) {
    console.log('Action performed:', action);
  }
}

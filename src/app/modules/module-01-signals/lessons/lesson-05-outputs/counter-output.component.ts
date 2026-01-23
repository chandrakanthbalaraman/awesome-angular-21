import { Component, OnInit, signal, output } from '@angular/core';

@Component({
  selector: 'counter-output',
  template: `
    <div>
      <h3>Child Counter</h3>
      <p>{{ counter() }}</p>
      <button (click)="increment()">Increment</button>
      <button (click)="decrement()">Decrement</button>
      <button (click)="reset()">Reset</button>
    </div>
  `,
})
export class CounterOutputComponent implements OnInit {
  counter = signal(0);

  // 1️⃣ Basic output
  countChanged = output<number>();

  // 2️⃣ Output with alias
  valueChanged = output<number>({ alias: 'onValueChange' });

  // 3️⃣ Output for events without data
  resetClicked = output<void>();

  // 4️⃣ Output with complex data
  actionPerformed = output<{
    action: 'increment' | 'decrement' | 'reset';
    value: number;
    timestamp: Date;
  }>();

  constructor() {}

  ngOnInit() {}

  increment() {
    this.counter.update((c) => c + 1);
    this.countChanged.emit(this.counter());
    this.valueChanged.emit(this.counter());
    this.actionPerformed.emit({
      action: 'increment',
      value: this.counter(),
      timestamp: new Date(),
    });
  }

  decrement() {
    this.counter.update((c) => c - 1);
    this.countChanged.emit(this.counter());
    this.valueChanged.emit(this.counter());
    this.actionPerformed.emit({
      action: 'decrement',
      value: this.counter(),
      timestamp: new Date(),
    });
  }

  reset() {
    this.counter.set(0);
    this.countChanged.emit(this.counter());
    this.valueChanged.emit(this.counter());
    this.actionPerformed.emit({
      action: 'reset',
      value: this.counter(),
      timestamp: new Date(),
    });
  }
}

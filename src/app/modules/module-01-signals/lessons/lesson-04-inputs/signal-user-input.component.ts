import { ChangeDetectionStrategy, Component, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-signal-user-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h2>Signal User Input</h2>
    <p>Learn: signal inputs, signal outputs</p>
    <p>Name: {{ name() }}</p>
    <p>Age: {{ age() }}</p>
    <p>Email: {{ email() }}</p>
    <p>Role: {{ role() }}</p>
    <p>Display Name: {{ displayName() }}</p>
  `,
})
export class SignalUserInputComponent implements OnInit {
  // Simple Input
  name = input<string>();
  age = input<number>();
  // Required Input
  email = input.required<string>();
  // Default Input with alias
  role = input<string>('USER', {
    alias: 'userRole',
  });

  // Input with transform
  displayName = input('', {
    transform: (value: string) => value.toUpperCase(),
  });

  constructor() {}

  ngOnInit() {}
}

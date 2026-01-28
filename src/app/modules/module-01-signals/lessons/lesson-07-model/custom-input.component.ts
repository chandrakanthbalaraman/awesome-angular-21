import { Component, input, model, OnInit } from '@angular/core';

@Component({
  selector: 'custom-input',
  template: `
    <div class="input-group">
      <label for="input">{{ label() }}</label>
      <input
        type="text"
        id="input"
        [value]="value()"
        (input)="value.set($event.target.value)"
        [placeholder]="placeholder()"
      />
      <p>{{ value() }}</p>
    </div>
  `,
  styles: `
    .input-group {
      border: 1px solid #ccc;
      padding: 8px;
      border-radius: 4px;
    }
  `,
})
export class CustomInputComponent implements OnInit {
  value = model<string>('');
  placeholder = input<string>('');
  label = input<string>('');

  constructor() {}

  ngOnInit() {}
}

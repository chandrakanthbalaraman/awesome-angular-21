import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'child-queries',
  template: `
    <h3>Child Queries</h3>
    <p>Child Queries</p>
  `,
})
export class ChildQueriesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  doSomething() {
    console.log('Child method called');
  }
}

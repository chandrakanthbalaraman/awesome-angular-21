import {
  Component,
  contentChild,
  contentChildren,
  ElementRef,
  AfterContentInit,
} from '@angular/core';
import { ChildQueriesComponent } from './child-queries.component';

/**
 * Content Wrapper Component
 *
 * This component demonstrates contentChild() and contentChildren()
 * These query PROJECTED content (content passed via ng-content)
 */
@Component({
  selector: 'content-wrapper',
  template: `
    <div style="border: 2px dashed #007bff; padding: 16px; margin: 16px 0;">
      <h4>Content Wrapper (uses contentChild/contentChildren)</h4>
      <p>Projected children count: {{ projectedCount }}</p>
      <button (click)="callFirstProjectedChild()">Call First Projected Child</button>
      <button (click)="logAllProjectedChildren()">Log All Projected Children</button>

      <!-- ng-content receives projected content from parent -->
      <div style="background: #e7f3ff; padding: 10px; margin-top: 10px;">
        <p><strong>Projected Content Below:</strong></p>
        <ng-content />
      </div>
    </div>
  `,
})
export class ContentWrapperComponent implements AfterContentInit {
  // Query FIRST projected ChildQueriesComponent
  firstProjectedChild = contentChild(ChildQueriesComponent);

  // Query ALL projected ChildQueriesComponent instances
  allProjectedChildren = contentChildren(ChildQueriesComponent);

  // You can also query by template ref or ElementRef
  projectedElement = contentChild('projectedItem', { read: ElementRef });

  projectedCount = 0;

  ngAfterContentInit() {
    // Content queries are available after content init
    this.projectedCount = this.allProjectedChildren().length;
    console.log('Projected children:', this.projectedCount);
  }

  callFirstProjectedChild() {
    const child = this.firstProjectedChild();
    if (child) {
      console.log('Calling first projected child method:');
      child.doSomething();
    } else {
      console.log('No projected child found!');
    }
  }

  logAllProjectedChildren() {
    const children = this.allProjectedChildren();
    console.log('All projected children:', children.length);
    children.forEach((child, i) => {
      console.log(`Projected Child ${i}:`);
      child.doSomething();
    });
  }
}

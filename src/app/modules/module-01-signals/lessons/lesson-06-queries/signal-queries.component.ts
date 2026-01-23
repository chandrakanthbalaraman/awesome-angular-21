import {
  Component,
  ChangeDetectionStrategy,
  viewChild,
  ElementRef,
  viewChildren,
  contentChild,
  contentChildren,
} from '@angular/core';
import { ChildQueriesComponent } from './child-queries.component';
import { ContentWrapperComponent } from './content-wrapper.component';

/**
 * Lesson 6: Signal Queries
 *
 * TODO: Implement examples for:
 * - viewChild() - query single element/component
 * - viewChildren() - query multiple
 * - contentChild() / contentChildren()
 *
 * Docs: https://angular.dev/guide/signals/queries
 */
@Component({
  selector: 'app-signal-queries',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ChildQueriesComponent, ContentWrapperComponent],
  template: `
    <h2>Lesson 6: Signal Queries</h2>
    <p>Learn: viewChild(), viewChildren(), contentChild()</p>

    <!-- Input query -->
    <input #searchInput type="text" />
    <button (click)="focusInput()">Focus Input</button>

    <!-- Child components -->
    <child-queries />
    <child-queries />
    <child-queries />

    <button (click)="callChildMethod()">Call Child</button>
    <button (click)="logChildren()">Log All Children</button>

    <!-- Element with read option -->
    <div #myDiv style="padding: 10px; background: #f0f0f0; margin-top: 10px;">
      This is #myDiv element
    </div>
    <button (click)="logDivElement()">Log Div Element</button>

    <hr style="margin: 20px 0;" />

    <!-- 🔥 Content Projection Example for contentChild/contentChildren -->
    <h3>Content Projection Demo</h3>
    <p>The children below are PROJECTED into ContentWrapperComponent:</p>

    <content-wrapper>
      <!-- These ChildQueriesComponent instances are PROJECTED content -->
      <!-- ContentWrapperComponent queries them with contentChild/contentChildren -->
      <child-queries />
      <child-queries />
      <p #projectedItem>This is a projected paragraph</p>
    </content-wrapper>
  `,
  styles: [],
})
export class SignalQueriesComponent {
  // YOUR CODE HERE

  searchInput = viewChild<ElementRef<HTMLInputElement>>('searchInput');

  firstChild = viewChild<ChildQueriesComponent>(ChildQueriesComponent);

  allChildren = viewChildren<ChildQueriesComponent>(ChildQueriesComponent);

  // Note: requiredChild will throw error if not found - removed for demo
  // requiredChild = viewChild.required<ChildQueriesComponent>(ChildQueriesComponent);

  // 5️⃣ Query with read option - get ElementRef from a div
  divElement = viewChild('myDiv', { read: ElementRef });

  projectedChild = contentChild(ChildQueriesComponent);
  projectedChildren = contentChildren(ChildQueriesComponent);

  focusInput() {
    this.searchInput()?.nativeElement.focus();
  }

  callChildMethod() {
    const child = this.firstChild();
    if (child) {
      child.doSomething();
    }
  }

  logChildren() {
    const children = this.allChildren();
    console.log('Total children:', children.length);
    children.forEach((child, i) => {
      console.log(`Child ${i}:`, child);
      child.doSomething();
    });
  }

  logDivElement() {
    const div = this.divElement();
    if (div) {
      console.log('Div element:', div.nativeElement);
      console.log('Div innerHTML:', div.nativeElement.innerHTML);
    }
  }
}

import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  OnDestroy,
  AfterViewInit,
  signal,
  afterNextRender,
} from '@angular/core';

/**
 * Lesson 2: Component Lifecycle
 *
 * Traditional Hooks:
 * - ngOnInit - Component initialized
 * - ngOnDestroy - Component destroyed
 * - ngAfterViewInit - View is ready
 *
 * Modern APIs (Signal-based):
 * - afterNextRender() - Runs once after next render
 */
@Component({
  selector: 'app-lifecycle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <h2>Lesson 2: Component Lifecycle</h2>
    <p>Learn lifecycle hooks and modern render APIs.</p>

    <h3>Traditional Lifecycle Hooks</h3>
    <ul>
      <li><code>ngOnInit</code> - Called once after inputs are set</li>
      <li><code>ngOnChanges</code> - Called when inputs change</li>
      <li><code>ngAfterViewInit</code> - Called after view is initialized</li>
      <li><code>ngOnDestroy</code> - Cleanup before component is destroyed</li>
    </ul>

    <h3>Demo: Lifecycle Events</h3>
    <div class="lifecycle-log">
      <p><strong>Lifecycle Events:</strong></p>
      @for (event of lifecycleEvents(); track $index) {
        <div class="event">{{ event }}</div>
      }
    </div>

    <button (click)="triggerAction()">Trigger Action</button>
    <p>Action count: {{ actionCount() }}</p>

    <h3>Modern: afterNextRender()</h3>
    <pre><code>// Runs ONCE after next render (DOM ready)
afterNextRender(() => &#123;
  console.log('DOM is ready!');
  // Safe to access DOM elements here
&#125;);</code></pre>

    <h3>Best Practice: Use effect() for Signals</h3>
    <pre><code>// React to signal changes
effect(() => &#123;
  console.log('Value changed:', this.mySignal());
&#125;);</code></pre>
  `,
  styles: [
    `
      .lifecycle-log {
        background: #f1f5f9;
        padding: 1rem;
        border-radius: 8px;
        margin: 1rem 0;
      }
      .event {
        font-family: monospace;
        font-size: 0.8125rem;
        color: #475569;
        padding: 0.25rem 0;
      }
    `,
  ],
})
export class LifecycleComponent implements OnInit, OnDestroy, AfterViewInit {
  lifecycleEvents = signal<string[]>([]);
  actionCount = signal(0);

  constructor() {
    this.logEvent('constructor called');

    // Modern: runs once after next render
    afterNextRender(() => {
      this.logEvent('afterNextRender - DOM ready!');
    });
  }

  ngOnInit() {
    this.logEvent('ngOnInit - component initialized');
  }

  ngAfterViewInit() {
    this.logEvent('ngAfterViewInit - view ready');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy - cleanup!');
  }

  triggerAction() {
    this.actionCount.update((c) => c + 1);
    this.logEvent('Action triggered');
  }

  private logEvent(event: string) {
    const time = new Date().toLocaleTimeString();
    this.lifecycleEvents.update((events) => [...events, `[${time}] ${event}`]);
  }
}

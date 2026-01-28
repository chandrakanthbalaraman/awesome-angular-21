import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
  Component,
  ChangeDetectionStrategy,
  inject,
  signal,
  OnDestroy,
  effect,
} from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import {
  interval,
  Subject,
  takeUntil,
  Subscription,
  debounceTime,
  map,
  distinctUntilChanged,
  filter,
  fromEvent,
} from 'rxjs';

interface User {
  id: number;
  name: string;
  email: string;
}

/**
 * Lesson 8: RxJS Interop
 *
 * Key Learning:
 * - toSignal() can ONLY be called in an injection context (constructor/field initializer)
 * - For resettable/controllable streams, use a WritableSignal with manual subscription
 * - toSignal() is best for "set and forget" streams that don't need runtime control
 *
 * Docs: https://angular.dev/guide/signals/rxjs-interop
 */
@Component({
  selector: 'app-rxjs-interop',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [JsonPipe],
  template: `
    <h2>Lesson 8: RxJS Interop</h2>
    <p>Learn: toSignal(), toObservable()</p>
    <h3>Signal From Observable (Controllable Timer)</h3>
    <p>Timer: {{ timer() }}</p>

    <button (click)="startTimer()" [disabled]="isRunning()">Start Timer</button>
    <button (click)="stopTimer()" [disabled]="!isRunning()">Stop Timer</button>
    <button (click)="resetTimer()" [disabled]="isRunning()">Reset Timer</button>

    <hr />

    <h3>Signal From Observable (HTTP - using toSignal)</h3>
    <p>User: {{ users()?.name }}</p>
    <p>User ID: {{ users()?.id }}</p>
    <p>User Email: {{ users()?.email }}</p>

    <hr />

    <h3>Signal From Observable (Mouse Position)</h3>
    <p>Mouse Position: {{ mousePosition().x }}, {{ mousePosition().y }}</p>

    <hr />

    <h3>Observable From Signal</h3>
    <input [value]="searchQuery()" (input)="searchQuery.set($any($event.target).value)" />
    <p>Searching for: {{ debouncedSearch() }}</p>
  `,
  styles: [],
})
export class RxjsInteropComponent implements OnDestroy {
  private readonly http = inject(HttpClient);

  // === CONTROLLABLE TIMER (using WritableSignal + manual subscription) ===
  // Use this pattern when you need runtime control (start/stop/reset)
  timer = signal(0);
  isRunning = signal(true);
  private stop$ = new Subject<void>();

  // === HTTP REQUEST (using toSignal) ===
  // toSignal() is perfect for "fire and forget" streams like HTTP requests
  users = toSignal(this.http.get<User>('https://jsonplaceholder.typicode.com/users/1'), {
    initialValue: null,
  });

  // === OBSERVABLE FROM SIGNAL ===
  searchQuery = signal('');
  searchQuery$ = toObservable(this.searchQuery);

  debouncedSearch = toSignal(
    this.searchQuery$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      filter((value) => value.length > 3),
      map((value) => value.toUpperCase()),
    ),
    { initialValue: '' },
  );

  private mouseMove$ = fromEvent<MouseEvent>(document, 'mousemove');

  mousePosition = toSignal(
    this.mouseMove$.pipe(map((event) => ({ x: event.clientX, y: event.clientY }))),
    { initialValue: { x: 0, y: 0 } },
  );

  constructor() {
    this.startTimer();
    effect(() => {
      console.log('Search query changed:', this.debouncedSearch());
    });
  }

  startTimer() {
    this.stop$.next();
    this.stop$.complete();
    this.timer.set(0);
    this.stop$ = new Subject<void>();
    interval(1000)
      .pipe(takeUntil(this.stop$))
      .subscribe((value) => {
        this.timer.set(value);
      });
    this.isRunning.set(true);
  }

  stopTimer() {
    this.stop$.next();
    this.stop$.complete();
    this.isRunning.set(false);
  }

  resetTimer() {
    // Stop the current timer if running
    if (this.isRunning()) {
      this.stop$.next();
      this.stop$.complete();
    }
    // Reset value and start fresh
    this.timer.set(0);
    this.startTimer();
  }

  ngOnDestroy() {
    this.stop$.next();
    this.stop$.complete();
  }
}

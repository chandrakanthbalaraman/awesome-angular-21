import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ModuleLayoutComponent, ModuleConfig, LessonTab } from '../../layouts';

@Component({
  selector: 'app-module-01',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ModuleLayoutComponent],
  template: `<app-module-layout [config]="moduleConfig" [tabs]="lessonTabs" />`,
})
export class Module01Component {
  readonly moduleConfig: ModuleConfig = {
    number: '01',
    title: 'Signals Deep Dive',
    description:
      "Master Angular's reactive primitive for building performant, declarative applications.",
    phase: 'Phase 1',
    phaseTitle: 'Core Fundamentals',
    lessonCount: '8 Lessons + Exercise',
    duration: '~3 hours',
    color: 'blue',
  };

  readonly lessonTabs: LessonTab[] = [
    { route: 'basic', number: '01', label: 'Basic Signals' },
    { route: 'computed', number: '02', label: 'Computed' },
    { route: 'effect', number: '03', label: 'Effects' },
    { route: 'inputs', number: '04', label: 'Signal Inputs' },
    { route: 'outputs', number: '05', label: 'Outputs' },
    { route: 'queries', number: '06', label: 'Queries' },
    { route: 'model', number: '07', label: 'Model' },
    { route: 'rxjs-interop', number: '08', label: 'RxJS' },
    { route: 'exercise', icon: '🏋️', label: 'Exercise', isExercise: true },
  ];
}

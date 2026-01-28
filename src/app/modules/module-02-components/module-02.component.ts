import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ModuleLayoutComponent, ModuleConfig, LessonTab } from '../../layouts';

@Component({
  selector: 'app-module-02',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ModuleLayoutComponent],
  template: `<app-module-layout [config]="moduleConfig" [tabs]="lessonTabs" />`,
})
export class Module02Component {
  readonly moduleConfig: ModuleConfig = {
    number: '02',
    title: 'Components Mastery',
    description:
      'Build reusable, maintainable components with lifecycle hooks, communication patterns, and change detection.',
    phase: 'Phase 1',
    phaseTitle: 'Core Fundamentals',
    lessonCount: '6 Lessons + Exercise',
    duration: '~4 hours',
    color: 'teal',
  };

  readonly lessonTabs: LessonTab[] = [
    { route: 'standalone', number: '01', label: 'Standalone' },
    { route: 'lifecycle', number: '02', label: 'Lifecycle' },
    { route: 'communication', number: '03', label: 'Communication' },
    { route: 'projection', number: '04', label: 'Projection' },
    { route: 'change-detection', number: '05', label: 'Change Detection' },
    { route: 'encapsulation', number: '06', label: 'Encapsulation' },
    { route: 'exercise', icon: '🏋️', label: 'Exercise', isExercise: true },
  ];
}

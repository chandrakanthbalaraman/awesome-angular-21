# 🚀 Awesome Angular 21

> **Angular 21 Mastery Learning Shell**  
> **You Build • I Guide • LinkedIn Portfolio Ready**

A hands-on learning shell application for mastering Angular 21, featuring module-based routing and progressive exercises.

---

## 🧭 Quick Start

```bash
# Install dependencies
npm install

# Start development server
ng serve

# Navigate to
open http://localhost:4200
```

---

## 📚 Learning Modules

### Phase 1: Core Angular

| #   | Module                                                | Status | Duration |
| --- | ----------------------------------------------------- | ------ | -------- |
| 01  | [**Signals Deep Dive**](#module-01-signals-deep-dive) | 🔄     | 1.5 wks  |

---

## Module 01: Signals Deep Dive

> **Path**: `/module-01-signals` | **Duration**: 1.5 weeks

Signals are Angular's new reactive primitive for state management. This module covers everything from basics to advanced patterns.

### Learning Objectives

- ✅ Understand why Signals were introduced in Angular
- ✅ Create and manipulate signals with `signal()`, `set()`, `update()`
- ✅ Derive state with `computed()`
- ✅ Handle side effects with `effect()`
- ✅ Use modern input/output/query patterns
- ✅ Bridge Signals and RxJS with `toSignal()` / `toObservable()`

### Lessons

| #   | Lesson                                                                             | Topics                                     | Route                             |
| --- | ---------------------------------------------------------------------------------- | ------------------------------------------ | --------------------------------- |
| 1   | [Basic Signals](src/app/modules/module-01-signals/lessons/lesson-01-basic-signals) | `signal()`, `set()`, `update()`            | `/module-01-signals/basic`        |
| 2   | [Computed](src/app/modules/module-01-signals/lessons/lesson-02-computed)           | `computed()`, lazy evaluation, memoization | `/module-01-signals/computed`     |
| 3   | [Effects](src/app/modules/module-01-signals/lessons/lesson-03-effect)              | `effect()`, cleanup, lifecycle             | `/module-01-signals/effect`       |
| 4   | [Signal Inputs](src/app/modules/module-01-signals/lessons/lesson-04-inputs)        | `input()`, `required`, `transform`         | `/module-01-signals/inputs`       |
| 5   | [Signal Outputs](src/app/modules/module-01-signals/lessons/lesson-05-outputs)      | `output()`, emit patterns                  | `/module-01-signals/outputs`      |
| 6   | [Signal Queries](src/app/modules/module-01-signals/lessons/lesson-06-queries)      | `viewChild()`, `contentChild()`            | `/module-01-signals/queries`      |
| 7   | [Model Signals](src/app/modules/module-01-signals/lessons/lesson-07-model)         | `model()`, two-way binding                 | `/module-01-signals/model`        |
| 8   | [RxJS Interop](src/app/modules/module-01-signals/lessons/lesson-08-rxjs-interop)   | `toSignal()`, `toObservable()`             | `/module-01-signals/rxjs-interop` |
| 🏋️  | [Exercise](src/app/modules/module-01-signals/lessons/exercise-shopping-cart)       | Shopping Cart with Signals                 | `/module-01-signals/exercise`     |

### Documentation

- 📖 [Angular Signals Guide](https://angular.dev/guide/signals)
- 📖 [Signal Inputs](https://angular.dev/guide/signals/inputs)
- 📖 [Signal Queries](https://angular.dev/guide/signals/queries)
- 📖 [Model Signals](https://angular.dev/guide/signals/model)
- 📖 [RxJS Interop](https://angular.dev/guide/signals/rxjs-interop)

---

## 📊 Progress Tracker

| #   | Module  | Status | Exercise | LinkedIn |
| --- | ------- | ------ | -------- | -------- |
| 01  | Signals | 🔄     | ⬜       | ⬜       |

**Legend**: ⬜ Not Started | 🔄 In Progress | ✅ Complete

---

## 🛠️ Development

```bash
# Run tests
ng test

# Build for production
ng build

# Lint code
ng lint
```

---

## 📜 License

MIT

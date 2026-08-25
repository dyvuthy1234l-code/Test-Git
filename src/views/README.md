# Views Directory (`src/views/`)

This directory contains page-level Vue view components mapped to Vue Router endpoints.

## Page Components:

- `HomeView.vue`: Landing page showing practice hero banner, practice list, feature cards, and Pinia store checklist.
- `AboutView.vue`: Information page explaining project purpose and practice objectives.
- `LoginView.vue`: Simulated login form UI component.

## Guidelines:

1. **Naming**: Use `PascalCase` ending with `View.vue` (`HomeView.vue`, `AboutView.vue`).
2. **Layout**: Views render inside `MainLayout.vue` via `<RouterView />`.
3. **TypeScript**: Use `<script setup lang="ts">` for typed reactive data structures.

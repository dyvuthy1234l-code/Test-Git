# Stores Directory (`src/stores/`)

This directory contains Pinia stores for global application state management.

## Stores Included:

- `practiceStore.ts`: Simple store demonstrating Pinia setup with Composition API syntax (`defineStore`). Holds practice topics checklist and toggle action.

## Guidelines for Team Members:

1. **Naming**: Use `camelCase` for store files ending in `Store.ts` (e.g., `userStore.ts`, `authStore.ts`).
2. **Composition API**: Prefer setup function syntax with `ref()`, `computed()`, and actions.
3. **TypeScript**: Define explicit TypeScript interfaces for all state objects.
4. **Keep it Lean**: Store global application state only. Local UI state should remain inside component files.

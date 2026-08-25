# Types Directory (`src/types/`)

This directory is designated for shared TypeScript type definitions, interfaces, and enums used across the application.

## Guidelines:

- Define domain models, API response interfaces, and generic data types here.
- Export types explicitly using `export interface` or `export type`.
- Import types in components/stores using type-only imports:
  ```ts
  import type { User } from '@/types/user'
  ```

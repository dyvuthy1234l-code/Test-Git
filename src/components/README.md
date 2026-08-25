# Components Directory (`src/components/`)

This directory contains shared reusable Vue components across the project.

## Components Included:

- `Navbar.vue`: Top navigation header featuring logo, navigation links, and mobile navigation drawer.
- `Footer.vue`: Shared page footer with practice project metadata.

## Team Conventions:

1. **Naming**: Use `PascalCase` for component filenames (`Navbar.vue`, `Footer.vue`).
2. **Setup**: Always use `<script setup lang="ts">`.
3. **Props & Emits**: Explicitly type all `defineProps` and `defineEmits` interfaces with TypeScript.
4. **Styling**: Style components using utility-first Tailwind CSS classes. Avoid custom inline CSS.

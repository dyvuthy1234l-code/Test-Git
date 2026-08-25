# Vue Team Git Practice (`vue-team-git-practice`)

A small Vue 3 frontend project created specifically for team members to practice **Git & GitHub collaboration workflows** (branching, commits, pull requests, code reviews, and merge conflict resolution) before launching the main team project.

---

## 1. Project Description

This project serves as a lightweight, safe sandbox environment. Team members can practice:
- Git cloning, checkout, pulling, staging, committing, and pushing.
- Branch creation according to strict naming conventions.
- Submitting Pull Requests (PRs) on GitHub.
- Conducting Peer Code Reviews and approving changes.
- Merging branches cleanly into target development branches.
- Handling and resolving Git merge conflicts safely.
- Managing tasks via GitHub Issues and GitHub Projects.

---

## 2. Tech Stack

- **Framework**: Vue 3 (Composition API `<script setup lang="ts">`)
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: Vue Router 4
- **State Management**: Pinia
- **Version Control**: Git & GitHub

*(Note: Bootstrap is strictly prohibited in this codebase.)*

---

## 3. Installation

Clone your team repository and install dependencies:

```bash
cd vue-team-git-practice
npm install
```

---

## 4. Run Development Server

Start the local development server with hot module replacement (HMR):

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 5. Build for Production

Compile TypeScript types and bundle for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 6. Folder Structure

```text
vue-team-git-practice/
│
├── public/                # Static uncompiled public assets (favicons, etc.)
│
├── src/
│   ├── assets/            # Uncompiled media, icons, SVGs, and images
│   │   └── README.md
│   │
│   ├── components/        # Reusable shared Vue components (Navbar, Footer)
│   │   ├── Navbar.vue
│   │   ├── Footer.vue
│   │   └── README.md
│   │
│   ├── layouts/           # Application layout wrappers
│   │   └── MainLayout.vue
│   │
│   ├── views/             # Top-level page views mapped to Vue Router
│   │   ├── HomeView.vue
│   │   ├── AboutView.vue
│   │   ├── LoginView.vue
│   │   └── README.md
│   │
│   ├── router/            # Vue Router index configuration
│   │   └── index.ts
│   │
│   ├── stores/            # Pinia store state management
│   │   ├── practiceStore.ts
│   │   └── README.md
│   │
│   ├── services/          # API services and HTTP helpers
│   │   └── README.md
│   │
│   ├── types/             # Shared TypeScript type definitions & interfaces
│   │   └── README.md
│   │
│   ├── App.vue            # Root Vue component
│   ├── main.ts            # Vue app entry point & plugin registration
│   └── style.css          # Global Tailwind CSS imports
│
├── .gitignore             # Git ignored paths
├── README.md              # Project documentation & team Git workflow guide
├── package.json           # Project metadata and dependencies
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite bundler configuration
└── index.html             # Application HTML template entry point
```

---

## 7. Git Team Workflow

Follow this standard lifecycle for every task or feature:

```text
Issue
 ↓
Assign Member
 ↓
Create Feature Branch
 ↓
Code
 ↓
Test
 ↓
Commit
 ↓
Push
 ↓
Pull Request
 ↓
Code Review
 ↓
Merge into develop
 ↓
Team Testing
 ↓
Merge into main
```

---

## 8. Branch Naming Conventions

Always prefix branch names based on the nature of the task:

| Prefix | Purpose | Example |
| :--- | :--- | :--- |
| `feature/` | New UI features or pages | `feature/navbar`, `feature/home`, `feature/about`, `feature/login` |
| `fix/` | Bug fixes or UI adjustments | `fix/login-ui`, `fix/navbar-responsive` |
| `docs/` | Documentation changes | `docs/readme` |

```bash
# Example: Create and switch to a new branch
git checkout -b feature/login
```

---

## 9. Commit Message Convention

Follow Conventional Commit prefixes:

- `feat: add home page`
- `feat: add login page`
- `style: improve navbar`
- `fix: fix login form`
- `docs: update readme`
- `chore: setup project`
- `refactor: reorganize components`

---

## 10. Step-by-Step Practice Guide for Team Members

### Step 1: Initial Git Setup (First Time Only)

```bash
# Initialize local Git repository (Do NOT run automatically; do manually)
git init

# Add remote repository URL
git remote add origin <YOUR_GITHUB_REPOSITORY_URL>

# Create main branch and initial commit
git add .
git commit -m "chore: setup initial vue team practice project"
git branch -M main
git push -u origin main
```

### Step 2: Create a Development Branch

```bash
git checkout -b develop
git push -u origin develop
```

### Step 3: Working on a Feature

```bash
# 1. Switch to develop and pull latest changes
git checkout develop
git pull origin develop

# 2. Create your feature branch
git checkout -b feature/your-feature-name

# 3. Make your changes, then stage and commit
git add .
git commit -m "feat: implement your feature"

# 4. Push branch to GitHub
git push -u origin feature/your-feature-name
```

### Step 4: Submit a Pull Request (PR)

1. Open GitHub and navigate to your repository.
2. Click **New Pull Request**.
3. Select `base: develop` and `compare: feature/your-feature-name`.
4. Add a clear title and description referencing the GitHub Issue.
5. Assign a team member as a **Reviewer**.

### Step 5: Code Review & Merging

1. Reviewer inspects code diffs and approves or requests changes.
2. Once approved, merge the PR into `develop`.
3. Delete the merged feature branch locally and remotely:
   ```bash
   git branch -d feature/your-feature-name
   git push origin --delete feature/your-feature-name
   ```

---

## 11. Practice Exercises for Team Members

Try these practice assignments with your team:

1. **Member A**: Create branch `feature/navbar-logo-update`, update the logo text in `src/components/Navbar.vue`, commit, push, and open a PR.
2. **Member B**: Create branch `feature/login-validation`, add email pattern validation in `src/views/LoginView.vue`, commit, push, and open a PR.
3. **Merge Conflict Practice**: Have two members modify the same line in `src/views/AboutView.vue` on separate branches, submit PRs, and practice resolving conflicts using VS Code / Git merge tools.

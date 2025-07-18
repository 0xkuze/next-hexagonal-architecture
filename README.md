# ✨ NextJS Hexagonal Architecture Template 🔯

A modern, production-ready Next.js template implementing hexagonal architecture patterns with the latest tools and best practices.

## 🎯 Features

- 🏗️ **Hexagonal Architecture** - Clean, maintainable code structure
- ⚡ **Next.js 15.4.1** - Latest App Router with server components
- 🎨 **TailwindCSS v4** - Modern utility-first CSS framework
- 🧩 **shadcn/ui** - Beautiful, customizable components
- 📝 **TypeScript** - Type-safe development
- 🔍 **Zod** - Runtime type validation
- 🧪 **Vitest** - Fast unit testing
- 🎭 **Cypress** - End-to-end testing
- 🛠️ **Biome.js** - Unified linter and formatter
- 📦 **Bun** - Fast package manager and runtime
- 🎛️ **React Hook Form** - Performant form handling

## 🚀 Project Structure

```
/
├── public/
│   └── favicon.svg
│   └── images/
├── src/
│   ├── components/
│   │   └── ui/              # shadcn/ui components
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── input.tsx
│   │       └── label.tsx
│   ├── e2e/
│   │   └── tests/
│   │       └── app.cy.ts    # E2E tests
│   ├── lib/
│   │   └── utils.ts         # Utility functions
│   ├── styles/
│   │   └── globals.css      # TailwindCSS v4 styles
│   ├── app/
│   │   ├── page.tsx         # Main page
│   │   ├── layout.tsx       # Root layout
│   │   └── api/             # API routes
│   ├── modules/             # Hexagonal architecture modules
│   │   └── welcome/
│   │       ├── application/ # Use cases
│   │       ├── domain/      # Entities and interfaces
│   │       └── infrastructure/ # External adapters
│   │           └── tests/
│   │               └── e2e/
│   └── sections/            # UI sections by feature
│       └── welcome/
│           ├── components/  # Feature components
│           │   ├── WelcomePeopleCreate/
│           │   ├── WelcomePeopleCard/
│           │   └── WelcomePeopleList/
│           ├── context/     # React contexts
│           └── hooks/       # Custom hooks
├── biome.json              # Biome configuration
├── cypress.config.ts       # Cypress configuration
├── next.config.mjs         # Next.js configuration
├── package.json
├── tailwind.config.ts      # TailwindCSS configuration
├── tsconfig.json
└── vitest.config.ts        # Vitest configuration
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                             |
| :----------------------| :------------------------------------------------- |
| `bun install`          | Installs dependencies                              |
| `bun dev`              | Starts local dev server at `localhost:3000`        |
| `bun build`            | Build your production site to `./.next/`            |
| `bun start`            | Preview your build locally, before deploying       |
| `bun test`             | Run unit tests with Vitest                         |
| `bun run cy:open`      | Open Cypress for interactive E2E testing          |
| `bun run cy:run`       | Run Cypress E2E tests in headless mode            |
| `bun run lint`         | Lint code with Biome                               |
| `bun run format`       | Format code with Biome                             |
| `bun run check`        | Run Biome linting and formatting check             |
| `bun run check:fix`    | Auto-fix Biome issues                              |

## 🛠️ Tech Stack

### Core Framework
- **Next.js 15.4.1** - React framework with App Router
- **React 19** - UI library with latest features
- **TypeScript 5** - Type-safe JavaScript

### Styling & UI
- **TailwindCSS v4** - Utility-first CSS framework
- **shadcn/ui** - Reusable component library
- **Lucide React** - Beautiful icons

### Forms & Validation
- **React Hook Form** - Performant form library
- **Zod** - TypeScript-first schema validation
- **@hookform/resolvers** - Form validation resolvers

### Development Tools
- **Biome.js** - Fast linter and formatter (replaces ESLint + Prettier)
- **Bun** - Fast package manager and JavaScript runtime

### Testing
- **Vitest** - Unit testing framework
- **@testing-library/react** - React testing utilities
- **Happy-DOM** - Lightweight DOM implementation for testing
- **Cypress** - End-to-end testing framework

### Build & Deployment
- **PostCSS** - CSS post-processor
- **Autoprefixer** - CSS vendor prefixing

## 🏗️ Architecture

This template follows hexagonal architecture principles:

1. **Domain Layer** (`modules/*/domain/`) - Core business logic and entities
2. **Application Layer** (`modules/*/application/`) - Use cases and business rules
3. **Infrastructure Layer** (`modules/*/infrastructure/`) - External dependencies and adapters
4. **Presentation Layer** (`sections/`) - UI components and user interactions

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/next-hexagonal-architecture
   cd next-hexagonal-architecture
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Start development server**
   ```bash
   bun dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🧪 Testing

This template includes comprehensive testing setup:

- **Unit Tests**: Run with `bun test`
- **E2E Tests**: Run with `bun run cy:run` or `bun run cy:open`
- **Code Quality**: Check with `bun run check`

## 📝 Recent Updates

### v1.2.0 - Major Modernization

- ⬆️ **Migrated to Bun** from pnpm for faster builds
- 🎨 **Upgraded to TailwindCSS v4** with new syntax
- 🧩 **Integrated shadcn/ui** components
- 🔄 **Replaced yup with Zod** for better TypeScript integration
- 🛠️ **Migrated to Biome.js** from ESLint + Prettier
- 🗑️ **Removed unused dependencies** for cleaner project
- 🎯 **Enhanced UI/UX** with modern design patterns
- ✅ **Fixed all tests** and maintained 100% test coverage

## ⭐ Contribute

Please leave a star if you liked the repo and feel free to submit PRs or open issues!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

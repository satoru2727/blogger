# GEMINI.md

## Project Overview

This is a blog project built with [Astro](https://astro.build/). It uses Markdown/MDX for writing articles, Tailwind CSS for styling, and Pagefind for search functionality.

## Key Technologies

- **Framework**: Astro
- **UI Framework**: Tailwind CSS, daisyUI
- **Language**: TypeScript, JavaScript
- **Package Manager**: pnpm (inferred from `pnpm-lock.yaml`)
- **Linting/Formatting**:
    - [Biome](https://biomejs.dev/) for code (`*.{jsx,astro,ts,js,mjs,css,json}`)
    - [textlint](https://textlint.github.io/) for articles (`*.mdx`)
- **Search**: Pagefind
- **Deployment**: Static site generation

## Important Commands

- **`pnpm dev`**: Starts the development server.
- **`pnpm build`**: Builds the project for production and creates a search index with Pagefind.
- **`pnpm preview`**: Previews the production build locally.
- **`pnpm norika`**: Checks and formats the code using Biome. This is also configured to run as a pre-commit hook via `lint-staged`.
- **`pnpm lint:text`**: Lints the articles in `article/posts/` using textlint.

## Directory Structure

- **`/`**: Project root. Contains configuration files like `astro.config.mjs`, `package.json`, `biome.json`, and `tsconfig.json`.
- **`article/posts/`**: Contains the source files for blog posts, written in MDX (`.mdx`).
- **`src/`**: Contains the main source code for the Astro application.
    - **`src/components/`**: Reusable Astro components.
    - **`src/layouts/`**: Base layout components for pages.
    - **`src/pages/`**: Astro pages, which define the routes of the site.
    - **`src/styles/`**: Global CSS styles.
    - **`src/content.config.ts`**: Configuration for Astro's content collections.
- **`public/`**: Contains static assets that are copied to the build output directory as-is (e.g., `favicon.svg`, `_headers`).

## Development Workflow

When making changes, the following steps will be followed to ensure code quality and stability:

1.  **Implement Change**: Make the necessary code modifications.
2.  **Run Checks**:
    *   **Build**: Run `pnpm build` to ensure the project builds successfully.
    *   **Lint**: Run `pnpm run norika` (for code) and `pnpm run lint:text` (for articles) to check for linting issues.
    *   **Format**: Run `pnpm run norika` to apply code formatting.
3.  **Commit**: Commit the changes with a descriptive message.
4.  **Push & PR**: Push the branch and create a pull request.

# Cline Rules

This document outlines the rules Cline should follow when working with this project.

## Git Workflow

- When modifying files, create a new branch and merge it to main when complete
- Use meaningful branch names that reflect the task (e.g., `feature/new-blog-layout`, `fix/header-styling`)
- Commit messages should be concise and descriptive

## Code Style

- Write comments in Japanese
- Run `bunx @biomejs/biome check --apply .` to ensure consistent code style

## Content Management

- All blog content should be stored in the appropriate directory (article/blog/ or article/philosophy/)
- Image assets should be optimized before adding to the project
- MDX files should include proper frontmatter with required metadata

## Development Practices

- Always run tests before submitting changes
- Document API changes in the relevant documentation
- Consider performance implications when adding new features
- Prefer native Astro components when possible instead of client-side frameworks

## Security Considerations

- Don't commit sensitive information (API keys, credentials)
- Validate and sanitize all user inputs
- Keep dependencies updated to avoid security vulnerabilities

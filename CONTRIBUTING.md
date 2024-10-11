# Contributing to Overreader

We appreciate your interest in contributing to Overreader! Here are some guidelines to help you get started.

## Issues

1. Search existing issues before submitting a new one.
2. When creating a new issue, provide as much detail as possible (e.g., OS, environment, steps to reproduce).

## Branching Strategy

We use a branch naming convention to keep our repository organized. Follow the naming conventions below depending on the type of contribution you're making:

### Main Branch

- **main**: The stable branch used for production-ready code.

### Feature Branches

- **feature/short-description**: For developing new features.
  - Example: `feature/user-auth`

### Bugfix Branches

- **bugfix/short-description**: For addressing specific bugs.
  - Example: `bugfix/fix-login-issue`

### Hotfix Branches

- **hotfix/short-description**: For critical fixes that need to be applied directly to the main branch.
  - Example: `hotfix/critical-error`

### Release Branches

- **release/version-number**: For preparing a new version or release.
  - Example: `release/1.0.0`

### Documentation Branches

- **docs/short-description**: For updating or adding documentation.
  - Example: `docs/update-readme`

### Testing Branches

- **test/short-description**: For adding or updating test cases, fixing tests, or adding testing utilities.
  - Example: `test/add-unit-tests`

### Chore Branches

- **chore/short-description**: For tasks that don’t add features or fix bugs, such as refactoring, updating dependencies, or cleaning up code.
  - Example: `chore/update-dependencies`

### Refactor Branches

- **refactor/short-description**: For major or minor code refactors that improve the structure or performance of the codebase without adding new features.
  - Example: `refactor/improve-database-performance`

### Experimental Branches

- **experiment/short-description**: For testing out new ideas or features that may not yet be production-ready.
  - Example: `experiment/new-architecture`

## Pull Requests

1. Fork the repository and create a branch with the appropriate name from the section above.
2. Ensure your branch is up-to-date with `main`.
3. Follow the naming conventions for your branch (e.g., `feature/user-auth`).
4. Ensure your code follows coding standards.
5. Submit a PR with a clear description and link to related issues (if any).

## Coding Standards

- Follow [insert coding style guide link] for JavaScript, TypeScript, and React/Next.js conventions.
- Run `npm run lint` before committing your changes.

## Commit Messages

Use conventional commit messages for easy changelog generation:

- `feat: description` – New features.
- `fix: description` – Bug fixes.
- `docs: description` – Documentation updates.
- `test: description` – Adding or updating tests.
- `chore: description` – Other non-feature tasks (e.g., refactoring).

## Testing

All contributions should be accompanied by unit or integration tests. Run tests locally using:

```bash
npm run test
```

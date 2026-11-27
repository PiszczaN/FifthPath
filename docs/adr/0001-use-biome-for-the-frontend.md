---
status: accepted
date: 2026-11-15
---

# Use Biome to lint and format the frontend

## Context and Problem Statement

The frontend is written in React 19 and TypeScript 7.
It needs a formatter, a linter and accessibility rules that work the same way in the editor, in the Git hooks and in CI.
Which tool should do it?

## Considered Options

* ESLint with typescript-eslint and eslint-plugin-jsx-a11y, plus Prettier
* Biome

## Decision Outcome

Chosen option: "Biome", because the ESLint setup does not support our versions: typescript-eslint 8.74 accepts only TypeScript below 6.1, and eslint-plugin-jsx-a11y 6.10 only ESLint up to 9 (checked in November 2026).
Biome formats and lints in one tool, has accessibility and React rules, and does not need the `typescript` package to run.

### Consequences

* Good, because one dependency, one config file (`frontend/biome.jsonc`) and one command (`biome ci`) cover formatting and linting, locally and in CI.
* Good, because in CI Biome marks each problem on its line in the pull request.
* Bad, because Biome has fewer rules than ESLint with its plugins, and its type-aware rules (such as `noFloatingPromises`) are still in the nursery group, so they are not enabled.
* Neutral, because we revisit this decision when typescript-eslint supports TypeScript 7.

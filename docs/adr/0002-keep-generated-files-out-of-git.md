---
status: accepted
date: 2026-11-27
---

# Keep generated files out of Git

## Context and Problem Statement

Two kinds of files in this project are generated from other files:

* the TypeScript bindings in `frontend/bindings`, which `wails3 generate bindings` writes from the Go code;
* the platform files in `build/` (macOS `Info.plist`, Windows `info.json` and manifest, Linux packaging files, NSIS defaults) and the `.ico` and `.icns` icons, which Wails writes from `build/config.yml` and `build/appicon.png`.

Committed copies drift from their source.
release-please bumps the version only in `build/config.yml`, so committed platform files would ship the old version.
The icons come out with different bytes when `wails3` is built with another Go version, so a fresh clone showed them as modified after its first build.
Should generated files be committed?

## Considered Options

* Commit them and regenerate them by hand
* Commit them and let CI fail when they are out of date
* Do not commit them; generate them in every build

## Decision Outcome

Chosen option: "Do not commit them", because then the source is the only copy anyone can edit, and there is nothing to keep in sync.
`.gitignore` lists the files.
`task build` and `task package` regenerate the platform files when `build/config.yml` changes or a file is missing, and the bindings are generated before every type check, test run and build.

### Consequences

* Good, because a version bump in `build/config.yml` reaches every platform.
* Good, because a fresh clone stays clean after a build.
* Bad, because the frontend cannot be type-checked or tested before the bindings exist; the Taskfile generates them first.
* Bad, because the platform files can hold only what `build/config.yml` supports; keys added by hand would be overwritten.
* Neutral, because `build/darwin/Assets.car` stays committed: only macOS 26 or newer with Xcode's `actool` 26 can make it.

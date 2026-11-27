# FifthPath

FifthPath tells whether a piece of music is in a major or a minor key by tracing its trajectory of fifths on the circle of fifths.

> **Status:** early development. This is a ground-up rewrite of a tool written
> for a master's thesis, and nothing is usable yet.

## The method

FifthPath implements the algorithm described in:

> T. Łukaszewicz and D. Kania, "Trajectory of Fifths in Tonal Mode Detection,"
> *IEEE Access*, vol. 13, pp. 113763–113772, 2025.
> <https://doi.org/10.1109/ACCESS.2025.3584400>

A MIDI file is cut into short time windows. In each window the notes are reduced to twelve pitch classes, and their counts become vectors on the circle of fifths. The sum of those vectors is one point, and the points of successive windows form the trajectory of fifths. Where the trajectory starts, where it ends, where its center lies and how its points are split between the major and the minor quadrant decide the mode.

## Development

You need:

* [Go](https://go.dev/dl/) 1.27.4 or newer;
* [Node.js](https://nodejs.org/) 26 and [pnpm](https://pnpm.io/installation) 12;
* [Task](https://taskfile.dev/docs/installation) 3;
* the Wails CLI, golangci-lint and lefthook, built with your Go:

  ```sh
  go install github.com/wailsapp/wails/v3/cmd/wails3@v3.1.0
  go install github.com/golangci/golangci-lint/v2/cmd/golangci-lint@v2.15.0
  go install github.com/evilmartians/lefthook/v2@v2.2.2
  ```

* on macOS, the Xcode Command Line Tools; on Linux, a C compiler and the GTK 4 and WebKitGTK 6 development files (on Ubuntu: `build-essential pkg-config libgtk-4-dev libwebkitgtk-6.0-dev`).

Then run these in the repository root:

| Command | What it does |
| --- | --- |
| `lefthook install` | Turns on the Git hooks, once per clone |
| `task dev` | Runs the app with live reload |
| `task check` | Runs everything CI checks: lint, types and tests |
| `task build` | Builds the app for this platform into `bin/` |

The decisions behind the setup are recorded in [docs/adr](docs/adr/README.md).

## License

[MIT](LICENSE)

# FifthPath

FifthPath tells whether a piece of music is in a major or a minor key by tracing its trajectory of fifths on the circle of fiths.

> **Status:** early development. This is a ground-up rewrite of a tool written
> for a master's thesis, and nothing is usable yet.

## The method

FifthPath implements the algorithm described in:

> T. Łukaszewicz and D. Kania, "Trajectory of Fifths in Tonal Mode Detection,"
> *IEEE Access*, vol. 13, pp. 113763–113772, 2025.
> <https://doi.org/10.1109/ACCESS.2025.3584400>

A MIDI file is cut into short time windows. In each window the notes are reduced to twelve pitch classes, and their counts become vectors on the circle of fifths. The sum of those vectors is one point, and the points of successive windows form the trajectory of fifths. Where the trajectory starts, where it ends, where its center lies and how its points are split between the major and the minor quadrant decide the mode.

## License

[MIT](LICENSE)

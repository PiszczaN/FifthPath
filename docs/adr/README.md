# Architecture decision records

An architecture decision record (ADR) explains one decision that shapes the project: the problem, the options, the choice and what it costs.
The code shows what was built; these records keep why.

The records use [MADR 4.0.0](https://adr.github.io/madr/): the minimal template with a `status` and a `date`.

| ADR | Decision | Status |
| --- | --- | --- |
| [0001](0001-use-biome-for-the-frontend.md) | Use Biome to lint and format the frontend   | Accepted    |
| [0002](0002-keep-generated-files-out-of-git.md) | Keep generated files out of Git| Accepted|
| [0003](0003-release-with-release-please.md)| Release with release-please and the default `GITHUB_TOKEN` | Accepted|

## Adding a record

1. Copy the [minimal template](https://github.com/adr/madr/blob/4.0.0/template/adr-template-minimal.md) to a file named after the next number and the title.
2. Add the `status` and `date` lines at the top, as in the records above.
3. Add a row to the table above in the same pull request.

An accepted record is not rewritten when the decision changes.
Write a new record instead, and set the old one's status to `superseded by ADR-NNNN`.

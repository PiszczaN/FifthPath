---
status: accepted
date: 2026-11-26
---

# Release with release-please and the default GITHUB_TOKEN

## Context and Problem Statement

Every release needs a version number (SemVer), a changelog and a GitHub release with the Windows, macOS and Linux builds.
The commit messages follow Conventional Commits, so all of this can be derived from them.
Which tool makes the releases, and with which token?

## Considered Options

* semantic-release, which publishes a release on every push to `main`
* release-please with a personal access token or a GitHub App token
* release-please with the default `GITHUB_TOKEN`

## Decision Outcome

Chosen option: "release-please with the default `GITHUB_TOKEN`", because a release pull request shows the next version and the changelog before anything is published, and the default token is created for each job and expires when the job ends, so there is no secret to store, rotate or leak.

### Consequences

* Good, because releasing is one reviewed merge of the release pull request.
* Good, because `release.yml` sets the token's permissions per job, while a personal access token carries its scopes into every step.
* Bad, because a pull request made with `GITHUB_TOKEN` starts its CI in an approval-required state: someone with write access clicks "Approve workflows to run", once per release.
* Bad, because a tag made with `GITHUB_TOKEN` starts no workflow, so `release.yml` builds and uploads the release files itself, through the reusable `build.yml`.

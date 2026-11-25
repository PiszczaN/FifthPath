// Commit messages follow Conventional Commits: https://www.conventionalcommits.org
// Rules: https://commitlint.js.org/reference/rules
export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // Git convention: subject and body lines fit 72 columns.
    "header-max-length": [2, "always", 72],
    "body-max-line-length": [2, "always", 72],
  },
};

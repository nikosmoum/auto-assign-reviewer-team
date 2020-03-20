# auto-assign-reviewer-team
Github Action that auto-assigs a team as a PR reviewer

## Usage example

Create a workflow file (e.g. `.github/workflows/auto-assign.yml`) that contains a step that `uses: nikosmoum/auto-assign-reviewer-tea@v0.1`. Example:

```yaml
name: AutoAssignReviewer

on:
  pull_request:
    types: [opened, ready_for_review]

jobs:
  auto-assign-reviewer:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout the repo
        uses: nikosmoum/auto-assign-reviewer-team@v0.1

      - name: Setup Nodejs
        uses: actions/setup-node@v1
        with:
          node-version: '12.16'

      - run: npm install @actions/core

      - run: npm install @actions/github

      - name: Run assignment of reviewer team
        uses: ./
        with:
          githubToken: ${{ secrets.GITHUB_TOKEN }}
          teamName: 'my-team-name'
```

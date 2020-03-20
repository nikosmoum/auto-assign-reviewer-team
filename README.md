# auto-assign-reviewer-team
Github Action that auto-assigs a team as a PR reviewer

## Usage example

Create a workflow file (e.g. `.github/workflows/auto-assign.yml`) that contains a step that `uses: nikosmoum/auto-assign-reviewer-team@v0.3`. Example:

```yaml
name: AutoAssignReviewer

on:
  pull_request:
    types: [opened, ready_for_review]

jobs:
  auto-assign-reviewer:
    runs-on: ubuntu-latest
    steps:
      - name: Run assignment of reviewer team
        uses: nikosmoum/auto-assign-reviewer-team@v0.3
        with:
          githubToken: ${{ secrets.GITHUB_TOKEN }}
          teamName: 'my-team-name'
```

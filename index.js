const github = require('@actions/github');
const core = require('@actions/core');

async function run() {
    const githubToken = core.getInput('githubToken');

    const teamName = core.getInput('teamName');

    const { pull_request: pr } = github.context.payload;

    const octokit = new github.GitHub(githubToken);

    octokit.pulls.createReviewRequest({
      owner: github.context.repo.owner,
      repo: github.context.repo.repo,
      pull_number: pr.number,
      team_reviewers: [teamName]
    });
}

run();

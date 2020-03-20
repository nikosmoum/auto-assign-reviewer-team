const github = require('@actions/github');
const core = require('@actions/core');

async function run() {
    const githubToken = core.getInput('githubToken');

    const teamName = core.getInput('teamName');

    const { pull_request: pr } = github.context.payload;

    const octokit = new github.GitHub(githubToken);

    console.log('About to request review from team ' + teamName + ' for PR number ' + pr.number + ', on repo ' + github.context.repo.owner + '/' + github.context.repo.repo);
    const { data: response } = await octokit.pulls.createReviewRequest({
      owner: github.context.repo.owner,
      repo: github.context.repo.repo,
      pull_number: pr.number,
      team_reviewers: [teamName]
    });
    console.log('Response: ');
    console.log(response);
    console.log('Review Request done...');
}

run();

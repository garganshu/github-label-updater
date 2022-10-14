const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
  try {
    const owner = core.getInput('owner', {required: true});
    const repo = core.getInput('repo', {required: true});
    const token = core.getInput('token', {required: true});
    const filterLabels = core.getInput('filter-labels');
    const removeAllLabels = core.getInput('remove-all-labels') ;
    const removeLabels = core.getInput('remove-labels');
    const addLabels = core.getInput('add-labels');

    const octokit = new github.getOctokit(token)

    const { data: issues} = await octokit.rest.issues.listForRepo({
      owner: owner,
      repo: repo,
      labels: filterLabels
    });

    const removeLabelsArray = removeLabels.split(',').filter(Boolean)
    const addLabelsArray = addLabels.split(',').filter(Boolean)
    
    for(const issue of issues) {
        console.log("Issue number: #"+issue.number)
      if(removeAllLabels.toLowerCase().trim().localeCompare('true') == 0) {
        await octokit.rest.issues.removeAllLabels({
          owner: owner,
          repo: repo,
          issue_number: issue.number
        });
      } else {
        for(const label of removeLabelsArray) {
          await octokit.rest.issues.removeLabel({
            owner: owner,
            repo: repo,
            issue_number: issue.number,
            name: label.trim(),
          });
        }
      }

      if(addLabelsArray.length > 0) {
        await octokit.rest.issues.addLabels({
          owner: owner,
          repo: repo,
          issue_number: issue.number,
          labels: addLabelsArray
        });
      }
    }

  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
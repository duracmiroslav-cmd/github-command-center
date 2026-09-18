import { octokit, githubConfig } from '@/lib/github';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const { data } = await octokit.rest.actions.listRepoWorkflows({
      owner: githubConfig.GITHUB_OWNER,
      repo: githubConfig.GITHUB_REPO,
    });

    const workflows = data.workflows ?? [];

    const workflowRuns = await Promise.all(
      workflows.map(async (workflow) => {
        const runs = await octokit.rest.actions.listWorkflowRuns({
          owner: githubConfig.GITHUB_OWNER,
          repo: githubConfig.GITHUB_REPO,
          workflow_id: workflow.id,
          per_page: 5,
        });

        return {
          workflowName: workflow.name,
          runs: runs.data.workflow_runs.map((run) => ({
            id: run.id,
            status: run.status,
            conclusion: run.conclusion,
            htmlUrl: run.html_url,
            createdAt: run.created_at,
          })),
        };
      })
    );

    return NextResponse.json(workflowRuns);
  } catch (error) {
    console.error('Error fetching workflow data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch workflow data' },
      { status: 500 }
    );
  }
}

import { octokit, githubConfig } from '@/lib/github';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const { data } = await octokit.rest.issues.listForRepo({
      owner: githubConfig.GITHUB_OWNER,
      repo: githubConfig.GITHUB_REPO,
      state: 'open',
      per_page: 10,
    });

    const issues = data.filter((issue) => !issue.pull_request);

    return NextResponse.json(
      issues.map((issue) => ({
        id: issue.id,
        number: issue.number,
        title: issue.title,
        state: issue.state,
        url: issue.html_url,
        author: issue.user?.login ?? 'unknown',
        createdAt: issue.created_at,
        labels: issue.labels.map((label) =>
          typeof label === 'string' ? label : label.name
        ),
      }))
    );
  } catch (error) {
    console.error('Error fetching issues:', error);
    return NextResponse.json(
      { error: 'Failed to fetch issues' },
      { status: 500 }
    );
  }
}

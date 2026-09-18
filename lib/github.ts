import { Octokit } from '@octokit/rest';
import { z } from 'zod';

const githubConfigSchema = z.object({
  GITHUB_TOKEN: z.string().min(1),
  GITHUB_OWNER: z.string().min(1),
  GITHUB_REPO: z.string().min(1),
});

export const githubConfig = githubConfigSchema.parse({
  GITHUB_TOKEN: process.env.GITHUB_TOKEN,
  GITHUB_OWNER: process.env.GITHUB_OWNER ?? 'duracmiroslav-cmd',
  GITHUB_REPO: process.env.GITHUB_REPO ?? 'github-command-center',
});

export const octokit = new Octokit({
  auth: githubConfig.GITHUB_TOKEN,
});

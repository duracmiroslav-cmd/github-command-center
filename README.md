# GitHub Command Center

GitHub Command Center - Dashboard pre správu PRs, Issues, CI/CD a rýchle akcie cez GitHub API.

## Rýchly štart

1. Nainštaluj závislosti:
   ```bash
   npm install
   ```
2. Vytvor `.env.local` podľa `.env.example`.
3. Spusti aplikáciu:
   ```bash
   npm run dev
   ```
4. Otvor:
   ```bash
   http://localhost:3000
   ```

## Environment variables

```bash
GITHUB_TOKEN=your_github_pat_here
GITHUB_OWNER=duracmiroslav-cmd
GITHUB_REPO=github-command-center
```

## Funkcie v MVP

- zoznam otvorených PRs
- zoznam otvorených issues
- prehľad workflow runs
- jednoduchý dashboard
- API endpoint pre health check

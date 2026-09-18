const stats = [
  { label: 'Open PRs', value: '12', change: '+3 dnes' },
  { label: 'Open Issues', value: '8', change: '-2 dnes' },
  { label: 'Failed Runs', value: '2', change: '1 kritický' },
  { label: 'Repos', value: '4', change: '+1 nový' },
];

const pullRequests = [
  { title: 'Refactor dashboard layout', author: 'duracmiroslav-cmd', state: 'Open' },
  { title: 'Add CI workflow status card', author: 'team', state: 'Review' },
  { title: 'Fix issue filtering logic', author: 'backend', state: 'Open' },
];

const issues = [
  { title: 'Missing repository overview', author: 'support', priority: 'High' },
  { title: 'Improve workflow run details', author: 'ops', priority: 'Medium' },
  { title: 'Add quick action buttons', author: 'ui', priority: 'Low' },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <header className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">GitHub Command Center</p>
            <h1 className="mt-2 text-4xl font-bold">Dashboard</h1>
          </div>
          <button className="rounded-lg bg-cyan-500 px-4 py-2 font-medium text-slate-950 transition hover:bg-cyan-400">
            Refresh data
          </button>
        </header>

        <section className="mb-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-lg shadow-slate-950/20">
              <p className="text-sm text-slate-400">{stat.label}</p>
              <div className="mt-3 flex items-end justify-between">
                <span className="text-3xl font-bold">{stat.value}</span>
                <span className="text-xs text-cyan-400">{stat.change}</span>
              </div>
            </div>
          ))}
        </section>

        <section className="grid gap-6 xl:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="mb-4 text-xl font-semibold">Open pull requests</h2>
            <div className="space-y-3">
              {pullRequests.map((pr) => (
                <div key={pr.title} className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-950/50 p-3">
                  <div>
                    <p className="font-medium">{pr.title}</p>
                    <p className="text-sm text-slate-400">{pr.author}</p>
                  </div>
                  <span className="rounded-full bg-cyan-500/15 px-2 py-1 text-xs font-medium text-cyan-300">
                    {pr.state}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="mb-4 text-xl font-semibold">Open issues</h2>
            <div className="space-y-3">
              {issues.map((issue) => (
                <div key={issue.title} className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-950/50 p-3">
                  <div>
                    <p className="font-medium">{issue.title}</p>
                    <p className="text-sm text-slate-400">{issue.author}</p>
                  </div>
                  <span className="rounded-full bg-amber-500/15 px-2 py-1 text-xs font-medium text-amber-300">
                    {issue.priority}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

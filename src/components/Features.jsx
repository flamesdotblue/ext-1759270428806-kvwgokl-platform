import { Monitor, Grid, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: Monitor,
    title: 'Screen-first design',
    desc: 'Compose dynamic layouts across multiple viewports with pixel-precise control.'
  },
  {
    icon: Grid,
    title: 'Grid orchestration',
    desc: 'Arrange content in aligned or free-flowing grids that adapt to any team workflow.'
  },
  {
    icon: Shield,
    title: 'Enterprise-ready',
    desc: 'Security, accessibility, and performance baked in for corporate scale.'
  },
  {
    icon: Zap,
    title: 'Blazing interactions',
    desc: 'GPU-accelerated visuals and instant feedback powered by modern tooling.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative w-full bg-neutral-950 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Everything you need to ship modern experiences</h2>
          <p className="mt-3 text-white/70">
            Designed for teams building interactive, digital products with a modern, corporate aesthetic.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:bg-white/10">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-medium">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
              <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-white/10 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

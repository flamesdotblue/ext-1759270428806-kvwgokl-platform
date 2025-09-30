import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/WCoEDSwacOpKBjaC/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradients and vignette overlay - does not block interaction */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/40 via-neutral-950/20 to-neutral-950/80" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-neutral-950/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-neutral-950 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-medium backdrop-blur">
          Innovative • Digital • Modern
        </span>
        <h1 className="text-balance text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Build with the power of many screens
        </h1>
        <p className="mt-5 max-w-2xl text-balance text-sm text-white/80 sm:text-base">
          A corporate-grade foundation for modern, interactive experiences. Align, orchestrate, and scale your product story across a grid of possibilities.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#features"
            className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-medium text-neutral-900 transition hover:bg-white/90"
          >
            Explore features
          </a>
          <a
            href="#cta"
            className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
          >
            Get started
          </a>
        </div>
      </div>
    </section>
  );
}

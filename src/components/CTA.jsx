export default function CTA() {
  return (
    <section id="cta" className="relative w-full py-24">
      <div className="mx-auto max-w-5xl rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 px-8 py-14 text-center backdrop-blur">
        <h3 className="text-2xl font-semibold sm:text-3xl">Scale your product story across every screen</h3>
        <p className="mx-auto mt-3 max-w-2xl text-white/75">
          Start with a single view, expand to a grid, and orchestrate your customer journey with clarity.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-medium text-neutral-900 transition hover:bg-white/90"
          >
            Create a workspace
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-transparent px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
          >
            View documentation
          </a>
        </div>
      </div>
    </section>
  );
}

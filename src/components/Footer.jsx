export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 text-sm text-white/60 sm:flex-row">
        <p>© {new Date().getFullYear()} MultiScreen Labs. All rights reserved.</p>
        <nav className="flex items-center gap-6">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#cta" className="hover:text-white">Get started</a>
          <a href="#" className="hover:text-white">Privacy</a>
        </nav>
      </div>
    </footer>
  );
}

import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white antialiased">
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}

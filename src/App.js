import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import DemoSection from './components/DemoSection';
import UseCasesSection from './components/UseCasesSection';
import DocumentationSection from './components/DocumentationSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import'./index.css';

function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 transition-colors duration-300">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <DemoSection />
        <UseCasesSection />
        <DocumentationSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

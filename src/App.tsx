import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Highlights from './components/Highlights';
import Partnership from './components/Partnership';
import Sponsors from './components/Sponsors';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Highlights />
        <Sponsors />
        <Team />
        <Partnership />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

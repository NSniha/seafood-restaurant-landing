import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import History from "./components/History/History";
import ImageShowcase from "./components/ImageShowcase/ImageShowcase";
import Menu from "./components/Menu/Menu";
import Gallery from "./components/Gallery/Gallery";
import CallToAction from "./components/CallToAction/CallToAction";
import MapSection from "./components/MapSection/MapSection";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      {/* ==================== Header ==================== */}

      <Header />

      {/* ==================== Main content ==================== */}

      <main>
        <Hero />
        <History />
        <ImageShowcase />
        <Menu />
        <Gallery />
        <CallToAction />
        <MapSection />
      </main>

      {/* ==================== Footer ==================== */}

      <Footer />
    </>
  );
};

export default App;
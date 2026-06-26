import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import History from "./components/History/History";
import ImageShowcase from "./components/ImageShowcase/ImageShowcase";
import Menu from "./components/Menu/Menu";
import Gallery from "./components/Gallery/Gallery";
import CallToAction from "./components/CallToAction/CallToAction";
import MapSection from "./components/MapSection/MapSection";

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
    </>
  );
};

export default App;
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import History from "./components/History/History";
import ImageShowcase from "./components/ImageShowcase/ImageShowcase";
import Menu from "./components/Menu/Menu";

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
      </main>
    </>
  );
};

export default App;
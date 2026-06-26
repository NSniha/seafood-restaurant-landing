import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import History from "./components/History/History";
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
        <Menu />
      </main>
    </>
  );
};

export default App;
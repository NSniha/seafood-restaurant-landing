import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import History from "./components/History/History";

const App = () => {
  return (
    <>
      {/* ==================== Header ==================== */}

      <Header />

      {/* ==================== Main content ==================== */}

      <main>
        <Hero />
        <History />
      </main>
    </>
  );
};

export default App;
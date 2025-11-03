import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Servicios from "./pages/Servicios/Servicios";
import Tarifas from "./pages/Tarifas/Tarifas";
import Contacto from "./pages/Contacto/Contacto";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="home" className="section">
          <Home />
        </section>

        <section id="servicios" className="section">
          <Servicios />
        </section>

        <section id="tarifas" className="section">
          <Tarifas />
        </section>

        <section id="contacto" className="section">
          <Contacto />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;

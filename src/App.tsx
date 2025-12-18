import { BrowserRouter, Routes, Route } from "react-router-dom"; // <--- Mudou aqui
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import AnaliseRisco from "@/pages/AnaliseRisco";
import ScrollToTop from "@/components/ScrollToTop"; // Vamos criar esse helper já já

function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <About />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter> {/* <--- Mudou aqui */}
      <ScrollToTop /> {/* Isso garante que ao mudar de página, o scroll vá para o topo */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/analise-risco" element={<AnaliseRisco />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

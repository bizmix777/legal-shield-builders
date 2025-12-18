import { HashRouter, Routes, Route } from "react-router-dom";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import AnaliseRisco from "@/pages/AnaliseRisco";

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
  // Log para garantir atualização do cache no Cloudflare
  console.log("Versão nova: Equipe adicionada!");

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/analise-risco" element={<AnaliseRisco />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

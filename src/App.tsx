import { HashRouter, Routes, Route } from "react-router-dom";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import AnaliseRisco from "@/pages/AnaliseRisco";

function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

function App() {
  // Linha adicionada para forçar atualização do Cloudflare
  console.log("Versão nova: Forçando atualização do Cloudflare!");

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

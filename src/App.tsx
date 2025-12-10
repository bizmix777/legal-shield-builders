import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;

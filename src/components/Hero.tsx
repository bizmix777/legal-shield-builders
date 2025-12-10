import { Shield, Clock, FileCheck } from "lucide-react";

export function Hero() {
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen gradient-hero flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8 animate-fade-in">
            <Shield className="w-4 h-4" />
            <span className="text-sm font-medium">Assessoria Jurídica Especializada</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Segurança Jurídica para{" "}
            <span className="text-gradient">Imobiliárias e Construtoras</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Análise de Risco em 24h para Vendas, Locações e Aquisição de Terrenos. 
            Blindagem jurídica com supervisão de Banca Sênior.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <button
              onClick={scrollToServices}
              className="bg-card border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Conhecer Serviços
            </button>
            <a
              href="https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre os serviços jurídicos."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Falar com Especialista
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="bg-card/80 backdrop-blur-sm p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
              <Clock className="w-10 h-10 text-primary mb-4 mx-auto" />
              <h3 className="font-semibold text-foreground mb-2">Análise em 24h</h3>
              <p className="text-sm text-muted-foreground">Resposta rápida para suas operações</p>
            </div>
            
            <div className="bg-card/80 backdrop-blur-sm p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
              <Shield className="w-10 h-10 text-secondary mb-4 mx-auto" />
              <h3 className="font-semibold text-foreground mb-2">Blindagem Total</h3>
              <p className="text-sm text-muted-foreground">Proteção jurídica completa</p>
            </div>
            
            <div className="bg-card/80 backdrop-blur-sm p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
              <FileCheck className="w-10 h-10 text-primary mb-4 mx-auto" />
              <h3 className="font-semibold text-foreground mb-2">Banca Sênior</h3>
              <p className="text-sm text-muted-foreground">Supervisão de especialistas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

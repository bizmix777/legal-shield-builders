import { Shield, Brain, Scale, ArrowRight } from "lucide-react";

export function Hero() {
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen gradient-hero flex items-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl opacity-50" />
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-primary/20 text-primary mb-8 animate-fade-in shadow-sm backdrop-blur-sm">
            <Scale className="w-4 h-4" />
            <span className="text-sm font-bold tracking-wide">ADVOCACIA & INTELIGÊNCIA IMOBILIÁRIA</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight animate-fade-in font-display" style={{ animationDelay: "0.1s" }}>
            Protegendo seu Patrimônio com <br className="hidden md:block" />
            <span className="text-gradient">Visão de Negócios e Tecnologia</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto animate-fade-in leading-relaxed" style={{ animationDelay: "0.2s" }}>
            Unimos a segurança jurídica à agilidade comercial. 
            Soluções para compra, venda e regularização de imóveis com a experiência de quem empreende desde 1990.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <button
              onClick={scrollToServices}
              className="group bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              Nossas Soluções
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <a
              href="https://wa.me/5562992475080?text=Olá Henrique! Gostaria de uma análise do meu caso."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border-2 border-primary/10 text-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:border-primary/50 hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Falar com Henrique
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in text-left" style={{ animationDelay: "0.4s" }}>
            
            <div className="bg-white p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-3">Direito Digital</h3>
              <p className="text-muted-foreground leading-relaxed">
                Uso de tecnologia para acelerar processos, contratos inteligentes e due diligence profunda.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group">
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-100 transition-colors">
                <Shield className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-3">Segurança Total</h3>
              <p className="text-muted-foreground leading-relaxed">
                Análise de risco completa antes de qualquer negócio. Não assine nada sem nossa validação.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group">
              <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-100 transition-colors">
                <Scale className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-3">Visão de Dono</h3>
              <p className="text-muted-foreground leading-relaxed">
                Atuação como advogado e corretor. Entendemos a dor do empresário e a letra da lei.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

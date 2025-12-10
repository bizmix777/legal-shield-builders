import { useState } from "react";
import { Check, FileText, Clock, Shield, AlertTriangle, ChevronDown, ChevronUp, ArrowRight, Building2, User, Phone } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const AnaliseRisco = () => {
  const [activeTab, setActiveTab] = useState<"realtor" | "buyer">("realtor");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const painPoints = [
    { icon: AlertTriangle, text: "Dívidas trabalhistas ocultas que podem recair sobre o imóvel" },
    { icon: AlertTriangle, text: "Penhoras não averbadas na matrícula" },
    { icon: AlertTriangle, text: "Fraude à execução e alienação de bem penhorado" },
  ];

  const steps = [
    { number: 1, title: "Envie os documentos", description: "Matrícula, certidões e dados do vendedor" },
    { number: 2, title: "Análise Jurídica Completa", description: "Nossa equipe sênior analisa todos os riscos" },
    { number: 3, title: "Receba o Parecer em 24h", description: "Relatório completo com semáforo de risco" },
  ];

  const realtorBenefits = [
    "Não perca vendas na última hora por problemas documentais",
    "Passe credibilidade e profissionalismo aos seus clientes",
    "Diferencial competitivo no mercado imobiliário",
    "Proteção jurídica para sua imobiliária",
  ];

  const buyerBenefits = [
    "Compre com segurança total e tranquilidade",
    "Proteção contra dívidas ocultas do vendedor",
    "Evite surpresas desagradáveis após a compra",
    "Investimento seguro no seu patrimônio",
  ];

  const faqs = [
    {
      question: "Quais documentos preciso enviar?",
      answer: "Matrícula atualizada do imóvel, certidões de ônus reais, documentos do vendedor (CPF, RG, certidão de casamento se aplicável) e contrato de compra e venda, se houver.",
    },
    {
      question: "Quanto custa a análise de risco?",
      answer: "A análise de risco começa a partir de R$ 500, variando conforme a complexidade do caso e quantidade de certidões necessárias. Solicite um orçamento personalizado.",
    },
    {
      question: "Serve para qualquer tipo de imóvel?",
      answer: "Sim! Analisamos imóveis residenciais, comerciais, terrenos, rurais e industriais. Nossa metodologia se adapta a cada tipo de propriedade.",
    },
    {
      question: "E se encontrarem problemas no imóvel?",
      answer: "Nosso relatório detalha todos os riscos identificados e apresenta recomendações de como proceder, seja para negociar o preço, exigir regularização ou desistir da compra.",
    },
  ];

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de solicitar uma Análise de Risco Imobiliário em 24h.");
    window.open(`https://wa.me/5500000000000?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 gradient-hero overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <Clock className="inline-block w-4 h-4 mr-2" />
              Resultado em 24 horas
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
              Análise de Risco Imobiliário{" "}
              <span className="text-gradient">em 24h</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              Identificamos riscos ocultos e garantimos a segurança da sua compra ou venda em tempo recorde.
            </p>
            
            <button
              onClick={handleWhatsAppClick}
              className="inline-flex items-center gap-3 gradient-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Shield className="w-6 h-6" />
              Solicitar Análise Agora
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <p className="mt-6 text-sm text-muted-foreground">
              ✓ Sem compromisso &nbsp; ✓ Orçamento em minutos &nbsp; ✓ Equipe especializada
            </p>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-16 lg:py-20 bg-destructive/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-4">
              Por que arriscar seu patrimônio?
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Problemas que podem transformar o sonho da casa própria em pesadelo
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {painPoints.map((point, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-xl border border-destructive/20 hover:border-destructive/40 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-4">
                    <point.icon className="w-6 h-6 text-destructive" />
                  </div>
                  <p className="text-foreground font-medium">{point.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-4">
              Como Funciona
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Processo simples e rápido em apenas 3 passos
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary to-secondary"></div>
                  )}
                  
                  <div className="bg-card p-8 rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg text-center relative z-10">
                    <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 text-primary-foreground font-bold text-2xl">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Traffic Light Report Section */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-4">
              Relatório Semáforo de Risco
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Entenda a situação do imóvel de forma clara e objetiva
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Green */}
              <div className="bg-card p-8 rounded-xl border-2 border-green-500/30 hover:border-green-500 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10">
                <div className="w-20 h-20 bg-green-500 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg shadow-green-500/30">
                  <Check className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-center text-foreground mb-3">Sinal Verde</h3>
                <p className="text-center text-muted-foreground">
                  Imóvel livre de riscos. Prossiga com a negociação com total segurança.
                </p>
              </div>
              
              {/* Yellow */}
              <div className="bg-card p-8 rounded-xl border-2 border-yellow-500/30 hover:border-yellow-500 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10">
                <div className="w-20 h-20 bg-yellow-500 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg shadow-yellow-500/30">
                  <AlertTriangle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-center text-foreground mb-3">Sinal Amarelo</h3>
                <p className="text-center text-muted-foreground">
                  Pontos de atenção identificados. Recomendamos cautela e análise adicional.
                </p>
              </div>
              
              {/* Red */}
              <div className="bg-card p-8 rounded-xl border-2 border-red-500/30 hover:border-red-500 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10">
                <div className="w-20 h-20 bg-red-500 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg shadow-red-500/30">
                  <AlertTriangle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-center text-foreground mb-3">Sinal Vermelho</h3>
                <p className="text-center text-muted-foreground">
                  Riscos graves detectados. Não recomendamos prosseguir sem resolução.
                </p>
              </div>
            </div>
            
            <div className="mt-12 bg-card p-6 rounded-xl border border-border">
              <div className="flex items-start gap-4">
                <FileText className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">O que você recebe:</h4>
                  <ul className="text-muted-foreground space-y-1">
                    <li>✓ Parecer jurídico completo em PDF</li>
                    <li>✓ Classificação visual de risco (Semáforo)</li>
                    <li>✓ Lista detalhada de pendências encontradas</li>
                    <li>✓ Recomendações de ação para cada situação</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section with Tabs */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-4">
              Benefícios para Você
            </h2>
            <p className="text-center text-muted-foreground mb-10 text-lg">
              Vantagens exclusivas para cada perfil
            </p>
            
            {/* Tabs */}
            <div className="flex justify-center mb-10">
              <div className="inline-flex bg-muted rounded-lg p-1">
                <button
                  onClick={() => setActiveTab("realtor")}
                  className={`flex items-center gap-2 px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                    activeTab === "realtor"
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Building2 className="w-5 h-5" />
                  Para Imobiliárias
                </button>
                <button
                  onClick={() => setActiveTab("buyer")}
                  className={`flex items-center gap-2 px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                    activeTab === "buyer"
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <User className="w-5 h-5" />
                  Para Compradores
                </button>
              </div>
            </div>
            
            {/* Tab Content */}
            <div className="bg-card p-8 rounded-xl border border-border">
              <ul className="space-y-4">
                {(activeTab === "realtor" ? realtorBenefits : buyerBenefits).map((benefit, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-6 h-6 gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="text-foreground text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Tire suas dúvidas sobre a Análise de Risco
            </p>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl border border-border overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-muted/50 transition-colors duration-200"
                  >
                    <span className="font-medium text-foreground pr-4">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-5 text-muted-foreground border-t border-border pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action Section */}
      <section className="py-20 lg:py-28 bg-[hsl(200,50%,12%)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-8 leading-tight">
              O Maior Investimento da Sua Vida Merece Segurança Total
            </h2>
            
            <div className="text-lg md:text-xl text-white/85 mb-10 space-y-4 max-w-3xl mx-auto leading-relaxed">
              <p>
                Comprar um imóvel é um grande passo. Você faria uma cirurgia sem exames? Não. 
                Então por que comprar um imóvel sem um raio-X completo?
              </p>
              <p>
                Por um valor acessível, nossa <strong className="text-white">Análise de Risco em 24h</strong> investiga 
                a saúde da propriedade e dos vendedores em todas as esferas.
              </p>
              <p className="font-semibold text-white">
                Não compre no escuro. Compre com o nosso Sinal Verde.
              </p>
            </div>
            
            <button
              onClick={handleWhatsAppClick}
              className="inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-10 py-5 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Shield className="w-6 h-6" />
              Quero Minha Análise Agora
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  );
};

export default AnaliseRisco;

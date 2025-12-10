import { useState } from "react";
import { 
  Search, 
  MapPin, 
  FileText, 
  Building, 
  Scale, 
  Users,
  ChevronDown,
  MessageCircle
} from "lucide-react";

const services = [
  {
    id: 1,
    icon: Search,
    title: "Análise de Risco",
    pitch: "Identificação completa de riscos jurídicos em apenas 24 horas.",
    deliverables: [
      "Parecer jurídico detalhado",
      "Análise documental completa",
      "Identificação de pendências",
      "Recomendações de mitigação"
    ],
    price: "A partir de R$ 500"
  },
  {
    id: 2,
    icon: MapPin,
    title: "Análise de Terrenos",
    pitch: "Viabilidade construtiva e jurídica para aquisição de terrenos.",
    deliverables: [
      "Due diligence imobiliária",
      "Análise de matrícula",
      "Verificação de ônus e gravames",
      "Estudo de viabilidade"
    ],
    price: "Sob consulta"
  },
  {
    id: 3,
    icon: FileText,
    title: "Blindagem Contratual",
    pitch: "Proteção total em contratos de compra, venda e locação.",
    deliverables: [
      "Elaboração de contratos",
      "Revisão de cláusulas",
      "Análise de riscos contratuais",
      "Aditivos e garantias"
    ],
    price: "A partir de R$ 800"
  },
  {
    id: 4,
    icon: Building,
    title: "Regularização Fundiária & Construtiva",
    pitch: "Regularização completa de imóveis e empreendimentos.",
    deliverables: [
      "Usucapião e adjudicação",
      "Regularização de construções",
      "Averbação de imóveis",
      "Incorporação imobiliária"
    ],
    price: "Sob consulta"
  },
  {
    id: 5,
    icon: Scale,
    title: "Gestão de Distratos",
    pitch: "Negociação e resolução de rescisões contratuais.",
    deliverables: [
      "Mediação de conflitos",
      "Cálculo de valores devidos",
      "Acordos extrajudiciais",
      "Defesa em ações judiciais"
    ],
    price: "A partir de R$ 1.200"
  },
  {
    id: 6,
    icon: Users,
    title: "Consultoria Preventiva",
    pitch: "Departamento jurídico terceirizado para sua empresa.",
    deliverables: [
      "Atendimento contínuo",
      "Pareceres sob demanda",
      "Treinamento de equipes",
      "Acompanhamento de operações"
    ],
    price: "Planos mensais"
  }
];

export function Services() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const handleWhatsApp = (serviceTitle: string) => {
    const message = encodeURIComponent(`Olá! Gostaria de solicitar um orçamento para o serviço: ${serviceTitle}`);
    window.open(`https://wa.me/5511999999999?text=${message}`, "_blank");
  };

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Soluções Jurídicas Especializadas
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Atendimento personalizado para cada necessidade do mercado imobiliário e da construção civil.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service) => {
            const Icon = service.icon;
            const isExpanded = expandedId === service.id;
            
            return (
              <div
                key={service.id}
                className={`bg-card rounded-xl border border-border shadow-sm overflow-hidden transition-all duration-300 ${
                  isExpanded ? "ring-2 ring-primary" : "hover:shadow-md"
                }`}
              >
                <button
                  onClick={() => setExpandedId(isExpanded ? null : service.id)}
                  className="w-full p-6 text-left"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground text-lg">{service.title}</h3>
                        <p className="text-sm text-secondary font-medium">{service.price}</p>
                      </div>
                    </div>
                    <ChevronDown 
                      className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                        isExpanded ? "rotate-180" : ""
                      }`} 
                    />
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}>
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground mb-4">{service.pitch}</p>
                    
                    <div className="mb-4">
                      <p className="text-sm font-medium text-foreground mb-2">Inclui:</p>
                      <ul className="space-y-1">
                        {service.deliverables.map((item, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <button
                      onClick={() => handleWhatsApp(service.title)}
                      className="w-full flex items-center justify-center gap-2 bg-secondary text-secondary-foreground py-3 rounded-lg font-medium hover:bg-secondary/90 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Solicitar Orçamento
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

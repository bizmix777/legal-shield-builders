import { Shield, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-8 h-8 text-secondary" />
              <span className="font-display text-xl font-bold">Biz Mix</span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Segurança jurídica especializada para o mercado imobiliário e da construção civil. Protegemos seu negócio
              com expertise e agilidade.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contato</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contato@bizmix.com.br"
                  className="flex items-center gap-3 text-background/70 hover:text-secondary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  contato@bizmix.com.br
                </a>
              </li>
              <li>
                <a
                  href="tel:+5562992475080"
                  className="flex items-center gap-3 text-background/70 hover:text-secondary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  (62) 99247-5080
                </a>
              </li>
              <li>
                <span className="flex items-center gap-3 text-background/70">
                  <MapPin className="w-4 h-4" />
                  Anápolis, GO
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="text-background/70 hover:text-secondary transition-colors">
                  Análise de Risco
                </a>
              </li>
              <li>
                <a href="#services" className="text-background/70 hover:text-secondary transition-colors">
                  Análise de Terrenos
                </a>
              </li>
              <li>
                <a href="#services" className="text-background/70 hover:text-secondary transition-colors">
                  Blindagem Contratual
                </a>
              </li>
              <li>
                <a href="#services" className="text-background/70 hover:text-secondary transition-colors">
                  Regularização Fundiária
                </a>
              </li>
              <li>
                <a href="#services" className="text-background/70 hover:text-secondary transition-colors">
                  Gestão de Distratos
                </a>
              </li>
              <li>
                <a href="#services" className="text-background/70 hover:text-secondary transition-colors">
                  Consultoria Preventiva
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 text-center">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Biz Mix. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

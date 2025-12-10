import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const whatsappNumber = "5562992475080"; // Update with actual number
  const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços jurídicos.");

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[hsl(142_70%_45%)] text-white px-5 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="font-medium hidden sm:inline group-hover:inline">Fale Conosco</span>
    </a>
  );
}

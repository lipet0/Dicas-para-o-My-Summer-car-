import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhatsAppButton() {
  return (
    <Button
      asChild
      className="bg-green-500 hover:bg-green-600 text-white font-medium transition-all duration-300 hover:scale-105 shadow-lg"
    >
      <a
        href="https://wa.me/5511967339208"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2"
      >
        <MessageCircle className="h-5 w-5" />
        Fale comigo no WhatsApp
      </a>
    </Button>
  )
}
import { useState } from "react"
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { ThemeToggle } from "./theme-toggle"
import { 
  Home, 
  Settings, 
  Car, 
  Heart, 
  Briefcase, 
  Lightbulb, 
  Navigation, 
  Paintbrush, 
  Wrench, 
  Shield 
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface GuideLayoutProps {
  children: React.ReactNode
}

const navigationItems = [
  { id: "inicio", title: "Início", icon: Home },
  { id: "primeiros-passos", title: "Primeiros Passos", icon: Settings },
  { id: "montagem-carro", title: "Montagem do Carro", icon: Car },
  { id: "manutencao", title: "Manutenção", icon: Heart },
  { id: "trabalhos", title: "Trabalhos e Grana", icon: Briefcase },
  { id: "dicas", title: "Dicas Rápidas", icon: Lightbulb },
  { id: "dirigindo", title: "Dirigindo por Aí", icon: Navigation },
  { id: "personalizacao", title: "Personalização", icon: Paintbrush },
  { id: "habilidades", title: "Habilidades", icon: Wrench },
  { id: "sobrevivencia", title: "Sobrevivendo ao Caos", icon: Shield }
]

function AppSidebar() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <Sidebar className="border-r border-border">
      <SidebarContent className="pt-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-primary font-bold text-lg mb-4">
            My Summer Car
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    onClick={() => scrollToSection(item.id)}
                    className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors duration-200 rounded-lg p-3"
                  >
                    <item.icon className="mr-3 h-4 w-4" />
                    <span className="font-medium">{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

export function GuideLayout({ children }: GuideLayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex h-16 items-center justify-between px-6">
              <div className="flex items-center gap-4">
                <SidebarTrigger className="hover:bg-sidebar-accent rounded-lg p-2 transition-colors" />
                <h1 className="text-lg font-bold text-foreground">
                  Guia Completo para Iniciantes
                </h1>
              </div>
              <ThemeToggle />
            </div>
          </header>
          <main className="flex-1">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}
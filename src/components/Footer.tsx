import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 gradient-secondary border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Dev Portfolio
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Desenvolvedor Full Stack especializado em criar soluções digitais inovadoras 
                com foco em qualidade e performance.
              </p>
            </div>
            
            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Links Rápidos</h4>
              <nav className="space-y-2">
                <a href="#home" className="block text-muted-foreground hover:text-primary transition-smooth text-sm">
                  Início
                </a>
                <a href="#skills" className="block text-muted-foreground hover:text-primary transition-smooth text-sm">
                  Skills
                </a>
                <a href="#projects" className="block text-muted-foreground hover:text-primary transition-smooth text-sm">
                  Projetos
                </a>
                <a href="#about" className="block text-muted-foreground hover:text-primary transition-smooth text-sm">
                  Sobre
                </a>
              </nav>
            </div>
            
            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Serviços</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Desenvolvimento Web</p>
                <p>Business Intelligence</p>
                <p>Consultorias Técnicas</p>
                <p>Otimização de Sistemas</p>
              </div>
            </div>
            
            {/* Contact */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Contato</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>contato@dev.com</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>+55 (11) 99999-9999</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>São Paulo, Brasil</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Social Links & Copyright */}
          <div className="pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="hover:bg-secondary/50 transition-smooth">
                  <Github className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-secondary/50 transition-smooth">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-secondary/50 transition-smooth">
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
              
              <p className="text-sm text-muted-foreground text-center">
                © {currentYear} Desenvolvedor Full Stack. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
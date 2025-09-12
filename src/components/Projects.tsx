import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import managementSystem from "@/assets/project-management-system.jpg";
import analyticsDashboard from "@/assets/analytics-dashboard.jpg";
import ecommerceSite from "@/assets/ecommerce-site.jpg";
import biReports from "@/assets/bi-reports.jpg";

const projects = [
  {
    title: "Sistema de Gestão Empresarial",
    description: "Sistema completo desenvolvido em PHP com Laravel para gestão de estoque, vendas e relatórios. Interface moderna com Vue.js e integração com Power BI.",
    tech: ["PHP", "Laravel", "Vue.js", "MySQL", "Power BI"],
    image: managementSystem,
    github: "#",
    demo: "#"
  },
  {
    title: "Dashboard Analytics",
    description: "Painel interativo desenvolvido em JavaScript puro com D3.js para visualização de dados em tempo real. Integração com APIs REST e WebSocket.",
    tech: ["JavaScript", "D3.js", "Node.js", "MongoDB", "Socket.io"],
    image: analyticsDashboard,
    github: "#",
    demo: "#"
  },
  {
    title: "E-commerce Responsivo",
    description: "Loja virtual completa com carrinho de compras, sistema de pagamento e painel administrativo. Design responsivo e otimizado para SEO.",
    tech: ["PHP", "JavaScript", "CSS3", "MySQL", "Stripe API"],
    image: ecommerceSite,
    github: "#",
    demo: "#"
  },
  {
    title: "Sistema de Relatórios BI",
    description: "Plataforma de Business Intelligence com relatórios automatizados, KPIs dinâmicos e exportação para diversos formatos.",
    tech: ["Power BI", "SQL Server", "Python", "Excel", "Power Query"],
    image: biReports,
    github: "#",
    demo: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 gradient-secondary relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meus <span className="bg-gradient-primary bg-clip-text text-transparent">Projetos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Alguns dos projetos que desenvolvi, demonstrando diferentes tecnologias e soluções
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden shadow-card hover:shadow-primary transition-smooth border-border bg-card group">
              <div className="aspect-video bg-gradient-secondary relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-smooth"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-smooth">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="hover:bg-secondary/50 transition-smooth">
                    <Github className="h-4 w-4 mr-2" />
                    Código
                  </Button>
                  <Button size="sm" className="bg-primary hover:bg-primary/90 transition-smooth">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import campoDourado from "@/assets/campodourado.png";
import aedodonto from "@/assets/aedodonto.png";
import odontonaves from "@/assets/odontonaves.png";
import solar from "@/assets/solar.png";
import safetech from "@/assets/SAFETECH.png";

const projects = [
  {
    title: "Campo Dourado",
    description: "Desenvolvimento de site institucional responsivo em WordPress para a Campo Dourado Consultoria, empresa especializada em soluções para o setor agrícola, com foco na superação do déficit de armazenamento de grãos no Brasil. O projeto priorizou uma navegação intuitiva, design moderno e comunicação clara dos serviços e diferenciais da empresa, garantindo uma presença digital sólida e alinhada à identidade da marca.",
    tech: ["PHP", "Wordpress", "JavaScript", "MySQL", "CSS"],
    image: campoDourado,
    category: "Desenvolvimento Web",
    github: "#",
    demo: "https://campodourado.agr.br"
  },
  {
    title: "AeD Odontologia",
    description: "Desenvolvimento de site institucional responsivo em WordPress para a A&D Januário Odontologia, clínica de referência nacional e internacional. O projeto foi planejado para transmitir a excelência dos serviços, destacando a alta tecnologia, a equipe qualificada e o ambiente diferenciado, garantindo uma experiência digital moderna e acessível em qualquer dispositivo.",
    tech: ["PHP", "Wordpress", "JavaScript", "MySQL", "CSS"],
    image: aedodonto,
    category: "Desenvolvimento Web",
    github: "#",
    demo: "#"
  },
  {
    title: "OdontoNaves",
    description: "Desenvolvimento de site institucional responsivo em WordPress + Elementor.Hospital Odontológico completou 12 anos em 2023. Mas nossa história tem mais tempo. Iniciamos nossa caminhada com o Dr. Mauricio e Drª Onilda Naves, há mais de 40 anos e a solidez e credibilidade de nossa marca",
    tech: ["PHP", "Wordpress", "Elementor", "JavaScript", "MySQL", "CSS"],
    image: odontonaves,
    category: "Desenvolvimento Web",
    github: "#",
    demo: "https://odontonaves.com.br/"
  },
  {
    title: "Solar Material para Construção",
    description: "Desenvolvimento de site institucional responsivo em Laravel + Vue.js + Bootstrap. A Solar Materiais para Construção iniciou as suas atividades em 1989, em uma modesta sala comercial localizada no Parque Industrial João Braz, região oeste de Goiânia.",
    tech: ["PHP", "Laravel", "Vuejs", "Bootstrap", "JavaScript", "MySQL", "CSS"],
    image: solar,
    category: "Desenvolvimento Web",
    github: "#",
    demo: "https://solarmateriaisconstrucao.com.br/"
  },
  {
    title: "SafeTech",
    description: "Desenvolvimento de site institucional responsivo em Laravel + Vue.js + Bootstrap. Tecnologia e Segurança para Empresas Focadas em Performance Transformamos a infraestrutura de TI da sua empresa com soluções seguras, eficientes e inovadoras, permitindo que você concentre-se no essencial: o crescimento do seu negócio",
    tech: ["PHP", "Laravel", "Vuejs", "Bootstrap", "JavaScript", "MySQL", "CSS"],
    image: safetech,
    category: "Desenvolvimento Web",
    github: "#",
    demo: "https://safe-tech.in/"
  }
];

const filterCategories = [
  "Todos",
  "Desenvolvimento Web", 
  "Analytics",
  "E-commerce",
  "Business Intelligence"
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("Todos");
  
  const filteredProjects = activeFilter === "Todos" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filterCategories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(category)}
              className={`transition-smooth ${
                activeFilter === category
                  ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-primary"
                  : "hover:bg-secondary/50 border-border"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.title} 
              className="overflow-hidden shadow-card hover:shadow-primary transition-smooth border-border bg-card group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video bg-gradient-secondary relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-smooth"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs rounded-full font-medium backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
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
                  <Button asChild variant="outline" size="sm" className="hover:bg-secondary/50 transition-smooth">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`Abrir código no GitHub de ${project.title}`}>
                      <Github className="h-4 w-4 mr-2" />
                      Código
                    </a>
                  </Button>
                  <Button asChild size="sm" className="bg-primary hover:bg-primary/90 transition-smooth">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label={`Abrir demo de ${project.title}`}>
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              Nenhum projeto encontrado para a categoria "{activeFilter}"
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
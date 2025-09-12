import { Code, Database, BarChart3, Palette, Server, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";

const skills = [
  {
    icon: Code,
    title: "PHP",
    description: "Desenvolvimento backend robusto com Laravel e frameworks modernos",
    level: 85
  },
  {
    icon: Globe,
    title: "JavaScript",
    description: "Aplicações interativas com ES6+, React e Node.js",
    level: 80
  },
  {
    icon: Palette,
    title: "CSS",  
    description: "Design responsivo com Tailwind, SCSS e animações avançadas",
    level: 85
  },
  {
    icon: Database,
    title: "Banco de Dados",
    description: "MySQL, PostgreSQL e otimização de consultas complexas",
    level: 75
  },
  {
    icon: BarChart3,
    title: "Power BI",
    description: "Dashboards interativos e análise de dados empresariais",
    level: 70
  },
  {
    icon: Server,
    title: "DevOps",
    description: "Docker, Git e deploy em servidores Linux",
    level: 65
  }
];

const Skills = () => {
  return (
    <section className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span> & Tecnologias
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experiência sólida em tecnologias modernas para desenvolvimento web completo
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skills.map((skill) => (
            <Card key={skill.title} className="p-6 shadow-card hover:shadow-primary transition-smooth border-border bg-card group hover:scale-105">
              <div className="flex items-center mb-4">
                <skill.icon className="h-8 w-8 text-primary mr-3 group-hover:text-accent transition-smooth" />
                <h3 className="text-xl font-semibold">{skill.title}</h3>
              </div>
              
              <p className="text-muted-foreground mb-4 text-sm">
                {skill.description}
              </p>
              
              <div className="w-full bg-secondary rounded-full h-2">
                <div 
                  className="gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              
              <div className="text-right mt-2">
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Award, Users } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Sobre <span className="bg-gradient-primary bg-clip-text text-transparent">Mim</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Desenvolvedor apaixonado por tecnologia e soluções inovadoras
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Minha Jornada</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Com conhecimento intermediário em desenvolvimento web, tenho experiência sólida em 
                  <span className="text-primary font-medium"> PHP, JavaScript e CSS</span>, criando aplicações 
                  robustas e interfaces intuitivas. Trabalho com bancos de dados relacionais e desenvolvo 
                  dashboards interativos usando <span className="text-accent font-medium">Power BI</span>.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Meu foco está em entregar soluções completas que atendam às necessidades do negócio, 
                  combinando performance, usabilidade e design moderno.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4 shadow-card border-border bg-card">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">3+ Anos</p>
                      <p className="text-sm text-muted-foreground">Experiência</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-4 shadow-card border-border bg-card">
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-accent" />
                    <div>
                      <p className="font-medium">15+ Projetos</p>
                      <p className="text-sm text-muted-foreground">Concluídos</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
            
            <div className="space-y-6">
              <Card className="p-6 shadow-card border-border bg-card">
                <h3 className="text-xl font-semibold mb-4">Especialidades</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Desenvolvimento Web Full Stack</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Business Intelligence & Analytics</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Design de Interfaces Responsivas</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Otimização de Banco de Dados</span>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 shadow-card border-border bg-card">
                <h3 className="text-xl font-semibold mb-4">Valores</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>✨ <span className="text-foreground">Qualidade</span> em cada linha de código</p>
                  <p>🚀 <span className="text-foreground">Inovação</span> constante e aprendizado</p>
                  <p>🤝 <span className="text-foreground">Colaboração</span> e comunicação clara</p>
                  <p>⚡ <span className="text-foreground">Performance</span> e otimização</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Award, GraduationCap, Briefcase, Code, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Resume = () => {
  const navigate = useNavigate();

  const experiences = [
    {
      title: "Desenvolvedor Full Stack",
      company: "Tech Solutions Ltda",
      period: "2022 - Presente",
      location: "São Paulo, SP",
      description: "Desenvolvimento de aplicações web completas usando PHP, Laravel, JavaScript e MySQL. Responsável por criar dashboards interativos e integrações com APIs externas.",
      achievements: [
        "Desenvolveu 15+ aplicações web responsivas",
        "Reduziu tempo de carregamento em 40% através de otimizações",
        "Implementou sistema de relatórios automatizados"
      ]
    },
    {
      title: "Desenvolvedor Web",
      company: "Digital Agency",
      period: "2021 - 2022",
      location: "São Paulo, SP", 
      description: "Criação de sites institucionais e e-commerces. Foco em design responsivo e otimização para SEO.",
      achievements: [
        "Criou 25+ websites responsivos",
        "Melhorou performance de SEO em 60%",
        "Integrou sistemas de pagamento online"
      ]
    }
  ];

  const education = [
    {
      degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
      institution: "FATEC São Paulo",
      period: "2019 - 2022",
      status: "Concluído"
    },
    {
      degree: "Técnico em Informática",
      institution: "ETEC São Paulo",
      period: "2017 - 2018",
      status: "Concluído"
    }
  ];

  const courses = [
    {
      name: "Laravel Avançado",
      provider: "Udemy",
      year: "2023",
      hours: "40h"
    },
    {
      name: "Power BI para Business Intelligence",
      provider: "Microsoft Learn",
      year: "2022",
      hours: "60h"
    },
    {
      name: "JavaScript ES6+ Completo",
      provider: "Rocketseat",
      year: "2022",
      hours: "80h"
    },
    {
      name: "Banco de Dados MySQL",
      provider: "Alura",
      year: "2021",
      hours: "50h"
    }
  ];

  const skills = {
    frontend: ["JavaScript", "HTML5", "CSS3", "Vue.js", "React", "Tailwind CSS"],
    backend: ["PHP", "Laravel", "Node.js", "MySQL", "PostgreSQL", "API REST"],
    tools: ["Power BI", "Git", "Docker", "Linux", "Figma", "Photoshop"]
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="gradient-hero py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="mb-8 hover:bg-white/10 text-white/80 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar ao Portfolio
            </Button>
            
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Currículo
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Minha trajetória profissional, formação acadêmica e qualificações técnicas
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* Experiência Profissional */}
          <section className="mb-16">
            <div className="flex items-center mb-8">
              <Briefcase className="h-6 w-6 text-primary mr-3" />
              <h2 className="text-3xl font-bold">Experiência Profissional</h2>
            </div>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card key={index} className="p-6 shadow-card border-border bg-card">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-1">{exp.title}</h3>
                      <p className="text-lg font-medium">{exp.company}</p>
                    </div>
                    <div className="text-muted-foreground text-sm mt-2 md:mt-0 md:text-right">
                      <div className="flex items-center md:justify-end mb-1">
                        <Calendar className="h-4 w-4 mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center md:justify-end">
                        <MapPin className="h-4 w-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  
                  <div>
                    <h4 className="font-medium mb-2">Principais Conquistas:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Formação Acadêmica */}
          <section className="mb-16">
            <div className="flex items-center mb-8">
              <GraduationCap className="h-6 w-6 text-primary mr-3" />
              <h2 className="text-3xl font-bold">Formação Acadêmica</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <Card key={index} className="p-6 shadow-card border-border bg-card">
                  <h3 className="text-lg font-semibold text-primary mb-2">{edu.degree}</h3>
                  <p className="font-medium mb-2">{edu.institution}</p>
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <span>{edu.period}</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">
                      {edu.status}
                    </span>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Cursos e Certificações */}
          <section className="mb-16">
            <div className="flex items-center mb-8">
              <Award className="h-6 w-6 text-primary mr-3" />
              <h2 className="text-3xl font-bold">Cursos e Certificações</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {courses.map((course, index) => (
                <Card key={index} className="p-6 shadow-card border-border bg-card">
                  <h3 className="text-lg font-semibold mb-2">{course.name}</h3>
                  <p className="text-primary font-medium mb-2">{course.provider}</p>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{course.year}</span>
                    <span>{course.hours}</span>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Habilidades Técnicas */}
          <section className="mb-16">
            <div className="flex items-center mb-8">
              <Code className="h-6 w-6 text-primary mr-3" />
              <h2 className="text-3xl font-bold">Habilidades Técnicas</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 shadow-card border-border bg-card">
                <h3 className="text-lg font-semibold text-primary mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
              
              <Card className="p-6 shadow-card border-border bg-card">
                <h3 className="text-lg font-semibold text-accent mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
              
              <Card className="p-6 shadow-card border-border bg-card">
                <h3 className="text-lg font-semibold text-primary mb-4">Ferramentas</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            </div>
          </section>

          {/* Download/Contact */}
          <section className="text-center">
            <Card className="p-8 shadow-card border-border bg-card">
              <h3 className="text-2xl font-bold mb-4">Interessado no meu trabalho?</h3>
              <p className="text-muted-foreground mb-6">
                Entre em contato para discutirmos oportunidades de colaboração
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-primary hover:bg-primary/90">
                  Entrar em Contato
                </Button>
                <Button variant="outline">
                  Baixar PDF
                </Button>
              </div>
            </Card>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Resume;
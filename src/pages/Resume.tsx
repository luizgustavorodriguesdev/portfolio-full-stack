import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Award, GraduationCap, Briefcase, Code, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Resume = () => {
  const navigate = useNavigate();

  const experiences = [
    {
      title: "Programador I",
      company: "Dolp Engenharia",
      period: "09/2024 - 09/2025",
      location: "Goiânia - GO	",
      description: "Desenvolvimento de sistemas utilizando ferramentas de Low-Code PHP, com foco em ScriptCase. Colaborar na análise e desenvolvimento de sistemas conforme as necessidades do negócio. Dar suporte em projetos de desenvolvimento e manutenção de sistemas, aplicandoconhecimentos em PHP, HTML, jQuery, CSS e Bootstrap. Realizar consultas e manipulação de dados em banco de dados MySQL. Aplicar princípios de orientação a objetos no desenvolvimento de soluções. Contribuir proativamente para a resolução de problemas e na absorção de novos conhecimentos.",
      achievements: [
        "Desenvolvimento de Importações a partir de planilhas para modulo de produção",
        "Desenvolvimento de Importação para modulos Obras e Programação de Obras",
        "Melhorias aplicando UX na telas de cadastros de programação de obras"
      ]
    },
    {
      title: "Desenvolvedor Web",
      company: "Inusitada Marketing para o Agro",
      period: "11/2022 - 09/2024",
      location: "Goiânia - GO - Remoto", 
      description: "Desenvolvimento Web: Criação de sites, landing pages e e-commerces utilizando WordPress, WooCommerce, Laravel e frameworks front-end (HTML, CSS, JavaScript, Bootstrap, GulpJS). Back-end: Programação PHP avançada e implementação de integrações robustas para sistemas e plataformas digitais, utilizando Framework Codeigniter e ScriptCase. Gerenciamento de Servidores: Configuração e administração de servidores de hospedagem, cloud e VPS, incluindo gestão de recursos, otimizações e segurança. SEO e Web Analytics: Estratégias e ferramentas de SEO (Google Search Console, SEMrush, Google Analytics), geração de relatórios detalhados (Google Analytics, Google Data Studio) e acompanhamento de desempenho digital. Integrações e Automação: Implementação de integrações com plataformas como RD Station, Lead Lovers e sistemas de pixel e código (Meta, Google Ads, Google Tag Manager). Planejamento e Gestão: Levantamento de requisitos, planejamento de custos e condução de reuniões e apresentações de projetos para clientes, garantindo alinhamento com expectativas e prazos. Testes e Otimização: Realização de testes A/B para melhorias contínuas em sites e campanhas digitais. Ferramentas e Tecnologias: Design e Prototipação: Experiência com Figma, Adobe Illustrator e Photoshop para criação de interfaces e recursos visuais. Outras Competências: Criação de relatórios analíticos, otimização de campanhas, gestão de projetos e colaboração com equipes multidisciplinares.",
      achievements: [
        "Criou 15+ websites responsivos",
        "Implantei servidor cload para gerenciar sites de clientes"        ,
        "Integrou sistemas de pagamento online e gestão de lead RD Statio"
      ]
    },
    {
      title: "Desenvolvedor Web",
      company: "Otimize Marketing Digital",
      period: "10/2019 - 10/2022",
      location: "Goiânia - GO - Remoto", 
      description: "Responsável pelo desenvolvimento de sites e aplicações web utilizando PHP,WordPress, Laravel, desde o levantamento de requisitos até o planejamento de custos dos projetos.Atuei na programação e gerenciamento de código e pixels nas plataformas Meta, Google Ads, Google Analytics, e Google Tag Manager. Especialista em SEO técnico, com foco no monitoramento de desempenho do site, análise de métricas como tempo de carregamento, taxa de rejeição e tráfego. Realizei configurações de servidores, domínio, DNS, SSL, firewalls e cookies. Além disso, conduzi reuniões com a equipe e apresentações de projetos aos clientes, garantindo a entrega de soluções eficientes e alinhadas às expectativas.",
      achievements: [
        "Criou 25+ websites responsivos",
        "Implementei TAG Google Manager para genreciamento de pixel de conversão e acompanhamento"        ,
        "Integrou sistemas de pagamento online e gestão de lead RD Statio"
      ]
    },
    {
      title: "Web Master",
      company: "BR Dois Marketing",
      period: "10/2018 - 09/2029",
      location: "Goiânia - GO - Remoto", 
      description: "Desenvolvimeto PHP. Desenvolvedor Wordpress. Desenvolvimeneto ScriptCase. Desenvolvimento de Sites e E-commerce. Levantamento de Requisitos. Planejamento de Custo de Projetos. SEO. Ferramentas de SEO, Search Console. Sem Rush, Google Analytics. Relatorios utilizando google analytics. Relatorios Google Data Studio. Integração Site RD Station,Lead Lovers entre outros. Gestão de Trafego Pago nas Plataformas Meta ADS e Google ADS. Experiência em geração e gerenciamento de codigo e pixel nas plataformas Meta,Google Ads, Google Analytics, Google Tag Manager. Gerenciamento de Servidor de Hospedagem e Cloud. Experiência com FIGMA. Experiência com Adobe illustrator. Experiência com Adobe Photoshop.",
      achievements: [
        "Criou 25+ websites responsivos",
        "Criação de dashboard de trafego pago google ads no Looker Studio",
        "Integrou sistemas de pagamento online e gestão de lead RD Station"
      ]
    },
    {
      title: "Gestor de Projetos e Desenvolvedor PHP",
      company: "Uebb Digital",
      period: "01/2018 - 08/2019",
      location: "Goiânia - GO - Remoto", 
      description: "Contratação PJ Temporaria para projetos especificos. Atuei como gestor de projetos para iniciativas específicas, liderando a implementação de soluções tecnológicas e gerenciando a integração de CRM (Run Run IT). Responsável por conduzir reuniões com clientes e apresentar projetos, garantindo alinhamento com as necessidades do negócio. Também iniciei a implementação de metodologias ágeis no departamento de desenvolvimento. No âmbito técnico, desenvolvi soluções em PHP, utilizando frameworks como CodeIgniter e WordPress, além de trabalhar com tecnologias front-end como CSS, Sass, JS e Angular.",
      achievements: [
        "Gerenciamento e Organização de projetos",
        "Implantaçao de metodologia scrum",
        "Implantação de RUNRUN para gerenciamento de tarefas"
      ]
    },
    {
      title: "Desenvolvedor de front-end",
      company: "Raddar Digital",
      period: "01/2017 - 10/2017",
      location: "Goiânia - GO - Presencial", 
      description: "Contratação PJ Temporaria para projetos especificos. Desenvolvedor Front-end. Desenvolvimento de Sites e Aplicações Web. Utilização de PHP,CSS,Sass, JS, Angular. Levantamento de Requisitos. Planejamento de Custo de Projetos. Desenvolvimento/Programação. Apresentação de Projetos. Reunião com cliente. SEO.",
      achievements: [
        "Criou 25+ websites responsivos",
        "Integração site com crm de vendas de imoveis"        
      ]
    }, 
    {
      title: "Desenvolvedor de front-end",
      company: "Raddar Digital",
      period: "01/2017 - 10/2017",
      location: "Goiânia - GO - Presencial", 
      description: "Contratação PJ Temporaria para projetos especificos. Desenvolvedor Front-end. Desenvolvimento de Sites e Aplicações Web. Utilização de PHP,CSS,Sass, JS, Angular. Levantamento de Requisitos. Planejamento de Custo de Projetos. Desenvolvimento/Programação. Apresentação de Projetos. Reunião com cliente. SEO.",
      achievements: [
        "Criou 25+ websites responsivos",
        "Integração site com crm de vendas de imoveis"        
      ]
    },
    {
      title: "Analista de Sistemas",
      company: "Hospital Santa Casa e Misercordia",
      period: "11/2011 - 08/2016",
      location: "Goiânia - GO - Presencial", 
      description: "Responsável por analisar e desenvolver projetos de sistemas, incluindo levantamento de requisitos, mapeamento de processos e modelagem de dados. Focado em estudar e implementar soluções alinhadas às regras de negócio. Também realizei análises de desempenho de sistemas implantados, resolução de problemas técnicos, elaboração de manuais, além de executar backups de arquivos e bancos de dados, com expertise em ORACLE e PostgreSQL. Treinamento de Usuarios. Administração de Acesso aos sistema.",
      achievements: [
        "Implantação de AD",
        "Servidor redudante de backup para Banco de Dados Oracle 11g"        
      ]
    },
    {
      title: "Analista de suporte técnico",
      company: "Hospital Santa Casa e Misercordia",
      period: "11/2010 - 11/20111",
      location: "Goiânia - GO - Presencial", 
      description: "Suporte a usuários do sistema, suporte e manutenção em redes de telecomunicação, implantação de sistemas de informação e treinamentos para usuários do sistema. Atuar no monitoramento de serviços em servidores, processos, backups e pastas dos ambientes; Atender chamados pela ferramenta da empresa, respeitando os prazos SLA’s; Comprometimento com os usuários internos, respeitando normas e procedimentos da empresa.",      achievements: [
        "Implantação de sistema de ticket e abertura de OS",
        "Implantação e treinamento de usuarios no sistema de fila de espera no atendimento. Software Open Source"        
      ]
    },  
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
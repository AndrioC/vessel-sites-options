"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Menu,
  X,
  Zap,
  BarChart3,
  Sparkles,
  Target,
  Wrench,
  Mail,
  Instagram,
} from "lucide-react";

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?:
      | "default"
      | "destructive"
      | "outline"
      | "secondary"
      | "ghost"
      | "link";
    size?: "default" | "sm" | "lg" | "icon";
  }
>(
  (
    { className = "", variant = "default", size = "default", ...props },
    ref
  ) => {
    const baseClasses =
      "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";

    const variants = {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      destructive:
        "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      outline:
        "border border-input hover:bg-accent hover:text-accent-foreground",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "underline-offset-4 hover:underline text-primary",
    };

    const sizes = {
      default: "h-10 py-2 px-4",
      sm: "h-9 px-3 rounded-md",
      lg: "h-11 px-8 rounded-md",
      icon: "h-10 w-10",
    };

    return (
      <button
        className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`flex flex-col space-y-1.5 p-6 ${className}`}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`p-6 pt-0 ${className}`} {...props} />
));
CardContent.displayName = "CardContent";

// Types
interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// Components
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-lg"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Zap className="h-8 w-8 text-indigo-600" />
            <span className="text-2xl font-bold text-gray-900">VESSEL</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("funcionalidades")}
              className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
            >
              Funcionalidades
            </button>
            <button
              onClick={() => scrollToSection("beneficios")}
              className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
            >
              Benefícios
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
            >
              Contato
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="default"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
            >
              LOGIN
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <button
                onClick={() => scrollToSection("inicio")}
                className="block px-3 py-2 text-gray-700 hover:text-indigo-600 font-medium"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("funcionalidades")}
                className="block px-3 py-2 text-gray-700 hover:text-indigo-600 font-medium"
              >
                Funcionalidades
              </button>
              <button
                onClick={() => scrollToSection("beneficios")}
                className="block px-3 py-2 text-gray-700 hover:text-indigo-600 font-medium"
              >
                Benefícios
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="block px-3 py-2 text-gray-700 hover:text-indigo-600 font-medium"
              >
                Contato
              </button>
              <div className="px-3 py-2">
                <Button
                  variant="default"
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
                >
                  LOGIN
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="pt-16 min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white overflow-hidden relative"
    >
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-gradient-to-br from-white/5 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in slide-in-from-left duration-1000">
            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              TRANSFORME A<br />
              GESTÃO DO SEU
              <br />
              SALÃO{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                COM A VESSEL
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl">
              Simplifique processos, aumente a produtividade e revolucione seu
              controle com nossa plataforma de gestão inovadora.
            </p>

            <Button
              size="lg"
              className="bg-white text-indigo-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-full font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1"
              onClick={() =>
                document
                  .getElementById("contato")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Comece Agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="relative animate-in slide-in-from-right duration-1000 delay-300">
            <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-8 border border-white/20 shadow-2xl">
              <div className="bg-gradient-to-br from-white/20 to-white/5 rounded-2xl h-80 flex items-center justify-center text-6xl">
                📱💻
              </div>
              <p className="text-center mt-6 text-lg opacity-90">
                Disponível em todas as plataformas
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-white/20 rounded-full animate-bounce delay-1000"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-white/20 rounded-full animate-bounce delay-2000"></div>
      <div className="absolute bottom-40 left-20 w-8 h-8 bg-white/20 rounded-full animate-bounce delay-3000"></div>
    </section>
  );
};

const FeatureCard: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50">
      <CardHeader className="text-center pb-4">
        <div className="w-20 h-20 mx-auto bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
          {title}
        </h3>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 text-center leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

const Features: React.FC = () => {
  const features: FeatureProps[] = [
    {
      icon: <Zap />,
      title: "INTEGRAÇÃO COMPLETA",
      description: "Conecte todos os seus processos em uma única plataforma.",
    },
    {
      icon: <BarChart3 />,
      title: "RELATÓRIOS",
      description: "Obtenha insights valiosos para tomar as melhores decisões.",
    },
    {
      icon: <Sparkles />,
      title: "FÁCIL DE USAR",
      description: "Interface intuitiva que qualquer pessoa consegue dominar.",
    },
  ];

  return (
    <section
      id="funcionalidades"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
            A GESTÃO INTELIGENTE E SIMPLES
            <br />
            QUE SEU NEGÓCIO PRECISA!
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Conheça as funcionalidades da Vessel e veja como podemos ajudar a
            otimizar cada processo do seu negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="animate-in slide-in-from-bottom duration-1000"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BenefitCard: React.FC<BenefitProps> = ({ icon, title, description }) => {
  return (
    <Card className="bg-white/10 backdrop-blur-2xl border-white/20 text-white hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2">
      <CardHeader>
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-gray-200 leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};

const Benefits: React.FC = () => {
  const benefits: BenefitProps[] = [
    {
      icon: <Zap />,
      title: "AUMENTO DE PRODUTIVIDADE",
      description:
        "Reduza tempo perdido com tarefas repetitivas e otimize a operação.",
    },
    {
      icon: <Target />,
      title: "GESTÃO CENTRALIZADA",
      description: "Tenha tudo o que você precisa em um único lugar.",
    },
    {
      icon: <Wrench />,
      title: "INTUITIVA E PERSONALIZÁVEL",
      description:
        "A plataforma se adapta às suas necessidades de maneira única e rápida.",
    },
  ];

  return (
    <section
      id="beneficios"
      className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            UM SISTEMA DE ALTA PERFORMANCE
            <br />
            QUE ATENDE ÀS SUAS NECESSIDADES
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="animate-in slide-in-from-bottom duration-1000"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <BenefitCard {...benefit} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA: React.FC = () => {
  return (
    <section id="contato" className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
          Estamos com a versão beta no ar, e com ela planos para atender ao seu
          negócio.
        </h2>
        <p className="text-2xl mb-10 text-gray-300">Quer saber mais?</p>

        <Button
          size="lg"
          className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-lg px-12 py-6 rounded-full font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1"
        >
          ENTRE EM CONTATO
        </Button>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Zap className="h-8 w-8 text-indigo-400" />
              <span className="text-2xl font-bold">VESSEL</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              A Vessel é especializada no desenvolvimento de soluções na área da
              beleza, que busca crescer de maneira organizada e eficiente.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-indigo-400">Contato</h3>
            <div className="flex items-center space-x-2 text-gray-400">
              <Mail className="h-5 w-5" />
              <span>CONTATO@VESSEL.COM</span>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-indigo-400">Social</h3>
            <p className="text-gray-400 mb-2">🚢 VAMOS EMBARCAR NESSA!</p>
            <div className="flex items-center space-x-2 text-gray-400">
              <Instagram className="h-5 w-5" />
              <span>Junte-se à nossa comunidade no Instagram!</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© 2024 VESSEL SOLUTIONS. TODOS OS DIREITOS RESERVADOS.</p>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
const VesselApp: React.FC = () => {
  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Benefits />
      <CTA />
      <Footer />
    </div>
  );
};

export default VesselApp;

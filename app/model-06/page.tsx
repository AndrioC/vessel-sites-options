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
  Phone,
  MapPin,
  Send,
  User,
  MessageSquare,
} from "lucide-react";

// Shadcn UI Components
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

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className = "", type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className = "", ...props }, ref) => {
  return (
    <textarea
      className={`flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

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

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
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
            <Zap className="h-8 w-8 text-emerald-600" />
            <span className="text-2xl font-bold text-gray-900">VESSEL</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("funcionalidades")}
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors"
            >
              Funcionalidades
            </button>
            <button
              onClick={() => scrollToSection("beneficios")}
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors"
            >
              Benefícios
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors"
            >
              Contato
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="default"
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
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
                className="block px-3 py-2 text-gray-700 hover:text-emerald-600 font-medium"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("funcionalidades")}
                className="block px-3 py-2 text-gray-700 hover:text-emerald-600 font-medium"
              >
                Funcionalidades
              </button>
              <button
                onClick={() => scrollToSection("beneficios")}
                className="block px-3 py-2 text-gray-700 hover:text-emerald-600 font-medium"
              >
                Benefícios
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="block px-3 py-2 text-gray-700 hover:text-emerald-600 font-medium"
              >
                Contato
              </button>
              <div className="px-3 py-2">
                <Button
                  variant="default"
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
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
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      const headerOffset = 80;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <section
      id="inicio"
      className="pt-16 min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-emerald-900 text-white overflow-hidden relative"
    >
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-gradient-to-br from-emerald-500/10 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in slide-in-from-left duration-1000">
            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              TRANSFORME A<br />
              GESTÃO DO SEU
              <br />
              SALÃO{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                COM A VESSEL
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl">
              Simplifique processos, aumente a produtividade e revolucione seu
              controle com nossa plataforma de gestão inovadora.
            </p>

            <button
              onClick={scrollToContact}
              className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-6 rounded-full font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 flex items-center"
            >
              Comece Agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
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
      <div className="absolute top-20 left-10 w-4 h-4 bg-emerald-400/20 rounded-full animate-bounce delay-1000"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-teal-400/20 rounded-full animate-bounce delay-2000"></div>
      <div className="absolute bottom-40 left-20 w-8 h-8 bg-emerald-400/20 rounded-full animate-bounce delay-3000"></div>
    </section>
  );
};

const FeatureCard: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-emerald-50">
      <CardHeader className="text-center pb-4">
        <div className="w-20 h-20 mx-auto bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center text-white text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
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
      className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-emerald-900 text-white"
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

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  return (
    <section
      id="contato"
      className="scroll-mt-20 py-20 bg-gradient-to-br from-emerald-50 to-teal-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
            Estamos com a versão beta no ar, e com ela planos para atender ao
            seu negócio.
          </h2>
          <p className="text-2xl text-gray-600 mb-4">Quer saber mais?</p>
          <p className="text-lg text-gray-500">
            Entre em contato conosco e descubra como a Vessel pode transformar
            seu negócio.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Fale Conosco
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">contato@vessel.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Telefone</p>
                    <p className="text-gray-600">+55 (11) 9999-9999</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Instagram className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Instagram</p>
                    <p className="text-gray-600">@vessel.solutions</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white">
              <h4 className="text-xl font-bold mb-4">
                🚢 Vamos Embarcar Nessa!
              </h4>
              <p className="text-emerald-100 leading-relaxed">
                Junte-se à nossa comunidade e descubra como centenas de salões
                estão revolucionando sua gestão com a Vessel. Sua jornada para o
                sucesso começa aqui!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-2xl border-0 bg-white">
            <CardHeader>
              <h3 className="text-2xl font-bold text-gray-900">
                Envie sua Mensagem
              </h3>
              <p className="text-gray-600">
                Preencha o formulário e entraremos em contato em breve.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Nome *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="pl-10 border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                        placeholder="Seu nome completo"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Telefone
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="pl-10 border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="pl-10 border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Mensagem *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="pl-10 border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 resize-none"
                      placeholder="Conte-nos sobre seu salão e como podemos ajudar..."
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 disabled:transform-none disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Enviando...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      <Send className="h-4 w-4" />
                      <span>Enviar Mensagem</span>
                    </div>
                  )}
                </Button>

                {submitStatus === "success" && (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                    <p className="text-emerald-800 text-center font-medium">
                      ✅ Mensagem enviada com sucesso! Entraremos em contato em
                      breve.
                    </p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-red-800 text-center font-medium">
                      ❌ Erro ao enviar mensagem. Tente novamente.
                    </p>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Zap className="h-8 w-8 text-emerald-400" />
              <span className="text-2xl font-bold">VESSEL</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              A Vessel é especializada no desenvolvimento de soluções na área da
              beleza, que busca crescer de maneira organizada e eficiente.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-emerald-400">Contato</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="h-5 w-5" />
                <span>contato@vessel.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="h-5 w-5" />
                <span>+55 (11) 9999-9999</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-emerald-400">Social</h3>
            <p className="text-gray-400 mb-2">🚢 VAMOS EMBARCAR NESSA!</p>
            <div className="flex items-center space-x-2 text-gray-400">
              <Instagram className="h-5 w-5" />
              <span>@vessel.solutions</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {currentYear} VESSEL SOLUTIONS. TODOS OS DIREITOS RESERVADOS.</p>
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
      <ContactForm />
      <Footer />
    </div>
  );
};

export default VesselApp;

"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowRight,
  BarChart3,
  Users,
  Smartphone,
  TrendingUp,
  Zap,
  Shield,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Send,
  Star,
  CheckCircle,
  Sparkles,
  Calendar,
  Timer,
  CreditCard,
  Globe,
  Award,
  Rocket,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function HomePage() {
  const currentYear = new Date().getFullYear();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll(".scroll-animate");
    animateElements.forEach((el) => observer.observe(el));

    // Parallax effects
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll(".parallax");
      parallaxElements.forEach((element) => {
        const htmlElement = element as HTMLElement;
        const speed = htmlElement.dataset.speed || "0.1";
        const yPos = -(scrolled * parseFloat(speed));
        htmlElement.style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50/30 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-1 h-1 bg-amber-400 rounded-full opacity-60 transition-all duration-1000"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
            transform: "translate(-50%, -50%)",
          }}
        ></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-amber-400/5 to-orange-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-blue-400/5 to-purple-400/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(245, 158, 11, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(245, 158, 11, 0.6);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200px 0;
          }
          100% {
            background-position: 200px 0;
          }
        }

        .scroll-animate {
          opacity: 0;
          transform: translateY(50px);
          transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .scroll-animate.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .scroll-animate.fade-up {
          transform: translateY(80px);
        }

        .scroll-animate.fade-left {
          transform: translateX(-80px) translateY(0);
        }

        .scroll-animate.fade-right {
          transform: translateX(80px) translateY(0);
        }

        .scroll-animate.scale-up {
          transform: scale(0.8) translateY(0);
        }

        .scroll-animate.animate-in.scale-up {
          transform: scale(1) translateY(0);
        }

        .stagger-1 {
          transition-delay: 0.2s;
        }
        .stagger-2 {
          transition-delay: 0.4s;
        }
        .stagger-3 {
          transition-delay: 0.6s;
        }
        .stagger-4 {
          transition-delay: 0.8s;
        }
        .stagger-5 {
          transition-delay: 1s;
        }
        .stagger-6 {
          transition-delay: 1.2s;
        }

        .floating {
          animation: float 6s ease-in-out infinite;
        }
        .floating-delayed {
          animation: float 6s ease-in-out infinite 3s;
        }

        .glow-effect {
          animation: glow 3s ease-in-out infinite;
        }

        .shimmer-effect {
          background: linear-gradient(
            45deg,
            transparent 30%,
            rgba(255, 255, 255, 0.5) 50%,
            transparent 70%
          );
          background-size: 200px 100%;
          animation: shimmer 2s infinite;
        }

        .glass-effect {
          backdrop-filter: blur(20px);
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .gradient-text {
          background: linear-gradient(135deg, #f59e0b, #ea580c, #f59e0b);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
        }
      `}</style>

      {/* Enhanced Header */}
      <header className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-2xl border-b border-slate-200/60 shadow-xl">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-2xl glow-effect floating">
              <span className="text-white font-bold text-xl">V</span>
            </div>
            <div>
              <span className="font-bold text-3xl text-slate-900 gradient-text">
                VESSEL
              </span>
              <Badge className="ml-3 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 border-amber-200 shadow-lg">
                <Sparkles className="w-3 h-3 mr-1" />
                SOLUTION
              </Badge>
            </div>
          </div>
          <Button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 px-6 py-3">
            <Rocket className="w-4 h-4 mr-2" />
            LOGIN
          </Button>
        </div>
      </header>

      <main className="relative">
        {/* Enhanced Hero Section */}
        <section className="py-32 lg:py-48 relative overflow-hidden">
          {/* Enhanced background effects */}
          <div className="absolute inset-0">
            <div
              className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-amber-400/15 to-orange-400/10 rounded-full blur-3xl parallax"
              data-speed="0.3"
            ></div>
            <div
              className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-blue-400/10 to-purple-400/8 rounded-full blur-3xl parallax"
              data-speed="0.5"
            ></div>
            <div
              className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-br from-emerald-400/8 to-teal-400/8 rounded-full blur-3xl parallax"
              data-speed="0.4"
            ></div>
          </div>

          <div className="container mx-auto px-4 relative">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-12">
                <div className="space-y-10">
                  <Badge className="bg-gradient-to-r from-amber-100 via-orange-100 to-amber-100 text-amber-800 border-amber-200 px-6 py-3 text-base font-semibold scroll-animate stagger-1 shadow-lg">
                    ✨ Revolução na Gestão de Salões
                  </Badge>

                  <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-tight scroll-animate fade-up stagger-2">
                    TRANSFORME
                    <br />
                    <span className="relative">
                      <span className="gradient-text">SUA GESTÃO</span>
                      <div className="absolute -inset-1 bg-gradient-to-r from-amber-600/20 to-orange-500/20 blur-lg"></div>
                    </span>
                    <br />
                    COM VESSEL
                  </h1>

                  <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed font-light scroll-animate fade-up stagger-3">
                    A plataforma de gestão mais{" "}
                    <strong className="text-amber-600">inovadora</strong> e{" "}
                    <strong className="text-orange-600">intuitiva</strong> do
                    mercado para salões de beleza.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 scroll-animate fade-up stagger-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:via-orange-600 hover:to-amber-700 text-white shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-500 px-10 py-6 text-lg rounded-2xl group"
                  >
                    <Sparkles className="mr-3 h-5 w-5 group-hover:rotate-180 transition-transform duration-500" />
                    Começar Agora
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-3 border-slate-300 text-slate-700 hover:bg-slate-50 bg-white/90 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-all duration-500 px-10 py-6 text-lg rounded-2xl group"
                  >
                    <Globe className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                    Ver Demo
                  </Button>
                </div>

                {/* Enhanced trust indicators */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-10 pt-8 scroll-animate fade-up stagger-5">
                  <div className="flex items-center space-x-3">
                    <div className="flex -space-x-3">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div
                          key={i}
                          className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full border-3 border-white shadow-lg floating"
                          style={{ animationDelay: `${i * 0.5}s` }}
                        ></div>
                      ))}
                    </div>
                    <div className="ml-2">
                      <span className="text-base font-bold text-slate-800">
                        +2.500
                      </span>
                      <p className="text-sm text-slate-600 font-medium">
                        salões parceiros
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-amber-400 text-amber-400"
                      />
                    ))}
                    <div className="ml-3">
                      <span className="text-base font-bold text-slate-800">
                        4.9/5
                      </span>
                      <p className="text-sm text-slate-600">avaliação média</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced mockup section */}
              <div className="relative scroll-animate fade-left scale-up stagger-3">
                <div className="relative z-10 space-y-8">
                  {/* Main dashboard mockup */}
                  <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-all duration-700 border border-slate-200 floating">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-4 h-4 bg-red-400 rounded-full"></div>
                      <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                      <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                      <div className="flex-1 bg-slate-100 rounded-lg h-6 ml-4"></div>
                    </div>
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div className="space-y-2">
                          <div className="h-8 bg-gradient-to-r from-amber-300 to-orange-300 rounded-xl w-40 shimmer-effect"></div>
                          <div className="h-4 bg-slate-200 rounded-lg w-32"></div>
                        </div>
                        <Badge className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-3 py-2 glow-effect">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                          Online
                        </Badge>
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        <div className="h-20 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-2xl p-4 hover:scale-105 transition-transform duration-300">
                          <Calendar className="w-5 h-5 text-blue-600 mb-2" />
                          <div className="h-2 bg-blue-300 rounded w-3/4"></div>
                        </div>
                        <div className="h-20 bg-gradient-to-br from-emerald-100 to-green-200 rounded-2xl p-4 hover:scale-105 transition-transform duration-300">
                          <CreditCard className="w-5 h-5 text-emerald-600 mb-2" />
                          <div className="h-2 bg-emerald-300 rounded w-2/3"></div>
                        </div>
                        <div className="h-20 bg-gradient-to-br from-purple-100 to-violet-200 rounded-2xl p-4 hover:scale-105 transition-transform duration-300">
                          <BarChart3 className="w-5 h-5 text-purple-600 mb-2" />
                          <div className="h-2 bg-purple-300 rounded w-4/5"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating agenda card */}
                  <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-xl p-6 transform -rotate-2 hover:rotate-0 transition-all duration-700 ml-16 border border-slate-200 floating-delayed">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-lg font-bold text-slate-800 flex items-center">
                        <Timer className="w-4 h-4 mr-2 text-amber-600" />
                        Próximos Agendamentos
                      </span>
                      <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse glow-effect"></div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl transform hover:scale-105 transition-all duration-300">
                        <div className="w-4 h-4 bg-amber-500 rounded-full glow-effect"></div>
                        <div>
                          <span className="text-sm font-bold text-slate-800">
                            14:00 - Corte Premium + Barba
                          </span>
                          <p className="text-xs text-slate-600 flex items-center mt-1">
                            <Users className="w-3 h-3 mr-1" />
                            João Silva - Mesa 3
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl transform hover:scale-105 transition-all duration-300">
                        <div className="w-4 h-4 bg-blue-500 rounded-full glow-effect"></div>
                        <div>
                          <span className="text-sm font-bold text-slate-800">
                            15:30 - Coloração Especial
                          </span>
                          <p className="text-xs text-slate-600 flex items-center mt-1">
                            <Users className="w-3 h-3 mr-1" />
                            Maria Santos - Mesa 1
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced glow effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 via-orange-400/15 to-blue-400/20 rounded-3xl blur-3xl transform scale-110 floating"></div>
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full opacity-20 blur-2xl floating"></div>
                <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 blur-2xl floating-delayed"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Features Section */}
        <section className="py-32 bg-gradient-to-br from-white via-slate-50/80 to-amber-50/20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-24 scroll-animate fade-up">
              <Badge className="bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 mb-8 px-6 py-3 text-base shadow-lg">
                <Award className="w-4 h-4 mr-2" />
                Funcionalidades Premium
              </Badge>
              <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-8">
                GESTÃO <span className="gradient-text">INTELIGENTE</span>
                <br />
                PARA SEU NEGÓCIO
              </h2>
              <p className="text-xl text-slate-600 max-w-5xl mx-auto leading-relaxed font-light">
                Descubra como nossa plataforma revolucionará cada aspecto do seu
                salão com tecnologia de ponta e design intuitivo.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
              {[
                {
                  icon: Users,
                  title: "INTEGRAÇÃO TOTAL",
                  description:
                    "Centralize todos os processos em uma única plataforma inteligente e moderna.",
                  color: "from-amber-500 to-orange-600",
                  bgColor: "from-amber-50 to-orange-50",
                  delay: "stagger-1",
                },
                {
                  icon: BarChart3,
                  title: "ANALYTICS AVANÇADO",
                  description:
                    "Relatórios em tempo real com insights poderosos para decisões estratégicas.",
                  color: "from-blue-500 to-indigo-600",
                  bgColor: "from-blue-50 to-indigo-50",
                  delay: "stagger-2",
                },
                {
                  icon: Smartphone,
                  title: "MOBILIDADE TOTAL",
                  description:
                    "Controle completo na palma da mão, onde quer que você esteja.",
                  color: "from-emerald-500 to-teal-600",
                  bgColor: "from-emerald-50 to-teal-50",
                  delay: "stagger-3",
                },
              ].map((feature, index) => (
                <Card
                  key={index}
                  className={`group hover:shadow-3xl transition-all duration-700 border-0 shadow-xl bg-gradient-to-br ${feature.bgColor} hover:-translate-y-4 scroll-animate fade-up ${feature.delay} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-10 text-center relative">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 shadow-2xl floating`}
                    >
                      <feature.icon className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mb-6">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-base mb-6">
                      {feature.description}
                    </p>
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-green-600 font-semibold text-sm">
                        Implementação imediata
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Performance Section */}
        <section className="py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-amber-400/20 to-orange-500/15 rounded-full blur-3xl floating"></div>
            <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-br from-blue-400/15 to-purple-500/20 rounded-full blur-3xl floating-delayed"></div>
            <div
              className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-br from-emerald-400/10 to-teal-500/15 rounded-full blur-3xl parallax"
              data-speed="0.3"
            ></div>
          </div>

          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-24 scroll-animate fade-up">
              <Badge className="bg-white/10 text-white mb-8 px-6 py-3 border border-white/30 shadow-xl backdrop-blur-sm">
                <TrendingUp className="w-4 h-4 mr-2" />
                Performance Premium
              </Badge>
              <h2 className="text-4xl lg:text-6xl font-black mb-8 text-balance">
                SISTEMA DE
                <br />
                <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
                  ALTA PERFORMANCE
                </span>
              </h2>
              <p className="text-xl text-slate-300 mb-12 font-light max-w-4xl mx-auto">
                Tecnologia de ponta que se adapta perfeitamente às suas
                necessidades.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
              {[
                {
                  icon: TrendingUp,
                  title: "PRODUTIVIDADE +300%",
                  description:
                    "Automatização completa de tarefas repetitivas com IA integrada.",
                  gradient:
                    "from-amber-500/30 via-orange-500/20 to-amber-600/15",
                  iconGradient: "from-amber-500 to-orange-600",
                  delay: "stagger-1",
                },
                {
                  icon: Zap,
                  title: "CONTROLE INTELIGENTE",
                  description:
                    "Dashboard unificado com machine learning para otimização automática.",
                  gradient: "from-blue-500/30 via-indigo-500/20 to-blue-600/15",
                  iconGradient: "from-blue-500 to-indigo-600",
                  delay: "stagger-2",
                },
                {
                  icon: Shield,
                  title: "SEGURANÇA MILITAR",
                  description:
                    "Criptografia de nível bancário com backup automático em nuvem.",
                  gradient:
                    "from-emerald-500/30 via-teal-500/20 to-emerald-600/15",
                  iconGradient: "from-emerald-500 to-teal-600",
                  delay: "stagger-3",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${feature.gradient} rounded-3xl p-8 border border-white/20 backdrop-blur-xl hover:scale-105 transition-all duration-700 scroll-animate fade-up ${feature.delay} group relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${feature.iconGradient} rounded-2xl flex items-center justify-center mb-6 shadow-2xl floating group-hover:scale-110 transition-transform duration-500`}
                    >
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-black mb-4 text-white">
                      {feature.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed text-base">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-20 scroll-animate fade-up stagger-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-white to-slate-100 text-slate-900 hover:from-slate-100 hover:to-white shadow-2xl hover:shadow-3xl transition-all duration-500 px-12 py-6 text-lg rounded-2xl group"
              >
                <Rocket className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                DESCUBRA TODOS OS BENEFÍCIOS
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </div>
          </div>
        </section>

        {/* Enhanced Contact Section */}
        <section className="py-32 bg-gradient-to-br from-white via-slate-50/80 to-amber-50/40 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-8xl mx-auto">
              <div className="text-center mb-20 scroll-animate fade-up">
                <Badge className="bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 mb-8 px-6 py-3 text-base shadow-lg">
                  <Send className="w-4 h-4 mr-2" />
                  Entre em Contato
                </Badge>
                <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-8 text-balance">
                  PRONTO PARA
                  <br />
                  <span className="gradient-text">TRANSFORMAR</span>
                  <br />
                  SEU SALÃO?
                </h2>
                <p className="text-xl text-slate-600 max-w-5xl mx-auto leading-relaxed font-light">
                  Entre em contato conosco e descubra como a Vessel pode
                  revolucionar completamente a gestão do seu negócio.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-24 xl:gap-32 items-start">
                <div className="lg:col-span-2 order-2 lg:order-1">
                  <Card className="shadow-3xl border-0 bg-white/95 backdrop-blur-lg scroll-animate fade-right group hover:shadow-4xl transition-all duration-700">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <CardContent className="p-10 lg:p-12 relative">
                      <div className="flex items-center mb-8">
                        <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mr-4 floating">
                          <Mail className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-black text-slate-900">
                          Envie sua mensagem
                        </h3>
                      </div>

                      <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="group">
                            <label className="block text-base font-bold text-slate-700 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                              Nome Completo
                            </label>
                            <Input
                              placeholder="Seu nome completo"
                              className="h-12 border-2 border-slate-200 focus:border-amber-500 rounded-xl text-base transition-all duration-300 hover:border-amber-300"
                            />
                          </div>
                          <div className="group">
                            <label className="block text-base font-bold text-slate-700 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                              Telefone
                            </label>
                            <Input
                              placeholder="(11) 99999-9999"
                              className="h-12 border-2 border-slate-200 focus:border-amber-500 rounded-xl text-base transition-all duration-300 hover:border-amber-300"
                            />
                          </div>
                        </div>

                        <div className="group">
                          <label className="block text-base font-bold text-slate-700 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                            E-mail
                          </label>
                          <Input
                            placeholder="seu@email.com"
                            type="email"
                            className="h-12 border-2 border-slate-200 focus:border-amber-500 rounded-xl text-base transition-all duration-300 hover:border-amber-300"
                          />
                        </div>

                        <div className="group">
                          <label className="block text-base font-bold text-slate-700 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                            Nome do Salão
                          </label>
                          <Input
                            placeholder="Nome do seu salão"
                            className="h-12 border-2 border-slate-200 focus:border-amber-500 rounded-xl text-base transition-all duration-300 hover:border-amber-300"
                          />
                        </div>

                        <div className="group">
                          <label className="block text-base font-bold text-slate-700 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                            Mensagem
                          </label>
                          <Textarea
                            placeholder="Conte-nos mais sobre seu salão e como podemos ajudar você a revolucionar sua gestão..."
                            className="min-h-32 border-2 border-slate-200 focus:border-amber-500 resize-none rounded-xl text-base transition-all duration-300 hover:border-amber-300"
                          />
                        </div>

                        <Button className="w-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:via-orange-600 hover:to-amber-700 text-white h-14 text-lg shadow-2xl hover:shadow-3xl transition-all duration-500 rounded-xl group">
                          <Send className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                          Enviar Mensagem
                          <Sparkles className="ml-3 h-5 w-5 group-hover:rotate-180 transition-transform duration-500" />
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>

                <div className="lg:col-span-1 order-1 lg:order-2 scroll-animate fade-left">
                  <div className="sticky top-8 space-y-8">
                    <div>
                      <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center">
                        <Phone className="w-6 h-6 mr-3 text-amber-600" />
                        Outras formas de contato
                      </h3>

                      <div className="space-y-6">
                        {[
                          {
                            icon: Mail,
                            title: "E-mail",
                            content: "contato@vessel.com",
                            gradient: "from-amber-500 to-orange-600",
                            delay: "stagger-1",
                          },
                          {
                            icon: Phone,
                            title: "Telefone",
                            content: "+55 (11) 99999-9999",
                            gradient: "from-blue-500 to-indigo-600",
                            delay: "stagger-2",
                          },
                          {
                            icon: MapPin,
                            title: "Localização",
                            content: "São Paulo, SP - Brasil",
                            gradient: "from-emerald-500 to-teal-600",
                            delay: "stagger-3",
                          },
                        ].map((contact, index) => (
                          <Card
                            key={index}
                            className={`border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 scroll-animate fade-up ${contact.delay}`}
                          >
                            <CardContent className="p-6">
                              <div className="flex items-center space-x-4">
                                <div
                                  className={`w-14 h-14 bg-gradient-to-br ${contact.gradient} rounded-xl flex items-center justify-center flex-shrink-0 shadow-xl floating group-hover:scale-110 transition-transform duration-500`}
                                >
                                  <contact.icon className="h-6 w-6 text-white" />
                                </div>
                                <div className="min-w-0">
                                  <h4 className="font-black text-lg text-slate-900 mb-2">
                                    {contact.title}
                                  </h4>
                                  <p className="text-slate-600 text-base break-all">
                                    {contact.content}
                                  </p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 rounded-2xl p-6 border-2 border-amber-200 shadow-xl scroll-animate scale-up stagger-4">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mr-3 floating">
                          <Timer className="w-5 h-5 text-white" />
                        </div>
                        <h4 className="text-xl font-black text-slate-900">
                          Horário de Atendimento
                        </h4>
                      </div>
                      <div className="space-y-3 text-slate-700">
                        <div className="flex justify-between items-center p-3 bg-white/80 rounded-lg">
                          <span className="font-medium text-sm">
                            Segunda a Sexta:
                          </span>
                          <span className="text-amber-700 font-medium text-sm">
                            9h às 18h
                          </span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-white/80 rounded-lg">
                          <span className="font-medium text-sm">Sábado:</span>
                          <span className="text-amber-700 font-medium text-sm">
                            9h às 14h
                          </span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-white/80 rounded-lg">
                          <span className="font-medium text-sm">Domingo:</span>
                          <span className="text-slate-500 font-medium text-sm">
                            Fechado
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Instagram Section */}
        <section className="py-32 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full opacity-20">
              <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full blur-3xl floating"></div>
              <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full blur-3xl floating-delayed"></div>
              <div
                className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-3xl parallax"
                data-speed="0.4"
              ></div>
            </div>
          </div>

          <div className="container mx-auto px-4 text-center relative">
            <div className="scroll-animate fade-up">
              <Badge className="bg-white/10 backdrop-blur-sm border border-white/30 text-white mb-8 px-6 py-3 text-base shadow-xl">
                <Instagram className="w-4 h-4 mr-2" />
                Comunidade
              </Badge>
              <h2 className="text-2xl lg:text-4xl font-black mb-8 text-white">
                VAMOS EMBARCAR
                <br />
                <span className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
                  NESSA JORNADA!
                </span>
              </h2>
              <p className="text-lg text-blue-100 mb-12 max-w-4xl mx-auto font-light">
                Junte-se à nossa comunidade exclusiva e acompanhe as últimas
                novidades, dicas e sucessos dos nossos parceiros!
              </p>
            </div>

            <div className="max-w-2xl mx-auto scroll-animate scale-up stagger-2">
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 text-white mb-12 w-full shadow-3xl hover:shadow-4xl transition-all duration-500 h-14 text-lg rounded-xl group"
              >
                <Instagram className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                SIGA-NOS NO INSTAGRAM
                <Sparkles className="ml-3 h-5 w-5 group-hover:rotate-180 transition-transform duration-500" />
              </Button>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-3xl group hover:shadow-4xl transition-all duration-700">
                <div className="w-full h-48 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-xl mb-4 shadow-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <div className="text-center">
                    <Instagram className="w-12 h-12 text-white/80 mx-auto mb-3 floating" />
                    <p className="text-white/80 text-base font-medium">
                      @vessel.solution
                    </p>
                  </div>
                </div>
                <p className="text-purple-100 text-lg font-bold">
                  Navegando rumo ao sucesso do seu negócio
                </p>
                <div className="flex items-center justify-center mt-4 space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                  <span className="text-white font-medium ml-2 text-sm">
                    +10k seguidores
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full blur-3xl floating"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-3xl floating-delayed"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center space-y-10 scroll-animate fade-up">
            <div className="flex items-center justify-center space-x-4 group">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-2xl floating group-hover:scale-110 transition-transform duration-500">
                <span className="text-white font-black text-xl">V</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="font-black text-3xl gradient-text">
                  VESSEL
                </span>
                <Badge className="bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 text-sm px-3 py-1 shadow-lg">
                  <Award className="w-3 h-3 mr-1" />
                  SOLUTION
                </Badge>
              </div>
            </div>

            <p className="text-slate-300 max-w-4xl mx-auto text-lg leading-relaxed font-light">
              A VESSEL É A ESCOLHA INTELIGENTE PARA NEGÓCIOS NA ÁREA DA BELEZA
              QUE BUSCAM CRESCER DE MANEIRA ORGANIZADA, EFICIENTE E INOVADORA.
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: Mail,
                  title: "E-mail",
                  content: "contato@vessel.com",
                  gradient: "from-amber-500 to-orange-600",
                },
                {
                  icon: Phone,
                  title: "Telefone",
                  content: "+55 (11) 99999-9999",
                  gradient: "from-blue-500 to-indigo-600",
                },
                {
                  icon: MapPin,
                  title: "Localização",
                  content: "São Paulo, SP - Brasil",
                  gradient: "from-emerald-500 to-teal-600",
                },
              ].map((contact, index) => (
                <div key={index} className="text-center group">
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${contact.gradient} rounded-xl flex items-center justify-center mx-auto mb-3 shadow-2xl floating group-hover:scale-110 transition-transform duration-500`}
                  >
                    <contact.icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-black text-lg mb-2 text-white">
                    {contact.title}
                  </h4>
                  <p className="text-slate-300 text-base">{contact.content}</p>
                </div>
              ))}
            </div>

            <div className="pt-10 border-t border-slate-700/50">
              <div className="flex items-center justify-center">
                <p className="text-slate-400 text-base text-center">
                  ©{currentYear} VESSEL SOLUTION - TODOS OS DIREITOS RESERVADOS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

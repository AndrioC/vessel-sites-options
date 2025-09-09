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
  InstagramIcon,
} from "lucide-react";
import { useEffect, useState } from "react";

import Link from "next/link";

export default function HomePage() {
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
        const yPos = -(scrolled * Number.parseFloat(speed));
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
            transform: translateY(-10px);
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
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .scroll-animate.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .scroll-animate.fade-up {
          transform: translateY(40px);
        }

        .scroll-animate.fade-left {
          transform: translateX(-40px) translateY(0);
        }

        .scroll-animate.fade-right {
          transform: translateX(40px) translateY(0);
        }

        .scroll-animate.scale-up {
          transform: scale(0.95) translateY(0);
        }

        .scroll-animate.animate-in.scale-up {
          transform: scale(1) translateY(0);
        }

        .stagger-1 {
          transition-delay: 0.1s;
        }
        .stagger-2 {
          transition-delay: 0.2s;
        }
        .stagger-3 {
          transition-delay: 0.3s;
        }
        .stagger-4 {
          transition-delay: 0.4s;
        }
        .stagger-5 {
          transition-delay: 0.5s;
        }
        .stagger-6 {
          transition-delay: 0.6s;
        }

        .floating {
          animation: float 4s ease-in-out infinite;
        }
        .floating-delayed {
          animation: float 4s ease-in-out infinite 2s;
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

        /* Fixed hover animations that don't affect layout */
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-4px);
        }

        .hover-scale {
          transition: transform 0.3s ease;
        }
        .hover-scale:hover {
          transform: scale(1.02);
        }

        .hover-rotate {
          transition: transform 0.3s ease;
        }
        .hover-rotate:hover {
          transform: rotate(2deg);
        }
      `}</style>

      {/* Enhanced Header */}
      <header className="fixed top-0 z-50 w-full bg-white backdrop-blur-2xl border-b border-slate-200/60 shadow-xl">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <img
                src="/logo-no-name-black.svg"
                alt="VESSEL Logo"
                className="h-15 w-auto"
              />
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/model-05/about"
              className="relative group text-slate-700 font-medium transition-all duration-300 px-4 py-2.5 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100/70 shadow-sm border border-slate-200/60 hover:border-amber-200/50 hover:shadow-md"
            >
              <span className="relative z-10 flex items-center">
                <Users className="w-4 h-4 mr-2 text-amber-600/80" />
                Sobre nós
              </span>

              {/* Efeito de brilho sutil no estado normal */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-400/5 to-orange-400/3 opacity-60"></div>

              {/* Efeito de hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/8 to-orange-500/6 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Borda gradiente no hover */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-px">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/40 to-orange-500/40 rounded-xl"></div>
                <div className="absolute inset-px bg-gradient-to-br from-slate-50 to-slate-100/70 rounded-[11px]"></div>
              </div>
            </Link>
          </nav>

          <Button className="bg-amber-600 hover:bg-amber-700 text-white shadow-xl hover:shadow-2xl hover-scale transition-all duration-300 px-6 py-3">
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
                    className="cursor-pointer bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:via-orange-600 hover:to-amber-700 text-white shadow-2xl hover:shadow-3xl hover-scale transition-all duration-500 px-10 py-6 text-lg rounded-2xl group"
                  >
                    <Sparkles className="mr-3 h-5 w-5 group-hover:rotate-180 transition-transform duration-500" />
                    Começar Agora
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="cursor-pointer border-3 border-slate-300 text-slate-700 hover:bg-slate-50 bg-white/90 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-all duration-500 px-10 py-6 text-lg rounded-2xl group"
                  >
                    <Globe className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                    Ver Demo
                  </Button>
                </div>
              </div>

              {/* Enhanced mockup section */}
              <div className="relative scroll-animate fade-left scale-up stagger-3">
                <div className="relative z-10 space-y-8">
                  {/* Main dashboard mockup */}
                  <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-8 hover-rotate hover-lift transition-all duration-700 border border-slate-200 floating">
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
                        <div className="h-20 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-2xl p-4 hover-scale transition-transform duration-300">
                          <Calendar className="w-5 h-5 text-blue-600 mb-2" />
                          <div className="h-2 bg-blue-300 rounded w-3/4"></div>
                        </div>
                        <div className="h-20 bg-gradient-to-br from-emerald-100 to-green-200 rounded-2xl p-4 hover-scale transition-transform duration-300">
                          <CreditCard className="w-5 h-5 text-emerald-600 mb-2" />
                          <div className="h-2 bg-emerald-300 rounded w-2/3"></div>
                        </div>
                        <div className="h-20 bg-gradient-to-br from-purple-100 to-violet-200 rounded-2xl p-4 hover-scale transition-transform duration-300">
                          <BarChart3 className="w-5 h-5 text-purple-600 mb-2" />
                          <div className="h-2 bg-purple-300 rounded w-4/5"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating agenda card */}
                  <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-xl p-6 hover-rotate hover-lift transition-all duration-700 ml-16 border border-slate-200 floating-delayed">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-lg font-bold text-slate-800 flex items-center">
                        <Timer className="w-4 h-4 mr-2 text-amber-600" />
                        Próximos Agendamentos
                      </span>
                      <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse glow-effect"></div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl hover-scale transition-all duration-300">
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
                      <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl hover-scale transition-all duration-300">
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
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 via-orange-400/15 to-blue-400/20 rounded-3xl blur-3xl floating opacity-50"></div>
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
                  className={`group hover:shadow-3xl hover-lift transition-all duration-700 border-0 shadow-xl bg-gradient-to-br ${feature.bgColor} scroll-animate fade-up ${feature.delay} relative overflow-hidden`}
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
        <section className="py-32 relative overflow-hidden bg-slate-900">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900">
            <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-amber-400/20 to-orange-500/15 rounded-full blur-3xl floating"></div>
            <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-br from-blue-400/15 to-purple-500/20 rounded-full blur-3xl floating-delayed"></div>
            <div
              className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-br from-emerald-400/10 to-teal-500/15 rounded-full blur-3xl parallax"
              data-speed="0.3"
            ></div>
          </div>

          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-24 scroll-animate fade-up">
              <Badge className="bg-slate-800 text-white mb-8 px-6 py-3 border border-white/30 shadow-xl backdrop-blur-sm">
                <TrendingUp className="w-4 h-4 mr-2" />
                Performance Premium
              </Badge>
              <h2 className="text-4xl lg:text-6xl font-black mb-8 text-balance text-white">
                SISTEMA DE
                <br />
                <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
                  ALTA PERFORMANCE
                </span>
              </h2>
              <p className="text-xl text-slate-100 mb-12 font-light max-w-4xl mx-auto">
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
                  className={`bg-slate-800 rounded-3xl p-8 border border-white/20 backdrop-blur-xl hover-lift transition-all duration-700 scroll-animate fade-up ${feature.delay} group relative overflow-hidden`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-50`}
                  ></div>
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
                    <p className="text-slate-100 leading-relaxed text-base">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-32 bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full opacity-20">
              <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full blur-3xl floating"></div>
              <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-3xl floating-delayed"></div>
            </div>
          </div>

          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-24 scroll-animate fade-up">
              <Badge className="bg-white/10 text-white mb-8 px-6 py-3 border border-white/30 shadow-xl backdrop-blur-sm">
                <Award className="w-4 h-4 mr-2" />
                Nossos Diferenciais
              </Badge>
              <h2 className="text-4xl lg:text-6xl font-black mb-8 text-balance">
                NOSSOS
                <br />
                <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
                  DIFERENCIAIS
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {[
                {
                  title: "TECNOLOGIA PRÓPRIA",
                  icon: Zap,
                  gradient: "from-amber-500 to-orange-600",
                  delay: "stagger-1",
                },
                {
                  title: "ATENDIMENTO PERSONALIZADO",
                  icon: Users,
                  gradient: "from-blue-500 to-indigo-600",
                  delay: "stagger-2",
                },
                {
                  title: "SUPORTE",
                  icon: Shield,
                  gradient: "from-emerald-500 to-teal-600",
                  delay: "stagger-3",
                },
                {
                  title: "PLATAFORMA CUSTOMIZÁVEL",
                  icon: Smartphone,
                  gradient: "from-purple-500 to-violet-600",
                  delay: "stagger-4",
                },
                {
                  title: "CONSULTORIA",
                  icon: Award,
                  gradient: "from-pink-500 to-rose-600",
                  delay: "stagger-5",
                },
                {
                  title: "TREINAMENTOS",
                  icon: BarChart3,
                  gradient: "from-cyan-500 to-blue-600",
                  delay: "stagger-6",
                },
                {
                  title: "ACOMPANHAMENTO MAIS PRÓXIMO AO CLIENTE",
                  icon: TrendingUp,
                  gradient: "from-orange-500 to-red-600",
                  delay: "stagger-1",
                },
              ].map((diferencial, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover-lift transition-all duration-700 scroll-animate fade-up ${diferencial.delay} group relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative text-center">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${diferencial.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-2xl floating group-hover:scale-110 transition-transform duration-500 mx-auto`}
                    >
                      <diferencial.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-black mb-4 text-white text-balance">
                      {diferencial.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-32 bg-gradient-to-br from-white via-slate-50/80 to-amber-50/20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-24 scroll-animate fade-up">
              <Badge className="bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 mb-8 px-6 py-3 text-base shadow-lg">
                <Zap className="w-4 h-4 mr-2" />
                Funcionalidades Completas
              </Badge>
              <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-8">
                FUNCIONALIDADES
                <br />
                <span className="gradient-text">COMPLETAS</span>
              </h2>
            </div>

            {/* Primeira linha de funcionalidades */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 max-w-7xl mx-auto">
              {[
                {
                  title: "Agenda",
                  description:
                    "Mais funções e personalização para facilitar e agilizar sua rotina de agendamentos. Nosso sistema foi projetado para simplificar o processo, garantindo que você tenha mais controle e eficiência no gerenciamento dos seus compromissos.",
                  icon: Calendar,
                  gradient: "from-amber-500 to-orange-600",
                  bgGradient: "from-amber-50 to-orange-50",
                  delay: "stagger-1",
                },
                {
                  title: "Comunicação com o Cliente",
                  description:
                    "Nossa plataforma permite a automatização de mensagens, oferecendo uma comunicação direta e prática com seus clientes via WhatsApp. Isso fortalece o relacionamento e mantém o cliente sempre informado.",
                  icon: Smartphone,
                  gradient: "from-blue-500 to-indigo-600",
                  bgGradient: "from-blue-50 to-indigo-50",
                  delay: "stagger-2",
                },
                {
                  title: "Estoque e Produtos",
                  description:
                    "Controle total e personalizado da gestão de estoque, com monitoramento de entradas, saídas e consumo. Utilizamos relatórios técnicos como Kardex, curva ABC, inventários e giro de estoque, além de auditorias que garantem uma visão detalhada do seu estoque.",
                  icon: BarChart3,
                  gradient: "from-emerald-500 to-teal-600",
                  bgGradient: "from-emerald-50 to-teal-50",
                  delay: "stagger-3",
                },
                {
                  title: "Serviços",
                  description:
                    "Funções exclusivas para a construção de tabelas de preços, permitindo análises completas de faturamento e custos, garantindo uma visão precisa e otimizada dos serviços oferecidos.",
                  icon: Award,
                  gradient: "from-purple-500 to-violet-600",
                  bgGradient: "from-purple-50 to-violet-50",
                  delay: "stagger-4",
                },
              ].map((funcionalidade, index) => (
                <Card
                  key={index}
                  className={`group hover:shadow-3xl hover-lift transition-all duration-700 border-0 shadow-xl bg-gradient-to-br ${funcionalidade.bgGradient} scroll-animate fade-up ${funcionalidade.delay} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-8 text-center relative">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${funcionalidade.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 shadow-2xl floating`}
                    >
                      <funcionalidade.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-black text-slate-900 mb-4">
                      {funcionalidade.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {funcionalidade.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Segunda linha de funcionalidades */}
            <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
              {[
                {
                  title: "Financeiro",
                  description:
                    "Gestão financeira completa e customizada, com controle de entradas (receitas) e saídas (despesas), conciliações financeiras, fluxo de caixa, DRE, relatórios gerenciais e auditorias. Tudo para que sua empresa tenha uma visão clara e estratégica das finanças.",
                  icon: CreditCard,
                  gradient: "from-green-500 to-emerald-600",
                  bgGradient: "from-green-50 to-emerald-50",
                  delay: "stagger-1",
                },
                {
                  title: "Frente de Caixa",
                  description:
                    "Funções otimizadas para facilitar o atendimento ao cliente, com interface direta ao módulo financeiro e auditoria integrada, proporcionando um processo de venda mais ágil e seguro.",
                  icon: Users,
                  gradient: "from-blue-500 to-cyan-600",
                  bgGradient: "from-blue-50 to-cyan-50",
                  delay: "stagger-2",
                },
                {
                  title: "Configurações e Parametrizações",
                  description:
                    "Oferecemos personalização total, adaptando o sistema à gestão do seu negócio. Organize processos de forma simplificada, com níveis de acesso diferenciados e módulos que suportam a gestão unificada ou individual de multiempresas, franquias ou filiais.",
                  icon: Shield,
                  gradient: "from-purple-500 to-indigo-600",
                  bgGradient: "from-purple-50 to-indigo-50",
                  delay: "stagger-3",
                },
              ].map((funcionalidade, index) => (
                <Card
                  key={index}
                  className={`group hover:shadow-3xl hover-lift transition-all duration-700 border-0 shadow-xl bg-gradient-to-br ${funcionalidade.bgGradient} scroll-animate fade-up ${funcionalidade.delay} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-10 text-center relative">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${funcionalidade.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 shadow-2xl floating`}
                    >
                      <funcionalidade.icon className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mb-6">
                      {funcionalidade.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-base">
                      {funcionalidade.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full opacity-20">
              <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full blur-3xl floating"></div>
              <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-3xl floating-delayed"></div>
            </div>
          </div>

          <div className="container mx-auto px-4 relative">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
              {/* Texto */}
              <div className="scroll-animate fade-up lg:fade-right">
                <Badge className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-300 mb-6 md:mb-8 px-4 md:px-6 py-2 md:py-3 text-sm md:text-base shadow-xl border border-amber-400/30">
                  <Star className="w-3 md:w-4 h-3 md:h-4 mr-2" />
                  Programa Exclusivo
                </Badge>
                <h2 className="text-3xl md:text-4xl lg:text-6xl font-black mb-6 md:mb-8">
                  CLUB VIP
                  <br />
                  <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
                    TRIPULANTES
                  </span>
                  <br />
                  VESSEL
                </h2>
                <div className="space-y-4 md:space-y-6 text-base md:text-lg text-slate-300">
                  <p>
                    Club VIP Tripulantes é um grupo seleto e exclusivo para os
                    primeiros clientes da Vessel. Esses membros têm acesso
                    antecipado à todas as novidades e atualizações do sistema,
                    além de oportunidades exclusivas dentro do ecossistema
                    Vessel.
                  </p>
                  <p>
                    Os participantes terão acesso a promoções exclusivas e
                    contarão com a presença de parceiros estratégicos da Vessel,
                    como marketing, gestão financeira, inovação, jurídico, RH,
                    contabilidade e muito mais. Esses parceiros trarão conteúdos
                    práticos, workshops, e descontos especiais, agregando ainda
                    mais valor ao club vip tripulantes.
                  </p>
                  <p className="text-amber-300 font-semibold text-lg md:text-xl">
                    Agradecemos por fazer parte da Vessel. O seu sucesso é
                    importante para nós, e é um privilégio ter você conosco
                    nessa jornada.
                  </p>
                </div>
                <Button
                  size="lg"
                  className="mt-6 md:mt-8 w-full md:w-auto bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 
                     hover:from-amber-600 hover:via-orange-600 hover:to-amber-700 text-white shadow-2xl 
                     hover:shadow-3xl hover-scale transition-all duration-500 px-6 md:px-10 py-4 md:py-6 
                     text-base md:text-lg rounded-2xl group"
                >
                  <Star className="mr-2 md:mr-3 h-4 md:h-5 w-4 md:w-5 group-hover:scale-110 transition-transform duration-300" />
                  FAZER PARTE DO CLUB VIP
                  <ArrowRight className="ml-2 md:ml-3 h-4 md:h-5 w-4 md:w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>

              {/* Card */}
              <div className="scroll-animate fade-up lg:fade-left mt-8 lg:mt-0">
                <div className="relative">
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl md:rounded-3xl p-6 md:p-8 border border-white/20 shadow-3xl">
                    <div className="text-center mb-6 md:mb-8">
                      <div className="w-16 md:w-20 h-16 md:h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-2xl">
                        <Star className="w-8 md:w-10 h-8 md:h-10 text-white" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-black text-white mb-2">
                        BENEFÍCIOS EXCLUSIVOS
                      </h3>
                    </div>
                    <div className="space-y-3 md:space-y-4">
                      {[
                        "Acesso antecipado às novidades",
                        "Promoções exclusivas",
                        "Parceiros estratégicos",
                        "Workshops e treinamentos",
                        "Descontos especiais",
                        "Suporte prioritário",
                      ].map((beneficio, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-3 p-3 bg-white/5 rounded-xl"
                        >
                          <CheckCircle className="w-4 md:w-5 h-4 md:h-5 text-amber-400 flex-shrink-0" />
                          <span className="text-white font-medium text-sm md:text-base">
                            {beneficio}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Efeitos decorativos */}
                  <div className="absolute -top-4 md:-top-6 -right-4 md:-right-6 w-16 md:w-24 h-16 md:h-24 bg-gradient-to-br from-amber-400/30 to-orange-500/30 rounded-full blur-2xl floating-delayed"></div>
                  <div className="absolute -bottom-4 md:-bottom-6 -left-4 md:-left-6 w-20 md:w-32 h-20 md:h-32 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-2xl floating"></div>
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
              <Link
                href="https://instagram.com/vessel.br"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="cursor-pointer bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 
               hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 text-white 
               mb-12 w-full shadow-3xl hover:shadow-4xl hover-scale transition-all 
               duration-500 h-14 text-lg rounded-xl group"
                >
                  <InstagramIcon className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  SIGA-NOS NO INSTAGRAM
                  <Sparkles className="ml-3 h-5 w-5 group-hover:rotate-180 transition-transform duration-500" />
                </Button>
              </Link>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-3xl group hover:shadow-4xl transition-all duration-700">
                <div className="w-full h-48 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-xl mb-4 shadow-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <div className="text-center">
                    <Instagram className="w-12 h-12 text-white/80 mx-auto mb-3 floating" />
                    <p className="text-white/80 text-base font-medium">
                      @vessel.br
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
                </div>
              </div>
            </div>
          </div>
        </section>

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

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-24 xl:gap-32 items-center">
                {/* Formulário */}
                <div className="lg:col-span-2 order-2 lg:order-1">
                  <Card className="shadow-3xl border-0 bg-white/95 backdrop-blur-lg scroll-animate fade-up lg:fade-right group hover:shadow-4xl transition-all duration-700">
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

                        <Button className="cursor-pointer w-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:via-orange-600 hover:to-amber-700 text-white h-14 text-lg shadow-2xl hover:shadow-3xl hover-scale transition-all duration-500 rounded-xl group">
                          <Send className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                          Enviar Mensagem
                          <Sparkles className="ml-3 h-5 w-5 group-hover:rotate-180 transition-transform duration-500" />
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>

                {/* Outras formas de contato */}
                <div className="lg:col-span-1 order-1 lg:order-2 scroll-animate fade-up lg:fade-left">
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
                            content: "contato@vesselbr.com",
                            gradient: "from-amber-500 to-orange-600",
                            delay: "stagger-1",
                          },
                          {
                            icon: Phone,
                            title: "Telefone",
                            content: "(11) 98958-9292",
                            gradient: "from-blue-500 to-indigo-600",
                            delay: "stagger-2",
                          },
                          {
                            icon: InstagramIcon,
                            title: "Instagram",
                            content: "@vessel.br",
                            gradient: "from-pink-500 to-purple-600",
                            delay: "stagger-3",
                          },
                        ].map((contact, index) => (
                          <Card
                            key={index}
                            className={`border-0 shadow-xl hover:shadow-2xl hover-lift transition-all duration-500 group scroll-animate fade-up ${contact.delay}`}
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

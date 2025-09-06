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
} from "lucide-react";
import { useEffect } from "react";

export default function HomePage() {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
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

    // Observar todos os elementos com classe 'scroll-animate'
    const animateElements = document.querySelectorAll(".scroll-animate");
    animateElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50/20">
      <style jsx global>{`
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
          transform: translateY(50px);
        }

        .scroll-animate.fade-left {
          transform: translateX(-50px);
        }

        .scroll-animate.fade-right {
          transform: translateX(50px);
        }

        .scroll-animate.scale-up {
          transform: scale(0.9);
        }

        .scroll-animate.animate-in.scale-up {
          transform: scale(1);
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
      `}</style>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200/60 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <img
                src="/logo-no-name-black.svg"
                alt="VESSEL Logo"
                className="h-15 w-auto"
              />
            </div>
          </div>
          <Button
            variant="outline"
            className="border-amber-300 text-amber-700 hover:bg-amber-50 bg-white/80 shadow-sm"
          >
            LOGIN
          </Button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-24 lg:py-36 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-orange-400/3 to-blue-500/5"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-amber-400/10 to-orange-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-400/8 to-purple-400/8 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 relative">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-10">
                <div className="space-y-8">
                  <Badge className="bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 border-amber-200 px-4 py-2 text-sm font-medium scroll-animate stagger-1">
                    ✨ Gestão Inteligente para Salões
                  </Badge>
                  <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight text-balance scroll-animate fade-up stagger-2">
                    TRANSFORME A
                    <span className="text-transparent bg-gradient-to-r from-amber-600 via-orange-500 to-amber-500 bg-clip-text">
                      {" "}
                      GESTÃO{" "}
                    </span>
                    DO SEU SALÃO COM A VESSEL
                  </h1>
                  <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed text-pretty font-light scroll-animate fade-up stagger-3">
                    Simplifique processos, aumente a produtividade e tenha total
                    controle com nossa plataforma de gestão inovadora e
                    intuitiva.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 scroll-animate fade-up stagger-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:via-orange-600 hover:to-amber-700 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 px-8 py-4 text-lg"
                  >
                    Começar Agora
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg"
                  >
                    Ver Demonstração
                  </Button>
                </div>

                <div className="flex items-center space-x-8 pt-4 scroll-animate fade-up stagger-5">
                  <div className="flex items-center space-x-2">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full border-2 border-white"
                        ></div>
                      ))}
                    </div>
                    <span className="text-sm text-slate-600 font-medium">
                      +500 salões confiam
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                    <span className="text-sm text-slate-600 font-medium ml-2">
                      4.9/5
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative scroll-animate fade-left scale-up stagger-3">
                <div className="relative z-10 space-y-6">
                  <div className="bg-white rounded-3xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-all duration-500 border border-slate-100">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-4 h-4 bg-red-400 rounded-full"></div>
                      <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                      <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="h-6 bg-gradient-to-r from-amber-200 to-orange-200 rounded-lg w-32"></div>
                        <Badge className="bg-green-100 text-green-800 text-xs">
                          Online
                        </Badge>
                      </div>
                      <div className="h-4 bg-slate-200 rounded-lg w-3/4"></div>
                      <div className="h-4 bg-slate-100 rounded-lg w-1/2"></div>
                      <div className="grid grid-cols-3 gap-2 mt-4">
                        <div className="h-8 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg"></div>
                        <div className="h-8 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-lg"></div>
                        <div className="h-8 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg"></div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-3xl shadow-xl p-8 transform -rotate-3 hover:rotate-0 transition-all duration-500 ml-12 border border-slate-100">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-lg font-semibold text-slate-800">
                        Agenda do Dia
                      </span>
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 p-3 bg-amber-50 rounded-xl">
                        <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                        <div>
                          <span className="text-sm font-medium text-slate-800">
                            14:00 - Corte + Barba
                          </span>
                          <p className="text-xs text-slate-500">João Silva</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-xl">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <div>
                          <span className="text-sm font-medium text-slate-800">
                            15:30 - Coloração
                          </span>
                          <p className="text-xs text-slate-500">Maria Santos</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/15 via-orange-400/10 to-blue-400/15 rounded-3xl blur-3xl transform scale-110"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-gradient-to-br from-white to-slate-50/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20 scroll-animate fade-up">
              <Badge className="bg-slate-100 text-slate-700 mb-6 px-4 py-2">
                Funcionalidades
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 text-balance">
                A GESTÃO INTELIGENTE E SIMPLES QUE SEU NEGÓCIO PRECISA!
              </h2>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto text-pretty leading-relaxed">
                Conheça as funcionalidades da Vessel e veja como ela pode
                agilizar ou otimizar cada processo do seu negócio de forma
                intuitiva e eficiente.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-white to-slate-50/50 hover:-translate-y-2 scroll-animate fade-up stagger-1">
                <CardContent className="p-10 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">
                    INTEGRAÇÃO COMPLETA
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    Controle todos os seus processos em um único lugar com
                    interface intuitiva.
                  </p>
                  <div className="mt-6 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-sm text-green-600 font-medium">
                      Tudo integrado
                    </span>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-white to-slate-50/50 hover:-translate-y-2 scroll-animate fade-up stagger-2">
                <CardContent className="p-10 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    <BarChart3 className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">
                    RELATÓRIOS
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    Obtenha insights poderosos para tomar as melhores decisões
                    estratégicas.
                  </p>
                  <div className="mt-6 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-sm text-green-600 font-medium">
                      Dados em tempo real
                    </span>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-white to-slate-50/50 hover:-translate-y-2 scroll-animate fade-up stagger-3">
                <CardContent className="p-10 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    <Smartphone className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">
                    FÁCIL DE USAR
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    Tenha na palma da mão todo o controle do seu negócio, onde
                    estiver.
                  </p>
                  <div className="mt-6 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-sm text-green-600 font-medium">
                      Interface intuitiva
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Performance Section */}
        <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-20 scroll-animate fade-up">
              <Badge className="bg-white/10 text-white mb-6 px-4 py-2 border border-white/20">
                Performance
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
                UM SISTEMA DE ALTA PERFORMANCE
              </h2>
              <p className="text-2xl text-slate-300 mb-8 font-light">
                QUE ATENDE AS SUAS NECESSIDADES.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-amber-500/20 via-orange-500/15 to-amber-600/10 rounded-3xl p-10 border border-amber-500/30 backdrop-blur-sm hover:scale-105 transition-all duration-300 scroll-animate fade-up stagger-1">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">
                    AUMENTO DE PRODUTIVIDADE
                  </h3>
                </div>
                <p className="text-slate-300 leading-relaxed text-lg">
                  Reduza tempo perdido com tarefas repetitivas e elimine a
                  operação manual.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-500/20 via-indigo-500/15 to-blue-600/10 rounded-3xl p-10 border border-blue-500/30 backdrop-blur-sm hover:scale-105 transition-all duration-300 scroll-animate fade-up stagger-2">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">GESTÃO CENTRALIZADA</h3>
                </div>
                <p className="text-slate-300 leading-relaxed text-lg">
                  Tenha tudo o que você precisa em único lugar, organizado e
                  acessível.
                </p>
              </div>

              <div className="bg-gradient-to-br from-emerald-500/20 via-teal-500/15 to-emerald-600/10 rounded-3xl p-10 border border-emerald-500/30 backdrop-blur-sm hover:scale-105 transition-all duration-300 scroll-animate fade-up stagger-3">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">
                    INTUITIVA E PERSONALIZÁVEL
                  </h3>
                </div>
                <p className="text-slate-300 leading-relaxed text-lg">
                  A plataforma se adapta às suas necessidades de maneira fácil e
                  rápida.
                </p>
              </div>
            </div>

            <div className="text-center mt-16 scroll-animate fade-up stagger-4">
              <Button
                size="lg"
                className="bg-white text-slate-900 hover:bg-slate-100 shadow-xl hover:shadow-2xl transition-all duration-300 px-10 py-4 text-lg"
              >
                SAIBA MAIS SOBRE OS BENEFÍCIOS
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-gradient-to-br from-white via-slate-50/50 to-amber-50/30">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16 scroll-animate fade-up">
                <Badge className="bg-amber-100 text-amber-800 mb-6 px-4 py-2">
                  Entre em Contato
                </Badge>
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 text-balance">
                  PRONTO PARA TRANSFORMAR SEU SALÃO?
                </h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto text-pretty">
                  Entre em contato conosco e descubra como a Vessel pode
                  revolucionar a gestão do seu negócio.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 xl:gap-36 items-start">
                <div className="lg:col-span-2 order-2 lg:order-1">
                  <Card className="shadow-2xl border-0 bg-white scroll-animate fade-right">
                    <CardContent className="p-8 lg:p-10">
                      <h3 className="text-2xl font-bold text-slate-900 mb-8">
                        Envie sua mensagem
                      </h3>
                      <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                              Nome
                            </label>
                            <Input
                              placeholder="Seu nome completo"
                              className="h-12 border-slate-200 focus:border-amber-500"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                              Telefone
                            </label>
                            <Input
                              placeholder="(11) 99999-9999"
                              className="h-12 border-slate-200 focus:border-amber-500"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            E-mail
                          </label>
                          <Input
                            placeholder="seu@email.com"
                            type="email"
                            className="h-12 border-slate-200 focus:border-amber-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            Nome do Salão
                          </label>
                          <Input
                            placeholder="Nome do seu salão"
                            className="h-12 border-slate-200 focus:border-amber-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            Mensagem
                          </label>
                          <Textarea
                            placeholder="Conte-nos mais sobre seu salão e como podemos ajudar..."
                            className="min-h-32 border-slate-200 focus:border-amber-500 resize-none"
                          />
                        </div>
                        <Button className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white h-12 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                          <Send className="mr-2 h-5 w-5" />
                          Enviar Mensagem
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>

                {/* Informações de Contato */}
                <div className="lg:col-span-1 order-1 lg:order-2 scroll-animate fade-left">
                  <div className="sticky top-8 space-y-8">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-6">
                        Outras formas de contato
                      </h3>
                      <div className="space-y-4">
                        <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                          <CardContent className="p-6">
                            <div className="flex items-center space-x-4">
                              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                <Mail className="h-6 w-6 text-white" />
                              </div>
                              <div className="min-w-0">
                                <h4 className="font-semibold text-slate-900">
                                  E-mail
                                </h4>
                                <p className="text-slate-600 break-all">
                                  contato@vessel.com
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>

                        <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                          <CardContent className="p-6">
                            <div className="flex items-center space-x-4">
                              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                <Phone className="h-6 w-6 text-white" />
                              </div>
                              <div className="min-w-0">
                                <h4 className="font-semibold text-slate-900">
                                  Telefone
                                </h4>
                                <p className="text-slate-600">
                                  +55 (11) 99999-9999
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>

                        <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                          <CardContent className="p-6">
                            <div className="flex items-center space-x-4">
                              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                <MapPin className="h-6 w-6 text-white" />
                              </div>
                              <div className="min-w-0">
                                <h4 className="font-semibold text-slate-900">
                                  Endereço
                                </h4>
                                <p className="text-slate-600">
                                  São Paulo, SP - Brasil
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200">
                      <h4 className="text-xl font-bold text-slate-900 mb-4">
                        Horário de Atendimento
                      </h4>
                      <div className="space-y-2 text-slate-700">
                        <p>
                          <span className="font-medium">Segunda a Sexta:</span>{" "}
                          9h às 18h
                        </p>
                        <p>
                          <span className="font-medium">Sábado:</span> 9h às 14h
                        </p>
                        <p>
                          <span className="font-medium">Domingo:</span> Fechado
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Instagram Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-purple-600/30"></div>
          <div className="container mx-auto px-4 text-center relative">
            <div className="scroll-animate fade-up">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
                VAMOS EMBARCAR NESSA!
              </h2>
              <p className="text-xl text-blue-100 mb-12">
                Junte-se à nossa comunidade no Instagram e acompanhe novidades!
              </p>
            </div>

            <div className="max-w-md mx-auto scroll-animate scale-up stagger-2">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 mb-8 w-full shadow-xl hover:shadow-2xl transition-all duration-300 h-14 text-lg"
              >
                <Instagram className="mr-3 h-6 w-6" />
                VISITE NOSSO INSTAGRAM
              </Button>

              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <img
                  src="/luxury-cruise-ship-vessel.jpg"
                  alt="Vessel - Navegando rumo ao sucesso"
                  className="w-full h-48 object-cover rounded-2xl mb-4 shadow-lg"
                />
                <p className="text-blue-100 text-lg font-medium">
                  Navegando rumo ao sucesso do seu negócio
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-10 scroll-animate fade-up">
            <div className="flex items-center justify-center space-x-3">
              <div className="flex items-center space-x-2">
                <img
                  src="/logo-white.svg"
                  alt="VESSEL Logo"
                  className="h-15 w-auto"
                />
              </div>
            </div>

            <p className="text-slate-300 max-w-3xl mx-auto text-pretty text-lg leading-relaxed">
              A VESSEL É A ESCOLHA INTELIGENTE PARA O SEU NEGÓCIO NA ÁREA DA
              BELEZA, QUE BUSCA CRESCER DE MANEIRA ORGANIZADA E EFICIENTE.
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <Mail className="h-8 w-8 mx-auto mb-3 text-amber-400" />
                <h4 className="font-semibold mb-2">E-mail</h4>
                <p className="text-slate-300">contato@vessel.com</p>
              </div>
              <div className="text-center">
                <Phone className="h-8 w-8 mx-auto mb-3 text-amber-400" />
                <h4 className="font-semibold mb-2">Telefone</h4>
                <p className="text-slate-300">+55 (11) 99999-9999</p>
              </div>
              <div className="text-center">
                <MapPin className="h-8 w-8 mx-auto mb-3 text-amber-400" />
                <h4 className="font-semibold mb-2">Localização</h4>
                <p className="text-slate-300">São Paulo, SP</p>
              </div>
            </div>

            <div className="pt-10 border-t border-slate-700">
              <p className="text-slate-400 text-sm">
                ©{currentYear} VESSEL SOLUTION - TODOS OS DIREITOS RESERVADOS.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Users,
  Target,
  Eye,
  Heart,
  Shield,
  Handshake,
  Award,
  CheckCircle,
  Sparkles,
  Star,
  ArrowLeft,
} from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function AboutPage() {
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

    return () => {
      observer.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
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

        .scroll-animate {
          opacity: 0;
          transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .scroll-animate.fade-up {
          transform: translateY(20px);
        }

        .scroll-animate.fade-left {
          transform: translateX(-20px);
        }

        .scroll-animate.fade-right {
          transform: translateX(20px);
        }

        .scroll-animate.scale-up {
          transform: scale(0.95);
        }

        .scroll-animate.animate-in {
          opacity: 1;
          transform: translateY(0) translateX(0) scale(1);
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

        .floating {
          animation: float 6s ease-in-out infinite;
        }
        .floating-delayed {
          animation: float 6s ease-in-out infinite 3s;
        }

        .gradient-text {
          background: linear-gradient(135deg, #f59e0b, #ea580c, #f59e0b);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
        }

        @keyframes shimmer {
          0% {
            background-position: -200px 0;
          }
          100% {
            background-position: 200px 0;
          }
        }
      `}</style>

      {/* Header */}
      <header className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-2xl border-b border-slate-200/60 shadow-xl">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <img
                src="/logo-no-name-black.svg"
                alt="VESSEL Logo"
                className="h-15 w-auto"
              />
            </div>
          </Link>
          <Link href="/model-05">
            <Button className="cursor-pointer bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 px-6 py-3">
              <ArrowLeft className="w-4 h-4 mr-2" />
              VOLTAR
            </Button>
          </Link>
        </div>
      </header>

      <main className="relative pt-32">
        <section className="py-12 md:py-20 lg:py-32 relative overflow-hidden">
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-12 md:mb-20 scroll-animate fade-up">
              <Badge className="bg-gradient-to-r from-amber-100 via-orange-100 to-amber-100 text-amber-800 border-amber-200 px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-semibold mb-6 md:mb-8 shadow-lg">
                <Users className="w-4 h-4 mr-2" />
                Conheça Nossa História
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-black text-slate-900 leading-tight mb-6 md:mb-8">
                QUEM
                <br />
                <span className="gradient-text">SOMOS</span>
              </h1>
            </div>

            <div className="flex justify-center">
              <div className="w-full max-w-4xl">
                <div className="scroll-animate fade-right">
                  <div className="space-y-6 md:space-y-8 text-base md:text-lg text-slate-600 leading-relaxed text-justify md:text-left">
                    <p>
                      A Vessel nasceu a partir da deficiência que identificamos
                      no mercado da beleza, através de um olhar de necessidade
                      em ter um sistema com soluções operacionais e gestão de
                      alta performance que atendam de{" "}
                      <strong className="text-amber-600">verdade</strong> as
                      necessidades das empresas.
                    </p>
                    <p>
                      A Vessel chega como uma plataforma inovadora, desenvolvida
                      para otimizar processos, facilitar o atendimento e
                      proporcionar uma experiência completa e eficiente para
                      profissionais e clientes.
                    </p>
                    <p>
                      Com um time especializado e apaixonado por tecnologia e
                      gestão, a Vessel combina expertise de mercado com um
                      profundo entendimento das demandas do segmento.
                    </p>
                    <p>
                      Nosso objetivo é empoderar os profissionais do setor a
                      focarem no que fazem de melhor, enquanto nós cuidamos da
                      organização e dos detalhes que garantem o sucesso do seu
                      negócio.
                    </p>
                    <p className="text-amber-600 font-semibold">
                      Estamos comprometidos em promover o crescimento
                      sustentável dos nossos parceiros, com soluções
                      tecnológicas de ponta, suporte contínuo e um sistema
                      sempre atualizado para acompanhar as tendências e
                      evoluções do mercado.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Missão e Visão Section */}
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden pt-16 md:pt-20 lg:pt-24">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-amber-400/20 to-orange-500/15 rounded-full blur-3xl floating"></div>
            <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-br from-blue-400/15 to-purple-500/20 rounded-full blur-3xl floating-delayed"></div>
          </div>

          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-8 md:mb-12 scroll-animate fade-up">
              <Badge className="bg-white/10 text-white mb-4 md:mb-6 px-4 md:px-6 py-2 md:py-3 border border-white/30 shadow-xl backdrop-blur-sm">
                <Target className="w-4 h-4 mr-2" />
                Missão e Visão
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-black mb-4 md:mb-6 text-balance">
                NOSSO
                <br />
                <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
                  PROPÓSITO
                </span>
              </h2>
            </div>

            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 max-w-7xl mx-auto px-4 mb-5">
              {/* Missão */}
              <Card className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-3xl hover:shadow-4xl transition-all duration-700 group mb-6 lg:mb-0 scroll-animate fade-right">
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                <CardContent className="p-6 md:p-8 relative">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                      <Target className="h-6 w-6 md:h-7 md:w-7 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      MISSÃO
                    </h3>
                  </div>
                  <p className="text-slate-200 text-sm md:text-base leading-relaxed">
                    Nossa Missão, é entregar soluções{" "}
                    <strong className="text-amber-400">reais</strong> na
                    eficiência em sistemas de gestão, que capacitem as empresas
                    a otimizar seus processos, aumentar a produtividade e
                    alcançar resultados.
                  </p>
                </CardContent>
              </Card>

              {/* Visão */}
              <Card className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-3xl hover:shadow-4xl transition-all duration-700 group scroll-animate fade-left">
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                <CardContent className="p-6 md:p-8 relative">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                      <Eye className="h-6 w-6 md:h-7 md:w-7 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      VISÃO
                    </h3>
                  </div>
                  <div className="space-y-3 text-slate-200 text-sm md:text-base leading-relaxed">
                    <p>
                      Ser referência no segmento de sistema de gestão de alta
                      performance na área da beleza consolidando sua presença
                      como rede em todo Brasil.
                    </p>
                    <p>
                      Estar em constante movimento para se atualizar às
                      necessidades do mercado.
                    </p>
                    <p>
                      Oferecer um sistema de alto nível garantindo uma excelente
                      experiência de gestão e operação. Da{" "}
                      <strong className="text-blue-400">verdadeira</strong>{" "}
                      fusão da consultoria personalizada com a qualidade do
                      sistema de gestão, que resultarão em parcerias duradouras.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Valores Section */}
        <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-white via-slate-50/80 to-amber-50/20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 md:mb-24 scroll-animate fade-up">
              <Badge className="bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 mb-6 md:mb-8 px-4 md:px-6 py-2 md:py-3 text-sm md:text-base shadow-lg">
                <Heart className="w-4 h-4 mr-2" />
                Nossos Valores
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-black text-slate-900 mb-6 md:mb-8">
                NOSSOS
                <br />
                <span className="gradient-text">VALORES</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
                Construção em conjunto: Em equipe buscamos constantemente novas
                soluções para os desafios de gestão dos nossos clientes.
              </p>
              <p className="text-xl md:text-2xl font-bold text-amber-600 mt-4 md:mt-6">
                "Somos membros de 1 empresa"
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
              {[
                {
                  title: "Excelência",
                  description:
                    "O compromisso em entregar produtos e serviços de alta qualidade, superando as expectativas dos nossos clientes.",
                  icon: Award,
                  gradient: "from-amber-500 to-orange-600",
                  bgGradient: "from-amber-50 to-orange-50",
                  delay: "stagger-1",
                },
                {
                  title: "Transparência em todas as relações & Integridade",
                  description:
                    "Mantemos padrões elevados de ética e transparência em todas as nossas ações.",
                  icon: Shield,
                  gradient: "from-blue-500 to-indigo-600",
                  bgGradient: "from-blue-50 to-indigo-50",
                  delay: "stagger-2",
                },
                {
                  title: "Relacionamento com o cliente",
                  description:
                    "Colocamos as necessidades dos nossos clientes no centro, para a entrega dos nossos produtos, serviços e soluções.",
                  icon: Handshake,
                  gradient: "from-emerald-500 to-teal-600",
                  bgGradient: "from-emerald-50 to-teal-50",
                  delay: "stagger-3",
                },
                {
                  title: "Compromisso",
                  description:
                    'Acreditamos no trabalho em equipe e entendemos que é desta forma que alcançaremos resultados notáveis. "A notável equipe que no compromisso do trabalho em conjunto, constroem 1 empresa notável"',
                  icon: CheckCircle,
                  gradient: "from-purple-500 to-violet-600",
                  bgGradient: "from-purple-50 to-violet-50",
                  delay: "stagger-4",
                },
              ].map((valor, index) => (
                <Card
                  key={index}
                  className={`group hover:shadow-3xl transition-all duration-700 border-0 shadow-xl bg-gradient-to-br ${valor.bgGradient} hover:-translate-y-4 scroll-animate fade-up ${valor.delay} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-6 md:p-10 relative">
                    <div
                      className={`w-16 md:w-20 h-16 md:h-20 bg-gradient-to-br ${valor.gradient} rounded-3xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 shadow-2xl floating`}
                    >
                      <valor.icon className="h-8 md:h-10 w-8 md:w-10 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-4 md:mb-6 text-balance">
                      {valor.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                      {valor.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12 md:mt-20 scroll-animate fade-up stagger-4">
              <Link href="/">
                <Button
                  size="lg"
                  className="cursor-pointer bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:via-orange-600 hover:to-amber-700 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 px-8 md:px-12 py-4 md:py-6 text-base md:text-lg rounded-2xl group"
                >
                  <Sparkles className="mr-2 md:mr-3 h-4 md:h-5 w-4 md:w-5 group-hover:scale-110 transition-transform duration-300" />
                  CONHEÇA NOSSAS SOLUÇÕES
                  <ArrowRight className="ml-2 md:ml-3 h-4 md:h-5 w-4 md:w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-amber-50/30">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
              <span className="text-slate-900 font-bold text-sm">V</span>
            </div>
            <span className="font-bold text-xl text-slate-900">VESSEL</span>
            <Badge variant="secondary" className="text-xs">
              SOLUTION
            </Badge>
          </div>
          <Button
            variant="outline"
            className="border-amber-200 text-amber-700 hover:bg-amber-50 bg-transparent"
          >
            LOGIN
          </Button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-20 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-blue-500/5 to-slate-100/50"></div>
          <div className="container mx-auto px-4 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <Badge className="bg-amber-100 text-amber-800 border-amber-200">
                    ✨ Gestão Inteligente
                  </Badge>
                  <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight text-balance">
                    TRANSFORME A
                    <span className="text-transparent bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text">
                      {" "}
                      GESTÃO{" "}
                    </span>
                    DO SEU SALÃO COM A VESSEL
                  </h1>
                  <p className="text-xl text-slate-600 leading-relaxed text-pretty">
                    Simplifique processos, aumente a produtividade e tenha total
                    controle com nossa plataforma de gestão inovadora.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-lg"
                  >
                    Começar Agora
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-slate-300 text-slate-700 hover:bg-slate-50 bg-transparent"
                  >
                    Ver Demonstração
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="relative z-10 space-y-4">
                  <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                      <div className="h-4 bg-amber-200 rounded w-1/2"></div>
                      <div className="h-4 bg-slate-200 rounded w-2/3"></div>
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl shadow-xl p-6 transform -rotate-2 hover:rotate-0 transition-transform duration-300 ml-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium text-slate-600">
                        Agenda
                      </span>
                      <Badge className="bg-green-100 text-green-800">
                        Online
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                        <span className="text-sm text-slate-700">
                          14:00 - Corte + Barba
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm text-slate-700">
                          15:30 - Coloração
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-blue-400/20 rounded-3xl blur-3xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                A GESTÃO INTELIGENTE E SIMPLES QUE SEU NEGÓCIO PRECISA!
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto text-pretty">
                Conheça as funcionalidades da Vessel e veja como ela pode
                agilizar ou otimizar cada processo do seu negócio.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    INTEGRAÇÃO COMPLETA
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Controle todos os seus processos em um único lugar.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <BarChart3 className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    RELATÓRIOS
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Obtenha insights poderosos para tomar as melhores decisões.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Smartphone className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    FÁCIL DE USAR
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Tenha na palma da mão todo o controle do seu negócio.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Performance Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                UM SISTEMA DE ALTA PERFORMANCE
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                QUE ATENDE AS SUAS NECESSIDADES.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/10 rounded-2xl p-8 border border-amber-500/20">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">
                    AUMENTO DE PRODUTIVIDADE
                  </h3>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Reduza tempo perdido com tarefas repetitivas e elimine a
                  operação.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-2xl p-8 border border-blue-500/20">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">GESTÃO CENTRALIZADA</h3>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Tenha tudo o que você precisa em único lugar.
                </p>
              </div>

              <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 rounded-2xl p-8 border border-emerald-500/20">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">
                    INTUITIVA E PERSONALIZÁVEL
                  </h3>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  A plataforma se adapta às suas necessidades de maneira fácil e
                  rápida.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button
                size="lg"
                className="bg-white text-slate-900 hover:bg-slate-100"
              >
                SAIBA MAIS SOBRE OS BENEFÍCIOS
              </Button>
            </div>
          </div>
        </section>

        {/* Instagram Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
              VAMOS EMBARCAR NESSA!
            </h2>
            <p className="text-xl text-blue-50 mb-12">
              Junte-se à nossa comunidade no Instagram!
            </p>

            <div className="max-w-md mx-auto">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 mb-8 w-full"
              >
                <Instagram className="mr-2 h-5 w-5" />
                VISITE NOSSO INSTAGRAM
              </Button>

              <div className="bg-blue-700 rounded-2xl p-8 border border-blue-500">
                <img
                  src="/placeholder.svg?key=ktznv"
                  alt="Vessel - Navegando rumo ao sucesso"
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                <p className="text-blue-50 text-sm">
                  Navegando rumo ao sucesso do seu negócio
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">V</span>
              </div>
              <span className="font-bold text-xl">VESSEL</span>
            </div>

            <p className="text-slate-300 max-w-2xl mx-auto text-pretty">
              A VESSEL É A ESCOLHA INTELIGENTE PARA O SEU NEGÓCIO NA ÁREA DA
              BELEZA, QUE BUSCA CRESCER DE MANEIRA ORGANIZADA E EFICIENTE.
            </p>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">CONTATO</h3>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-slate-300">
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5" />
                  <span>CONTATO@VESSEL.COM</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>+55 (11) 99999-9999</span>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-800">
              <p className="text-slate-400 text-sm">
                ©2024 VESSEL SOLUTION TODOS OS DIREITOS RESERVADOS.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ChevronDown,
  Menu,
  X,
  Smartphone,
  BarChart3,
  Users,
  Zap,
  TrendingUp,
  Shield,
  Instagram,
  Mail,
  Phone,
} from "lucide-react";

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Aqui você pode adicionar a lógica de envio do formulário
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 z-50 transition-all duration-300">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">V</span>
              </div>
              <span className="text-xl font-bold text-slate-800">VESSEL</span>
              <Badge variant="secondary" className="text-xs">
                SOLUTION
              </Badge>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#inicio"
                className="text-slate-600 hover:text-emerald-600 transition-colors"
              >
                Início
              </a>
              <a
                href="#funcionalidades"
                className="text-slate-600 hover:text-emerald-600 transition-colors"
              >
                Funcionalidades
              </a>
              <a
                href="#beneficios"
                className="text-slate-600 hover:text-emerald-600 transition-colors"
              >
                Benefícios
              </a>
              <a
                href="#contato"
                className="text-slate-600 hover:text-emerald-600 transition-colors"
              >
                Contato
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                className="hidden md:inline-flex bg-transparent"
              >
                LOGIN
              </Button>
              <button
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-slate-200">
              <nav className="flex flex-col space-y-4 mt-4">
                <a
                  href="#inicio"
                  className="text-slate-600 hover:text-emerald-600 transition-colors"
                >
                  Início
                </a>
                <a
                  href="#funcionalidades"
                  className="text-slate-600 hover:text-emerald-600 transition-colors"
                >
                  Funcionalidades
                </a>
                <a
                  href="#beneficios"
                  className="text-slate-600 hover:text-emerald-600 transition-colors"
                >
                  Benefícios
                </a>
                <a
                  href="#contato"
                  className="text-slate-600 hover:text-emerald-600 transition-colors"
                >
                  Contato
                </a>
                <Button variant="outline" className="w-fit bg-transparent">
                  LOGIN
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section
          id="inicio"
          className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800 text-white"
        >
          <div className="absolute inset-0 bg-[url('/abstract-geometric-pattern.png')] opacity-10"></div>
          <div className="container mx-auto px-4 py-20 lg:py-32 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 animate-fade-in">
                <div className="space-y-4">
                  <Badge className="bg-emerald-500/20 text-emerald-100 border-emerald-400/30">
                    🚀 Transformação Digital
                  </Badge>
                  <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-balance">
                    TRANSFORME A
                    <span className="block text-emerald-200">
                      GESTÃO DO SEU
                    </span>
                    <span className="block">SALÃO COM A</span>
                    <span className="block text-emerald-300">VESSEL</span>
                  </h1>
                  <p className="text-xl text-emerald-100 leading-relaxed text-pretty">
                    Simplifique processos, aumente a produtividade e tenha total
                    controle com nossa plataforma de gestão inovadora.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-white text-emerald-700 hover:bg-emerald-50 font-semibold"
                  >
                    Começar Agora
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-emerald-300 text-emerald-100 hover:bg-emerald-700 bg-transparent"
                  >
                    Ver Demonstração
                  </Button>
                </div>
              </div>

              <div className="relative animate-slide-in-right">
                <div className="relative z-10">
                  <img
                    src="/app-image.png"
                    alt="Vessel App Interface"
                    className="w-full max-w-xl lg:max-w-2xl mx-auto drop-shadow-2xl"
                  />
                </div>

                <div className="absolute -top-4 -right-4 w-72 h-72 bg-emerald-400/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-4 -left-4 w-64 h-64 bg-emerald-300/20 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-emerald-200" />
          </div>
        </section>

        {/* Features Section */}
        <section id="funcionalidades" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <Badge className="mb-4 bg-emerald-100 text-emerald-700">
                Funcionalidades
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4 text-balance">
                A GESTÃO INTELIGENTE E SIMPLES QUE SEU NEGÓCIO PRECISA!
              </h2>
              <p className="text-xl text-slate-600 text-pretty">
                Conheça as funcionalidades da Vessel e veja como ela pode
                otimizar cada processo do seu negócio.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Smartphone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">
                    INTEGRAÇÃO COMPLETA
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Controle todos os seus processos em um único lugar.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">
                    RELATÓRIOS
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Obtenha insights poderosos para tomar as melhores decisões.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">
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

        {/* Benefits Section */}
        <section
          id="beneficios"
          className="py-20 bg-gradient-to-br from-slate-50 to-slate-100"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <Badge className="mb-4 bg-emerald-100 text-emerald-700">
                Performance
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4 text-balance">
                UM SISTEMA DE ALTA PERFORMANCE
                <span className="block text-emerald-600">
                  QUE ATENDE ÀS SUAS NECESSIDADES.
                </span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="bg-gradient-to-br from-emerald-600 to-emerald-700 text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold">
                      AUMENTO DE PRODUTIVIDADE
                    </h3>
                  </div>
                  <p className="text-emerald-100 leading-relaxed">
                    Reduza tempo perdido com tarefas repetitivas e elimine a
                    operação manual.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-600 to-blue-700 text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                      <Zap className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold">GESTÃO CENTRALIZADA</h3>
                  </div>
                  <p className="text-blue-100 leading-relaxed">
                    Tenha tudo o que você precisa em um único lugar.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-600 to-purple-700 text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                      <Shield className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold">
                      INTUITIVA E PERSONALIZÁVEL
                    </h3>
                  </div>
                  <p className="text-purple-100 leading-relaxed">
                    A plataforma se adapta às suas necessidades de maneira fácil
                    e rápida.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold"
              >
                SAIBA MAIS SOBRE OS BENEFÍCIOS
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 animate-fade-in">
                <div>
                  <Badge className="mb-4 bg-emerald-100 text-emerald-700">
                    Contato
                  </Badge>
                  <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6 text-balance">
                    Estamos com a versão beta no ar, e com ela
                    <span className="block text-emerald-600">
                      planos para atender seu negócio.
                    </span>
                  </h2>
                  <p className="text-xl text-slate-600 mb-8 text-pretty">
                    Quer saber mais? Entre em contato conosco e descubra como a
                    Vessel pode transformar seu salão.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">Email</p>
                      <p className="text-slate-600">contato@vesselbr.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">Telefone</p>
                      <p className="text-slate-600">(11) 99999-9999</p>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <img
                    src="/business-growth-illustration-with-charts-and-graph.jpg"
                    alt="Crescimento do negócio"
                    className="w-full max-w-sm rounded-2xl shadow-lg"
                  />
                </div>
              </div>

              <Card className="shadow-xl border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">
                    Entre em Contato
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-slate-700 mb-2"
                      >
                        Nome Completo
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="Seu nome completo"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-slate-700 mb-2"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="seu@email.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-slate-700 mb-2"
                      >
                        Telefone
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="(11) 99999-9999"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-slate-700 mb-2"
                      >
                        Mensagem
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full min-h-[120px]"
                        placeholder="Conte-nos sobre seu salão e como podemos ajudar..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold"
                    >
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Instagram CTA Section */}
        <section className="py-20 bg-gradient-to-br from-emerald-600 to-emerald-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto space-y-8">
              <Badge className="bg-emerald-500/20 text-emerald-100 border-emerald-400/30">
                Redes Sociais
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-balance">
                VAMOS EMBARCAR NESSA!
              </h2>
              <p className="text-xl text-emerald-100 text-pretty">
                Junte-se à nossa comunidade no Instagram e fique por dentro de
                todas as novidades!
              </p>

              <Button
                size="lg"
                className="bg-white text-emerald-700 hover:bg-emerald-50 font-semibold"
              >
                <Instagram className="w-5 h-5 mr-2" />
                VISITE NOSSO INSTAGRAM
              </Button>

              <div className="mt-12">
                <img
                  src="/instagram-social-media-engagement-illustration.jpg"
                  alt="Instagram"
                  className="w-64 h-64 mx-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <img
                  src="/logo-white.svg"
                  alt="VESSEL Logo"
                  className="h-15 w-auto"
                />
              </div>
              <p className="text-slate-400 text-pretty">
                A VESSEL É A ESCOLHA INTELIGENTE PARA O SEU NEGÓCIO NA ÁREA DA
                BELEZA, QUE BUSCA CRESCER DE MANEIRA ORGANIZADA E EFICIENTE.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contato</h3>
              <div className="space-y-2 text-slate-400">
                <p>📧 CONTATO@VESSELBR.COM</p>
                <p>📱 (11) 99999-9999</p>
                <p>📍 São Paulo, SP</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Links Rápidos</h3>
              <div className="space-y-2">
                <a
                  href="#inicio"
                  className="block text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  Início
                </a>
                <a
                  href="#funcionalidades"
                  className="block text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  Funcionalidades
                </a>
                <a
                  href="#beneficios"
                  className="block text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  Benefícios
                </a>
                <a
                  href="#contato"
                  className="block text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  Contato
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>
              © {new Date().getFullYear()} Vessel Solution. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}

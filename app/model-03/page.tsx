"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
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
              <Link href="/" className="flex items-center">
                <img
                  src="/logo-black.svg"
                  alt="VESSEL Logo"
                  className="h-16 w-auto"
                  draggable={false}
                />
              </Link>
            </div>

            <nav className="hidden md:flex items-center space-x-6">
              <Link
                href="/model-03/about"
                className="relative group flex items-center space-x-2 px-4 py-2 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100/70 
                           shadow-sm border border-slate-200/60 hover:border-emerald-200/50 hover:shadow-md transition-all duration-300"
              >
                <Users className="w-4 h-4 text-emerald-600/80" />
                <span className="text-slate-700 font-medium">Sobre nós</span>
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                className="cursor-pointer hidden md:inline-flex bg-transparent"
              >
                LOGIN
              </Button>
              <button
                className="md:hidden z-50 relative"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <div
                    className={`transform transition-all duration-300 ${
                      isMenuOpen
                        ? "rotate-180 opacity-0"
                        : "rotate-0 opacity-100"
                    }`}
                  >
                    <Menu size={24} />
                  </div>
                  <div
                    className={`absolute transform transition-all duration-300 ${
                      isMenuOpen
                        ? "rotate-0 opacity-100"
                        : "-rotate-180 opacity-0"
                    }`}
                  >
                    <X size={24} />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-all duration-300 md:hidden ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-40 transform transition-all duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-200">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">V</span>
              </div>
              <span className="text-xl font-bold text-slate-800">VESSEL</span>
            </div>
          </div>

          {/* Menu Content */}
          <div className="flex-1 p-6">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/model-03/about"
                className="flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100/70 
                           shadow-sm border border-slate-200/60 hover:border-emerald-200/50 hover:shadow-md 
                           transition-all duration-300 transform hover:scale-105"
                onClick={() => setIsMenuOpen(false)}
              >
                <Users className="w-5 h-5 text-emerald-600/80" />
                <span className="text-slate-700 font-medium">Sobre nós</span>
              </Link>
            </nav>
          </div>

          {/* Menu Footer */}
          <div className="p-6 border-t border-slate-200">
            <Button
              variant="outline"
              className="cursor-pointer w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white border-0 
             hover:from-emerald-700 hover:to-emerald-800 
             transform hover:scale-105 hover:shadow-lg 
             transition-all duration-300 ease-in-out"
              onClick={() => setIsMenuOpen(false)}
            >
              LOGIN
            </Button>
          </div>
        </div>
      </div>

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
                    className="cursor-pointer bg-white text-emerald-700 hover:bg-emerald-50 font-semibold 
             transition-all duration-300 ease-in-out transform hover:scale-105"
                  >
                    Começar Agora
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="cursor-pointer border-emerald-300 text-emerald-100 hover:bg-emerald-700 bg-transparent 
             transition-all duration-300 ease-in-out transform hover:scale-105"
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
                className="cursor-pointer bg-emerald-600 hover:bg-emerald-700 text-white font-semibold 
             transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
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
              </div>

              <Card className="shadow-xl border-0 animate-slide-in-right">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">
                    Envie sua Mensagem
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Nome Completo"
                      required
                    />
                    <Input
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email"
                      type="email"
                      required
                    />
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Telefone"
                    />
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Mensagem"
                      required
                    />
                    <Button
                      type="submit"
                      className="cursor-pointer w-full bg-emerald-600 hover:bg-emerald-700 text-white 
             transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                    >
                      Enviar
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Instagram CTA */}
        <section className="py-20 bg-gradient-to-br from-emerald-600 to-emerald-800 text-white text-center">
          <div className="container mx-auto px-4">
            <Badge className="bg-white/20">Comunidade</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mt-6 mb-4 text-balance">
              VAMOS EMBARCAR NESSA JORNADA!
            </h2>
            <p className="text-lg text-emerald-100 mb-8 text-pretty">
              Junte-se à nossa comunidade exclusiva e acompanhe as novidades!
            </p>
            <Link
              href="https://instagram.com/vessel.br"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="cursor-pointer bg-white text-emerald-700 hover:bg-emerald-50 
               transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
              >
                <Instagram className="w-5 h-5 mr-2" />
                SIGA-NOS NO INSTAGRAM
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Users,
  Target,
  Eye,
  Heart,
  Shield,
  Handshake,
  Award,
  CheckCircle,
} from "lucide-react";

export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/model-03" className="flex items-center space-x-2">
            <img
              src="/logo-no-name-black.svg"
              alt="VESSEL Logo"
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold text-slate-800">VESSEL</span>
          </Link>
          <Button
            variant="outline"
            className="bg-transparent"
            onClick={() => history.back()}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            VOLTAR
          </Button>
        </div>
      </header>

      <main className="pt-24">
        {/* Quem Somos */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <Badge className="bg-emerald-100 text-emerald-700 mb-4">
              <Users className="w-4 h-4 mr-2" />
              Conheça Nossa História
            </Badge>
            <h1 className="text-3xl lg:text-5xl font-bold mb-8">
              QUEM <span className="text-emerald-600">SOMOS</span>
            </h1>
            <div className="space-y-6 text-slate-600 leading-relaxed text-justify">
              <p>
                A Vessel nasceu a partir da deficiência que identificamos no
                mercado da beleza: a falta de sistemas modernos e de alta
                performance que realmente atendam às necessidades das empresas.
              </p>
              <p>
                Desenvolvemos uma plataforma inovadora, feita para otimizar
                processos, facilitar o atendimento e proporcionar uma
                experiência completa e eficiente para profissionais e clientes.
              </p>
              <p>
                Nosso objetivo é empoderar os profissionais do setor para que
                foquem no que fazem de melhor, enquanto cuidamos da organização
                e dos detalhes que garantem o sucesso do seu negócio.
              </p>
              <p className="text-emerald-600 font-semibold">
                Estamos comprometidos em promover o crescimento sustentável dos
                nossos parceiros, com tecnologia de ponta e suporte contínuo.
              </p>
            </div>
          </div>
        </section>

        {/* Missão e Visão */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="container mx-auto px-4 max-w-6xl text-center">
            <Badge className="bg-white/10 mb-4">Missão e Visão</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-12">
              NOSSO <span className="text-emerald-400">PROPÓSITO</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white/10 border-0 shadow-xl text-left">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Target className="w-6 h-6 text-emerald-400 mr-2" />
                    <h3 className="text-xl font-bold">MISSÃO</h3>
                  </div>
                  <p className="text-slate-200 leading-relaxed">
                    Entregar soluções reais em sistemas de gestão que capacitem
                    as empresas a otimizar processos, aumentar a produtividade e
                    alcançar resultados consistentes.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-0 shadow-xl text-left">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Eye className="w-6 h-6 text-blue-400 mr-2" />
                    <h3 className="text-xl font-bold">VISÃO</h3>
                  </div>
                  <p className="text-slate-200 leading-relaxed">
                    Ser referência no Brasil em sistemas de gestão de alta
                    performance na área da beleza, unindo tecnologia moderna com
                    consultoria personalizada.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 max-w-6xl text-center">
            <Badge className="bg-emerald-100 text-emerald-700 mb-4">
              <Heart className="w-4 h-4 mr-2" />
              Nossos Valores
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-12">
              NOSSOS <span className="text-emerald-600">VALORES</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8 text-left">
              {[
                {
                  title: "Excelência",
                  desc: "Entregar produtos e serviços de alta qualidade, superando expectativas.",
                  icon: Award,
                },
                {
                  title: "Transparência & Integridade",
                  desc: "Manter padrões elevados de ética em todas as relações.",
                  icon: Shield,
                },
                {
                  title: "Relacionamento com o Cliente",
                  desc: "Colocar as necessidades dos clientes no centro de tudo.",
                  icon: Handshake,
                },
                {
                  title: "Compromisso",
                  desc: "Trabalho em equipe como base para alcançar resultados notáveis.",
                  icon: CheckCircle,
                },
              ].map((v, i) => (
                <Card key={i} className="border-0 shadow-lg">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <v.icon className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{v.title}</h3>
                      <p className="text-slate-600">{v.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

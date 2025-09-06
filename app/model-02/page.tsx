// app/page.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  CheckCircle,
  BarChart3,
  LayoutDashboard,
  Smartphone,
  Mail,
  Phone,
} from "lucide-react";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-24 md:py-36 overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white">
        {/* Shapes decorativos */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl -z-10" />

        <div className="max-w-xl space-y-8 z-10">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-xl"
          >
            Gestão de salão <br /> mais{" "}
            <span className="bg-gradient-to-r from-blue-300 to-purple-400 bg-clip-text text-transparent">
              inteligente
            </span>
          </motion.h1>
          <p className="text-lg md:text-xl text-gray-200">
            Aumente a produtividade, simplifique processos e tenha controle
            total em um só lugar.
          </p>
          <div className="flex gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 shadow-lg"
            >
              Teste grátis
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              Saiba mais
            </Button>
          </div>
        </div>
        <motion.img
          src="/vessel.jpg"
          alt="App Vessel"
          className="mt-10 md:mt-0 w-80 md:w-[30rem] drop-shadow-2xl rounded-xl"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        />
      </section>

      {/* Funcionalidades */}
      <section className="px-6 md:px-20 py-24 bg-gray-50">
        <h2 className="text-center text-4xl font-bold mb-16 text-blue-900">
          Funcionalidades
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              icon: LayoutDashboard,
              title: "Integração Completa",
              desc: "Controle todos os seus processos em um único lugar.",
            },
            {
              icon: BarChart3,
              title: "Relatórios Avançados",
              desc: "Decisões inteligentes baseadas em insights poderosos.",
            },
            {
              icon: Smartphone,
              title: "Fácil de usar",
              desc: "Gestão na palma da sua mão, em qualquer lugar.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-xl hover:shadow-2xl hover:scale-105 transition-transform bg-white rounded-2xl border-none">
                <CardContent className="p-10 text-center space-y-4">
                  <item.icon className="mx-auto text-blue-600 w-14 h-14" />
                  <h3 className="font-semibold text-2xl">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefícios */}
      <section className="px-6 md:px-20 py-24 bg-gradient-to-r from-blue-700 via-blue-600 to-purple-600 text-white">
        <h2 className="text-center text-4xl font-bold mb-16">
          Por que escolher a Vessel?
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              title: "Produtividade máxima",
              desc: "Reduza tempo perdido com tarefas repetitivas e otimize sua operação.",
            },
            {
              title: "Gestão centralizada",
              desc: "Tudo o que você precisa em um só lugar, sem complicações.",
            },
            {
              title: "Personalização fácil",
              desc: "Adapte a plataforma ao seu estilo e necessidades.",
            },
          ].map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="flex items-start space-x-4"
            >
              <CheckCircle className="w-9 h-9 text-green-400 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-xl mb-2">{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contato */}
      <section className="px-6 md:px-20 py-24 bg-gray-50">
        <h2 className="text-center text-4xl font-bold mb-16 text-blue-900">
          Entre em Contato
        </h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Formulário */}
          <form className="space-y-5 bg-white shadow-xl rounded-2xl p-10 border border-gray-100">
            <Input type="text" placeholder="Seu nome" />
            <Input type="email" placeholder="Seu e-mail" />
            <Textarea placeholder="Sua mensagem" className="min-h-[140px]" />
            <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90">
              Enviar mensagem
            </Button>
          </form>
          {/* Infos */}
          <div className="space-y-6 flex flex-col justify-center">
            <div className="flex items-center space-x-3">
              <Mail className="w-6 h-6 text-blue-600" />
              <span>contato@vesseldr.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-6 h-6 text-blue-600" />
              <span>(11) 99999-9999</span>
            </div>
            <p className="text-gray-700 text-lg">
              Nossa equipe está pronta para ajudar você a transformar a gestão
              do seu salão 🚀
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-20 py-10 bg-blue-950 text-gray-400 text-sm border-t border-blue-800">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p>
            © {new Date().getFullYear()} Vessel Solution. Todos os direitos
            reservados.
          </p>
          <a href="mailto:contato@vesseldr.com" className="hover:text-white">
            contato@vesseldr.com
          </a>
        </div>
      </footer>
    </div>
  );
}

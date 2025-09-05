"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Monitor, Palette, Rocket, Sparkles, Star, Wrench } from "lucide-react";

const models = [
  { label: "Modelo 1", href: "/model-01", icon: Monitor },
  { label: "Modelo 2", href: "/model-02", icon: Palette },
  { label: "Modelo 3", href: "/model-03", icon: Rocket },
  { label: "Modelo 4", href: "/model-04", icon: Sparkles },
  { label: "Modelo 5", href: "/model-05", icon: Star },
  { label: "Modelo 6", href: "/model-06", icon: Wrench },
];

export default function ModelsPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 px-6 py-16">
      <div className="w-full max-w-4xl text-center space-y-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">
          Escolha um <span className="text-blue-600">Modelo</span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {models.map((model, i) => (
            <Link key={i} href={model.href}>
              <Button
                variant="outline"
                className="w-full cursor-pointer h-28 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white text-slate-700 border-slate-200 flex flex-col items-center justify-center gap-2"
              >
                <model.icon className="w-6 h-6 text-blue-600" />
                <span className="text-base md:text-lg font-semibold">
                  {model.label}
                </span>
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

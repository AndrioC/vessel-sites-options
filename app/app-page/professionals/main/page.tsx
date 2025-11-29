"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Edit,
  Trash,
  Users,
  TrendingUp,
  Plus,
  Star,
  Calendar,
  Phone,
} from "lucide-react";

interface Professional {
  id: number;
  name: string;
  position: string;
  photo: string;
  skills: string[];
  phone: string;
  startDate: string;
  rating: number;
}

const professionalsData: Professional[] = [
  {
    id: 1,
    name: "Maria Silva",
    position: "Cabeleireiro",
    photo: "https://i.pravatar.cc/150?img=5",
    skills: ["Corte Feminino", "Coloração", "Escova"],
    phone: "(11) 98765-4321",
    startDate: "15/03/2020",
    rating: 4.8,
  },
  {
    id: 2,
    name: "João Santos",
    position: "Barbeiro",
    photo: "https://i.pravatar.cc/150?img=12",
    skills: ["Corte Masculino", "Barba", "Platinado"],
    phone: "(11) 98765-4322",
    startDate: "20/01/2019",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Ana Costa",
    position: "Manicure",
    photo: "https://i.pravatar.cc/150?img=9",
    skills: ["Manicure", "Pedicure", "Nail Art"],
    phone: "(11) 98765-4323",
    startDate: "10/06/2021",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Carlos Lima",
    position: "Esteticista",
    photo: "https://i.pravatar.cc/150?img=15",
    skills: ["Massagem", "Limpeza de Pele", "Depilação"],
    phone: "(11) 98765-4324",
    startDate: "05/09/2022",
    rating: 4.6,
  },
];

export default function ProfessionalsPage() {
  const [searchFilter, setSearchFilter] = useState("");

  const filteredData = professionalsData.filter((prof) =>
    prof.name.toLowerCase().includes(searchFilter.toLowerCase())
  );

  const totalProfessionals = filteredData.length;
  const averageRating = (
    filteredData.reduce((sum, p) => sum + p.rating, 0) / filteredData.length
  ).toFixed(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
                <Users className="w-8 h-8 text-blue-600" />
                Profissionais
              </h1>
              <p className="text-slate-600 mt-1">
                Gestão completa de profissionais
              </p>
            </div>
            <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg px-6 py-3 font-medium shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Novo Profissional
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-blue-900">
                    Total de Profissionais
                  </p>
                  <p className="text-2xl font-bold text-blue-700 mt-1">
                    {totalProfessionals}
                  </p>
                </div>
                <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-700" />
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-4 border border-amber-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-amber-900">
                    Avaliação Média
                  </p>
                  <p className="text-2xl font-bold text-amber-700 mt-1">
                    {averageRating}
                  </p>
                </div>
                <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-amber-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 mb-6 p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <Input
              type="text"
              placeholder="Buscar profissional..."
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              className="pl-10 border-slate-300 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {filteredData.map((prof, index) => (
            <div
              key={prof.id}
              className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow"
              style={{
                animationDelay: `${index * 50}ms`,
                animationDuration: "400ms",
                animationFillMode: "both",
              }}
            >
              <div className="flex gap-4">
                <img
                  src={prof.photo}
                  alt={prof.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-blue-200"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {prof.name}
                  </h3>
                  <p className="text-sm text-slate-600">{prof.position}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                    <span className="text-sm font-medium text-slate-700">
                      {prof.rating}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Phone className="w-4 h-4" />
                  {prof.phone}
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Calendar className="w-4 h-4" />
                  Desde {prof.startDate}
                </div>
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                {prof.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="bg-blue-50 text-blue-700 border-blue-200"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-2 mt-4 pt-4 border-t border-slate-100">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-emerald-300 text-emerald-600 hover:bg-emerald-50"
                >
                  <Edit className="w-4 h-4 mr-1" />
                  Editar
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-red-300 text-red-600 hover:bg-red-50"
                >
                  <Trash className="w-4 h-4 mr-1" />
                  Excluir
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

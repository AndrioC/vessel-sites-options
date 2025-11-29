"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  Edit,
  Trash,
  Briefcase,
  TrendingUp,
  Users,
  Plus,
  ChevronDown,
  ChevronUp,
  Info,
  DollarSign,
  Award,
  UserCheck,
  Target,
} from "lucide-react";

interface Position {
  id: number;
  name: string;
  description: string;
  employeeCount: number;
  averageCommission?: number;
  responsibilities?: string[];
  requirements?: string[];
  salary?: {
    min: number;
    max: number;
  };
  active: boolean;
}

const positionsData: Position[] = [
  {
    id: 1,
    name: "Cabeleireiro(a)",
    description: "Profissional especializado em cortes e penteados",
    employeeCount: 5,
    averageCommission: 45,
    active: true,
    responsibilities: [
      "Realizar cortes de cabelo feminino e masculino",
      "Aplicar técnicas de coloração e mechas",
      "Fazer penteados para eventos",
      "Orientar clientes sobre cuidados capilares",
    ],
    requirements: [
      "Curso de cabeleireiro completo",
      "Experiência mínima de 1 ano",
      "Conhecimento em colorimetria",
    ],
    salary: {
      min: 1500,
      max: 4000,
    },
  },
  {
    id: 2,
    name: "Manicure",
    description: "Profissional de cuidados com unhas",
    employeeCount: 3,
    averageCommission: 50,
    active: true,
    responsibilities: [
      "Realizar manicure e pedicure",
      "Aplicar unhas de gel e fibra",
      "Fazer nail art e decorações",
      "Cuidados com cutículas e hidratação",
    ],
    requirements: [
      "Curso de manicure completo",
      "Domínio de técnicas de nail art",
      "Certificado de higienização",
    ],
    salary: {
      min: 1200,
      max: 3500,
    },
  },
  {
    id: 3,
    name: "Esteticista",
    description: "Profissional de estética facial e corporal",
    employeeCount: 2,
    averageCommission: 40,
    active: true,
    responsibilities: [
      "Realizar limpeza de pele profunda",
      "Aplicar tratamentos faciais",
      "Massagens relaxantes e modeladoras",
      "Depilação e drenagem linfática",
    ],
    requirements: [
      "Formação em Estética",
      "Conhecimento em técnicas de massagem",
      "Experiência com equipamentos estéticos",
    ],
    salary: {
      min: 1800,
      max: 5000,
    },
  },
  {
    id: 4,
    name: "Barbeiro",
    description: "Profissional especializado em barbear e cortes masculinos",
    employeeCount: 4,
    averageCommission: 48,
    active: true,
    responsibilities: [
      "Realizar cortes masculinos tradicionais e modernos",
      "Fazer barba com navalha",
      "Desenho e manutenção de barbas",
      "Aplicar produtos específicos para homens",
    ],
    requirements: [
      "Curso de barbeiro completo",
      "Experiência com navalha",
      "Conhecimento em estilos de corte masculino",
    ],
    salary: {
      min: 1600,
      max: 4500,
    },
  },
  {
    id: 5,
    name: "Recepcionista",
    description: "Profissional responsável pelo atendimento e agendamento",
    employeeCount: 2,
    active: false,
    responsibilities: [
      "Atendimento telefônico e presencial",
      "Agendamento de horários",
      "Controle de caixa",
      "Organização da recepção",
    ],
    requirements: [
      "Ensino médio completo",
      "Experiência com atendimento ao público",
      "Conhecimento básico de informática",
    ],
    salary: {
      min: 1300,
      max: 2000,
    },
  },
];

export default function PositionsPage() {
  const [searchFilter, setSearchFilter] = useState("");
  const [expandedPosition, setExpandedPosition] = useState<number | null>(null);
  const [filterExpanded, setFilterExpanded] = useState(false);
  const [statusFilter, setStatusFilter] = useState<
    "all" | "active" | "inactive"
  >("all");

  const filteredData = positionsData.filter((position) => {
    const matchSearch =
      position.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
      position.description.toLowerCase().includes(searchFilter.toLowerCase());
    const matchStatus =
      statusFilter === "all" ||
      (statusFilter === "active" && position.active) ||
      (statusFilter === "inactive" && !position.active);
    return matchSearch && matchStatus;
  });

  const totalPositions = filteredData.length;
  const totalEmployees = filteredData.reduce(
    (sum, pos) => sum + pos.employeeCount,
    0
  );
  const activePositions = filteredData.filter((p) => p.active).length;
  const avgCommission =
    filteredData.reduce((sum, pos) => sum + (pos.averageCommission || 0), 0) /
      filteredData.length || 0;

  return (
    <>
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
        {/* Header Section */}
        <div className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
                  <Briefcase className="w-8 h-8 text-indigo-600" />
                  Cargos
                </h1>
                <p className="text-slate-600 mt-1">
                  Gestão de cargos e funções do estabelecimento
                </p>
              </div>
              <Button className="bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white rounded-lg px-6 py-3 font-medium shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Novo Cargo
              </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-4 border border-indigo-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-indigo-900">
                      Total de Cargos
                    </p>
                    <p className="text-2xl font-bold text-indigo-700 mt-1">
                      {totalPositions}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-indigo-200 rounded-full flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-indigo-700" />
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 border border-purple-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-purple-900">
                      Profissionais
                    </p>
                    <p className="text-2xl font-bold text-purple-700 mt-1">
                      {totalEmployees}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-purple-700" />
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-4 border border-emerald-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-emerald-900">
                      Cargos Ativos
                    </p>
                    <p className="text-2xl font-bold text-emerald-700 mt-1">
                      {activePositions}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-emerald-200 rounded-full flex items-center justify-center">
                    <UserCheck className="w-6 h-6 text-emerald-700" />
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-blue-900">
                      Comissão Média
                    </p>
                    <p className="text-2xl font-bold text-blue-700 mt-1">
                      {avgCommission.toFixed(0)}%
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-blue-700" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Search and Filters */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 mb-6 overflow-hidden">
            <button
              onClick={() => setFilterExpanded(!filterExpanded)}
              className="w-full flex items-center justify-between px-6 py-4 hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Search className="w-5 h-5 text-slate-600" />
                <span className="font-medium text-slate-900">
                  Filtros de Pesquisa
                </span>
              </div>
              {filterExpanded ? (
                <ChevronUp className="w-5 h-5 text-slate-600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-slate-600" />
              )}
            </button>

            {filterExpanded && (
              <div className="px-6 pb-6 pt-2 border-t border-slate-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Buscar cargo
                    </label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <Input
                        type="text"
                        placeholder="Digite o nome do cargo..."
                        value={searchFilter}
                        onChange={(e) => setSearchFilter(e.target.value)}
                        className="pl-10 border-slate-300 focus:border-indigo-500 focus:ring-indigo-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Status
                    </label>
                    <select
                      value={statusFilter}
                      onChange={(e) =>
                        setStatusFilter(
                          e.target.value as "all" | "active" | "inactive"
                        )
                      }
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:border-indigo-500 focus:ring-indigo-500 bg-white"
                    >
                      <option value="all">Todos</option>
                      <option value="active">Ativos</option>
                      <option value="inactive">Inativos</option>
                    </select>
                  </div>
                </div>

                {(searchFilter || statusFilter !== "all") && (
                  <div className="mt-4 flex gap-2">
                    <Button
                      onClick={() => {
                        setSearchFilter("");
                        setStatusFilter("all");
                      }}
                      variant="outline"
                      className="text-sm"
                    >
                      Limpar Filtros
                    </Button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Positions List */}
          <div className="space-y-4">
            {filteredData.map((position, index) => (
              <div
                key={position.id}
                className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow duration-200"
                style={{
                  animation: `slideIn 0.4s ease-out ${index * 50}ms both`,
                }}
              >
                {/* Card Header */}
                <div className="bg-gradient-to-r from-indigo-50 to-white px-6 py-4 border-b border-slate-200">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                        <Briefcase className="w-7 h-7" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                          {position.name}
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              position.active
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                            }`}
                          >
                            {position.active ? "Ativo" : "Inativo"}
                          </span>
                        </h3>
                        <p className="text-sm text-slate-600 mt-1">
                          {position.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-xs text-slate-600">Profissionais</p>
                        <p className="text-2xl font-bold text-indigo-600">
                          {position.employeeCount}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Quick Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                    <div className="bg-purple-50 rounded-lg p-3">
                      <p className="text-xs text-purple-700 mb-1 flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        Profissionais
                      </p>
                      <p className="text-sm font-semibold text-purple-900">
                        {position.employeeCount}{" "}
                        {position.employeeCount === 1 ? "pessoa" : "pessoas"}
                      </p>
                    </div>

                    {position.averageCommission && (
                      <div className="bg-blue-50 rounded-lg p-3">
                        <p className="text-xs text-blue-700 mb-1 flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          Comissão Média
                        </p>
                        <p className="text-sm font-semibold text-blue-900">
                          {position.averageCommission}%
                        </p>
                      </div>
                    )}

                    {position.salary && (
                      <div className="bg-emerald-50 rounded-lg p-3">
                        <p className="text-xs text-emerald-700 mb-1 flex items-center gap-1">
                          <DollarSign className="w-3 h-3" />
                          Faixa Salarial
                        </p>
                        <p className="text-sm font-semibold text-emerald-900">
                          R$ {position.salary.min} - R$ {position.salary.max}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-2">
                    <Button
                      onClick={() =>
                        setExpandedPosition(
                          expandedPosition === position.id ? null : position.id
                        )
                      }
                      variant="outline"
                      className="text-sm border-slate-300 hover:bg-slate-50 flex items-center gap-2"
                    >
                      {expandedPosition === position.id ? (
                        <>
                          <ChevronUp className="w-4 h-4" />
                          Ocultar Detalhes
                        </>
                      ) : (
                        <>
                          <ChevronDown className="w-4 h-4" />
                          Ver Detalhes
                        </>
                      )}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-emerald-300 text-emerald-600 hover:bg-emerald-50 flex items-center gap-1"
                    >
                      <Edit className="w-4 h-4" />
                      Editar
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className={`flex items-center gap-1 ${
                        position.active
                          ? "border-orange-300 text-orange-600 hover:bg-orange-50"
                          : "border-green-300 text-green-600 hover:bg-green-50"
                      }`}
                    >
                      {position.active ? "Desativar" : "Ativar"}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-red-300 text-red-600 hover:bg-red-50 flex items-center gap-1"
                    >
                      <Trash className="w-4 h-4" />
                      Excluir
                    </Button>
                  </div>

                  {/* Expanded Details */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      expandedPosition === position.id
                        ? "max-h-[2000px] opacity-100 mt-4"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl border border-slate-200 p-6">
                      <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                        <Info className="w-5 h-5 text-slate-600" />
                        Informações Detalhadas
                      </h4>

                      {/* Responsibilities */}
                      {position.responsibilities &&
                        position.responsibilities.length > 0 && (
                          <div className="mb-6">
                            <h5 className="text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2">
                              <Target className="w-4 h-4 text-indigo-600" />
                              Responsabilidades
                            </h5>
                            <ul className="space-y-2">
                              {position.responsibilities.map((resp, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-2 text-sm text-slate-700"
                                >
                                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0"></div>
                                  <span>{resp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                      {/* Requirements */}
                      {position.requirements &&
                        position.requirements.length > 0 && (
                          <div className="mb-6">
                            <h5 className="text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2">
                              <Award className="w-4 h-4 text-purple-600" />
                              Requisitos
                            </h5>
                            <ul className="space-y-2">
                              {position.requirements.map((req, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-2 text-sm text-slate-700"
                                >
                                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                                  <span>{req}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                      {/* Salary Info */}
                      {position.salary && (
                        <div className="bg-gradient-to-r from-emerald-50 to-blue-50 border border-emerald-200 rounded-lg p-4">
                          <h5 className="text-sm font-semibold text-emerald-900 mb-3 flex items-center gap-2">
                            <DollarSign className="w-4 h-4" />
                            Informações Salariais
                          </h5>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <p className="text-xs text-slate-600 mb-1">
                                Salário Mínimo
                              </p>
                              <p className="text-lg font-bold text-slate-900">
                                R$ {position.salary.min.toFixed(2)}
                              </p>
                            </div>
                            <div>
                              <p className="text-xs text-slate-600 mb-1">
                                Salário Máximo
                              </p>
                              <p className="text-lg font-bold text-slate-900">
                                R$ {position.salary.max.toFixed(2)}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {filteredData.length === 0 && (
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-12 text-center">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-8 h-8 text-slate-400" />
                </div>
                <p className="text-slate-600 text-lg font-medium">
                  Nenhum cargo encontrado
                </p>
                <p className="text-slate-500 text-sm mt-2">
                  Tente ajustar os filtros de pesquisa
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

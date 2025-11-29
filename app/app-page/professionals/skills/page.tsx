"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  Edit,
  Trash,
  Award,
  TrendingUp,
  Plus,
  ChevronDown,
  ChevronUp,
  Info,
  Users,
  Tag,
  Star,
  CheckCircle2,
  BookOpen,
} from "lucide-react";

interface Skill {
  id: number;
  name: string;
  category: string;
  professionals: number;
  level?: "beginner" | "intermediate" | "advanced";
  description?: string;
  requirements?: string[];
  averageRating?: number;
  certificationsAvailable?: boolean;
  active: boolean;
  relatedServices?: string[];
}

const skillsData: Skill[] = [
  {
    id: 1,
    name: "Corte Masculino",
    category: "Cabelo",
    professionals: 8,
    level: "intermediate",
    description: "Técnicas de corte e estilização para cabelo masculino",
    requirements: [
      "Conhecimento básico de corte",
      "Domínio de tesoura e máquina",
      "Noções de visagismo",
    ],
    averageRating: 4.8,
    certificationsAvailable: true,
    active: true,
    relatedServices: ["Barba", "Design de Sobrancelhas", "Tratamento Capilar"],
  },
  {
    id: 2,
    name: "Coloração",
    category: "Cabelo",
    professionals: 5,
    level: "advanced",
    description: "Técnicas avançadas de colorimetria e aplicação de tintura",
    requirements: [
      "Curso de colorimetria",
      "Experiência com produtos químicos",
      "Conhecimento de teoria das cores",
    ],
    averageRating: 4.9,
    certificationsAvailable: true,
    active: true,
    relatedServices: ["Mechas", "Luzes", "Tonalização"],
  },
  {
    id: 3,
    name: "Manicure",
    category: "Unhas",
    professionals: 6,
    level: "beginner",
    description: "Cuidados básicos e avançados com as unhas das mãos",
    requirements: [
      "Curso de manicure",
      "Certificado de higienização",
      "Conhecimento de esmaltação",
    ],
    averageRating: 4.7,
    certificationsAvailable: true,
    active: true,
    relatedServices: ["Nail Art", "Unhas de Gel", "Alongamento"],
  },
  {
    id: 4,
    name: "Pedicure",
    category: "Unhas",
    professionals: 6,
    level: "beginner",
    description: "Cuidados e embelezamento dos pés",
    requirements: [
      "Curso de pedicure",
      "Noções de podologia",
      "Técnicas de esfoliação",
    ],
    averageRating: 4.6,
    certificationsAvailable: true,
    active: true,
    relatedServices: ["Spa dos Pés", "Tratamento de Calos"],
  },
  {
    id: 5,
    name: "Massagem Relaxante",
    category: "Estética",
    professionals: 3,
    level: "intermediate",
    description: "Técnicas de massagem para relaxamento muscular",
    requirements: [
      "Curso de massoterapia",
      "Conhecimento de anatomia",
      "Técnicas de pressão",
    ],
    averageRating: 4.9,
    certificationsAvailable: true,
    active: true,
    relatedServices: ["Massagem Modeladora", "Drenagem Linfática"],
  },
  {
    id: 6,
    name: "Micropigmentação",
    category: "Estética",
    professionals: 2,
    level: "advanced",
    description: "Técnica de pigmentação para sobrancelhas e lábios",
    requirements: [
      "Curso especializado",
      "Certificação em biossegurança",
      "Prática supervisionada",
    ],
    averageRating: 5.0,
    certificationsAvailable: true,
    active: true,
    relatedServices: ["Design de Sobrancelhas", "Maquiagem Definitiva"],
  },
  {
    id: 7,
    name: "Penteados para Noivas",
    category: "Cabelo",
    professionals: 4,
    level: "advanced",
    description: "Criação de penteados elaborados para eventos especiais",
    requirements: [
      "Experiência com penteados",
      "Conhecimento de técnicas de prender",
      "Uso de apliques e acessórios",
    ],
    averageRating: 4.8,
    certificationsAvailable: false,
    active: true,
    relatedServices: ["Maquiagem para Noivas", "Escova"],
  },
  {
    id: 8,
    name: "Depilação a Laser",
    category: "Estética",
    professionals: 1,
    level: "advanced",
    description: "Remoção de pelos com equipamento a laser",
    requirements: [
      "Certificação específica",
      "Curso de operação de equipamentos",
      "Conhecimento de fototipos",
    ],
    averageRating: 4.7,
    certificationsAvailable: true,
    active: false,
    relatedServices: ["Depilação com Cera", "Clareamento de Pelos"],
  },
];

export default function SkillsPage() {
  const [searchFilter, setSearchFilter] = useState("");
  const [expandedSkill, setExpandedSkill] = useState<number | null>(null);
  const [filterExpanded, setFilterExpanded] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [levelFilter, setLevelFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState<
    "all" | "active" | "inactive"
  >("all");

  const filteredData = skillsData.filter((skill) => {
    const matchSearch =
      skill.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
      skill.description?.toLowerCase().includes(searchFilter.toLowerCase());
    const matchCategory = categoryFilter
      ? skill.category === categoryFilter
      : true;
    const matchLevel = levelFilter ? skill.level === levelFilter : true;
    const matchStatus =
      statusFilter === "all" ||
      (statusFilter === "active" && skill.active) ||
      (statusFilter === "inactive" && !skill.active);
    return matchSearch && matchCategory && matchLevel && matchStatus;
  });

  // Estatísticas
  const totalSkills = filteredData.length;
  const totalProfessionals = filteredData.reduce(
    (sum, skill) => sum + skill.professionals,
    0
  );
  const activeSkills = filteredData.filter((s) => s.active).length;
  const avgRating =
    filteredData.reduce((sum, skill) => sum + (skill.averageRating || 0), 0) /
      filteredData.length || 0;

  const categories = [...new Set(skillsData.map((s) => s.category))];
  const levels = ["beginner", "intermediate", "advanced"];

  const getLevelInfo = (level?: string) => {
    switch (level) {
      case "beginner":
        return { label: "Iniciante", color: "bg-green-100 text-green-700" };
      case "intermediate":
        return { label: "Intermediário", color: "bg-blue-100 text-blue-700" };
      case "advanced":
        return { label: "Avançado", color: "bg-purple-100 text-purple-700" };
      default:
        return { label: "Não definido", color: "bg-slate-100 text-slate-700" };
    }
  };

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
                  <Award className="w-8 h-8 text-amber-600" />
                  Habilidades
                </h1>
                <p className="text-slate-600 mt-1">
                  Gestão de habilidades e competências profissionais
                </p>
              </div>
              <Button className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white rounded-lg px-6 py-3 font-medium shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Nova Habilidade
              </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-4 border border-amber-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-amber-900">
                      Total de Habilidades
                    </p>
                    <p className="text-2xl font-bold text-amber-700 mt-1">
                      {totalSkills}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-amber-700" />
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
                      {totalProfessionals}
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
                      Habilidades Ativas
                    </p>
                    <p className="text-2xl font-bold text-emerald-700 mt-1">
                      {activeSkills}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-emerald-200 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-emerald-700" />
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-blue-900">
                      Avaliação Média
                    </p>
                    <p className="text-2xl font-bold text-blue-700 mt-1">
                      {avgRating.toFixed(1)} ⭐
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-blue-700" />
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Buscar habilidade
                    </label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <Input
                        type="text"
                        placeholder="Digite o nome..."
                        value={searchFilter}
                        onChange={(e) => setSearchFilter(e.target.value)}
                        className="pl-10 border-slate-300 focus:border-amber-500 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Categoria
                    </label>
                    <select
                      value={categoryFilter}
                      onChange={(e) => setCategoryFilter(e.target.value)}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:border-amber-500 focus:ring-amber-500 bg-white"
                    >
                      <option value="">Todas</option>
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Nível
                    </label>
                    <select
                      value={levelFilter}
                      onChange={(e) => setLevelFilter(e.target.value)}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:border-amber-500 focus:ring-amber-500 bg-white"
                    >
                      <option value="">Todos</option>
                      <option value="beginner">Iniciante</option>
                      <option value="intermediate">Intermediário</option>
                      <option value="advanced">Avançado</option>
                    </select>
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
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:border-amber-500 focus:ring-amber-500 bg-white"
                    >
                      <option value="all">Todos</option>
                      <option value="active">Ativos</option>
                      <option value="inactive">Inativos</option>
                    </select>
                  </div>
                </div>

                {(searchFilter ||
                  categoryFilter ||
                  levelFilter ||
                  statusFilter !== "all") && (
                  <div className="mt-4 flex gap-2">
                    <Button
                      onClick={() => {
                        setSearchFilter("");
                        setCategoryFilter("");
                        setLevelFilter("");
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

          {/* Skills List */}
          <div className="space-y-4">
            {filteredData.map((skill, index) => {
              const levelInfo = getLevelInfo(skill.level);

              return (
                <div
                  key={skill.id}
                  className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow duration-200"
                  style={{
                    animation: `slideIn 0.4s ease-out ${index * 50}ms both`,
                  }}
                >
                  {/* Card Header */}
                  <div className="bg-gradient-to-r from-amber-50 to-white px-6 py-4 border-b border-slate-200">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                          <Award className="w-7 h-7" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                            {skill.name}
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                skill.active
                                  ? "bg-green-100 text-green-700"
                                  : "bg-red-100 text-red-700"
                              }`}
                            >
                              {skill.active ? "Ativo" : "Inativo"}
                            </span>
                          </h3>
                          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600 mt-1">
                            <span className="flex items-center gap-1">
                              <Tag className="w-4 h-4" />
                              {skill.category}
                            </span>
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium ${levelInfo.color}`}
                            >
                              {levelInfo.label}
                            </span>
                            {skill.averageRating && (
                              <span className="flex items-center gap-1">
                                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                                {skill.averageRating.toFixed(1)}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="text-xs text-slate-600">
                            Profissionais
                          </p>
                          <p className="text-2xl font-bold text-amber-600">
                            {skill.professionals}
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
                          {skill.professionals}{" "}
                          {skill.professionals === 1 ? "pessoa" : "pessoas"}
                        </p>
                      </div>

                      {skill.certificationsAvailable !== undefined && (
                        <div className="bg-blue-50 rounded-lg p-3">
                          <p className="text-xs text-blue-700 mb-1 flex items-center gap-1">
                            <BookOpen className="w-3 h-3" />
                            Certificação
                          </p>
                          <p className="text-sm font-semibold text-blue-900">
                            {skill.certificationsAvailable
                              ? "Disponível"
                              : "Não disponível"}
                          </p>
                        </div>
                      )}

                      {skill.averageRating && (
                        <div className="bg-amber-50 rounded-lg p-3">
                          <p className="text-xs text-amber-700 mb-1 flex items-center gap-1">
                            <Star className="w-3 h-3" />
                            Avaliação
                          </p>
                          <p className="text-sm font-semibold text-amber-900">
                            {skill.averageRating.toFixed(1)} / 5.0
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-2">
                      <Button
                        onClick={() =>
                          setExpandedSkill(
                            expandedSkill === skill.id ? null : skill.id
                          )
                        }
                        variant="outline"
                        className="text-sm border-slate-300 hover:bg-slate-50 flex items-center gap-2"
                      >
                        {expandedSkill === skill.id ? (
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
                          skill.active
                            ? "border-orange-300 text-orange-600 hover:bg-orange-50"
                            : "border-green-300 text-green-600 hover:bg-green-50"
                        }`}
                      >
                        {skill.active ? "Desativar" : "Ativar"}
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
                        expandedSkill === skill.id
                          ? "max-h-[2000px] opacity-100 mt-4"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl border border-slate-200 p-6">
                        <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                          <Info className="w-5 h-5 text-slate-600" />
                          Informações Detalhadas
                        </h4>

                        {/* Description */}
                        {skill.description && (
                          <div className="mb-6">
                            <h5 className="text-sm font-semibold text-slate-900 mb-2">
                              Descrição
                            </h5>
                            <p className="text-sm text-slate-700">
                              {skill.description}
                            </p>
                          </div>
                        )}

                        {/* Requirements */}
                        {skill.requirements &&
                          skill.requirements.length > 0 && (
                            <div className="mb-6">
                              <h5 className="text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-amber-600" />
                                Requisitos
                              </h5>
                              <ul className="space-y-2">
                                {skill.requirements.map((req, idx) => (
                                  <li
                                    key={idx}
                                    className="flex items-start gap-2 text-sm text-slate-700"
                                  >
                                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0"></div>
                                    <span>{req}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                        {/* Related Services */}
                        {skill.relatedServices &&
                          skill.relatedServices.length > 0 && (
                            <div>
                              <h5 className="text-sm font-semibold text-slate-900 mb-3">
                                Serviços Relacionados
                              </h5>
                              <div className="flex flex-wrap gap-2">
                                {skill.relatedServices.map((service, idx) => (
                                  <span
                                    key={idx}
                                    className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-medium"
                                  >
                                    {service}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {filteredData.length === 0 && (
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-12 text-center">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-slate-400" />
                </div>
                <p className="text-slate-600 text-lg font-medium">
                  Nenhuma habilidade encontrada
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

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Eye,
  Edit,
  Trash,
  Plus,
  Search,
  Calendar,
  Clock,
  User,
  TrendingUp,
  ChevronDown,
  ChevronUp,
  Info,
  ToggleLeft,
  ToggleRight,
  Users,
} from "lucide-react";

interface RotationItem {
  id: number;
  professional: string;
  dayOfWeek: string;
  startTime: string;
  endTime: string;
  active: boolean;
  position?: string;
  notes?: string;
  breakTime?: string;
  totalHours?: number;
}

export default function RotationPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterExpanded, setFilterExpanded] = useState(false);
  const [expandedItem, setExpandedItem] = useState<number | null>(null);
  const [selectedDay, setSelectedDay] = useState("");

  const rotationData: RotationItem[] = [
    {
      id: 1,
      professional: "HELGA",
      dayOfWeek: "Segunda-feira",
      startTime: "08:00",
      endTime: "18:00",
      active: true,
      position: "Cabeleireira",
      notes: "Especialista em coloração",
      breakTime: "12:00 - 13:00",
      totalHours: 9,
    },
    {
      id: 2,
      professional: "HELO",
      dayOfWeek: "Terça-feira",
      startTime: "09:00",
      endTime: "19:00",
      active: true,
      position: "Manicure",
      notes: "Disponível para atendimento domiciliar",
      breakTime: "13:00 - 14:00",
      totalHours: 9,
    },
    {
      id: 3,
      professional: "ADRIANA",
      dayOfWeek: "Quarta-feira",
      startTime: "08:00",
      endTime: "17:00",
      active: false,
      position: "Esteticista",
      notes: "Folga temporária - retorna semana que vem",
      breakTime: "12:00 - 13:00",
      totalHours: 8,
    },
    {
      id: 4,
      professional: "PAULA",
      dayOfWeek: "Quinta-feira",
      startTime: "10:00",
      endTime: "20:00",
      active: true,
      position: "Cabeleireira",
      notes: "Especialista em cortes modernos",
      breakTime: "14:00 - 15:00",
      totalHours: 9,
    },
    {
      id: 5,
      professional: "HELGA",
      dayOfWeek: "Sexta-feira",
      startTime: "08:00",
      endTime: "18:00",
      active: true,
      position: "Cabeleireira",
      breakTime: "12:00 - 13:00",
      totalHours: 9,
    },
    {
      id: 6,
      professional: "HELO",
      dayOfWeek: "Sábado",
      startTime: "09:00",
      endTime: "17:00",
      active: true,
      position: "Manicure",
      breakTime: "12:30 - 13:30",
      totalHours: 7,
    },
  ];

  const filteredData = rotationData.filter((item) => {
    const matchSearch =
      item.professional.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.dayOfWeek.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.position?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchDay = selectedDay ? item.dayOfWeek === selectedDay : true;
    return matchSearch && matchDay;
  });

  // Estatísticas
  const activeRotations = filteredData.filter((r) => r.active).length;
  const totalProfessionals = new Set(filteredData.map((r) => r.professional))
    .size;
  const avgHours =
    filteredData.reduce((sum, r) => sum + (r.totalHours || 0), 0) /
      filteredData.length || 0;

  const daysOfWeek = [
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
    "Domingo",
  ];

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
                  <Calendar className="w-8 h-8 text-teal-600" />
                  Rodízio de Profissionais
                </h1>
                <p className="text-slate-600 mt-1">
                  Gerencie a escala de trabalho dos profissionais
                </p>
              </div>
              <Button className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white rounded-lg px-6 py-3 font-medium shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Novo Rodízio
              </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-4 border border-teal-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-teal-900">
                      Escalas Ativas
                    </p>
                    <p className="text-2xl font-bold text-teal-700 mt-1">
                      {activeRotations}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-teal-200 rounded-full flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-teal-700" />
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

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-blue-900">
                      Média de Horas
                    </p>
                    <p className="text-2xl font-bold text-blue-700 mt-1">
                      {avgHours.toFixed(1)}h
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-blue-700" />
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
                      Buscar profissional ou cargo
                    </label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <Input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Digite o nome ou cargo..."
                        className="pl-10 border-slate-300 focus:border-teal-500 focus:ring-teal-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Filtrar por dia da semana
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <select
                        value={selectedDay}
                        onChange={(e) => setSelectedDay(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:border-teal-500 focus:ring-teal-500 bg-white"
                      >
                        <option value="">Todos os dias</option>
                        {daysOfWeek.map((day) => (
                          <option key={day} value={day}>
                            {day}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {(searchTerm || selectedDay) && (
                  <div className="mt-4 flex gap-2">
                    <Button
                      onClick={() => {
                        setSearchTerm("");
                        setSelectedDay("");
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

          {/* Rotation Cards */}
          <div className="space-y-4">
            {filteredData.map((item, index) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow duration-200"
                style={{
                  animation: `slideIn 0.4s ease-out ${index * 50}ms both`,
                }}
              >
                {/* Card Header */}
                <div className="bg-gradient-to-r from-teal-50 to-white px-6 py-4 border-b border-slate-200">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                        {item.professional.charAt(0)}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                          <User className="w-5 h-5 text-teal-600" />
                          {item.professional}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600 mt-1">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {item.dayOfWeek}
                          </span>
                          {item.position && (
                            <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                              {item.position}
                            </span>
                          )}
                          <span
                            className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${
                              item.active
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                            }`}
                          >
                            {item.active ? (
                              <>
                                <ToggleRight className="w-4 h-4" />
                                Ativo
                              </>
                            ) : (
                              <>
                                <ToggleLeft className="w-4 h-4" />
                                Inativo
                              </>
                            )}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-xs text-slate-600">Horário</p>
                        <p className="text-xl font-bold text-teal-600">
                          {item.startTime} - {item.endTime}
                        </p>
                        {item.totalHours && (
                          <p className="text-xs text-slate-500 mt-1">
                            {item.totalHours}h de trabalho
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Quick Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                    <div className="bg-blue-50 rounded-lg p-3">
                      <p className="text-xs text-blue-700 mb-1 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        Início
                      </p>
                      <p className="text-sm font-semibold text-blue-900">
                        {item.startTime}
                      </p>
                    </div>

                    <div className="bg-orange-50 rounded-lg p-3">
                      <p className="text-xs text-orange-700 mb-1 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        Término
                      </p>
                      <p className="text-sm font-semibold text-orange-900">
                        {item.endTime}
                      </p>
                    </div>

                    {item.breakTime && (
                      <div className="bg-purple-50 rounded-lg p-3">
                        <p className="text-xs text-purple-700 mb-1 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          Intervalo
                        </p>
                        <p className="text-sm font-semibold text-purple-900">
                          {item.breakTime}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-2">
                    <Button
                      onClick={() =>
                        setExpandedItem(
                          expandedItem === item.id ? null : item.id
                        )
                      }
                      variant="outline"
                      className="text-sm border-slate-300 hover:bg-slate-50 flex items-center gap-2"
                    >
                      {expandedItem === item.id ? (
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
                      className="border-blue-300 text-blue-600 hover:bg-blue-50 flex items-center gap-1"
                    >
                      <Eye className="w-4 h-4" />
                      Visualizar
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
                        item.active
                          ? "border-orange-300 text-orange-600 hover:bg-orange-50"
                          : "border-green-300 text-green-600 hover:bg-green-50"
                      }`}
                    >
                      {item.active ? (
                        <>
                          <ToggleLeft className="w-4 h-4" />
                          Desativar
                        </>
                      ) : (
                        <>
                          <ToggleRight className="w-4 h-4" />
                          Ativar
                        </>
                      )}
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
                      expandedItem === item.id
                        ? "max-h-[1000px] opacity-100 mt-4"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl border border-slate-200 p-6">
                      <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                        <Info className="w-5 h-5 text-slate-600" />
                        Informações Detalhadas
                      </h4>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white border border-slate-200 rounded-lg p-4">
                          <p className="text-xs font-medium text-slate-600 uppercase mb-2">
                            Profissional
                          </p>
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4 text-teal-600" />
                            <p className="text-lg font-bold text-slate-900">
                              {item.professional}
                            </p>
                          </div>
                        </div>

                        {item.position && (
                          <div className="bg-white border border-slate-200 rounded-lg p-4">
                            <p className="text-xs font-medium text-slate-600 uppercase mb-2">
                              Cargo
                            </p>
                            <p className="text-lg font-bold text-slate-900">
                              {item.position}
                            </p>
                          </div>
                        )}

                        <div className="bg-white border border-slate-200 rounded-lg p-4">
                          <p className="text-xs font-medium text-slate-600 uppercase mb-2">
                            Dia da Semana
                          </p>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-teal-600" />
                            <p className="text-lg font-bold text-slate-900">
                              {item.dayOfWeek}
                            </p>
                          </div>
                        </div>

                        {item.totalHours && (
                          <div className="bg-white border border-slate-200 rounded-lg p-4">
                            <p className="text-xs font-medium text-slate-600 uppercase mb-2">
                              Total de Horas
                            </p>
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4 text-teal-600" />
                              <p className="text-lg font-bold text-slate-900">
                                {item.totalHours} horas
                              </p>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Schedule Timeline */}
                      <div className="mt-4 bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-200 rounded-lg p-4">
                        <p className="text-xs font-medium text-teal-900 uppercase mb-3">
                          Cronograma do Dia
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            <span className="text-sm font-semibold text-slate-900">
                              {item.startTime}
                            </span>
                            <span className="text-sm text-slate-600">
                              - Início do expediente
                            </span>
                          </div>
                          {item.breakTime && (
                            <div className="flex items-center gap-3">
                              <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                              <span className="text-sm font-semibold text-slate-900">
                                {item.breakTime}
                              </span>
                              <span className="text-sm text-slate-600">
                                - Intervalo
                              </span>
                            </div>
                          )}
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-red-500"></div>
                            <span className="text-sm font-semibold text-slate-900">
                              {item.endTime}
                            </span>
                            <span className="text-sm text-slate-600">
                              - Fim do expediente
                            </span>
                          </div>
                        </div>
                      </div>

                      {item.notes && (
                        <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
                          <p className="text-xs font-medium text-blue-900 uppercase mb-2 flex items-center gap-1">
                            <Info className="w-3 h-3" />
                            Observações
                          </p>
                          <p className="text-sm text-blue-900">{item.notes}</p>
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
                  <Calendar className="w-8 h-8 text-slate-400" />
                </div>
                <p className="text-slate-600 text-lg font-medium">
                  Nenhum rodízio encontrado
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

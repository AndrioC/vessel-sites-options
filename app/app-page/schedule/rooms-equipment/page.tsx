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
  DoorOpen,
  Cpu,
  Users,
  TrendingUp,
  ChevronDown,
  ChevronUp,
  Info,
  MapPin,
  Wrench,
  CheckCircle2,
  Clock,
  Settings,
  AlertCircle,
} from "lucide-react";

interface RoomEquipment {
  id: number;
  name: string;
  type: string;
  capacity: number;
  status: "available" | "in-use" | "maintenance";
  location?: string;
  lastMaintenance?: string;
  nextMaintenance?: string;
  description?: string;
  accessories?: string[];
  specifications?: {
    brand?: string;
    model?: string;
    year?: string;
    power?: string;
  };
}

export default function RoomsEquipmentPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState<"rooms" | "equipment">("rooms");
  const [filterExpanded, setFilterExpanded] = useState(false);
  const [expandedItem, setExpandedItem] = useState<number | null>(null);
  const [statusFilter, setStatusFilter] = useState("");

  const roomsData: RoomEquipment[] = [
    {
      id: 1,
      name: "Sala 1",
      type: "Atendimento Geral",
      capacity: 2,
      status: "available",
      location: "Térreo - Ala A",
      lastMaintenance: "15/10/2025",
      nextMaintenance: "15/01/2026",
      description: "Sala ampla com boa iluminação natural",
      accessories: [
        "Espelho",
        "Cadeira hidráulica",
        "Carrinho auxiliar",
        "Secador",
      ],
    },
    {
      id: 2,
      name: "Sala 2",
      type: "Massagem e Estética",
      capacity: 1,
      status: "in-use",
      location: "Térreo - Ala B",
      lastMaintenance: "20/10/2025",
      nextMaintenance: "20/01/2026",
      description: "Sala climatizada e com isolamento acústico",
      accessories: ["Maca", "Armário", "Aquecedor de toalhas"],
    },
    {
      id: 3,
      name: "Sala VIP",
      type: "Atendimento Premium",
      capacity: 3,
      status: "available",
      location: "1º Andar",
      lastMaintenance: "01/11/2025",
      nextMaintenance: "01/02/2026",
      description: "Sala luxuosa com banheiro privativo",
      accessories: [
        "2 Poltronas premium",
        "TV",
        "Som ambiente",
        "Frigobar",
        "Banheiro",
      ],
    },
    {
      id: 4,
      name: "Sala 3",
      type: "Coloração",
      capacity: 2,
      status: "maintenance",
      location: "Térreo - Ala A",
      lastMaintenance: "25/11/2025",
      nextMaintenance: "25/12/2025",
      description: "Sala em reforma - previsão de retorno em 1 semana",
      accessories: ["Lavatório", "Cadeiras", "Ventilação especial"],
    },
  ];

  const equipmentData: RoomEquipment[] = [
    {
      id: 1,
      name: "Secador Profissional Pro Max",
      type: "Equipamento de Cabelo",
      capacity: 1,
      status: "available",
      location: "Sala 1",
      lastMaintenance: "10/11/2025",
      nextMaintenance: "10/02/2026",
      description: "Secador de alta potência com controle de temperatura",
      specifications: {
        brand: "PhilCo Professional",
        model: "Pro Max 3000",
        year: "2024",
        power: "2200W",
      },
    },
    {
      id: 2,
      name: "Cadeira Reclinável Premium",
      type: "Mobília",
      capacity: 1,
      status: "maintenance",
      location: "Sala 2",
      lastMaintenance: "28/11/2025",
      nextMaintenance: "28/12/2025",
      description: "Cadeira em manutenção - substituição de pistão",
      specifications: {
        brand: "Ferrante",
        model: "Confort Plus",
        year: "2023",
      },
    },
    {
      id: 3,
      name: "Laser Dermatológico",
      type: "Equipamento Estético",
      capacity: 1,
      status: "in-use",
      location: "Sala VIP",
      lastMaintenance: "05/11/2025",
      nextMaintenance: "05/02/2026",
      description: "Equipamento de última geração para tratamentos faciais",
      specifications: {
        brand: "MedTech Solutions",
        model: "LaserPro 5000",
        year: "2024",
        power: "1500W",
      },
    },
    {
      id: 4,
      name: "Maca Térmica",
      type: "Equipamento de Massagem",
      capacity: 1,
      status: "available",
      location: "Sala 2",
      lastMaintenance: "15/11/2025",
      nextMaintenance: "15/02/2026",
      description: "Maca com sistema de aquecimento integrado",
      specifications: {
        brand: "Relaxmed",
        model: "ThermoComfort",
        year: "2024",
      },
    },
  ];

  const currentData = activeTab === "rooms" ? roomsData : equipmentData;

  const filteredData = currentData.filter((item) => {
    const matchSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchStatus = statusFilter ? item.status === statusFilter : true;
    return matchSearch && matchStatus;
  });

  // Estatísticas
  const totalItems = filteredData.length;
  const availableItems = filteredData.filter(
    (i) => i.status === "available"
  ).length;
  const inUseItems = filteredData.filter((i) => i.status === "in-use").length;
  const maintenanceItems = filteredData.filter(
    (i) => i.status === "maintenance"
  ).length;

  const getStatusInfo = (
    status: "available" | "in-use" | "maintenance"
  ): {
    label: string;
    color: string;
    icon: React.ComponentType<{ className?: string }>;
  } => {
    switch (status) {
      case "available":
        return {
          label: "Disponível",
          color: "bg-green-100 text-green-700",
          icon: CheckCircle2,
        };
      case "in-use":
        return {
          label: "Em Uso",
          color: "bg-blue-100 text-blue-700",
          icon: Clock,
        };
      case "maintenance":
        return {
          label: "Manutenção",
          color: "bg-orange-100 text-orange-700",
          icon: AlertCircle,
        };
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
                  {activeTab === "rooms" ? (
                    <DoorOpen className="w-8 h-8 text-cyan-600" />
                  ) : (
                    <Cpu className="w-8 h-8 text-cyan-600" />
                  )}
                  {activeTab === "rooms" ? "Salas" : "Aparelhos"}
                </h1>
                <p className="text-slate-600 mt-1">
                  {activeTab === "rooms"
                    ? "Gerencie as salas do estabelecimento"
                    : "Gerencie equipamentos e aparelhos"}
                </p>
              </div>
              <Button className="bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 text-white rounded-lg px-6 py-3 font-medium shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Novo {activeTab === "rooms" ? "Sala" : "Aparelho"}
              </Button>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 mt-6 border-b border-slate-200">
              <button
                onClick={() => setActiveTab("rooms")}
                className={`px-6 py-3 font-medium transition-all duration-200 border-b-2 ${
                  activeTab === "rooms"
                    ? "border-cyan-600 text-cyan-700"
                    : "border-transparent text-slate-500 hover:text-slate-700"
                }`}
              >
                <DoorOpen className="w-4 h-4 inline mr-2" />
                Salas
              </button>
              <button
                onClick={() => setActiveTab("equipment")}
                className={`px-6 py-3 font-medium transition-all duration-200 border-b-2 ${
                  activeTab === "equipment"
                    ? "border-cyan-600 text-cyan-700"
                    : "border-transparent text-slate-500 hover:text-slate-700"
                }`}
              >
                <Cpu className="w-4 h-4 inline mr-2" />
                Aparelhos
              </button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-4 border border-slate-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium text-slate-600">Total</p>
                    <p className="text-2xl font-bold text-slate-900 mt-1">
                      {totalItems}
                    </p>
                  </div>
                  <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-slate-700" />
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 border border-green-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium text-green-900">
                      Disponível
                    </p>
                    <p className="text-2xl font-bold text-green-700 mt-1">
                      {availableItems}
                    </p>
                  </div>
                  <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-green-700" />
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium text-blue-900">Em Uso</p>
                    <p className="text-2xl font-bold text-blue-700 mt-1">
                      {inUseItems}
                    </p>
                  </div>
                  <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5 text-blue-700" />
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 border border-orange-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium text-orange-900">
                      Manutenção
                    </p>
                    <p className="text-2xl font-bold text-orange-700 mt-1">
                      {maintenanceItems}
                    </p>
                  </div>
                  <div className="w-10 h-10 bg-orange-200 rounded-full flex items-center justify-center">
                    <Wrench className="w-5 h-5 text-orange-700" />
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
                      Buscar por nome, tipo ou localização
                    </label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <Input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Digite para buscar..."
                        className="pl-10 border-slate-300 focus:border-cyan-500 focus:ring-cyan-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Filtrar por status
                    </label>
                    <select
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value)}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:border-cyan-500 focus:ring-cyan-500 bg-white"
                    >
                      <option value="">Todos os status</option>
                      <option value="available">Disponível</option>
                      <option value="in-use">Em Uso</option>
                      <option value="maintenance">Manutenção</option>
                    </select>
                  </div>
                </div>

                {(searchTerm || statusFilter) && (
                  <div className="mt-4 flex gap-2">
                    <Button
                      onClick={() => {
                        setSearchTerm("");
                        setStatusFilter("");
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

          {/* Items Cards */}
          <div className="space-y-4">
            {filteredData.map((item, index) => {
              const statusInfo = getStatusInfo(item.status);
              const StatusIcon = statusInfo.icon;

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow duration-200"
                  style={{
                    animation: `slideIn 0.4s ease-out ${index * 50}ms both`,
                  }}
                >
                  {/* Card Header */}
                  <div className="bg-gradient-to-r from-cyan-50 to-white px-6 py-4 border-b border-slate-200">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                          {activeTab === "rooms" ? (
                            <DoorOpen className="w-7 h-7" />
                          ) : (
                            <Cpu className="w-7 h-7" />
                          )}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-slate-900">
                            {item.name}
                          </h3>
                          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600 mt-1">
                            <span className="flex items-center gap-1">
                              <Settings className="w-4 h-4" />
                              {item.type}
                            </span>
                            {item.location && (
                              <span className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {item.location}
                              </span>
                            )}
                            <span
                              className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${statusInfo.color}`}
                            >
                              <StatusIcon className="w-3 h-3" />
                              {statusInfo.label}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        {activeTab === "rooms" && (
                          <div className="text-right">
                            <p className="text-xs text-slate-600">Capacidade</p>
                            <p className="text-2xl font-bold text-cyan-600">
                              {item.capacity}
                            </p>
                            <p className="text-xs text-slate-500">
                              {item.capacity === 1 ? "pessoa" : "pessoas"}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    {/* Quick Info */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                      {item.lastMaintenance && (
                        <div className="bg-blue-50 rounded-lg p-3">
                          <p className="text-xs text-blue-700 mb-1 flex items-center gap-1">
                            <Wrench className="w-3 h-3" />
                            Última Manutenção
                          </p>
                          <p className="text-sm font-semibold text-blue-900">
                            {item.lastMaintenance}
                          </p>
                        </div>
                      )}

                      {item.nextMaintenance && (
                        <div className="bg-purple-50 rounded-lg p-3">
                          <p className="text-xs text-purple-700 mb-1 flex items-center gap-1">
                            <Wrench className="w-3 h-3" />
                            Próxima Manutenção
                          </p>
                          <p className="text-sm font-semibold text-purple-900">
                            {item.nextMaintenance}
                          </p>
                        </div>
                      )}

                      {activeTab === "rooms" && (
                        <div className="bg-cyan-50 rounded-lg p-3">
                          <p className="text-xs text-cyan-700 mb-1 flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            Capacidade
                          </p>
                          <p className="text-sm font-semibold text-cyan-900">
                            {item.capacity}{" "}
                            {item.capacity === 1 ? "pessoa" : "pessoas"}
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
                      {item.status === "available" && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-cyan-300 text-cyan-600 hover:bg-cyan-50 flex items-center gap-1"
                        >
                          <CheckCircle2 className="w-4 h-4" />
                          Marcar como Em Uso
                        </Button>
                      )}
                      {item.status !== "maintenance" && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-orange-300 text-orange-600 hover:bg-orange-50 flex items-center gap-1"
                        >
                          <Wrench className="w-4 h-4" />
                          Manutenção
                        </Button>
                      )}
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
                          ? "max-h-[2000px] opacity-100 mt-4"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl border border-slate-200 p-6">
                        <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                          <Info className="w-5 h-5 text-slate-600" />
                          Informações Detalhadas
                        </h4>

                        {item.description && (
                          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                            <p className="text-xs font-medium text-blue-900 uppercase mb-2">
                              Descrição
                            </p>
                            <p className="text-sm text-blue-900">
                              {item.description}
                            </p>
                          </div>
                        )}

                        {/* Specifications for Equipment */}
                        {item.specifications && (
                          <div className="mb-4">
                            <p className="text-sm font-semibold text-slate-900 mb-3">
                              Especificações Técnicas
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {item.specifications.brand && (
                                <div className="bg-white border border-slate-200 rounded-lg p-3">
                                  <p className="text-xs text-slate-600 mb-1">
                                    Marca
                                  </p>
                                  <p className="text-sm font-semibold text-slate-900">
                                    {item.specifications.brand}
                                  </p>
                                </div>
                              )}
                              {item.specifications.model && (
                                <div className="bg-white border border-slate-200 rounded-lg p-3">
                                  <p className="text-xs text-slate-600 mb-1">
                                    Modelo
                                  </p>
                                  <p className="text-sm font-semibold text-slate-900">
                                    {item.specifications.model}
                                  </p>
                                </div>
                              )}
                              {item.specifications.year && (
                                <div className="bg-white border border-slate-200 rounded-lg p-3">
                                  <p className="text-xs text-slate-600 mb-1">
                                    Ano
                                  </p>
                                  <p className="text-sm font-semibold text-slate-900">
                                    {item.specifications.year}
                                  </p>
                                </div>
                              )}
                              {item.specifications.power && (
                                <div className="bg-white border border-slate-200 rounded-lg p-3">
                                  <p className="text-xs text-slate-600 mb-1">
                                    Potência
                                  </p>
                                  <p className="text-sm font-semibold text-slate-900">
                                    {item.specifications.power}
                                  </p>
                                </div>
                              )}
                            </div>
                          </div>
                        )}

                        {/* Accessories */}
                        {item.accessories && item.accessories.length > 0 && (
                          <div>
                            <p className="text-sm font-semibold text-slate-900 mb-3">
                              {activeTab === "rooms"
                                ? "Itens Disponíveis"
                                : "Acessórios"}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {item.accessories.map((acc, idx) => (
                                <span
                                  key={idx}
                                  className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-xs font-medium"
                                >
                                  {acc}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Maintenance Schedule */}
                        {(item.lastMaintenance || item.nextMaintenance) && (
                          <div className="mt-4 bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-4">
                            <p className="text-xs font-medium text-purple-900 uppercase mb-3 flex items-center gap-1">
                              <Wrench className="w-3 h-3" />
                              Cronograma de Manutenção
                            </p>
                            <div className="space-y-2">
                              {item.lastMaintenance && (
                                <div className="flex items-center gap-2">
                                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                  <span className="text-sm text-slate-900">
                                    <strong>Última:</strong>{" "}
                                    {item.lastMaintenance}
                                  </span>
                                </div>
                              )}
                              {item.nextMaintenance && (
                                <div className="flex items-center gap-2">
                                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                                  <span className="text-sm text-slate-900">
                                    <strong>Próxima:</strong>{" "}
                                    {item.nextMaintenance}
                                  </span>
                                </div>
                              )}
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
                  {activeTab === "rooms" ? (
                    <DoorOpen className="w-8 h-8 text-slate-400" />
                  ) : (
                    <Cpu className="w-8 h-8 text-slate-400" />
                  )}
                </div>
                <p className="text-slate-600 text-lg font-medium">
                  Nenhum {activeTab === "rooms" ? "sala" : "aparelho"}{" "}
                  encontrado
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

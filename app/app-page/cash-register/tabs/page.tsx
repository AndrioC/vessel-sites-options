"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ChevronDown,
  ChevronUp,
  Eye,
  Edit,
  Search,
  Calendar,
  User,
  DollarSign,
  FileText,
  CheckCircle2,
  XCircle,
  Circle,
  Clock,
  Info,
  ShoppingBag,
  CreditCard,
  Trash,
  Receipt,
} from "lucide-react";

interface TabItem {
  service: string;
  professional: string;
  value: number;
  discount?: number;
}

interface Tab {
  id: number;
  client: string;
  date: string;
  total: number;
  status: "open" | "cancelled" | "closed";
  openedAt?: string;
  closedAt?: string;
  items?: TabItem[];
  paymentMethod?: string;
  observation?: string;
  discount?: number;
  subtotal?: number;
}

const tabsData: Tab[] = [
  {
    id: 1,
    client: "João Silva",
    date: "28/11/2025",
    total: 150.0,
    status: "open",
    openedAt: "09:30",
    subtotal: 150.0,
    discount: 0,
    items: [
      { service: "Corte Masculino", professional: "Carlos", value: 50.0 },
      { service: "Barba", professional: "Carlos", value: 40.0 },
      { service: "Hidratação", professional: "Maria", value: 60.0 },
    ],
    observation: "Cliente preferencial - solicita o profissional Carlos",
  },
  {
    id: 2,
    client: "Maria Santos",
    date: "28/11/2025",
    total: 89.0,
    status: "open",
    openedAt: "10:15",
    subtotal: 100.0,
    discount: 11.0,
    items: [
      { service: "Escova", professional: "Ana", value: 45.0 },
      {
        service: "Manicure",
        professional: "Paula",
        value: 35.0,
        discount: 5.0,
      },
      {
        service: "Design de Sobrancelhas",
        professional: "Júlia",
        value: 25.0,
        discount: 6.0,
      },
    ],
    observation: "Aplicado desconto de 11% no total",
  },
  {
    id: 3,
    client: "Carlos Oliveira",
    date: "27/11/2025",
    total: 220.5,
    status: "cancelled",
    openedAt: "14:20",
    closedAt: "14:45",
    subtotal: 220.5,
    discount: 0,
    items: [
      { service: "Coloração", professional: "Fernanda", value: 120.0 },
      { service: "Corte e Escova", professional: "Fernanda", value: 100.5 },
    ],
    observation: "Cancelado - cliente teve imprevisto",
  },
  {
    id: 4,
    client: "Ana Costa",
    date: "27/11/2025",
    total: 340.0,
    status: "closed",
    openedAt: "11:00",
    closedAt: "13:30",
    subtotal: 360.0,
    discount: 20.0,
    paymentMethod: "Cartão de Crédito",
    items: [
      { service: "Progressiva", professional: "Renata", value: 250.0 },
      { service: "Corte", professional: "Renata", value: 60.0 },
      {
        service: "Hidratação",
        professional: "Renata",
        value: 50.0,
        discount: 20.0,
      },
    ],
    observation: "Desconto especial para pacote completo",
  },
];

export default function TabsPage() {
  const [activeTab, setActiveTab] = useState<"open" | "cancelled" | "closed">(
    "open"
  );
  const [searchFilter, setSearchFilter] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [filterExpanded, setFilterExpanded] = useState(false);
  const [expandedTab, setExpandedTab] = useState<number | null>(null);

  const filteredTabs = tabsData.filter((tab) => {
    const matchStatus = tab.status === activeTab;
    const matchSearch =
      tab.client.toLowerCase().includes(searchFilter.toLowerCase()) ||
      tab.id.toString().includes(searchFilter);
    return matchStatus && matchSearch;
  });

  // Calcula totais para estatísticas
  const totalOpen = filteredTabs.reduce(
    (sum, tab) => (tab.status === "open" ? sum + tab.total : sum),
    0
  );
  const openCount = tabsData.filter((t) => t.status === "open").length;

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
                  <FileText className="w-8 h-8 text-blue-600" />
                  Comandas
                </h1>
                <p className="text-slate-600 mt-1">
                  Gestão de comandas do salão
                </p>
              </div>
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg px-6 py-3 font-medium shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2">
                <Circle className="w-4 h-4" />
                Nova Comanda
              </Button>
            </div>

            {/* Stats Cards */}
            {activeTab === "open" && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-blue-900">
                        Comandas Abertas
                      </p>
                      <p className="text-2xl font-bold text-blue-700 mt-1">
                        {openCount}
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center">
                      <FileText className="w-6 h-6 text-blue-700" />
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-4 border border-emerald-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-emerald-900">
                        Total em Comandas
                      </p>
                      <p className="text-2xl font-bold text-emerald-700 mt-1">
                        R$ {totalOpen.toFixed(2)}
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-emerald-200 rounded-full flex items-center justify-center">
                      <DollarSign className="w-6 h-6 text-emerald-700" />
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 border border-purple-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-purple-900">
                        Ticket Médio
                      </p>
                      <p className="text-2xl font-bold text-purple-700 mt-1">
                        R${" "}
                        {openCount > 0
                          ? (totalOpen / openCount).toFixed(2)
                          : "0.00"}
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-purple-700" />
                    </div>
                  </div>
                </div>
              </div>
            )}
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Buscar por cliente ou número
                    </label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <Input
                        type="text"
                        value={searchFilter}
                        onChange={(e) => setSearchFilter(e.target.value)}
                        placeholder="Digite o nome ou número..."
                        className="pl-10 border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Data Inicial
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <Input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="pl-10 border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Data Final
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <Input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="pl-10 border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>

                {(searchFilter || startDate || endDate) && (
                  <div className="mt-4 flex gap-2">
                    <Button
                      onClick={() => {
                        setSearchFilter("");
                        setStartDate("");
                        setEndDate("");
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

          {/* Tabs */}
          <div className="bg-white rounded-t-xl shadow-sm border border-slate-200 border-b-0">
            <div className="flex">
              <button
                onClick={() => setActiveTab("open")}
                className={`flex-1 px-6 py-4 font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
                  activeTab === "open"
                    ? "bg-blue-50 text-blue-700 border-b-2 border-blue-600"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                <Circle className="w-4 h-4" />
                Abertas
              </button>
              <button
                onClick={() => setActiveTab("cancelled")}
                className={`flex-1 px-6 py-4 font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
                  activeTab === "cancelled"
                    ? "bg-red-50 text-red-700 border-b-2 border-red-600"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                <XCircle className="w-4 h-4" />
                Canceladas
              </button>
              <button
                onClick={() => setActiveTab("closed")}
                className={`flex-1 px-6 py-4 font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
                  activeTab === "closed"
                    ? "bg-green-50 text-green-700 border-b-2 border-green-600"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                Finalizadas
              </button>
            </div>
          </div>

          {/* Comandas List */}
          <div className="space-y-4">
            {filteredTabs.map((tab, index) => (
              <div
                key={tab.id}
                className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow duration-200"
                style={{
                  animation: `slideIn 0.4s ease-out ${index * 50}ms both`,
                }}
              >
                {/* Card Header */}
                <div
                  className={`px-6 py-4 border-b border-slate-200 ${
                    tab.status === "open"
                      ? "bg-gradient-to-r from-blue-50 to-white"
                      : tab.status === "cancelled"
                      ? "bg-gradient-to-r from-red-50 to-white"
                      : "bg-gradient-to-r from-green-50 to-white"
                  }`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-white text-lg shadow-lg ${
                          tab.status === "open"
                            ? "bg-gradient-to-br from-blue-500 to-blue-600"
                            : tab.status === "cancelled"
                            ? "bg-gradient-to-br from-red-500 to-red-600"
                            : "bg-gradient-to-br from-green-500 to-green-600"
                        }`}
                      >
                        #{tab.id}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                          <User className="w-5 h-5 text-slate-600" />
                          {tab.client}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600 mt-1">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {tab.date}
                          </span>
                          {tab.openedAt && (
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              Aberta às {tab.openedAt}
                            </span>
                          )}
                          {tab.items && (
                            <span className="flex items-center gap-1">
                              <ShoppingBag className="w-4 h-4" />
                              {tab.items.length}{" "}
                              {tab.items.length === 1 ? "serviço" : "serviços"}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="text-sm text-slate-600">Total</p>
                      <p className="text-3xl font-bold text-blue-600">
                        R$ {tab.total.toFixed(2)}
                      </p>
                      {tab.discount && tab.discount > 0 && (
                        <p className="text-xs text-red-600 font-medium mt-1">
                          Desconto: R$ {tab.discount.toFixed(2)}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Button
                      onClick={() =>
                        setExpandedTab(expandedTab === tab.id ? null : tab.id)
                      }
                      variant="outline"
                      className="text-sm border-slate-300 hover:bg-slate-50 flex items-center gap-2"
                    >
                      {expandedTab === tab.id ? (
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
                    {tab.status === "open" && (
                      <>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-purple-300 text-purple-600 hover:bg-purple-50 flex items-center gap-1"
                        >
                          <Receipt className="w-4 h-4" />
                          Adicionar Serviço
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-green-300 text-green-600 hover:bg-green-50 flex items-center gap-1"
                        >
                          <CheckCircle2 className="w-4 h-4" />
                          Finalizar
                        </Button>
                      </>
                    )}
                    {tab.status !== "closed" && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-red-300 text-red-600 hover:bg-red-50 flex items-center gap-1"
                      >
                        <Trash className="w-4 h-4" />
                        {tab.status === "cancelled" ? "Excluir" : "Cancelar"}
                      </Button>
                    )}
                  </div>

                  {/* Quick Summary */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    {tab.subtotal && (
                      <div className="bg-slate-50 rounded-lg p-3">
                        <p className="text-xs text-slate-600 mb-1">Subtotal</p>
                        <p className="text-sm font-semibold text-slate-900">
                          R$ {tab.subtotal.toFixed(2)}
                        </p>
                      </div>
                    )}

                    {tab.discount !== undefined && (
                      <div className="bg-red-50 rounded-lg p-3">
                        <p className="text-xs text-red-700 mb-1">Desconto</p>
                        <p className="text-sm font-semibold text-red-900">
                          R$ {tab.discount.toFixed(2)}
                        </p>
                      </div>
                    )}

                    {tab.closedAt && (
                      <div className="bg-green-50 rounded-lg p-3">
                        <p className="text-xs text-green-700 mb-1 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          Fechamento
                        </p>
                        <p className="text-sm font-semibold text-green-900">
                          {tab.closedAt}
                        </p>
                      </div>
                    )}

                    {tab.paymentMethod && (
                      <div className="bg-blue-50 rounded-lg p-3">
                        <p className="text-xs text-blue-700 mb-1 flex items-center gap-1">
                          <CreditCard className="w-3 h-3" />
                          Pagamento
                        </p>
                        <p className="text-sm font-semibold text-blue-900">
                          {tab.paymentMethod}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Expanded Details */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      expandedTab === tab.id
                        ? "max-h-[2000px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {tab.items && (
                      <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl border border-slate-200 p-6">
                        <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                          <ShoppingBag className="w-5 h-5 text-slate-600" />
                          Serviços da Comanda
                        </h4>

                        <div className="space-y-3">
                          {tab.items.map((item, idx) => (
                            <div
                              key={idx}
                              className="bg-white border border-slate-200 rounded-lg p-4 hover:border-blue-300 transition-colors"
                              style={{
                                animation: `slideIn 0.3s ease-out ${
                                  idx * 0.05
                                }s both`,
                              }}
                            >
                              <div className="flex items-start justify-between gap-4">
                                <div className="flex-1">
                                  <h5 className="font-semibold text-slate-900">
                                    {item.service}
                                  </h5>
                                  <p className="text-sm text-slate-600 mt-1 flex items-center gap-1">
                                    <User className="w-3 h-3" />
                                    Profissional: {item.professional}
                                  </p>
                                </div>
                                <div className="text-right">
                                  <p className="text-lg font-bold text-emerald-600">
                                    R$ {item.value.toFixed(2)}
                                  </p>
                                  {item.discount && item.discount > 0 && (
                                    <p className="text-xs text-red-600 font-medium mt-1">
                                      Desc: R$ {item.discount.toFixed(2)}
                                    </p>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Total Summary */}
                        <div className="mt-6 pt-4 border-t-2 border-slate-200">
                          <div className="space-y-2">
                            {tab.subtotal && (
                              <div className="flex justify-between items-center">
                                <span className="text-slate-600">
                                  Subtotal:
                                </span>
                                <span className="font-semibold text-slate-900">
                                  R$ {tab.subtotal.toFixed(2)}
                                </span>
                              </div>
                            )}
                            {tab.discount && tab.discount > 0 && (
                              <div className="flex justify-between items-center">
                                <span className="text-red-600">Desconto:</span>
                                <span className="font-semibold text-red-600">
                                  - R$ {tab.discount.toFixed(2)}
                                </span>
                              </div>
                            )}
                            <div className="flex justify-between items-center pt-2 border-t border-slate-200">
                              <span className="text-lg font-semibold text-slate-900">
                                Total:
                              </span>
                              <span className="text-2xl font-bold text-blue-600">
                                R$ {tab.total.toFixed(2)}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Observation */}
                        {tab.observation && (
                          <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
                            <p className="text-xs font-medium text-blue-900 uppercase mb-2 flex items-center gap-1">
                              <Info className="w-3 h-3" />
                              Observação
                            </p>
                            <p className="text-sm text-blue-900">
                              {tab.observation}
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {filteredTabs.length === 0 && (
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-12 text-center">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-slate-400" />
                </div>
                <p className="text-slate-600 text-lg font-medium">
                  Nenhuma comanda{" "}
                  {activeTab === "open"
                    ? "aberta"
                    : activeTab === "cancelled"
                    ? "cancelada"
                    : "finalizada"}{" "}
                  encontrada
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

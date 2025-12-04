"use client";

import { useState, Fragment } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ChevronDown,
  ChevronUp,
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
  ShoppingBag,
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

                <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        Total em Comandas
                      </p>
                      <p className="text-2xl font-bold text-blue-600 mt-1">
                        R$ {totalOpen.toFixed(2)}
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <DollarSign className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        Ticket Médio
                      </p>
                      <p className="text-2xl font-bold text-gray-900 mt-1">
                        R${" "}
                        {openCount > 0
                          ? (totalOpen / openCount).toFixed(2)
                          : "0.00"}
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-gray-600" />
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

          {/* Comandas List (Tabela) */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-slate-600">
                    #
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-slate-600">
                    Cliente
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-slate-600">
                    Data
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-slate-600">
                    Serviços
                  </th>
                  <th className="px-6 py-3 text-right text-sm font-medium text-slate-600">
                    Total
                  </th>
                  <th className="px-6 py-3 text-center text-sm font-medium text-slate-600">
                    Status
                  </th>
                  <th className="px-6 py-3 text-center text-sm font-medium text-slate-600">
                    Ações
                  </th>
                </tr>
              </thead>

              <tbody className="bg-white divide-y divide-slate-100">
                {filteredTabs.map((tab) => (
                  <Fragment key={tab.id}>
                    <tr className="hover:bg-slate-50">
                      <td className="px-6 py-4 align-middle text-sm text-slate-700">
                        #{tab.id}
                      </td>
                      <td className="px-6 py-4 align-middle">
                        <div className="font-semibold text-slate-900">
                          {tab.client}
                        </div>
                        <div className="text-xs text-slate-500 mt-1 flex items-center gap-2">
                          <Clock className="w-3 h-3" />
                          <span>
                            {tab.openedAt ? `Aberta às ${tab.openedAt}` : ""}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 align-middle text-sm text-slate-600">
                        {tab.date}
                      </td>
                      <td className="px-6 py-4 align-middle text-sm text-slate-600">
                        {tab.items?.length ?? 0}
                      </td>
                      <td className="px-6 py-4 align-middle text-right font-semibold text-blue-600">
                        R$ {tab.total.toFixed(2)}
                      </td>
                      <td className="px-6 py-4 align-middle text-center">
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                            tab.status === "open"
                              ? "bg-blue-50 text-blue-700"
                              : tab.status === "cancelled"
                              ? "bg-red-50 text-red-700"
                              : "bg-green-50 text-green-700"
                          }`}
                        >
                          {tab.status === "open"
                            ? "Aberta"
                            : tab.status === "cancelled"
                            ? "Cancelada"
                            : "Finalizada"}
                        </span>
                      </td>
                      <td className="px-6 py-4 align-middle text-center">
                        <div className="flex items-center justify-center gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-sm border-slate-300 hover:bg-slate-50 flex items-center gap-2"
                            onClick={() =>
                              setExpandedTab(
                                expandedTab === tab.id ? null : tab.id
                              )
                            }
                          >
                            {expandedTab === tab.id ? (
                              <>
                                <ChevronUp className="w-4 h-4" />
                                Ocultar
                              </>
                            ) : (
                              <>
                                <ChevronDown className="w-4 h-4" />
                                Detalhes
                              </>
                            )}
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-gray-300 text-gray-600 hover:bg-gray-50 flex items-center gap-1"
                          >
                            <Edit className="w-4 h-4" />
                            Editar
                          </Button>
                        </div>
                      </td>
                    </tr>

                    {expandedTab === tab.id && (
                      <tr>
                        <td colSpan={7} className="px-6 py-4 bg-slate-50">
                          <div className="mb-4">
                            <h4 className="text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2">
                              <ShoppingBag className="w-4 h-4 text-slate-600" />
                              Serviços da Comanda
                            </h4>

                            <div className="overflow-x-auto">
                              <table className="w-full text-sm">
                                <thead>
                                  <tr className="text-left text-xs text-slate-500">
                                    <th className="py-2">Serviço</th>
                                    <th className="py-2">Profissional</th>
                                    <th className="py-2 text-right">Valor</th>
                                    <th className="py-2 text-right">
                                      Desconto
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {tab.items?.map((item, idx) => (
                                    <tr
                                      key={idx}
                                      className="border-t border-slate-100"
                                    >
                                      <td className="py-3">{item.service}</td>
                                      <td className="py-3 text-slate-600">
                                        {item.professional}
                                      </td>
                                      <td className="py-3 text-right font-semibold text-slate-900">
                                        R$ {item.value.toFixed(2)}
                                      </td>
                                      <td className="py-3 text-right text-red-600">
                                        {item.discount
                                          ? `R$ ${item.discount.toFixed(2)}`
                                          : "-"}
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>

                            <div className="mt-4 border-t border-slate-200 pt-3 flex flex-col md:flex-row md:justify-end md:items-center gap-2">
                              <div className="text-sm text-slate-600 md:mr-6">
                                Subtotal:{" "}
                                <span className="font-semibold text-slate-900">
                                  R$ {tab.subtotal?.toFixed(2) ?? "0.00"}
                                </span>
                              </div>
                              {tab.discount && tab.discount > 0 && (
                                <div className="text-sm text-red-600">
                                  Desconto:{" "}
                                  <span className="font-semibold">
                                    R$ {tab.discount.toFixed(2)}
                                  </span>
                                </div>
                              )}
                              <div className="text-lg font-bold text-blue-600 md:ml-6">
                                Total: R$ {tab.total.toFixed(2)}
                              </div>
                            </div>

                            {tab.observation && (
                              <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-3">
                                <p className="text-xs text-blue-900 font-medium mb-1">
                                  Observação
                                </p>
                                <p className="text-sm text-blue-900">
                                  {tab.observation}
                                </p>
                              </div>
                            )}
                          </div>
                        </td>
                      </tr>
                    )}
                  </Fragment>
                ))}
              </tbody>
            </table>

            {filteredTabs.length === 0 && (
              <div className="p-12 text-center">
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

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  User,
  DollarSign,
  TrendingUp,
  ChevronDown,
  ChevronUp,
  FileText,
  CheckCircle2,
  Clock,
  X,
  Package,
  CreditCard,
  Users,
  Receipt,
} from "lucide-react";

interface Commission {
  id: number;
  professional: string;
  position: string;
  openValue: number;
  paidValue: number;
  status: "open" | "paid";
  commissionDetails?: {
    credits: {
      items: Array<{
        command: string;
        date: string;
        service: string;
        client: string;
        base: number;
        paymentMethod: string;
        cardFee: number;
        anticipationFee: number;
        serviceCost: number;
        adminFee: number;
        productCost: number;
        commission: number;
        commission_percentage: number;
        assistantFee: number;
        assistant_percentage: number;
        assistant: string;
        net_percentage: number;
        status: string;
      }>;
      total: number;
    };
    debits: {
      items: Array<{
        command: string;
        date: string;
        service: string;
        client: string;
        base: number;
        type: string;
        paymentMethod: string;
        serviceCost: number;
        productCost: number;
        commission_percentage: number;
        commission: number;
        assistant_percentage: number;
        assistant: string;
        net_percentage: number;
        observation: string;
        status: string;
      }>;
      total: number;
    };
    warnings: {
      items: Array<{
        command: string;
        date: string;
        service: string;
        client: string;
        base: number;
        paymentMethod: string;
        observation: string;
        value: number;
        net: number;
        status: string;
        actions: string;
      }>;
      total: number;
    };
  };
  summary?: {
    generalRateBase: {
      products: number;
      services: number;
      packages: number;
    };
    commission: {
      products: number;
      services: number;
      packages: number;
    };
    totalTips: number;
    credits: number;
    debits: number;
    totalToPay: number;
  };
}

const commissionsData: Commission[] = [
  {
    id: 1,
    professional: "LUCY AVILA",
    position: "Cabeleireira",
    openValue: 1250.5,
    paidValue: 0,
    status: "open",
    summary: {
      generalRateBase: {
        products: 350.0,
        services: 900.5,
        packages: 0,
      },
      commission: {
        products: 105.0,
        services: 450.25,
        packages: 0,
      },
      totalTips: 150.0,
      credits: 705.25,
      debits: 55.0,
      totalToPay: 800.25,
    },
    commissionDetails: {
      credits: {
        items: [
          {
            command: "CMD-001",
            date: "25/11/2025",
            service: "Coloração",
            client: "Maria Silva",
            base: 250.0,
            paymentMethod: "Cartão Crédito",
            cardFee: 7.5,
            anticipationFee: 5.0,
            serviceCost: 50.0,
            adminFee: 12.5,
            productCost: 30.0,
            commission: 125.0,
            commission_percentage: 50,
            assistantFee: 25.0,
            assistant_percentage: 10,
            assistant: "Ana",
            net_percentage: 40,
            status: "Aprovado",
          },
        ],
        total: 705.25,
      },
      debits: {
        items: [
          {
            command: "CMD-002",
            date: "26/11/2025",
            service: "Produto devolvido",
            client: "João Santos",
            base: 55.0,
            type: "Devolução",
            paymentMethod: "Dinheiro",
            serviceCost: 0,
            productCost: 55.0,
            commission_percentage: 0,
            commission: 0,
            assistant_percentage: 0,
            assistant: "-",
            net_percentage: 0,
            observation: "Cliente insatisfeito com produto",
            status: "Processado",
          },
        ],
        total: 55.0,
      },
      warnings: {
        items: [
          {
            command: "CMD-003",
            date: "27/11/2025",
            service: "Escova",
            client: "Paula Costa",
            base: 80.0,
            paymentMethod: "PIX",
            observation: "Verificar desconto aplicado",
            value: 80.0,
            net: 72.0,
            status: "Pendente",
            actions: "Revisar",
          },
        ],
        total: 1,
      },
    },
  },
  {
    id: 2,
    professional: "MARIA ADRIANA",
    position: "Manicure",
    openValue: 450.0,
    paidValue: 0,
    status: "open",
  },
  {
    id: 3,
    professional: "IVANI",
    position: "Esteticista",
    openValue: 0,
    paidValue: 890.0,
    status: "paid",
  },
];

export default function ComissoesPage() {
  const [activeTab, setActiveTab] = useState<"open" | "paid">("open");
  const [filterExpanded, setFilterExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProfessional, setSelectedProfessional] = useState("");
  const [selectedPosition, setSelectedPosition] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [showSummary, setShowSummary] = useState(false);
  const [showDetailed, setShowDetailed] = useState(false);
  const [selectedCommission, setSelectedCommission] =
    useState<Commission | null>(null);
  const [expandedSection, setExpandedSection] = useState<
    "credits" | "debits" | "warnings" | null
  >("credits");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTabChange = (tab: "open" | "paid") => {
    if (tab !== activeTab) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveTab(tab);
        setTimeout(() => setIsTransitioning(false), 50);
      }, 200);
    }
  };

  const filteredData = commissionsData.filter((item) => {
    const matchStatus = item.status === activeTab;
    const matchSearch =
      item.professional.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.position.toLowerCase().includes(searchTerm.toLowerCase());
    return matchStatus && matchSearch;
  });

  // Estatísticas
  const totalOpen = commissionsData
    .filter((c) => c.status === "open")
    .reduce((sum, c) => sum + c.openValue, 0);
  const totalPaid = commissionsData
    .filter((c) => c.status === "paid")
    .reduce((sum, c) => sum + c.paidValue, 0);
  const openCount = commissionsData.filter((c) => c.status === "open").length;
  const selectedCount = 0; // Implementar lógica de seleção

  const openSummaryModal = (commission: Commission) => {
    setSelectedCommission(commission);
    setShowSummary(true);
  };

  const openDetailedModal = (commission: Commission) => {
    setSelectedCommission(commission);
    setShowDetailed(true);
    setExpandedSection("credits");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Header Section */}
      <div className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
                <DollarSign className="w-8 h-8 text-emerald-600" />
                Comissões
              </h1>
              <p className="text-slate-600 mt-1">
                Gerencie as comissões dos profissionais
              </p>
            </div>
            <Button className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white rounded-lg px-6 py-3 font-medium shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Novo Lançamento
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-6">
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-4 border border-emerald-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-emerald-900">
                    Total Aberto
                  </p>
                  <p className="text-2xl font-bold text-emerald-700 mt-1">
                    R$ {totalOpen.toFixed(2)}
                  </p>
                </div>
                <div className="w-12 h-12 bg-emerald-200 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-emerald-700" />
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-blue-900">
                    Total Pago
                  </p>
                  <p className="text-2xl font-bold text-blue-700 mt-1">
                    R$ {totalPaid.toFixed(2)}
                  </p>
                </div>
                <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-blue-700" />
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 border border-purple-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-purple-900">
                    Total Selecionado
                  </p>
                  <p className="text-2xl font-bold text-purple-700 mt-1">
                    R$ {selectedCount.toFixed(2)}
                  </p>
                </div>
                <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-purple-700" />
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-4 border border-slate-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-900">
                    Profissionais
                  </p>
                  <p className="text-2xl font-bold text-slate-700 mt-1">
                    {openCount}
                  </p>
                </div>
                <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-slate-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 mb-6 overflow-hidden">
          <button
            onClick={() => setFilterExpanded(!filterExpanded)}
            className="w-full flex items-center justify-between px-6 py-4 hover:bg-slate-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Search className="w-5 h-5 text-slate-600" />
              <span className="font-medium text-slate-900">
                Filtro de Pesquisa
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Profissional
                  </label>
                  <select
                    value={selectedProfessional}
                    onChange={(e) => setSelectedProfessional(e.target.value)}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:border-emerald-500 focus:ring-emerald-500 bg-white"
                  >
                    <option value="">Todos</option>
                    <option value="lucy">LUCY AVILA</option>
                    <option value="maria">MARIA ADRIANA</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Cargo
                  </label>
                  <select
                    value={selectedPosition}
                    onChange={(e) => setSelectedPosition(e.target.value)}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:border-emerald-500 focus:ring-emerald-500 bg-white"
                  >
                    <option value="">Todos</option>
                    <option value="cabeleireira">Cabeleireira</option>
                    <option value="manicure">Manicure</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Data Inicial
                  </label>
                  <Input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="border-slate-300 focus:border-emerald-500 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Data Final
                  </label>
                  <Input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="border-slate-300 focus:border-emerald-500 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <Button className="bg-slate-900 hover:bg-slate-800 text-white rounded-lg px-6 py-2 font-medium">
                <Search className="w-4 h-4 mr-2" />
                Pesquisar
              </Button>
            </div>
          )}
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-t-xl shadow-sm border border-slate-200 border-b-0">
          <div className="flex">
            <button
              onClick={() => handleTabChange("open")}
              className={`flex-1 px-6 py-4 font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
                activeTab === "open"
                  ? "bg-emerald-50 text-emerald-700 border-b-2 border-emerald-600"
                  : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              <Clock className="w-4 h-4" />
              Abertas
            </button>
            <button
              onClick={() => handleTabChange("paid")}
              className={`flex-1 px-6 py-4 font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
                activeTab === "paid"
                  ? "bg-blue-50 text-blue-700 border-b-2 border-blue-600"
                  : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              Pagos
            </button>
          </div>
        </div>

        {/* Table */}
        <div
          className={`bg-white rounded-b-xl shadow-sm border border-slate-200 overflow-hidden transition-opacity duration-200 ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-slate-800 to-slate-900 text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    <input type="checkbox" className="rounded" />
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Profissional
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Valor em Aberto
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {!isTransitioning &&
                  filteredData.map((item, index) => (
                    <tr
                      key={item.id}
                      className="hover:bg-slate-50 transition-colors animate-fade-in animate-slide-in-from-bottom-4"
                      style={{
                        animationDelay: `${index * 50}ms`,
                        animationDuration: "400ms",
                        animationFillMode: "both",
                      }}
                    >
                      <td className="px-6 py-4">
                        <input type="checkbox" className="rounded" />
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4 text-slate-400" />
                          <span className="font-medium text-slate-900">
                            {item.professional}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="font-semibold text-emerald-600">
                          R${" "}
                          {activeTab === "open"
                            ? item.openValue.toFixed(2)
                            : item.paidValue.toFixed(2)}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <Button
                            onClick={() => openSummaryModal(item)}
                            variant="outline"
                            size="sm"
                            className="border-blue-300 text-blue-600 hover:bg-blue-50"
                          >
                            Resumo
                          </Button>
                          <Button
                            onClick={() => openDetailedModal(item)}
                            variant="outline"
                            size="sm"
                            className="border-purple-300 text-purple-600 hover:bg-purple-50"
                          >
                            Detalhado
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-slate-300 text-slate-600 hover:bg-slate-50"
                          >
                            Pagar
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          {filteredData.length === 0 && (
            <div className="p-12 text-center">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-slate-400" />
              </div>
              <p className="text-slate-600 text-lg font-medium">
                Nenhuma comissão encontrada
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Summary Modal */}
      {showSummary && selectedCommission?.summary && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="bg-gradient-to-r from-slate-700 to-slate-900 px-6 py-4 text-white sticky top-0 flex items-center justify-between">
              <h3 className="text-2xl font-bold">Resumo</h3>
              <button
                onClick={() => setShowSummary(false)}
                className="text-white hover:bg-white hover:bg-opacity-20 rounded-lg p-2"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Base de Rateio Geral */}
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">
                  Base de rateio geral: R${" "}
                  {(
                    selectedCommission.summary.generalRateBase.products +
                    selectedCommission.summary.generalRateBase.services +
                    selectedCommission.summary.generalRateBase.packages
                  ).toFixed(2)}
                </h4>
                <div className="space-y-2 ml-6">
                  <div className="flex justify-between text-lg">
                    <span className="text-slate-700">Produtos</span>
                    <span className="text-slate-900">
                      R${" "}
                      {selectedCommission.summary.generalRateBase.products.toFixed(
                        2
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between text-lg">
                    <span className="text-slate-700">Serviços</span>
                    <span className="text-slate-900">
                      R${" "}
                      {selectedCommission.summary.generalRateBase.services.toFixed(
                        2
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between text-lg">
                    <span className="text-slate-700">Pacotes</span>
                    <span className="text-slate-900">
                      R${" "}
                      {selectedCommission.summary.generalRateBase.packages.toFixed(
                        2
                      )}
                    </span>
                  </div>
                </div>
              </div>

              {/* Rateio */}
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">
                  Rateio: R${" "}
                  {(
                    selectedCommission.summary.commission.products +
                    selectedCommission.summary.commission.services +
                    selectedCommission.summary.commission.packages
                  ).toFixed(2)}
                </h4>
                <div className="space-y-2 ml-6">
                  <div className="flex justify-between text-lg">
                    <span className="text-slate-700">Produtos</span>
                    <span className="text-slate-900">
                      R${" "}
                      {selectedCommission.summary.commission.products.toFixed(
                        2
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between text-lg">
                    <span className="text-slate-700">Serviços</span>
                    <span className="text-slate-900">
                      R${" "}
                      {selectedCommission.summary.commission.services.toFixed(
                        2
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between text-lg">
                    <span className="text-slate-700">Pacotes</span>
                    <span className="text-slate-900">
                      R${" "}
                      {selectedCommission.summary.commission.packages.toFixed(
                        2
                      )}
                    </span>
                  </div>
                </div>
              </div>

              {/* Total de Caixinhas */}
              <div>
                <h4 className="text-xl font-bold text-slate-900">
                  Total de caixinhas: R${" "}
                  {selectedCommission.summary.totalTips.toFixed(2)}
                </h4>
              </div>

              {/* Créditos e Débitos */}
              <div className="space-y-3">
                <div className="text-lg">
                  <span className="font-semibold text-blue-600">
                    Créditos: R$ {selectedCommission.summary.credits.toFixed(2)}
                  </span>
                </div>
                <div className="text-lg">
                  <span className="font-semibold text-red-600">
                    Débitos: R$ {selectedCommission.summary.debits.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Total a Pagar */}
              <div className="pt-4 border-t-2 border-slate-300">
                <h4 className="text-2xl font-bold text-slate-900">
                  Total a pagar: R${" "}
                  {selectedCommission.summary.totalToPay.toFixed(2)}
                </h4>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Detailed Modal */}
      {showDetailed && selectedCommission?.commissionDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-[95vw] w-full max-h-[90vh] overflow-y-auto">
            <div className="bg-gradient-to-r from-slate-700 to-slate-900 px-6 py-4 text-white sticky top-0 flex items-center justify-between">
              <h3 className="text-2xl font-bold">Detalhado</h3>
              <button
                onClick={() => setShowDetailed(false)}
                className="text-white hover:bg-white hover:bg-opacity-20 rounded-lg p-2"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              {/* Créditos Section */}
              <div className="border border-slate-200 rounded-lg overflow-hidden">
                <button
                  onClick={() =>
                    setExpandedSection(
                      expandedSection === "credits" ? null : "credits"
                    )
                  }
                  className="w-full flex items-center justify-between px-6 py-4 bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Receipt className="w-5 h-5" />
                    <span className="font-semibold text-lg">Créditos</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm">
                      Total: R${" "}
                      {selectedCommission.commissionDetails.credits.total.toFixed(
                        2
                      )}
                    </span>
                    {expandedSection === "credits" ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </button>

                {expandedSection === "credits" && (
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-slate-100">
                        <tr>
                          <th className="px-4 py-3 text-left font-semibold text-slate-700">
                            Comanda
                          </th>
                          <th className="px-4 py-3 text-left font-semibold text-slate-700">
                            Data
                          </th>
                          <th className="px-4 py-3 text-left font-semibold text-slate-700">
                            Serviço/Produto
                          </th>
                          <th className="px-4 py-3 text-left font-semibold text-slate-700">
                            Cliente
                          </th>
                          <th className="px-4 py-3 text-left font-semibold text-slate-700">
                            Base
                          </th>
                          <th className="px-4 py-3 text-left font-semibold text-slate-700">
                            Forma Pgto
                          </th>
                          <th className="px-4 py-3 text-left font-semibold text-slate-700">
                            Tx. Cartão
                          </th>
                          <th className="px-4 py-3 text-left font-semibold text-slate-700">
                            Comissão
                          </th>
                          <th className="px-4 py-3 text-left font-semibold text-slate-700">
                            Rateio(%)
                          </th>
                          <th className="px-4 py-3 text-left font-semibold text-slate-700">
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {selectedCommission.commissionDetails.credits.items.map(
                          (item, idx) => (
                            <tr key={idx} className="hover:bg-slate-50">
                              <td className="px-4 py-3">{item.command}</td>
                              <td className="px-4 py-3">{item.date}</td>
                              <td className="px-4 py-3">{item.service}</td>
                              <td className="px-4 py-3">{item.client}</td>
                              <td className="px-4 py-3">
                                R$ {item.base.toFixed(2)}
                              </td>
                              <td className="px-4 py-3">
                                {item.paymentMethod}
                              </td>
                              <td className="px-4 py-3">
                                R$ {item.cardFee.toFixed(2)}
                              </td>
                              <td className="px-4 py-3 font-semibold text-emerald-600">
                                R$ {item.commission.toFixed(2)}
                              </td>
                              <td className="px-4 py-3">
                                {item.commission_percentage}%
                              </td>
                              <td className="px-4 py-3">
                                <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                                  {item.status}
                                </span>
                              </td>
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>

              {/* Débitos Section */}
              <div className="border border-slate-200 rounded-lg overflow-hidden">
                <button
                  onClick={() =>
                    setExpandedSection(
                      expandedSection === "debits" ? null : "debits"
                    )
                  }
                  className="w-full flex items-center justify-between px-6 py-4 bg-red-600 text-white hover:bg-red-700 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-5 h-5" />
                    <span className="font-semibold text-lg">Débitos</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm">
                      Total: R${" "}
                      {selectedCommission.commissionDetails.debits.total.toFixed(
                        2
                      )}
                    </span>
                    {expandedSection === "debits" ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </button>

                {expandedSection === "debits" && (
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-slate-100">
                        <tr>
                          <th className="px-4 py-3 text-left font-semibold text-slate-700">
                            Comanda
                          </th>
                          <th className="px-4 py-3 text-left font-semibold text-slate-700">
                            Data
                          </th>
                          <th className="px-4 py-3 text-left font-semibold text-slate-700">
                            Serviço/Produto
                          </th>
                          <th className="px-4 py-3 text-left font-semibold text-slate-700">
                            Cliente
                          </th>
                          <th className="px-4 py-3 text-left font-semibold text-slate-700">
                            Base
                          </th>
                          <th className="px-4 py-3 text-left font-semibold text-slate-700">
                            Tipo
                          </th>
                          <th className="px-4 py-3 text-left font-semibold text-slate-700">
                            Observação
                          </th>
                          <th className="px-4 py-3 text-left font-semibold text-slate-700">
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {selectedCommission.commissionDetails.debits.items.map(
                          (item, idx) => (
                            <tr key={idx} className="hover:bg-slate-50">
                              <td className="px-4 py-3">{item.command}</td>
                              <td className="px-4 py-3">{item.date}</td>
                              <td className="px-4 py-3">{item.service}</td>
                              <td className="px-4 py-3">{item.client}</td>
                              <td className="px-4 py-3">
                                R$ {item.base.toFixed(2)}
                              </td>
                              <td className="px-4 py-3">{item.type}</td>
                              <td className="px-4 py-3">{item.observation}</td>
                              <td className="px-4 py-3">
                                <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                                  {item.status}
                                </span>
                              </td>
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>

              {/* Avulsos Section */}
              <div className="border border-slate-200 rounded-lg overflow-hidden">
                <button
                  onClick={() =>
                    setExpandedSection(
                      expandedSection === "warnings" ? null : "warnings"
                    )
                  }
                  className="w-full flex items-center justify-between px-6 py-4 bg-orange-600 text-white hover:bg-orange-700 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Package className="w-5 h-5" />
                    <span className="font-semibold text-lg">Avulsos</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm">
                      Total:{" "}
                      {
                        selectedCommission.commissionDetails.warnings.items
                          .length
                      }{" "}
                      itens
                    </span>
                    {expandedSection === "warnings" ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </button>

                {expandedSection === "warnings" && (
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-slate-100">
                        <tr>
                          <th className="px-4 py-3 text-left font-semibold text-slate-700">
                            Comanda
                          </th>
                          <th className="px-4 py-3 text-left font-semibold text-slate-700">
                            Data
                          </th>
                          <th className="px-4 py-3 text-left font-semibold text-slate-700">
                            Serviço/Produto
                          </th>
                          <th className="px-4 py-3 text-left font-semibold text-slate-700">
                            Cliente
                          </th>
                          <th className="px-4 py-3 text-left font-semibold text-slate-700">
                            Forma Pagamento
                          </th>
                          <th className="px-4 py-3 text-left font-semibold text-slate-700">
                            Observações
                          </th>
                          <th className="px-4 py-3 text-left font-semibold text-slate-700">
                            Valor($)
                          </th>
                          <th className="px-4 py-3 text-left font-semibold text-slate-700">
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {selectedCommission.commissionDetails.warnings.items.map(
                          (item, idx) => (
                            <tr key={idx} className="hover:bg-slate-50">
                              <td className="px-4 py-3">{item.command}</td>
                              <td className="px-4 py-3">{item.date}</td>
                              <td className="px-4 py-3">{item.service}</td>
                              <td className="px-4 py-3">{item.client}</td>
                              <td className="px-4 py-3">
                                {item.paymentMethod}
                              </td>
                              <td className="px-4 py-3">{item.observation}</td>
                              <td className="px-4 py-3">
                                R$ {item.value.toFixed(2)}
                              </td>
                              <td className="px-4 py-3">
                                <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">
                                  {item.status}
                                </span>
                              </td>
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

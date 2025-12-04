"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ChevronDown,
  ChevronUp,
  Search,
  Printer,
  DollarSign,
  TrendingUp,
  Calendar,
  Clock,
  CreditCard,
  CheckCircle2,
  Circle,
} from "lucide-react";

interface CashRegister {
  id: number;
  responsible: string;
  date: string;
  openingTime: string;
  closingTime?: string;
  initialAmount: number;
  preClosing: number;
  pettyCash: number;
  total: number;
  status: "open" | "closed";
  paymentMethods?: {
    name: string;
    amount: number;
  }[];
}

const cashRegistersData: CashRegister[] = [
  {
    id: 443,
    responsible: "MARIA CAMILA DE OLIVEIRA",
    date: "23/09/2025",
    openingTime: "13:17:08",
    closingTime: "",
    initialAmount: 155.0,
    preClosing: 0.0,
    pettyCash: 0.0,
    total: 9000.0,
    status: "open",
    paymentMethods: [
      { name: "CIELO GUSTAVO AMEX CREDITO", amount: 150.0 },
      { name: "CIELO GUSTAVO ELO CREDITO", amount: 60.0 },
      { name: "CIELO GUSTAVO MASTER CREDITO", amount: 450.0 },
      { name: "CIELO GUSTAVO MASTER DEBITO", amount: 600.0 },
      { name: "CIELO OLEGARIO MASTER CREDITO", amount: 1900.0 },
      { name: "CIELO OLEGARIO MASTER DEBITO", amount: 1100.0 },
      { name: "CIELO OLEGARIO MASTER PARCELADO", amount: 1350.0 },
      { name: "CIELO OLEGARIO VISA CREDITO", amount: 180.0 },
      { name: "CIELO OLEGARIO VISA DEBITO", amount: 120.0 },
      { name: "CORTESIA", amount: 60.0 },
      { name: "DEPOSITO GUSTAVO", amount: 1720.0 },
      { name: "DEPOSITO OLEGARIO", amount: 1300.0 },
      { name: "DINHEIRO", amount: 10.0 },
    ],
  },
  {
    id: 445,
    responsible: "CARLOS EDUARDO LIMA",
    date: "24/09/2025",
    openingTime: "09:00:00",
    closingTime: "",
    initialAmount: 250.0,
    preClosing: 0.0,
    pettyCash: 0.0,
    total: 5420.0,
    status: "open",
    paymentMethods: [
      { name: "CIELO GUSTAVO MASTER CREDITO", amount: 850.0 },
      { name: "CIELO GUSTAVO MASTER DEBITO", amount: 420.0 },
      { name: "CIELO OLEGARIO VISA CREDITO", amount: 1200.0 },
      { name: "CIELO OLEGARIO VISA DEBITO", amount: 950.0 },
      { name: "DEPOSITO GUSTAVO", amount: 1500.0 },
      { name: "DINHEIRO", amount: 500.0 },
    ],
  },
  {
    id: 446,
    responsible: "FERNANDA SOUZA SANTOS",
    date: "25/09/2025",
    openingTime: "10:30:00",
    closingTime: "",
    initialAmount: 180.0,
    preClosing: 0.0,
    pettyCash: 0.0,
    total: 3250.0,
    status: "open",
    paymentMethods: [
      { name: "CIELO GUSTAVO AMEX CREDITO", amount: 300.0 },
      { name: "CIELO GUSTAVO MASTER CREDITO", amount: 680.0 },
      { name: "CIELO OLEGARIO MASTER DEBITO", amount: 1100.0 },
      { name: "CIELO OLEGARIO VISA CREDITO", amount: 450.0 },
      { name: "DEPOSITO OLEGARIO", amount: 600.0 },
      { name: "DINHEIRO", amount: 120.0 },
    ],
  },
  {
    id: 442,
    responsible: "JOÃO PEDRO SANTOS",
    date: "22/09/2025",
    openingTime: "08:30:00",
    closingTime: "18:45:00",
    initialAmount: 200.0,
    preClosing: 50.0,
    pettyCash: 25.0,
    total: 9000.0,
    status: "closed",
  },
  {
    id: 441,
    responsible: "ANA MARIA COSTA",
    date: "21/09/2025",
    openingTime: "09:00:00",
    closingTime: "17:30:00",
    initialAmount: 180.0,
    preClosing: 30.0,
    pettyCash: 15.0,
    total: 890.0,
    status: "closed",
  },
];

export default function CashRegisterPage() {
  const [activeTab, setActiveTab] = useState<"open" | "closed">("open");
  const [searchFilter, setSearchFilter] = useState("");
  const [startDateFilter, setStartDateFilter] = useState("");
  const [endDateFilter, setEndDateFilter] = useState("");
  const [filterExpanded, setFilterExpanded] = useState(false);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const filteredRegisters = cashRegistersData.filter((register) => {
    const matchStatus = register.status === activeTab;
    const matchSearch =
      register.responsible.toLowerCase().includes(searchFilter.toLowerCase()) ||
      register.id.toString().includes(searchFilter);

    // Convert register date from DD/MM/YYYY to YYYY-MM-DD for comparison
    const [day, month, year] = register.date.split("/");
    const registerDate = `${year}-${month}-${day}`;

    let matchDate = true;
    if (startDateFilter && endDateFilter) {
      matchDate =
        registerDate >= startDateFilter && registerDate <= endDateFilter;
    } else if (startDateFilter) {
      matchDate = registerDate >= startDateFilter;
    } else if (endDateFilter) {
      matchDate = registerDate <= endDateFilter;
    }

    return matchStatus && matchSearch && matchDate;
  });

  // Calcula totais para estatísticas
  const totalOpen = filteredRegisters.reduce(
    (sum, reg) => (reg.status === "open" ? sum + reg.total : sum),
    0
  );
  const openCount = cashRegistersData.filter((r) => r.status === "open").length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Header Section */}
      <div className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
                <DollarSign className="w-8 h-8 text-blue-600" />
                Gerenciamento de Caixas
              </h1>
              <p className="text-slate-600 mt-1">
                Controle financeiro do seu salão
              </p>
            </div>
            <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg px-6 py-3 font-medium shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2">
              <Circle className="w-4 h-4" />
              Abrir Novo Caixa
            </Button>
          </div>

          {/* Stats Cards */}
          {activeTab === "open" && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Caixas Abertos
                    </p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">
                      {openCount}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Total em Caixa
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
                      Média por Caixa
                    </p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">
                      R${" "}
                      {openCount > 0
                        ? (totalOpen / openCount).toFixed(2)
                        : "0.00"}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-gray-600" />
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
                    Buscar por responsável ou ID
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <Input
                      type="text"
                      value={searchFilter}
                      onChange={(e) => setSearchFilter(e.target.value)}
                      placeholder="Digite o nome ou ID..."
                      className="pl-10 border-slate-300 focus:border-emerald-500 focus:ring-emerald-500"
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
                      value={startDateFilter}
                      onChange={(e) => setStartDateFilter(e.target.value)}
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
                      value={endDateFilter}
                      onChange={(e) => setEndDateFilter(e.target.value)}
                      className="pl-10 border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              {(searchFilter || startDateFilter || endDateFilter) && (
                <div className="mt-4 flex gap-2">
                  <Button
                    onClick={() => {
                      setSearchFilter("");
                      setStartDateFilter("");
                      setEndDateFilter("");
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
              Abertos
            </button>
            <button
              onClick={() => setActiveTab("closed")}
              className={`flex-1 px-6 py-4 font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
                activeTab === "closed"
                  ? "bg-gray-100 text-gray-700 border-b-2 border-gray-600"
                  : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              Finalizados
            </button>
          </div>
        </div>

        {/* Cash Register Table */}
        <div className="bg-white rounded-b-xl shadow-sm border border-slate-200 overflow-hidden">
          {/* Table Header */}
          <div className="bg-white border-b-2 border-gray-300">
            <div className="grid grid-cols-12 gap-4 px-6 py-3 text-sm font-bold text-gray-800">
              <div className="col-span-1"></div>
              <div className="col-span-4">Cliente</div>
              <div className="col-span-2">Data</div>
              <div className="col-span-2">Caixa</div>
              <div className="col-span-2">Total</div>
              <div className="col-span-1 text-center">Ações</div>
            </div>
          </div>

          {/* Table Body */}
          <div>
            {filteredRegisters.map((register, index) => (
              <div key={register.id}>
                {/* Table Row */}
                <div
                  className={`grid grid-cols-12 gap-4 px-6 py-3.5 items-center cursor-pointer transition-colors ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-blue-50`}
                  onClick={() =>
                    setExpandedCard(
                      expandedCard === register.id ? null : register.id
                    )
                  }
                >
                  {/* ID */}
                  <div className="col-span-1">
                    <span className="text-sm font-semibold text-blue-600">
                      {register.id}
                    </span>
                  </div>

                  {/* Cliente */}
                  <div className="col-span-4">
                    <span className="text-sm text-gray-900">
                      {register.responsible}
                    </span>
                  </div>

                  {/* Data */}
                  <div className="col-span-2">
                    <span className="text-sm text-gray-700">
                      {register.date}
                    </span>
                  </div>

                  {/* Caixa */}
                  <div className="col-span-2">
                    <span className="text-sm text-gray-900 uppercase">
                      {register.responsible.split(" ")[0]}{" "}
                      {
                        register.responsible.split(" ")[
                          register.responsible.split(" ").length - 1
                        ]
                      }
                    </span>
                  </div>

                  {/* Total */}
                  <div className="col-span-2">
                    <span className="text-sm font-semibold text-gray-900">
                      {register.total.toFixed(1)}
                    </span>
                  </div>

                  {/* Ações */}
                  <div className="col-span-1 flex items-center justify-center gap-1.5">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setExpandedCard(
                          expandedCard === register.id ? null : register.id
                        );
                      }}
                      className="p-1 rounded hover:bg-blue-200 text-blue-600 transition-colors"
                      title="Ver detalhes"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </button>
                    <button
                      onClick={(e) => e.stopPropagation()}
                      className="p-1 rounded hover:bg-red-200 text-red-600 transition-colors"
                      title="Editar"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                      </svg>
                    </button>
                    <button
                      onClick={(e) => e.stopPropagation()}
                      className="p-1 rounded hover:bg-yellow-200 text-yellow-600 transition-colors"
                      title="Alerta"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                        <line x1="12" y1="9" x2="12" y2="13" />
                        <line x1="12" y1="17" x2="12.01" y2="17" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Expanded Details */}
                {expandedCard === register.id && (
                  <div className="bg-gray-50 border-t border-gray-200 p-6 animate-in fade-in slide-in-from-top-2">
                    <div className="max-w-6xl mx-auto space-y-6">
                      {/* Summary Grid */}
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        <div className="bg-white rounded-lg p-4 border border-gray-200">
                          <p className="text-xs text-gray-600 mb-1 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            Abertura
                          </p>
                          <p className="text-sm font-semibold text-gray-900">
                            {register.openingTime}
                          </p>
                        </div>

                        <div className="bg-white rounded-lg p-4 border border-gray-200">
                          <p className="text-xs text-gray-600 mb-1 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            Fechamento
                          </p>
                          <p className="text-sm font-semibold text-gray-900">
                            {register.closingTime || "-"}
                          </p>
                        </div>

                        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                          <p className="text-xs text-blue-700 mb-1">
                            Valor Inicial
                          </p>
                          <p className="text-sm font-semibold text-blue-900">
                            R$ {register.initialAmount.toFixed(2)}
                          </p>
                        </div>

                        <div className="bg-white rounded-lg p-4 border border-gray-200">
                          <p className="text-xs text-gray-700 mb-1">
                            Pré-Fechamento
                          </p>
                          <p className="text-sm font-semibold text-gray-900">
                            R$ {register.preClosing.toFixed(2)}
                          </p>
                        </div>

                        <div className="bg-white rounded-lg p-4 border border-gray-200">
                          <p className="text-xs text-gray-700 mb-1">Caixinha</p>
                          <p className="text-sm font-semibold text-gray-900">
                            R$ {register.pettyCash.toFixed(2)}
                          </p>
                        </div>

                        <div className="bg-blue-600 rounded-lg p-4">
                          <p className="text-xs text-blue-100 mb-1 font-medium">
                            Total
                          </p>
                          <p className="text-sm font-bold text-white">
                            R$ {register.total.toFixed(2)}
                          </p>
                        </div>
                      </div>

                      {/* Payment Methods */}
                      {register.status === "open" &&
                        register.paymentMethods && (
                          <div className="bg-white rounded-lg border border-gray-200 p-6">
                            <h4 className="text-base font-semibold text-gray-900 mb-4 flex items-center gap-2">
                              <CreditCard className="w-5 h-5 text-gray-600" />
                              Formas de Pagamento
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                              {register.paymentMethods.map((method, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg p-3"
                                >
                                  <span className="text-xs font-medium text-gray-700">
                                    {method.name}
                                  </span>
                                  <span className="text-sm font-bold text-blue-600">
                                    R$ {method.amount.toFixed(2)}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-3 justify-end">
                        <Button
                          variant="outline"
                          className="text-sm border-gray-300"
                        >
                          <Printer className="w-4 h-4 mr-2" />
                          Imprimir
                        </Button>
                        {register.status === "open" && (
                          <>
                            <Button
                              variant="outline"
                              className="text-sm border-gray-300"
                            >
                              Pré-Fechamento
                            </Button>
                            <Button
                              variant="outline"
                              className="text-sm border-gray-300"
                            >
                              Suprimento / Saídas
                            </Button>
                            <Button className="text-sm bg-blue-600 hover:bg-blue-700 text-white">
                              <CheckCircle2 className="w-4 h-4 mr-2" />
                              Finalizar Caixa
                            </Button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredRegisters.length === 0 && (
            <div className="p-12 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-gray-600 text-lg font-medium">
                Nenhum caixa {activeTab === "open" ? "aberto" : "finalizado"}{" "}
                encontrado
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Tente ajustar os filtros de pesquisa
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

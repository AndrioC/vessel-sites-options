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
  User,
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
  const [dateFilter, setDateFilter] = useState("");
  const [filterExpanded, setFilterExpanded] = useState(false);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const filteredRegisters = cashRegistersData.filter((register) => {
    const matchStatus = register.status === activeTab;
    const matchSearch =
      register.responsible.toLowerCase().includes(searchFilter.toLowerCase()) ||
      register.id.toString().includes(searchFilter);
    const matchDate = dateFilter ? register.date === dateFilter : true;
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
                <DollarSign className="w-8 h-8 text-emerald-600" />
                Gerenciamento de Caixas
              </h1>
              <p className="text-slate-600 mt-1">
                Controle financeiro do seu salão
              </p>
            </div>
            <Button className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white rounded-lg px-6 py-3 font-medium shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2">
              <Circle className="w-4 h-4" />
              Abrir Novo Caixa
            </Button>
          </div>

          {/* Stats Cards */}
          {activeTab === "open" && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-4 border border-emerald-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-emerald-900">
                      Caixas Abertos
                    </p>
                    <p className="text-2xl font-bold text-emerald-700 mt-1">
                      {openCount}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-emerald-200 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-emerald-700" />
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-blue-900">
                      Total em Caixa
                    </p>
                    <p className="text-2xl font-bold text-blue-700 mt-1">
                      R$ {totalOpen.toFixed(2)}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-blue-700" />
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 border border-purple-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-purple-900">
                      Média por Caixa
                    </p>
                    <p className="text-2xl font-bold text-purple-700 mt-1">
                      R${" "}
                      {openCount > 0
                        ? (totalOpen / openCount).toFixed(2)
                        : "0.00"}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-purple-700" />
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    Filtrar por data
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <Input
                      type="date"
                      value={dateFilter}
                      onChange={(e) => setDateFilter(e.target.value)}
                      className="pl-10 border-slate-300 focus:border-emerald-500 focus:ring-emerald-500"
                    />
                  </div>
                </div>
              </div>

              {(searchFilter || dateFilter) && (
                <div className="mt-4 flex gap-2">
                  <Button
                    onClick={() => {
                      setSearchFilter("");
                      setDateFilter("");
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
                  ? "bg-emerald-50 text-emerald-700 border-b-2 border-emerald-600"
                  : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              <Circle className="w-4 h-4" />
              Caixas Abertos
            </button>
            <button
              onClick={() => setActiveTab("closed")}
              className={`flex-1 px-6 py-4 font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
                activeTab === "closed"
                  ? "bg-blue-50 text-blue-700 border-b-2 border-blue-600"
                  : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              Caixas Finalizados
            </button>
          </div>
        </div>

        {/* Cash Register Cards */}
        <div className="space-y-4 transition-all duration-500 ease-in-out">
          {filteredRegisters.map((register, index) => (
            <div
              key={register.id}
              className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow duration-200 animate-in fade-in slide-in-from-bottom-4"
              style={{
                animationDelay: `${index * 50}ms`,
                animationDuration: "400ms",
                animationFillMode: "both",
              }}
            >
              {/* Card Header */}
              <div className="bg-gradient-to-r from-slate-50 to-white px-6 py-4 border-b border-slate-200">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        register.status === "open"
                          ? "bg-emerald-500"
                          : "bg-slate-400"
                      }`}
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                        <User className="w-4 h-4 text-slate-600" />
                        {register.responsible}
                      </h3>
                      <div className="flex items-center gap-4 mt-1 text-sm text-slate-600">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {register.date}
                        </span>
                        <span className="flex items-center gap-1">
                          ID: #{register.id}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-slate-600">Total</p>
                    <p className="text-2xl font-bold text-emerald-600">
                      R$ {register.total.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                {/* Action Buttons */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <Button
                    onClick={() =>
                      setExpandedCard(
                        expandedCard === register.id ? null : register.id
                      )
                    }
                    variant="outline"
                    className="text-sm border-slate-300 hover:bg-slate-50 flex items-center gap-2"
                  >
                    {expandedCard === register.id ? (
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
                    className="text-sm border-slate-300 hover:bg-slate-50"
                  >
                    <Printer className="w-4 h-4 mr-2" />
                    Imprimir
                  </Button>
                  {register.status === "open" && (
                    <>
                      <Button
                        variant="outline"
                        className="text-sm border-slate-300 hover:bg-slate-50"
                      >
                        Pré-Fechamento
                      </Button>
                      <Button
                        variant="outline"
                        className="text-sm border-slate-300 hover:bg-slate-50"
                      >
                        Suprimento / Saídas
                      </Button>
                      <Button className="text-sm bg-emerald-600 hover:bg-emerald-700 text-white">
                        <CheckCircle2 className="w-4 h-4 mr-2" />
                        Finalizar Caixa
                      </Button>
                    </>
                  )}
                </div>

                {/* Summary Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
                  <div className="bg-slate-50 rounded-lg p-4">
                    <p className="text-xs text-slate-600 mb-1 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      Abertura
                    </p>
                    <p className="text-sm font-semibold text-slate-900">
                      {register.openingTime}
                    </p>
                  </div>

                  <div className="bg-slate-50 rounded-lg p-4">
                    <p className="text-xs text-slate-600 mb-1 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      Fechamento
                    </p>
                    <p className="text-sm font-semibold text-slate-900">
                      {register.closingTime || "-"}
                    </p>
                  </div>

                  <div className="bg-emerald-50 rounded-lg p-4">
                    <p className="text-xs text-emerald-700 mb-1">
                      Valor Inicial
                    </p>
                    <p className="text-sm font-semibold text-emerald-900">
                      R$ {register.initialAmount.toFixed(2)}
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-xs text-blue-700 mb-1">Pré-Fechamento</p>
                    <p className="text-sm font-semibold text-blue-900">
                      R$ {register.preClosing.toFixed(2)}
                    </p>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-4">
                    <p className="text-xs text-purple-700 mb-1">Caixinha</p>
                    <p className="text-sm font-semibold text-purple-900">
                      R$ {register.pettyCash.toFixed(2)}
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-lg p-4 border border-emerald-200">
                    <p className="text-xs text-emerald-700 mb-1 font-medium">
                      Total
                    </p>
                    <p className="text-sm font-bold text-emerald-900">
                      R$ {register.total.toFixed(2)}
                    </p>
                  </div>
                </div>

                {/* Expanded Details - Payment Methods */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    expandedCard === register.id
                      ? "max-h-[2000px] opacity-100 mt-4"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {register.status === "open" && register.paymentMethods && (
                    <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl border border-slate-200 p-6 animate-in fade-in slide-in-from-top-4">
                      <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                        <CreditCard className="w-5 h-5 text-slate-600" />
                        Formas de Pagamento
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {register.paymentMethods.map((method, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between bg-white border border-slate-200 rounded-lg p-3 hover:border-emerald-300 transition-colors"
                            style={{
                              animation: `slideIn 0.3s ease-out ${
                                index * 0.05
                              }s both`,
                            }}
                          >
                            <span className="text-xs font-medium text-slate-700 uppercase">
                              {method.name}
                            </span>
                            <span className="text-sm font-bold text-emerald-600">
                              R$ {method.amount.toFixed(2)}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 pt-4 border-t-2 border-slate-200 flex justify-between items-center">
                        <span className="text-lg font-semibold text-slate-900">
                          Total das Formas de Pagamento:
                        </span>
                        <span className="text-2xl font-bold text-emerald-600">
                          R$ {register.total.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}

          {filteredRegisters.length === 0 && (
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-12 text-center">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-slate-400" />
              </div>
              <p className="text-slate-600 text-lg font-medium">
                Nenhum caixa {activeTab === "open" ? "aberto" : "finalizado"}{" "}
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
  );
}

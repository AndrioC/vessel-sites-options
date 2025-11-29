"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ChevronDown,
  ChevronUp,
  Eye,
  Edit,
  Trash,
  Search,
  Calendar,
  User,
  DollarSign,
  CreditCard,
  Wallet,
  TrendingUp,
  Info,
  Clock,
  FileText,
} from "lucide-react";

interface PettyCash {
  id: number;
  cashRegister: string;
  date: string;
  professional: string;
  client: string;
  payment: string;
  value: number;
  card: number;
  net: number;
  status: string;
  time?: string;
  observation?: string;
  cashRegisterId?: number;
}

const pettyCashData: PettyCash[] = [
  {
    id: 1,
    cashRegister: "SHEYLA SILVA",
    date: "31/07/2025",
    professional: "HELGA",
    client: "",
    payment: "DEPOSITO GUSTAVO",
    value: 50.0,
    card: 0.0,
    net: 50.0,
    status: "Pago",
    time: "14:30",
    observation: "Gorjeta de atendimento especial",
    cashRegisterId: 443,
  },
  {
    id: 2,
    cashRegister: "SHEYLA SILVA",
    date: "31/07/2025",
    professional: "HELO",
    client: "",
    payment: "DEPOSITO GUSTAVO",
    value: 40.0,
    card: 0.0,
    net: 40.0,
    status: "Pago",
    time: "15:45",
    observation: "Caixinha do dia",
    cashRegisterId: 443,
  },
  {
    id: 3,
    cashRegister: "SHEYLA SILVA",
    date: "31/07/2025",
    professional: "MANOBRISTA",
    client: "",
    payment: "DEPOSITO GUSTAVO",
    value: 10.0,
    card: 0.0,
    net: 10.0,
    status: "Pago",
    time: "16:20",
    cashRegisterId: 443,
  },
  {
    id: 4,
    cashRegister: "CILANE CRISTINA DE LIMA DA SILVA",
    date: "02/08/2025",
    professional: "ADRIANA",
    client: "",
    payment: "DEPOSITO GUSTAVO",
    value: 30.0,
    card: 0.0,
    net: 30.0,
    status: "Pago",
    time: "10:15",
    observation: "Gorjeta de cliente VIP",
    cashRegisterId: 445,
  },
  {
    id: 5,
    cashRegister: "CILANE CRISTINA DE LIMA DA SILVA",
    date: "02/08/2025",
    professional: "PAULA",
    client: "",
    payment: "DEPOSITO GUSTAVO",
    value: 10.0,
    card: 0.0,
    net: 10.0,
    status: "Pago",
    time: "11:30",
    cashRegisterId: 445,
  },
  {
    id: 6,
    cashRegister: "admin@olegario.com.br",
    date: "01/08/2025",
    professional: "MANOBRISTA",
    client: "",
    payment: "DINHEIRO",
    value: 25.0,
    card: 0.0,
    net: 25.0,
    status: "Pago",
    time: "18:00",
    observation: "Pagamento em dinheiro",
    cashRegisterId: 442,
  },
];

export default function PettyCashPage() {
  const [filterExpanded, setFilterExpanded] = useState(false);
  const [searchFilter, setSearchFilter] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const filteredData = pettyCashData.filter((item) => {
    const matchSearch = searchFilter
      ? item.cashRegister.toLowerCase().includes(searchFilter.toLowerCase()) ||
        item.professional.toLowerCase().includes(searchFilter.toLowerCase()) ||
        item.payment.toLowerCase().includes(searchFilter.toLowerCase())
      : true;
    return matchSearch;
  });

  // Estatísticas
  const totalValue = filteredData.reduce((sum, item) => sum + item.value, 0);
  const totalNet = filteredData.reduce((sum, item) => sum + item.net, 0);

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
                  <Wallet className="w-8 h-8 text-purple-600" />
                  Caixinhas
                </h1>
                <p className="text-slate-600 mt-1">
                  Controle de gorjetas e caixinhas
                </p>
              </div>
              <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-lg px-6 py-3 font-medium shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2">
                <DollarSign className="w-4 h-4" />
                Nova Caixinha
              </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 border border-purple-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-purple-900">
                      Total de Registros
                    </p>
                    <p className="text-2xl font-bold text-purple-700 mt-1">
                      {filteredData.length}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-purple-700" />
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-4 border border-emerald-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-emerald-900">
                      Valor Total
                    </p>
                    <p className="text-2xl font-bold text-emerald-700 mt-1">
                      R$ {totalValue.toFixed(2)}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-emerald-200 rounded-full flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-emerald-700" />
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-blue-900">
                      Valor Líquido
                    </p>
                    <p className="text-2xl font-bold text-blue-700 mt-1">
                      R$ {totalNet.toFixed(2)}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center">
                    <Wallet className="w-6 h-6 text-blue-700" />
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Buscar
                    </label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <Input
                        type="text"
                        value={searchFilter}
                        onChange={(e) => setSearchFilter(e.target.value)}
                        placeholder="Profissional, caixa ou pagamento..."
                        className="pl-10 border-slate-300 focus:border-purple-500 focus:ring-purple-500"
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
                        className="pl-10 border-slate-300 focus:border-purple-500 focus:ring-purple-500"
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
                        className="pl-10 border-slate-300 focus:border-purple-500 focus:ring-purple-500"
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

          {/* Cards List */}
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
                <div className="bg-gradient-to-r from-purple-50 to-white px-6 py-4 border-b border-slate-200">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <User className="w-5 h-5 text-purple-600" />
                        <h3 className="text-lg font-semibold text-slate-900">
                          {item.professional}
                        </h3>
                        <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                          {item.status}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {item.date}
                        </span>
                        {item.time && (
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {item.time}
                          </span>
                        )}
                        <span className="flex items-center gap-1">
                          <FileText className="w-4 h-4" />
                          ID: #{item.id}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <p className="text-xs text-slate-600">Valor Bruto</p>
                        <p className="text-xl font-bold text-emerald-600">
                          R$ {item.value.toFixed(2)}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-slate-600">Líquido</p>
                        <p className="text-2xl font-bold text-purple-600">
                          R$ {item.net.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Summary Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div className="bg-slate-50 rounded-lg p-3">
                      <p className="text-xs text-slate-600 mb-1">Caixa</p>
                      <p className="text-sm font-semibold text-slate-900 truncate">
                        {item.cashRegister}
                      </p>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-3">
                      <p className="text-xs text-blue-700 mb-1 flex items-center gap-1">
                        <CreditCard className="w-3 h-3" />
                        Pagamento
                      </p>
                      <p className="text-sm font-semibold text-blue-900 truncate">
                        {item.payment}
                      </p>
                    </div>

                    <div className="bg-orange-50 rounded-lg p-3">
                      <p className="text-xs text-orange-700 mb-1">
                        Taxa Cartão
                      </p>
                      <p className="text-sm font-semibold text-orange-900">
                        R$ {item.card.toFixed(2)}
                      </p>
                    </div>

                    <div className="bg-emerald-50 rounded-lg p-3">
                      <p className="text-xs text-emerald-700 mb-1">Cliente</p>
                      <p className="text-sm font-semibold text-emerald-900">
                        {item.client || "Não especificado"}
                      </p>
                    </div>
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
                        {item.cashRegisterId && (
                          <div className="bg-white border border-slate-200 rounded-lg p-4">
                            <p className="text-xs font-medium text-slate-600 uppercase mb-2">
                              ID do Caixa
                            </p>
                            <p className="text-lg font-bold text-slate-900">
                              #{item.cashRegisterId}
                            </p>
                          </div>
                        )}

                        <div className="bg-white border border-slate-200 rounded-lg p-4">
                          <p className="text-xs font-medium text-slate-600 uppercase mb-2">
                            Diferença (Bruto - Líquido)
                          </p>
                          <p className="text-lg font-bold text-orange-600">
                            R$ {(item.value - item.net).toFixed(2)}
                          </p>
                        </div>

                        <div className="bg-white border border-slate-200 rounded-lg p-4">
                          <p className="text-xs font-medium text-slate-600 uppercase mb-2">
                            Horário Completo
                          </p>
                          <p className="text-lg font-bold text-slate-900">
                            {item.date} às {item.time || "00:00"}
                          </p>
                        </div>

                        <div className="bg-white border border-slate-200 rounded-lg p-4">
                          <p className="text-xs font-medium text-slate-600 uppercase mb-2">
                            Método de Pagamento
                          </p>
                          <div className="flex items-center gap-2">
                            <CreditCard className="w-4 h-4 text-blue-600" />
                            <p className="text-sm font-bold text-slate-900">
                              {item.payment}
                            </p>
                          </div>
                        </div>
                      </div>

                      {item.observation && (
                        <div className="mt-4 bg-purple-50 border border-purple-200 rounded-lg p-4">
                          <p className="text-xs font-medium text-purple-900 uppercase mb-2 flex items-center gap-1">
                            <Info className="w-3 h-3" />
                            Observação
                          </p>
                          <p className="text-sm text-purple-900">
                            {item.observation}
                          </p>
                        </div>
                      )}

                      {/* Financial Summary */}
                      <div className="mt-4 bg-gradient-to-r from-emerald-50 to-blue-50 border border-emerald-200 rounded-lg p-4">
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div>
                            <p className="text-xs text-slate-600 mb-1">
                              Valor Bruto
                            </p>
                            <p className="text-lg font-bold text-emerald-700">
                              R$ {item.value.toFixed(2)}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-600 mb-1">
                              Taxa Cartão
                            </p>
                            <p className="text-lg font-bold text-orange-600">
                              - R$ {item.card.toFixed(2)}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-600 mb-1">
                              Líquido Final
                            </p>
                            <p className="text-lg font-bold text-purple-700">
                              R$ {item.net.toFixed(2)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {filteredData.length === 0 && (
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-12 text-center">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wallet className="w-8 h-8 text-slate-400" />
                </div>
                <p className="text-slate-600 text-lg font-medium">
                  Nenhuma caixinha encontrada
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

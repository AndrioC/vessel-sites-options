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
  Wallet,
  TrendingUp,
  Info,
  Clock,
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
                  <Wallet className="w-8 h-8 text-blue-600" />
                  Caixinhas
                </h1>
                <p className="text-slate-600 mt-1">
                  Controle de gorjetas e caixinhas
                </p>
              </div>
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg px-6 py-3 font-medium shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2">
                <DollarSign className="w-4 h-4" />
                Nova Caixinha
              </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Total de Registros
                    </p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">
                      {filteredData.length}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-gray-600" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Valor Total
                    </p>
                    <p className="text-2xl font-bold text-blue-600 mt-1">
                      R$ {totalValue.toFixed(2)}
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
                      Valor Líquido
                    </p>
                    <p className="text-2xl font-bold text-blue-600 mt-1">
                      R$ {totalNet.toFixed(2)}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Wallet className="w-6 h-6 text-blue-600" />
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

          {/* Tabela de Caixinhas */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-slate-600">
                    #
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-slate-600">
                    Profissional
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-slate-600">
                    Data
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-slate-600">
                    Pagamento
                  </th>
                  <th className="px-6 py-3 text-right text-sm font-medium text-slate-600">
                    Valor
                  </th>
                  <th className="px-6 py-3 text-right text-sm font-medium text-slate-600">
                    Líquido
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
                {filteredData.map((item) => (
                  <Fragment key={item.id}>
                    <tr className="hover:bg-slate-50">
                      <td className="px-6 py-4 align-middle text-sm text-slate-700">
                        #{item.id}
                      </td>
                      <td className="px-6 py-4 align-middle">
                        <div className="font-semibold text-slate-900">
                          {item.professional}
                        </div>
                        <div className="text-xs text-slate-500 mt-1 flex items-center gap-2">
                          <User className="w-3 h-3" />
                          <span>{item.cashRegister}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 align-middle">
                        <div className="text-sm text-slate-600">
                          {item.date}
                        </div>
                        {item.time && (
                          <div className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {item.time}
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 align-middle text-sm text-slate-600">
                        {item.payment}
                      </td>
                      <td className="px-6 py-4 align-middle text-right font-semibold text-slate-900">
                        R$ {item.value.toFixed(2)}
                      </td>
                      <td className="px-6 py-4 align-middle text-right font-semibold text-blue-600">
                        R$ {item.net.toFixed(2)}
                      </td>
                      <td className="px-6 py-4 align-middle text-center">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700">
                          {item.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 align-middle text-center">
                        <div className="flex items-center justify-center gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-sm border-slate-300 hover:bg-slate-50 flex items-center gap-2"
                            onClick={() =>
                              setExpandedItem(
                                expandedItem === item.id ? null : item.id
                              )
                            }
                          >
                            {expandedItem === item.id ? (
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

                    {expandedItem === item.id && (
                      <tr>
                        <td colSpan={8} className="px-6 py-4 bg-slate-50">
                          <div className="mb-4">
                            <h4 className="text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2">
                              <Info className="w-4 h-4 text-slate-600" />
                              Informações Detalhadas
                            </h4>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                              <div className="bg-white border border-slate-200 rounded-lg p-3">
                                <p className="text-xs text-slate-600 mb-1">
                                  Caixa Registradora
                                </p>
                                <p className="text-sm font-semibold text-slate-900">
                                  {item.cashRegister}
                                </p>
                              </div>

                              <div className="bg-white border border-slate-200 rounded-lg p-3">
                                <p className="text-xs text-slate-600 mb-1">
                                  Cliente
                                </p>
                                <p className="text-sm font-semibold text-slate-900">
                                  {item.client || "Não especificado"}
                                </p>
                              </div>

                              {item.cashRegisterId && (
                                <div className="bg-white border border-slate-200 rounded-lg p-3">
                                  <p className="text-xs text-slate-600 mb-1">
                                    ID do Caixa
                                  </p>
                                  <p className="text-sm font-semibold text-slate-900">
                                    #{item.cashRegisterId}
                                  </p>
                                </div>
                              )}

                              <div className="bg-white border border-slate-200 rounded-lg p-3">
                                <p className="text-xs text-slate-600 mb-1">
                                  Taxa Cartão
                                </p>
                                <p className="text-sm font-semibold text-red-600">
                                  R$ {item.card.toFixed(2)}
                                </p>
                              </div>

                              <div className="bg-white border border-slate-200 rounded-lg p-3">
                                <p className="text-xs text-slate-600 mb-1">
                                  Diferença (Valor - Líquido)
                                </p>
                                <p className="text-sm font-semibold text-orange-600">
                                  R$ {(item.value - item.net).toFixed(2)}
                                </p>
                              </div>
                            </div>

                            {item.observation && (
                              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                                <p className="text-xs text-blue-900 font-medium mb-1">
                                  Observação
                                </p>
                                <p className="text-sm text-blue-900">
                                  {item.observation}
                                </p>
                              </div>
                            )}

                            <div className="mt-4 border-t border-slate-200 pt-3 flex justify-end gap-6 text-sm">
                              <div>
                                Valor Bruto:{" "}
                                <span className="font-semibold text-slate-900">
                                  R$ {item.value.toFixed(2)}
                                </span>
                              </div>
                              <div className="text-red-600">
                                Taxa:{" "}
                                <span className="font-semibold">
                                  R$ {item.card.toFixed(2)}
                                </span>
                              </div>
                              <div className="text-lg font-bold text-blue-600">
                                Líquido: R$ {item.net.toFixed(2)}
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </Fragment>
                ))}
              </tbody>
            </table>

            {filteredData.length === 0 && (
              <div className="p-12 text-center">
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

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  ChevronDown,
  ChevronUp,
  FileText,
  DollarSign,
  TrendingUp,
  CheckCircle2,
  Clock,
  Send,
  Eye,
  Download,
  User,
} from "lucide-react";

interface RPS {
  id: number;
  command: string;
  client: string;
  cpf: string;
  date: string;
  service: string;
  company: string;
  value: number;
  paymentType: string;
  status: "open" | "issued";
  issuedDate?: string;
  rpsNumber?: string;
}

const rpsData: RPS[] = [
  {
    id: 1,
    command: "CMD-001",
    client: "Maria Silva Santos",
    cpf: "123.456.789-00",
    date: "25/11/2025",
    service: "Corte e Escova",
    company: "Empresa Principal",
    value: 150.0,
    paymentType: "Cartão de Crédito",
    status: "open",
  },
  {
    id: 2,
    command: "CMD-002",
    client: "João Pedro Oliveira",
    cpf: "987.654.321-00",
    date: "26/11/2025",
    service: "Barba e Bigode",
    company: "Empresa Principal",
    value: 80.0,
    paymentType: "Dinheiro",
    status: "open",
  },
  {
    id: 3,
    command: "CMD-003",
    client: "Ana Carolina Costa",
    cpf: "456.789.123-00",
    date: "24/11/2025",
    service: "Coloração Completa",
    company: "Empresa Principal",
    value: 320.0,
    paymentType: "PIX",
    status: "issued",
    issuedDate: "24/11/2025",
    rpsNumber: "RPS-2025-001234",
  },
  {
    id: 4,
    command: "CMD-004",
    client: "Carlos Eduardo Lima",
    cpf: "321.654.987-00",
    date: "23/11/2025",
    service: "Manicure e Pedicure",
    company: "Empresa Principal",
    value: 90.0,
    paymentType: "Cartão de Débito",
    status: "issued",
    issuedDate: "23/11/2025",
    rpsNumber: "RPS-2025-001233",
  },
  {
    id: 5,
    command: "CMD-005",
    client: "Fernanda Souza",
    cpf: "789.123.456-00",
    date: "27/11/2025",
    service: "Massagem Relaxante",
    company: "Empresa Principal",
    value: 180.0,
    paymentType: "PIX",
    status: "open",
  },
];

export default function RPSPage() {
  const [activeTab, setActiveTab] = useState<"open" | "issued">("open");
  const [filterExpanded, setFilterExpanded] = useState(false);
  const [searchFilter, setSearchFilter] = useState("");
  const [selectedProfessional, setSelectedProfessional] =
    useState("Empresa Principal");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const filteredData = rpsData.filter((item) => {
    const matchStatus = item.status === activeTab;
    const matchSearch =
      item.client.toLowerCase().includes(searchFilter.toLowerCase()) ||
      item.command.toLowerCase().includes(searchFilter.toLowerCase()) ||
      item.service.toLowerCase().includes(searchFilter.toLowerCase());
    return matchStatus && matchSearch;
  });

  // Estatísticas
  const totalOpen = rpsData
    .filter((r) => r.status === "open")
    .reduce((sum, r) => sum + r.value, 0);
  const totalIssued = rpsData
    .filter((r) => r.status === "issued")
    .reduce((sum, r) => sum + r.value, 0);
  const openCount = rpsData.filter((r) => r.status === "open").length;
  const issuedCount = rpsData.filter((r) => r.status === "issued").length;
  const selectedTotal = filteredData
    .filter((item) => selectedItems.includes(item.id))
    .reduce((sum, item) => sum + item.value, 0);

  const toggleSelectAll = () => {
    if (selectedItems.length === filteredData.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(filteredData.map((item) => item.id));
    }
  };

  const toggleSelectItem = (id: number) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
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
                  <FileText className="w-8 h-8 text-indigo-600" />
                  RPS
                </h1>
                <p className="text-slate-600 mt-1">
                  Recibos de Pagamento de Serviço
                </p>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-4 border border-indigo-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-indigo-900">
                      RPS Abertas
                    </p>
                    <p className="text-2xl font-bold text-indigo-700 mt-1">
                      {openCount}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-indigo-200 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-indigo-700" />
                  </div>
                </div>
              </div>

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
                    <DollarSign className="w-6 h-6 text-emerald-700" />
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-blue-900">
                      RPS Emitidas
                    </p>
                    <p className="text-2xl font-bold text-blue-700 mt-1">
                      {issuedCount}
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
                      Total Emitido
                    </p>
                    <p className="text-2xl font-bold text-purple-700 mt-1">
                      R$ {totalIssued.toFixed(2)}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-purple-700" />
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
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Profissional
                    </label>
                    <select
                      value={selectedProfessional}
                      onChange={(e) => setSelectedProfessional(e.target.value)}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:border-indigo-500 focus:ring-indigo-500 bg-white"
                    >
                      <option value="Empresa Principal">
                        Empresa Principal
                      </option>
                      <option value="Profissional 1">Profissional 1</option>
                      <option value="Profissional 2">Profissional 2</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Data Inicial
                      </label>
                      <Input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="border-slate-300 focus:border-indigo-500 focus:ring-indigo-500"
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
                        className="border-slate-300 focus:border-indigo-500 focus:ring-indigo-500"
                      />
                    </div>
                  </div>

                  <Button className="bg-slate-900 hover:bg-slate-800 text-white rounded-lg px-6 py-2 font-medium">
                    <Search className="w-4 h-4 mr-2" />
                    Pesquisar
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Selected Total */}
          {selectedItems.length > 0 && (
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl shadow-sm border border-indigo-200 mb-6 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">
                    Total Selecionado
                  </p>
                  <p className="text-2xl font-bold text-indigo-700">
                    R$ {selectedTotal.toFixed(2)}
                  </p>
                </div>
                {activeTab === "open" && (
                  <Button className="bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white rounded-lg px-6 py-3 font-medium shadow-lg flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    Emitir Selecionados
                  </Button>
                )}
              </div>
            </div>
          )}

          {/* Tabs */}
          <div className="bg-white rounded-t-xl shadow-sm border border-slate-200 border-b-0">
            <div className="flex">
              <button
                onClick={() => setActiveTab("open")}
                className={`flex-1 px-6 py-4 font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
                  activeTab === "open"
                    ? "bg-indigo-50 text-indigo-700 border-b-2 border-indigo-600"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                <Clock className="w-4 h-4" />
                Abertas
              </button>
              <button
                onClick={() => setActiveTab("issued")}
                className={`flex-1 px-6 py-4 font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
                  activeTab === "issued"
                    ? "bg-blue-50 text-blue-700 border-b-2 border-blue-600"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                Emitidas
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-b-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-slate-800 to-slate-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                      <input
                        type="checkbox"
                        checked={
                          selectedItems.length === filteredData.length &&
                          filteredData.length > 0
                        }
                        onChange={toggleSelectAll}
                        className="rounded"
                      />
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                      Id
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                      Comanda
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                      Cliente
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                      CPF
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                      Data
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                      Serviço
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                      Empresa
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                      Valor
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                      Tipo de Pagamento
                    </th>
                    {activeTab === "issued" && (
                      <th className="px-6 py-4 text-center text-sm font-semibold"></th>
                    )}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredData.map((item, index) => (
                    <tr
                      key={item.id}
                      className="hover:bg-slate-50 transition-colors"
                      style={{
                        animation: `slideIn 0.3s ease-out ${index * 30}ms both`,
                      }}
                    >
                      <td className="px-6 py-4">
                        <input
                          type="checkbox"
                          checked={selectedItems.includes(item.id)}
                          onChange={() => toggleSelectItem(item.id)}
                          className="rounded"
                        />
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-900 font-medium">
                        #{item.id}
                      </td>
                      <td className="px-6 py-4 text-sm text-blue-600 font-medium">
                        {item.command}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-900">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4 text-slate-400" />
                          {item.client}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600">
                        {item.cpf}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600">
                        {item.date}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-900">
                        {item.service}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600">
                        {item.company}
                      </td>
                      <td className="px-6 py-4 text-sm font-semibold text-emerald-600">
                        R$ {item.value.toFixed(2)}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium whitespace-nowrap">
                          {item.paymentType}
                        </span>
                      </td>
                      {activeTab === "issued" && (
                        <td className="px-6 py-4">
                          <div className="flex items-center justify-center gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-blue-300 text-blue-600 hover:bg-blue-50"
                            >
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-emerald-300 text-emerald-600 hover:bg-emerald-50"
                            >
                              <Download className="w-4 h-4" />
                            </Button>
                          </div>
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredData.length === 0 && (
              <div className="p-12 text-center">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-slate-400" />
                </div>
                <p className="text-slate-600 text-lg font-medium">
                  Nenhuma RPS encontrada
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

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  ChevronDown,
  ChevronUp,
  DollarSign,
  TrendingUp,
  CheckCircle2,
  Clock,
  Send,
  Eye,
  Download,
  User,
  Receipt,
} from "lucide-react";

interface NFSe {
  id: number;
  number?: string;
  command: string;
  client: string;
  document: string;
  service: string;
  payments: string;
  company: string;
  value: number;
  status: "open" | "issued";
  issuedDate?: string;
  nfseNumber?: string;
}

const nfseData: NFSe[] = [
  {
    id: 1,
    command: "CMD-001",
    client: "Maria Silva Santos",
    document: "123.456.789-00",
    service: "Corte e Escova",
    payments: "Cartão de Crédito",
    company: "Salão Beleza Total LTDA",
    value: 150.0,
    status: "open",
  },
  {
    id: 2,
    command: "CMD-002",
    client: "João Pedro Oliveira",
    document: "987.654.321-00",
    service: "Barba e Bigode",
    payments: "Dinheiro",
    company: "Salão Beleza Total LTDA",
    value: 80.0,
    status: "open",
  },
  {
    id: 3,
    command: "CMD-003",
    client: "Ana Carolina Costa",
    document: "456.789.123-00",
    service: "Coloração Completa",
    payments: "PIX",
    company: "Salão Beleza Total LTDA",
    value: 320.0,
    status: "open",
  },
  {
    id: 4,
    number: "12345",
    command: "CMD-004",
    client: "Carlos Eduardo Lima",
    document: "321.654.987-00",
    service: "Manicure e Pedicure",
    payments: "Cartão de Débito",
    company: "Salão Beleza Total LTDA",
    value: 90.0,
    status: "issued",
    issuedDate: "23/11/2025",
    nfseNumber: "NFS-2025-012345",
  },
  {
    id: 5,
    number: "12346",
    command: "CMD-005",
    client: "Fernanda Souza",
    document: "789.123.456-00",
    service: "Massagem Relaxante",
    payments: "PIX",
    company: "Salão Beleza Total LTDA",
    value: 180.0,
    status: "issued",
    issuedDate: "22/11/2025",
    nfseNumber: "NFS-2025-012346",
  },
  {
    id: 6,
    command: "CMD-006",
    client: "Roberto Santos",
    document: "654.321.987-00",
    service: "Design de Sobrancelhas",
    payments: "Cartão de Crédito",
    company: "Salão Beleza Total LTDA",
    value: 60.0,
    status: "open",
  },
  {
    id: 7,
    number: "12347",
    command: "CMD-007",
    client: "Juliana Costa",
    document: "147.258.369-00",
    service: "Hidratação Capilar",
    payments: "PIX",
    company: "Salão Beleza Total LTDA",
    value: 120.0,
    status: "issued",
    issuedDate: "21/11/2025",
    nfseNumber: "NFS-2025-012347",
  },
];

export default function NFSePage() {
  const [activeTab, setActiveTab] = useState<"open" | "issued">("open");
  const [filterExpanded, setFilterExpanded] = useState(false);
  const [searchFilter, setSearchFilter] = useState("");
  const [selectedIssuer, setSelectedIssuer] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const filteredData = nfseData.filter((item) => {
    const matchStatus = item.status === activeTab;
    const matchSearch =
      item.client.toLowerCase().includes(searchFilter.toLowerCase()) ||
      item.command.toLowerCase().includes(searchFilter.toLowerCase()) ||
      item.service.toLowerCase().includes(searchFilter.toLowerCase()) ||
      item.document.includes(searchFilter);
    return matchStatus && matchSearch;
  });

  // Estatísticas
  const totalOpen = nfseData
    .filter((n) => n.status === "open")
    .reduce((sum, n) => sum + n.value, 0);
  const totalIssued = nfseData
    .filter((n) => n.status === "issued")
    .reduce((sum, n) => sum + n.value, 0);
  const openCount = nfseData.filter((n) => n.status === "open").length;
  const issuedCount = nfseData.filter((n) => n.status === "issued").length;
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
      <div className="min-h-screen bg-gray-50">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-white via-gray-50 to-white border-b border-gray-200 shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center shadow-md">
                    <Receipt className="w-6 h-6 text-white" />
                  </div>
                  NFS-e
                </h1>
                <p className="text-gray-600 mt-1">
                  Nota Fiscal de Serviço Eletrônica
                </p>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
              <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      NFS-e Abertas
                    </p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">
                      {openCount}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-gray-600" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Total Aberto
                    </p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">
                      R$ {totalOpen.toFixed(2)}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-gray-600" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      NFS-e Emitidas
                    </p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">
                      {issuedCount}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-gray-600" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Total Emitido
                    </p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">
                      R$ {totalIssued.toFixed(2)}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-gray-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Filters */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6 overflow-hidden">
            <button
              onClick={() => setFilterExpanded(!filterExpanded)}
              className="w-full flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Search className="w-5 h-5 text-gray-600" />
                <span className="font-medium text-gray-900">
                  Filtro de Pesquisa
                </span>
              </div>
              {filterExpanded ? (
                <ChevronUp className="w-5 h-5 text-gray-600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-600" />
              )}
            </button>

            {filterExpanded && (
              <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Emitente
                    </label>
                    <select
                      value={selectedIssuer}
                      onChange={(e) => setSelectedIssuer(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-gray-500 focus:ring-gray-500 bg-white"
                    >
                      <option value="">Selecione um emitente</option>
                      <option value="salao1">Salão Beleza Total LTDA</option>
                      <option value="salao2">Filial Centro</option>
                      <option value="salao3">Filial Shopping</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Data inicial
                      </label>
                      <Input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="border-gray-300 focus:border-gray-500 focus:ring-gray-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Data final
                      </label>
                      <Input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="border-gray-300 focus:border-gray-500 focus:ring-gray-500"
                      />
                    </div>
                  </div>

                  <Button className="bg-gray-900 hover:bg-gray-800 text-white rounded-lg px-6 py-2 font-medium">
                    <Search className="w-4 h-4 mr-2" />
                    Pesquisar
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Selected Total and Emit Button */}
          {selectedItems.length > 0 && activeTab === "open" && (
            <div className="bg-white rounded-lg shadow-sm border border-gray-300 mb-6 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Total Selecionado
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    R$ {selectedTotal.toFixed(2)}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {selectedItems.length}{" "}
                    {selectedItems.length === 1
                      ? "nota selecionada"
                      : "notas selecionadas"}
                  </p>
                </div>
                <Button className="bg-gray-900 hover:bg-gray-800 text-white rounded-lg px-6 py-3 font-medium shadow-lg flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  Emitir Selecionados
                </Button>
              </div>
            </div>
          )}

          {/* Tabs */}
          <div className="bg-white rounded-t-lg shadow-sm border border-gray-200 border-b-0">
            <div className="flex">
              <button
                onClick={() => setActiveTab("open")}
                className={`flex-1 px-6 py-4 font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
                  activeTab === "open"
                    ? "bg-gray-100 text-gray-900 border-b-2 border-gray-600"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <Clock className="w-4 h-4" />
                Abertas
              </button>
              <button
                onClick={() => setActiveTab("issued")}
                className={`flex-1 px-6 py-4 font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
                  activeTab === "issued"
                    ? "bg-gray-100 text-gray-900 border-b-2 border-gray-600"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                Emitidas
              </button>
            </div>
          </div>

          {/* Emit Button Above Table */}
          {activeTab === "open" && filteredData.length > 0 && (
            <div className="bg-gray-900 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={
                    selectedItems.length === filteredData.length &&
                    filteredData.length > 0
                  }
                  onChange={toggleSelectAll}
                  className="rounded w-5 h-5"
                />
                <span className="text-white font-medium">Selecionar todos</span>
              </div>
              <Button className="bg-white hover:bg-gray-100 text-gray-900 rounded-lg px-6 py-2 font-medium shadow-md flex items-center gap-2">
                <Send className="w-4 h-4" />
                Emitir Selecionados
              </Button>
            </div>
          )}

          {/* Table */}
          <div className="bg-white rounded-b-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-900 text-white">
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
                    {activeTab === "issued" && (
                      <th className="px-6 py-4 text-left text-sm font-semibold">
                        Número
                      </th>
                    )}
                    <th className="px-6 py-4 text-left text-sm font-semibold whitespace-nowrap">
                      Comanda
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold whitespace-nowrap">
                      Cliente
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold whitespace-nowrap">
                      Documento
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold whitespace-nowrap">
                      Serviço
                    </th>
                    {activeTab === "open" && (
                      <th className="px-6 py-4 text-left text-sm font-semibold whitespace-nowrap">
                        Pagamentos
                      </th>
                    )}
                    {activeTab === "open" && (
                      <th className="px-6 py-4 text-left text-sm font-semibold whitespace-nowrap">
                        Empresa
                      </th>
                    )}
                    <th className="px-6 py-4 text-left text-sm font-semibold whitespace-nowrap">
                      Valor
                    </th>
                    {activeTab === "issued" && (
                      <th className="px-6 py-4 text-center text-sm font-semibold">
                        Emitir
                      </th>
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
                      {activeTab === "issued" && (
                        <td className="px-6 py-4 text-sm text-slate-900 font-medium">
                          {item.number || "-"}
                        </td>
                      )}
                      <td className="px-6 py-4 text-sm text-blue-600 font-medium whitespace-nowrap">
                        {item.command}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-900 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4 text-slate-400" />
                          {item.client}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600 whitespace-nowrap">
                        {item.document}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-900 whitespace-nowrap">
                        {item.service}
                      </td>
                      {activeTab === "open" && (
                        <td className="px-6 py-4 text-sm">
                          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium whitespace-nowrap">
                            {item.payments}
                          </span>
                        </td>
                      )}
                      {activeTab === "open" && (
                        <td className="px-6 py-4 text-sm text-slate-600 whitespace-nowrap">
                          {item.company}
                        </td>
                      )}
                      <td className="px-6 py-4 text-sm font-semibold text-emerald-600 whitespace-nowrap">
                        R$ {item.value.toFixed(2)}
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
                  <Receipt className="w-8 h-8 text-slate-400" />
                </div>
                <p className="text-slate-600 text-lg font-medium">
                  Nenhuma NFS-e encontrada
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

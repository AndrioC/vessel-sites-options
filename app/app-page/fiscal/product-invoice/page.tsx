"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  Edit,
  Trash,
  Eye,
  Download,
  Plus,
  Receipt,
  TrendingUp,
  FileText,
  DollarSign,
  User,
  Calendar,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

interface Invoice {
  id: number;
  client: string;
  date: string;
  value: number;
  status: "issued" | "cancelled" | "pending";
  invoiceNumber?: string;
  services?: string[];
}

const invoicesData: Invoice[] = [
  {
    id: 1,
    client: "Maria Silva Santos",
    date: "25/11/2025",
    value: 450.0,
    status: "issued",
    invoiceNumber: "NF-2025-001234",
    services: ["Corte", "Escova", "Coloração"],
  },
  {
    id: 2,
    client: "João Pedro Oliveira",
    date: "26/11/2025",
    value: 180.0,
    status: "issued",
    invoiceNumber: "NF-2025-001235",
    services: ["Barba", "Corte Masculino"],
  },
  {
    id: 3,
    client: "Ana Carolina Costa",
    date: "24/11/2025",
    value: 320.0,
    status: "issued",
    invoiceNumber: "NF-2025-001236",
    services: ["Hidratação", "Escova"],
  },
  {
    id: 4,
    client: "Carlos Eduardo Lima",
    date: "23/11/2025",
    value: 90.0,
    status: "cancelled",
    invoiceNumber: "NF-2025-001237",
    services: ["Manicure"],
  },
  {
    id: 5,
    client: "Fernanda Souza",
    date: "27/11/2025",
    value: 280.0,
    status: "issued",
    invoiceNumber: "NF-2025-001238",
    services: ["Massagem", "Limpeza de Pele"],
  },
  {
    id: 6,
    client: "Roberto Santos",
    date: "22/11/2025",
    value: 120.0,
    status: "pending",
    services: ["Design de Sobrancelhas", "Depilação"],
  },
  {
    id: 7,
    client: "Juliana Costa",
    date: "21/11/2025",
    value: 200.0,
    status: "issued",
    invoiceNumber: "NF-2025-001239",
    services: ["Penteado", "Maquiagem"],
  },
  {
    id: 8,
    client: "Paulo Henrique",
    date: "20/11/2025",
    value: 150.0,
    status: "issued",
    invoiceNumber: "NF-2025-001240",
    services: ["Corte", "Barba"],
  },
];

export default function NotasFiscaisPage() {
  const [searchFilter, setSearchFilter] = useState("");
  const [filterExpanded, setFilterExpanded] = useState(false);
  const [statusFilter, setStatusFilter] = useState<
    "all" | "issued" | "cancelled" | "pending"
  >("all");
  const [startDate, setStartDate] = useState("");

  const filteredData = invoicesData.filter((invoice) => {
    const matchSearch =
      invoice.client.toLowerCase().includes(searchFilter.toLowerCase()) ||
      invoice.invoiceNumber?.toLowerCase().includes(searchFilter.toLowerCase());
    const matchStatus =
      statusFilter === "all" || invoice.status === statusFilter;
    return matchSearch && matchStatus;
  });

  // Estatísticas
  const totalInvoices = invoicesData.length;
  const totalValue = invoicesData
    .filter((i) => i.status === "issued")
    .reduce((sum, i) => sum + i.value, 0);
  const issuedCount = invoicesData.filter((i) => i.status === "issued").length;
  const cancelledCount = invoicesData.filter(
    (i) => i.status === "cancelled"
  ).length;

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "issued":
        return (
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
            Emitida
          </span>
        );
      case "cancelled":
        return (
          <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-semibold">
            Cancelada
          </span>
        );
      case "pending":
        return (
          <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold">
            Pendente
          </span>
        );
      default:
        return null;
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
                  <Receipt className="w-8 h-8 text-slate-700" />
                  Notas Fiscais
                </h1>
                <p className="text-slate-600 mt-1">
                  Gestão de notas fiscais emitidas
                </p>
              </div>
              <Button className="bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-black text-white rounded-lg px-6 py-3 font-medium shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Novo
              </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-4 border border-slate-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-900">
                      Total de Notas
                    </p>
                    <p className="text-2xl font-bold text-slate-700 mt-1">
                      {totalInvoices}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center">
                    <FileText className="w-6 h-6 text-slate-700" />
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

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 border border-green-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-green-900">
                      Emitidas
                    </p>
                    <p className="text-2xl font-bold text-green-700 mt-1">
                      {issuedCount}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-700" />
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-4 border border-red-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-red-900">
                      Canceladas
                    </p>
                    <p className="text-2xl font-bold text-red-700 mt-1">
                      {cancelledCount}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-red-200 rounded-full flex items-center justify-center">
                    <Trash className="w-6 h-6 text-red-700" />
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Buscar
                    </label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <Input
                        type="text"
                        placeholder="Cliente ou número da nota..."
                        value={searchFilter}
                        onChange={(e) => setSearchFilter(e.target.value)}
                        className="pl-10 border-slate-300 focus:border-slate-500 focus:ring-slate-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Status
                    </label>
                    <select
                      value={statusFilter}
                      onChange={(e) =>
                        setStatusFilter(
                          e.target.value as
                            | "all"
                            | "issued"
                            | "cancelled"
                            | "pending"
                        )
                      }
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:border-slate-500 focus:ring-slate-500 bg-white"
                    >
                      <option value="all">Todos</option>
                      <option value="issued">Emitidas</option>
                      <option value="cancelled">Canceladas</option>
                      <option value="pending">Pendentes</option>
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
                      className="border-slate-300 focus:border-slate-500 focus:ring-slate-500"
                    />
                  </div>
                </div>

                {(searchFilter || statusFilter !== "all" || startDate) && (
                  <div className="mt-4 flex gap-2">
                    <Button
                      onClick={() => {
                        setSearchFilter("");
                        setStatusFilter("all");
                        setStartDate("");
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

          {/* Table */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-100 border-b border-slate-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                      Cliente
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                      Data
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                      Número
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                      Valor
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                      Status
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-slate-900"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredData.map((invoice, index) => (
                    <tr
                      key={invoice.id}
                      className="hover:bg-slate-50 transition-colors"
                      style={{
                        animation: `slideIn 0.3s ease-out ${index * 30}ms both`,
                      }}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4 text-slate-400" />
                          <span className="text-sm font-medium text-slate-900">
                            {invoice.client}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-slate-400" />
                          <span className="text-sm text-slate-600">
                            {invoice.date}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm font-medium text-blue-600">
                          {invoice.invoiceNumber || "-"}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm font-semibold text-emerald-600">
                          R$ {invoice.value.toFixed(2)}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        {getStatusBadge(invoice.status)}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-blue-300 text-blue-600 hover:bg-blue-50"
                            title="Visualizar"
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-emerald-300 text-emerald-600 hover:bg-emerald-50"
                            title="Download"
                          >
                            <Download className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-amber-300 text-amber-600 hover:bg-amber-50"
                            title="Editar"
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-red-300 text-red-600 hover:bg-red-50"
                            title="Excluir"
                          >
                            <Trash className="w-4 h-4" />
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
                  <Receipt className="w-8 h-8 text-slate-400" />
                </div>
                <p className="text-slate-600 text-lg font-medium">
                  Nenhuma nota fiscal encontrada
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

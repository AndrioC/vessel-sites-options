"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Eye,
  Edit,
  Trash,
  Search,
  DollarSign,
  FileText,
  TrendingUp,
  Package,
  ChevronDown,
  ChevronUp,
  Calendar,
  Info,
} from "lucide-react";

interface OtherItem {
  id: number;
  name: string;
  description: string;
  value: number;
  createdAt?: string;
  lastModified?: string;
  category?: string;
  details?: {
    quantity?: number;
    unit?: string;
    supplier?: string;
    notes?: string;
  };
}

export default function OthersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const othersData: OtherItem[] = [
    {
      id: 1,
      name: "CAIXINHAS",
      description: "CAIXINHAS",
      value: 0.0,
      createdAt: "15/08/2025",
      lastModified: "20/09/2025",
      category: "Administrativo",
      details: {
        quantity: 10,
        unit: "unidades",
        supplier: "Fornecedor A",
        notes: "Item para controle de pequenos valores e gorjetas",
      },
    },
    {
      id: 2,
      name: "PRODUTOS",
      description: "PRODUTOS",
      value: 0.0,
      createdAt: "10/07/2025",
      lastModified: "18/09/2025",
      category: "Vendas",
      details: {
        quantity: 150,
        unit: "itens",
        supplier: "Distribuidora Beauty",
        notes:
          "Produtos para revenda no salão - shampoos, condicionadores, cremes",
      },
    },
  ];

  const filteredData = othersData.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Estatísticas
  const totalValue = filteredData.reduce((sum, item) => sum + item.value, 0);

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
                  <Package className="w-8 h-8 text-orange-600" />
                  Outros
                </h1>
                <p className="text-slate-600 mt-1">
                  Gerenciamento de itens diversos
                </p>
              </div>
              <Button className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white rounded-lg px-6 py-3 font-medium shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Novo Item
              </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 border border-orange-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-orange-900">
                      Total de Itens
                    </p>
                    <p className="text-2xl font-bold text-orange-700 mt-1">
                      {filteredData.length}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-orange-700" />
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
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Search */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 mb-6 p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input
                type="text"
                placeholder="Buscar por nome ou descrição..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-slate-300 focus:border-orange-500 focus:ring-orange-500"
              />
            </div>
          </div>

          {/* Items List */}
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
                <div className="bg-gradient-to-r from-slate-50 to-white px-6 py-4 border-b border-slate-200">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                        <Package className="w-5 h-5 text-orange-600" />
                        {item.name}
                      </h3>
                      <p className="text-sm text-slate-600 mt-1">
                        {item.description}
                      </p>
                      {item.category && (
                        <span className="inline-block mt-2 px-3 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded-full">
                          {item.category}
                        </span>
                      )}
                    </div>

                    <div className="text-right">
                      <p className="text-sm text-slate-600">Valor</p>
                      <p className="text-2xl font-bold text-emerald-600">
                        R$ {item.value.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-2 mb-4">
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

                  {/* Quick Info Grid */}
                  {(item.createdAt || item.lastModified) && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      {item.createdAt && (
                        <div className="bg-slate-50 rounded-lg p-3">
                          <p className="text-xs text-slate-600 mb-1 flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            Data de Criação
                          </p>
                          <p className="text-sm font-semibold text-slate-900">
                            {item.createdAt}
                          </p>
                        </div>
                      )}
                      {item.lastModified && (
                        <div className="bg-slate-50 rounded-lg p-3">
                          <p className="text-xs text-slate-600 mb-1 flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            Última Modificação
                          </p>
                          <p className="text-sm font-semibold text-slate-900">
                            {item.lastModified}
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Expanded Details */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      expandedItem === item.id
                        ? "max-h-[1000px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {item.details && (
                      <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl border border-slate-200 p-6 animate-in fade-in slide-in-from-top-4">
                        <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                          <Info className="w-5 h-5 text-slate-600" />
                          Informações Detalhadas
                        </h4>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {item.details.quantity && (
                            <div className="bg-white border border-slate-200 rounded-lg p-4">
                              <p className="text-xs font-medium text-slate-600 uppercase mb-2">
                                Quantidade
                              </p>
                              <p className="text-lg font-bold text-slate-900">
                                {item.details.quantity}{" "}
                                {item.details.unit || "unidades"}
                              </p>
                            </div>
                          )}

                          {item.details.supplier && (
                            <div className="bg-white border border-slate-200 rounded-lg p-4">
                              <p className="text-xs font-medium text-slate-600 uppercase mb-2">
                                Fornecedor
                              </p>
                              <p className="text-lg font-bold text-slate-900">
                                {item.details.supplier}
                              </p>
                            </div>
                          )}
                        </div>

                        {item.details.notes && (
                          <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
                            <p className="text-xs font-medium text-blue-900 uppercase mb-2">
                              Observações
                            </p>
                            <p className="text-sm text-blue-900">
                              {item.details.notes}
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {filteredData.length === 0 && (
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-12 text-center">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="w-8 h-8 text-slate-400" />
                </div>
                <p className="text-slate-600 text-lg font-medium">
                  Nenhum item encontrado
                </p>
                <p className="text-slate-500 text-sm mt-2">
                  Tente ajustar sua pesquisa
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

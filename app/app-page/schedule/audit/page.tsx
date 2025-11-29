"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ChevronDown,
  ChevronUp,
  Search,
  Calendar,
  User,
  FileText,
  TrendingUp,
  Clock,
  CheckCircle2,
  Eye,
  Filter,
  Download,
} from "lucide-react";

interface AuditLog {
  id: number;
  date: string;
  professional: string;
  client: string;
  status: boolean;
  action?: string;
  details?: string;
  time?: string;
  changes?: {
    field: string;
    oldValue: string;
    newValue: string;
  }[];
}

const auditData: AuditLog[] = [
  {
    id: 1,
    date: "2025-08-02",
    professional: "ELIZETE DE JESUS",
    client: "-",
    status: true,
    action: "Agendamento criado",
    time: "14:30:22",
    details: "Novo agendamento criado no sistema",
    changes: [
      { field: "Cliente", oldValue: "-", newValue: "Sem cliente" },
      { field: "Serviço", oldValue: "-", newValue: "Corte Feminino" },
      { field: "Horário", oldValue: "-", newValue: "14:30" },
    ],
  },
  {
    id: 2,
    date: "2025-07-25",
    professional: "MARIA LUCIA RIBEIRO DA CRUZ",
    client: "VIVIAN DE MORAES BOCCHIO",
    status: true,
    action: "Agendamento concluído",
    time: "16:45:10",
    details: "Serviço finalizado e pagamento registrado",
    changes: [
      { field: "Status", oldValue: "Agendado", newValue: "Concluído" },
      { field: "Pagamento", oldValue: "Pendente", newValue: "Pago" },
      { field: "Valor", oldValue: "-", newValue: "R$ 120,00" },
    ],
  },
  {
    id: 3,
    date: "2025-07-24",
    professional: "MARIA LUCIA RIBEIRO DA CRUZ",
    client: "SOFIA WHITAKER TABET",
    status: true,
    action: "Cliente cadastrado",
    time: "10:15:33",
    details: "Novo cliente cadastrado no sistema",
    changes: [
      { field: "Nome", oldValue: "-", newValue: "SOFIA WHITAKER TABET" },
      { field: "Telefone", oldValue: "-", newValue: "(11) 98765-4321" },
      { field: "E-mail", oldValue: "-", newValue: "sofia@email.com" },
    ],
  },
  {
    id: 4,
    date: "2025-07-21",
    professional: "JANES SIQUEIRA SILVA",
    client: "FERNANDA LEMOS",
    status: true,
    action: "Agendamento modificado",
    time: "09:22:18",
    details: "Horário do agendamento foi alterado",
    changes: [
      { field: "Horário", oldValue: "14:00", newValue: "15:30" },
      {
        field: "Profissional",
        oldValue: "MARIA",
        newValue: "JANES SIQUEIRA SILVA",
      },
    ],
  },
  {
    id: 5,
    date: "2025-08-01",
    professional: "MICHELE SANTANA FONSECA",
    client: "CLAUDIA HIMELEARB",
    status: true,
    action: "Produto adicionado",
    time: "11:50:44",
    details: "Produto vendido durante atendimento",
    changes: [
      { field: "Produto", oldValue: "-", newValue: "Shampoo Premium" },
      { field: "Quantidade", oldValue: "-", newValue: "2 unidades" },
      { field: "Valor", oldValue: "-", newValue: "R$ 89,90" },
    ],
  },
  {
    id: 6,
    date: "2025-07-28",
    professional: "ELIZETE DE JESUS",
    client: "ANA PAULA COSTA",
    status: true,
    action: "Agendamento cancelado",
    time: "13:20:15",
    details: "Cliente solicitou cancelamento",
    changes: [
      { field: "Status", oldValue: "Agendado", newValue: "Cancelado" },
      { field: "Motivo", oldValue: "-", newValue: "Imprevisto pessoal" },
    ],
  },
];

export default function AuditPage() {
  const [filterExpanded, setFilterExpanded] = useState(false);
  const [searchFilter, setSearchFilter] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedClient, setSelectedClient] = useState("");
  const [selectedProfessional, setSelectedProfessional] = useState("");
  const [expandedLog, setExpandedLog] = useState<number | null>(null);

  const filteredData = auditData.filter((log) => {
    const matchSearch = searchFilter
      ? log.professional.toLowerCase().includes(searchFilter.toLowerCase()) ||
        log.client.toLowerCase().includes(searchFilter.toLowerCase()) ||
        log.action?.toLowerCase().includes(searchFilter.toLowerCase())
      : true;
    return matchSearch;
  });

  // Estatísticas
  const totalLogs = filteredData.length;
  const uniqueProfessionals = new Set(filteredData.map((l) => l.professional))
    .size;
  const successRate =
    (filteredData.filter((l) => l.status).length / totalLogs) * 100;

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
                  Auditoria
                </h1>
                <p className="text-slate-600 mt-1">
                  Histórico de ações e modificações do sistema
                </p>
              </div>
              <Button className="bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white rounded-lg px-6 py-3 font-medium shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2">
                <Download className="w-4 h-4" />
                Exportar Relatório
              </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-4 border border-indigo-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-indigo-900">
                      Total de Registros
                    </p>
                    <p className="text-2xl font-bold text-indigo-700 mt-1">
                      {totalLogs}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-indigo-200 rounded-full flex items-center justify-center">
                    <FileText className="w-6 h-6 text-indigo-700" />
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 border border-purple-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-purple-900">
                      Profissionais Ativos
                    </p>
                    <p className="text-2xl font-bold text-purple-700 mt-1">
                      {uniqueProfessionals}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-purple-700" />
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-4 border border-emerald-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-emerald-900">
                      Taxa de Sucesso
                    </p>
                    <p className="text-2xl font-bold text-emerald-700 mt-1">
                      {successRate.toFixed(0)}%
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-emerald-200 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-emerald-700" />
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
                <Filter className="w-5 h-5 text-slate-600" />
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Início
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <Input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="pl-10 border-slate-300 focus:border-indigo-500 focus:ring-indigo-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Fim
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <Input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="pl-10 border-slate-300 focus:border-indigo-500 focus:ring-indigo-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Cliente
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <Input
                        type="text"
                        value={selectedClient}
                        onChange={(e) => setSelectedClient(e.target.value)}
                        placeholder="Selecione um cliente..."
                        className="pl-10 border-slate-300 focus:border-indigo-500 focus:ring-indigo-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Profissional
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <Input
                        type="text"
                        value={selectedProfessional}
                        onChange={(e) =>
                          setSelectedProfessional(e.target.value)
                        }
                        placeholder="Selecione um profissional..."
                        className="pl-10 border-slate-300 focus:border-indigo-500 focus:ring-indigo-500"
                      />
                    </div>
                  </div>
                </div>

                <Button className="bg-slate-900 hover:bg-slate-800 text-white rounded-lg px-6 py-2 font-medium">
                  <Search className="w-4 h-4 mr-2" />
                  Pesquisar
                </Button>
              </div>
            )}
          </div>

          {/* Audit Table - Desktop */}
          <div className="hidden lg:block bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                      Data
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                      Profissional
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                      Cliente
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold">
                      Status
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold">
                      Auditoria
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredData.map((log, index) => (
                    <tr
                      key={log.id}
                      className="hover:bg-indigo-50 transition-colors"
                      style={{
                        animation: `slideIn 0.3s ease-out ${index * 30}ms both`,
                      }}
                    >
                      <td className="px-6 py-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-slate-400" />
                          <span className="font-medium text-slate-900">
                            {new Date(log.date).toLocaleDateString("pt-BR")}
                          </span>
                        </div>
                        {log.time && (
                          <div className="flex items-center gap-1 mt-1 text-xs text-slate-500">
                            <Clock className="w-3 h-3" />
                            {log.time}
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4 text-indigo-600" />
                          <span className="font-medium text-slate-900">
                            {log.professional}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600">
                        {log.client === "-" ? (
                          <span className="text-slate-400 italic">
                            Sem cliente
                          </span>
                        ) : (
                          log.client
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span
                          className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${
                            log.status
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {log.status ? (
                            <>
                              <CheckCircle2 className="w-3 h-3" />
                              Sucesso
                            </>
                          ) : (
                            "Falha"
                          )}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Button
                          onClick={() =>
                            setExpandedLog(
                              expandedLog === log.id ? null : log.id
                            )
                          }
                          variant="outline"
                          size="sm"
                          className="border-slate-300 text-slate-700 hover:bg-slate-50"
                        >
                          Detalhes
                        </Button>
                      </td>
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
                  Nenhum registro encontrado
                </p>
                <p className="text-slate-500 text-sm mt-2">
                  Tente ajustar os filtros de pesquisa
                </p>
              </div>
            )}
          </div>

          {/* Audit Cards - Mobile */}
          <div className="lg:hidden space-y-4">
            {filteredData.map((log, index) => (
              <div
                key={log.id}
                className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden"
                style={{
                  animation: `slideIn 0.4s ease-out ${index * 50}ms both`,
                }}
              >
                <div className="bg-gradient-to-r from-indigo-50 to-white px-6 py-4 border-b border-slate-200">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-slate-400" />
                      <span className="font-semibold text-slate-900">
                        {new Date(log.date).toLocaleDateString("pt-BR")}
                      </span>
                    </div>
                    <span
                      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${
                        log.status
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {log.status ? (
                        <>
                          <CheckCircle2 className="w-3 h-3" />
                          Sucesso
                        </>
                      ) : (
                        "Falha"
                      )}
                    </span>
                  </div>
                  {log.time && (
                    <div className="flex items-center gap-1 text-xs text-slate-500">
                      <Clock className="w-3 h-3" />
                      {log.time}
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="text-xs text-slate-600 mb-1">
                        Profissional
                      </p>
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-indigo-600" />
                        <span className="font-medium text-slate-900">
                          {log.professional}
                        </span>
                      </div>
                    </div>

                    <div>
                      <p className="text-xs text-slate-600 mb-1">Cliente</p>
                      <span className="text-sm text-slate-900">
                        {log.client === "-" ? (
                          <span className="text-slate-400 italic">
                            Sem cliente
                          </span>
                        ) : (
                          log.client
                        )}
                      </span>
                    </div>
                  </div>

                  <Button
                    onClick={() =>
                      setExpandedLog(expandedLog === log.id ? null : log.id)
                    }
                    variant="outline"
                    size="sm"
                    className="w-full border-slate-300 text-slate-700 hover:bg-slate-50"
                  >
                    {expandedLog === log.id ? "Ocultar" : "Ver"} Detalhes
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Expanded Details Modal */}
          {expandedLog !== null && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
              <div
                className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
                style={{
                  animation: "slideIn 0.3s ease-out",
                }}
              >
                {(() => {
                  const log = filteredData.find((l) => l.id === expandedLog);
                  if (!log) return null;

                  return (
                    <>
                      <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 px-6 py-4 text-white sticky top-0">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xl font-bold flex items-center gap-2">
                            <Eye className="w-5 h-5" />
                            Detalhes da Auditoria
                          </h3>
                          <button
                            onClick={() => setExpandedLog(null)}
                            className="text-white hover:bg-white hover:bg-opacity-20 rounded-lg p-2 transition-colors"
                          >
                            <ChevronUp className="w-5 h-5" />
                          </button>
                        </div>
                      </div>

                      <div className="p-6">
                        {/* Info Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                          <div className="bg-slate-50 rounded-lg p-4">
                            <p className="text-xs text-slate-600 mb-1 flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              Data e Hora
                            </p>
                            <p className="text-sm font-semibold text-slate-900">
                              {new Date(log.date).toLocaleDateString("pt-BR")}{" "}
                              às {log.time}
                            </p>
                          </div>

                          <div className="bg-indigo-50 rounded-lg p-4">
                            <p className="text-xs text-indigo-700 mb-1 flex items-center gap-1">
                              <User className="w-3 h-3" />
                              Profissional
                            </p>
                            <p className="text-sm font-semibold text-indigo-900">
                              {log.professional}
                            </p>
                          </div>

                          <div className="bg-purple-50 rounded-lg p-4">
                            <p className="text-xs text-purple-700 mb-1 flex items-center gap-1">
                              <User className="w-3 h-3" />
                              Cliente
                            </p>
                            <p className="text-sm font-semibold text-purple-900">
                              {log.client === "-" ? "Sem cliente" : log.client}
                            </p>
                          </div>

                          <div className="bg-emerald-50 rounded-lg p-4">
                            <p className="text-xs text-emerald-700 mb-1">
                              Status
                            </p>
                            <span
                              className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${
                                log.status
                                  ? "bg-green-100 text-green-700"
                                  : "bg-red-100 text-red-700"
                              }`}
                            >
                              {log.status ? (
                                <>
                                  <CheckCircle2 className="w-3 h-3" />
                                  Sucesso
                                </>
                              ) : (
                                "Falha"
                              )}
                            </span>
                          </div>
                        </div>

                        {/* Action */}
                        {log.action && (
                          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                            <p className="text-xs font-medium text-blue-900 uppercase mb-2">
                              Ação Realizada
                            </p>
                            <p className="text-sm font-semibold text-blue-900">
                              {log.action}
                            </p>
                          </div>
                        )}

                        {/* Details */}
                        {log.details && (
                          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-6">
                            <p className="text-xs font-medium text-slate-700 uppercase mb-2">
                              Detalhes
                            </p>
                            <p className="text-sm text-slate-900">
                              {log.details}
                            </p>
                          </div>
                        )}

                        {/* Changes */}
                        {log.changes && log.changes.length > 0 && (
                          <div>
                            <h4 className="text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2">
                              <FileText className="w-4 h-4" />
                              Alterações Realizadas
                            </h4>
                            <div className="space-y-3">
                              {log.changes.map((change, idx) => (
                                <div
                                  key={idx}
                                  className="bg-white border border-slate-200 rounded-lg p-4"
                                >
                                  <p className="text-xs font-medium text-slate-600 mb-2">
                                    {change.field}
                                  </p>
                                  <div className="flex items-center gap-3">
                                    <div className="flex-1">
                                      <p className="text-xs text-slate-500 mb-1">
                                        Valor Anterior
                                      </p>
                                      <p className="text-sm text-red-600 font-medium line-through">
                                        {change.oldValue}
                                      </p>
                                    </div>
                                    <div className="text-slate-400">→</div>
                                    <div className="flex-1">
                                      <p className="text-xs text-slate-500 mb-1">
                                        Novo Valor
                                      </p>
                                      <p className="text-sm text-green-600 font-medium">
                                        {change.newValue}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </>
                  );
                })()}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

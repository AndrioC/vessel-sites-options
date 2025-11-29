"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Settings,
  ShoppingCart,
  Calendar,
  DollarSign,
  FileText,
  Receipt,
  User,
  Users,
  Menu,
  X,
  Warehouse,
  Briefcase,
  LogOut,
} from "lucide-react";

interface MenuItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  href?: string;
  active?: boolean;
  subItems?: { label: string; href: string }[];
}

const menuItems: MenuItem[] = [
  {
    icon: Settings,
    label: "Administração",
    subItems: [
      { label: "Unidades", href: "#" },
      { label: "Níveis de Acesso", href: "#" },
      { label: "Usuários", href: "#" },
      { label: "Relatórios", href: "#" },
    ],
  },
  {
    icon: Briefcase,
    label: "Serviços",
    subItems: [
      { label: "Grupos", href: "#" },
      { label: "Serviços", href: "#" },
      { label: "Lista de Preço", href: "#" },
      { label: "Pacotes", href: "#" },
    ],
  },
  {
    icon: ShoppingCart,
    label: "Produtos",
    subItems: [
      { label: "Fornecedores", href: "#" },
      { label: "Marcas", href: "#" },
      { label: "Categorias", href: "#" },
      { label: "Produtos", href: "#" },
      { label: "Tipo Fiscal", href: "#" },
    ],
  },
  {
    icon: Warehouse,
    label: "Estoque",
    subItems: [
      { label: "Inventário", href: "#" },
      { label: "Movimentações de Estoque", href: "#" },
      { label: "Consulta de Estoque", href: "#" },
      { label: "Saída por Profissional", href: "#" },
      { label: "Requisição de Produtos", href: "#" },
      { label: "Entrada por Fornecedor", href: "#" },
    ],
  },
  {
    icon: DollarSign,
    label: "Financeiro",
    subItems: [
      { label: "Plano de Contas", href: "#" },
      { label: "Contas Bancárias", href: "#" },
      { label: "Tipos de Pagamentos", href: "#" },
      { label: "Contas a Pagar", href: "#" },
      { label: "Contas a Receber", href: "#" },
      { label: "Extrato", href: "#" },
    ],
  },
  {
    icon: FileText,
    label: "Fiscal",
    subItems: [
      { label: "RPS", href: "/app-page/fiscal/rps" },
      { label: "NF Serviço", href: "/app-page/fiscal/service-invoice" },
      { label: "NF Produto", href: "/app-page/fiscal/product-invoice" },
    ],
  },
  {
    icon: Receipt,
    label: "Caixa",
    subItems: [
      { label: "Caixas", href: "/app-page/cash-register" },
      { label: "Comandas", href: "/app-page/cash-register/tabs" },
      { label: "Caixinhas", href: "/app-page/cash-register/petty-cash" },
      { label: "Outros", href: "/app-page/cash-register/others" },
    ],
  },
  {
    icon: Users,
    label: "Profissionais",
    subItems: [
      { label: "Cargos", href: "/app-page/professionals/positions" },
      { label: "Habilidades", href: "/app-page/professionals/skills" },
      { label: "Profissionais", href: "/app-page/professionals/main" },
      { label: "Comissões", href: "/app-page/professionals/commissions" },
    ],
  },
  {
    icon: Calendar,
    label: "Agenda",
    subItems: [
      { label: "Auditoria", href: "/app-page/schedule/audit" },
      { label: "Rodizio", href: "/app-page/schedule/rotation" },
      {
        label: "Salas e Aparelhos",
        href: "/app-page/schedule/rooms-equipment",
      },
      { label: "Agenda", href: "/app-page/schedule/main" },
    ],
  },
  {
    icon: User,
    label: "Clientes",
    subItems: [
      { label: "Campanha", href: "#" },
      { label: "Clientes", href: "#" },
    ],
  },
  {
    icon: LogOut,
    label: "Sair",
    href: "#",
  },
];

export default function AppPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [sidebarAberta, setSidebarAberta] = useState(true);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState<string[]>([]);
  const [perfilModalAberto, setPerfilModalAberto] = useState(false);

  // Auto-expand menu based on current route
  useEffect(() => {
    const activeMenu = menuItems.find((item) =>
      item.subItems?.some(
        (subItem) => pathname.startsWith(subItem.href) && subItem.href !== "#"
      )
    );
    if (activeMenu && !expandedMenus.includes(activeMenu.label)) {
      setExpandedMenus((prev) => [...prev, activeMenu.label]);
    }
  }, [pathname]);

  const toggleMenu = (label: string) => {
    setExpandedMenus((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  return (
    <div className="h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white transform transition-all duration-300 ease-in-out flex flex-col ${
          sidebarAberta ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } ${
          sidebarCollapsed ? "lg:w-20" : "lg:w-64"
        } w-64 shadow-2xl h-full overflow-hidden`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm flex-shrink-0">
          <div className="flex items-center gap-3">
            {!sidebarCollapsed && (
              <>
                <div className="flex-1 flex justify-center">
                  <Image
                    src="/logo-white.svg"
                    alt="Logo"
                    width={150}
                    height={40}
                    className="w-auto h-8"
                  />
                </div>
                <Button
                  size="icon"
                  className="lg:hidden bg-slate-700/50 hover:bg-slate-600 border border-slate-600 cursor-pointer"
                  onClick={() => setSidebarAberta(false)}
                >
                  <X className="w-5 h-5" />
                </Button>
              </>
            )}
            {sidebarCollapsed && (
              <div className="w-10 h-10 mx-auto">
                <Image
                  src="/logo-white.svg"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
            )}
          </div>
        </div>

        {/* Menu Items */}
        <nav
          className="flex-1 p-4 space-y-1 overflow-y-auto sidebar-nav"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "#4f46e5 transparent",
          }}
        >
          <style jsx global>{`
            .sidebar-nav::-webkit-scrollbar {
              width: 6px;
            }
            .sidebar-nav::-webkit-scrollbar-track {
              background: transparent;
            }
            .sidebar-nav::-webkit-scrollbar-thumb {
              background: #4f46e5;
              border-radius: 3px;
            }
            .sidebar-nav::-webkit-scrollbar-thumb:hover {
              background: #4338ca;
            }
          `}</style>
          {menuItems.map((item, index) => {
            const isMenuActive = item.subItems?.some(
              (subItem) =>
                pathname.startsWith(subItem.href) && subItem.href !== "#"
            );
            return (
              <div key={index}>
                {item.subItems ? (
                  <div>
                    <button
                      onClick={() => toggleMenu(item.label)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group cursor-pointer ${
                        isMenuActive
                          ? "bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-lg shadow-indigo-500/30"
                          : "text-slate-300 hover:bg-slate-700/50 hover:text-white"
                      } ${sidebarCollapsed ? "justify-center" : ""}`}
                    >
                      <item.icon className="w-5 h-5 flex-shrink-0" />
                      {!sidebarCollapsed && (
                        <>
                          <span className="font-medium flex-1 text-left">
                            {item.label}
                          </span>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              expandedMenus.includes(item.label)
                                ? "rotate-180"
                                : ""
                            }`}
                          />
                        </>
                      )}
                    </button>
                    {expandedMenus.includes(item.label) &&
                      !sidebarCollapsed && (
                        <div className="ml-4 mt-1 space-y-1 pl-4 border-l-2 border-slate-700">
                          {item.subItems.map((subItem, subIndex) => {
                            const isActive = pathname === subItem.href;
                            return (
                              <a
                                key={subIndex}
                                href={subItem.href}
                                className={`block px-4 py-2.5 text-sm rounded-lg transition-all duration-200 hover:translate-x-1 cursor-pointer ${
                                  isActive
                                    ? "bg-indigo-500/30 text-indigo-200 font-medium border border-indigo-400/40"
                                    : "text-slate-400 hover:text-white hover:bg-slate-700/50"
                                }`}
                              >
                                {subItem.label}
                              </a>
                            );
                          })}
                        </div>
                      )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-slate-300 hover:bg-slate-700/50 hover:text-white group cursor-pointer ${
                      sidebarCollapsed ? "justify-center" : ""
                    }`}
                  >
                    <item.icon className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    {!sidebarCollapsed && (
                      <span className="font-medium">{item.label}</span>
                    )}
                  </a>
                )}
              </div>
            );
          })}
        </nav>

        {/* User Profile - Bottom */}
        <div className="border-t border-slate-700/50 bg-slate-900/50 flex-shrink-0">
          <button
            onClick={() => setPerfilModalAberto(true)}
            className="w-full p-4 hover:bg-slate-700/50 transition-all duration-200 flex items-center gap-3 cursor-pointer"
          >
            {!sidebarCollapsed ? (
              <>
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-full flex items-center justify-center shadow-lg ring-2 ring-indigo-500/20">
                  <User className="w-5 h-5" />
                </div>
                <div className="flex-1 text-left">
                  <p className="text-sm font-medium text-white">João Silva</p>
                  <p className="text-xs text-slate-400">joao@email.com</p>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </>
            ) : (
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-full flex items-center justify-center mx-auto shadow-lg ring-2 ring-indigo-500/20">
                <User className="w-5 h-5" />
              </div>
            )}
          </button>
        </div>

        {/* Toggle Sidebar Button - Bottom */}
        <div className="p-4 border-t border-slate-700/50 bg-slate-900/50 flex-shrink-0">
          <Button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className={`hidden lg:flex items-center justify-center gap-2 w-full bg-slate-700/50 hover:bg-indigo-600 text-white border border-slate-600 hover:border-indigo-500 transition-all duration-300 rounded-xl cursor-pointer ${
              sidebarCollapsed ? "px-3" : "px-4"
            }`}
          >
            {sidebarCollapsed ? (
              <ChevronRight className="w-5 h-5" />
            ) : (
              <>
                <ChevronLeft className="w-5 h-5" />
                <span className="text-sm font-medium">Recolher</span>
              </>
            )}
          </Button>
        </div>
      </aside>

      {/* Overlay para mobile */}
      {sidebarAberta && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarAberta(false)}
        />
      )}

      {/* Modal de Perfil */}
      {perfilModalAberto && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setPerfilModalAberto(false)}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden transform transition-all animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header com gradiente */}
            <div className="relative bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700 p-8 pb-20">
              <button
                onClick={() => setPerfilModalAberto(false)}
                className="absolute top-4 right-4 text-white/80 hover:text-white hover:bg-white/20 rounded-full p-2 transition-all duration-200 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Avatar centralizado */}
              <div className="flex flex-col items-center mt-4">
                <div className="relative">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl ring-4 ring-white/30">
                    <User className="w-12 h-12 text-indigo-600" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              </div>
            </div>

            {/* Card de informações sobreposto */}
            <div className="relative -mt-12 px-6">
              <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6">
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold text-slate-900 mb-1">
                    João Silva
                  </h4>
                  <p className="text-slate-500 flex items-center justify-center gap-2">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    joao@email.com
                  </p>
                </div>

                {/* Informações adicionais */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-slate-50 rounded-xl p-3 text-center">
                    <p className="text-xs text-slate-500 mb-1">Cargo</p>
                    <p className="text-sm font-semibold text-slate-900">
                      Administrador
                    </p>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-3 text-center">
                    <p className="text-xs text-slate-500 mb-1">Último acesso</p>
                    <p className="text-sm font-semibold text-slate-900">
                      Hoje, 14:30
                    </p>
                  </div>
                </div>

                {/* Botões de ação */}
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full border-2 border-slate-200 hover:border-indigo-600 hover:bg-indigo-50 text-slate-700 hover:text-indigo-700 rounded-xl py-6 font-semibold transition-all duration-200 cursor-pointer"
                  >
                    <Settings className="w-5 h-5 mr-2" />
                    Configurações da Conta
                  </Button>

                  <Button
                    onClick={() => {
                      setPerfilModalAberto(false);
                      // Adicionar lógica de logout aqui
                    }}
                    className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-xl py-6 font-semibold shadow-lg shadow-red-500/30 hover:shadow-red-600/40 transition-all duration-200 cursor-pointer"
                  >
                    <LogOut className="w-5 h-5 mr-2" />
                    Sair da Conta
                  </Button>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 pb-6 pt-4">
              <p className="text-center text-xs text-slate-400">
                Versão 1.0.0 • © 2025 Vessel
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Header com menu mobile */}
        <header className="lg:hidden bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-lg p-4 flex-shrink-0">
          <Button
            size="icon"
            variant="ghost"
            className="text-white hover:bg-white/20"
            onClick={() => setSidebarAberta(true)}
          >
            <Menu className="w-6 h-6" />
          </Button>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}

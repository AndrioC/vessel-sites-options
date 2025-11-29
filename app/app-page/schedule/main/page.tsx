"use client";

import React, { useState } from "react";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  MoreHorizontal,
  Plus,
  Search,
  User,
  Phone,
  PhoneCall,
  X,
  MapPin,
  Mail,
  DollarSign,
  Edit,
  Trash2,
} from "lucide-react";

// Ícone real do Instagram
const InstagramIcon = ({
  size = 20,
  className = "",
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <radialGradient id="instagramGradient" cx="30%" cy="107%" r="150%">
        <stop offset="0%" stopColor="#FDF497" />
        <stop offset="5%" stopColor="#FDF497" />
        <stop offset="45%" stopColor="#FD5949" />
        <stop offset="60%" stopColor="#D6249F" />
        <stop offset="90%" stopColor="#285AEB" />
      </radialGradient>
    </defs>
    <rect
      x="2"
      y="2"
      width="20"
      height="20"
      rx="5"
      fill="url(#instagramGradient)"
    />
    <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2" fill="none" />
    <circle cx="17.5" cy="6.5" r="1.5" fill="white" />
  </svg>
);

// Ícone real do WhatsApp
const WhatsAppIcon = ({
  size = 20,
  className = "",
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"
      fill="#25D366"
    />
    <path
      d="M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.48-8.4zm-8.475 18.297c-1.778 0-3.52-.479-5.042-1.38l-.362-.214-3.75.98 1.003-3.645-.235-.375a9.869 9.869 0 01-1.511-5.26c0-5.445 4.455-9.885 9.93-9.885 2.654 0 5.145 1.035 7.021 2.91 1.875 1.876 2.909 4.362 2.906 7.012-.003 5.444-4.458 9.857-9.96 9.857z"
      fill="#25D366"
    />
  </svg>
);

// --- DADOS DOS PROFISSIONAIS ---

const employees = [
  {
    id: 1,
    name: "ADRIANA",
    role: "Cabeleireira",
    avatar: "https://i.pravatar.cc/150?u=adriana",
  },
  {
    id: 2,
    name: "AUREA",
    role: "Esteticista",
    avatar: "https://i.pravatar.cc/150?u=aurea",
  },
  {
    id: 3,
    name: "AUREA (AU)",
    role: "Esteticista",
    avatar: "https://i.pravatar.cc/150?u=aurea2",
  },
  {
    id: 4,
    name: "CATIA",
    role: "Manicure",
    avatar: "https://i.pravatar.cc/150?u=catia",
  },
  {
    id: 5,
    name: "CLAUDIA",
    role: "Cabeleireira",
    avatar: "https://i.pravatar.cc/150?u=claudia",
  },
  {
    id: 6,
    name: "EDNA",
    role: "Massagista",
    avatar: "https://i.pravatar.cc/150?u=edna",
  },
  {
    id: 7,
    name: "HELO",
    role: "Cabeleireira",
    avatar: "https://i.pravatar.cc/150?u=helo",
  },
];

const timeSlots = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
];

// Agendamentos com datas
const appointments = [
  // 28 de Novembro
  {
    id: 101,
    empId: 4,
    date: "2025-11-28",
    start: "09:00",
    duration: 1.5,
    client: "EUGENIA ROTHSCHILD",
    service: "Manicure",
    type: "nails",
    source: "instagram",
  },
  {
    id: 102,
    empId: 5,
    date: "2025-11-28",
    start: "15:00",
    duration: 2,
    client: "KIKI QUEIROZ ALVES",
    service: "HIDRATAÇÃO CABELO",
    type: "hair",
    source: "whatsapp",
  },
  {
    id: 103,
    empId: 1,
    date: "2025-11-28",
    start: "10:00",
    duration: 1,
    client: "Maria Silva",
    service: "Corte + Escova",
    type: "hair",
    source: "instagram",
  },
  {
    id: 104,
    empId: 7,
    date: "2025-11-28",
    start: "14:00",
    duration: 1,
    client: "Ana Costa",
    service: "Escova",
    type: "hair",
    source: "phone",
  },
  // 29 de Novembro
  {
    id: 201,
    empId: 2,
    date: "2025-11-29",
    start: "09:00",
    duration: 1,
    client: "Julia Mendes",
    service: "Limpeza de Pele",
    type: "makeup",
    source: "whatsapp",
  },
  {
    id: 202,
    empId: 5,
    date: "2025-11-29",
    start: "10:00",
    duration: 1.5,
    client: "Roberto Santos",
    service: "Corte Masculino",
    type: "barber",
    source: "phone",
  },
  {
    id: 203,
    empId: 6,
    date: "2025-11-29",
    start: "14:00",
    duration: 2,
    client: "Patricia Lima",
    service: "Massagem Relaxante",
    type: "massage",
    source: "instagram",
  },
  {
    id: 204,
    empId: 4,
    date: "2025-11-29",
    start: "11:00",
    duration: 1,
    client: "Carla Dias",
    service: "Pé e Mão",
    type: "nails",
    source: "whatsapp",
  },
  // 30 de Novembro
  {
    id: 301,
    empId: 1,
    date: "2025-11-30",
    start: "09:00",
    duration: 2,
    client: "Fernanda Oliveira",
    service: "Coloração + Corte",
    type: "hair",
    source: "instagram",
  },
  {
    id: 302,
    empId: 3,
    date: "2025-11-30",
    start: "13:00",
    duration: 1.5,
    client: "Beatriz Souza",
    service: "Tratamento Facial",
    type: "makeup",
    source: "whatsapp",
  },
  {
    id: 303,
    empId: 7,
    date: "2025-11-30",
    start: "15:00",
    duration: 1,
    client: "Mariana Luz",
    service: "Escova Progressiva",
    type: "hair",
    source: "phone",
  },
  // 01 de Dezembro
  {
    id: 401,
    empId: 5,
    date: "2025-12-01",
    start: "10:00",
    duration: 1.5,
    client: "Amanda Costa",
    service: "Corte + Hidratação",
    type: "hair",
    source: "instagram",
  },
  {
    id: 402,
    empId: 4,
    date: "2025-12-01",
    start: "14:00",
    duration: 1,
    client: "Sônia Regina",
    service: "Manicure",
    type: "nails",
    source: "whatsapp",
  },
  {
    id: 403,
    empId: 2,
    date: "2025-12-01",
    start: "16:00",
    duration: 1,
    client: "Lucas Martins",
    service: "Limpeza de Pele",
    type: "makeup",
    source: "phone",
  },
  // 02 de Dezembro
  {
    id: 501,
    empId: 6,
    date: "2025-12-02",
    start: "09:00",
    duration: 2,
    client: "Renata Alves",
    service: "Massagem Terapêutica",
    type: "massage",
    source: "instagram",
  },
  {
    id: 502,
    empId: 1,
    date: "2025-12-02",
    start: "11:00",
    duration: 1,
    client: "Camila Rocha",
    service: "Corte Feminino",
    type: "hair",
    source: "whatsapp",
  },
  {
    id: 503,
    empId: 7,
    date: "2025-12-02",
    start: "13:00",
    duration: 1.5,
    client: "Isabela Santos",
    service: "Coloração",
    type: "hair",
    source: "instagram",
  },
];

// Cores baseadas no tipo de serviço
const typeColors = {
  hair: "bg-purple-100 border-purple-300 text-purple-700",
  barber: "bg-blue-100 border-blue-300 text-blue-700",
  nails: "bg-pink-100 border-pink-300 text-pink-700",
  makeup: "bg-rose-100 border-rose-300 text-rose-700",
  massage: "bg-green-100 border-green-300 text-green-700",
};

const AgendaPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState<
    (typeof appointments)[number] | null
  >(null);
  const [newAppointment, setNewAppointment] = useState<Partial<
    (typeof appointments)[number]
  > | null>(null);

  // Função auxiliar para renderizar o bloco de agendamento
  const getAppointmentBlock = (empId: number, time: string) => {
    const dateString = currentDate.toISOString().split("T")[0];
    const apt = appointments.find(
      (a) => a.empId === empId && a.start === time && a.date === dateString
    );

    if (!apt) return null;

    // Cálculo da largura baseado na duração
    const widthClass =
      apt.duration === 1
        ? "w-[140px]"
        : apt.duration === 1.5
        ? "w-[215px]"
        : apt.duration === 2
        ? "w-[290px]"
        : "w-[140px]";

    // Ícone de origem
    const getSourceIcon = () => {
      switch (apt.source) {
        case "instagram":
          return <InstagramIcon size={14} />;
        case "whatsapp":
          return <WhatsAppIcon size={14} />;
        case "phone":
          return <PhoneCall size={14} className="text-blue-600" />;
        default:
          return null;
      }
    };

    return (
      <div
        onClick={() => setSelectedAppointment(apt)}
        className={`absolute top-2 left-2 bottom-2 z-10 rounded-lg border-l-4 p-2 shadow-sm transition-all hover:shadow-lg hover:scale-105 cursor-pointer ${
          typeColors[apt.type as keyof typeof typeColors]
        } ${widthClass}`}
      >
        <div className="flex justify-between items-start">
          <span className="font-bold text-xs truncate">{apt.client}</span>
          <MoreHorizontal size={14} className="opacity-50 hover:opacity-100" />
        </div>
        <div className="text-xs font-medium mt-1 truncate">{apt.service}</div>
        <div className="flex items-center justify-between mt-1">
          <div className="flex items-center gap-1 text-[10px] opacity-80">
            <Clock size={10} />
            <span>{apt.duration}h</span>
          </div>
          <div className="flex items-center gap-1">{getSourceIcon()}</div>
        </div>
      </div>
    );
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const previousDay = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() - 1);
    setCurrentDate(newDate);
  };

  const nextDay = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + 1);
    setCurrentDate(newDate);
  };

  // Funções do calendário
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];

    // Adiciona dias vazios do mês anterior
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }

    // Adiciona os dias do mês
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }

    return days;
  };

  const hasAppointmentsOnDate = (date: Date) => {
    const dateString = date.toISOString().split("T")[0];
    return appointments.some((apt) => apt.date === dateString);
  };

  const isSameDay = (date1: Date, date2: Date) => {
    return (
      date1.toISOString().split("T")[0] === date2.toISOString().split("T")[0]
    );
  };

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50 font-sans text-gray-800">
      {/* --- HEADER --- */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between shadow-sm sticky top-0 z-30">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold tracking-tight text-gray-900">
            Agenda
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 border border-gray-200">
            <ChevronLeft
              onClick={previousDay}
              className="cursor-pointer text-gray-500 hover:text-purple-600"
              size={20}
            />
            <div
              className="flex items-center gap-2 mx-4 text-sm font-semibold text-gray-700 cursor-pointer hover:text-purple-600"
              onClick={() => setShowCalendar(!showCalendar)}
            >
              <Calendar size={16} />
              <span>{formatDate(currentDate)}</span>
            </div>
            <ChevronRight
              onClick={nextDay}
              className="cursor-pointer text-gray-500 hover:text-purple-600"
              size={20}
            />
          </div>

          <button
            onClick={goToToday}
            className="bg-purple-100 hover:bg-purple-200 text-purple-700 px-4 py-2 rounded-full text-sm font-medium transition-colors"
          >
            Hoje
          </button>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={16}
            />
            <input
              type="text"
              placeholder="Buscar cliente..."
              className="pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 w-48 transition-all"
            />
          </div>
          <button className="bg-gray-900 hover:bg-black text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition-colors shadow-lg shadow-purple-200">
            <Plus size={16} />
            Novo Agendamento
          </button>
        </div>
      </header>

      {/* --- CALENDÁRIO VISUAL --- */}
      {showCalendar && (
        <div className="bg-white border-b border-gray-200 shadow-lg">
          <div className="max-w-md mx-auto p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900">
                {currentDate.toLocaleDateString("pt-BR", {
                  month: "long",
                  year: "numeric",
                })}
              </h2>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    const newDate = new Date(currentDate);
                    newDate.setMonth(newDate.getMonth() - 1);
                    setCurrentDate(newDate);
                  }}
                  className="p-1 hover:bg-gray-100 rounded"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={() => {
                    const newDate = new Date(currentDate);
                    newDate.setMonth(newDate.getMonth() + 1);
                    setCurrentDate(newDate);
                  }}
                  className="p-1 hover:bg-gray-100 rounded"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            {/* Grid do calendário */}
            <div className="grid grid-cols-7 gap-1">
              {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"].map((day) => (
                <div
                  key={day}
                  className="text-center text-xs font-semibold text-gray-500 py-2"
                >
                  {day}
                </div>
              ))}

              {getDaysInMonth(currentDate).map((day, index) => {
                if (!day) {
                  return (
                    <div key={`empty-${index}`} className="aspect-square" />
                  );
                }

                const isToday = isSameDay(day, new Date());
                const isSelected = isSameDay(day, currentDate);
                const hasAppointments = hasAppointmentsOnDate(day);

                return (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentDate(day);
                      setShowCalendar(false);
                    }}
                    className={`aspect-square rounded-lg text-sm font-medium transition-all relative ${
                      isSelected
                        ? "bg-purple-600 text-white shadow-lg"
                        : isToday
                        ? "bg-purple-100 text-purple-700 border-2 border-purple-400"
                        : "hover:bg-gray-100 text-gray-700"
                    }`}
                  >
                    {day.getDate()}
                    {hasAppointments && !isSelected && (
                      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-purple-600 rounded-full" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* --- SCHEDULE GRID AREA --- */}
      <main className="flex-1 overflow-auto relative">
        <div className="min-w-max">
          {/* Cabeçalho dos Horários (Sticky Top) */}
          <div className="flex border-b border-gray-200 bg-white sticky top-0 z-20 shadow-sm">
            {/* Célula vazia do canto superior esquerdo (acima dos nomes) */}
            <div className="w-64 flex-shrink-0 bg-white border-r border-gray-200 sticky left-0 z-30 p-4 flex items-center text-sm font-medium text-gray-500">
              <User size={16} className="mr-2" /> Profissionais
            </div>

            {/* Renderiza as horas */}
            {timeSlots.map((time) => (
              <div
                key={time}
                className="w-[150px] flex-shrink-0 p-3 text-center border-r border-gray-100 text-sm font-medium text-gray-400"
              >
                {time}
              </div>
            ))}
          </div>

          {/* Corpo do Calendário - Linhas de Funcionários */}
          <div className="divide-y divide-gray-100">
            {employees.map((emp) => (
              <div
                key={emp.id}
                className="flex group bg-white hover:bg-gray-50 transition-colors"
              >
                {/* Coluna do Funcionário (Sticky Left) */}
                <div className="w-64 flex-shrink-0 border-r border-gray-200 bg-white group-hover:bg-gray-50 sticky left-0 z-20 p-4 flex items-center gap-3">
                  <img
                    src={emp.avatar}
                    alt={emp.name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                  />
                  <div>
                    <h3 className="font-semibold text-sm text-gray-800">
                      {emp.name}
                    </h3>
                    <p className="text-xs text-gray-500">{emp.role}</p>
                  </div>
                </div>

                {/* Colunas de Horários (Slots) */}
                {timeSlots.map((time) => (
                  <div
                    key={`${emp.id}-${time}`}
                    className="w-[150px] flex-shrink-0 border-r border-gray-100 h-24 relative"
                  >
                    {/* Linhas de guia pontilhadas para meia hora (visual only) */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px border-r border-dotted border-gray-100 h-full pointer-events-none"></div>

                    {/* Renderiza agendamento se existir neste slot */}
                    {getAppointmentBlock(emp.id, time)}

                    {/* Botão invisível para adicionar agendamento ao passar o mouse */}
                    {!appointments.find(
                      (a) => a.empId === emp.id && a.start === time
                    ) && (
                      <div
                        onClick={() =>
                          setNewAppointment({
                            empId: emp.id,
                            start: time,
                            date: currentDate.toISOString().split("T")[0],
                          })
                        }
                        className="opacity-0 group-hover:opacity-100 transition-opacity absolute inset-0 flex items-center justify-center cursor-pointer hover:bg-purple-50/50"
                      >
                        <Plus className="text-purple-300" size={20} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* --- MODAL DE NOVO AGENDAMENTO --- */}
      {newAppointment && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header do Modal */}
            <div className="relative p-6 border-b border-gray-200 bg-gradient-to-r from-purple-500 to-purple-600 text-white">
              <button
                onClick={() => setNewAppointment(null)}
                className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                <X size={20} />
              </button>

              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <Plus size={32} />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-1">Novo Agendamento</h2>
                  <p className="text-sm opacity-90 flex items-center gap-2">
                    <Clock size={14} />
                    {newAppointment.start} -{" "}
                    {newAppointment.date &&
                      new Date(newAppointment.date).toLocaleDateString(
                        "pt-BR",
                        {
                          day: "2-digit",
                          month: "long",
                          year: "numeric",
                        }
                      )}
                  </p>
                </div>
              </div>
            </div>

            {/* Corpo do Modal - Formulário */}
            <form className="p-6 space-y-6">
              {/* Profissional (pré-preenchido) */}
              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-2">
                  Profissional
                </label>
                <div className="bg-gray-50 rounded-xl p-4 flex items-center gap-3">
                  <img
                    src={
                      employees.find((e) => e.id === newAppointment.empId)
                        ?.avatar
                    }
                    alt="Profissional"
                    className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                  />
                  <div>
                    <p className="text-base font-semibold text-gray-900">
                      {
                        employees.find((e) => e.id === newAppointment.empId)
                          ?.name
                      }
                    </p>
                    <p className="text-xs text-gray-500">
                      {
                        employees.find((e) => e.id === newAppointment.empId)
                          ?.role
                      }
                    </p>
                  </div>
                </div>
              </div>

              {/* Grid de Inputs */}
              <div className="grid grid-cols-2 gap-4">
                {/* Nome do Cliente */}
                <div className="col-span-2">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-2">
                    Nome do Cliente *
                  </label>
                  <input
                    type="text"
                    placeholder="Digite o nome do cliente"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>

                {/* Serviço */}
                <div className="col-span-2">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-2">
                    Serviço *
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Corte + Barba, Manicure, Massagem"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>

                {/* Tipo de Serviço */}
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-2">
                    Tipo de Serviço *
                  </label>
                  <select
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  >
                    <option value="">Selecione...</option>
                    <option value="hair">Cabelo</option>
                    <option value="barber">Barbearia</option>
                    <option value="nails">Unhas</option>
                    <option value="makeup">Maquiagem</option>
                    <option value="massage">Massagem</option>
                  </select>
                </div>

                {/* Duração */}
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-2">
                    Duração *
                  </label>
                  <select
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  >
                    <option value="">Selecione...</option>
                    <option value="1">1 hora</option>
                    <option value="1.5">1h 30min</option>
                    <option value="2">2 horas</option>
                    <option value="2.5">2h 30min</option>
                    <option value="3">3 horas</option>
                  </select>
                </div>

                {/* Origem */}
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-2">
                    Origem do Agendamento *
                  </label>
                  <select
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  >
                    <option value="">Selecione...</option>
                    <option value="instagram">Instagram</option>
                    <option value="whatsapp">WhatsApp</option>
                    <option value="phone">Telefone</option>
                  </select>
                </div>

                {/* Valor */}
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-2">
                    Valor (R$)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    placeholder="0,00"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Informações de Contato */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">
                  Informações de Contato
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      placeholder="(11) 9 0000-0000"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="cliente@email.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Observações */}
              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-2">
                  Observações
                </label>
                <textarea
                  rows={3}
                  placeholder="Informações adicionais sobre o cliente ou atendimento..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                ></textarea>
              </div>
            </form>

            {/* Footer do Modal */}
            <div className="border-t border-gray-200 p-6 bg-gray-50 rounded-b-2xl flex gap-3">
              <button
                onClick={() => setNewAppointment(null)}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold transition-colors"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                <Plus size={18} />
                Criar Agendamento
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- MODAL DE DETALHES DO AGENDAMENTO --- */}
      {selectedAppointment && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header do Modal */}
            <div
              className={`relative p-6 border-b border-gray-200 ${
                typeColors[selectedAppointment.type as keyof typeof typeColors]
              }`}
            >
              <button
                onClick={() => setSelectedAppointment(null)}
                className="absolute top-4 right-4 p-2 hover:bg-white/50 rounded-full transition-colors"
              >
                <X size={20} />
              </button>

              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-white/50 rounded-full flex items-center justify-center">
                  <User size={32} className="opacity-70" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-1">
                    {selectedAppointment.client}
                  </h2>
                  <p className="text-sm opacity-80 flex items-center gap-2">
                    <Clock size={14} />
                    {selectedAppointment.start} - {selectedAppointment.duration}
                    h de duração
                  </p>
                </div>
              </div>
            </div>

            {/* Corpo do Modal */}
            <div className="p-6 space-y-6">
              {/* Serviço */}
              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Serviço
                </label>
                <p className="text-lg font-semibold text-gray-900 mt-1">
                  {selectedAppointment.service}
                </p>
              </div>

              {/* Grid de Informações */}
              <div className="grid grid-cols-2 gap-4">
                {/* Profissional */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide flex items-center gap-1">
                    <User size={12} />
                    Profissional
                  </label>
                  <div className="flex items-center gap-3 mt-2">
                    <img
                      src={
                        employees.find(
                          (e) => e.id === selectedAppointment.empId
                        )?.avatar
                      }
                      alt="Profissional"
                      className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                    />
                    <div>
                      <p className="text-base font-semibold text-gray-900">
                        {
                          employees.find(
                            (e) => e.id === selectedAppointment.empId
                          )?.name
                        }
                      </p>
                      <p className="text-xs text-gray-500">
                        {
                          employees.find(
                            (e) => e.id === selectedAppointment.empId
                          )?.role
                        }
                      </p>
                    </div>
                  </div>
                </div>

                {/* Data */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide flex items-center gap-1">
                    <Calendar size={12} />
                    Data
                  </label>
                  <p className="text-base font-semibold text-gray-900 mt-2">
                    {new Date(selectedAppointment.date).toLocaleDateString(
                      "pt-BR",
                      {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      }
                    )}
                  </p>
                </div>

                {/* Origem */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    Origem do Agendamento
                  </label>
                  <div className="flex items-center gap-2 mt-2">
                    {selectedAppointment.source === "instagram" && (
                      <>
                        <InstagramIcon size={20} />
                        <span className="font-semibold text-gray-900">
                          Instagram
                        </span>
                      </>
                    )}
                    {selectedAppointment.source === "whatsapp" && (
                      <>
                        <WhatsAppIcon size={20} />
                        <span className="font-semibold text-gray-900">
                          WhatsApp
                        </span>
                      </>
                    )}
                    {selectedAppointment.source === "phone" && (
                      <>
                        <PhoneCall size={20} className="text-blue-600" />
                        <span className="font-semibold text-gray-900">
                          Telefone
                        </span>
                      </>
                    )}
                  </div>
                </div>

                {/* Valor */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide flex items-center gap-1">
                    <DollarSign size={12} />
                    Valor
                  </label>
                  <p className="text-base font-semibold text-gray-900 mt-2">
                    R$ {(Math.random() * 150 + 50).toFixed(2).replace(".", ",")}
                  </p>
                </div>
              </div>

              {/* Informações de Contato */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">
                  Informações de Contato
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Phone size={16} className="text-gray-400" />
                    <span className="text-gray-700">
                      (11) 9 {Math.floor(Math.random() * 9000 + 1000)}-
                      {Math.floor(Math.random() * 9000 + 1000)}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Mail size={16} className="text-gray-400" />
                    <span className="text-gray-700">
                      {selectedAppointment.client
                        .toLowerCase()
                        .split(" ")
                        .join(".")}
                      @email.com
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin size={16} className="text-gray-400" />
                    <span className="text-gray-700">São Paulo, SP</span>
                  </div>
                </div>
              </div>

              {/* Observações */}
              <div className="bg-purple-50 rounded-xl p-4">
                <label className="text-xs font-semibold text-purple-900 uppercase tracking-wide">
                  Observações
                </label>
                <p className="text-sm text-gray-700 mt-2">
                  Cliente preferencial. Gosta de café durante o atendimento.
                </p>
              </div>
            </div>

            {/* Footer do Modal */}
            <div className="border-t border-gray-200 p-6 bg-gray-50 rounded-b-2xl flex gap-3">
              <button className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2 shadow-lg">
                <Edit size={18} />
                Editar
              </button>
              <button className="flex-1 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2 shadow-lg">
                <Trash2 size={18} />
                Cancelar
              </button>
              <button
                onClick={() => setSelectedAppointment(null)}
                className="flex-1 bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-xl font-semibold transition-colors shadow-lg"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Estilos de animação */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default AgendaPage;

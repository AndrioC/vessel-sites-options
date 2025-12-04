"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
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
  Filter,
  ChevronDown,
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
    group: "Cabeleireiras",
    order: 1,
    avatar: "https://i.pravatar.cc/150?u=adriana",
  },
  {
    id: 5,
    name: "CLAUDIA",
    role: "Cabeleireira",
    group: "Cabeleireiras",
    order: 2,
    avatar: "https://i.pravatar.cc/150?u=claudia",
  },
  {
    id: 7,
    name: "HELO",
    role: "Cabeleireira",
    group: "Cabeleireiras",
    order: 3,
    avatar: "https://i.pravatar.cc/150?u=helo",
  },
  {
    id: 2,
    name: "AUREA",
    role: "Esteticista",
    group: "Esteticistas",
    order: 1,
    avatar: "https://i.pravatar.cc/150?u=aurea",
  },
  {
    id: 3,
    name: "AUREA (AU)",
    role: "Esteticista",
    group: "Esteticistas",
    order: 2,
    avatar: "https://i.pravatar.cc/150?u=aurea2",
  },
  {
    id: 4,
    name: "CATIA",
    role: "Manicure",
    group: "Manicures",
    order: 1,
    avatar: "https://i.pravatar.cc/150?u=catia",
  },
  {
    id: 6,
    name: "EDNA",
    role: "Massagista",
    group: "Massagistas",
    order: 1,
    avatar: "https://i.pravatar.cc/150?u=edna",
  },
];

// Função para ordenar profissionais por grupo e depois por ordem
const sortEmployees = (emps: typeof employees) => {
  return [...emps].sort((a, b) => {
    if (a.group !== b.group) {
      return a.group.localeCompare(b.group);
    }
    return a.order - b.order;
  });
};

// Horários com intervalos de 30 minutos (9h às 19h = 21 slots)
const timeSlots = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
];

// Agendamentos com datas
const initialAppointments = [
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
    isRecurrent: false,
    recurrenceId: null,
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
    isRecurrent: true,
    recurrenceId: "REC001",
    recurrenceType: "weekly",
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
    isRecurrent: false,
    recurrenceId: null,
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
    isRecurrent: false,
    recurrenceId: null,
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
    isRecurrent: false,
    recurrenceId: null,
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
    isRecurrent: false,
    recurrenceId: null,
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
    isRecurrent: false,
    recurrenceId: null,
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
    isRecurrent: false,
    recurrenceId: null,
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
    isRecurrent: false,
    recurrenceId: null,
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
    isRecurrent: false,
    recurrenceId: null,
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
    isRecurrent: false,
    recurrenceId: null,
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
    isRecurrent: false,
    recurrenceId: null,
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
    isRecurrent: false,
    recurrenceId: null,
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
    isRecurrent: false,
    recurrenceId: null,
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
    isRecurrent: false,
    recurrenceId: null,
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
    isRecurrent: false,
    recurrenceId: null,
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
    isRecurrent: false,
    recurrenceId: null,
  },
  // Agendamento Recorrente - Cliente Fixa (Sexta-feira 10:00 - Manicure)
  {
    id: 504,
    empId: 4,
    date: "2025-12-05",
    start: "10:00",
    duration: 1,
    client: "MARIA SILVA",
    service: "Manicure",
    type: "nails",
    source: "whatsapp",
    isRecurrent: true,
    recurrenceId: "REC002",
    recurrenceType: "weekly",
  },
  {
    id: 505,
    empId: 4,
    date: "2025-12-12",
    start: "10:00",
    duration: 1,
    client: "MARIA SILVA",
    service: "Manicure",
    type: "nails",
    source: "whatsapp",
    isRecurrent: true,
    recurrenceId: "REC002",
    recurrenceType: "weekly",
  },
  {
    id: 506,
    empId: 4,
    date: "2025-12-19",
    start: "10:00",
    duration: 1,
    client: "MARIA SILVA",
    service: "Manicure",
    type: "nails",
    source: "whatsapp",
    isRecurrent: true,
    recurrenceId: "REC002",
    recurrenceType: "weekly",
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
  const [appointments, setAppointments] = useState(initialAppointments);
  const [selectedAppointment, setSelectedAppointment] = useState<
    (typeof initialAppointments)[number] | null
  >(null);

  // Estados para filtros
  const [selectedGroups, setSelectedGroups] = useState<string[]>([]);
  const [selectedProfessionals, setSelectedProfessionals] = useState<number[]>(
    []
  );
  const [showFilters, setShowFilters] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  // Estados para seleção múltipla e drag & drop
  const [selectedSlots, setSelectedSlots] = useState<
    Array<{ empId: number; time: string }>
  >([]);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState<{
    empId: number;
    time: string;
  } | null>(null);
  const [showBulkCreate, setShowBulkCreate] = useState(false);
  const [preDragSlots, setPreDragSlots] = useState<
    Array<{ empId: number; time: string }>
  >([]); // Guarda slots selecionados antes de começar novo arrasto

  // Estados para busca e cadastro de cliente
  const [clientSearch, setClientSearch] = useState("");
  const [showClientDropdown, setShowClientDropdown] = useState(false);
  const [showNewClientModal, setShowNewClientModal] = useState(false);
  const [selectedClient, setSelectedClient] = useState<{
    id: number;
    name: string;
    phone: string;
    cpf: string;
  } | null>(null);

  // Estados para agendamento recorrente
  const [isRecurrent, setIsRecurrent] = useState(false);
  const [recurrenceType, setRecurrenceType] = useState<
    "weekly" | "biweekly" | "monthly"
  >("weekly");
  const [recurrenceEndDate, setRecurrenceEndDate] = useState("");
  const [showRecurrenceOptions, setShowRecurrenceOptions] = useState(false);
  const [showLegend, setShowLegend] = useState(false);

  // Dados de exemplo de clientes
  const [clients] = useState([
    {
      id: 1,
      name: "MARIA SILVA",
      phone: "(11) 98765-4321",
      cpf: "123.456.789-00",
    },
    {
      id: 2,
      name: "JOÃO SANTOS",
      phone: "(11) 97654-3210",
      cpf: "234.567.890-11",
    },
    {
      id: 3,
      name: "ANA COSTA",
      phone: "(11) 96543-2109",
      cpf: "345.678.901-22",
    },
    {
      id: 4,
      name: "PEDRO OLIVEIRA",
      phone: "(11) 95432-1098",
      cpf: "456.789.012-33",
    },
    {
      id: 5,
      name: "JULIANA MENDES",
      phone: "(11) 94321-0987",
      cpf: "567.890.123-44",
    },
  ]);

  // Filtrar clientes baseado na busca
  const filteredClients = useMemo(() => {
    if (!clientSearch) return clients;

    const searchLower = clientSearch.toLowerCase().replace(/\D/g, "");

    return clients.filter((client) => {
      const nameMatch = client.name
        .toLowerCase()
        .includes(clientSearch.toLowerCase());
      const phoneMatch = client.phone.replace(/\D/g, "").includes(searchLower);
      const cpfMatch = client.cpf.replace(/\D/g, "").includes(searchLower);

      return nameMatch || phoneMatch || cpfMatch;
    });
  }, [clientSearch, clients]);

  // Fechar dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        filterRef.current &&
        !filterRef.current.contains(event.target as Node)
      ) {
        setShowFilters(false);
      }
    };

    if (showFilters) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showFilters]);

  // Garantir que o drag termine ao soltar o mouse em qualquer lugar
  useEffect(() => {
    const handleGlobalMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
        setDragStart(null);
        // Não abre o modal automaticamente, apenas mostra o botão flutuante
      }
    };

    if (isDragging) {
      document.addEventListener("mouseup", handleGlobalMouseUp);
    }

    return () => {
      document.removeEventListener("mouseup", handleGlobalMouseUp);
    };
  }, [isDragging]);

  // Obter grupos únicos
  const groups = useMemo(() => {
    return Array.from(new Set(employees.map((emp) => emp.group))).sort();
  }, []);

  // Filtrar e ordenar profissionais
  const filteredEmployees = useMemo(() => {
    let filtered = sortEmployees(employees);

    // Filtrar por grupo selecionado
    if (selectedGroups.length > 0) {
      filtered = filtered.filter((emp) => selectedGroups.includes(emp.group));
    }

    // Filtrar por profissional selecionado
    if (selectedProfessionals.length > 0) {
      filtered = filtered.filter((emp) =>
        selectedProfessionals.includes(emp.id)
      );
    }

    return filtered;
  }, [selectedGroups, selectedProfessionals]);

  // Alternar seleção de grupo
  const toggleGroup = (group: string) => {
    setSelectedGroups((prev) =>
      prev.includes(group) ? prev.filter((g) => g !== group) : [...prev, group]
    );
  };

  // Alternar seleção de profissional
  const toggleProfessional = (id: number) => {
    setSelectedProfessionals((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  // Limpar todos os filtros
  const clearFilters = () => {
    setSelectedGroups([]);
    setSelectedProfessionals([]);
  };

  // Funções para seleção múltipla e drag & drop
  const isSlotSelected = (empId: number, time: string) => {
    return selectedSlots.some((s) => s.empId === empId && s.time === time);
  };

  const toggleSlotSelection = (empId: number, time: string) => {
    const isSelected = isSlotSelected(empId, time);
    if (isSelected) {
      setSelectedSlots((prev) =>
        prev.filter((s) => !(s.empId === empId && s.time === time))
      );
    } else {
      setSelectedSlots((prev) => [...prev, { empId, time }]);
    }
  };

  const handleMouseDown = (empId: number, time: string) => {
    setIsDragging(true);
    setDragStart({ empId, time });
    // Salva os slots já selecionados antes de começar novo arrasto
    setPreDragSlots(selectedSlots);
    // Adiciona ou remove o slot inicial
    toggleSlotSelection(empId, time);
  };

  const handleMouseEnter = (empId: number, time: string) => {
    if (isDragging && dragStart) {
      // Calcula slots da área de arrasto atual
      const timeIndex1 = timeSlots.indexOf(dragStart.time);
      const timeIndex2 = timeSlots.indexOf(time);
      const [startTimeIndex, endTimeIndex] = [timeIndex1, timeIndex2].sort(
        (a, b) => a - b
      );

      const draggedSlots: Array<{ empId: number; time: string }> = [];

      // Se estiver arrastando no mesmo profissional (mesma linha horizontal)
      if (dragStart.empId === empId) {
        // Incluir apenas até endTimeIndex - 1 se for um drag (não clique único)
        const maxIndex =
          startTimeIndex === endTimeIndex ? endTimeIndex : endTimeIndex;
        for (let t = startTimeIndex; t <= maxIndex; t++) {
          draggedSlots.push({ empId: dragStart.empId, time: timeSlots[t] });
        }
      }
      // Se estiver arrastando no mesmo horário (mesma coluna vertical)
      else if (dragStart.time === time) {
        const empIds = [dragStart.empId, empId].sort((a, b) => a - b);
        const allEmpIds = filteredEmployees.map((e) => e.id);
        const startEmpIndex = allEmpIds.indexOf(empIds[0]);
        const endEmpIndex = allEmpIds.indexOf(empIds[1]);

        for (let e = startEmpIndex; e <= endEmpIndex; e++) {
          draggedSlots.push({ empId: allEmpIds[e], time: dragStart.time });
        }
      }
      // Se estiver arrastando em diagonal, seleciona área retangular
      else {
        const empIds = [dragStart.empId, empId].sort((a, b) => a - b);
        const allEmpIds = filteredEmployees.map((e) => e.id);
        const startEmpIndex = allEmpIds.indexOf(empIds[0]);
        const endEmpIndex = allEmpIds.indexOf(empIds[1]);

        const maxTimeIndex =
          startTimeIndex === endTimeIndex ? endTimeIndex : endTimeIndex;
        for (let e = startEmpIndex; e <= endEmpIndex; e++) {
          for (let t = startTimeIndex; t <= maxTimeIndex; t++) {
            draggedSlots.push({ empId: allEmpIds[e], time: timeSlots[t] });
          }
        }
      }

      // Combina os slots anteriores (preDragSlots) com os novos arrastados
      const allSlots = [...preDragSlots, ...draggedSlots];
      const uniqueSlots = allSlots.filter(
        (slot, index, self) =>
          index ===
          self.findIndex((s) => s.empId === slot.empId && s.time === slot.time)
      );

      setSelectedSlots(uniqueSlots);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setDragStart(null);
    // Não abre o modal automaticamente, apenas mostra o botão flutuante
  };

  const clearSelection = () => {
    setSelectedSlots([]);
    setShowBulkCreate(false);
  };

  // Função para calcular a duração em horas a partir de slots consecutivos
  const calculateDuration = (startTime: string, endTime: string): number => {
    const startIndex = timeSlots.indexOf(startTime);
    const endIndex = timeSlots.indexOf(endTime);
    const slotCount = endIndex - startIndex + 1;
    return slotCount * 0.5; // Cada slot tem 30 minutos (0.5h)
  };

  // Função para gerar ID único para agendamento
  const generateAppointmentId = (): number => {
    const maxId = Math.max(...appointments.map((apt) => apt.id), 0);
    return maxId + 1;
  };

  // Função para gerar ID de recorrência único
  const generateRecurrenceId = (): string => {
    const existingRecIds = appointments
      .filter((apt) => apt.recurrenceId)
      .map((apt) => apt.recurrenceId as string);

    let counter = existingRecIds.length + 1;
    let newId = `REC${String(counter).padStart(3, "0")}`;

    while (existingRecIds.includes(newId)) {
      counter++;
      newId = `REC${String(counter).padStart(3, "0")}`;
    }

    return newId;
  };

  // Função para adicionar dias a uma data
  const addDays = (date: Date, days: number): Date => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  };

  // Função para criar agendamentos recorrentes
  const createRecurrentAppointments = (
    baseAppointment: (typeof initialAppointments)[number],
    recurrenceType: "weekly" | "biweekly" | "monthly",
    endDate: string | null
  ) => {
    const recurrences: (typeof initialAppointments)[number][] = [];
    const recurrenceId = generateRecurrenceId();
    const startDate = new Date(baseAppointment.date);

    // Determinar intervalo em dias
    const intervalDays =
      recurrenceType === "weekly" ? 7 : recurrenceType === "biweekly" ? 14 : 30;

    // Criar até 52 ocorrências (1 ano) ou até a data fim
    const maxOccurrences = 52;
    let currentDate = new Date(startDate);

    for (let i = 0; i < maxOccurrences; i++) {
      currentDate = addDays(currentDate, intervalDays);

      // Se houver data fim, parar quando ultrapassar
      if (endDate && currentDate > new Date(endDate)) {
        break;
      }

      recurrences.push({
        ...baseAppointment,
        id: generateAppointmentId() + i + 1,
        date: currentDate.toISOString().split("T")[0],
        recurrenceId: recurrenceId,
        isRecurrent: true,
        recurrenceType: recurrenceType,
      });
    }

    return { recurrenceId, recurrences };
  };

  // Função para criar novo agendamento
  const handleCreateAppointment = () => {
    if (!selectedClient) {
      alert("Por favor, selecione um cliente");
      return;
    }

    if (selectedSlots.length === 0) {
      alert("Por favor, selecione ao menos um horário");
      return;
    }

    const newAppointments: (typeof initialAppointments)[number][] = [];

    // Agrupar slots consecutivos por profissional
    const groupedSlots: Array<{
      empId: number;
      startTime: string;
      endTime: string;
    }> = [];

    const sortedSlots = [...selectedSlots].sort((a, b) => {
      if (a.empId !== b.empId) return a.empId - b.empId;
      return timeSlots.indexOf(a.time) - timeSlots.indexOf(b.time);
    });

    if (sortedSlots.length > 0) {
      let currentGroup = {
        empId: sortedSlots[0].empId,
        startTime: sortedSlots[0].time,
        endTime: sortedSlots[0].time,
      };

      for (let i = 1; i < sortedSlots.length; i++) {
        const slot = sortedSlots[i];
        const slotIndex = timeSlots.indexOf(slot.time);
        const currentEndIndex = timeSlots.indexOf(currentGroup.endTime);

        if (
          slot.empId !== currentGroup.empId ||
          slotIndex !== currentEndIndex + 1
        ) {
          groupedSlots.push({ ...currentGroup });
          currentGroup = {
            empId: slot.empId,
            startTime: slot.time,
            endTime: slot.time,
          };
        } else {
          currentGroup.endTime = slot.time;
        }
      }
      groupedSlots.push(currentGroup);
    }

    // Criar agendamento para cada grupo
    groupedSlots.forEach((group) => {
      const duration = calculateDuration(group.startTime, group.endTime);
      const dateString = currentDate.toISOString().split("T")[0];

      const baseAppointment = {
        id: generateAppointmentId() + newAppointments.length,
        empId: group.empId,
        date: dateString,
        start: group.startTime,
        duration: duration,
        client: selectedClient.name,
        service: "Serviço", // Pode ser obtido do formulário
        type: "hair" as const, // Pode ser obtido do formulário
        source: "whatsapp" as const, // Pode ser obtido do formulário
        isRecurrent: isRecurrent,
        recurrenceId: null as string | null,
        recurrenceType: undefined as
          | "weekly"
          | "biweekly"
          | "monthly"
          | undefined,
      } as (typeof initialAppointments)[number];

      newAppointments.push(baseAppointment);

      if (isRecurrent) {
        const { recurrenceId, recurrences } = createRecurrentAppointments(
          baseAppointment,
          recurrenceType,
          recurrenceEndDate || null
        );

        baseAppointment.recurrenceId = recurrenceId;
        baseAppointment.recurrenceType = recurrenceType;

        newAppointments.push(...recurrences);
      }
    });

    setAppointments((prev) => [...prev, ...newAppointments]);

    if (isRecurrent) {
      alert(
        `Agendamento recorrente criado com sucesso!\n${newAppointments.length} agendamento(s) criado(s) no total.`
      );
    } else {
      alert(`${newAppointments.length} agendamento(s) criado(s) com sucesso!`);
    }

    clearSelection();
    setSelectedClient(null);
    setClientSearch("");
    setIsRecurrent(false);
    setRecurrenceEndDate("");
  };

  // Função auxiliar para renderizar o bloco de agendamento
  const getAppointmentBlock = (empId: number, time: string) => {
    const dateString = currentDate.toISOString().split("T")[0];
    const apt = appointments.find(
      (a) => a.empId === empId && a.start === time && a.date === dateString
    );

    if (!apt) return null;

    // Cálculo da largura baseado na duração (slots de 30 min = 55px cada)
    // 0.5h = 1 slot = 55px
    // 1h = 2 slots = 110px
    // 1.5h = 3 slots = 165px
    // 2h = 4 slots = 220px
    const slotsCount = Math.ceil(apt.duration / 0.5);
    const widthPx = slotsCount * 55 - 3; // -3px para compensar bordas

    // Ícone de origem
    const getSourceIcon = () => {
      switch (apt.source) {
        case "instagram":
          return <InstagramIcon size={12} />;
        case "whatsapp":
          return <WhatsAppIcon size={12} />;
        case "phone":
          return <PhoneCall size={12} className="text-blue-600" />;
        default:
          return null;
      }
    };

    // Layout diferente para 30min vs 1h+
    const isShort = apt.duration === 0.5;

    return (
      <div
        onClick={() => setSelectedAppointment(apt)}
        style={{ width: `${widthPx}px` }}
        className={`absolute top-0.5 left-0.5 bottom-0.5 z-10 rounded border-l-3 shadow-sm transition-all hover:shadow-md hover:scale-[1.02] cursor-pointer overflow-hidden ${
          typeColors[apt.type as keyof typeof typeColors]
        } ${apt.isRecurrent ? "ring-2 ring-blue-400 ring-opacity-60" : ""} ${
          isShort ? "px-1.5 py-1" : "px-2 py-1.5"
        }`}
      >
        {isShort ? (
          // Layout compacto para 30 minutos
          <div className="h-full flex flex-col justify-center gap-0.5 overflow-hidden">
            <div className="flex items-center justify-between gap-0.5 min-w-0">
              <div className="flex items-center gap-0.5 min-w-0 flex-1 overflow-hidden">
                {apt.isRecurrent && (
                  <svg
                    width="8"
                    height="8"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-blue-600 flex-shrink-0"
                  >
                    <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z" />
                  </svg>
                )}
                <span className="font-semibold text-[10px] truncate">
                  {apt.client}
                </span>
              </div>
              <div className="flex-shrink-0 flex items-center">
                {getSourceIcon()}
              </div>
            </div>
            <div className="text-[9px] font-medium truncate opacity-90">
              {apt.service}
            </div>
          </div>
        ) : (
          // Layout normal para 1h ou mais
          <div className="h-full flex flex-col justify-between overflow-hidden">
            <div className="flex justify-between items-start gap-1 min-w-0">
              <div className="flex items-center gap-1 min-w-0 flex-1 overflow-hidden">
                {apt.isRecurrent && (
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-blue-600 flex-shrink-0"
                  >
                    <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z" />
                  </svg>
                )}
                <span className="font-semibold text-[11px] truncate">
                  {apt.client}
                </span>
              </div>
              <MoreHorizontal
                size={11}
                className="opacity-50 hover:opacity-100 flex-shrink-0"
              />
            </div>

            <div className="text-[10px] font-medium truncate">
              {apt.service}
            </div>

            <div className="flex items-center justify-between gap-1.5 min-w-0">
              <div className="flex items-center gap-0.5 text-[9px] opacity-80 flex-shrink-0">
                <Clock size={9} className="flex-shrink-0" />
                <span>{apt.duration}h</span>
              </div>
              <div className="flex-shrink-0 flex items-center">
                {getSourceIcon()}
              </div>
            </div>
          </div>
        )}
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
      {/* --- HEADER LOCAL DA PÁGINA --- */}
      <header className="bg-gradient-to-r from-white via-gray-50 to-white border-b border-gray-200 px-6 py-3 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center shadow-lg">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V19z" />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
              Agenda
            </h1>
            <p className="text-xs text-gray-500 font-medium">
              Gerenciamento de Horários
            </p>
          </div>
          {selectedSlots.length === 0 && (
            <div className="ml-3 text-xs bg-purple-50 text-purple-700 px-3 py-1.5 rounded-full border border-purple-200 font-medium shadow-sm">
              💡 Arraste ou Shift+Clique para selecionar múltiplos slots
            </div>
          )}
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center bg-gray-100 rounded-full px-3 py-1.5 border border-gray-200">
            <ChevronLeft
              onClick={previousDay}
              className="cursor-pointer text-gray-500 hover:text-purple-600"
              size={18}
            />
            <div
              className="flex items-center gap-2 mx-3 text-sm font-semibold text-gray-700 cursor-pointer hover:text-purple-600"
              onClick={() => setShowCalendar(!showCalendar)}
            >
              <Calendar size={14} />
              <span>{formatDate(currentDate)}</span>
            </div>
            <ChevronRight
              onClick={nextDay}
              className="cursor-pointer text-gray-500 hover:text-purple-600"
              size={18}
            />
          </div>

          <button
            onClick={goToToday}
            className="bg-purple-100 hover:bg-purple-200 text-purple-700 px-3 py-1.5 rounded-full text-sm font-medium transition-colors"
          >
            Hoje
          </button>
        </div>

        <div className="flex items-center gap-3">
          {/* Botão de Filtros */}
          <div className="relative" ref={filterRef}>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                selectedGroups.length > 0 || selectedProfessionals.length > 0
                  ? "bg-purple-100 text-purple-700 border border-purple-300"
                  : "bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200"
              }`}
            >
              <Filter size={14} />
              Filtros
              {(selectedGroups.length > 0 ||
                selectedProfessionals.length > 0) && (
                <span className="bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {selectedGroups.length + selectedProfessionals.length}
                </span>
              )}
              <ChevronDown size={14} />
            </button>

            {/* Dropdown de Filtros */}
            {showFilters && (
              <div className="absolute right-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-sm text-gray-900">
                      Filtrar Agenda
                    </h3>
                    {(selectedGroups.length > 0 ||
                      selectedProfessionals.length > 0) && (
                      <button
                        onClick={clearFilters}
                        className="text-xs text-purple-600 hover:text-purple-700 font-medium"
                      >
                        Limpar tudo
                      </button>
                    )}
                  </div>

                  {/* Filtro por Grupo */}
                  <div className="mb-4">
                    <label className="text-xs font-semibold text-gray-600 uppercase mb-2 block">
                      Por Grupo
                    </label>
                    <div className="space-y-1.5">
                      {groups.map((group) => (
                        <label
                          key={group}
                          className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-1.5 rounded"
                        >
                          <input
                            type="checkbox"
                            checked={selectedGroups.includes(group)}
                            onChange={() => toggleGroup(group)}
                            className="w-4 h-4 text-purple-600 rounded focus:ring-purple-500"
                          />
                          <span className="text-sm text-gray-700">{group}</span>
                          <span className="text-xs text-gray-400 ml-auto">
                            ({employees.filter((e) => e.group === group).length}
                            )
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Filtro por Profissional */}
                  <div>
                    <label className="text-xs font-semibold text-gray-600 uppercase mb-2 block">
                      Por Profissional
                    </label>
                    <div className="space-y-1.5 max-h-60 overflow-y-auto">
                      {sortEmployees(employees).map((emp) => (
                        <label
                          key={emp.id}
                          className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-1.5 rounded"
                        >
                          <input
                            type="checkbox"
                            checked={selectedProfessionals.includes(emp.id)}
                            onChange={() => toggleProfessional(emp.id)}
                            className="w-4 h-4 text-purple-600 rounded focus:ring-purple-500"
                          />
                          <img
                            src={emp.avatar}
                            alt={emp.name}
                            className="w-6 h-6 rounded-full object-cover"
                          />
                          <div className="flex-1">
                            <div className="text-sm text-gray-700">
                              {emp.name}
                            </div>
                            <div className="text-xs text-gray-400">
                              {emp.group}
                            </div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Legenda de Cores */}
          <div className="relative">
            <button
              onMouseEnter={() => setShowLegend(true)}
              onMouseLeave={() => setShowLegend(false)}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors group"
              title="Legenda de cores"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-gray-500 group-hover:text-gray-700"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
              </svg>
            </button>

            {/* Tooltip da Legenda */}
            {showLegend && (
              <div
                className="absolute right-0 top-full mt-2 bg-white border border-gray-200 rounded-lg shadow-xl z-50 p-4 min-w-[500px] animate-fadeIn"
                onMouseEnter={() => setShowLegend(true)}
                onMouseLeave={() => setShowLegend(false)}
              >
                <h3 className="font-semibold text-sm text-gray-900 mb-3 flex items-center gap-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-purple-600"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  Legenda Visual
                </h3>

                {/* Tabela de Estados do Agendamento */}
                <div className="mb-4">
                  <div className="text-xs font-semibold text-gray-600 uppercase mb-2">
                    Estados do Agendamento
                  </div>
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-200">
                        <th className="text-left px-3 py-2 text-xs font-semibold text-gray-700">
                          Visual
                        </th>
                        <th className="text-left px-3 py-2 text-xs font-semibold text-gray-700">
                          Tipo
                        </th>
                        <th className="text-left px-3 py-2 text-xs font-semibold text-gray-700">
                          Descrição
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr className="hover:bg-gray-50">
                        <td className="px-3 py-2">
                          <div className="flex gap-1">
                            <div className="w-6 h-6 rounded border-l-2 bg-purple-100 border-purple-300"></div>
                            <div className="w-6 h-6 rounded border-l-2 bg-pink-100 border-pink-300"></div>
                            <div className="w-6 h-6 rounded border-l-2 bg-blue-100 border-blue-300"></div>
                          </div>
                        </td>
                        <td className="px-3 py-2 font-medium text-gray-900">
                          Agendamento Normal
                        </td>
                        <td className="px-3 py-2 text-xs text-gray-600">
                          Cores por tipo de serviço
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-3 py-2">
                          <div className="w-6 h-6 rounded border-l-2 bg-purple-100 border-purple-300 ring-2 ring-blue-400 ring-opacity-60 flex items-center justify-center">
                            <svg
                              width="10"
                              height="10"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="text-blue-600"
                            >
                              <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z" />
                            </svg>
                          </div>
                        </td>
                        <td className="px-3 py-2 font-medium text-gray-900">
                          Agendamento Recorrente
                        </td>
                        <td className="px-3 py-2 text-xs text-gray-600">
                          Anel azul + ícone de repetição
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-3 py-2">
                          <div className="w-6 h-6 rounded bg-purple-200 border-2 border-purple-400 flex items-center justify-center">
                            <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                          </div>
                        </td>
                        <td className="px-3 py-2 font-medium text-gray-900">
                          Slot Selecionado
                        </td>
                        <td className="px-3 py-2 text-xs text-gray-600">
                          Para criar novo agendamento
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Tabela de Tipos de Serviço */}
                <div className="mb-4">
                  <div className="text-xs font-semibold text-gray-600 uppercase mb-2">
                    Tipos de Serviço
                  </div>
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-200">
                        <th className="text-left px-3 py-2 text-xs font-semibold text-gray-700">
                          Cor
                        </th>
                        <th className="text-left px-3 py-2 text-xs font-semibold text-gray-700">
                          Serviço
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr className="hover:bg-gray-50">
                        <td className="px-3 py-2">
                          <div className="w-4 h-4 rounded-full bg-purple-400"></div>
                        </td>
                        <td className="px-3 py-2 text-gray-700">Cabelo</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-3 py-2">
                          <div className="w-4 h-4 rounded-full bg-pink-400"></div>
                        </td>
                        <td className="px-3 py-2 text-gray-700">Unhas</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-3 py-2">
                          <div className="w-4 h-4 rounded-full bg-rose-400"></div>
                        </td>
                        <td className="px-3 py-2 text-gray-700">Estética</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-3 py-2">
                          <div className="w-4 h-4 rounded-full bg-green-400"></div>
                        </td>
                        <td className="px-3 py-2 text-gray-700">Massagem</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-3 py-2">
                          <div className="w-4 h-4 rounded-full bg-blue-400"></div>
                        </td>
                        <td className="px-3 py-2 text-gray-700">Barbearia</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Tabela de Origem do Agendamento */}
                <div className="mb-3">
                  <div className="text-xs font-semibold text-gray-600 uppercase mb-2">
                    Origem do Agendamento
                  </div>
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-200">
                        <th className="text-left px-3 py-2 text-xs font-semibold text-gray-700">
                          Ícone
                        </th>
                        <th className="text-left px-3 py-2 text-xs font-semibold text-gray-700">
                          Canal
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr className="hover:bg-gray-50">
                        <td className="px-3 py-2">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="text-pink-500"
                          >
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                          </svg>
                        </td>
                        <td className="px-3 py-2 text-gray-700">Instagram</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-3 py-2">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="text-green-500"
                          >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                          </svg>
                        </td>
                        <td className="px-3 py-2 text-gray-700">WhatsApp</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-3 py-2">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="text-blue-500"
                          >
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                          </svg>
                        </td>
                        <td className="px-3 py-2 text-gray-700">Telefone</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="border-t border-gray-200 pt-3 mt-3">
                  <div className="text-xs text-gray-500 italic text-center">
                    💡 Passe o mouse sobre os agendamentos para ver mais
                    detalhes
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="relative">
            <Search
              className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400"
              size={14}
            />
            <input
              type="text"
              placeholder="Buscar cliente..."
              className="pl-8 pr-3 py-1.5 text-sm border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 w-40 transition-all"
            />
          </div>
          <button className="bg-gray-900 hover:bg-black text-white px-3 py-1.5 rounded-full text-sm font-medium flex items-center gap-2 transition-colors shadow-lg shadow-purple-200">
            <Plus size={14} />
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
            <div className="w-44 flex-shrink-0 bg-white border-r border-gray-200 sticky left-0 z-30 px-3 py-2 flex items-center text-xs font-medium text-gray-500">
              <User size={14} className="mr-1.5" /> Profissionais
            </div>

            {/* Renderiza as horas com intervalos de 30 min */}
            {timeSlots.map((time, index) => (
              <div
                key={time}
                className={`w-[55px] flex-shrink-0 py-2 text-center text-[11px] font-medium ${
                  index % 2 === 0
                    ? "border-r border-gray-300 text-gray-600"
                    : "border-r border-gray-100 text-gray-400"
                }`}
              >
                {time}
              </div>
            ))}
          </div>

          {/* Corpo do Calendário - Linhas de Funcionários */}
          <div className="divide-y divide-gray-100">
            {filteredEmployees.map((emp, empIndex) => {
              // Verificar se é o primeiro do grupo para adicionar separador
              const isFirstInGroup =
                empIndex === 0 ||
                filteredEmployees[empIndex - 1].group !== emp.group;

              return (
                <React.Fragment key={emp.id}>
                  {/* Separador de Grupo */}
                  {isFirstInGroup && filteredEmployees.length > 0 && (
                    <div className="bg-gray-100 border-y border-gray-200 px-3 py-1 sticky left-0 z-10">
                      <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                        {emp.group}
                      </span>
                    </div>
                  )}

                  <div className="flex group bg-white hover:bg-gray-50 transition-colors">
                    {/* Coluna do Funcionário (Sticky Left) */}
                    <div className="w-44 flex-shrink-0 border-r border-gray-200 bg-white group-hover:bg-gray-50 sticky left-0 z-20 px-3 py-2 flex items-center gap-2">
                      <img
                        src={emp.avatar}
                        alt={emp.name}
                        className="w-7 h-7 rounded-full object-cover border border-white shadow-sm"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-xs text-gray-800 truncate">
                          {emp.name}
                        </h3>
                        <p className="text-[10px] text-gray-500 truncate">
                          {emp.role}
                        </p>
                      </div>
                    </div>

                    {/* Colunas de Horários (Slots) */}
                    {timeSlots.map((time, index) => {
                      const hasAppointment = appointments.find(
                        (a) =>
                          a.empId === emp.id &&
                          a.start === time &&
                          a.date === currentDate.toISOString().split("T")[0]
                      );
                      const isSelected = isSlotSelected(emp.id, time);

                      return (
                        <div
                          key={`${emp.id}-${time}`}
                          className={`w-[55px] flex-shrink-0 h-14 relative ${
                            index % 2 === 0
                              ? "border-r border-gray-300"
                              : "border-r border-gray-100"
                          } ${
                            isSelected ? "bg-purple-200 border-purple-400" : ""
                          }`}
                          onMouseDown={(e) => {
                            if (!hasAppointment && !e.shiftKey) {
                              handleMouseDown(emp.id, time);
                            }
                          }}
                          onMouseEnter={() =>
                            !hasAppointment && handleMouseEnter(emp.id, time)
                          }
                          onMouseUp={handleMouseUp}
                          onClick={(e) => {
                            if (!hasAppointment && e.shiftKey) {
                              e.preventDefault();
                              toggleSlotSelection(emp.id, time);
                            }
                          }}
                          style={{ userSelect: "none" }}
                        >
                          {/* Renderiza agendamento se existir neste slot */}
                          {getAppointmentBlock(emp.id, time)}

                          {/* Indicador visual de seleção */}
                          {isSelected && !hasAppointment && (
                            <div className="absolute inset-0 bg-purple-400/30 border-2 border-purple-500 pointer-events-none flex items-center justify-center">
                              <div className="w-2 h-2 bg-purple-600 rounded-full" />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </main>

      {/* --- PAINEL DE SELEÇÃO MÚLTIPLA --- */}
      {selectedSlots.length > 0 && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 animate-slideUp">
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full shadow-2xl px-6 py-3 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="bg-white/20 rounded-full px-3 py-1 text-sm font-semibold">
                {selectedSlots.length} slot{selectedSlots.length > 1 ? "s" : ""}{" "}
                selecionado{selectedSlots.length > 1 ? "s" : ""}
              </div>
              <div className="text-sm opacity-90">
                {Array.from(new Set(selectedSlots.map((s) => s.empId))).length}{" "}
                profissional
                {Array.from(new Set(selectedSlots.map((s) => s.empId))).length >
                1
                  ? "is"
                  : ""}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={clearSelection}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm font-medium transition-colors flex items-center gap-2"
              >
                <X size={16} />
                Limpar
              </button>
              <button
                onClick={() => setShowBulkCreate(true)}
                className="px-4 py-2 bg-white text-purple-600 hover:bg-gray-100 rounded-full text-sm font-semibold transition-colors flex items-center gap-2 shadow-lg"
              >
                <Plus size={16} />
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

              {/* Informações de Recorrência */}
              {selectedAppointment.isRecurrent && (
                <div className="bg-blue-50 rounded-xl p-4 border-2 border-blue-200">
                  <div className="flex items-center gap-2 mb-2">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-blue-600"
                    >
                      <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z" />
                    </svg>
                    <label className="text-xs font-semibold text-blue-900 uppercase tracking-wide">
                      Agendamento Recorrente
                    </label>
                  </div>
                  <p className="text-sm text-blue-800 font-medium">
                    {selectedAppointment.recurrenceType === "weekly" &&
                      "Toda semana"}
                    {selectedAppointment.recurrenceType === "biweekly" &&
                      "Quinzenal"}
                    {selectedAppointment.recurrenceType === "monthly" &&
                      "Mensal"}
                  </p>
                  <p className="text-xs text-blue-600 mt-1">
                    ID da Série: {selectedAppointment.recurrenceId}
                  </p>
                </div>
              )}
            </div>

            {/* Footer do Modal */}
            <div className="border-t border-gray-200 p-6 bg-gray-50 rounded-b-2xl flex gap-3">
              <button className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2 shadow-lg">
                <Edit size={18} />
                Editar
              </button>

              {selectedAppointment.isRecurrent ? (
                <>
                  <button
                    onClick={() =>
                      setShowRecurrenceOptions(!showRecurrenceOptions)
                    }
                    className="flex-1 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2 shadow-lg relative"
                  >
                    <Trash2 size={18} />
                    Excluir
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        showRecurrenceOptions ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {showRecurrenceOptions && (
                    <div className="absolute bottom-20 right-6 bg-white border border-gray-300 rounded-lg shadow-xl z-50 min-w-[280px]">
                      <button
                        onClick={() => {
                          alert("Excluir apenas este agendamento");
                          setShowRecurrenceOptions(false);
                        }}
                        className="w-full px-4 py-3 text-left hover:bg-red-50 border-b border-gray-200 transition-colors flex items-center gap-2"
                      >
                        <Trash2 size={16} className="text-red-600" />
                        <div>
                          <div className="font-medium text-sm text-gray-900">
                            Este agendamento
                          </div>
                          <div className="text-xs text-gray-500">
                            Apenas esta ocorrência
                          </div>
                        </div>
                      </button>
                      <button
                        onClick={() => {
                          alert(
                            "Excluir este e todos os próximos agendamentos"
                          );
                          setShowRecurrenceOptions(false);
                        }}
                        className="w-full px-4 py-3 text-left hover:bg-red-50 border-b border-gray-200 transition-colors flex items-center gap-2"
                      >
                        <Trash2 size={16} className="text-red-600" />
                        <div>
                          <div className="font-medium text-sm text-gray-900">
                            A partir deste
                          </div>
                          <div className="text-xs text-gray-500">
                            Este e futuros agendamentos
                          </div>
                        </div>
                      </button>
                      <button
                        onClick={() => {
                          if (
                            confirm(
                              "Tem certeza que deseja excluir TODOS os agendamentos desta série?"
                            )
                          ) {
                            alert("Excluir todos os agendamentos da série");
                            setShowRecurrenceOptions(false);
                          }
                        }}
                        className="w-full px-4 py-3 text-left hover:bg-red-50 transition-colors flex items-center gap-2"
                      >
                        <Trash2 size={16} className="text-red-600" />
                        <div>
                          <div className="font-medium text-sm text-gray-900">
                            Todos da série
                          </div>
                          <div className="text-xs text-gray-500">
                            Todos os agendamentos recorrentes
                          </div>
                        </div>
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <button className="flex-1 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2 shadow-lg">
                  <Trash2 size={18} />
                  Cancelar
                </button>
              )}

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

      {/* --- MODAL DE CRIAÇÃO EM MASSA --- */}
      {showBulkCreate && selectedSlots.length > 0 && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setShowBulkCreate(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header do Modal */}
            <div className="relative px-4 py-3 border-b border-gray-200 bg-white">
              <button
                onClick={() => setShowBulkCreate(false)}
                className="absolute top-2 right-2 p-1.5 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={18} className="text-gray-600" />
              </button>
              <h2 className="text-lg font-semibold text-gray-800">
                Novo Agendamento
              </h2>
            </div>

            {/* Corpo do Modal */}
            <div className="p-4 space-y-3">
              {/* Cliente com botão Novo */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Cliente
                </label>
                <div className="flex gap-2">
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      placeholder="Buscar por nome, telefone ou CPF..."
                      value={
                        selectedClient ? selectedClient.name : clientSearch
                      }
                      onChange={(e) => {
                        setClientSearch(e.target.value);
                        setSelectedClient(null);
                        setShowClientDropdown(true);
                      }}
                      onFocus={() => setShowClientDropdown(true)}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-16"
                    />
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1">
                      {(clientSearch || selectedClient) && (
                        <button
                          onClick={() => {
                            setClientSearch("");
                            setSelectedClient(null);
                            setShowClientDropdown(false);
                          }}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <X size={14} className="text-gray-400" />
                        </button>
                      )}
                      <button
                        onClick={() =>
                          setShowClientDropdown(!showClientDropdown)
                        }
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          className="text-gray-400"
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </button>
                    </div>

                    {/* Dropdown de Clientes */}
                    {showClientDropdown && (
                      <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
                        {filteredClients.length > 0 ? (
                          filteredClients.map((client) => (
                            <button
                              key={client.id}
                              onClick={() => {
                                setSelectedClient(client);
                                setClientSearch("");
                                setShowClientDropdown(false);
                              }}
                              className="w-full px-3 py-2 text-left hover:bg-blue-50 border-b border-gray-100 last:border-b-0 transition-colors"
                            >
                              <div className="font-medium text-sm text-gray-900">
                                {client.name}
                              </div>
                              <div className="text-xs text-gray-500 mt-0.5">
                                {client.phone} • CPF: {client.cpf}
                              </div>
                            </button>
                          ))
                        ) : (
                          <div className="px-3 py-4 text-center text-sm text-gray-500">
                            Nenhum cliente encontrado
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                  <button
                    onClick={() => setShowNewClientModal(true)}
                    className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition-colors"
                  >
                    Novo
                  </button>
                </div>
              </div>

              {/* Checkbox Ausência */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="ausencia"
                  className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="ausencia" className="text-sm text-gray-700">
                  Ausência?
                </label>
              </div>

              {/* Checkbox Recorrente */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-3">
                  <input
                    type="checkbox"
                    id="recorrente"
                    checked={isRecurrent}
                    onChange={(e) => setIsRecurrent(e.target.checked)}
                    className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label
                    htmlFor="recorrente"
                    className="text-sm font-semibold text-blue-900 flex items-center gap-1"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-blue-600"
                    >
                      <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z" />
                    </svg>
                    Agendamento Recorrente (Cliente Fixa)
                  </label>
                </div>

                {isRecurrent && (
                  <div className="space-y-3 pl-6">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1.5">
                        Repetir
                      </label>
                      <select
                        value={recurrenceType}
                        onChange={(e) =>
                          setRecurrenceType(
                            e.target.value as "weekly" | "biweekly" | "monthly"
                          )
                        }
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="weekly">Toda semana</option>
                        <option value="biweekly">
                          Quinzenal (a cada 2 semanas)
                        </option>
                        <option value="monthly">Mensal</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1.5">
                        Repetir até (opcional)
                      </label>
                      <input
                        type="date"
                        value={recurrenceEndDate}
                        onChange={(e) => setRecurrenceEndDate(e.target.value)}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Deixe vazio para sem limite"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Deixe vazio para agendamento contínuo
                      </p>
                    </div>

                    <div className="bg-blue-100 border border-blue-300 rounded p-2">
                      <p className="text-xs text-blue-800">
                        <strong>💡 Dica:</strong> Este agendamento se repetirá
                        automaticamente{" "}
                        {recurrenceType === "weekly" && "toda semana"}
                        {recurrenceType === "biweekly" && "a cada 2 semanas"}
                        {recurrenceType === "monthly" && "todo mês"} no mesmo
                        horário e profissional.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Seção Horários */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                <h3 className="text-sm font-semibold text-gray-700 mb-3">
                  Horários:
                </h3>

                {/* Agrupar slots consecutivos do mesmo profissional */}
                <div className="space-y-2">
                  {(() => {
                    // Agrupar slots consecutivos
                    const groupedSlots: Array<{
                      empId: number;
                      startTime: string;
                      endTime: string;
                    }> = [];

                    // Ordenar slots por profissional e horário
                    const sortedSlots = [...selectedSlots].sort((a, b) => {
                      if (a.empId !== b.empId) return a.empId - b.empId;
                      return (
                        timeSlots.indexOf(a.time) - timeSlots.indexOf(b.time)
                      );
                    });

                    if (sortedSlots.length === 0) return [];

                    let currentGroup = {
                      empId: sortedSlots[0].empId,
                      startTime: sortedSlots[0].time,
                      endTime: sortedSlots[0].time,
                    };

                    for (let i = 1; i < sortedSlots.length; i++) {
                      const slot = sortedSlots[i];
                      const slotIndex = timeSlots.indexOf(slot.time);
                      const currentEndIndex = timeSlots.indexOf(
                        currentGroup.endTime
                      );

                      // Se mudou de profissional ou não é consecutivo
                      if (
                        slot.empId !== currentGroup.empId ||
                        slotIndex !== currentEndIndex + 1
                      ) {
                        // Finalizar grupo atual (sem adicionar +1, endTime já é o fim)
                        groupedSlots.push({ ...currentGroup });

                        // Iniciar novo grupo
                        currentGroup = {
                          empId: slot.empId,
                          startTime: slot.time,
                          endTime: slot.time,
                        };
                      } else {
                        // Estender grupo atual
                        currentGroup.endTime = slot.time;
                      }
                    }

                    // Adicionar último grupo (sem adicionar +1)
                    groupedSlots.push(currentGroup);

                    return groupedSlots.map((group, index) => {
                      const emp = employees.find((e) => e.id === group.empId);
                      return (
                        <div
                          key={index}
                          className="grid grid-cols-5 gap-2 items-start"
                        >
                          <div>
                            <label className="block text-xs font-medium text-gray-600 mb-1">
                              Profissional
                            </label>
                            <select
                              className="w-full px-2 py-1.5 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                              defaultValue={group.empId}
                            >
                              {employees.map((e) => (
                                <option key={e.id} value={e.id}>
                                  {e.name}
                                </option>
                              ))}
                            </select>
                          </div>

                          <div>
                            <label className="block text-xs font-medium text-gray-600 mb-1">
                              Serviço
                            </label>
                            <select className="w-full px-2 py-1.5 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500">
                              <option value="">Selecione</option>
                              <option value="corte">Corte</option>
                              <option value="escova">Escova</option>
                              <option value="coloracao">Coloração</option>
                              <option value="manicure">Manicure</option>
                              <option value="pedicure">Pedicure</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-xs font-medium text-gray-600 mb-1">
                              Data
                            </label>
                            <input
                              type="text"
                              defaultValue="02/12/2025"
                              className="w-full px-2 py-1.5 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-medium text-gray-600 mb-1">
                              Início
                            </label>
                            <input
                              type="time"
                              defaultValue={group.startTime}
                              className="w-full px-2 py-1.5 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                          </div>

                          <div className="flex items-end gap-1">
                            <div className="flex-1">
                              <label className="block text-xs font-medium text-gray-600 mb-1">
                                Fim
                              </label>
                              <input
                                type="time"
                                defaultValue={group.endTime}
                                className="w-full px-2 py-1.5 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                              />
                            </div>
                            <button
                              onClick={() => {
                                // Remover todos os slots deste grupo
                                const newSlots = selectedSlots.filter(
                                  (slot) =>
                                    !(
                                      slot.empId === group.empId &&
                                      timeSlots.indexOf(slot.time) >=
                                        timeSlots.indexOf(group.startTime) &&
                                      timeSlots.indexOf(slot.time) <
                                        timeSlots.indexOf(group.endTime)
                                    )
                                );
                                setSelectedSlots(newSlots);
                                if (newSlots.length === 0) {
                                  setShowBulkCreate(false);
                                }
                              }}
                              className="p-2 bg-red-500 hover:bg-red-600 text-white rounded transition-colors h-[30px] flex items-center justify-center"
                            >
                              <svg
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                              >
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                      );
                    });
                  })()}
                </div>

                {/* Checkbox Sem Preferência */}
                <div className="flex items-center gap-2 mt-2">
                  <input
                    type="checkbox"
                    id="semPreferencia"
                    className="w-3.5 h-3.5 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label
                    htmlFor="semPreferencia"
                    className="text-xs text-gray-600"
                  >
                    Sem Preferência
                  </label>
                </div>
              </div>

              {/* Observações */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Observações
                </label>
                <textarea
                  rows={3}
                  placeholder="Observações..."
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                ></textarea>
              </div>
            </div>

            {/* Footer do Modal */}
            <div className="border-t border-gray-200 p-4 bg-white flex justify-end gap-3">
              <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition-colors">
                Novo
              </button>
              <button
                onClick={handleCreateAppointment}
                className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition-colors"
              >
                Gravar
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

      {/* --- MODAL DE CADASTRO DE NOVO CLIENTE --- */}
      {showNewClientModal && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setShowNewClientModal(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-blue-500 to-blue-600 rounded-t-2xl">
              <button
                onClick={() => setShowNewClientModal(false)}
                className="absolute top-3 right-3 p-1.5 hover:bg-white/20 rounded-full transition-colors"
              >
                <X size={18} className="text-white" />
              </button>
              <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                <User size={20} />
                Novo Cliente
              </h2>
            </div>

            {/* Body */}
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  placeholder="Ex: Maria Silva Santos"
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    placeholder="(11) 98765-4321"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    CPF
                  </label>
                  <input
                    type="text"
                    placeholder="000.000.000-00"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  E-mail
                </label>
                <input
                  type="email"
                  placeholder="cliente@email.com"
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Data de Nascimento
                </label>
                <input
                  type="date"
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Endereço
                </label>
                <input
                  type="text"
                  placeholder="Rua, número, bairro"
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Observações
                </label>
                <textarea
                  rows={2}
                  placeholder="Informações adicionais sobre o cliente..."
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                ></textarea>
              </div>

              <div className="text-xs text-gray-500 mt-2">
                * Campos obrigatórios
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-gray-200 p-4 bg-gray-50 rounded-b-2xl flex justify-end gap-3">
              <button
                onClick={() => setShowNewClientModal(false)}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 text-sm font-medium rounded-lg transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  // Aqui você implementaria a lógica de salvar o cliente
                  alert("Cliente cadastrado com sucesso!");
                  setShowNewClientModal(false);
                }}
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition-colors flex items-center gap-2"
              >
                <Plus size={16} />
                Cadastrar Cliente
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AgendaPage;

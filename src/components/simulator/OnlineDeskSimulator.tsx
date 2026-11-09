import React, { useState, useEffect } from 'react';
import { 
  Sparkles, Clock, CheckCircle2, Send, Pause, 
  ArrowRight, RotateCcw, ShieldCheck, Check, Building2
} from 'lucide-react';

export const OnlineDeskSimulator: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Step 1: AI Triage state
  const [ticketSubject, setTicketSubject] = useState('Caída total de enlace de fibra óptica en Sede Central');
  const [ticketCategory, setTicketCategory] = useState('Redes & Conectividad');
  const ticketCompany = 'Empresa Minera del Norte S.A.';
  const [isAiClassifying, setIsAiClassifying] = useState(false);
  const [aiClassified, setAiClassified] = useState(false);

  // Step 2 & 4: SLA Realtime Clock (countdown in seconds)
  const [slaSeconds, setSlaSeconds] = useState(13240); // ~3h 40m
  const [isSlaPaused, setIsSlaPaused] = useState(false);

  // Step 3: Chat state
  const [chatMessages, setChatMessages] = useState<Array<{ sender: 'tech' | 'client'; text: string; time: string; optimistic?: boolean }>>([
    {
      sender: 'tech',
      text: 'Estimado Carlos, hemos detectado una intermitencia en el router perimetral BGP. Estamos reconfigurando la interfaz primaria.',
      time: '14:22'
    },
    {
      sender: 'client',
      text: 'Gracias por la rapidez. Los terminales de facturación están a la espera de confirmación.',
      time: '14:23'
    },
    {
      sender: 'tech',
      text: 'Ruta restaurada con éxito y tráfico validado. ¿Nos confirmas si tus sistemas ya responden con normalidad?',
      time: '14:25'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  // Ticking SLA countdown
  useEffect(() => {
    if (isSlaPaused) return;
    const interval = setInterval(() => {
      setSlaSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [isSlaPaused]);

  // Format seconds to HH:MM:SS
  const formatSlaTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleRunAi = () => {
    setIsAiClassifying(true);
    setTimeout(() => {
      setIsAiClassifying(false);
      setAiClassified(true);
    }, 1200);
  };

  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputMessage.trim()) return;

    const newMsg = {
      sender: 'client' as const,
      text: inputMessage,
      time: '14:26',
      optimistic: true
    };
    setChatMessages((prev) => [...prev, newMsg]);
    setInputMessage('');
  };

  const handleApproveSolution = () => {
    setIsSlaPaused(true);
    setCurrentStep(4);
  };

  return (
    <div className="flex flex-col h-full bg-[#0b1329] text-slate-100 select-none">
      {/* Simulation Steps Bar */}
      <div className="bg-slate-900/95 border-b border-slate-800 px-4 py-2.5 flex items-center justify-between gap-2 overflow-x-auto shrink-0">
        <div className="flex items-center gap-1 sm:gap-2">
          {[
            { num: 1, label: '1. Triage con IA' },
            { num: 2, label: '2. Kanban & SLA en Vivo' },
            { num: 3, label: '3. Chat 0 ms' },
            { num: 4, label: '4. Pausa Legal & Cierre' }
          ].map((step) => (
            <button
              key={step.num}
              onClick={() => {
                if (step.num === 4) setIsSlaPaused(true);
                setCurrentStep(step.num);
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                currentStep === step.num
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              <span>{step.label}</span>
            </button>
          ))}
        </div>

        <button
          onClick={() => {
            setCurrentStep(1);
            setAiClassified(false);
            setIsSlaPaused(false);
            setSlaSeconds(13240);
          }}
          className="flex items-center gap-1 text-[11px] font-medium text-slate-400 hover:text-indigo-300 transition-colors cursor-pointer shrink-0"
          title="Reiniciar Simulación"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Reiniciar</span>
        </button>
      </div>

      {/* Main Interactive Screen Area */}
      <div className="flex-1 p-4 sm:p-6 overflow-y-auto">
        {/* STEP 1: AI Triage & Ticket Submission */}
        {currentStep === 1 && (
          <div className="max-w-2xl mx-auto space-y-5 animate-fadeIn">
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl space-y-5">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-400">
                    <Sparkles className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Ingreso de Solicitud de Soporte</h3>
                    <p className="text-xs text-slate-400">Motor de clasificación semántica con IA (Google Genkit)</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-indigo-950 text-indigo-300 border border-indigo-800">
                  #REQ-2026-089
                </span>
              </div>

              <div className="space-y-4 text-xs">
                <div>
                  <label className="block text-slate-400 mb-1 font-medium">Empresa Cliente</label>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200">
                    <Building2 className="w-4 h-4 text-slate-400" />
                    <span>{ticketCompany}</span>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-400 mb-1 font-medium">Asunto del Problema</label>
                  <input
                    type="text"
                    value={ticketSubject}
                    onChange={(e) => setTicketSubject(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-400 mb-1 font-medium">Categoría Inicial</label>
                    <select
                      value={ticketCategory}
                      onChange={(e) => setTicketCategory(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-indigo-500"
                    >
                      <option value="Redes & Conectividad">Redes & Conectividad</option>
                      <option value="Servidores & Cloud">Servidores & Cloud</option>
                      <option value="Sistemas & Cuentas">Sistemas & Cuentas</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-slate-400 mb-1 font-medium">Prioridad Sugerida</label>
                    <div className="flex items-center gap-1.5 p-2 rounded-xl bg-slate-950 border border-slate-800">
                      <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-red-500/20 text-red-400 border border-red-500/30">
                        Crítica (SLA: 4h)
                      </span>
                    </div>
                  </div>
                </div>

                {/* AI Classification Action */}
                <div className="pt-2">
                  {!aiClassified ? (
                    <button
                      onClick={handleRunAi}
                      disabled={isAiClassifying}
                      className="w-full py-3 px-4 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:opacity-90 shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      {isAiClassifying ? (
                        <>
                          <Sparkles className="w-4 h-4 animate-spin text-pink-300" />
                          <span>Analizando semántica y carga con Google Genkit...</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4 text-pink-300" />
                          <span>Probar Clasificación Inteligente con IA (1 Clic)</span>
                        </>
                      )}
                    </button>
                  ) : (
                    <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 space-y-2 animate-fadeIn">
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                          <CheckCircle2 className="w-4 h-4" />
                          Triage de IA Exitoso
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono">Confianza: 98.7%</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        • <strong>Especialista Asignado:</strong> Carlos Méndez (Área Redes & BGP - Menor carga: 2 tickets activos).<br />
                        • <strong>Compromiso Legal SLA:</strong> Primera Respuesta en ≤15 min | Resolución en ≤4 horas.
                      </p>
                      <button
                        onClick={() => setCurrentStep(2)}
                        className="mt-2 w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 flex items-center justify-center gap-1.5 cursor-pointer shadow"
                      >
                        <span>Ver en Tablero Kanban & SLA en Vivo</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: Realtime Kanban Board & SLA Clocks */}
        {currentStep === 2 && (
          <div className="space-y-4 max-w-5xl mx-auto animate-fadeIn">
            <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-white flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-indigo-400 animate-pulse" />
                  Tablero Kanban en Tiempo Real (Supabase Realtime)
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  WebSockets Conectado
                </span>
              </div>
              <button
                onClick={() => setCurrentStep(3)}
                className="px-3.5 py-1.5 rounded-lg text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 flex items-center gap-1.5 cursor-pointer"
              >
                <span>Abrir Chat de Latencia Cero</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* 4 Real Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {/* Column 1: Ingresado */}
              <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-3 flex flex-col gap-2">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="text-xs font-bold text-blue-400">Ingresado</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300">1</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 space-y-1.5 text-xs opacity-75">
                  <div className="flex justify-between items-center text-[10px]">
                    <span className="px-1.5 py-0.5 rounded bg-yellow-500/20 text-yellow-300">Media</span>
                    <span className="font-mono text-slate-400">#REQ-2026-088</span>
                  </div>
                  <h4 className="font-bold text-white line-clamp-1">Creación de cuenta ERP</h4>
                  <p className="text-[11px] text-slate-400">Softland Cloud</p>
                </div>
              </div>

              {/* Column 2: En Proceso (ACTIVE TICKET) */}
              <div className="bg-slate-950/90 border-2 border-indigo-500/60 rounded-xl p-3 flex flex-col gap-2 shadow-lg shadow-indigo-500/10">
                <div className="flex items-center justify-between pb-2 border-b border-indigo-500/30">
                  <span className="text-xs font-bold text-yellow-400">En proceso</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-yellow-500/20 text-yellow-300 font-bold">1 ACTIVO</span>
                </div>

                {/* Our Interactive Ticket */}
                <div 
                  onClick={() => setCurrentStep(3)}
                  className="p-3.5 rounded-lg bg-indigo-950/40 border border-indigo-500/40 space-y-2.5 text-xs hover:border-indigo-400 cursor-pointer transition-all hover:scale-[1.02] shadow-md"
                >
                  <div className="flex justify-between items-center text-[10px]">
                    <span className="px-1.5 py-0.5 rounded bg-red-500/20 text-red-300 font-bold border border-red-500/30">
                      Crítica
                    </span>
                    <div className="flex items-center gap-1 font-mono font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span>{formatSlaTime(slaSeconds)}</span>
                    </div>
                  </div>

                  <div>
                    <span className="font-mono text-[10px] text-indigo-400 font-bold">#REQ-2026-089</span>
                    <h4 className="font-bold text-white text-xs mt-0.5">Caída de enlace de fibra óptica</h4>
                    <p className="text-[11px] text-slate-300">Empresa Minera del Norte S.A.</p>
                  </div>

                  <div className="pt-1.5 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                    <span className="text-slate-400">Técnico: Carlos M.</span>
                    <span className="text-indigo-400 font-bold hover:underline flex items-center gap-0.5">
                      Abrir chat <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Column 3: Espera de aprobación */}
              <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-3 flex flex-col gap-2">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="text-xs font-bold text-purple-400">Espera de aprobación</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300">0</span>
                </div>
                <div className="p-4 rounded-lg border border-dashed border-slate-800 text-center text-[11px] text-slate-500">
                  El ticket pasará aquí al resolver el problema para pausar el SLA legal.
                </div>
              </div>

              {/* Column 4: Terminado */}
              <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-3 flex flex-col gap-2">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="text-xs font-bold text-emerald-400">Terminado</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300">12</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/60 space-y-1 text-xs opacity-60">
                  <span className="font-mono text-[10px] text-slate-400">#REQ-2026-087</span>
                  <h4 className="font-bold text-white line-clamp-1">Mantención Preventiva Firewall</h4>
                  <span className="text-[10px] text-emerald-400 font-semibold">✓ SLA 100% Cumplido</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: Zero-Latency Chat (0ms Optimistic UI) */}
        {currentStep === 3 && (
          <div className="max-w-2xl mx-auto bg-slate-900/90 border border-slate-800 rounded-2xl shadow-xl overflow-hidden flex flex-col h-[460px] animate-fadeIn">
            {/* Chat Header */}
            <div className="px-4 py-3 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center font-bold text-xs text-white">
                  CM
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                    Carlos Méndez (Especialista Asignado)
                    <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                  </h4>
                  <p className="text-[10px] text-slate-400">Chat colaborativo en tiempo real • Latencia &lt;50ms</p>
                </div>
              </div>

              {/* Active SLA badge */}
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-indigo-500/30 text-xs font-mono font-bold text-emerald-400">
                <Clock className="w-3.5 h-3.5" />
                <span>{formatSlaTime(slaSeconds)}</span>
              </div>
            </div>

            {/* Message Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#0a0f1d]">
              {chatMessages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col ${msg.sender === 'client' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl text-xs leading-relaxed ${
                      msg.sender === 'client'
                        ? 'bg-indigo-600 text-white rounded-tr-none'
                        : 'bg-slate-800 text-slate-200 border border-slate-700/60 rounded-tl-none'
                    }`}
                  >
                    <p>{msg.text}</p>
                    <div className="mt-1 flex items-center justify-end gap-1 text-[9px] opacity-75">
                      <span>{msg.time}</span>
                      {msg.optimistic && <span className="font-bold text-emerald-300">✓✓ 0 ms</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Proposal of Solution Banner */}
            <div className="px-4 py-2.5 bg-purple-950/40 border-t border-purple-500/30 flex items-center justify-between gap-2">
              <span className="text-[11px] text-purple-200 font-medium truncate">
                ⚡ El técnico ha marcado la solución como completada.
              </span>
              <button
                onClick={handleApproveSolution}
                className="shrink-0 px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:opacity-90 shadow-sm cursor-pointer"
              >
                ✓ Aprobar Solución y Pausar SLA
              </button>
            </div>

            {/* Chat Input */}
            <form onSubmit={handleSendMessage} className="p-3 bg-slate-950 border-t border-slate-800 flex items-center gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Escribe un mensaje en tiempo real..."
                className="flex-1 p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
              />
              <button
                type="submit"
                className="p-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white transition-colors cursor-pointer"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}

        {/* STEP 4: Legal SLA Pause & Approved Closure */}
        {currentStep === 4 && (
          <div className="max-w-2xl mx-auto space-y-5 animate-fadeIn">
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-5">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-emerald-500/20 text-emerald-400">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Requerimiento Resuelto con Éxito</h3>
                  <p className="text-xs text-slate-400">Control estricto de SLA contractual auditado</p>
                </div>
              </div>

              {/* Legal Pause Highlight */}
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 space-y-1">
                <div className="flex items-center justify-between text-xs font-bold text-amber-300">
                  <span className="flex items-center gap-1.5">
                    <Pause className="w-4 h-4" />
                    Pausa Legal de SLA Activada
                  </span>
                  <span className="font-mono">Estado: Espera de aprobación ➔ Terminado</span>
                </div>
                <p className="text-xs text-slate-300">
                  El cronómetro se congeló exactamente en <strong>{formatSlaTime(slaSeconds)}</strong> al momento de la revisión del cliente. Esto protege el porcentaje legal de cumplimiento técnico sin penalizar demoras del usuario final.
                </p>
              </div>

              {/* Metrics Summary */}
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-[10px] text-slate-400 uppercase font-semibold">Primera Respuesta</span>
                  <p className="text-base font-bold text-emerald-400 font-mono">3 min</p>
                  <span className="text-[9px] text-slate-500">Meta: ≤15 min</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-[10px] text-slate-400 uppercase font-semibold">Tiempo Resolución</span>
                  <p className="text-base font-bold text-indigo-400 font-mono">19 min</p>
                  <span className="text-[9px] text-slate-500">Meta: ≤4 horas</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-[10px] text-slate-400 uppercase font-semibold">Cumplimiento SLA</span>
                  <p className="text-base font-bold text-emerald-400 font-mono">100%</p>
                  <span className="text-[9px] text-emerald-500/80">Conforme a Ley</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-800">
                <button
                  onClick={() => {
                    setCurrentStep(1);
                    setAiClassified(false);
                    setIsSlaPaused(false);
                  }}
                  className="w-full sm:w-auto px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
                >
                  Reiniciar Simulación
                </button>
                <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
                  <Check className="w-4 h-4" />
                  <span>Reporte formal generado y notificado vía Web Push</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

import React, { useState, useRef, useEffect } from 'react';
import { 
  FileText, PenTool, Camera, RotateCcw, ArrowRight, CheckCircle2, HardHat, FileCheck
} from 'lucide-react';

export const IcsaSimulator: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Step 1: OT Details
  const [projectTitle, setProjectTitle] = useState('Instalación & Certificación Fibra Óptica Planta Norte');
  const clientName = 'Ingeniería Comunicaciones S.A. (ICSA)';
  const [networkPoints, setNetworkPoints] = useState(12);
  const [cableMeters, setCableMeters] = useState(180);
  const [eppChecked, setEppChecked] = useState({ helmet: true, harness: true, talk: true });

  // Step 3: Signature Canvas
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasSignature, setHasSignature] = useState(false);
  const [signatureDataUrl, setSignatureDataUrl] = useState<string | null>(null);
  const [signatureMode, setSignatureMode] = useState<'canvas' | 'remote'>('canvas');
  const [remoteEmailSent, setRemoteEmailSent] = useState(false);

  // Initialize Canvas
  useEffect(() => {
    if (currentStep === 3 && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.strokeStyle = '#22d3ee'; // Cyan glow ink
        ctx.lineWidth = 2.5;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
      }
    }
  }, [currentStep]);

  // Canvas Drawing Handlers
  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    ctx.beginPath();
    ctx.moveTo(clientX - rect.left, clientY - rect.top);
    setIsDrawing(true);
    setHasSignature(true);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    ctx.lineTo(clientX - rect.left, clientY - rect.top);
    ctx.stroke();
  };

  const stopDrawing = () => {
    if (isDrawing && canvasRef.current) {
      setIsDrawing(false);
      setSignatureDataUrl(canvasRef.current.toDataURL('image/png'));
    }
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    setHasSignature(false);
    setSignatureDataUrl(null);
  };

  return (
    <div className="flex flex-col h-full bg-[#0a121f] text-slate-100 select-none">
      {/* Simulation Steps Bar */}
      <div className="bg-slate-900/95 border-b border-slate-800 px-4 py-2.5 flex items-center justify-between gap-2 overflow-x-auto shrink-0">
        <div className="flex items-center gap-1 sm:gap-2">
          {[
            { num: 1, label: '1. OT Digital' },
            { num: 2, label: '2. Fotos Comprimidas' },
            { num: 3, label: '3. Firma Táctil (Dibuja aquí)' },
            { num: 4, label: '4. Reporte PDF Oficial' }
          ].map((step) => (
            <button
              key={step.num}
              onClick={() => setCurrentStep(step.num)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                currentStep === step.num
                  ? 'bg-gradient-to-r from-cyan-600 to-indigo-600 text-white shadow-md shadow-cyan-600/30'
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
            clearCanvas();
            setRemoteEmailSent(false);
          }}
          className="flex items-center gap-1 text-[11px] font-medium text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer shrink-0"
          title="Reiniciar Simulación"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Reiniciar</span>
        </button>
      </div>

      {/* Main Interactive Screen Area */}
      <div className="flex-1 p-4 sm:p-6 overflow-y-auto">
        {/* STEP 1: Digital OT & Safety Checklist */}
        {currentStep === 1 && (
          <div className="max-w-2xl mx-auto space-y-5 animate-fadeIn">
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl space-y-5">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400">
                    <FileText className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Registro de Orden de Trabajo (OT)</h3>
                    <p className="text-xs text-slate-400">Digitalización de operaciones en terreno sin carpetas de papel</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-cyan-950 text-cyan-300 border border-cyan-800">
                  #OT-2026-0419
                </span>
              </div>

              <div className="space-y-4 text-xs">
                <div>
                  <label className="block text-slate-400 mb-1 font-medium">Proyecto Activo</label>
                  <input
                    type="text"
                    value={projectTitle}
                    onChange={(e) => setProjectTitle(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-400 mb-1 font-medium">Puntos de Red Certificados</label>
                    <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-950 border border-slate-800">
                      <button
                        onClick={() => setNetworkPoints((p) => Math.max(1, p - 1))}
                        className="w-7 h-7 rounded bg-slate-800 hover:bg-slate-700 text-white font-bold cursor-pointer"
                      >
                        -
                      </button>
                      <span className="flex-1 text-center font-mono font-bold text-cyan-400 text-sm">
                        {networkPoints} puntos
                      </span>
                      <button
                        onClick={() => setNetworkPoints((p) => p + 1)}
                        className="w-7 h-7 rounded bg-slate-800 hover:bg-slate-700 text-white font-bold cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-slate-400 mb-1 font-medium">Metraje de Cable Instalado</label>
                    <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-950 border border-slate-800">
                      <button
                        onClick={() => setCableMeters((m) => Math.max(10, m - 10))}
                        className="w-7 h-7 rounded bg-slate-800 hover:bg-slate-700 text-white font-bold cursor-pointer"
                      >
                        -
                      </button>
                      <span className="flex-1 text-center font-mono font-bold text-cyan-400 text-sm">
                        {cableMeters} metros
                      </span>
                      <button
                        onClick={() => setCableMeters((m) => m + 10)}
                        className="w-7 h-7 rounded bg-slate-800 hover:bg-slate-700 text-white font-bold cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Safety / HPT Checklist */}
                <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 space-y-2.5">
                  <span className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                    <HardHat className="w-4 h-4 text-amber-400" />
                    Protocolo de Seguridad Ocupacional & Prevención (HPT)
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] text-slate-300">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={eppChecked.helmet}
                        onChange={(e) => setEppChecked({ ...eppChecked, helmet: e.target.checked })}
                        className="rounded accent-cyan-500"
                      />
                      <span>Casco y Barbiquejo</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={eppChecked.harness}
                        onChange={(e) => setEppChecked({ ...eppChecked, harness: e.target.checked })}
                        className="rounded accent-cyan-500"
                      />
                      <span>Arnés Dieléctrico</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={eppChecked.talk}
                        onChange={(e) => setEppChecked({ ...eppChecked, talk: e.target.checked })}
                        className="rounded accent-cyan-500"
                      />
                      <span>Charla 5 Minutos</span>
                    </label>
                  </div>
                </div>

                <button
                  onClick={() => setCurrentStep(2)}
                  className="w-full py-3 px-4 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-600 to-indigo-600 hover:opacity-90 shadow-md shadow-cyan-600/20 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Continuar a Evidencia Fotográfica</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: Photo Compression for Terrain */}
        {currentStep === 2 && (
          <div className="max-w-2xl mx-auto space-y-5 animate-fadeIn">
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl space-y-5">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400">
                    <Camera className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Evidencia Fotográfica en Terreno</h3>
                    <p className="text-xs text-slate-400">Compresión automática en el navegador (Sin gastar datos 3G/4G)</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  -97% Ahorro de Datos
                </span>
              </div>

              {/* Photo Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="rounded-xl overflow-hidden bg-slate-950 border border-slate-800 space-y-2 p-2">
                  <div className="h-28 rounded-lg bg-slate-800 overflow-hidden relative">
                    <img
                      src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=400&q=80"
                      alt="Rack de Telecomunicaciones"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded text-[9px] bg-black/80 font-mono text-cyan-300">
                      120 KB
                    </span>
                  </div>
                  <p className="text-[11px] font-medium text-slate-300 truncate">Rack Ordenado</p>
                  <p className="text-[10px] text-emerald-400">✓ Comprimido de 4.2 MB</p>
                </div>

                <div className="rounded-xl overflow-hidden bg-slate-950 border border-slate-800 space-y-2 p-2">
                  <div className="h-28 rounded-lg bg-slate-800 overflow-hidden relative">
                    <img
                      src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=400&q=80"
                      alt="Fusión de Fibra Óptica"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded text-[9px] bg-black/80 font-mono text-cyan-300">
                      145 KB
                    </span>
                  </div>
                  <p className="text-[11px] font-medium text-slate-300 truncate">Fusión de Fibra</p>
                  <p className="text-[10px] text-emerald-400">✓ Comprimido de 5.1 MB</p>
                </div>

                <div className="rounded-xl overflow-hidden bg-slate-950 border border-slate-800 space-y-2 p-2">
                  <div className="h-28 rounded-lg bg-slate-800 overflow-hidden relative">
                    <img
                      src="https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=400&q=80"
                      alt="Certificación Fluke"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded text-[9px] bg-black/80 font-mono text-cyan-300">
                      110 KB
                    </span>
                  </div>
                  <p className="text-[11px] font-medium text-slate-300 truncate">Certificación OTDR</p>
                  <p className="text-[10px] text-emerald-400">✓ Comprimido de 3.9 MB</p>
                </div>
              </div>

              {/* Technical description */}
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 space-y-1">
                <p>
                  <strong>💡 Ventaja en terreno:</strong> Los técnicos suelen trabajar en túneles o subterráneos con señal débil. El compresor nativo procesa las fotos directamente en el procesador del teléfono antes de enviarlas, permitiendo subidas instantáneas en redes 3G sin bloquear la interfaz.
                </p>
              </div>

              <button
                onClick={() => setCurrentStep(3)}
                className="w-full py-3 px-4 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-600 to-indigo-600 hover:opacity-90 shadow-md shadow-cyan-600/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Probar Módulo de Firmas Táctiles</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Real Interactive Canvas Signature Pad */}
        {currentStep === 3 && (
          <div className="max-w-2xl mx-auto space-y-5 animate-fadeIn">
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl space-y-5">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400">
                    <PenTool className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Módulo Híbrido de Firma Digital</h3>
                    <p className="text-xs text-slate-400">Firma presencial con el dedo o mouse, o a distancia por correo</p>
                  </div>
                </div>

                {/* Mode Selector Tabs */}
                <div className="flex rounded-lg bg-slate-950 p-1 border border-slate-800">
                  <button
                    onClick={() => setSignatureMode('canvas')}
                    className={`px-3 py-1 rounded-md text-[11px] font-semibold transition-all cursor-pointer ${
                      signatureMode === 'canvas' ? 'bg-cyan-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    En Pantalla
                  </button>
                  <button
                    onClick={() => setSignatureMode('remote')}
                    className={`px-3 py-1 rounded-md text-[11px] font-semibold transition-all cursor-pointer ${
                      signatureMode === 'remote' ? 'bg-cyan-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Remota (Email)
                  </button>
                </div>
              </div>

              {signatureMode === 'canvas' ? (
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-300">
                    <span>
                      ✍️ <strong>Prueba ahora:</strong> Dibuja tu firma en el recuadro usando tu mouse o pantalla táctil:
                    </span>
                    {hasSignature && (
                      <button
                        onClick={clearCanvas}
                        className="text-cyan-400 hover:underline text-[11px] cursor-pointer"
                      >
                        Limpiar lienzo
                      </button>
                    )}
                  </div>

                  {/* The Real Canvas Pad */}
                  <div className="relative border-2 border-dashed border-cyan-500/50 rounded-2xl bg-[#070d18] overflow-hidden shadow-inner">
                    <canvas
                      ref={canvasRef}
                      width={560}
                      height={190}
                      onMouseDown={startDrawing}
                      onMouseMove={draw}
                      onMouseUp={stopDrawing}
                      onMouseLeave={stopDrawing}
                      onTouchStart={startDrawing}
                      onTouchMove={draw}
                      onTouchEnd={stopDrawing}
                      className="w-full h-[190px] cursor-crosshair touch-none"
                    />

                    {!hasSignature && (
                      <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center gap-1.5 text-slate-500">
                        <PenTool className="w-6 h-6 text-cyan-500/40 animate-bounce" />
                        <span className="text-xs font-medium">Dibuja tu firma aquí</span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[11px] text-slate-400">
                      Registro de metadatos: IP encriptada • Timestamp UTC-4
                    </span>
                    <button
                      onClick={() => setCurrentStep(4)}
                      className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-600 to-indigo-600 hover:opacity-90 shadow-md shadow-cyan-600/20 flex items-center gap-2 cursor-pointer"
                    >
                      <span>Estampar en Reporte PDF Oficial</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ) : (
                /* Remote Signature Flow Simulation */
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-4 text-xs">
                  <p className="text-slate-300">
                    Si el cliente o supervisor no está físicamente en la obra, se genera un <strong>token criptográfico de un solo uso</strong> y se envía un enlace a su correo:
                  </p>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      defaultValue="cliente.supervisor@minera.cl"
                      className="flex-1 p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200"
                    />
                    <button
                      onClick={() => setRemoteEmailSent(true)}
                      className="px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-cyan-600 hover:bg-cyan-500 cursor-pointer"
                    >
                      Enviar Enlace
                    </button>
                  </div>

                  {remoteEmailSent && (
                    <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs space-y-1 animate-fadeIn">
                      <p className="font-bold flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4" />
                        Correo enviado con Brevo SMTP
                      </p>
                      <p className="text-[11px] text-slate-300 font-mono">
                        Enlace seguro generado: https://icsa.cl/firmar?token=a8f93e92bf1c... (Validez legal estricta).
                      </p>
                      <button
                        onClick={() => setCurrentStep(4)}
                        className="mt-2 text-xs font-bold text-cyan-400 underline block cursor-pointer"
                      >
                        Continuar para ver el PDF generado
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* STEP 4: Executive PDF Report Preview */}
        {currentStep === 4 && (
          <div className="max-w-2xl mx-auto space-y-5 animate-fadeIn">
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl space-y-5">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
                    <FileCheck className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Acta Oficial en PDF Generada</h3>
                    <p className="text-xs text-slate-400">Documento legal listo para liquidación y cobro administrativo</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  PDF Autogenerado
                </span>
              </div>

              {/* PDF Document Mockup Card */}
              <div className="p-5 rounded-xl bg-white text-slate-900 shadow-2xl font-sans space-y-4 border border-slate-200">
                {/* PDF Header */}
                <div className="flex items-start justify-between border-b border-slate-300 pb-3">
                  <div>
                    <h4 className="text-base font-black tracking-tight text-slate-900">
                      ICSA — INGENIERÍA Y COMUNICACIONES S.A.
                    </h4>
                    <p className="text-[11px] text-slate-600">INFORME TÉCNICO DE TERRENO Y RECEPCIÓN CONFORME</p>
                  </div>
                  <div className="text-right">
                    <span className="font-mono font-bold text-xs text-indigo-700">#OT-2026-0419</span>
                    <p className="text-[10px] text-slate-500">Fecha: Noviembre 2026</p>
                  </div>
                </div>

                {/* PDF Body Summary */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs border-b border-slate-200 pb-3">
                  <div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase">Cliente</span>
                    <p className="font-semibold text-slate-800">{clientName}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase">Proyecto</span>
                    <p className="font-semibold text-slate-800">{projectTitle}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase">Puntos Certificados</span>
                    <p className="font-semibold text-slate-800">{networkPoints} Puntos ({cableMeters}m)</p>
                  </div>
                </div>

                {/* PDF Signature Stamp */}
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-3 rounded-lg border border-slate-200 bg-slate-50 text-center">
                    <span className="text-[10px] text-slate-500 block mb-1">Supervisor ICSA</span>
                    <div className="h-14 flex items-center justify-center font-serif text-slate-700 italic font-bold">
                      Rodrigo C. (Supervisor)
                    </div>
                    <span className="text-[9px] text-slate-400 block border-t border-slate-300 pt-1">
                      Firma Registrada en Terreno
                    </span>
                  </div>

                  <div className="p-3 rounded-lg border-2 border-indigo-200 bg-indigo-50/50 text-center relative">
                    <span className="text-[10px] text-indigo-700 font-bold block mb-1">
                      Recepción Conforme del Cliente
                    </span>
                    <div className="h-14 flex items-center justify-center overflow-hidden">
                      {signatureDataUrl ? (
                        <img
                          src={signatureDataUrl}
                          alt="Firma del Cliente"
                          className="max-h-full max-w-full object-contain filter invert"
                        />
                      ) : (
                        <span className="text-[11px] text-slate-400 italic">
                          (Firma digital estampada correctamente)
                        </span>
                      )}
                    </div>
                    <span className="text-[9px] text-indigo-600 font-medium block border-t border-indigo-200 pt-1">
                      Validez Legal • Token Cifrado
                    </span>
                  </div>
                </div>
              </div>

              {/* Actions Footer */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-800">
                <button
                  onClick={() => {
                    setCurrentStep(1);
                    clearCanvas();
                  }}
                  className="w-full sm:w-auto px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
                >
                  Reiniciar Simulación
                </button>
                <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Copia oficial enviada automáticamente por correo al cliente</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

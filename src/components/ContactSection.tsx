import React, { useState } from 'react';
import { Mail, MessageSquare, Copy, Check, Send, MessageCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Prepares mailto as universal fallback
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject || `Contacto desde Portafolio de ${formData.name}`
    )}&body=${encodeURIComponent(
      `Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Contacto Directo</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          ¿Tienes una idea o proyecto en mente?
        </h2>
        <p className="text-base sm:text-lg text-slate-300">
          Estoy disponible para consultoría informática, arquitectura de plataformas SaaS y proyectos de ingeniería de software.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Contact Info & Socials */}
        <div className="lg:col-span-5 space-y-4">
          {/* Email Quick Copy Card */}
          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 shadow-lg">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
              <Mail className="w-4 h-4 text-indigo-400" />
              Correo Electrónico
            </h4>
            <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-slate-950/70 border border-slate-800">
              <span className="text-sm font-mono text-slate-200 truncate">
                {personalInfo.email}
              </span>
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shrink-0"
                title="Copiar al portapapeles"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-300" />
                    <span>¡Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Social and Messaging Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {personalInfo.github && (
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 hover:bg-slate-800/60 transition-all group"
              >
                <div className="p-2.5 rounded-lg bg-slate-800 text-slate-300 group-hover:text-white group-hover:scale-105 transition-all">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-white">GitHub</h5>
                  <p className="text-xs text-slate-400">Ver repositorios</p>
                </div>
              </a>
            )}

            {personalInfo.linkedin && (
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 hover:bg-slate-800/60 transition-all group"
              >
                <div className="p-2.5 rounded-lg bg-slate-800 text-slate-300 group-hover:text-cyan-400 group-hover:scale-105 transition-all">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-white">LinkedIn</h5>
                  <p className="text-xs text-slate-400">Conectar perfil</p>
                </div>
              </a>
            )}

            {personalInfo.whatsapp && (
              <a
                href={`https://wa.me/${personalInfo.whatsapp.replace(/\+/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 hover:bg-slate-800/60 transition-all group sm:col-span-2"
              >
                <div className="p-2.5 rounded-lg bg-emerald-950/60 text-emerald-400 border border-emerald-800/60 group-hover:scale-105 transition-all">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-white">WhatsApp</h5>
                  <p className="text-xs text-slate-400">Chat directo e instantáneo</p>
                </div>
              </a>
            )}
          </div>
        </div>

        {/* Right: Message Form */}
        <div className="lg:col-span-7 bg-slate-900/70 border border-slate-800/80 rounded-2xl p-6 sm:p-8 shadow-xl">
          <h3 className="text-xl font-bold text-white mb-2">Enviar un Mensaje</h3>
          <p className="text-xs sm:text-sm text-slate-400 mb-6">
            Completa los datos y se abrirá directamente tu cliente de correo para enviar tu mensaje.
          </p>

          {submitted && (
            <div className="mb-6 p-4 rounded-xl bg-emerald-950/60 border border-emerald-700 text-emerald-300 text-sm flex items-center gap-2">
              <Check className="w-5 h-5 shrink-0" />
              <span>
                ¡Gracias! Se ha generado tu mensaje para ser enviado.
              </span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Tu Nombre
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ej: Carlos Silva"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Tu Correo
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Ej: carlos@empresa.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Asunto / Tipo de Proyecto
              </label>
              <input
                type="text"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Ej: Plataforma SaaS empresarial o proyecto de software"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Mensaje o Descripción
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Cuéntame sobre las metas, funciones necesarias o tiempos del proyecto..."
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-600/30 transition-all hover:scale-[1.01] active:scale-[0.99]"
            >
              <Send className="w-4 h-4" />
              <span>Enviar Mensaje</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

import type { PersonalInfo, Project, SkillGroup, ExperienceItem, ProfessionalCompetency } from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Ramiro Contreras González',
  role: 'Ingeniero Informático | Ingeniería de Soluciones & Transformación Digital',
  education: 'Ingeniería en Informática — Universidad de Las Américas',
  tagline: 'Diseño, desarrollo e implementación de plataformas SaaS, sistemas de gestión operativa y soluciones de software orientadas a optimizar procesos, automatizar flujos de trabajo e integrar Inteligencia Artificial.',
  bio: [
    'Ingeniero en Informática de la Universidad de Las Américas, enfocado en la ingeniería de soluciones tecnológicas, desarrollo de software empresarial y transformación digital.',
    'Mi trabajo se centra en comprender los desafíos operativos y estratégicos de las organizaciones para diseñar e implementar soluciones tecnológicas que optimicen procesos, automaticen tareas y mejoren la gestión de sus operaciones.',
    'Cuento con experiencia en el diseño y desarrollo de plataformas SaaS, sistemas de gestión empresarial, aplicaciones web y herramientas digitales, participando en distintas etapas del ciclo de desarrollo: análisis de requerimientos, diseño de arquitectura, modelado de datos, implementación, integración de servicios y construcción de interfaces.',
    'He liderado proyectos como plataformas para optimizar la gestión de equipos técnicos en terreno, sistemas de inventario y trazabilidad para empresas de ingeniería, portales web corporativos y herramientas de automatización de procesos operativos.',
    'Mi enfoque combina visión técnica y comprensión de negocio: utilizo la tecnología como un habilitador para resolver problemas reales, mejorar la productividad y generar impacto medible en las organizaciones.'
  ],
  location: 'Chile',
  workMode: 'Remoto / Híbrido',
  availability: 'Disponible para oportunidades profesionales y proyectos tecnológicos.',
  email: 'contrerasramiro1098@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ramiro-contreras-gonzález-656077363/',
  whatsapp: '+56950826763',
  availableForHire: true,
  completedProjectsCount: '4'
};

export const projectsData: Project[] = [
  {
    id: 'onlinedesk-gestion-requerimientos',
    title: 'OnlineDesk — Plataforma SaaS de Gestión de Solicitudes y Tiempos de Atención',
    category: 'software',
    projectType: 'Plataforma SaaS para Gestión y Atención de Clientes',
    badge: 'Plataforma SaaS • Control en Vivo',
    shortDescription: 'Plataforma SaaS para organizar y responder solicitudes de clientes en tiempo real. Por cada movimiento del ticket e interacción en el chat, envía notificaciones automáticas al correo con un PDF de trazabilidad completa.',
    fullDescription: 'OnlineDesk es una plataforma SaaS diseñada para que las empresas gestionen requerimientos técnicos y solicitudes de sus clientes de manera ordenada, transparente y puntual. Permite organizar el trabajo en un tablero visual donde cada caso avanza por etapas claras (Ingresado, En proceso, En revisión y Terminado). Cuenta con un cronómetro inteligente que mide los tiempos de respuesta comprometidos con cada cliente y se pausa automáticamente cuando la solución está en revisión para no perjudicar la evaluación del equipo técnico. Además, por cada movimiento de etapa del ticket e interacción en el chat con el técnico, el sistema envía una notificación automática al correo del cliente adjuntando un informe en PDF con la trazabilidad completa del requerimiento. Incorpora también Inteligencia Artificial para clasificar el tipo de solicitud y asignarla al especialista con menor carga de trabajo, chat en vivo sin demoras y compatibilidad con celulares como aplicación instalable que envía notificaciones.',
    technologies: [
      'Next.js & React',
      'TypeScript',
      'Base de Datos en la Nube',
      'Actualizaciones en Tiempo Real',
      'Inteligencia Artificial (IA)',
      'Diseño para Celulares y PC',
      'Notificaciones al Celular (PWA)',
      'Gráficos y Métricas de Rendimiento',
      'Generación de Informes en PDF'
    ],
    featured: true,
    liveUrl: 'https://gesti-n-de-requerimientos-app.vercel.app',
    highlights: [
      'Notificaciones al Correo & PDF con Trazabilidad: Por cada movimiento del ticket e interacción en el chat con el técnico, llega toda la información directamente al correo del cliente junto con un PDF de trazabilidad completa.',
      'Tablero Visual en Vivo: Las solicitudes avanzan ordenadamente por columnas (Ingresado, En proceso, En revisión y Terminado) actualizándose al instante sin recargar la página.',
      'Reloj Inteligente de Tiempos de Respuesta: Mide con precisión los plazos acordados con cada cliente y se pausa automáticamente mientras el cliente revisa el trabajo.',
      'Chat en Vivo Instantáneo: Comunicación directa entre el cliente y el técnico con mensajes que aparecen al instante (0 segundos de espera).',
      'Asignación Inteligente: Clasifica la falla según su categoría técnica y la asigna al especialista disponible con menor cantidad de tareas pendientes.',
      'Notificaciones al Celular: Funciona como aplicación en teléfonos Android e iPhone, avisando de inmediato con alertas en pantalla.',
      'Privacidad y Seguridad por Empresa: Cada cliente accede únicamente a sus propias solicitudes en un entorno seguro y aislado.',
      'Reportes Ejecutivos en PDF: Métricas de puntualidad, volumen de solicitudes y descarga de actas de servicio en un clic.'
    ],
    challenges: [
      {
        title: 'Garantizar Mensajería Instantánea sin Demoras',
        challenge: 'El guardado tradicional de mensajes y envío de correos tomaba varios segundos, congelando la conversación.',
        solution: 'Se implementó un sistema de actualización instantánea en pantalla (0 ms) combinado con transmisión en vivo para que los mensajes aparezcan de inmediato.'
      },
      {
        title: 'Notificaciones Directas en Celulares iPhone y Android',
        challenge: 'Muchos navegadores bloquean las notificaciones automáticas si la configuración no está optimizada para móviles.',
        solution: 'Se diseñó un asistente que guía al usuario para agregar la aplicación a la pantalla de inicio de su teléfono y activar alertas oficiales en vivo.'
      },
      {
        title: 'Medición Justa de los Tiempos de Entrega',
        challenge: 'Evitar que el tiempo que un cliente se demore en revisar una solución perjudique la calificación de puntualidad del técnico.',
        solution: 'Se programó una pausa automática del cronómetro en cuanto la solución es enviada al cliente, reactivándose solo si el cliente solicita correcciones.'
      }
    ],
    image: '/onlinedesk-logo.png',
    isLogo: true,
    accentColor: 'from-blue-600 via-indigo-600 to-pink-600'
  },
  {
    id: 'software-gestion-operativa-icsa',
    title: 'ICSA — Plataforma SaaS para Gestión de Órdenes de Trabajo en Terreno',
    category: 'software',
    projectType: 'Plataforma SaaS & Aplicación Móvil para Terreno',
    badge: 'Plataforma SaaS • Cero Papel',
    shortDescription: 'Plataforma SaaS diseñada para digitalizar la operación en terreno de cuadrillas de telecomunicaciones e ingeniería. Permite reemplazar los partes en papel por órdenes de trabajo digitales con captura de fotos, firmas en pantalla táctil o a distancia por correo, control de inventario de herramientas y checklists de seguridad laboral. Al finalizar cada trabajo, el sistema consolida la información y envía automáticamente un informe formal en PDF al cliente.',
    fullDescription: 'Plataforma SaaS empresarial creada para que empresas de ingeniería y telecomunicaciones eliminen al 100% las carpetas de papel, gestionen sus cuadrillas en la calle, controlen herramientas caras y envíen reportes a sus clientes al instante. Antes, los técnicos andaban con hojas de papel que se rompían, se manchaban o se perdían, retrasando las cobranzas por semanas. Con esta solución, el técnico solo necesita su teléfono o tablet: registra cables y equipos, sube fotos de evidencia comprimidas automáticamente para no agotar sus datos móviles, hace que el cliente firme con el dedo en la pantalla (o envía un enlace seguro por correo para que firme a distancia) y genera de inmediato un informe formal en PDF. Además, incluye checklists de seguridad (casco, arnés, guantes), registro de charlas diarias de 5 minutos con firmas para evitar multas laborales, control de inventario de herramientas de alto valor con firma obligatoria de devolución y cierre de proyectos en un clic mediante una "Acta Final" consolidada lista para cobrar.',
    technologies: [
      'Next.js 15 & React 19',
      'PostgreSQL / Supabase',
      'Firma en Pantalla Táctil con el Dedo',
      'Compresión Automática de Fotos',
      'Generación Automática de Reportes en PDF',
      'Tailwind CSS & Shadcn UI',
      'Validación Segura de Datos',
      'Envío Automático de Correos'
    ],
    featured: true,
    liveUrl: 'https://demostracion-app-icsa-tino0rcgs-projects.vercel.app/dashboard?tour=true&step=1',
    highlights: [
      'Órdenes de Trabajo Digitales (Adiós al Lápiz y Papel): Registro de cables y equipos, fotos de respaldo comprimidas automáticamente para redes 3G/4G y generación instantánea del informe formal en PDF.',
      'Sistema Híbrido de Firmas (En Pantalla o a Distancia): Firma presencial con el dedo en la pantalla táctil o envío de enlace seguro por correo para firma remota desde cualquier celular u oficina.',
      'Seguridad y Prevención de Accidentes (Cumplimiento de Ley): Checklists de EPP antes de iniciar trabajos de riesgo y registro de charlas de seguridad de 5 minutos con firmas digitales de asistencia para mutualidades.',
      'Control de Herramientas Caras (Inventario sin Pérdidas): Trazabilidad de quién tiene cada equipo de alto costo (fusionadoras de fibra, instrumentos de medición) con firma obligatoria de devolución.',
      'Cierre de Proyectos en un Solo Clic (Acta Final): Agrupa automáticamente todas las visitas de un proyecto y consolida materiales, fotos y firmas en una única acta de liquidación lista para cobrar.',
      'Envío Automático de Informes al Mandante: Al cerrar la orden de trabajo, el cliente recibe de inmediato el informe formal en PDF adjunto a su correo electrónico.'
    ],
    challenges: [
      {
        title: 'Firma a Distancia Segura sin Necesidad de Cuenta',
        challenge: 'Permitir que un cliente o supervisor que no está en la obra/terreno firme el reporte oficial sin tener que crearse una cuenta ni recordar contraseñas.',
        solution: 'Generación de enlaces seguros con tokens criptográficos de un solo uso con fecha de expiración, registrando IP y hora para validez legal estricta.'
      },
      {
        title: 'Fotos de Evidencia sin Agotar Datos Móviles en Terreno',
        challenge: 'Subir múltiples fotos de respaldo desde trabajos en terreno con señal móvil débil sin consumir el plan de datos de los técnicos ni congelar la app.',
        solution: 'Compresión y optimización automática de imágenes directamente en el navegador del teléfono antes de enviarlas al servidor.'
      },
      {
        title: 'Generación Instantánea de Actas e Informes Formales en PDF',
        challenge: 'Consolidar semanas de visitas, tablas de materiales, fotos y firmas en un documento corporativo formal sin demoras de días a fin de mes.',
        solution: 'Motor dinámico con jsPDF y AutoTable que "dibuja" el PDF en segundos y lo envía automáticamente por correo al mandante al cerrar el trabajo.'
      }
    ],
    image: '/icsa-logo.png',
    isLogo: true,
    logoBg: 'bg-white',
    accentColor: 'from-blue-600 via-teal-600 to-cyan-600'
  },
  {
    id: 'web-online-system',
    title: 'ONLINE System — Plataforma Web con IA Autónoma',
    category: 'web',
    projectType: 'Página Web Corporativa con IA Autónoma',
    badge: 'Web & Automatización con Gemini API',
    shortDescription: 'Página web corporativa para consultora TI chilena, equipada con la API de Google Gemini para generar contenido técnico autónomo que potencia el posicionamiento SEO de la web.',
    fullDescription: 'Página web corporativa y comercial diseñada para ONLINE System, consultora chilena de servicios tecnológicos para empresas (redes, ciberseguridad, servidores en la nube y Softland ERP). Con la ayuda de la API de Google Gemini, desarrollé un sistema inteligente que automatiza 5 tareas clave sin intervención humana: investiga novedades tecnológicas de fuentes líderes mundiales (Google, Microsoft, Amazon, NVIDIA), redacta artículos completos en español para empresas, dibuja diagramas visuales explicativos, supervisa la calidad editorial antes de publicar (>8.5/10) y depura automáticamente publicaciones de más de 30 días. Esta constante generación de contenido técnico especializado potencia directamente el posicionamiento SEO de la página web en Google, atrayendo tráfico orgánico y clientes comerciales. Además, cuenta con un catálogo rediseñado de 10 servicios, una calculadora interactiva de pérdidas de dinero (ROI) con reportes descargables en PDF y un diseño web moderno y responsivo.',
    technologies: [
      'Next.js 15 & React 19',
      'TypeScript',
      'API Google Gemini',
      'Tailwind CSS & Radix UI',
      'Gráficos Interactivos y Calculadora ROI',
      'Posicionamiento en Google (SEO)',
      'Generación de Informes en PDF'
    ],
    featured: true,
    liveUrl: 'https://www.onlinesystem.cl',
    highlights: [
      'Blog Autónomo con la API de Google Gemini para Potenciar el SEO: Automatiza 5 funciones clave (investigación de fuentes oficiales, redacción en español para empresas, dibujo de diagramas explicativos, supervisión de calidad y limpieza automática de artículos vencidos), impulsando continuamente el posicionamiento orgánico en Google y la visibilidad de la web.',
      'Diseño Web Moderno y Responsivo: Interfaz visual limpia y profesional optimizada tanto para celulares como computadores, facilitando una lectura clara y cómoda de servicios y propuestas comerciales.',
      'Catálogo de 10 Servicios de TI Rediseñados: Estructura clara con beneficios cuantificables, entregables numerados paso a paso y 3 opciones de contratación (desde diagnóstico hasta soporte 24/7).',
      'Calculadora Interactiva de Pérdidas de Dinero (ROI): Permite a los dueños de negocios calcular cuánto dinero pierden al año por fallas tecnológicas y descargar un reporte profesional en PDF.',
      'Preparada para Primeros Lugares en Google (SEO): Configuración interna con datos estructurados para posicionarse en búsquedas de servicios de soporte técnico y redes en Chile.'
    ],
    challenges: [
      {
        title: 'Automatización de Contenido Técnico con la API de Gemini para SEO',
        challenge: 'Mantener un blog corporativo constantemente actualizado con noticias y guías técnicas reales para ganar autoridad en Google sin requerir horas manuales de redacción.',
        solution: 'Integración de la API de Google Gemini para buscar en fuentes líderes, redactar con consejos prácticos para empresas, generar diagramas visuales y validar que cada publicación supere nota 8.5/10, mejorando sustancialmente el SEO de la web.'
      },
      {
        title: 'Estrategia de Posicionamiento Orgánico y Atracción de Clientes',
        challenge: 'Posicionar la marca en Google frente a competidores de TI establecidos y convertir visitas orgánicas en solicitudes de cotización.',
        solution: 'Generación automatizada de artículos ricos en palabras clave del sector tecnológico chileno, combinada con enlaces directos hacia los servicios y herramientas de contacto.'
      },
      {
        title: 'Calculadora de Pérdidas y Reportes en PDF',
        challenge: 'Permitir que los clientes comprendan de forma inmediata el costo oculto de las caídas de sistema en su negocio.',
        solution: 'Desarrollo de una calculadora interactiva que simula pérdidas en tiempo real y genera un informe PDF profesional con jsPDF listo para presentar a directorio.'
      }
    ],
    image: '/logo-online-system.png',
    isLogo: true,
    logoBg: 'bg-white',
    accentColor: 'from-emerald-500 via-teal-600 to-cyan-600'
  },
  {
    id: 'web-colectivo-oft',
    title: 'Colectivo OFT — Estudio & Colectivo de Arquitectura',
    category: 'web',
    projectType: 'Sitio Web Creativo & Portafolio de Arquitectura',
    badge: 'Arquitectura & Editorial',
    shortDescription: 'Sitio web de diseño editorial y visual para Colectivo OFT, colectivo de arquitectura dedicado al diseño, planimetría técnica, renders 3D fotorrealistas y modelado digital.',
    fullDescription: 'Plataforma web de identidad visual y portafolio interactivo desarrollada para Colectivo OFT, un estudio y colectivo de arquitectura dedicado a transformar ideas y planos en representaciones gráficas de alto impacto visual. El sitio web combina un diseño sobrio y minimalista de estándar editorial con un fondo de video cinematográfico en el hero, transiciones fluidas, galerías interactivas de proyectos destacados (mobiliario urbano con circularidad de madera, recuperación patrimonial en Estación Central), exhibición de servicios especializados (planimetría, modelado 3D, renders y diagramas conceptuales), integración del ecosistema de software profesional (AutoCAD, SketchUp, Rhinoceros, Photoshop, Revit, Twinmotion) y canales directos de cotización y contacto comercial.',
    technologies: [
      'Next.js & React',
      'TypeScript',
      'Tailwind CSS',
      'Diseño Editorial & Tipografía Serif',
      'Streaming de Video de Fondo (Hero)',
      'Animaciones y Transiciones Suaves',
      'Optimización de Imágenes WebP',
      'Diseño Adaptable a Celulares y Computadores'
    ],
    featured: true,
    liveUrl: 'https://colectivooft.cl',
    highlights: [
      'Experiencia Visual Cinematográfica: Hero con video de fondo en alta resolución, tipografías serif de corte editorial y transiciones suaves inspiradas en publicaciones arquitectónicas de vanguardia.',
      'Catálogo de Servicios Especializados: Módulos interactivos para Planimetría técnica, Renders 3D fotorrealistas, Diagramas analíticos y Modelado espacial complejo.',
      'Galería Interactiva de Proyectos: Exhibición de obras reales con fichas detalladas de memoria de diseño, impacto urbano y recuperación patrimonial.',
      'Mapeo de Herramientas Técnicas: Visualización del ecosistema de software BIM y renderizado profesional (AutoCAD, Rhinoceros, Revit, Twinmotion, Adobe Suite).',
      'Canal de Conversión y Cotizaciones: Flujo de contacto directo para estudiantes y oficinas de arquitectura, optimizado para consultas de proyectos académicos y profesionales.'
    ],
    challenges: [
      {
        title: 'Streaming de Video Hero y Carga Ultra-Rápida',
        challenge: 'Integrar un video de alta definición en el hero sin ralentizar la carga inicial ni penalizar las métricas Core Web Vitals en conexiones móviles.',
        solution: 'Implementación de póster de carga diferida (hero-poster.jpg), compresión de video con codec h.264/MP4 optimizado para web, y carga asíncrona de recursos multimedia.'
      },
      {
        title: 'Equilibrio entre Estética Editorial y Usabilidad Responsiva',
        challenge: 'Mantener la elegancia del espaciado arquitectónico, proporciones áureas y tipografía serif en pantallas pequeñas de smartphones sin desbordar el contenido.',
        solution: 'Sistema de tipografía y espaciado fluido con Tailwind CSS, combinando tamaños dinámicos con clamp() y navegación móvil minimalista tipo drawer.'
      },
      {
        title: 'Presentación Fotorrealista de Renders y Planimetrías',
        challenge: 'Exhibir planos con líneas muy finas y renders 3D detallados manteniendo la nitidez sin que las imágenes pesen decenas de megabytes.',
        solution: 'Uso de Next.js Image Optimization con srcSet multi-resolución y formatos WebP/AVIF, reduciendo el peso de las imágenes en un 70% preservando la calidad gráfica.'
      }
    ],
    image: '/colectivo-oft.jpg',
    accentColor: 'from-amber-600 via-stone-700 to-amber-900'
  }
];

export const skillsData: SkillGroup[] = [
  {
    category: 'Inteligencia Artificial & Aplicaciones Web Modernas',
    description: 'Automatización con inteligencia artificial (OpenAI, Claude, DeepSeek, Groq, Ollama), aplicaciones rápidas en tiempo real y soluciones interactivas.',
    skills: [
      { name: 'Modelos de IA: OpenAI, Claude (Anthropic) & DeepSeek', level: 'Especialidad' },
      { name: 'Inferencia con Groq & IA Local con Ollama', level: 'Especialidad' },
      { name: 'API Google Gemini & Automatización con IA', level: 'Especialidad' },
      { name: 'Next.js 15 & React 19', level: 'Avanzado' },
      { name: 'TypeScript & JavaScript Moderno', level: 'Avanzado' },
      { name: 'Actualización en Tiempo Real (WebSockets)', level: 'Avanzado' },
      { name: 'Aplicaciones Móviles Web (PWA) & Notificaciones Push', level: 'Avanzado' },
      { name: 'Diseño Adaptable para Celulares y Computadores', level: 'Avanzado' }
    ]
  },
  {
    category: 'Software de Gestión para Empresas & Operaciones',
    description: 'Digitalización de procesos, órdenes de trabajo, control de tiempos de atención y firmas digitales.',
    skills: [
      { name: 'Gestión de Solicitudes y Control de Tiempos de Respuesta', level: 'Especialidad' },
      { name: 'Órdenes de Trabajo Digitales & Seguridad Laboral', level: 'Especialidad' },
      { name: 'Firmas Digitales (En Pantalla con el Dedo o por Correo)', level: 'Avanzado' },
      { name: 'Generación Automática de Informes en PDF', level: 'Avanzado' },
      { name: 'Control de Inventario & Devolución de Herramientas', level: 'Avanzado' },
      { name: 'Desarrollo de Software y Automatizaciones', level: 'Avanzado' }
    ]
  },
  {
    category: 'Cloud Computing, Bases de Datos Relacionales & Ciberseguridad',
    description: 'Infraestructura cloud, bases de datos relacionales SQL (PostgreSQL), ciberseguridad, IoT y métricas de negocio.',
    skills: [
      { name: 'Bases de Datos Relacionales SQL (PostgreSQL)', level: 'Avanzado' },
      { name: 'Cloud Computing & Despliegues en la Nube', level: 'Avanzado' },
      { name: 'Ciberseguridad & Protección de Datos', level: 'Avanzado' },
      { name: 'IoT (Internet de las Cosas & Conectividad)', level: 'Avanzado' },
      { name: 'Almacenamiento en Supabase & APIs', level: 'Avanzado' },
      { name: 'Posicionamiento en Google (SEO para Empresas)', level: 'Avanzado' }
    ]
  },
  {
    category: 'Herramientas de Trabajo & Entorno de Desarrollo',
    description: 'Herramientas prácticas utilizadas en el día a día para programar, gestionar versiones y publicar proyectos.',
    skills: [
      { name: 'Git & GitHub (Control de Versiones y Código)', level: 'Avanzado' },
      { name: 'Visual Studio Code (Editor & Entorno de Trabajo)', level: 'Avanzado' },
      { name: 'Node.js & NPM', level: 'Avanzado' },
      { name: 'Vercel (Despliegue y Hosting en la Nube)', level: 'Avanzado' },
      { name: 'Pruebas de Conexión e Integración (Postman)', level: 'Avanzado' }
    ]
  }
];

export const competenciasData: ProfessionalCompetency[] = [
  {
    title: 'Ingeniería de Soluciones Tecnológicas',
    items: [
      'Análisis de necesidades empresariales y diseño de soluciones digitales',
      'Optimización y automatización de procesos operativos',
      'Consultoría tecnológica y transformación digital'
    ]
  },
  {
    title: 'Arquitectura y Desarrollo de Software',
    items: [
      'Diseño y desarrollo de plataformas SaaS y aplicaciones web',
      'Modelado de bases de datos relacionales SQL (PostgreSQL) y diseño de APIs',
      'Implementación de arquitecturas modernas y escalables'
    ]
  },
  {
    title: 'Datos, Automatización e Inteligencia Artificial',
    items: [
      'Modelos y Ecosistema de IA: OpenAI (GPT), Claude (Anthropic), DeepSeek, Groq y Ollama (IA local)',
      'Integración de herramientas de IA aplicada a procesos de negocio',
      'Automatización de flujos de trabajo e integración de servicios',
      'Análisis y estructuración de datos para toma de decisiones',
      'Diseño e implementación de procesos ETL (Extracción, Transformación y Carga)',
      'Análisis de datos y procesamiento con Python y lenguaje R'
    ]
  },
  {
    title: 'Cloud Computing, Ciberseguridad & IoT',
    items: [
      'Arquitectura Cloud Computing e integración de infraestructura en la nube',
      'Ciberseguridad, protección de información y normativas de seguridad TI',
      'Internet de las Cosas (IoT) y conectividad de dispositivos inteligentes',
      'Integración de servicios, despliegue continuo y adopción tecnológica'
    ]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    role: 'Plataforma SaaS & Gestión Operativa',
    organization: 'OnlineDesk & ICSA Ingeniería',
    description: 'Plataforma SaaS para gestión operativa de servicios técnicos, control de inventario y trazabilidad de materiales.',
    technologies: ['Next.js 15', 'React 19', 'Supabase Realtime', 'Firmas en Pantalla', 'Reportes PDF', 'PostgreSQL', 'TypeScript']
  },
  {
    role: 'Portal Corporativo & Asesoría Tecnológica',
    organization: 'ONLINE System & Consultoría TI',
    description: 'Desarrollo de portal corporativo y asesoría tecnológica para posicionamiento y servicios digitales.',
    technologies: ['Next.js 15', 'React 19', 'Tailwind CSS', 'Google Gemini API', 'SEO Google']
  },
  {
    role: 'Plataforma Web & Catálogo Digital',
    organization: 'Colectivo OFT | Arquitectura',
    description: 'Plataforma web para exhibición de proyectos arquitectónicos y catálogo digital interactivo.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Animaciones Web', 'Diseño Editorial']
  }
];


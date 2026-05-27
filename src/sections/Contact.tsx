import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Clock,
  Instagram, 
  ExternalLink,
  FileQuestion,
  CreditCard,
  CalendarCheck,
  Send,
  X
} from 'lucide-react';
import ScrollReveal from '@/components/effects/ScrollReveal';
import AnimatedText from '@/components/effects/AnimatedText';

// Facebook Icon Component
const FacebookIcon = ({ size = 24, className = '', color }: { size?: number; className?: string; color?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill={color || 'currentColor'} 
    className={className}
  >
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

interface ContactProps {
  currentLang: string;
}

const translations = {
  es: {
    title: 'Todo lo que necesitas para contactarnos',
    subtitle: 'Aquí encontrarás de forma rápida nuestro WhatsApp, correo, ubicación y horario de atención.',
    contactPanel: {
      title: 'Habla con Mel\'s Travel',
      whatsapp: { label: 'WhatsApp', value: '+595 992 030 554', action: 'Llenar el formulario' },
      email: { label: 'Correo electrónico', value: 'melstravel25@gmail.com', action: 'Llenar el formulario' },
      office: { label: 'Dirección', value: 'Av. Campo Vía, Área 3 - Ciudad del Este' },
      hours: { label: 'Horario de atención', value: 'Lunes a Viernes: 8:00-12:00 / 14:00-17:00\nSábado: 8:00-12:00' },
    },
    contactUs: 'Contáctanos',
    faq: {
      title: 'Preguntas frecuentes',
      items: [
        {
          icon: FileQuestion,
          question: '¿Necesito pasaporte para viajar?',
          answer: 'Depende del destino. Para Brasil y Argentina normalmente solo necesitas tu cédula o documento válido. Para destinos internacionales como Europa o Caribe se requiere pasaporte.',
        },
        {
          icon: CreditCard,
          question: '¿Métodos de pago?',
          answer: 'Aceptamos guaraníes y dólares para pagos en efectivo, transferencia bancaria, QR y las principales tarjetas de crédito y débito.',
        },
        {
          icon: CalendarCheck,
          question: '¿Cómo reservo mi viaje?',
          answer: 'Simplemente completa el formulario de contacto donde se indica, usando el botón de correo electrónico o WhatsApp. Te ayudaremos a encontrar la mejor opción y nos encargaremos de todo lo relacionado con tu reserva.',
        },
      ],
    },
    forms: {
      whatsappTitle: 'Solicitar cotización por WhatsApp',
      emailTitle: 'Solicitar cotización por correo',
      intro: 'Hola, me gustaría recibir una cotización de viaje.',
      intro2: 'Comparto la información para recibir opciones más alineadas a mi perfil:',
      name: '1. Nombre completo',
      whatsapp: '2. WhatsApp',
      email: '2. Correo electrónico',
      destination: '3. Destino o tipo de viaje de interés',
      date: '4. Fecha aproximada del viaje',
      passengers: '5. Cantidad de pasajeros',
      duration: '6. Duración estimada',
      budget: '7. Presupuesto aproximado por persona',
      preferences: '8. Preferencias importantes',
      passport: '9. ¿Cuenta con pasaporte vigente?',
      comments: '10. Comentarios adicionales',
      closing: 'Muchas gracias.',
      send: 'Enviar',
      cancel: 'Cancelar',
    },
  },
  pt: {
    title: 'Tudo o que você precisa para falar conosco',
    subtitle: 'Aqui você encontra rapidamente nosso WhatsApp, e-mail, localização e horário de atendimento.',
    contactPanel: {
      title: 'Fale com a Mel\'s Travel',
      whatsapp: { label: 'WhatsApp', value: '+595 992 030 554', action: 'Preencher o formulário' },
      email: { label: 'E-mail', value: 'melstravel25@gmail.com', action: 'Preencher o formulário' },
      office: { label: 'Endereço', value: 'Av. Campo Vía, Área 3 - Ciudad del Este' },
      hours: { label: 'Horário de atendimento', value: 'Segunda a Sexta: 8:00-12:00 / 14:00-17:00\nSábado: 8:00-12:00' },
    },
    contactUs: 'Contate-nos',
    faq: {
      title: 'Perguntas frequentes',
      items: [
        {
          icon: FileQuestion,
          question: 'Preciso de passaporte para viajar?',
          answer: 'Depende do destino. Para Brasil e Argentina normalmente é possível viajar apenas com documento de identidade válido. Para destinos internacionais como Europa ou Caribe é necessário passaporte.',
        },
        {
          icon: CreditCard,
          question: 'Formas de pagamento',
          answer: 'Aceitamos guaranis e dólares para pagamentos em dinheiro, transferência bancária, QR e as principais cartões de crédito e débito.',
        },
        {
          icon: CalendarCheck,
          question: 'Como faço para reservar minha viagem?',
          answer: 'Simplesmente preencha o formulário de contato onde indicado, usando o botão de e-mail ou WhatsApp. Vamos ajudar você a encontrar a melhor opção e cuidaremos de tudo relacionado à sua reserva.',
        },
      ],
    },
    forms: {
      whatsappTitle: 'Solicitar cotação pelo WhatsApp',
      emailTitle: 'Solicitar cotação por e-mail',
      intro: 'Olá, gostaria de receber uma cotação de viagem.',
      intro2: 'Compartilho as informações para receber opções mais alinhadas ao meu perfil:',
      name: '1. Nome completo',
      whatsapp: '2. WhatsApp',
      email: '2. E-mail',
      destination: '3. Destino ou tipo de viagem de interesse',
      date: '4. Data aproximada da viagem',
      passengers: '5. Quantidade de passageiros',
      duration: '6. Duração estimada',
      budget: '7. Orçamento aproximado por pessoa',
      preferences: '8. Preferências importantes',
      passport: '9. Possui passaporte válido?',
      comments: '10. Comentários adicionais',
      closing: 'Muito obrigado.',
      send: 'Enviar',
      cancel: 'Cancelar',
    },
  },
  en: {
    title: 'Everything you need to contact us',
    subtitle: 'Here you can quickly find our WhatsApp, email, location and opening hours.',
    contactPanel: {
      title: 'Talk to Mel\'s Travel',
      whatsapp: { label: 'WhatsApp', value: '+595 992 030 554', action: 'Fill out the form' },
      email: { label: 'Email', value: 'melstravel25@gmail.com', action: 'Fill out the form' },
      office: { label: 'Address', value: 'Av. Campo Vía, Área 3 - Ciudad del Este' },
      hours: { label: 'Opening hours', value: 'Monday to Friday: 8:00-12:00 / 14:00-17:00\nSaturday: 8:00-12:00' },
    },
    contactUs: 'Contact us',
    faq: {
      title: 'Frequently asked questions',
      items: [
        {
          icon: FileQuestion,
          question: 'Do I need a passport to travel?',
          answer: 'It depends on the destination. For Brazil and Argentina you can usually travel with a valid national ID. For destinations such as Europe or the Caribbean, a passport is required.',
        },
        {
          icon: CreditCard,
          question: 'Payment methods',
          answer: 'We accept payments in guaraníes and US dollars in cash, bank transfer, QR payments and the main credit and debit cards.',
        },
        {
          icon: CalendarCheck,
          question: 'How do I book my trip?',
          answer: 'Simply fill out the contact form where indicated, using the email or WhatsApp button. We will help you find the best option and take care of everything related to your reservation.',
        },
      ],
    },
    forms: {
      whatsappTitle: 'Request a quote via WhatsApp',
      emailTitle: 'Request a quote via email',
      intro: 'Hello, I would like to receive a travel quote.',
      intro2: 'I share the information to receive options more aligned with my profile:',
      name: '1. Full name',
      whatsapp: '2. WhatsApp',
      email: '2. Email',
      destination: '3. Destination or type of trip of interest',
      date: '4. Approximate travel date',
      passengers: '5. Number of passengers',
      duration: '6. Estimated duration',
      budget: '7. Approximate budget per person',
      preferences: '8. Important preferences',
      passport: '9. Do you have a valid passport?',
      comments: '10. Additional comments',
      closing: 'Thank you very much.',
      send: 'Send',
      cancel: 'Cancel',
    },
  },
};

// WhatsApp Icon Component
function WhatsAppIcon({ size = 20, className = '' }: { size?: number; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

// Contact Form Modal
function ContactFormModal({ 
  isOpen, 
  onClose, 
  type, 
  currentLang 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  type: 'whatsapp' | 'email' | null;
  currentLang: string;
}) {
  const t = translations[currentLang as keyof typeof translations] || translations.es;
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    destination: '',
    date: '',
    passengers: '',
    duration: '',
    budget: '',
    preferences: '',
    passport: '',
    comments: ''
  });

  if (!isOpen || !type) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `${t.forms.intro}%0A%0A${t.forms.intro2}%0A%0A${t.forms.name}: ${formData.name}%0A${type === 'whatsapp' ? t.forms.whatsapp : t.forms.email}: ${formData.contact}%0A${t.forms.destination}: ${formData.destination}%0A${t.forms.date}: ${formData.date}%0A${t.forms.passengers}: ${formData.passengers}%0A${t.forms.duration}: ${formData.duration}%0A${t.forms.budget}: ${formData.budget}%0A${t.forms.preferences}: ${formData.preferences}%0A${t.forms.passport}: ${formData.passport}%0A${t.forms.comments}: ${formData.comments}%0A%0A${t.forms.closing}`;
    
    if (type === 'whatsapp') {
      window.open(`https://wa.me/595992030554?text=${message}`, '_blank');
    } else {
      const subject = `Cotización de viaje - ${formData.name}`;
      window.open(`mailto:melstravel25@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message.replace(/%0A/g, '\n'))}`, '_blank');
    }
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      data-modal="true"
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      onClick={onClose}
      style={{ cursor: 'default' }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg mx-4 bg-white rounded-xl sm:rounded-2xl shadow-2xl max-h-[90vh] sm:max-h-[85vh] flex flex-col overflow-hidden"
        style={{ cursor: 'auto' }}
      >
        {/* Header - Fixed */}
        <div className="p-3 sm:p-4 md:p-5 pb-2 flex-shrink-0 bg-white z-10">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors cursor-pointer z-20"
            type="button"
          >
            <X size={16} className="sm:w-[18px] sm:h-[18px]" />
          </button>

          <h3 className="text-lg sm:text-xl font-bold text-[#1f2433] mb-1 sm:mb-2 pr-8 leading-tight">
            {type === 'whatsapp' ? t.forms.whatsappTitle : t.forms.emailTitle}
          </h3>
          <p className="text-gray-500 text-xs sm:text-sm">{t.forms.intro}</p>
        </div>

        {/* Scrollable Form */}
        <div 
          className="overflow-y-auto flex-1 px-3 sm:px-4 md:px-5 pb-3 sm:pb-4"
          style={{ 
            overscrollBehavior: 'contain',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-3">
          <div>
            <label className="block text-[10px] sm:text-xs font-medium text-gray-700 mb-0.5 sm:mb-1">{t.forms.name}</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-2.5 sm:px-3 py-2 sm:py-2.5 rounded-lg border border-gray-200 focus:border-[#ff6b35] focus:ring-2 focus:ring-[#ff6b35]/20 outline-none transition-all text-xs sm:text-sm"
            />
          </div>

          <div>
            <label className="block text-[10px] sm:text-xs font-medium text-gray-700 mb-0.5 sm:mb-1">
              {type === 'whatsapp' ? t.forms.email : t.forms.whatsapp}
            </label>
            <input
              type={type === 'whatsapp' ? 'email' : 'tel'}
              required
              value={formData.contact}
              onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
              className="w-full px-2.5 sm:px-3 py-2 sm:py-2.5 rounded-lg border border-gray-200 focus:border-[#ff6b35] focus:ring-2 focus:ring-[#ff6b35]/20 outline-none transition-all text-xs sm:text-sm"
            />
          </div>

          <div>
            <label className="block text-[10px] sm:text-xs font-medium text-gray-700 mb-0.5 sm:mb-1">{t.forms.destination}</label>
            <input
              type="text"
              value={formData.destination}
              onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
              className="w-full px-2.5 sm:px-3 py-2 sm:py-2.5 rounded-lg border border-gray-200 focus:border-[#ff6b35] focus:ring-2 focus:ring-[#ff6b35]/20 outline-none transition-all text-xs sm:text-sm"
            />
          </div>

          <div className="grid grid-cols-2 gap-2 sm:gap-4">
            <div>
              <label className="block text-[10px] sm:text-xs font-medium text-gray-700 mb-0.5 sm:mb-1">{t.forms.date}</label>
              <input
                type="text"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-2.5 sm:px-3 py-2 sm:py-2.5 rounded-lg border border-gray-200 focus:border-[#ff6b35] focus:ring-2 focus:ring-[#ff6b35]/20 outline-none transition-all text-xs sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-[10px] sm:text-xs font-medium text-gray-700 mb-0.5 sm:mb-1">{t.forms.passengers}</label>
              <input
                type="text"
                value={formData.passengers}
                onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
                className="w-full px-2.5 sm:px-3 py-2 sm:py-2.5 rounded-lg border border-gray-200 focus:border-[#ff6b35] focus:ring-2 focus:ring-[#ff6b35]/20 outline-none transition-all text-xs sm:text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:gap-4">
            <div>
              <label className="block text-[10px] sm:text-xs font-medium text-gray-700 mb-0.5 sm:mb-1">{t.forms.duration}</label>
              <input
                type="text"
                value={formData.duration}
                onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                className="w-full px-2.5 sm:px-3 py-2 sm:py-2.5 rounded-lg border border-gray-200 focus:border-[#ff6b35] focus:ring-2 focus:ring-[#ff6b35]/20 outline-none transition-all text-xs sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-[10px] sm:text-xs font-medium text-gray-700 mb-0.5 sm:mb-1">{t.forms.budget}</label>
              <input
                type="text"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full px-2.5 sm:px-3 py-2 sm:py-2.5 rounded-lg border border-gray-200 focus:border-[#ff6b35] focus:ring-2 focus:ring-[#ff6b35]/20 outline-none transition-all text-xs sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] sm:text-xs font-medium text-gray-700 mb-0.5 sm:mb-1">{t.forms.preferences}</label>
            <input
              type="text"
              value={formData.preferences}
              onChange={(e) => setFormData({ ...formData, preferences: e.target.value })}
              className="w-full px-2.5 sm:px-3 py-2 sm:py-2.5 rounded-lg border border-gray-200 focus:border-[#ff6b35] focus:ring-2 focus:ring-[#ff6b35]/20 outline-none transition-all text-xs sm:text-sm"
            />
          </div>

          <div>
            <label className="block text-[10px] sm:text-xs font-medium text-gray-700 mb-0.5 sm:mb-1">{t.forms.passport}</label>
            <input
              type="text"
              value={formData.passport}
              onChange={(e) => setFormData({ ...formData, passport: e.target.value })}
              className="w-full px-2.5 sm:px-3 py-2 sm:py-2.5 rounded-lg border border-gray-200 focus:border-[#ff6b35] focus:ring-2 focus:ring-[#ff6b35]/20 outline-none transition-all text-xs sm:text-sm"
            />
          </div>

          <div>
            <label className="block text-[10px] sm:text-xs font-medium text-gray-700 mb-0.5 sm:mb-1">{t.forms.comments}</label>
            <textarea
              rows={2}
              value={formData.comments}
              onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-[#ff6b35] focus:ring-2 focus:ring-[#ff6b35]/20 outline-none transition-all resize-none text-xs sm:text-sm"
            />
          </div>

          <div className="flex gap-2 sm:gap-3 pt-1 sm:pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition-colors text-xs sm:text-sm"
            >
              {t.forms.cancel}
            </button>
            <button
              type="submit"
              className={`flex-1 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-medium text-white transition-colors flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm ${
                type === 'whatsapp' ? 'bg-[#25D366] hover:bg-[#128C7E]' : 'bg-[#ff6b35] hover:bg-[#e55a2b]'
              }`}
            >
              <Send size={16} className="sm:w-[18px] sm:h-[18px]" />
              {t.forms.send}
            </button>
          </div>
        </form>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Contact({ currentLang }: ContactProps) {
  const t = translations[currentLang as keyof typeof translations] || translations.es;
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [formModal, setFormModal] = useState<{ isOpen: boolean; type: 'whatsapp' | 'email' | null }>({
    isOpen: false,
    type: null
  });

  const contactItems = [
    { 
      icon: 'whatsapp', 
      label: t.contactPanel.whatsapp.label, 
      value: t.contactPanel.whatsapp.value,
      action: t.contactPanel.whatsapp.action,
      onClick: () => setFormModal({ isOpen: true, type: 'whatsapp' }),
      color: '#25D366'
    },
    { 
      icon: 'email', 
      label: t.contactPanel.email.label, 
      value: t.contactPanel.email.value,
      action: t.contactPanel.email.action,
      onClick: () => setFormModal({ isOpen: true, type: 'email' }),
      color: '#EA4335'
    },
    { 
      icon: MapPin, 
      label: t.contactPanel.office.label, 
      value: t.contactPanel.office.value,
      href: '#',
      color: '#ff6b35'
    },
    { 
      icon: Clock, 
      label: t.contactPanel.hours.label, 
      value: t.contactPanel.hours.value,
      href: '#',
      color: '#8b5cf6'
    },
  ];

  return (
    <>
      <section 
        ref={sectionRef}
        id="contacto" 
        className="relative py-16 sm:py-20 lg:py-32 overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0 animated-gradient" />
        
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -left-32 top-1/3 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full bg-white/5 blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute -right-32 bottom-1/3 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] rounded-full bg-[#ff6b35]/10 blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <div className="relative w-full px-4 sm:px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-10 sm:mb-16">
              <ScrollReveal>
                <AnimatedText
                  children={t.title}
                  type="words"
                  className="text-responsive-2xl sm:text-responsive-3xl lg:text-responsive-4xl xl:text-responsive-5xl font-bold text-white mb-4 sm:mb-6 leading-tight text-no-cut"
                />
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-responsive-base sm:text-responsive-lg text-white/70 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0 text-no-cut">
                  {t.subtitle}
                </p>
              </ScrollReveal>
            </div>

            {/* Content Grid */}
            <div className="grid lg:grid-cols-5 gap-6 sm:gap-8">
              {/* Contact Panel */}
              <motion.div 
                className="lg:col-span-3"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="glass rounded-2xl sm:rounded-[2rem] p-5 sm:p-8 h-full">
                  <h3 className="text-responsive-lg sm:text-responsive-xl font-bold text-white mb-6 sm:mb-8 text-no-cut">
                    {t.contactPanel.title}
                  </h3>

                  <div className="space-y-3 sm:space-y-4">
                    {contactItems.map((item, index) => (
                      <motion.div
                        key={index}
                        onClick={'onClick' in item ? item.onClick : undefined}
                        className={`group flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 ${'onClick' in item ? 'cursor-pointer' : ''}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                        whileHover={{ x: 5 }}
                      >
                        <div 
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                          style={{ backgroundColor: `${item.color}20` }}
                        >
                          {item.icon === 'whatsapp' ? (
                            <WhatsAppIcon size={18} className="sm:w-[22px] sm:h-[22px] text-[#25D366]" />
                          ) : item.icon === 'email' ? (
                            <Mail size={18} className="sm:w-[22px] sm:h-[22px]" style={{ color: item.color }} />
                          ) : (
                            <item.icon size={18} className="sm:w-[22px] sm:h-[22px]" style={{ color: item.color }} />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-white/50 text-responsive-xs sm:text-responsive-sm block mb-0.5 sm:mb-1 text-no-cut">
                            {item.label}
                          </span>
                          <span className="text-white font-medium text-responsive-sm sm:text-responsive-base block whitespace-pre-line text-no-cut">
                            {item.value}
                          </span>
                          {'action' in item && (
                            <span className="text-white text-[10px] sm:text-xs font-semibold mt-0.5 sm:mt-1 block opacity-90 text-no-cut">
                              {item.action}
                            </span>
                          )}
                        </div>
                        {'onClick' in item && (
                          <ExternalLink size={14} className="sm:w-4 sm:h-4 text-white/30 group-hover:text-white/60 transition-colors flex-shrink-0 mt-1" />
                        )}
                      </motion.div>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/10">
                    <p className="text-white/50 text-xs sm:text-sm mb-3 sm:mb-4">{t.contactUs}</p>
                    <div className="flex gap-2 sm:gap-3">
                      {[
                        { icon: Instagram, href: 'https://instagram.com/melstravelpy', color: '#E4405F', type: 'icon' },
                        { icon: 'facebook', href: 'https://www.facebook.com/melstravel25', color: '#1877F2', type: 'facebook' },
                        { icon: 'whatsapp', href: 'https://wa.me/595992030554', color: '#25D366', type: 'whatsapp' },
                        { icon: Mail, href: 'mailto:melstravel25@gmail.com', color: '#EA4335', type: 'icon' },
                      ].map((social, index) => (
                        <motion.a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-colors"
                          whileHover={{ scale: 1.1, y: -3 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {social.type === 'whatsapp' ? (
                            <WhatsAppIcon size={18} className="sm:w-5 sm:h-5 text-[#25D366]" />
                          ) : social.type === 'facebook' ? (
                            <FacebookIcon size={18} className="sm:w-5 sm:h-5" color={social.color} />
                          ) : (
                            <social.icon size={18} className="sm:w-5 sm:h-5" style={{ color: social.color }} />
                          )}
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* FAQ Panel */}
              <motion.div 
                className="lg:col-span-2"
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div className="glass rounded-2xl sm:rounded-[2rem] p-5 sm:p-8 h-full">
                  <h3 className="text-responsive-lg sm:text-responsive-xl font-bold text-white mb-6 sm:mb-8 text-no-cut">
                    {t.faq.title}
                  </h3>

                  <div className="space-y-3 sm:space-y-4">
                    {t.faq.items.map((item, index) => (
                      <motion.div
                        key={index}
                        className="p-4 sm:p-5 rounded-xl bg-white/5 border border-white/10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                        whileHover={{ backgroundColor: 'rgba(255,255,255,0.08)' }}
                      >
                        <div className="flex items-start gap-2 sm:gap-3 mb-2 sm:mb-3">
                          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#ff6b35]/20 flex items-center justify-center flex-shrink-0">
                            <item.icon size={14} className="sm:w-4 sm:h-4 text-[#ff6b35]" />
                          </div>
                          <h4 className="text-white font-semibold text-responsive-sm leading-tight text-no-cut">
                            {item.question}
                          </h4>
                        </div>
                        <p className="text-white/60 text-responsive-xs sm:text-responsive-sm leading-relaxed pl-9 sm:pl-11 text-no-cut">
                          {item.answer}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      <ContactFormModal
        isOpen={formModal.isOpen}
        onClose={() => setFormModal({ isOpen: false, type: null })}
        type={formModal.type}
        currentLang={currentLang}
      />
    </>
  );
}

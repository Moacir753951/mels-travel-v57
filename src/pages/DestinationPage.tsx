/**
 * ═══════════════════════════════════════════════════════════════
 * PAGINA DE DESTINO - Mel's Travel v57
 * ═══════════════════════════════════════════════════════════════
 *
 * Esta pagina usa o sistema de conteudo em:
 *   src/content/destinations/[slug]/index.ts
 *
 * Para editar o conteudo de um destino:
 * 1. Va em src/content/destinations/[slug]/index.ts
 * 2. Edite o texto nas secoes es/pt/en
 * 3. Use visibility.* para mostrar/ocultar blocos
 *
 * NAO EDITE ESTE ARQUIVO para mudar texto de destinos.
 * ═══════════════════════════════════════════════════════════════
 */

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  MapPin,
  Globe,
  Calendar,
  Users,
  Heart,
  User,
  Info,
  Sun,
  Lightbulb,
} from 'lucide-react';
import { getDestinationBySlug, slugExists } from '@/data/destinationRoutes';
import type { DestinationRoute } from '@/data/destinationRoutes';
import { getDestinationContent } from '@/content/destinations';
import type { DestinationContent } from '@/content/destinations';
import Header from '@/sections/Header';
import Footer from '@/sections/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

// Mode icons
const modeIcons: Record<string, React.ReactNode> = {
  solo: <User size={16} />,
  couple: <Heart size={16} />,
  friends: <Users size={16} />,
  home: <Globe size={16} />,
  sub: <Globe size={16} />,
};

// Mode labels
const modeLabels: Record<string, Record<string, string>> = {
  es: {
    solo: 'Viaje Solo',
    couple: 'En Pareja',
    friends: 'Con Amigos',
    home: 'Destino Principal',
    sub: 'Sub-destino',
  },
  pt: {
    solo: 'Viagem Solo',
    couple: 'Em Casal',
    friends: 'Com Amigos',
    home: 'Destino Principal',
    sub: 'Sub-destino',
  },
  en: {
    solo: 'Solo Travel',
    couple: 'Couple',
    friends: 'With Friends',
    home: 'Main Destination',
    sub: 'Sub-destination',
  },
};

interface DestinationPageProps {
  currentLang: string;
  onLangChange: (lang: string) => void;
}

export default function DestinationPage({ currentLang, onLangChange }: DestinationPageProps) {
  const { slug } = useParams<{ slug: string }>();
  const [lang, setLang] = useState(currentLang);

  // Sync with parent language
  useEffect(() => {
    setLang(currentLang);
  }, [currentLang]);

  const handleLangChange = (newLang: string) => {
    setLang(newLang);
    onLangChange(newLang);
  };

  // Validate slug from routes
  if (!slug || !slugExists(slug)) {
    return <DestinationNotFound lang={lang} />;
  }

  const destination = getDestinationBySlug(slug) as DestinationRoute;
  const labels = modeLabels[lang as keyof typeof modeLabels] || modeLabels.es;

  // Get content from the new content system (may not exist for all)
  const content: DestinationContent | undefined = getDestinationContent(slug);
  const contentLang = content?.[lang as keyof typeof content] as
    | { pageTitle: string; subtitle: string; introText: string; description?: string; tips?: string[]; bestSeason?: string; metaDescription: string }
    | undefined;
  const visibility = content?.visibility;

  // Update page title - use content if available, fallback to route data
  useEffect(() => {
    document.title = contentLang?.pageTitle || `${destination.city} | Mel's Travel`;
    return () => {
      document.title = "Mel's Travel";
    };
  }, [destination.city, contentLang]);

  // Update meta description if content available
  useEffect(() => {
    if (contentLang?.metaDescription) {
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', contentLang.metaDescription);
    }
  }, [contentLang]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-screen bg-[#f8f9fa]"
    >
      {/* Header */}
      <Header currentLang={lang} onLangChange={handleLangChange} />

      {/* Hero Section */}
      <section className="relative min-h-[55vh] sm:min-h-[65vh] flex items-end overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${destination.imageUrl})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#1f2433] via-[#1f2433]/60 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 pb-12 sm:pb-16 pt-24 sm:pt-32">
          <div className="max-w-5xl mx-auto">
            {/* Back Link */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-4 sm:mb-6"
            >
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm sm:text-base"
              >
                <ArrowLeft size={18} />
                <span className="notranslate">Mel's Travel</span>
              </Link>
            </motion.div>

            {/* Mode Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-3 sm:mb-4"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white text-xs sm:text-sm font-medium">
                {modeIcons[destination.mode] || <Globe size={16} />}
                {labels[destination.mode] || destination.mode}
              </span>
            </motion.div>

            {/* City */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 leading-tight text-no-cut"
            >
              {destination.city}
            </motion.h1>

            {/* Subtitle from content OR country fallback */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg sm:text-xl md:text-2xl text-white/70 flex items-center gap-2"
            >
              <MapPin size={20} className="text-[#ff6b35]" />
              {contentLang?.subtitle || destination.country}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative py-12 sm:py-16 lg:py-20">
        <div className="w-full px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-14">
              <InfoCard
                icon={<MapPin size={20} />}
                label={lang === 'es' ? 'Ubicación' : lang === 'pt' ? 'Localização' : 'Location'}
                value={`${destination.city}, ${destination.country}`}
                delay={0.1}
              />
              <InfoCard
                icon={<Calendar size={20} />}
                label={lang === 'es' ? 'Temporada' : lang === 'pt' ? 'Temporada' : 'Season'}
                value={
                  contentLang?.bestSeason && visibility?.showBestSeason
                    ? contentLang.bestSeason
                    : lang === 'es'
                      ? 'Todo el año'
                      : lang === 'pt'
                        ? 'Durante o ano'
                        : 'Year round'
                }
                delay={0.2}
              />
              <InfoCard
                icon={modeIcons[destination.mode] || <Globe size={20} />}
                label={lang === 'es' ? 'Tipo de viaje' : lang === 'pt' ? 'Tipo de viagem' : 'Trip type'}
                value={labels[destination.mode] || destination.mode}
                delay={0.3}
              />
            </div>

            {/* Main Content Card */}
            {(!content || visibility?.showIntroSection !== false) && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl sm:rounded-[2rem] p-6 sm:p-8 lg:p-12 shadow-xl shadow-black/5"
              >
                {/* Decorative bar */}
                <div className="w-16 h-1 rounded-full bg-[#ff6b35] mb-6 sm:mb-8" />

                {/* Title */}
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1f2433] mb-4 sm:mb-6 leading-tight text-no-cut">
                  {lang === 'es'
                    ? `Descubre ${destination.city}`
                    : lang === 'pt'
                      ? `Descubra ${destination.city}`
                      : `Discover ${destination.city}`}
                </h2>

                {/* Intro Text (from content if available) */}
                {contentLang?.introText && visibility?.showIntroSection !== false ? (
                  <div className="space-y-4 text-[#6d7588] text-sm sm:text-base leading-relaxed">
                    <p className="text-no-cut">{contentLang.introText}</p>
                  </div>
                ) : (
                  /* Default intro text */
                  <div className="space-y-4 text-[#6d7588] text-sm sm:text-base leading-relaxed">
                    <p className="text-no-cut">
                      {lang === 'es'
                        ? `Bienvenido a la página de ${destination.city}. Aquí encontrarás información detallada, guías de viaje y todo lo que necesitas saber para planificar tu viaje a ${destination.country}.`
                        : lang === 'pt'
                          ? `Bem-vindo à página de ${destination.city}. Aqui você encontrará informações detalhadas, guias de viagem e tudo que precisa saber para planejar sua viagem à ${destination.country}.`
                          : `Welcome to the ${destination.city} page. Here you will find detailed information, travel guides and everything you need to know to plan your trip to ${destination.country}.`}
                    </p>
                  </div>
                )}

                {/* Preparation Notice (toggleable) */}
                {(!content || visibility?.showPreparationNotice !== false) && (
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-[#ff6b35]/5 border border-[#ff6b35]/10 mt-6">
                    <Info size={20} className="text-[#ff6b35] flex-shrink-0 mt-0.5" />
                    <p className="text-[#ff6b35] font-medium text-sm sm:text-base text-no-cut">
                      {lang === 'es'
                        ? 'Contenido detallado en preparación. Pronto disponible con guías, fotos y recomendaciones exclusivas.'
                        : lang === 'pt'
                          ? 'Conteúdo detalhado em preparação. Em breve disponível com guias, fotos e recomendações exclusivas.'
                          : 'Detailed content in preparation. Coming soon with guides, photos and exclusive recommendations.'}
                    </p>
                  </div>
                )}

                {/* Long Description (only if content exists and enabled) */}
                {contentLang?.description && visibility?.showDescription && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-8 pt-8 border-t border-gray-100"
                  >
                    <p className="text-[#1f2433] text-sm sm:text-base leading-relaxed whitespace-pre-line text-no-cut">
                      {contentLang.description}
                    </p>
                  </motion.div>
                )}

                {/* Tips Section (only if content exists and enabled) */}
                {contentLang?.tips && contentLang.tips.length > 0 && visibility?.showTips && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-8 pt-8 border-t border-gray-100"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <Lightbulb size={20} className="text-[#ff6b35]" />
                      <h3 className="text-lg font-bold text-[#1f2433]">
                        {lang === 'es' ? 'Consejos prácticos' : lang === 'pt' ? 'Dicas práticas' : 'Practical tips'}
                      </h3>
                    </div>
                    <ul className="space-y-3">
                      {contentLang.tips.map((tip: string, i: number) => (
                        <li key={i} className="flex items-start gap-3 text-[#6d7588] text-sm sm:text-base">
                          <span className="w-6 h-6 rounded-full bg-[#ff6b35]/10 flex items-center justify-center flex-shrink-0 text-[#ff6b35] text-xs font-bold mt-0.5">
                            {i + 1}
                          </span>
                          <span className="text-no-cut">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}

                {/* Best Season (only if content exists and enabled) */}
                {contentLang?.bestSeason && visibility?.showBestSeason && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-8 pt-8 border-t border-gray-100"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Sun size={20} className="text-[#ff6b35]" />
                      <h3 className="text-lg font-bold text-[#1f2433]">
                        {lang === 'es'
                          ? 'Mejor época para visitar'
                          : lang === 'pt'
                            ? 'Melhor época para visitar'
                            : 'Best time to visit'}
                      </h3>
                    </div>
                    <p className="text-[#6d7588] text-sm sm:text-base text-no-cut">
                      {contentLang.bestSeason}
                    </p>
                  </motion.div>
                )}

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 sm:mt-10 pt-8 sm:pt-10 border-t border-gray-100">
                  <Link
                    to="/"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 sm:py-4 bg-[#1f2433] text-white rounded-xl font-semibold text-sm sm:text-base hover:bg-[#2a3042] transition-colors"
                  >
                    <ArrowLeft size={18} />
                    {lang === 'es' ? 'Volver al inicio' : lang === 'pt' ? 'Voltar ao início' : 'Back to home'}
                  </Link>
                  <a
                    href="https://wa.me/595992030554"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 sm:py-4 bg-[#25D366] text-white rounded-xl font-semibold text-sm sm:text-base hover:bg-[#128C7E] transition-colors"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    {lang === 'es' ? 'Cotizar viaje' : lang === 'pt' ? 'Cotar viagem' : 'Get quote'}
                  </a>
                </div>
              </motion.div>
            )}

            {/* Blog Coming Soon (toggleable) */}
            {(!content || visibility?.showBlogComingSoon !== false) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-8 sm:mt-12 text-center"
              >
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#ff6b35]/10 text-[#ff6b35] font-medium text-sm sm:text-base">
                  <span className="w-2 h-2 rounded-full bg-[#ff6b35] animate-pulse" />
                  {lang === 'es'
                    ? 'Blog detallado próximamente'
                    : lang === 'pt'
                      ? 'Blog detalhado em breve'
                      : 'Detailed blog coming soon'}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer currentLang={lang} />

      {/* WhatsApp Float */}
      <WhatsAppFloat currentLang={lang} />
    </motion.div>
  );
}

// Info Card Component
function InfoCard({
  icon,
  label,
  value,
  delay,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl bg-white shadow-sm"
    >
      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#ff6b35]/10 flex items-center justify-center flex-shrink-0 text-[#ff6b35]">
        {icon}
      </div>
      <div>
        <span className="text-[#6d7588] text-xs sm:text-sm block mb-0.5">{label}</span>
        <span className="text-[#1f2433] font-semibold text-sm sm:text-base">{value}</span>
      </div>
    </motion.div>
  );
}

// 404 Not Found Component
function DestinationNotFound({ lang }: { lang: string }) {
  return (
    <div className="min-h-screen bg-[#1f2433] flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          {lang === 'es' ? 'Destino no encontrado' : lang === 'pt' ? 'Destino não encontrado' : 'Destination not found'}
        </h1>
        <p className="text-white/60 mb-6">
          {lang === 'es'
            ? 'El destino que buscas no existe o ha sido movido.'
            : lang === 'pt'
              ? 'O destino que procura não existe ou foi movido.'
              : 'The destination you are looking for does not exist or has been moved.'}
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#ff6b35] text-white rounded-xl font-semibold hover:bg-[#e55a2b] transition-colors"
        >
          <ArrowLeft size={18} />
          {lang === 'es' ? 'Volver al inicio' : lang === 'pt' ? 'Voltar ao início' : 'Back to home'}
        </Link>
      </div>
    </div>
  );
}

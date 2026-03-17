import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Leaf, Wind, Award, Zap, Euro, Flame, BookOpen, CheckCircle, MapPin, Clock, ChevronRight, Droplets, Globe, ThermometerSun } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Metadata } from "next";
import { guides } from "@/data/guides";
import { GUIDE_CATEGORIES } from "@/types/guide";
import { brands } from "@/data/brands";

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.cout-chauffage-energie.fr',
  },
};

const topCities = [
  { name: "Paris", slug: "paris-75000" },
  { name: "Lyon", slug: "lyon-69000" },
  { name: "Marseille", slug: "marseille-13000" },
  { name: "Toulouse", slug: "toulouse-31000" },
  { name: "Bordeaux", slug: "bordeaux-33000" },
  { name: "Nantes", slug: "nantes-44000" },
  { name: "Lille", slug: "lille-59000" },
  { name: "Strasbourg", slug: "strasbourg-67000" },
];

const categoryCards = [
  { slug: "geothermie", label: "Géothermie", icon: Globe, priceRange: "15 000 — 25 000 €", color: "border-teal-500", desc: "COP ≥ 4, forage vertical ou horizontal" },
  { slug: "chauffe-eau", label: "Chauffe-eau", icon: Droplets, priceRange: "800 — 3 000 €", color: "border-blue-500", desc: "Électrique, gaz, solaire, thermodynamique" },
  { slug: "vmc", label: "VMC", icon: Wind, priceRange: "2 500 — 6 000 €", color: "border-cyan-500", desc: "Simple flux ou double flux" },
  { slug: "chaudiere-bois", label: "Chaudière bois", icon: Flame, priceRange: "5 000 — 15 000 €", color: "border-orange-500", desc: "Bûches ou granulés (pellets)" },
  { slug: "chauffe-eau-thermodynamique", label: "CET", icon: Zap, priceRange: "3 000 — 5 000 €", color: "border-emerald-500", desc: "Mini PAC pour l'eau chaude, COP 2.5-3.5" },
];

export default function Home() {
  const featuredGuides = guides.slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-950 via-orange-900 to-orange-800 py-16 lg:py-28 overflow-hidden">
        {/* Hero background image */}
        <div className="absolute inset-0">
          <img src="/images/hero-bg.png" alt="" className="w-full h-full object-cover opacity-20" />
        </div>
        {/* Radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(234,88,12,0.15)_0%,transparent_70%)]"></div>
        {/* Heat wave pattern */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-orange-50/10 to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-200 border border-orange-500/30 px-5 py-2 rounded-lg text-sm font-semibold tracking-wide mb-8">
              <ThermometerSun className="h-4 w-4 text-orange-300" />
              <span>Guide Indépendant 2026</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tight">
              Le vrai coût de votre<br />
              <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">chauffage.</span>
            </h1>

            <p className="text-lg md:text-xl text-orange-100 mb-6 font-serif leading-relaxed max-w-2xl mx-auto">
              Géothermie, chauffe-eau, VMC, chaudière bois — comparez les prix d&apos;installation et recevez des devis gratuits d&apos;artisans certifiés RGE dans votre ville.
            </p>

            {/* Animated counter */}
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-3 mb-10">
              <span className="text-orange-300 text-sm">Économies moyennes constatées :</span>
              <span className="text-3xl font-black text-white font-mono">1 850 €</span>
              <span className="text-orange-300 text-sm">/ an</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/devis" className="w-full sm:w-auto">
                <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 text-white font-bold text-lg px-8 py-7 rounded-xl shadow-xl w-full">
                  Obtenir un devis gratuit
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/guides" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:border-white/60 font-semibold text-lg px-8 py-7 rounded-xl w-full backdrop-blur-sm">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Lire nos guides
                </Button>
              </Link>
            </div>

            <div className="mt-8 flex items-center justify-center gap-2 text-orange-200/60 text-sm">
              <Shield className="h-5 w-5" />
              <span>Service 100% gratuit, conseillers indépendants.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-orange-900 border-b border-orange-800 py-4 shadow-inner">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-orange-100 text-xs md:text-sm font-semibold text-center">
            <div className="flex flex-col items-center gap-1 justify-center"><Award className="h-6 w-6 text-orange-400 mb-1" /> Certification RGE</div>
            <div className="flex flex-col items-center gap-1 justify-center"><Euro className="h-6 w-6 text-orange-400 mb-1" /> Devis 100% Gratuits</div>
            <div className="flex flex-col items-center gap-1 justify-center"><Flame className="h-6 w-6 text-orange-400 mb-1" /> Économies d&apos;Énergie</div>
            <div className="flex flex-col items-center gap-1 justify-center"><Leaf className="h-6 w-6 text-orange-400 mb-1" /> Aides Financières</div>
          </div>
        </div>
      </section>

      {/* 5 Category Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-orange-600 font-bold tracking-wider uppercase text-sm">5 Catégories</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 mt-3 mb-4">Quel budget pour votre chauffage ?</h2>
            <p className="text-zinc-500 font-serif">Prix moyens constatés en France métropolitaine, matériel et pose compris.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryCards.map(cat => (
              <Link key={cat.slug} href={`/${cat.slug}/paris-75000`} className={`bg-white rounded-lg border-l-4 ${cat.color} shadow-md p-6 hover:-translate-y-1 hover:shadow-lg transition-all group`}>
                <div className="flex items-start gap-4">
                  <div className="bg-orange-50 p-3 rounded-lg group-hover:bg-orange-100 transition-colors">
                    <cat.icon className="h-8 w-8 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-zinc-800 group-hover:text-orange-600 transition-colors">{cat.label}</h3>
                    <p className="text-sm text-zinc-500 mb-2">{cat.desc}</p>
                    <p className="text-xl font-mono font-bold text-orange-600">{cat.priceRange}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section className="py-20 bg-orange-50/30 border-y border-orange-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-orange-600 font-bold tracking-wider uppercase text-sm">Nos Guides Experts</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 mt-3 mb-4">Tout comprendre sur le chauffage</h2>
            <p className="text-zinc-500 font-serif">Des guides détaillés et à jour pour chaque type d&apos;installation.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredGuides.map(guide => {
              const cat = GUIDE_CATEGORIES[guide.category];
              return (
                <Link key={guide.slug} href={`/guides/${guide.slug}`} className="bg-white rounded-2xl border border-zinc-200 overflow-hidden hover:border-orange-300 hover:shadow-lg transition-all group">
                  <div className="p-5">
                    <span className="text-xs font-semibold text-orange-600">{cat.emoji} {cat.label}</span>
                    <h3 className="text-base font-bold text-zinc-800 mt-1 mb-2 group-hover:text-orange-700 transition-colors line-clamp-2">{guide.title}</h3>
                    <div className="flex items-center gap-1 text-xs text-zinc-400">
                      <Clock className="h-3 w-3" /> {guide.readTime}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link href="/guides" className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-3 rounded-xl transition-colors shadow-md">
              Voir tous les guides <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Value Stack */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-orange-600 font-bold tracking-wider uppercase text-sm">Pourquoi nous ?</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 mt-3 mb-4">Un accompagnement sur-mesure</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center group">
              <div className="w-20 h-20 bg-orange-100/50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors">
                <Euro className="h-10 w-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Maximisez les Aides</h3>
              <p className="text-zinc-600 leading-relaxed font-serif">
                Nos artisans déduisent directement <Link href="/guides/maprimenov-chauffage-2026" className="text-orange-600 font-medium">MaPrimeRénov&apos;</Link> et les CEE de votre devis. Un reste à charge minimal.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-orange-100/50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors">
                <Shield className="h-10 w-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Artisans Certifiés RGE</h3>
              <p className="text-zinc-600 leading-relaxed font-serif">
                Le label RGE est obligatoire pour obtenir vos aides. Tous nos partenaires installateurs le possèdent.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-teal-100/50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-200 transition-colors">
                <Award className="h-10 w-10 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Le Juste Prix</h3>
              <p className="text-zinc-600 leading-relaxed font-serif">
                <Link href="/devis" className="text-orange-600 font-medium">Demandez 3 devis</Link> pour comparer sereinement les rendements et tarifs d&apos;entretien.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* City Finder */}
      <section className="py-20 bg-orange-50/50 border-y border-orange-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-orange-600 font-bold tracking-wider uppercase text-sm">Annuaire national</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 mt-3 mb-6">Trouvez un installateur près de chez vous</h2>
              <p className="text-lg text-zinc-600 mb-8 leading-relaxed font-serif">
                Notre annuaire couvre <strong>plus de 35 000 communes</strong> en France. Trouvez un artisan certifié RGE dans votre ville pour la géothermie, le chauffe-eau, la VMC ou la chaudière bois.
              </p>
              <Link href="/annuaire">
                <Button className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-3 rounded-xl shadow-md">
                  <MapPin className="mr-2 h-5 w-5" /> Voir l&apos;annuaire complet
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {topCities.map(city => (
                <Link
                  key={city.slug}
                  href={`/geothermie/${city.slug}`}
                  className="bg-white rounded-xl border border-zinc-200 p-4 hover:border-orange-300 hover:shadow-md transition-all group flex items-center gap-3"
                >
                  <MapPin className="h-4 w-4 text-orange-500 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-zinc-800 group-hover:text-orange-700 transition-colors text-sm">Chauffage {city.name}</span>
                    <span className="block text-xs text-zinc-400">Devis gratuit</span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-zinc-300 ml-auto group-hover:text-orange-500" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-orange-600 font-bold tracking-wider uppercase text-sm">Marques de confiance</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 mt-3 mb-4">Les meilleurs fabricants du marché</h2>
            <p className="text-zinc-500 font-serif">Les marques les plus fiables, recommandées par nos installateurs partenaires.</p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {brands.slice(0, 4).map(brand => (
              <Link key={brand.slug} href={`/marques/${brand.slug}`} className="bg-zinc-50 rounded-2xl border border-zinc-200 p-8 hover:border-orange-300 hover:shadow-lg transition-all group text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-black text-orange-700">{brand.letter}</span>
                </div>
                <h3 className="text-xl font-bold text-zinc-800 group-hover:text-orange-700 mb-2">{brand.name}</h3>
                <p className="text-sm text-zinc-500 mb-3">{brand.tagline}</p>
                <span className="text-sm font-semibold text-orange-600">Découvrir <ArrowRight className="inline h-3 w-3" /></span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/marques" className="text-orange-600 font-semibold hover:underline inline-flex items-center gap-1">
              Voir toutes les marques <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 bg-orange-50/30 border-t border-orange-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-zinc-900 mb-12">Foire Aux Questions</h2>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  { "@type": "Question", "name": "Quel est le chauffage le plus économique en 2026 ?", "acceptedAnswer": { "@type": "Answer", "text": "La pompe à chaleur géothermique offre le meilleur rendement (COP 4-5) et les économies les plus importantes à long terme. Pour un budget plus serré, la chaudière à granulés reste l'option la plus économique au kWh." } },
                  { "@type": "Question", "name": "Quelles aides pour changer de chauffage en 2026 ?", "acceptedAnswer": { "@type": "Answer", "text": "MaPrimeRénov', les Certificats d'Économies d'Énergie (CEE), l'Éco-PTZ et la TVA à 5,5% sont cumulables. Ensemble, ces aides peuvent couvrir jusqu'à 90% du devis pour les foyers très modestes." } },
                  { "@type": "Question", "name": "VMC simple flux ou double flux ?", "acceptedAnswer": { "@type": "Answer", "text": "En rénovation, la VMC simple flux hygroréglable type B (800-1200€) offre le meilleur rapport qualité/prix. En construction neuve ou rénovation globale, la VMC double flux (3000-6000€) récupère jusqu'à 90% de la chaleur." } },
                  { "@type": "Question", "name": "Combien coûte un chauffe-eau thermodynamique ?", "acceptedAnswer": { "@type": "Answer", "text": "Un CET coûte entre 2500€ et 4500€ pose comprise. Il divise par 3 votre consommation d'eau chaude par rapport à un cumulus classique, soit ~165€ d'économies par an." } }
                ]
              })
            }}
          />

          <div className="bg-white border border-zinc-200 p-8 rounded-3xl shadow-sm">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b-zinc-200">
                <AccordionTrigger className="text-lg font-bold text-zinc-900 py-5">Quel est le chauffage le plus économique en 2026 ?</AccordionTrigger>
                <AccordionContent className="text-zinc-600 text-base leading-relaxed pb-5">
                  La <strong>pompe à chaleur géothermique</strong> offre le meilleur rendement (COP 4-5) et les économies les plus importantes à long terme. Pour un budget plus serré, la <Link href="/guides/chaudiere-bois-granules" className="text-orange-600 font-medium">chaudière à granulés</Link> reste l&apos;option la plus économique au kWh. <Link href="/guides/chauffage-maison-ancienne-guide" className="text-orange-600 font-medium">Guide complet →</Link>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-b-zinc-200">
                <AccordionTrigger className="text-lg font-bold text-zinc-900 py-5">Quelles aides pour changer de chauffage en 2026 ?</AccordionTrigger>
                <AccordionContent className="text-zinc-600 text-base leading-relaxed pb-5">
                  <strong>MaPrimeRénov&apos;</strong>, les <strong>CEE</strong>, l&apos;<strong>Éco-PTZ</strong> et la <strong>TVA à 5,5%</strong> sont cumulables. Ensemble, ces aides peuvent couvrir jusqu&apos;à 90% du devis pour les foyers très modestes. <Link href="/guides/maprimenov-chauffage-2026" className="text-orange-600 font-medium">Détails MaPrimeRénov&apos; →</Link>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-b-zinc-200">
                <AccordionTrigger className="text-lg font-bold text-zinc-900 py-5">VMC simple flux ou double flux ?</AccordionTrigger>
                <AccordionContent className="text-zinc-600 text-base leading-relaxed pb-5">
                  En rénovation, la VMC simple flux hygroréglable type B (800-1 200€) offre le meilleur rapport qualité/prix. En neuf, la <Link href="/guides/vmc-simple-vs-double-flux" className="text-orange-600 font-medium">VMC double flux</Link> (3 000-6 000€) récupère jusqu&apos;à 90% de la chaleur.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg font-bold text-zinc-900 py-5">Combien coûte un chauffe-eau thermodynamique ?</AccordionTrigger>
                <AccordionContent className="text-zinc-600 text-base leading-relaxed pb-5">
                  Un CET coûte entre <strong>2 500€ et 4 500€</strong> pose comprise. Il divise par 3 votre consommation d&apos;eau chaude. <Link href="/guides/chauffe-eau-thermodynamique-economies" className="text-orange-600 font-medium">Guide CET →</Link>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="text-center mt-8">
            <Link href="/faq" className="text-orange-600 font-semibold hover:underline inline-flex items-center gap-1">
              Consulter toute la FAQ <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Votre devis en 3 clics</h2>
          <p className="text-xl text-orange-100 mb-10 max-w-2xl mx-auto font-medium font-serif">
            Renseignez votre projet et recevez les propositions chiffrées de nos artisans locaux pour comparer les solutions et les prix.
          </p>
          <Link href="/devis">
            <Button size="lg" className="bg-white text-orange-700 hover:bg-orange-50 font-bold text-xl px-12 py-8 rounded-full shadow-2xl transition-all transform hover:scale-105 hover:-translate-y-1">
              Comparer les Offres
            </Button>
          </Link>
          <div className="mt-8 flex justify-center gap-6 text-sm font-semibold text-orange-200/80 uppercase tracking-widest">
            <span>Gratuit</span>
            <span>Local</span>
            <span>RGE</span>
          </div>
        </div>
      </section>
    </div>
  );
}

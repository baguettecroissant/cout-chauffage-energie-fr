import { notFound } from "next/navigation";
import { getCityFromSlug } from "@/lib/seo-utils";
import { getCityIntro, getLocalInsight, getWhyChoose } from "@/lib/text-utils";
import { CityHero } from "@/components/psea/CityHero";
import { ViteUnDevisWidget } from "@/components/affiliation/ViteUnDevisWidget";
import { SchemaOrg } from "@/components/psea/SchemaOrg";
import { DepartmentBreadcrumb } from "@/components/psea/DepartmentBreadcrumb";
import { NearbyCitiesModule } from "@/components/psea/NearbyCitiesModule";
import { LocalAidsModule } from "@/components/psea/LocalAidsModule";
import { StepsModule } from "@/components/psea/StepsModule";
import { HeatingCategory, City } from "@/types";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

function hashCode(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = ((hash << 5) - hash) + str.charCodeAt(i);
        hash |= 0;
    }
    return Math.abs(hash);
}

interface CategoryCityPageProps {
    slug: string;
    category: HeatingCategory;
}

export function CategoryCityPage({ slug, category }: CategoryCityPageProps) {
    const city = getCityFromSlug(slug);

    if (!city) {
        notFound();
    }

    const introText = getCityIntro(city, category.slug);
    const localInsight = getLocalInsight(city, category.slug);
    const whyChoose = getWhyChoose(city, category.slug);
    const h = hashCode(city.slug + category.slug);
    const pop = city.population || 0;
    const popLabel = pop > 0 ? `${pop.toLocaleString('fr-FR')} habitants` : '';

    // FAQ variants
    const prixAnswers = [
        `À ${city.name}, le prix d'installation ${category.article} démarre autour de ${category.priceMin.toLocaleString('fr-FR')} € et peut atteindre ${category.priceMax.toLocaleString('fr-FR')} € selon la surface et la complexité du chantier, matériel et pose inclus.`,
        `Le coût ${category.article} à ${city.name} (${city.zip}) varie selon les spécificités de votre logement. Comptez entre ${category.priceMin.toLocaleString('fr-FR')} € et ${category.priceMax.toLocaleString('fr-FR')} € avant déduction des aides.`,
        `Dans le ${city.department_name}, les tarifs constatés pour ${category.article} à ${city.name} sont de ${category.priceMin.toLocaleString('fr-FR')} € à ${category.priceMax.toLocaleString('fr-FR')} €. Les aides peuvent réduire ce budget de 40 à 75%.`,
    ];
    const aidesAnswers = [
        `En installant ${category.article} à ${city.name}, vous êtes éligible à MaPrimeRénov' (jusqu'à 11 000 €), à la Prime CEE (jusqu'à 5 000 €), à l'Éco-PTZ (jusqu'à 50 000 € à taux zéro) et à la TVA réduite à 5,5%.`,
        `Les résidents de ${city.name} (${city.zip}) peuvent cumuler MaPrimeRénov', les primes CEE, et la TVA à 5,5%. Pour les ménages très modestes du ${city.department_name}, les aides couvrent jusqu'à 90% des travaux.`,
    ];
    const dureeAnswers = [
        `L'installation chez vous à ${city.name} prend généralement 1 à 5 jours ouvrés. Comptez 2 à 4 semaines pour la visite technique, la validation du devis et la commande du matériel.`,
        `Après la visite d'un technicien RGE du ${city.department_code}, le délai total est de 3 à 6 semaines. Le chantier dure 1 à 5 jours selon la complexité.`,
    ];
    const entretienAnswers = [
        `Nos artisans RGE partenaires du ${city.department_code} proposent des contrats de maintenance à ${city.name}. L'entretien régulier garantit la longévité et le rendement optimal de votre installation.`,
        `À ${city.name} et dans tout le ${city.department_name}, des techniciens qualifiés proposent des formules SAV complètes : entretien annuel, dépannage sous 48h et remplacement de pièces.`,
    ];

    const faqPrix = prixAnswers[h % prixAnswers.length];
    const faqAides = aidesAnswers[(h + 1) % aidesAnswers.length];
    const faqDuree = dureeAnswers[(h + 2) % dureeAnswers.length];
    const faqEntretien = entretienAnswers[(h + 3) % entretienAnswers.length];

    const deptSlug = `${city.department_name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}-${city.department_code}`;
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.cout-chauffage-energie.fr" },
            { "@type": "ListItem", "position": 2, "name": "Annuaire", "item": "https://www.cout-chauffage-energie.fr/annuaire" },
            { "@type": "ListItem", "position": 3, "name": city.department_name, "item": `https://www.cout-chauffage-energie.fr/annuaire/${deptSlug}` },
            { "@type": "ListItem", "position": 4, "name": `${category.shortLabel} ${city.name} (${city.zip})` },
        ]
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": `Quel est le prix ${category.article} à ${city.name} ?`,
                "acceptedAnswer": { "@type": "Answer", "text": faqPrix }
            },
            {
                "@type": "Question",
                "name": `Quelles aides pour ${category.article} à ${city.name} (${city.zip}) ?`,
                "acceptedAnswer": { "@type": "Answer", "text": faqAides }
            },
            {
                "@type": "Question",
                "name": `Quelle est la durée des travaux à ${city.name} ?`,
                "acceptedAnswer": { "@type": "Answer", "text": faqDuree }
            },
            {
                "@type": "Question",
                "name": `Qui assure l'entretien dans le ${city.department_name} ?`,
                "acceptedAnswer": { "@type": "Answer", "text": faqEntretien }
            }
        ]
    };

    return (
        <main className="min-h-screen bg-white selection:bg-orange-100">
            <SchemaOrg city={city} category={category} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <header className="bg-zinc-50 pt-4 pb-0 border-b border-zinc-100">
                <div className="container mx-auto px-4 max-w-5xl">
                    <DepartmentBreadcrumb city={city} category={category} />
                </div>
            </header>

            <CityHero city={city} category={category} />

            <article className="container mx-auto px-5 py-14 max-w-5xl">
                <section className="mb-14 grid md:grid-cols-3 gap-8 items-start">
                    <div className="md:col-span-2">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 mb-6 tracking-tight">
                            {category.label} à {city.name}
                        </h2>
                        <div className="prose prose-lg text-zinc-600 leading-relaxed space-y-4 font-serif">
                            <p>
                                Vivre à <strong>{city.name}</strong> ({city.zip}{popLabel ? `, ${popLabel}` : ''}) offre un cadre de vie appréciable, mais les hivers peuvent faire grimper la facture énergétique. {introText}
                            </p>
                            <p>
                                {category.description}
                            </p>
                            <p>
                                {localInsight}
                            </p>
                        </div>
                    </div>
                    <aside className="md:col-span-1 sticky top-24">
                        <LocalAidsModule city={city} />
                    </aside>
                </section>

                <section className="mb-16 scroll-mt-24" id="devis">
                    <div className="bg-gradient-to-br from-zinc-50 to-orange-50/30 p-8 md:p-10 rounded-3xl border border-orange-100 shadow-sm">
                        <div className="max-w-2xl mx-auto text-center mb-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-3">
                                Comparez les installateurs à {city.name}
                            </h2>
                            <p className="text-zinc-600 font-medium text-lg">
                                Obtenez jusqu&apos;à 3 devis gratuits pour {category.article} à {city.name} ({city.zip}).
                                <span className="block mt-3 text-sm text-orange-700 font-semibold bg-orange-100/60 inline-block px-4 py-1.5 rounded-full">Réponse sous 48h • Sans engagement</span>
                            </p>
                        </div>
                        <ViteUnDevisWidget />
                    </div>
                </section>

                <StepsModule city={city} category={category} />

                <section className="mb-16 mt-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-5">
                        Pourquoi choisir {category.article} à {city.name} ?
                    </h2>
                    <div className="prose prose-lg text-zinc-600 leading-relaxed font-serif">
                        <p>{whyChoose}</p>
                        <p>
                            Les installateurs certifiés RGE du {city.department_name} vous accompagnent de l&apos;étude technique
                            à la mise en service. Faites confiance au savoir-faire local pour un chantier réalisé dans les règles
                            de l&apos;art et éligible à l&apos;ensemble des aides financières.
                        </p>
                    </div>
                </section>

                <section className="mb-20 mt-16 pt-10 border-t border-zinc-100">
                    <h2 className="text-3xl font-bold text-zinc-900 mb-8 text-center">Questions fréquentes : {city.name}</h2>
                    <dl className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-50 hover:border-orange-100 transition-colors">
                            <dt className="text-lg font-bold text-zinc-800 mb-3">Quel est le prix {category.article} à {city.name} ?</dt>
                            <dd className="text-zinc-600 leading-relaxed font-serif">{faqPrix}</dd>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-50 hover:border-orange-100 transition-colors">
                            <dt className="text-lg font-bold text-zinc-800 mb-3">Quelles aides pour {category.article} à {city.name} ({city.department_code}) ?</dt>
                            <dd className="text-zinc-600 leading-relaxed font-serif">{faqAides}</dd>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-50 hover:border-orange-100 transition-colors">
                            <dt className="text-lg font-bold text-zinc-800 mb-3">Combien de temps pour l&apos;installation à {city.name} ?</dt>
                            <dd className="text-zinc-600 leading-relaxed font-serif">{faqDuree}</dd>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-50 hover:border-orange-100 transition-colors">
                            <dt className="text-lg font-bold text-zinc-800 mb-3">Entretien dans le {city.department_name} ?</dt>
                            <dd className="text-zinc-600 leading-relaxed font-serif">{faqEntretien}</dd>
                        </div>
                    </dl>
                </section>

                <footer className="mt-12 text-center">
                    <section className="mb-16">
                        <h2 className="text-2xl font-bold text-zinc-900 mb-6 flex items-center justify-center gap-2">
                            <BookOpen className="h-6 w-6 text-orange-500" />
                            Guides utiles
                        </h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <Link href="/marques" className="flex items-center gap-3 p-4 bg-zinc-50 border border-zinc-200 rounded-xl hover:border-orange-500 hover:shadow-md transition-all group">
                                <div className="bg-orange-100 p-2 rounded-lg group-hover:bg-orange-200 transition-colors shrink-0">
                                    <ArrowRight className="h-4 w-4 text-orange-600" />
                                </div>
                                <span className="font-medium text-zinc-700 group-hover:text-orange-700 text-sm">Comparatif des marques</span>
                            </Link>
                            <Link href="/faq" className="flex items-center gap-3 p-4 bg-zinc-50 border border-zinc-200 rounded-xl hover:border-orange-500 hover:shadow-md transition-all group">
                                <div className="bg-orange-100 p-2 rounded-lg group-hover:bg-orange-200 transition-colors shrink-0">
                                    <ArrowRight className="h-4 w-4 text-orange-600" />
                                </div>
                                <span className="font-medium text-zinc-700 group-hover:text-orange-700 text-sm">FAQ Chauffage & Énergie</span>
                            </Link>
                        </div>
                    </section>
                </footer>
            </article>

            <aside className="bg-zinc-50 border-t border-zinc-200">
                <NearbyCitiesModule city={city} category={category} />
            </aside>
        </main>
    );
}

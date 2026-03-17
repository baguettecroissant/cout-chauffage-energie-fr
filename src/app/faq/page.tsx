import { Metadata } from "next";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata: Metadata = {
    title: "FAQ Chauffage & Énergie 2026 — Questions Fréquentes",
    description: "Réponses aux questions les plus fréquentes sur le chauffage : géothermie, chauffe-eau, VMC, chaudière bois, aides MaPrimeRénov', CEE.",
    alternates: { canonical: 'https://www.cout-chauffage-energie.fr/faq' },
};

const faqs = [
    { q: "Quel est le chauffage le plus économique en 2026 ?", a: "La pompe à chaleur géothermique offre le meilleur rendement (COP 4-5) et les économies les plus importantes. La chaudière à granulés est l'option la plus économique au kWh (5-8 cts/kWh contre 17-22 cts pour l'électricité)." },
    { q: "Quelles aides sont disponibles pour changer de chauffage ?", a: "MaPrimeRénov' (jusqu'à 11 000€), les Certificats d'Économies d'Énergie CEE (jusqu'à 5 000€), l'Éco-PTZ (jusqu'à 50 000€ à taux zéro) et la TVA réduite à 5,5%. Ces aides sont cumulables." },
    { q: "VMC simple flux ou double flux ?", a: "En rénovation, la VMC simple flux hygroréglable B (800-1 200€) offre le meilleur rapport qualité/prix. En neuf ou rénovation globale, la VMC double flux (3 000-6 000€) récupère jusqu'à 90% de la chaleur de l'air extrait." },
    { q: "Combien coûte un chauffe-eau thermodynamique ?", a: "Entre 2 500€ et 4 500€ pose comprise. Le CET divise par 3 votre consommation d'eau chaude par rapport à un cumulus classique, soit environ 165€ d'économie par an." },
    { q: "Le forage géothermique est-il possible partout ?", a: "Non, le forage dépend de la nature du sol et de la réglementation locale. Un bureau d'études réalise une étude de faisabilité préalable. Le captage horizontal est possible sur tout terrain suffisamment grand (1,5× la surface à chauffer)." },
    { q: "Quelle est la durée de vie d'une chaudière à granulés ?", a: "Une chaudière à granulés de qualité (Viessmann, De Dietrich, Bosch) a une durée de vie de 20 à 25 ans avec un entretien régulier. Le corps de chauffe est généralement garanti 5 ans." },
    { q: "Faut-il un label RGE pour bénéficier des aides ?", a: "Oui, l'installateur DOIT être certifié RGE (Reconnu Garant de l'Environnement) pour que vos travaux soient éligibles à MaPrimeRénov', aux CEE et à l'Éco-PTZ. Vérifiez sur france-renov.gouv.fr." },
    { q: "Quel chauffage pour une maison ancienne (avant 1975) ?", a: "Priorité à l'isolation (combles, murs), puis PAC air-eau ou chaudière bois selon votre terrain. Le chauffe-eau thermodynamique est un excellent premier investissement. Consultez notre guide dédié." },
    { q: "Combien de temps prennent les travaux d'installation ?", a: "1 à 2 jours pour un chauffe-eau ou une VMC, 2 à 5 jours pour une chaudière bois ou une PAC, et 1 à 3 semaines pour un forage géothermique. Le délai total incluant l'étude et les commandes est de 3 à 6 semaines." },
    { q: "Les devis sont-ils vraiment gratuits ?", a: "Oui, notre service est 100% gratuit et sans engagement. Vous recevez jusqu'à 3 devis d'installateurs RGE de votre département. Vous êtes libre de les comparer et de choisir ou non." },
];

export default function FAQPage() {
    return (
        <div className="min-h-screen bg-white">
            <section className="bg-gradient-to-br from-orange-950 to-orange-800 py-16 text-white text-center">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h1 className="text-4xl md:text-5xl font-black mb-4">Foire Aux Questions</h1>
                    <p className="text-xl text-orange-100 font-serif">
                        Toutes les réponses à vos questions sur le chauffage, les aides et la rénovation énergétique.
                    </p>
                </div>
            </section>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqs.map(faq => ({
                            "@type": "Question",
                            "name": faq.q,
                            "acceptedAnswer": { "@type": "Answer", "text": faq.a }
                        }))
                    })
                }}
            />

            <section className="container mx-auto px-4 py-12 max-w-4xl">
                <div className="bg-white border border-zinc-200 p-8 rounded-3xl shadow-sm">
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="border-b-zinc-200">
                                <AccordionTrigger className="text-lg font-bold text-zinc-900 py-5 text-left">{faq.q}</AccordionTrigger>
                                <AccordionContent className="text-zinc-600 text-base leading-relaxed pb-5 font-serif">{faq.a}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>

                <div className="mt-12 text-center">
                    <p className="text-zinc-600 mb-4 font-serif">Une question spécifique sur votre projet ?</p>
                    <Link href="/devis" className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-3 rounded-xl transition-colors shadow-md">
                        Demandez un devis gratuit
                    </Link>
                </div>
            </section>
        </div>
    );
}

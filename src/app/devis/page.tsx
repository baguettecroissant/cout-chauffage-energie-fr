import { Metadata } from "next";
import { ViteUnDevisWidget } from "@/components/affiliation/ViteUnDevisWidget";
import { Shield, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
    title: "Devis Gratuit Chauffage 2026 — Géothermie, Chauffe-eau, VMC, Chaudière Bois",
    description: "Obtenez jusqu'à 3 devis gratuits pour votre projet de chauffage. Installateurs certifiés RGE, réponse sous 48h, sans engagement.",
    alternates: { canonical: 'https://www.cout-chauffage-energie.fr/devis' },
};

export default function DevisPage() {
    return (
        <div className="min-h-screen bg-orange-50/30">
            <section className="bg-gradient-to-br from-orange-950 to-orange-800 py-16 text-white text-center">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h1 className="text-4xl md:text-5xl font-black mb-4">Votre Devis Gratuit</h1>
                    <p className="text-xl text-orange-100 mb-6 font-serif">
                        Comparez les devis d&apos;artisans certifiés RGE pour votre projet de chauffage. Gratuit, rapide, sans engagement.
                    </p>
                    <div className="flex justify-center gap-6 text-sm text-orange-200">
                        <span className="flex items-center gap-1"><Shield className="h-4 w-4" /> Gratuit</span>
                        <span className="flex items-center gap-1"><CheckCircle className="h-4 w-4" /> RGE</span>
                        <span className="flex items-center gap-1"><CheckCircle className="h-4 w-4" /> 48h</span>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4 py-12 max-w-3xl">
                <div className="bg-white rounded-3xl border border-orange-100 shadow-lg p-8 -mt-8 relative z-10">
                    <ViteUnDevisWidget />
                </div>

                <div className="mt-12 grid md:grid-cols-3 gap-6">
                    {[
                        { title: "1. Décrivez", desc: "Renseignez votre projet, la surface, le type de chauffage souhaité." },
                        { title: "2. Comparez", desc: "Recevez jusqu'à 3 devis d'installateurs RGE de votre département." },
                        { title: "3. Économisez", desc: "Choisissez l'offre la plus adaptée et bénéficiez des aides de l'État." },
                    ].map(s => (
                        <div key={s.title} className="text-center p-6">
                            <h3 className="text-lg font-bold text-zinc-800 mb-2">{s.title}</h3>
                            <p className="text-zinc-600 text-sm font-serif">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

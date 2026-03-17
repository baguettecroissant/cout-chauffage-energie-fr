import Link from "next/link";
import { Metadata } from "next";
import { brands } from "@/data/brands";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Marques de Chauffage 2026 — Viessmann, Bosch, Atlantic, De Dietrich",
    description: "Comparatif des meilleures marques de chauffage : Viessmann, Bosch, De Dietrich, Atlantic, Thermor, Aldes, Stiebel Eltron. Fiches détaillées et avis.",
    alternates: { canonical: 'https://www.cout-chauffage-energie.fr/marques' },
};

export default function MarquesPage() {
    return (
        <div className="min-h-screen bg-white">
            <section className="bg-gradient-to-br from-orange-950 to-orange-800 py-16 text-white text-center">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h1 className="text-4xl md:text-5xl font-black mb-4">Marques de Chauffage</h1>
                    <p className="text-xl text-orange-100 font-serif">
                        Les fabricants les plus fiables du marché, testés et recommandés par nos installateurs partenaires.
                    </p>
                </div>
            </section>

            <section className="container mx-auto px-4 py-12 max-w-5xl">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {brands.map(brand => (
                        <Link key={brand.slug} href={`/marques/${brand.slug}`} className="bg-zinc-50 rounded-2xl border border-zinc-200 p-8 hover:border-orange-300 hover:shadow-lg transition-all group">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                                <span className="text-2xl font-black text-orange-700">{brand.letter}</span>
                            </div>
                            <h2 className="text-xl font-bold text-zinc-800 group-hover:text-orange-700 mb-1">{brand.name}</h2>
                            <p className="text-xs text-zinc-400 mb-3">{brand.country}</p>
                            <p className="text-sm text-zinc-600 mb-4 font-serif">{brand.tagline}</p>
                            <div className="flex flex-wrap gap-1 mb-4">
                                {brand.strengths.slice(0, 2).map(s => (
                                    <span key={s} className="text-xs bg-teal-100 text-teal-700 px-2 py-0.5 rounded-full">{s}</span>
                                ))}
                            </div>
                            <span className="text-sm font-semibold text-orange-600">Découvrir <ArrowRight className="inline h-3 w-3" /></span>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}

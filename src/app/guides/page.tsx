import Link from "next/link";
import { Metadata } from "next";
import { guides } from "@/data/guides";
import { GUIDE_CATEGORIES } from "@/types/guide";
import { Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Guides Chauffage & Énergie 2026 — Géothermie, VMC, Chaudière, CET",
    description: "Tous nos guides experts : prix, rendement, aides MaPrimeRénov' pour la géothermie, le chauffe-eau, la VMC, la chaudière bois et le CET.",
    alternates: { canonical: 'https://www.cout-chauffage-energie.fr/guides' },
};

export default function GuidesPage() {
    return (
        <div className="min-h-screen bg-white">
            <section className="bg-gradient-to-br from-orange-950 to-orange-800 py-16 text-white text-center">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h1 className="text-4xl md:text-5xl font-black mb-4">Nos Guides Experts</h1>
                    <p className="text-xl text-orange-100 font-serif">
                        Tout comprendre sur le chauffage et la rénovation énergétique : prix, rendement, aides et astuces.
                    </p>
                </div>
            </section>

            <section className="container mx-auto px-4 py-12 max-w-5xl">
                <div className="grid md:grid-cols-2 gap-6">
                    {guides.map(guide => {
                        const cat = GUIDE_CATEGORIES[guide.category];
                        return (
                            <Link key={guide.slug} href={`/guides/${guide.slug}`} className="bg-white rounded-2xl border border-zinc-200 p-6 hover:border-orange-300 hover:shadow-lg transition-all group">
                                <span className="text-xs font-semibold text-orange-600">{cat.emoji} {cat.label}</span>
                                <h2 className="text-xl font-bold text-zinc-800 mt-2 mb-3 group-hover:text-orange-700 transition-colors">{guide.title}</h2>
                                <p className="text-zinc-600 text-sm mb-4 font-serif line-clamp-2">{guide.excerpt}</p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-1 text-xs text-zinc-400">
                                        <Clock className="h-3 w-3" /> {guide.readTime}
                                    </div>
                                    <span className="text-sm font-semibold text-orange-600 group-hover:underline">Lire <ArrowRight className="inline h-3 w-3" /></span>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}

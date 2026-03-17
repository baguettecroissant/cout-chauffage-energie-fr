import { City } from "@/types";
import { HeatingCategory } from "@/types";
import { CheckCircle } from "lucide-react";

export function StepsModule({ city, category }: { city: City; category: HeatingCategory }) {
    return (
        <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-8">
                Comment installer {category.article} à {city.name} ?
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
                {[
                    { step: "1", title: "Comparez", desc: `Remplissez le formulaire ci-dessus pour recevoir jusqu'à 3 devis d'installateurs RGE à ${city.name}.` },
                    { step: "2", title: "Visite technique", desc: "Un technicien vient chez vous pour évaluer vos besoins, la configuration du logement et le dimensionnement." },
                    { step: "3", title: "Installation", desc: `Les travaux durent 1 à 5 jours selon le projet. Nos artisans du ${city.department_name} sont certifiés RGE.` },
                    { step: "4", title: "Économies", desc: "Dès la mise en service, vous constatez la baisse de vos factures. Le retour sur investissement commence." },
                ].map(s => (
                    <div key={s.step} className="relative bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold text-lg">{s.step}</div>
                            <h3 className="text-lg font-bold text-zinc-800">{s.title}</h3>
                        </div>
                        <p className="text-zinc-600 text-sm leading-relaxed">{s.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

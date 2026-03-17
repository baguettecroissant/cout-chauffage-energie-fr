import Link from "next/link";
import { Metadata } from "next";
import { getAllDepartments } from "@/lib/cities";
import { MapPin } from "lucide-react";

export const metadata: Metadata = {
    title: "Annuaire Chauffage par Département — Installateurs RGE France",
    description: "Trouvez un installateur certifié RGE dans votre département. Géothermie, chauffe-eau, VMC, chaudière bois : devis gratuits dans toute la France.",
    alternates: { canonical: 'https://www.cout-chauffage-energie.fr/annuaire' },
};

export default function AnnuairePage() {
    const departments = getAllDepartments();
    const regions = [...new Set(departments.map(d => d.region))].sort();

    return (
        <div className="min-h-screen bg-white">
            <section className="bg-gradient-to-br from-orange-950 to-orange-800 py-16 text-white text-center">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h1 className="text-4xl md:text-5xl font-black mb-4">Annuaire par Département</h1>
                    <p className="text-xl text-orange-100 font-serif">
                        Trouvez un installateur certifié RGE dans votre département pour la géothermie, le chauffe-eau, la VMC ou la chaudière bois.
                    </p>
                </div>
            </section>

            <section className="container mx-auto px-4 py-12 max-w-6xl">
                {regions.map(region => {
                    const regionDepts = departments.filter(d => d.region === region);
                    return (
                        <div key={region} className="mb-10">
                            <h2 className="text-2xl font-bold text-zinc-900 mb-4 border-b border-orange-200 pb-2">{region}</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                                {regionDepts.map(dept => {
                                    const deptSlug = `${dept.name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}-${dept.code}`;
                                    return (
                                        <Link
                                            key={dept.code}
                                            href={`/annuaire/${deptSlug}`}
                                            className="flex items-center gap-2 p-3 bg-zinc-50 border border-zinc-200 rounded-lg hover:border-orange-300 hover:shadow-sm transition-all group text-sm"
                                        >
                                            <MapPin className="h-3 w-3 text-orange-500 flex-shrink-0" />
                                            <span className="text-zinc-700 group-hover:text-orange-600 font-medium">{dept.name} ({dept.code})</span>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </section>
        </div>
    );
}

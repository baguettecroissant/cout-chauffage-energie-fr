import { City } from "@/types";
import { Euro, FileText, Landmark } from "lucide-react";
import Link from "next/link";

export function LocalAidsModule({ city }: { city: City }) {
    return (
        <div className="bg-orange-600 text-white rounded-2xl p-7 shadow-xl">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2"><Landmark className="h-5 w-5" /> Aides à {city.name}</h3>
            <ul className="space-y-2 text-orange-100 text-sm mb-5">
                <li className="flex items-start gap-2"><Euro className="h-4 w-4 mt-0.5 flex-shrink-0" /> MaPrimeRénov&apos; : jusqu&apos;à 11 000 €</li>
                <li className="flex items-start gap-2"><Euro className="h-4 w-4 mt-0.5 flex-shrink-0" /> Prime CEE : jusqu&apos;à 5 000 €</li>
                <li className="flex items-start gap-2"><Euro className="h-4 w-4 mt-0.5 flex-shrink-0" /> TVA réduite : 5,5%</li>
                <li className="flex items-start gap-2"><Euro className="h-4 w-4 mt-0.5 flex-shrink-0" /> Éco-PTZ : 50 000 € à taux 0</li>
                {city.department_info?.aide_locale && (
                    <li className="flex items-start gap-2"><FileText className="h-4 w-4 mt-0.5 flex-shrink-0" /> {city.department_info.aide_locale}</li>
                )}
            </ul>
            <Link href="/guides/maprimenov-chauffage-2026" className="underline text-orange-200 hover:text-white text-sm font-semibold">
                Détails des aides 2026 →
            </Link>
        </div>
    );
}

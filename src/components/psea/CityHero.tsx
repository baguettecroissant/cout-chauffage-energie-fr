import { City } from "@/types";
import { HeatingCategory } from "@/types";
import { MapPin, ThermometerSun } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CityHero({ city, category }: { city: City; category: HeatingCategory }) {
    const pop = city.population || 0;
    const popLabel = pop > 0 ? `${pop.toLocaleString('fr-FR')} habitants` : '';

    return (
        <section className="bg-gradient-to-br from-orange-950 via-orange-900 to-zinc-900 py-12 lg:py-20">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="flex items-center gap-2 text-orange-300 text-sm mb-4">
                    <MapPin className="h-4 w-4" />
                    <span>{city.department_name} · {city.region}</span>
                    {popLabel && <span className="text-orange-400/60">· {popLabel}</span>}
                </div>
                <h1 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight tracking-tight">
                    {category.label} à {city.name}{' '}
                    <span className="text-orange-400">({city.zip})</span>
                </h1>
                <p className="text-lg text-orange-100 max-w-2xl mb-6 font-serif">
                    Coût d&apos;installation et chauffagistes certifiés RGE dans le {city.department_name}.
                    Tarifs entre <strong className="text-white">{category.priceMin.toLocaleString('fr-FR')}€</strong> et{' '}
                    <strong className="text-white">{category.priceMax.toLocaleString('fr-FR')}€</strong>, matériel et pose compris.
                </p>
                <div className="flex flex-wrap gap-3">
                    <Link href="#devis">
                        <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 text-white font-bold px-8 py-6 rounded-xl shadow-lg">
                            <ThermometerSun className="mr-2 h-5 w-5" />
                            Faire chiffrer mon projet à {city.name}
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-gradient-to-b from-zinc-800 to-zinc-900 text-zinc-50">
            {/* Main footer content */}
            <div className="container mx-auto px-4 py-14">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="col-span-2 md:col-span-1">
                        <h3 className="text-xl font-bold text-white mb-4">
                            Cout-Chauffage-Énergie<span className="text-orange-500">.fr</span>
                        </h3>
                        <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                            Le guide indépendant pour comparer les prix d&apos;installation de géothermie, chauffe-eau, VMC, chaudière bois et chauffe-eau thermodynamique en France.
                        </p>
                        <Link
                            href="/devis"
                            className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-2.5 px-5 rounded-lg text-sm transition-colors"
                        >
                            Devis gratuit →
                        </Link>
                    </div>

                    {/* Guides populaires */}
                    <div>
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Guides</h4>
                        <ul className="space-y-2.5">
                            <li><Link href="/guides/chauffage-geothermique-prix-forage" className="text-zinc-400 hover:text-orange-400 text-sm transition-colors">Géothermie : prix & forage</Link></li>
                            <li><Link href="/guides/chauffe-eau-comparatif" className="text-zinc-400 hover:text-orange-400 text-sm transition-colors">Chauffe-eau comparatif</Link></li>
                            <li><Link href="/guides/vmc-simple-vs-double-flux" className="text-zinc-400 hover:text-orange-400 text-sm transition-colors">VMC simple vs double flux</Link></li>
                            <li><Link href="/guides/chaudiere-bois-granules" className="text-zinc-400 hover:text-orange-400 text-sm transition-colors">Chaudière bois/granulés</Link></li>
                            <li><Link href="/guides/maprimenov-chauffage-2026" className="text-zinc-400 hover:text-orange-400 text-sm transition-colors">MaPrimeRénov&apos; 2026</Link></li>
                            <li><Link href="/guides" className="text-orange-400 hover:text-orange-300 text-sm font-semibold transition-colors">Tous les guides →</Link></li>
                        </ul>
                    </div>

                    {/* Villes populaires */}
                    <div>
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Villes</h4>
                        <ul className="space-y-2.5">
                            <li><Link href="/geothermie/paris-75000" className="text-zinc-400 hover:text-orange-400 text-sm transition-colors">Géothermie Paris</Link></li>
                            <li><Link href="/chauffe-eau/lyon-69000" className="text-zinc-400 hover:text-orange-400 text-sm transition-colors">Chauffe-eau Lyon</Link></li>
                            <li><Link href="/vmc/marseille-13000" className="text-zinc-400 hover:text-orange-400 text-sm transition-colors">VMC Marseille</Link></li>
                            <li><Link href="/chaudiere-bois/toulouse-31000" className="text-zinc-400 hover:text-orange-400 text-sm transition-colors">Chaudière bois Toulouse</Link></li>
                            <li><Link href="/geothermie/bordeaux-33000" className="text-zinc-400 hover:text-orange-400 text-sm transition-colors">Géothermie Bordeaux</Link></li>
                            <li><Link href="/annuaire" className="text-orange-400 hover:text-orange-300 text-sm font-semibold transition-colors">Tout l&apos;annuaire →</Link></li>
                        </ul>
                    </div>

                    {/* Infos */}
                    <div>
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Informations</h4>
                        <ul className="space-y-2.5">
                            <li><Link href="/" className="text-zinc-400 hover:text-orange-400 text-sm transition-colors">Accueil</Link></li>
                            <li><Link href="/marques" className="text-zinc-400 hover:text-orange-400 text-sm transition-colors">Marques</Link></li>
                            <li><Link href="/marques/viessmann" className="text-zinc-400 hover:text-orange-400 text-sm transition-colors">Viessmann</Link></li>
                            <li><Link href="/marques/atlantic" className="text-zinc-400 hover:text-orange-400 text-sm transition-colors">Atlantic</Link></li>
                            <li><Link href="/marques/de-dietrich" className="text-zinc-400 hover:text-orange-400 text-sm transition-colors">De Dietrich</Link></li>
                            <li><Link href="/faq" className="text-zinc-400 hover:text-orange-400 text-sm transition-colors">FAQ</Link></li>
                            <li><Link href="/mentions-legales" className="text-zinc-400 hover:text-orange-400 text-sm transition-colors">Mentions légales</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Cross-linking */}
                <div className="mt-10 pt-8 border-t border-zinc-700">
                    <p className="text-zinc-500 text-xs text-center">
                        Voir aussi : <Link href="https://www.ta-pompe-a-chaleur.fr" className="text-zinc-400 hover:text-orange-400 transition-colors">Géothermie vs Aérothermie</Link> · <Link href="https://www.cout-isolation-maison.fr" className="text-zinc-400 hover:text-orange-400 transition-colors">Isoler d&apos;abord, chauffer ensuite</Link>
                    </p>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-zinc-700/50">
                <div className="container mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
                    <p>© 2026 Cout-Chauffage-Energie.fr — Tous droits réservés.</p>
                    <p>Guide indépendant · Devis gratuits d&apos;installateurs certifiés · France métropolitaine</p>
                </div>
            </div>
        </footer>
    );
}

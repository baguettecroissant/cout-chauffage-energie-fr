import { Guide } from "@/types/guide";

export const guides: Guide[] = [
    {
        id: 1,
        title: "Chauffage géothermique : prix, forage et retour sur investissement",
        slug: "chauffage-geothermique-prix-forage",
        metaTitle: "Géothermie 2026 : Prix du Forage, COP & Rentabilité | Guide Complet",
        metaDescription: "Quel budget pour un chauffage géothermique ? Prix du forage (80-150€/ml), COP moyen de 4.5, retour sur investissement en 7-10 ans. Simulez vos économies.",
        category: "geothermie",
        readTime: "15 min",
        updatedAt: "2026-03-01",
        excerpt: "Tout savoir sur le chauffage géothermique : coût du forage, rendement COP, aides financières et délai de rentabilité pour votre projet.",
        heroImage: "/images/guides/geothermie-forage.png",
        heroAlt: "Schéma isométrique d'une installation géothermique avec forage vertical et horizontal",
        content: `<figure class="my-8 rounded-2xl overflow-hidden border border-zinc-200"><img src="/images/guides/geothermie-forage.png" alt="Schéma isométrique d'une installation géothermique avec forage vertical et captage horizontal" class="w-full" /><figcaption class="text-sm text-zinc-500 text-center py-3 bg-zinc-50">Schéma d'une installation géothermique : forage vertical (gauche) et captage horizontal (droite)</figcaption></figure>

<h2>Qu'est-ce que le chauffage géothermique ?</h2>
<p>Le <strong>chauffage géothermique</strong> est un système qui capte la chaleur naturellement présente dans le sol ou les nappes phréatiques pour chauffer votre habitation. Grâce à une pompe à chaleur (PAC) géothermique, cette énergie gratuite et inépuisable est transformée en chaleur utilisable, avec un <strong>coefficient de performance (COP) moyen de 4 à 5</strong>. Cela signifie que pour 1 kWh d'électricité consommé, vous obtenez 4 à 5 kWh de chaleur.</p>
<p>Contrairement à une <a href="/guides/chauffe-eau-comparatif">solution de production d'eau chaude</a> classique, la géothermie exploite une source d'énergie constante toute l'année : la température du sol reste stable entre 10°C et 15°C, quelle que soit la saison.</p>

<h2>Les 3 types de captage géothermique</h2>
<p>Le choix du captage est la décision la plus importante de votre projet. Consultez notre <a href="/guides/geothermie-horizontale-vs-verticale">comparatif horizontal vs vertical</a> pour un approfondissement.</p>

<div class="overflow-x-auto my-8">
<table class="w-full text-sm border-collapse">
<thead><tr class="bg-orange-50"><th class="border border-zinc-200 px-4 py-3 text-left font-bold">Critère</th><th class="border border-zinc-200 px-4 py-3 text-center font-bold">Horizontal</th><th class="border border-zinc-200 px-4 py-3 text-center font-bold">Vertical (forage)</th><th class="border border-zinc-200 px-4 py-3 text-center font-bold">Sur nappe</th></tr></thead>
<tbody>
<tr><td class="border border-zinc-200 px-4 py-2 font-semibold">Prix total</td><td class="border border-zinc-200 px-4 py-2 text-center">15 000 – 20 000 €</td><td class="border border-zinc-200 px-4 py-2 text-center">20 000 – 30 000 €</td><td class="border border-zinc-200 px-4 py-2 text-center">18 000 – 25 000 €</td></tr>
<tr class="bg-zinc-50"><td class="border border-zinc-200 px-4 py-2 font-semibold">COP moyen</td><td class="border border-zinc-200 px-4 py-2 text-center">3,5 – 4</td><td class="border border-zinc-200 px-4 py-2 text-center">4 – 5</td><td class="border border-zinc-200 px-4 py-2 text-center">4,5 – 5,5</td></tr>
<tr><td class="border border-zinc-200 px-4 py-2 font-semibold">Surface terrain</td><td class="border border-zinc-200 px-4 py-2 text-center">1,5× surface habitable</td><td class="border border-zinc-200 px-4 py-2 text-center">20 m² minimum</td><td class="border border-zinc-200 px-4 py-2 text-center">20 m² minimum</td></tr>
<tr class="bg-zinc-50"><td class="border border-zinc-200 px-4 py-2 font-semibold">Profondeur</td><td class="border border-zinc-200 px-4 py-2 text-center">0,6 – 1,2 m</td><td class="border border-zinc-200 px-4 py-2 text-center">80 – 200 m</td><td class="border border-zinc-200 px-4 py-2 text-center">8 – 50 m</td></tr>
<tr><td class="border border-zinc-200 px-4 py-2 font-semibold">Durée travaux</td><td class="border border-zinc-200 px-4 py-2 text-center">2 – 3 jours</td><td class="border border-zinc-200 px-4 py-2 text-center">3 – 5 jours</td><td class="border border-zinc-200 px-4 py-2 text-center">2 – 4 jours</td></tr>
<tr class="bg-zinc-50"><td class="border border-zinc-200 px-4 py-2 font-semibold">Durée de vie</td><td class="border border-zinc-200 px-4 py-2 text-center">30 – 50 ans</td><td class="border border-zinc-200 px-4 py-2 text-center">50 – 100 ans</td><td class="border border-zinc-200 px-4 py-2 text-center">30 – 50 ans</td></tr>
</tbody>
</table>
</div>

<h2>Prix détaillé d'une installation géothermique en 2026</h2>
<p>Le coût total se décompose en plusieurs postes :</p>
<ul>
<li><strong>PAC géothermique</strong> : 8 000 € à 15 000 € selon la puissance (5 à 20 kW)</li>
<li><strong>Forage vertical</strong> : 80 € à 150 € par mètre linéaire (soit 6 400 € à 30 000 € pour 80 à 200 m)</li>
<li><strong>Captage horizontal</strong> : 3 000 € à 6 000 € (terrassement + tubes)</li>
<li><strong>Raccordement hydraulique</strong> : 1 500 € à 3 000 €</li>
<li><strong>Plancher chauffant</strong> (si nécessaire) : 40 € à 70 €/m²</li>
</ul>
<p>Le prix du forage varie selon la nature du sol : <strong>80 €/ml en terrain meuble</strong> (argile, sable) contre <strong>120 à 150 €/ml en roche dure</strong> (granit, calcaire). Les marques <a href="/marques/viessmann">Viessmann</a> et <a href="/marques/stiebel-eltron">Stiebel Eltron</a> proposent les PAC géothermiques les plus performantes du marché.</p>

<h2>Retour sur investissement : simulation concrète</h2>

<div class="bg-teal-50 border border-teal-200 rounded-xl p-6 my-8">
<h3 class="text-teal-800 font-bold text-lg mt-0">📊 Exemple : maison 120 m² chauffée au fioul</h3>
<div class="grid md:grid-cols-2 gap-4 mt-4">
<div>
<p class="text-sm font-semibold text-teal-700 mb-2">Avant (chauffage fioul)</p>
<ul class="text-sm space-y-1 list-none pl-0">
<li>Consommation : 18 000 kWh/an</li>
<li>Coût annuel : <strong>3 200 €/an</strong></li>
</ul>
</div>
<div>
<p class="text-sm font-semibold text-teal-700 mb-2">Après (géothermie verticale)</p>
<ul class="text-sm space-y-1 list-none pl-0">
<li>Consommation électrique : 3 600 kWh/an (COP 5)</li>
<li>Coût annuel : <strong>750 €/an</strong></li>
</ul>
</div>
</div>
<div class="mt-4 pt-4 border-t border-teal-200">
<p class="text-sm"><strong>Investissement</strong> : 24 000 € — <strong>Aides</strong> : −12 000 € — <strong>Reste à charge</strong> : 12 000 €</p>
<p class="text-sm"><strong>Économie annuelle</strong> : 2 450 €/an → <strong class="text-teal-700 text-base">Rentabilité en 4,9 ans</strong></p>
</div>
</div>

<h2>Aides financières pour la géothermie en 2026</h2>
<p>La géothermie bénéficie des aides les plus généreuses car elle est considérée comme la solution la plus performante. Consultez notre <a href="/guides/maprimenov-chauffage-2026">guide MaPrimeRénov' 2026</a> pour le barème complet.</p>
<ul>
<li><strong>MaPrimeRénov'</strong> : 5 000 € à 11 000 € selon vos revenus</li>
<li><strong>Prime CEE Coup de Pouce</strong> : 2 500 € à 5 000 €</li>
<li><strong>Éco-PTZ</strong> : jusqu'à 50 000 € à taux zéro sur 20 ans</li>
<li><strong>TVA réduite</strong> : 5,5% au lieu de 20% (économie de ~3 000 €)</li>
<li><strong>Aides locales</strong> : certains départements proposent des compléments (voir votre <a href="/annuaire">page département</a>)</li>
</ul>

<h2>Entretien et durée de vie</h2>
<p>La géothermie est le système de chauffage le plus durable :</p>
<ul>
<li><strong>PAC</strong> : durée de vie 15 à 25 ans, entretien annuel obligatoire (~200 €/an)</li>
<li><strong>Sondes verticales</strong> : durée de vie 50 à 100 ans, aucun entretien</li>
<li><strong>Capteurs horizontaux</strong> : durée de vie 30 à 50 ans, aucun entretien</li>
</ul>
<p>L'entretien annuel de la PAC est <strong>obligatoire depuis 2020</strong> pour les appareils contenant plus de 2 kg de fluide frigorigène. Il doit être réalisé par un professionnel <strong>certifié RGE</strong>.</p>

<h2>La géothermie est-elle faite pour vous ?</h2>
<div class="bg-orange-50 border border-orange-200 rounded-xl p-6 my-8">
<p class="font-bold text-orange-800 mt-0">✅ La géothermie est idéale si :</p>
<ul class="text-sm">
<li>Vous êtes propriétaire d'une maison avec terrain</li>
<li>Vous remplacez un chauffage fioul, gaz ou électrique</li>
<li>Votre logement fait plus de 100 m² et est correctement isolé</li>
<li>Vous prévoyez de rester dans votre logement plus de 10 ans</li>
</ul>
<p class="font-bold text-orange-800">❌ Préférez une autre solution si :</p>
<ul class="text-sm mb-0">
<li>Vous êtes en appartement → optez pour un <a href="/guides/chauffe-eau-thermodynamique-economies">chauffe-eau thermodynamique</a></li>
<li>Votre budget est serré → consultez notre guide <a href="/guides/chauffage-maison-ancienne-guide">chauffage maison ancienne</a></li>
<li>Votre terrain est trop petit et le forage impossible → PAC air-eau</li>
</ul>
</div>

<p>Prêt à concrétiser votre projet ? <a href="/devis"><strong>Demandez 3 devis gratuits</strong></a> auprès d'installateurs RGE de votre département.</p>`,
    },
    {
        id: 2,
        title: "Chauffe-eau : électrique, gaz, solaire, thermodynamique — le comparatif",
        slug: "chauffe-eau-comparatif",
        metaTitle: "Comparatif Chauffe-eau 2026 : Électrique vs Gaz vs Solaire vs Thermo",
        metaDescription: "Quel chauffe-eau choisir ? Comparatif détaillé des 4 technologies : électrique (300-1500€), gaz (600-2500€), solaire (3000-6000€), thermodynamique (2500-4500€).",
        category: "chauffe-eau",
        readTime: "14 min",
        updatedAt: "2026-02-15",
        excerpt: "Électrique, gaz, solaire ou thermodynamique ? Comparez les prix, rendements et durées de vie de chaque type de chauffe-eau pour 2026.",
        heroImage: "/images/guides/chauffe-eau-comparatif.png",
        heroAlt: "Comparatif des 4 types de chauffe-eau : électrique, gaz, solaire, thermodynamique",
        content: `<figure class="my-8 rounded-2xl overflow-hidden border border-zinc-200"><img src="/images/guides/chauffe-eau-comparatif.png" alt="Les 4 types de chauffe-eau : cumulus électrique, instantané gaz, solaire CESI, thermodynamique CET" class="w-full" /><figcaption class="text-sm text-zinc-500 text-center py-3 bg-zinc-50">Les 4 technologies de production d'eau chaude sanitaire en 2026</figcaption></figure>

<h2>Le tableau comparatif complet</h2>
<p>Avant de détailler chaque technologie, voici le comparatif synthétique pour vous aider à choisir :</p>

<div class="overflow-x-auto my-8">
<table class="w-full text-sm border-collapse">
<thead><tr class="bg-orange-50"><th class="border border-zinc-200 px-3 py-3 text-left font-bold">Critère</th><th class="border border-zinc-200 px-3 py-3 text-center font-bold">Électrique</th><th class="border border-zinc-200 px-3 py-3 text-center font-bold">Gaz</th><th class="border border-zinc-200 px-3 py-3 text-center font-bold">Solaire</th><th class="border border-zinc-200 px-3 py-3 text-center font-bold">Thermo.</th></tr></thead>
<tbody>
<tr><td class="border border-zinc-200 px-3 py-2 font-semibold">Prix (pose incluse)</td><td class="border border-zinc-200 px-3 py-2 text-center">300 – 1 500 €</td><td class="border border-zinc-200 px-3 py-2 text-center">600 – 2 500 €</td><td class="border border-zinc-200 px-3 py-2 text-center">3 000 – 6 000 €</td><td class="border border-zinc-200 px-3 py-2 text-center">2 500 – 4 500 €</td></tr>
<tr class="bg-zinc-50"><td class="border border-zinc-200 px-3 py-2 font-semibold">Coût annuel (4 pers.)</td><td class="border border-zinc-200 px-3 py-2 text-center">350 – 500 €</td><td class="border border-zinc-200 px-3 py-2 text-center">200 – 350 €</td><td class="border border-zinc-200 px-3 py-2 text-center">50 – 100 €</td><td class="border border-zinc-200 px-3 py-2 text-center">100 – 170 €</td></tr>
<tr><td class="border border-zinc-200 px-3 py-2 font-semibold">Durée de vie</td><td class="border border-zinc-200 px-3 py-2 text-center">10 – 15 ans</td><td class="border border-zinc-200 px-3 py-2 text-center">15 – 20 ans</td><td class="border border-zinc-200 px-3 py-2 text-center">20 – 25 ans</td><td class="border border-zinc-200 px-3 py-2 text-center">15 – 20 ans</td></tr>
<tr class="bg-zinc-50"><td class="border border-zinc-200 px-3 py-2 font-semibold">MaPrimeRénov'</td><td class="border border-zinc-200 px-3 py-2 text-center">Non</td><td class="border border-zinc-200 px-3 py-2 text-center">Non</td><td class="border border-zinc-200 px-3 py-2 text-center">Jusqu'à 4 000 €</td><td class="border border-zinc-200 px-3 py-2 text-center">Jusqu'à 1 200 €</td></tr>
<tr><td class="border border-zinc-200 px-3 py-2 font-semibold">Entretien</td><td class="border border-zinc-200 px-3 py-2 text-center">Détartrage / 2-3 ans</td><td class="border border-zinc-200 px-3 py-2 text-center">Annuel obligatoire</td><td class="border border-zinc-200 px-3 py-2 text-center">Tous les 2 ans</td><td class="border border-zinc-200 px-3 py-2 text-center">Tous les 2 ans</td></tr>
</tbody>
</table>
</div>

<h2>1. Chauffe-eau électrique (cumulus)</h2>
<p>Le <strong>ballon d'eau chaude électrique</strong> reste le plus répandu en France avec plus de 10 millions d'appareils installés. Sa simplicité et son prix d'achat attractif en font le choix par défaut, mais son coût de fonctionnement est le plus élevé.</p>
<h3>Fonctionnement</h3>
<p>Une résistance électrique (blindée ou stéatite) chauffe l'eau stockée dans un ballon isolé de 50 à 300 litres. Le temps de chauffe varie de <strong>6 à 8 heures</strong> pour atteindre 65°C. En profitant des <strong>heures creuses</strong> (tarif réduit de 22h à 6h), le coût peut être optimisé de 20 à 30%.</p>
<h3>Les meilleures marques</h3>
<p>Les marques <a href="/marques/atlantic">Atlantic</a> (gamme Zénéo) et <a href="/marques/thermor">Thermor</a> (gamme Malicio 2) dominent le marché français avec leur technologie anti-corrosion ACI Hybride qui double la durée de vie du ballon.</p>

<h2>2. Chauffe-eau gaz</h2>
<p>Instantané ou à accumulation, le chauffe-eau gaz offre un excellent confort avec de l'eau chaude en continu.</p>
<h3>Instantané vs accumulation</h3>
<ul>
<li><strong>Instantané</strong> (600 – 1 200 €) : chauffe l'eau à la demande, compact, idéal pour 1-2 points d'eau</li>
<li><strong>Accumulation</strong> (1 200 – 2 500 €) : ballon de 50 à 200L, débit élevé, confort supérieur</li>
</ul>
<p>⚠️ Le gaz naturel reste une énergie fossile. La réglementation RE2020 <strong>interdit les chaudières gaz dans le neuf</strong> depuis 2022. En rénovation, privilégiez le <a href="/guides/chauffe-eau-thermodynamique-economies">chauffe-eau thermodynamique</a> pour une solution d'avenir.</p>

<h2>3. Chauffe-eau solaire individuel (CESI)</h2>
<p>Le CESI utilise des <strong>panneaux solaires thermiques</strong> installés en toiture pour chauffer un fluide caloporteur qui transfère sa chaleur au ballon :</p>
<ul>
<li><strong>Couverture solaire</strong> : 50 à 80% des besoins selon la région (plus au sud)</li>
<li><strong>Surface panneaux</strong> : 2 à 5 m² pour un foyer de 3-4 personnes</li>
<li><strong>Appoint</strong> : résistance électrique intégrée pour les jours sans soleil</li>
</ul>
<p>C'est la solution la plus économique à l'usage mais nécessite une toiture bien orientée (sud ± 30°). Éligible <a href="/guides/maprimenov-chauffage-2026">MaPrimeRénov'</a> jusqu'à 4 000 €.</p>

<h2>4. Chauffe-eau thermodynamique (CET)</h2>
<p>Le CET est le <strong>meilleur compromis</strong> en 2026 : il divise par 3 la consommation d'un cumulus classique grâce à sa mini pompe à chaleur intégrée. Consultez notre <a href="/guides/chauffe-eau-thermodynamique-economies">guide dédié au CET</a> pour un approfondissement complet.</p>
<ul>
<li><strong>COP moyen</strong> : 2,5 à 3,5 → pour 1 kWh consommé, 3 kWh de chaleur produits</li>
<li><strong>Volume recommandé</strong> : 200L (2-3 pers.), 270L (4-5 pers.)</li>
<li><strong>Conditions</strong> : pièce non chauffée de 10 m³ minimum (garage, buanderie)</li>
</ul>
<p>Les marques leaders : <a href="/marques/atlantic">Atlantic</a> (Calypso), <a href="/marques/thermor">Thermor</a> (Aéromax 5), <a href="/marques/stiebel-eltron">Stiebel Eltron</a> (WWK 220).</p>

<h2>Quel chauffe-eau choisir ? Notre recommandation</h2>
<div class="bg-orange-50 border border-orange-200 rounded-xl p-6 my-8">
<ul class="space-y-2 mb-0">
<li>🏠 <strong>Maison avec garage ou buanderie</strong> → CET (meilleur rapport qualité/économies)</li>
<li>☀️ <strong>Maison avec toiture sud</strong> → CESI (économies maximales)</li>
<li>🏢 <strong>Appartement, petit budget</strong> → Cumulus électrique stéatite (simplicité)</li>
<li>🔧 <strong>Remplacement urgent</strong> → Électrique si pas de gaz, CET si espace disponible</li>
</ul>
</div>
<p>Quel que soit votre choix, <a href="/devis"><strong>comparez les devis d'installateurs RGE</strong></a> pour obtenir le meilleur prix dans votre ville.</p>`,
    },
    {
        id: 3,
        title: "VMC simple vs double flux : prix, débit et consommation",
        slug: "vmc-simple-vs-double-flux",
        metaTitle: "VMC Simple Flux vs Double Flux 2026 : Prix & Comparatif Complet",
        metaDescription: "VMC simple flux (500-1500€) ou double flux (3000-6000€) ? Comparatif débit, consommation, filtration. Quelle VMC pour votre logement ?",
        category: "vmc",
        readTime: "13 min",
        updatedAt: "2026-02-20",
        excerpt: "Simple flux ou double flux ? Comparez les performances, prix et économies d'énergie des deux systèmes de ventilation pour bien choisir.",
        heroImage: "/images/guides/vmc-comparatif.png",
        heroAlt: "Comparatif VMC simple flux et double flux dans une maison en coupe",
        content: `<figure class="my-8 rounded-2xl overflow-hidden border border-zinc-200"><img src="/images/guides/vmc-comparatif.png" alt="Comparaison VMC simple flux (extraction seule) et double flux (avec récupération de chaleur)" class="w-full" /><figcaption class="text-sm text-zinc-500 text-center py-3 bg-zinc-50">VMC simple flux (gauche) vs double flux avec échangeur thermique (droite)</figcaption></figure>

<h2>Pourquoi la VMC est indispensable</h2>
<p>Une VMC (Ventilation Mécanique Contrôlée) est <strong>obligatoire dans tout logement neuf</strong> depuis 1982 et fortement recommandée en rénovation. Sans ventilation, l'air intérieur est <strong>5 à 10 fois plus pollué</strong> que l'air extérieur (COV, formaldéhyde, radon, humidité).</p>
<p>Une mauvaise ventilation provoque : moisissures, condensation sur les fenêtres, allergies respiratoires, et dégrade l'isolation. Investir dans une VMC, c'est protéger votre santé ET votre patrimoine.</p>

<h2>Le comparatif complet</h2>
<div class="overflow-x-auto my-8">
<table class="w-full text-sm border-collapse">
<thead><tr class="bg-orange-50"><th class="border border-zinc-200 px-4 py-3 text-left font-bold">Critère</th><th class="border border-zinc-200 px-4 py-3 text-center font-bold">Simple flux auto</th><th class="border border-zinc-200 px-4 py-3 text-center font-bold">Simple flux hygro B</th><th class="border border-zinc-200 px-4 py-3 text-center font-bold">Double flux</th></tr></thead>
<tbody>
<tr><td class="border border-zinc-200 px-4 py-2 font-semibold">Prix (pose incluse)</td><td class="border border-zinc-200 px-4 py-2 text-center">500 – 800 €</td><td class="border border-zinc-200 px-4 py-2 text-center">800 – 1 500 €</td><td class="border border-zinc-200 px-4 py-2 text-center">3 000 – 6 000 €</td></tr>
<tr class="bg-zinc-50"><td class="border border-zinc-200 px-4 py-2 font-semibold">Récupération chaleur</td><td class="border border-zinc-200 px-4 py-2 text-center">❌ 0%</td><td class="border border-zinc-200 px-4 py-2 text-center">❌ 0%</td><td class="border border-zinc-200 px-4 py-2 text-center">✅ 80 – 95%</td></tr>
<tr><td class="border border-zinc-200 px-4 py-2 font-semibold">Économie chauffage</td><td class="border border-zinc-200 px-4 py-2 text-center">0%</td><td class="border border-zinc-200 px-4 py-2 text-center">5 – 10%</td><td class="border border-zinc-200 px-4 py-2 text-center">15 – 25%</td></tr>
<tr class="bg-zinc-50"><td class="border border-zinc-200 px-4 py-2 font-semibold">Consommation élec.</td><td class="border border-zinc-200 px-4 py-2 text-center">15 – 30 W</td><td class="border border-zinc-200 px-4 py-2 text-center">15 – 30 W</td><td class="border border-zinc-200 px-4 py-2 text-center">40 – 100 W</td></tr>
<tr><td class="border border-zinc-200 px-4 py-2 font-semibold">Filtration air</td><td class="border border-zinc-200 px-4 py-2 text-center">Aucune</td><td class="border border-zinc-200 px-4 py-2 text-center">Basique</td><td class="border border-zinc-200 px-4 py-2 text-center">F7 (pollen, PM2.5)</td></tr>
<tr class="bg-zinc-50"><td class="border border-zinc-200 px-4 py-2 font-semibold">Niveau sonore</td><td class="border border-zinc-200 px-4 py-2 text-center">25 – 35 dB</td><td class="border border-zinc-200 px-4 py-2 text-center">25 – 35 dB</td><td class="border border-zinc-200 px-4 py-2 text-center">30 – 40 dB</td></tr>
<tr><td class="border border-zinc-200 px-4 py-2 font-semibold">MaPrimeRénov'</td><td class="border border-zinc-200 px-4 py-2 text-center">Non</td><td class="border border-zinc-200 px-4 py-2 text-center">Non</td><td class="border border-zinc-200 px-4 py-2 text-center">1 500 – 2 500 €</td></tr>
</tbody>
</table>
</div>

<h2>VMC simple flux hygroréglable : la solution pragmatique</h2>
<p>La VMC simple flux extrait l'air vicié des pièces humides (cuisine, salle de bain, WC). L'air neuf entre naturellement par des entrées d'air dans les pièces de vie.</p>
<h3>Autoréglable vs hygroréglable</h3>
<ul>
<li><strong>Autoréglable</strong> : débit constant 24h/24 → pertes de chaleur inutiles en hiver</li>
<li><strong>Hygroréglable A</strong> : bouches d'extraction qui s'adaptent à l'humidité</li>
<li><strong>Hygroréglable B</strong> (recommandée) : bouches d'extraction ET entrées d'air adaptatives → <strong>économie de 10-15% sur le chauffage</strong> par rapport à l'autoréglable</li>
</ul>
<p>La marque <a href="/marques/aldes">Aldes</a> (gamme EasyHOME) est la référence en VMC simple flux en France, avec plus de 40% de parts de marché.</p>

<h2>VMC double flux : performance maximale</h2>
<p>La VMC double flux récupère jusqu'à <strong>95% de la chaleur</strong> de l'air extrait grâce à un échangeur thermique. Elle préconditionne l'air entrant, économisant 15 à 25% sur votre facture de chauffage — un complément parfait à une <a href="/guides/chauffage-geothermique-prix-forage">installation géothermique</a> ou une <a href="/guides/chaudiere-bois-granules">chaudière bois</a>.</p>
<h3>Avantages exclusifs de la double flux</h3>
<ul>
<li><strong>Filtration F7</strong> : élimine 95% des pollens, poussières fines (PM2.5), particules diesel</li>
<li><strong>Confort thermique</strong> : plus de courant d'air froid en hiver</li>
<li><strong>By-pass été</strong> : rafraîchissement naturel nocturne en été</li>
<li><strong>Conformité RE2020</strong> : quasi indispensable dans le neuf</li>
</ul>
<p>Les meilleures marques pour la double flux : <a href="/marques/aldes">Aldes</a> (InspirAIR Home) et <a href="/marques/de-dietrich">De Dietrich</a> (gamme Innovens).</p>

<h2>Quel choix pour votre situation ?</h2>
<div class="bg-orange-50 border border-orange-200 rounded-xl p-6 my-8">
<ul class="space-y-2 mb-0">
<li>🔧 <strong>Rénovation légère, budget serré</strong> → VMC simple flux hygro B (meilleur rapport coût/efficacité)</li>
<li>🏗️ <strong>Construction neuve (RE2020)</strong> → VMC double flux (quasi obligatoire pour le label)</li>
<li>🏚️ <strong>Rénovation globale BBC</strong> → VMC double flux + <a href="/guides/chauffage-maison-ancienne-guide">rénovation complète</a></li>
<li>🤧 <strong>Allergies, zone polluée</strong> → VMC double flux (filtration F7 indispensable)</li>
</ul>
</div>
<p><a href="/devis"><strong>Obtenez 3 devis gratuits</strong></a> pour votre VMC auprès d'installateurs certifiés RGE.</p>`,
    },
    {
        id: 4,
        title: "Chaudière bois/granulés : rendement, autonomie et prix",
        slug: "chaudiere-bois-granules",
        metaTitle: "Chaudière Bois & Granulés 2026 : Prix, Rendement & Guide d'Achat",
        metaDescription: "Chaudière bois bûches ou granulés (pellets) ? Prix (5000-15000€), rendement (85-95%), autonomie (1-12 mois). Guide complet pour choisir.",
        category: "chaudiere",
        readTime: "14 min",
        updatedAt: "2026-03-05",
        excerpt: "Bûches ou granulés ? Comparez les rendements, l'autonomie et les prix des chaudières bois pour chauffer votre maison au meilleur coût.",
        heroImage: "/images/guides/chaudiere-bois.png",
        heroAlt: "Chaudière à granulés avec silo de pellets dans un cellier de maison",
        content: `<figure class="my-8 rounded-2xl overflow-hidden border border-zinc-200"><img src="/images/guides/chaudiere-bois.png" alt="Installation complète d'une chaudière à granulés avec silo, ballon tampon et distribution radiateurs" class="w-full" /><figcaption class="text-sm text-zinc-500 text-center py-3 bg-zinc-50">Installation type : chaudière à granulés avec silo de stockage et ballon tampon</figcaption></figure>

<h2>Le bois : l'énergie de chauffage la moins chère de France</h2>
<p>Avec un coût de <strong>5 à 8 centimes par kWh</strong>, le bois (bûches et granulés) est 2 à 3 fois moins cher que l'électricité (17-22 cts/kWh) et le gaz (10-13 cts/kWh). C'est aussi une énergie <strong>renouvelable et locale</strong> : la France possède la 4ᵉ forêt d'Europe, et sa surface augmente chaque année.</p>

<h2>Comparatif bûches vs granulés</h2>
<div class="overflow-x-auto my-8">
<table class="w-full text-sm border-collapse">
<thead><tr class="bg-orange-50"><th class="border border-zinc-200 px-4 py-3 text-left font-bold">Critère</th><th class="border border-zinc-200 px-4 py-3 text-center font-bold">Bûches</th><th class="border border-zinc-200 px-4 py-3 text-center font-bold">Granulés (pellets)</th></tr></thead>
<tbody>
<tr><td class="border border-zinc-200 px-4 py-2 font-semibold">Prix chaudière (pose)</td><td class="border border-zinc-200 px-4 py-2 text-center">5 000 – 10 000 €</td><td class="border border-zinc-200 px-4 py-2 text-center">10 000 – 18 000 €</td></tr>
<tr class="bg-zinc-50"><td class="border border-zinc-200 px-4 py-2 font-semibold">Rendement</td><td class="border border-zinc-200 px-4 py-2 text-center">80 – 92%</td><td class="border border-zinc-200 px-4 py-2 text-center">90 – 97%</td></tr>
<tr><td class="border border-zinc-200 px-4 py-2 font-semibold">Autonomie</td><td class="border border-zinc-200 px-4 py-2 text-center">6 – 12 heures</td><td class="border border-zinc-200 px-4 py-2 text-center">6 – 12 mois</td></tr>
<tr class="bg-zinc-50"><td class="border border-zinc-200 px-4 py-2 font-semibold">Coût combustible</td><td class="border border-zinc-200 px-4 py-2 text-center">~70 €/stère (4 cts/kWh)</td><td class="border border-zinc-200 px-4 py-2 text-center">~350 €/tonne (7 cts/kWh)</td></tr>
<tr><td class="border border-zinc-200 px-4 py-2 font-semibold">Alimentation</td><td class="border border-zinc-200 px-4 py-2 text-center">Manuelle (1-2×/jour)</td><td class="border border-zinc-200 px-4 py-2 text-center">Automatique (vis sans fin)</td></tr>
<tr class="bg-zinc-50"><td class="border border-zinc-200 px-4 py-2 font-semibold">Stockage nécessaire</td><td class="border border-zinc-200 px-4 py-2 text-center">Bûcher extérieur</td><td class="border border-zinc-200 px-4 py-2 text-center">Silo (1 à 5 m³)</td></tr>
</tbody>
</table>
</div>

<h3>La chaudière à gazéification : le haut de gamme bûches</h3>
<p>La technologie de <strong>gazéification inversée</strong> brûle le bois à très haute température (1 000°C), atteignant des rendements de 90 à 92%. Les marques <a href="/marques/viessmann">Viessmann</a> (Vitoligno 150-S) et <a href="/marques/de-dietrich">De Dietrich</a> (Turbo BT) sont les références dans cette gamme.</p>

<h3>La chaudière à granulés automatique</h3>
<p>Alimentée automatiquement par une vis sans fin depuis un silo, elle offre un <strong>confort quasi identique au gaz</strong>. Avec un rendement de 95-97% en version condensation, c'est la solution bois la plus performante. <a href="/marques/bosch">Bosch</a> et <a href="/marques/viessmann">Viessmann</a> proposent les modèles les plus fiables.</p>

<h2>Coût de fonctionnement annuel</h2>
<div class="bg-teal-50 border border-teal-200 rounded-xl p-6 my-8">
<h3 class="text-teal-800 font-bold text-lg mt-0">📊 Coût annuel pour une maison de 120 m²</h3>
<ul class="text-sm space-y-2 mb-0">
<li><strong>Chaudière bûches</strong> : 5 à 7 stères → <strong>350 € à 500 €/an</strong></li>
<li><strong>Chaudière granulés</strong> : 3 à 5 tonnes → <strong>1 000 € à 1 700 €/an</strong></li>
<li><strong>Chaudière gaz</strong> (pour comparaison) : <strong>1 400 € à 2 200 €/an</strong></li>
<li><strong>Chauffage électrique</strong> (pour comparaison) : <strong>2 400 € à 3 500 €/an</strong></li>
</ul>
</div>

<h2>Aides financières pour la chaudière bois en 2026</h2>
<p>Le bois bénéficie d'aides très généreuses, presque au niveau de la <a href="/guides/chauffage-geothermique-prix-forage">géothermie</a>. Consultez notre <a href="/guides/maprimenov-chauffage-2026">guide MaPrimeRénov'</a> pour le barème par revenus.</p>
<ul>
<li><strong>MaPrimeRénov'</strong> : 5 500 € à 11 000 € selon revenus</li>
<li><strong>Prime CEE</strong> : 800 € à 4 000 € (Coup de Pouce Chauffage)</li>
<li><strong>TVA réduite</strong> : 5,5%</li>
<li><strong>Éco-PTZ</strong> : jusqu'à 50 000 € à taux zéro</li>
</ul>

<h2>Entretien obligatoire</h2>
<ul>
<li><strong>Ramonage</strong> : 2 fois par an dont 1 pendant la période de chauffe (60-100 €/ramonage)</li>
<li><strong>Entretien annuel</strong> : nettoyage complet, vérification des joints et réglages (~200-300 €)</li>
<li><strong>Décendrage</strong> : hebdomadaire (bûches) ou mensuel (granulés)</li>
</ul>

<h2>La chaudière bois est-elle faite pour vous ?</h2>
<div class="bg-orange-50 border border-orange-200 rounded-xl p-6 my-8">
<ul class="space-y-2 mb-0">
<li>✅ <strong>Maison rurale avec espace de stockage</strong> → idéale (prix imbattable)</li>
<li>✅ <strong>Remplacement chaudière fioul</strong> → transition naturelle, mêmes émetteurs</li>
<li>❌ <strong>Appartement ou maison sans cave</strong> → préférez un <a href="/guides/chauffe-eau-thermodynamique-economies">CET</a></li>
<li>❌ <strong>Absence fréquente</strong> → seulement si granulés automatiques</li>
</ul>
</div>
<p><a href="/devis"><strong>Comparez les prix</strong></a> auprès d'installateurs de chaudières bois certifiés RGE dans votre département.</p>`,
    },
    {
        id: 5,
        title: "Chauffe-eau thermodynamique : fonctionnement et économies réelles",
        slug: "chauffe-eau-thermodynamique-economies",
        metaTitle: "Chauffe-eau Thermodynamique 2026 : COP, Prix & Économies Réelles",
        metaDescription: "Le CET consomme 3× moins qu'un cumulus classique. Prix (2500-4500€), COP 2.5-3.5, aides MaPrimeRénov'. Vaut-il l'investissement ?",
        category: "chauffe-eau",
        readTime: "12 min",
        updatedAt: "2026-02-28",
        excerpt: "Le chauffe-eau thermodynamique divise par 3 votre facture d'eau chaude. Découvrez son fonctionnement, son COP et les aides disponibles.",
        heroImage: "/images/guides/cet-thermodynamique.png",
        heroAlt: "Vue en coupe d'un chauffe-eau thermodynamique avec pompe à chaleur intégrée",
        content: `<figure class="my-8 rounded-2xl overflow-hidden border border-zinc-200"><img src="/images/guides/cet-thermodynamique.png" alt="Fonctionnement interne d'un chauffe-eau thermodynamique : compresseur, évaporateur et échangeur" class="w-full" /><figcaption class="text-sm text-zinc-500 text-center py-3 bg-zinc-50">Vue en coupe : la pompe à chaleur (haut) capte les calories de l'air pour chauffer l'eau du ballon</figcaption></figure>

<h2>Comment fonctionne un chauffe-eau thermodynamique ?</h2>
<p>Un CET intègre une <strong>mini pompe à chaleur</strong> sur le dessus du ballon. Cette PAC capte les calories présentes dans l'air ambiant (garage, buanderie, cave) pour chauffer l'eau. Le principe est celui d'un réfrigérateur inversé : l'air est refroidi et l'énergie récupérée est transférée à l'eau via un échangeur.</p>
<p>Le cycle thermodynamique se décompose en 4 étapes :</p>
<ol>
<li><strong>Évaporation</strong> : le fluide frigorigène capte la chaleur de l'air ambiant</li>
<li><strong>Compression</strong> : le compresseur augmente la température du gaz (jusqu'à 80°C)</li>
<li><strong>Condensation</strong> : le gaz chaud transfère sa chaleur à l'eau du ballon via le serpentin</li>
<li><strong>Détente</strong> : le fluide refroidit et le cycle recommence</li>
</ol>

<h2>Performance : comprendre le COP</h2>
<p>Le COP (Coefficient de Performance) est LE critère de choix. Un COP de 3 signifie que pour <strong>1 kWh d'électricité consommé, le CET produit 3 kWh de chaleur</strong> :</p>
<div class="overflow-x-auto my-8">
<table class="w-full text-sm border-collapse">
<thead><tr class="bg-orange-50"><th class="border border-zinc-200 px-4 py-3 text-left font-bold">Conditions</th><th class="border border-zinc-200 px-4 py-3 text-center font-bold">COP moyen</th><th class="border border-zinc-200 px-4 py-3 text-center font-bold">Économie vs cumulus</th></tr></thead>
<tbody>
<tr><td class="border border-zinc-200 px-4 py-2">Pièce à 20°C (intérieur chauffé)</td><td class="border border-zinc-200 px-4 py-2 text-center font-bold text-teal-700">3,5 – 4,0</td><td class="border border-zinc-200 px-4 py-2 text-center">72 – 75%</td></tr>
<tr class="bg-zinc-50"><td class="border border-zinc-200 px-4 py-2">Garage/buanderie à 15°C</td><td class="border border-zinc-200 px-4 py-2 text-center font-bold text-teal-700">3,0 – 3,5</td><td class="border border-zinc-200 px-4 py-2 text-center">67 – 72%</td></tr>
<tr><td class="border border-zinc-200 px-4 py-2">Cave à 10°C</td><td class="border border-zinc-200 px-4 py-2 text-center font-bold">2,5 – 3,0</td><td class="border border-zinc-200 px-4 py-2 text-center">60 – 67%</td></tr>
<tr class="bg-zinc-50"><td class="border border-zinc-200 px-4 py-2">Local non chauffé < 5°C</td><td class="border border-zinc-200 px-4 py-2 text-center">1,5 – 2,5</td><td class="border border-zinc-200 px-4 py-2 text-center">33 – 60%</td></tr>
</tbody>
</table>
</div>
<p>⚠️ <strong>Point crucial</strong> : en dessous de 5°C, le CET bascule sur sa résistance électrique d'appoint, annulant les économies. C'est pourquoi l'installation dans un <strong>local non chauffé de 10 m³ minimum</strong> est essentielle.</p>

<h2>Économies réelles : simulation sur 15 ans</h2>
<div class="bg-teal-50 border border-teal-200 rounded-xl p-6 my-8">
<h3 class="text-teal-800 font-bold text-lg mt-0">📊 Foyer de 4 personnes — ballon 270L</h3>
<div class="grid md:grid-cols-2 gap-4 mt-4">
<div>
<p class="text-sm font-semibold text-teal-700 mb-2">Cumulus électrique classique</p>
<ul class="text-sm space-y-1 list-none pl-0">
<li>Consommation : 2 200 kWh/an</li>
<li>Coût annuel : <strong>460 €/an</strong></li>
<li>Coût sur 15 ans : <strong>6 900 € + achat 800 €</strong></li>
</ul>
</div>
<div>
<p class="text-sm font-semibold text-teal-700 mb-2">Chauffe-eau thermodynamique</p>
<ul class="text-sm space-y-1 list-none pl-0">
<li>Consommation : 730 kWh/an (COP 3)</li>
<li>Coût annuel : <strong>155 €/an</strong></li>
<li>Coût sur 15 ans : <strong>2 325 € + achat 3 200 €</strong></li>
</ul>
</div>
</div>
<div class="mt-4 pt-4 border-t border-teal-200">
<p class="text-sm mb-0"><strong>Économie sur 15 ans</strong> : 7 700 € − 5 525 € = <strong class="text-teal-700 text-base">+2 175 € de gain net</strong> (avant aides MaPrimeRénov')</p>
</div>
</div>

<h2>Les meilleures marques de CET en 2026</h2>
<ul>
<li><a href="/marques/atlantic"><strong>Atlantic Calypso</strong></a> : le best-seller français, COP 3.2, connecté WiFi, garantie 5 ans</li>
<li><a href="/marques/thermor"><strong>Thermor Aéromax 5</strong></a> : technologie ACI Hybride anti-corrosion, très silencieux (37 dB)</li>
<li><a href="/marques/stiebel-eltron"><strong>Stiebel Eltron WWK</strong></a> : COP record de 3.5, fabrication allemande, garantie 7 ans compresseur</li>
</ul>
<p>Consultez notre <a href="/guides/chauffe-eau-comparatif">comparatif complet des chauffe-eau</a> pour voir toutes les options.</p>

<h2>Prix et aides en 2026</h2>
<ul>
<li><strong>Prix moyen</strong> : 2 500 € à 4 500 € (pose comprise)</li>
<li><strong>MaPrimeRénov'</strong> : 400 € à 1 200 € (<a href="/guides/maprimenov-chauffage-2026">voir barème</a>)</li>
<li><strong>Prime CEE</strong> : 100 € à 200 €</li>
<li><strong>TVA réduite</strong> : 5,5% (logement > 2 ans)</li>
</ul>

<p><a href="/devis"><strong>Demandez vos devis gratuits</strong></a> pour un CET auprès d'installateurs certifiés RGE.</p>`,
    },
    {
        id: 6,
        title: "Géothermie horizontale vs verticale : quelle solution choisir ?",
        slug: "geothermie-horizontale-vs-verticale",
        metaTitle: "Géothermie Horizontale vs Verticale : Comparatif Prix & Performance",
        metaDescription: "Captage horizontal (15-20k€) ou forage vertical (20-30k€) ? Surface de terrain, rendement, durabilité. Quel captage géothermique vous convient ?",
        category: "geothermie",
        readTime: "11 min",
        updatedAt: "2026-03-10",
        excerpt: "Horizontal ou vertical ? Comparez les deux modes de captage géothermique selon votre terrain, votre budget et vos objectifs de performance.",
        heroImage: "/images/guides/geothermie-horizontal-vertical.png",
        heroAlt: "Comparaison captage géothermique : boucles horizontales à gauche et forage vertical à droite",
        content: `<figure class="my-8 rounded-2xl overflow-hidden border border-zinc-200"><img src="/images/guides/geothermie-horizontal-vertical.png" alt="Schéma comparatif : captage horizontal (boucles à 1m) vs forage vertical (sonde à 100m)" class="w-full" /><figcaption class="text-sm text-zinc-500 text-center py-3 bg-zinc-50">Captage horizontal avec boucles enterrées (gauche) vs forage vertical à 100m (droite)</figcaption></figure>

<h2>Deux méthodes, deux philosophies</h2>
<p>La PAC géothermique exploite la chaleur du sol. Deux approches permettent de la capter. Le choix dépend principalement de votre <strong>surface de terrain</strong>, de votre <strong>budget</strong> et de vos <strong>exigences de performance</strong>. Consultez notre <a href="/guides/chauffage-geothermique-prix-forage">guide complet géothermie</a> pour les détails de prix.</p>

<h2>Le comparatif détaillé</h2>
<div class="overflow-x-auto my-8">
<table class="w-full text-sm border-collapse">
<thead><tr class="bg-orange-50"><th class="border border-zinc-200 px-4 py-3 text-left font-bold">Critère</th><th class="border border-zinc-200 px-4 py-3 text-center font-bold">Horizontal</th><th class="border border-zinc-200 px-4 py-3 text-center font-bold">Vertical</th></tr></thead>
<tbody>
<tr><td class="border border-zinc-200 px-4 py-2 font-semibold">Prix total</td><td class="border border-zinc-200 px-4 py-2 text-center">15 000 – 20 000 €</td><td class="border border-zinc-200 px-4 py-2 text-center">20 000 – 30 000 €</td></tr>
<tr class="bg-zinc-50"><td class="border border-zinc-200 px-4 py-2 font-semibold">COP moyen</td><td class="border border-zinc-200 px-4 py-2 text-center">3,5 – 4</td><td class="border border-zinc-200 px-4 py-2 text-center">4 – 5</td></tr>
<tr><td class="border border-zinc-200 px-4 py-2 font-semibold">Surface terrain requise</td><td class="border border-zinc-200 px-4 py-2 text-center">1,5 à 2× la surface habitable</td><td class="border border-zinc-200 px-4 py-2 text-center">20 m² suffisent</td></tr>
<tr class="bg-zinc-50"><td class="border border-zinc-200 px-4 py-2 font-semibold">Profondeur</td><td class="border border-zinc-200 px-4 py-2 text-center">0,6 – 1,2 m</td><td class="border border-zinc-200 px-4 py-2 text-center">80 – 200 m</td></tr>
<tr><td class="border border-zinc-200 px-4 py-2 font-semibold">Stabilité thermique</td><td class="border border-zinc-200 px-4 py-2 text-center">Variable (saisons)</td><td class="border border-zinc-200 px-4 py-2 text-center">Très stable (12-15°C)</td></tr>
<tr class="bg-zinc-50"><td class="border border-zinc-200 px-4 py-2 font-semibold">Durée de vie capteurs</td><td class="border border-zinc-200 px-4 py-2 text-center">30 – 50 ans</td><td class="border border-zinc-200 px-4 py-2 text-center">50 – 100 ans</td></tr>
<tr><td class="border border-zinc-200 px-4 py-2 font-semibold">Impact jardin</td><td class="border border-zinc-200 px-4 py-2 text-center">Temporaire (pelouse)</td><td class="border border-zinc-200 px-4 py-2 text-center">Minimal (1 point de forage)</td></tr>
<tr class="bg-zinc-50"><td class="border border-zinc-200 px-4 py-2 font-semibold">Autorisations</td><td class="border border-zinc-200 px-4 py-2 text-center">Aucune</td><td class="border border-zinc-200 px-4 py-2 text-center">Déclaration BRGM</td></tr>
</tbody>
</table>
</div>

<h2>Captage horizontal : pour les grands terrains</h2>
<p>Des tubes en polyéthylène sont enterrés en serpentins à <strong>60 cm à 1,20 m de profondeur</strong> sur une grande surface. Le fluide caloporteur circule et capte les calories du sol réchauffé par le soleil et la pluie.</p>
<h3>Contraintes à connaître</h3>
<ul>
<li><strong>Interdiction de planter des arbres</strong> au-dessus des capteurs (racines)</li>
<li><strong>Pas de construction</strong> (terrasse, piscine) sur la zone de captage</li>
<li><strong>Performance variable</strong> : en hiver rigoureux, le COP peut baisser à 3</li>
</ul>
<p>Les fabricants <a href="/marques/viessmann">Viessmann</a> et <a href="/marques/de-dietrich">De Dietrich</a> proposent des kits complets captage + PAC avec garantie 5 ans.</p>

<h2>Captage vertical (forage) : performance maximale</h2>
<p>Une ou plusieurs sondes sont forées à <strong>80 à 200 m de profondeur</strong> où la température est constante (12-15°C toute l'année). C'est la solution la plus performante mais aussi la plus coûteuse.</p>
<h3>Le prix du forage selon le sol</h3>
<ul>
<li><strong>Terrain meuble</strong> (argile, sable) : 80 – 100 €/ml</li>
<li><strong>Terrain mixte</strong> (calcaire, marne) : 100 – 120 €/ml</li>
<li><strong>Roche dure</strong> (granit, basalte) : 120 – 150 €/ml</li>
</ul>

<h2>Comment choisir ?</h2>
<div class="bg-orange-50 border border-orange-200 rounded-xl p-6 my-8">
<ul class="space-y-2 mb-0">
<li>🏡 <strong>Terrain > 200 m² libre, budget modéré</strong> → Horizontal</li>
<li>🏘️ <strong>Petit terrain urbain</strong> → Vertical (seule option viable)</li>
<li>⚡ <strong>Performance max et longue durée</strong> → Vertical (COP 5, durée 100 ans)</li>
<li>💰 <strong>Prix le plus bas</strong> → Horizontal (5 000 à 10 000 € de moins)</li>
</ul>
</div>
<p>Dans tous les cas, faites réaliser une <strong>étude de sol préalable</strong> par un bureau d'études. <a href="/devis"><strong>Demandez vos devis</strong></a> pour une étude et un chiffrage complet.</p>`,
    },
    {
        id: 7,
        title: "MaPrimeRénov' chauffage : barème 2026, simulation en ligne",
        slug: "maprimenov-chauffage-2026",
        metaTitle: "MaPrimeRénov' Chauffage 2026 : Barème, Montants & Simulation",
        metaDescription: "MaPrimeRénov' 2026 : jusqu'à 11 000€ pour une PAC géothermique, 5 500€ pour une chaudière bois. Barème par revenus et simulez votre aide.",
        category: "aides",
        readTime: "13 min",
        updatedAt: "2026-01-15",
        excerpt: "Guide complet MaPrimeRénov' 2026 pour le chauffage : montants par équipement, conditions de revenus et simulation de votre aide en ligne.",
        heroImage: "/images/guides/maprimenov-2026.png",
        heroAlt: "Infographie MaPrimeRénov' : aides de l'État pour la rénovation énergétique",
        content: `<figure class="my-8 rounded-2xl overflow-hidden border border-zinc-200"><img src="/images/guides/maprimenov-2026.png" alt="MaPrimeRénov' 2026 : flux d'aides de l'État vers une maison en rénovation énergétique" class="w-full" /><figcaption class="text-sm text-zinc-500 text-center py-3 bg-zinc-50">MaPrimeRénov' : les aides de l'État pour financer votre projet de chauffage</figcaption></figure>

<h2>MaPrimeRénov' 2026 : les points clés</h2>
<p><strong>MaPrimeRénov'</strong> est la principale aide de l'État pour la rénovation énergétique. En 2026, les montants sont maintenus et revalorisés pour les équipements performants. Cette aide est <strong>cumulable</strong> avec les primes CEE, l'Éco-PTZ et la TVA réduite.</p>

<h2>Barème complet par équipement et revenus</h2>
<div class="overflow-x-auto my-8">
<table class="w-full text-sm border-collapse">
<thead><tr class="bg-orange-50"><th class="border border-zinc-200 px-3 py-3 text-left font-bold">Équipement</th><th class="border border-zinc-200 px-3 py-3 text-center font-bold">Très modestes</th><th class="border border-zinc-200 px-3 py-3 text-center font-bold">Modestes</th><th class="border border-zinc-200 px-3 py-3 text-center font-bold">Intermédiaires</th><th class="border border-zinc-200 px-3 py-3 text-center font-bold">Supérieurs</th></tr></thead>
<tbody>
<tr><td class="border border-zinc-200 px-3 py-2 font-semibold">PAC géothermique</td><td class="border border-zinc-200 px-3 py-2 text-center font-bold text-teal-700">11 000 €</td><td class="border border-zinc-200 px-3 py-2 text-center">9 000 €</td><td class="border border-zinc-200 px-3 py-2 text-center">6 000 €</td><td class="border border-zinc-200 px-3 py-2 text-center text-zinc-400">Non éligible</td></tr>
<tr class="bg-zinc-50"><td class="border border-zinc-200 px-3 py-2 font-semibold">Chaudière bois/granulés</td><td class="border border-zinc-200 px-3 py-2 text-center font-bold text-teal-700">11 000 €</td><td class="border border-zinc-200 px-3 py-2 text-center">8 000 €</td><td class="border border-zinc-200 px-3 py-2 text-center">5 500 €</td><td class="border border-zinc-200 px-3 py-2 text-center text-zinc-400">Non éligible</td></tr>
<tr><td class="border border-zinc-200 px-3 py-2 font-semibold">VMC double flux</td><td class="border border-zinc-200 px-3 py-2 text-center">2 500 €</td><td class="border border-zinc-200 px-3 py-2 text-center">2 000 €</td><td class="border border-zinc-200 px-3 py-2 text-center">1 500 €</td><td class="border border-zinc-200 px-3 py-2 text-center text-zinc-400">Non éligible</td></tr>
<tr class="bg-zinc-50"><td class="border border-zinc-200 px-3 py-2 font-semibold">CET</td><td class="border border-zinc-200 px-3 py-2 text-center">1 200 €</td><td class="border border-zinc-200 px-3 py-2 text-center">800 €</td><td class="border border-zinc-200 px-3 py-2 text-center">400 €</td><td class="border border-zinc-200 px-3 py-2 text-center text-zinc-400">Non éligible</td></tr>
<tr><td class="border border-zinc-200 px-3 py-2 font-semibold">CESI (solaire)</td><td class="border border-zinc-200 px-3 py-2 text-center">4 000 €</td><td class="border border-zinc-200 px-3 py-2 text-center">3 000 €</td><td class="border border-zinc-200 px-3 py-2 text-center">2 000 €</td><td class="border border-zinc-200 px-3 py-2 text-center text-zinc-400">Non éligible</td></tr>
</tbody>
</table>
</div>

<h2>Plafonds de revenus 2026 (hors Île-de-France)</h2>
<div class="overflow-x-auto my-8">
<table class="w-full text-sm border-collapse">
<thead><tr class="bg-orange-50"><th class="border border-zinc-200 px-4 py-3 text-left font-bold">Foyer</th><th class="border border-zinc-200 px-4 py-3 text-center font-bold">Très modestes</th><th class="border border-zinc-200 px-4 py-3 text-center font-bold">Modestes</th><th class="border border-zinc-200 px-4 py-3 text-center font-bold">Intermédiaires</th></tr></thead>
<tbody>
<tr><td class="border border-zinc-200 px-4 py-2 font-semibold">1 personne</td><td class="border border-zinc-200 px-4 py-2 text-center">17 009 €</td><td class="border border-zinc-200 px-4 py-2 text-center">21 805 €</td><td class="border border-zinc-200 px-4 py-2 text-center">30 549 €</td></tr>
<tr class="bg-zinc-50"><td class="border border-zinc-200 px-4 py-2 font-semibold">2 personnes</td><td class="border border-zinc-200 px-4 py-2 text-center">24 875 €</td><td class="border border-zinc-200 px-4 py-2 text-center">31 889 €</td><td class="border border-zinc-200 px-4 py-2 text-center">44 907 €</td></tr>
<tr><td class="border border-zinc-200 px-4 py-2 font-semibold">3 personnes</td><td class="border border-zinc-200 px-4 py-2 text-center">29 917 €</td><td class="border border-zinc-200 px-4 py-2 text-center">38 349 €</td><td class="border border-zinc-200 px-4 py-2 text-center">54 071 €</td></tr>
<tr class="bg-zinc-50"><td class="border border-zinc-200 px-4 py-2 font-semibold">4 personnes</td><td class="border border-zinc-200 px-4 py-2 text-center">34 948 €</td><td class="border border-zinc-200 px-4 py-2 text-center">44 802 €</td><td class="border border-zinc-200 px-4 py-2 text-center">63 235 €</td></tr>
</tbody>
</table>
</div>

<h2>Les autres aides cumulables</h2>
<ul>
<li><strong>Prime CEE Coup de Pouce</strong> : 800 € à 5 000 € selon l'équipement et l'opérateur (EDF, Engie, TotalEnergies)</li>
<li><strong>Éco-PTZ</strong> : prêt à taux zéro jusqu'à 50 000 € sur 20 ans, sans conditions de revenus</li>
<li><strong>TVA 5,5%</strong> : sur l'ensemble des travaux (main d'œuvre + matériel) pour les logements de plus de 2 ans</li>
<li><strong>Aides locales</strong> : certains départements et régions complètent les aides nationales (voir votre <a href="/annuaire">page département</a>)</li>
</ul>

<h2>Conditions d'éligibilité</h2>
<ul>
<li>Logement construit depuis plus de <strong>15 ans</strong> (2 ans pour remplacement chaudière fioul/charbon)</li>
<li>Résidence principale occupée au moins 8 mois/an</li>
<li>Travaux réalisés par un artisan <strong>certifié RGE</strong></li>
<li>Demande à effectuer <strong>avant le début des travaux</strong> sur maprimenov.gouv.fr</li>
</ul>

<h2>Simulation : cumul des aides pour une PAC géothermique</h2>
<div class="bg-teal-50 border border-teal-200 rounded-xl p-6 my-8">
<h3 class="text-teal-800 font-bold text-lg mt-0">📊 Ménage modeste — PAC géothermique verticale à 24 000 €</h3>
<ul class="text-sm space-y-1">
<li>MaPrimeRénov' : <strong>−9 000 €</strong></li>
<li>Prime CEE Coup de Pouce : <strong>−4 000 €</strong></li>
<li>TVA 5,5% (vs 20%) : <strong>−2 900 €</strong></li>
<li>Total aides : <strong>−15 900 €</strong></li>
</ul>
<p class="text-sm mt-4 mb-0"><strong>Reste à charge : 8 100 €</strong> finançable par Éco-PTZ (0% sur 15 ans = 45 €/mois)</p>
</div>

<p>Retrouvez nos guides par équipement : <a href="/guides/chauffage-geothermique-prix-forage">géothermie</a>, <a href="/guides/chaudiere-bois-granules">chaudière bois</a>, <a href="/guides/chauffe-eau-thermodynamique-economies">CET</a>, <a href="/guides/vmc-simple-vs-double-flux">VMC</a>. Et <a href="/devis"><strong>demandez vos devis gratuits</strong></a> pour concrétiser votre projet.</p>`,
    },
    {
        id: 8,
        title: "Quel chauffage pour une maison ancienne ? Guide complet",
        slug: "chauffage-maison-ancienne-guide",
        metaTitle: "Chauffage Maison Ancienne 2026 : Quelle Solution Choisir ?",
        metaDescription: "Géothermie, chaudière bois, PAC air-eau ou VMC double flux ? Le guide complet pour choisir le bon chauffage dans une maison ancienne (avant 1975).",
        category: "renovation",
        readTime: "15 min",
        updatedAt: "2026-03-15",
        excerpt: "Votre maison date d'avant 1975 ? Découvrez les meilleures solutions de chauffage en rénovation : géothermie, chaudière bois, PAC, VMC.",
        heroImage: "/images/guides/chauffage-maison-ancienne.png",
        heroAlt: "Avant/après rénovation énergétique d'une maison ancienne en pierre",
        content: `<figure class="my-8 rounded-2xl overflow-hidden border border-zinc-200"><img src="/images/guides/chauffage-maison-ancienne.png" alt="Comparaison avant/après : maison ancienne mal isolée vs rénovée avec pompe à chaleur et panneaux solaires" class="w-full" /><figcaption class="text-sm text-zinc-500 text-center py-3 bg-zinc-50">Avant/après : une maison ancienne transformée par la rénovation énergétique</figcaption></figure>

<h2>Le défi des maisons d'avant 1975</h2>
<p>Les maisons construites avant la première réglementation thermique (1975) représentent <strong>60% du parc immobilier français</strong> — soit 17 millions de logements. Souvent classées E, F ou G au DPE, ce sont des passoires énergétiques qui consomment 2 à 5 fois plus qu'un logement récent.</p>
<p>La bonne nouvelle : ces logements bénéficient des <a href="/guides/maprimenov-chauffage-2026">aides MaPrimeRénov'</a> les plus élevées, car le gain énergétique est maximal.</p>

<h2>Règle n°1 : isoler d'abord, chauffer ensuite</h2>
<p>Installer un chauffage performant dans une passoire thermique, c'est chauffer l'extérieur. Voici les priorités d'isolation par ordre d'impact :</p>
<div class="overflow-x-auto my-8">
<table class="w-full text-sm border-collapse">
<thead><tr class="bg-orange-50"><th class="border border-zinc-200 px-4 py-3 text-left font-bold">Zone</th><th class="border border-zinc-200 px-4 py-3 text-center font-bold">Déperditions</th><th class="border border-zinc-200 px-4 py-3 text-center font-bold">Coût moyen</th><th class="border border-zinc-200 px-4 py-3 text-center font-bold">Aide MPR</th></tr></thead>
<tbody>
<tr><td class="border border-zinc-200 px-4 py-2 font-semibold">Combles et toiture</td><td class="border border-zinc-200 px-4 py-2 text-center font-bold text-red-600">30%</td><td class="border border-zinc-200 px-4 py-2 text-center">1 500 – 3 000 €</td><td class="border border-zinc-200 px-4 py-2 text-center">Jusqu'à 25 €/m²</td></tr>
<tr class="bg-zinc-50"><td class="border border-zinc-200 px-4 py-2 font-semibold">Murs (ITE ou ITI)</td><td class="border border-zinc-200 px-4 py-2 text-center font-bold text-orange-600">20 – 25%</td><td class="border border-zinc-200 px-4 py-2 text-center">8 000 – 20 000 €</td><td class="border border-zinc-200 px-4 py-2 text-center">Jusqu'à 75 €/m²</td></tr>
<tr><td class="border border-zinc-200 px-4 py-2 font-semibold">Fenêtres double vitrage</td><td class="border border-zinc-200 px-4 py-2 text-center">10 – 15%</td><td class="border border-zinc-200 px-4 py-2 text-center">500 – 1 000 €/fenêtre</td><td class="border border-zinc-200 px-4 py-2 text-center">Jusqu'à 100 €/fenêtre</td></tr>
<tr class="bg-zinc-50"><td class="border border-zinc-200 px-4 py-2 font-semibold">Plancher bas</td><td class="border border-zinc-200 px-4 py-2 text-center">7 – 10%</td><td class="border border-zinc-200 px-4 py-2 text-center">2 000 – 5 000 €</td><td class="border border-zinc-200 px-4 py-2 text-center">Variable</td></tr>
</tbody>
</table>
</div>

<h2>Les meilleures solutions par situation</h2>

<h3>🏡 Maison rurale avec terrain (> 200 m²)</h3>
<div class="bg-teal-50 border-l-4 border-teal-500 p-4 my-4">
<p class="font-bold text-teal-800 mt-0">Recommandation : <a href="/guides/chaudiere-bois-granules">chaudière bois/granulés</a> + <a href="/guides/vmc-simple-vs-double-flux">VMC hygro B</a></p>
<p class="text-sm mb-0">Si le terrain le permet, la <a href="/guides/chauffage-geothermique-prix-forage">géothermie horizontale</a> est un excellent investissement à long terme. Budget : 15 000 – 25 000 € avant aides.</p>
</div>

<h3>🏘️ Maison de ville sans terrain</h3>
<div class="bg-teal-50 border-l-4 border-teal-500 p-4 my-4">
<p class="font-bold text-teal-800 mt-0">Recommandation : PAC air-eau + <a href="/guides/chauffe-eau-thermodynamique-economies">CET</a> + <a href="/guides/vmc-simple-vs-double-flux">VMC double flux</a></p>
<p class="text-sm mb-0">Sans terrain pour la géothermie, la PAC air-eau remplace idéalement une chaudière fioul/gaz tout en conservant vos radiateurs existants. Budget : 12 000 – 18 000 € avant aides.</p>
</div>

<h3>💰 Budget serré (< 5 000 € de reste à charge)</h3>
<div class="bg-teal-50 border-l-4 border-teal-500 p-4 my-4">
<p class="font-bold text-teal-800 mt-0">Recommandation : <a href="/guides/chauffe-eau-thermodynamique-economies">CET</a> + isolation combles + VMC hygro B</p>
<p class="text-sm mb-0">Commencez par les travaux au meilleur ratio coût/économie. Le CET seul économise 300 €/an, l'isolation des combles 500 €/an. Budget total : 5 000 – 8 000 € avant aides.</p>
</div>

<h2>Le parcours accompagné MaPrimeRénov' Rénovation d'Ampleur</h2>
<p>Depuis 2024, le parcours <strong>Rénovation d'Ampleur</strong> permet de financer un bouquet de travaux (isolation + chauffage + ventilation) avec des aides pouvant couvrir <strong>jusqu'à 90% du coût total</strong> pour les ménages très modestes. C'est la voie royale pour rénover une maison ancienne.</p>
<ul>
<li><strong>Gain minimum de 2 classes DPE</strong> exigé (ex : F → D)</li>
<li><strong>Accompagnement obligatoire</strong> par un Mon Accompagnateur Rénov' (MAR)</li>
<li><strong>Plafond de travaux</strong> : 40 000 € à 70 000 € selon le gain DPE visé</li>
</ul>

<h2>Les marques adaptées à la rénovation</h2>
<p>En rénovation, privilégiez les marques qui offrent des gammes spécialement conçues pour le remplacement :</p>
<ul>
<li><a href="/marques/viessmann"><strong>Viessmann</strong></a> : gamme Vitocal pour le remplacement chaudière fioul → PAC</li>
<li><a href="/marques/de-dietrich"><strong>De Dietrich</strong></a> : chaudières bois adaptées aux installations existantes</li>
<li><a href="/marques/atlantic"><strong>Atlantic</strong></a> : CET Calypso spécial remplacement cumulus</li>
<li><a href="/marques/aldes"><strong>Aldes</strong></a> : VMC EasyHOME pour la rénovation sans gros travaux</li>
</ul>

<p>Prêt à rénover ? <a href="/devis"><strong>Demandez 3 devis gratuits</strong></a> et commencez votre projet de rénovation énergétique.</p>`,
    },
];

import { City } from '@/types';

/**
 * Simple deterministic hash from string → number.
 * Used to pick spintax variants consistently per city slug.
 */
function hashCode(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash |= 0;
    }
    return Math.abs(hash);
}

function pickVariant(options: string[], seed: string): string {
    return options[hashCode(seed) % options.length];
}

function pickVariantIdx(count: number, seed: string): number {
    return hashCode(seed) % count;
}

export function getCityIntro(city: City, categorySlug: string): string {
    const pop = city.population || 0;
    const seed = `${city.slug}-${categorySlug}`;

    const introsByCategory: Record<string, Record<string, string[]>> = {
        geothermie: {
            large: [
                `Moteur économique du département ${city.department_name}, l'agglomération de ${city.name} est un terrain idéal pour la géothermie grâce à son sous-sol favorable.`,
                `Dans la métropole dynamique de ${city.name}, de nombreux propriétaires se tournent vers la géothermie pour un chauffage durable avec un COP supérieur à 4.`,
                `Le bassin de vie de ${city.name} concentre les meilleurs foreurs et installateurs géothermiques de la région ${city.region}.`,
                `L'importance du parc immobilier de ${city.name} en fait un territoire stratégique pour le déploiement de la géothermie domestique, soutenue par les aides locales du ${city.department_name}.`,
                `L'urbanisme de ${city.name} favorise les projets géothermiques en zone pavillonnaire, où les terrains offrent l'espace nécessaire pour le captage horizontal ou le forage vertical.`,
            ],
            medium: [
                `La commune de ${city.name} voit fleurir les projets géothermiques, en particulier les captages horizontaux sur les parcelles résidentielles.`,
                `À ${city.name}, l'amélioration du DPE est une priorité. La géothermie est plébiscitée pour son rendement et sa stabilité face aux fluctuations des prix de l'énergie.`,
                `Fort de ses ${pop.toLocaleString('fr-FR')} habitants, ${city.name} dispose d'un réseau d'artisans RGE qualifiés pour les installations géothermiques.`,
                `Le patrimoine bâti de ${city.name} se rénove progressivement : les PAC géothermiques remplacent avantageusement les anciennes chaudières fioul encore présentes dans le ${city.department_name}.`,
            ],
            small: [
                `Le cadre résidentiel de ${city.name} offre l'espace nécessaire pour un captage géothermique horizontal performant.`,
                `En plein ${city.department_name}, ${city.name} bénéficie d'experts géothermiques capables d'évaluer la nature de votre sous-sol.`,
                `Les propriétaires de ${city.name} profitent de terrains spacieux, idéaux pour l'installation de capteurs géothermiques horizontaux à moindre coût.`,
                `Dans la commune de ${city.name}, les habitations individuelles sont parfaitement adaptées au chauffage géothermique, avec un retour sur investissement estimé entre 7 et 12 ans.`,
            ],
            default: [
                `Dans le département ${city.department_name}, le secteur de ${city.name} est couvert par notre réseau de foreurs et installateurs géothermiques.`,
                `Les habitants de ${city.name} peuvent bénéficier des mêmes aides MaPrimeRénov' que les grandes agglomérations pour leur projet de géothermie dans le ${city.department_name}.`,
            ],
        },
        "chauffe-eau": {
            large: [
                `À ${city.name}, le remplacement des cumulus vétustes par des chauffe-eau performants (thermodynamiques, solaires) est une priorité de la transition énergétique locale.`,
                `Avec ses ${pop.toLocaleString('fr-FR')} habitants, ${city.name} dispose d'un réseau dense de plombiers-chauffagistes pour l'installation de votre chauffe-eau.`,
                `Le parc de logements de ${city.name} compte un grand nombre de ballons d'eau chaude vieillissants : leur remplacement par un CET (chauffe-eau thermodynamique) divise la facture ECS par 3.`,
                `Dans l'agglomération de ${city.name}, les installateurs certifiés RGE proposent des solutions de production d'eau chaude adaptées à tous les types de logements, de l'appartement à la maison individuelle.`,
            ],
            medium: [
                `À ${city.name}, de nombreux foyers remplacent leur ancien cumulus par un chauffe-eau thermodynamique pour diviser leur facture d'eau chaude par 3.`,
                `La commune de ${city.name} accompagne ses résidents dans la transition énergétique : le remplacement du chauffe-eau est souvent le premier geste recommandé par les audits DPE.`,
                `Avec un parc de ${pop.toLocaleString('fr-FR')} habitants, ${city.name} multiplie les chantiers de remplacement de chauffe-eau, motivés par les aides MaPrimeRénov' et les primes CEE.`,
            ],
            small: [
                `Les propriétaires de ${city.name} bénéficient des mêmes aides MaPrimeRénov' que les grandes villes pour le remplacement de leur chauffe-eau.`,
                `À ${city.name}, l'installation d'un chauffe-eau thermodynamique représente un investissement moyen de 3 200 € hors aides, amorti en 5 à 7 ans grâce aux économies d'énergie.`,
                `Dans le secteur de ${city.name}, les artisans plombiers-chauffagistes du ${city.department_name} interviennent pour tous types de chauffe-eau : cumulus, gaz, solaire ou thermodynamique.`,
            ],
            default: [
                `Les plombiers-chauffagistes du ${city.department_name} interviennent à ${city.name} pour l'installation de tous types de chauffe-eau.`,
                `À ${city.name} et ses alentours, les installateurs certifiés RGE proposent des devis gratuits pour le remplacement de votre chauffe-eau.`,
            ],
        },
        vmc: {
            large: [
                `La densité urbaine de ${city.name} rend la VMC indispensable pour assurer une qualité d'air intérieur optimale dans les logements.`,
                `À ${city.name} (${city.zip}), les experts en ventilation proposent des solutions VMC double flux avec récupération de chaleur jusqu'à 95%.`,
                `L'habitat collectif et individuel de ${city.name} nécessite des systèmes de ventilation adaptés : la VMC hygroréglable est le standard recommandé par les professionnels du ${city.department_name}.`,
                `Avec son parc immobilier diversifié, ${city.name} se distingue par une forte demande en installation et rénovation de VMC, portée par les exigences de la RE2020.`,
            ],
            medium: [
                `À ${city.name}, l'installation d'une VMC hygroréglable est le premier geste pour améliorer le confort et la santé dans votre logement.`,
                `La commune de ${city.name} recense de nombreux logements construits avant les normes d'aération de 1982 : l'installation d'une VMC y est particulièrement recommandée.`,
                `Les résidents de ${city.name} bénéficient d'un réseau d'artisans qualifiés en ventilation, capables d'installer VMC simple flux, hygro B ou double flux haut rendement.`,
            ],
            small: [
                `Les habitations de ${city.name} nécessitent une ventilation adaptée. Nos partenaires installent VMC simple et double flux dans tout le ${city.department_name}.`,
                `À ${city.name}, une VMC correctement dimensionnée élimine les problèmes d'humidité et de condensation, fréquents dans les maisons anciennes du ${city.department_name}.`,
                `Les propriétaires de ${city.name} optent de plus en plus pour la VMC hygroréglable de type B, qui régule automatiquement le débit d'air selon l'humidité ambiante.`,
            ],
            default: [
                `Dans le ${city.department_name}, les spécialistes VMC interviennent à ${city.name} pour assurer une ventilation saine de votre logement.`,
                `À ${city.name}, l'installation d'une VMC est un investissement santé : elle renouvelle l'air intérieur et prévient les moisissures, allergies et dégradations du bâti.`,
            ],
        },
        "chaudiere-bois": {
            large: [
                `Le bassin de vie de ${city.name} se distingue par un maillage exceptionnel de chauffagistes spécialisés en chaudières bois et granulés.`,
                `À ${city.name}, les chaudières à granulés automatiques séduisent de plus en plus de propriétaires grâce à un prix du combustible imbattable.`,
                `L'agglomération de ${city.name} bénéficie d'un approvisionnement en bois et granulés facilité par la proximité des scieries et centres de distribution du ${city.department_name}.`,
                `Le remplacement des chaudières fioul par des chaudières bois est un enjeu majeur dans le ${city.department_name}, et ${city.name} concentre le plus grand nombre d'installations.`,
            ],
            medium: [
                `La commune de ${city.name} est idéalement située pour profiter des circuits courts d'approvisionnement en bois et granulés du ${city.department_name}.`,
                `À ${city.name}, la chaudière à granulés s'impose comme l'alternative la plus économique au fioul, avec un coût de combustible 2 à 3 fois inférieur.`,
                `Les artisans chauffagistes de ${city.name} et du ${city.department_name} accompagnent les propriétaires dans la transition du fioul vers le bois, avec un reste à charge réduit grâce aux aides.`,
            ],
            small: [
                `Les maisons individuelles de ${city.name} sont parfaitement adaptées à l'installation d'une chaudière bois avec silo de stockage.`,
                `En milieu rural comme à ${city.name}, la chaudière bois-bûches reste la solution la plus économique : le stère de bois ne dépasse pas 70 € dans le ${city.department_name}.`,
                `Les habitants de ${city.name} profitent de la forêt avoisinante pour un approvisionnement local en bois de chauffage, réduisant encore le coût de fonctionnement.`,
            ],
            default: [
                `Les installateurs de chaudières bois du ${city.department_name} couvrent le secteur de ${city.name} et proposent des solutions adaptées à votre habitation.`,
                `À ${city.name}, les certifications RGE de nos artisans partenaires vous garantissent l'accès à l'ensemble des aides financières pour votre chaudière bois.`,
            ],
        },
        "chauffe-eau-thermodynamique": {
            large: [
                `À ${city.name}, le chauffe-eau thermodynamique (CET) est devenu le standard pour l'eau chaude sanitaire dans les logements neufs et en rénovation.`,
                `Avec un COP moyen de 3, le CET installé à ${city.name} divise par 3 votre consommation d'eau chaude par rapport à un cumulus classique.`,
                `Le taux d'équipement en CET progresse rapidement dans l'agglomération de ${city.name}, porté par les obligations de la RE2020 et les aides MaPrimeRénov'.`,
                `Les installateurs de ${city.name} maîtrisent les deux configurations de CET : air ambiant (garage, buanderie) et air extérieur gainé, pour s'adapter à chaque logement.`,
            ],
            medium: [
                `De plus en plus de foyers à ${city.name} optent pour un chauffe-eau thermodynamique, éligible à MaPrimeRénov' et aux primes CEE.`,
                `La commune de ${city.name} incite ses résidents à remplacer les cumulus énergivores : le CET offre un temps de retour sur investissement de 5 ans en moyenne.`,
                `À ${city.name} (${city.zip}), les artisans plombiers certifiés RGE du ${city.department_name} installent des CET des meilleures marques : Atlantic, Thermor, Stiebel Eltron.`,
            ],
            small: [
                `À ${city.name}, l'installation d'un CET est accessible à partir de 2 500 €, avant déduction des aides qui peuvent couvrir jusqu'à 40% du coût.`,
                `Les propriétaires de ${city.name} découvrent le CET : une solution fiable avec 15 à 20 ans de durée de vie et un fonctionnement silencieux (< 40 dB).`,
                `Dans le secteur de ${city.name}, nos partenaires installateurs proposent des CET adaptés à votre configuration : air ambiant, air extérieur ou sur boucle d'eau.`,
            ],
            default: [
                `Les installateurs certifiés du ${city.department_name} proposent des CET performants aux habitants de ${city.name} et des communes voisines.`,
                `À ${city.name}, le passage d'un cumulus électrique à un CET permet d'économiser 300 € par an en moyenne sur la facture d'eau chaude d'un foyer de 4 personnes.`,
            ],
        },
    };

    const catIntros = introsByCategory[categorySlug] || introsByCategory["chauffe-eau"];

    if (pop > 50000) return pickVariant(catIntros.large, seed);
    if (pop > 10000) return pickVariant(catIntros.medium, seed);
    if (pop > 2000) return pickVariant(catIntros.small, seed);
    return pickVariant(catIntros.default, seed);
}

/**
 * Returns a unique "local insight" paragraph specific to this city + category.
 * This add completely unique content per page to avoid duplicate-content penalties.
 */
export function getLocalInsight(city: City, categorySlug: string): string {
    const pop = city.population || 0;
    const seed = `insight-${city.slug}-${categorySlug}`;
    const idx = pickVariantIdx(6, seed);

    const climateZones: Record<string, string> = {
        'Île-de-France': 'zone H1a, aux hivers modérés mais humides',
        'Hauts-de-France': 'zone H1a, parmi les plus froides de France',
        'Grand Est': 'zone H1b, soumise à des hivers rigoureux et des amplitudes thermiques importantes',
        'Normandie': 'zone H1a, caractérisée par un climat océanique frais et humide',
        'Bretagne': 'zone H2a, au climat doux mais venteux',
        'Pays de la Loire': 'zone H2b, au climat océanique tempéré',
        'Centre-Val de Loire': 'zone H1b, aux hivers frais avec des épisodes de gel prolongés',
        'Bourgogne-Franche-Comté': 'zone H1c, au climat semi-continental avec des hivers parfois rudes',
        'Nouvelle-Aquitaine': 'zone H2c, bénéficiant d\'un climat globalement doux',
        'Occitanie': 'zone H3, au climat méditerranéen et aux hivers courts',
        'Auvergne-Rhône-Alpes': 'zone H1c, marquée par des hivers froids en altitude',
        'Provence-Alpes-Côte d\'Azur': 'zone H3, la plus ensoleillée de France',
        'Corse': 'zone H3, au climat méditerranéen avec des nuances montagnardes',
    };

    const climate = climateZones[city.region] || `une zone climatique spécifique du ${city.department_name}`;

    const insights = [
        `${city.name} se situe en ${climate}. Ce facteur climatique influence directement le dimensionnement de l'installation et le rendement attendu. Les professionnels locaux du ${city.department_name} intègrent ces données dans chaque étude technique pour optimiser votre investissement.`,
        `Avec un parc immobilier dont une part significative date d'avant 1975, ${city.name} est un territoire prioritaire pour la rénovation énergétique. Les diagnostiqueurs DPE du ${city.department_name} constatent régulièrement des classements E à G sur les anciennes constructions, rendant les travaux d'autant plus rentables grâce aux aides majorées.`,
        `La position géographique de ${city.name} en ${climate} en fait un cas d'étude intéressant : les besoins en chauffage sur la saison de chauffe et les économies réalisables varient selon l'exposition, l'altitude et le micro-climat local. Un audit énergétique préalable est vivement conseillé.`,
        `Les artisans RGE intervenant à ${city.name} et dans le ${city.department_name} connaissent les spécificités du bâti local. Qu'il s'agisse de maisons en pierre, de pavillons des années 70 ou de constructions récentes, chaque type de logement requiert une approche adaptée pour maximiser les performances énergétiques.`,
        `Le marché de la rénovation énergétique à ${city.name} est dynamique : les demandes de devis ont augmenté de plus de 30% en un an dans le ${city.department_name}. Cette tendance s'explique par la hausse du prix de l'énergie et le renforcement des aides publiques, rendant les projets plus accessibles.`,
        `${pop > 10000 ? `Ville de ${pop.toLocaleString('fr-FR')} habitants, ${city.name}` : `Commune du ${city.department_name}, ${city.name}`} bénéficie de l'expertise des bureaux d'études thermiques et des installateurs spécialisés de la région. La concurrence locale garantit des tarifs compétitifs et un délai d'intervention rapide, généralement sous 2 à 4 semaines.`,
    ];

    return insights[idx];
}

/**
 * Returns a unique "why choose this solution" paragraph.
 */
export function getWhyChoose(city: City, categorySlug: string): string {
    const seed = `why-${city.slug}-${categorySlug}`;

    const whyByCategory: Record<string, string[]> = {
        geothermie: [
            `Opter pour la géothermie à ${city.name}, c'est investir dans un chauffage dont le combustible est gratuit et inépuisable. Avec un COP de 4 à 5, chaque euro d'électricité consommé produit 4 à 5 € de chaleur. Sur 20 ans, les économies cumulées dépassent les 30 000 € par rapport au fioul.`,
            `La géothermie installée à ${city.name} offre le meilleur rendement énergétique toutes solutions confondues. En captage vertical, la température constante du sous-sol du ${city.department_name} (12-15°C) garantit un COP stable été comme hiver. C'est aussi la seule solution capable de chauffer, rafraîchir ET produire l'eau chaude sanitaire.`,
            `Le retour sur investissement d'une PAC géothermique à ${city.name} est estimé entre 5 et 10 ans grâce au cumul des aides (MaPrimeRénov' + CEE + TVA 5,5%). Après amortissement, vous chauffez votre maison pour moins de 800 € par an, contre 2 500 à 3 500 € en énergie fossile.`,
        ],
        "chauffe-eau": [
            `Passer à un chauffe-eau performant à ${city.name} est le geste de rénovation au meilleur ratio investissement/économie. Un CET à 3 200 € (avant aides) permet d'économiser 300 €/an, soit un retour en 7 ans maximum — et il dure 15 à 20 ans.`,
            `Le chauffe-eau représente 15 à 20% de la facture énergétique globale d'un foyer à ${city.name}. Choisir la bonne technologie (thermodynamique, solaire ou haut rendement) peut réduire ce poste de 50 à 75%. C'est le premier investissement recommandé avant un projet de rénovation plus global.`,
        ],
        vmc: [
            `Installer une VMC performante à ${city.name} est un investissement santé autant qu'énergétique. Sans ventilation correcte, l'air intérieur est 5 à 10 fois plus pollué que l'air extérieur. La VMC double flux filtre les particules fines (PM2.5), pollens et COV tout en récupérant 90% de la chaleur.`,
            `La VMC est le complément indispensable de tout projet d'isolation à ${city.name}. Une maison étanche sans ventilation adaptée développe moisissures et condensation en quelques mois. L'investissement dans une VMC hygro B ou double flux est rapidement amorti par les économies de chauffage et l'absence de dégâts liés à l'humidité.`,
        ],
        "chaudiere-bois": [
            `Le chauffage au bois à ${city.name} est la solution la plus économique à l'usage : le kWh bois coûte 4 à 7 centimes, contre 17 à 22 centimes pour l'électricité. Pour une maison de 120 m², la facture annuelle descend sous les 1 000 €, hors aides à l'installation.`,
            `Choisir une chaudière bois à ${city.name} est un choix écologique et patrimonial. Le bois est la seule énergie de chauffage considérée comme neutre en carbone (le CO₂ émis est compensé par la croissance des arbres). Le ${city.department_name} bénéficie d'un approvisionnement local en bois et granulés, réduisant l'empreinte logistique.`,
        ],
        "chauffe-eau-thermodynamique": [
            `Le CET est le meilleur compromis à ${city.name} pour produire l'eau chaude sanitaire : il consomme 3 fois moins qu'un cumulus électrique classique, coûte moins cher qu'un CESI (solaire) et ne nécessite ni toiture orientée sud ni panneaux. Un garage ou une buanderie suffisent.`,
            `Installer un chauffe-eau thermodynamique à ${city.name} permet de réduire de 65 à 75% votre consommation d'eau chaude. Pour un foyer de 4 personnes, c'est 300 € d'économies annuelles garanties, avec un confort identique voire supérieur grâce à la montée en température rapide des derniers modèles.`,
        ],
    };

    const variants = whyByCategory[categorySlug] || whyByCategory["chauffe-eau"];
    return pickVariant(variants, seed);
}

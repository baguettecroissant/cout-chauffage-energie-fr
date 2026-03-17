export interface Brand {
    slug: string;
    name: string;
    country: string;
    tagline: string;
    description: string;
    strengths: string[];
    categories: string[];
    letter: string;
    letterColor: string;
    image?: string;
    imageAlt?: string;
}

export const brands: Brand[] = [
    {
        slug: "viessmann",
        name: "Viessmann",
        country: "Allemagne",
        tagline: "Leader européen de la thermique intelligente",
        description: "Viessmann est une référence mondiale en matière de systèmes de chauffage. Fondée en 1917, l'entreprise propose une gamme complète allant de la chaudière bois aux pompes géothermiques, en passant par les chauffe-eau solaires. Leurs produits se distinguent par une fiabilité exceptionnelle et des technologies connectées (WiFi, régulation intelligente). Le SAV Viessmann est considéré comme l'un des meilleurs du marché avec un réseau de techniciens partenaires dans toute la France.",
        strengths: ["Technologie connectée WiFi", "Gamme très large", "SAV premium", "Rendement >97%"],
        categories: ["geothermie", "chaudiere-bois", "chauffe-eau"],
        letter: "V",
        letterColor: "red",
        image: "/images/marques/viessmann.png",
        imageAlt: "Équipement Viessmann : chaudière à condensation et pompe à chaleur installés dans un local technique",
    },
    {
        slug: "bosch",
        name: "Bosch Thermotechnologie",
        country: "Allemagne",
        tagline: "L'ingénierie allemande au service du confort thermique",
        description: "Bosch Thermotechnologie (anciennement ELM Leblanc en France) propose des solutions de chauffage et d'eau chaude reconnues pour leur fiabilité germanique. Leur gamme de chaudières gaz et bois à condensation et de chauffe-eau est parmi les plus efficientes du marché. Le groupe investit massivement dans l'hydrogène et les solutions hybrides. Avec des usines en France (Drancy), Bosch combine qualité allemande et proximité locale.",
        strengths: ["Fiabilité légendaire", "Usines en France", "Innovation hydrogène", "Prix compétitifs"],
        categories: ["chauffe-eau", "chaudiere-bois"],
        letter: "B",
        letterColor: "blue",
        image: "/images/marques/bosch.png",
        imageAlt: "Chaudière murale Bosch avec ballon d'eau chaude dans un local technique moderne",
    },
    {
        slug: "de-dietrich",
        name: "De Dietrich",
        country: "France",
        tagline: "Le savoir-faire français depuis 1684",
        description: "De Dietrich est le plus ancien fabricant de chaudières au monde. Basée en Alsace, cette marque emblématique française est synonyme de qualité industrielle haut de gamme. Leurs chaudières bois à gazéification et leurs solutions géothermiques sont prisées par les installateurs RGE pour leur durabilité exceptionnelle (garantie 5 ans corps de chauffe). De Dietrich est aussi un acteur majeur de la VMC avec sa gamme Innovens.",
        strengths: ["Héritage 340 ans", "Made in France", "Garantie 5 ans", "Haute performance"],
        categories: ["geothermie", "chaudiere-bois", "vmc"],
        letter: "D",
        letterColor: "slate",
        image: "/images/marques/de-dietrich.png",
        imageAlt: "Chaudière bois à gazéification De Dietrich avec stockage bûches dans un cellier",
    },
    {
        slug: "atlantic",
        name: "Atlantic",
        country: "France",
        tagline: "Le confort thermique Made in France",
        description: "Atlantic est le leader français du chauffage et de l'eau chaude sanitaire. Avec 13 sites de production en France, Atlantic incarne le Made in France dans l'industrie thermique. Leur gamme de chauffe-eau (électriques, thermodynamiques, solaires) est la plus vendue en France. La marque se distingue par son programme d'intelligence artificielle intégrée dans les nouvelles générations de produits et son service après-vente national.",
        strengths: ["N°1 français eau chaude", "13 usines en France", "IA intégrée", "Réseau SAV national"],
        categories: ["chauffe-eau", "chauffe-eau-thermodynamique", "chaudiere-bois"],
        letter: "A",
        letterColor: "orange",
        image: "/images/marques/atlantic.png",
        imageAlt: "Chauffe-eau thermodynamique Atlantic installé dans une buanderie moderne",
    },
    {
        slug: "thermor",
        name: "Thermor",
        country: "France",
        tagline: "Spécialiste français de l'eau chaude et du chauffage électrique",
        description: "Filiale du groupe Atlantic, Thermor est LE spécialiste français de l'eau chaude. Depuis 1931, Thermor conçoit et fabrique en France des solutions innovantes : chauffe-eau électriques (dont le Malicio 2), chauffe-eau thermodynamiques (Aéromax) et radiateurs. Leur technologie ACI Hybride brevetée offre une protection anti-corrosion double (anode magnésium + titane) qui double la durée de vie du produit.",
        strengths: ["Spécialiste eau chaude", "Technologie ACI Hybride", "100% fabrication France", "Garantie étendue"],
        categories: ["chauffe-eau", "chauffe-eau-thermodynamique"],
        letter: "T",
        letterColor: "teal",
        image: "/images/marques/thermor.png",
        imageAlt: "Chauffe-eau électrique et thermodynamique Thermor installés dans une salle d'eau",
    },
    {
        slug: "aldes",
        name: "Aldes",
        country: "France",
        tagline: "L'expert français de la ventilation",
        description: "Aldes est la référence incontournable de la VMC en France. Fondée à Lyon en 1925, cette entreprise familiale est le N°1 de la ventilation résidentielle et tertiaire. Leur gamme InspirAIR et EasyHOME est devenue un standard dans la construction neuve comme en rénovation. Aldes a révolutionné le marché avec sa VMC double flux connectée et sa technologie de purification d'air intégrée, essentielle pour un habitat sain.",
        strengths: ["N°1 VMC France", "VMC connectée", "Purification air", "100 ans d'expertise"],
        categories: ["vmc"],
        letter: "A",
        letterColor: "cyan",
        image: "/images/marques/aldes.png",
        imageAlt: "Centrale VMC double flux Aldes installée dans des combles avec réseau de gaines",
    },
    {
        slug: "stiebel-eltron",
        name: "Stiebel Eltron",
        country: "Allemagne",
        tagline: "Pioneer allemand du chauffe-eau thermodynamique",
        description: "Stiebel Eltron est un pionnier de la transition énergétique. Fondée en 1924, cette entreprise allemande est reconnue mondialement pour ses pompes à chaleur géothermiques (WPF) et ses chauffe-eau thermodynamiques (WWK). Avec un COP record jusqu'à 5.1, leurs produits sont parmi les plus efficients du marché. Stiebel Eltron investit massivement en R&D et propose des garanties parmi les plus longues du secteur (jusqu'à 7 ans compresseur).",
        strengths: ["COP record 5.1", "Garantie 7 ans", "Pioneer géothermie", "R&D avancée"],
        categories: ["geothermie", "chauffe-eau-thermodynamique"],
        letter: "S",
        letterColor: "emerald",
        image: "/images/marques/stiebel-eltron.png",
        imageAlt: "Pompe à chaleur géothermique Stiebel Eltron avec collecteur plancher chauffant",
    },
];

import { City } from "@/types";
import { HeatingCategory } from "@/types";

/**
 * Schema.org structured data for city service pages.
 * Uses Service + AreaServed pattern (not LocalBusiness which implies we ARE the business).
 */
export function SchemaOrg({ city, category }: { city: City; category: HeatingCategory }) {
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": `Installation ${category.label} à ${city.name}`,
        "description": `Comparez les devis d'installateurs certifiés RGE pour ${category.article} à ${city.name} (${city.zip}), ${city.department_name}. Prix moyens, aides MaPrimeRénov' et artisans locaux.`,
        "provider": {
            "@type": "Organization",
            "name": "Cout-Chauffage-Energie.fr",
            "url": "https://www.cout-chauffage-energie.fr",
        },
        "areaServed": {
            "@type": "City",
            "name": city.name,
            "containedInPlace": {
                "@type": "AdministrativeArea",
                "name": city.department_name,
            },
        },
        "serviceType": `Installation ${category.label}`,
        "availableChannel": {
            "@type": "ServiceChannel",
            "serviceUrl": `https://www.cout-chauffage-energie.fr/${category.slug}/${city.slug}`,
        },
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Accueil",
                "item": "https://www.cout-chauffage-energie.fr",
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": category.label,
                "item": `https://www.cout-chauffage-energie.fr/${category.slug}/paris-75000`,
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": `${category.label} ${city.name}`,
                "item": `https://www.cout-chauffage-energie.fr/${category.slug}/${city.slug}`,
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
        </>
    );
}

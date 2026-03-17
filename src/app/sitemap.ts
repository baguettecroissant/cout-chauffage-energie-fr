import { MetadataRoute } from 'next';
import { getAllDepartments, getCitiesByDepartment } from '@/lib/cities';
import { guides } from '@/data/guides';
import { brands } from '@/data/brands';
import { CATEGORY_SLUGS } from '@/data/categories';

const BASE_URL = 'https://www.cout-chauffage-energie.fr';

/**
 * generateSitemaps() tells Next.js to create a sitemap index
 * with multiple sub-sitemaps. IDs:
 * - 0 = main (static pages, guides, brands, departments)
 * - 1..N = department codes (01, 02, ..., 95, 2A, 2B, 971-976)
 */
export async function generateSitemaps() {
    const departments = getAllDepartments();
    return [
        { id: 0 },
        ...departments.map((d, i) => ({ id: i + 1 })),
    ];
}

export default async function sitemap({
    id,
}: {
    id: number;
}): Promise<MetadataRoute.Sitemap> {
    const departments = getAllDepartments();

    if (id === 0) {
        // ── Main sitemap: static pages, guides, brands, department hubs ──
        const staticPages: MetadataRoute.Sitemap = [
            { url: BASE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
            { url: `${BASE_URL}/devis`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
            { url: `${BASE_URL}/guides`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
            { url: `${BASE_URL}/marques`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
            { url: `${BASE_URL}/annuaire`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
            { url: `${BASE_URL}/faq`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
            { url: `${BASE_URL}/mentions-legales`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
        ];

        const guidePages: MetadataRoute.Sitemap = guides.map(g => ({
            url: `${BASE_URL}/guides/${g.slug}`,
            lastModified: new Date(g.updatedAt),
            changeFrequency: 'monthly',
            priority: 0.8,
        }));

        const brandPages: MetadataRoute.Sitemap = brands.map(b => ({
            url: `${BASE_URL}/marques/${b.slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        }));

        const deptPages: MetadataRoute.Sitemap = departments.map(d => ({
            url: `${BASE_URL}/annuaire/${d.name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}-${d.code}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        }));

        return [...staticPages, ...guidePages, ...brandPages, ...deptPages];
    }

    // ── Department sub-sitemap ──
    const deptIndex = id - 1;
    if (deptIndex < 0 || deptIndex >= departments.length) return [];

    const dept = departments[deptIndex];
    const deptCities = getCitiesByDepartment(dept.code);

    // Sort by population desc to prioritize major cities
    const sortedCities = [...deptCities].sort(
        (a, b) => (b.population || 0) - (a.population || 0)
    );

    // Generate URLs for each city × each category
    const cityPages: MetadataRoute.Sitemap = sortedCities.flatMap(city =>
        CATEGORY_SLUGS.map(catSlug => ({
            url: `${BASE_URL}/${catSlug}/${city.slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: (city.population || 0) > 50000 ? 0.6 : (city.population || 0) > 10000 ? 0.5 : 0.4,
        }))
    );

    return cityPages;
}

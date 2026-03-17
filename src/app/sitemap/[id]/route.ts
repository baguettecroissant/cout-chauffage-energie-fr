import { NextResponse } from 'next/server';
import { getAllDepartments, getCitiesByDepartment } from '@/lib/cities';
import { guides } from '@/data/guides';
import { brands } from '@/data/brands';
import { CATEGORY_SLUGS } from '@/data/categories';

const BASE_URL = 'https://www.cout-chauffage-energie.fr';

type Props = { params: Promise<{ id: string }> };

/**
 * Dynamic sub-sitemaps — /sitemap/main.xml or /sitemap/[deptCode].xml
 * - main.xml: static pages, guides, brands, department hub pages
 * - XX.xml: city × category pages for department XX
 */
export async function GET(_request: Request, { params }: Props) {
    const { id } = await params;
    const cleanId = id.replace('.xml', '');

    if (cleanId === 'main') {
        return buildMainSitemap();
    }

    return buildDepartmentSitemap(cleanId);
}

export async function generateStaticParams() {
    const departments = getAllDepartments();
    return [
        { id: 'main.xml' },
        ...departments
            .filter(d => d && d.code)
            .map(d => ({ id: `${d.code}.xml` })),
    ];
}

function buildMainSitemap(): NextResponse {
    const today = new Date().toISOString().split('T')[0];
    const departments = getAllDepartments();

    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

    // Static pages
    const staticPages = [
        { loc: '', priority: '1.0', changefreq: 'weekly' },
        { loc: '/devis', priority: '0.9', changefreq: 'monthly' },
        { loc: '/guides', priority: '0.8', changefreq: 'weekly' },
        { loc: '/marques', priority: '0.7', changefreq: 'monthly' },
        { loc: '/annuaire', priority: '0.7', changefreq: 'monthly' },
        { loc: '/faq', priority: '0.6', changefreq: 'monthly' },
        { loc: '/mentions-legales', priority: '0.3', changefreq: 'yearly' },
    ];

    for (const page of staticPages) {
        xml += urlEntry(`${BASE_URL}${page.loc}`, today, page.changefreq, page.priority);
    }

    // Guide pages
    for (const guide of guides) {
        xml += urlEntry(
            `${BASE_URL}/guides/${guide.slug}`,
            guide.updatedAt,
            'monthly',
            '0.8'
        );
    }

    // Brand pages
    for (const brand of brands) {
        xml += urlEntry(`${BASE_URL}/marques/${brand.slug}`, today, 'monthly', '0.7');
    }

    // Department hub pages
    for (const dept of departments) {
        if (!dept || !dept.name || !dept.code) continue;
        const deptSlug = `${dept.name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}-${dept.code}`;
        xml += urlEntry(`${BASE_URL}/annuaire/${deptSlug}`, today, 'monthly', '0.6');
    }

    xml += `</urlset>`;

    return new NextResponse(xml, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, max-age=3600, s-maxage=86400',
        },
    });
}

function buildDepartmentSitemap(deptCode: string): NextResponse {
    const today = new Date().toISOString().split('T')[0];
    const cities = getCitiesByDepartment(deptCode);

    // Sort by population desc
    const sorted = [...cities].sort((a, b) => (b.population || 0) - (a.population || 0));

    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

    for (const city of sorted) {
        if (!city || !city.slug) continue;
        const priority = (city.population || 0) > 50000 ? '0.6' : (city.population || 0) > 10000 ? '0.5' : '0.4';
        for (const catSlug of CATEGORY_SLUGS) {
            xml += urlEntry(`${BASE_URL}/${catSlug}/${city.slug}`, today, 'monthly', priority);
        }
    }

    xml += `</urlset>`;

    return new NextResponse(xml, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, max-age=3600, s-maxage=86400',
        },
    });
}

function urlEntry(loc: string, lastmod: string, changefreq: string, priority: string): string {
    return `    <url>\n        <loc>${loc}</loc>\n        <lastmod>${lastmod}</lastmod>\n        <changefreq>${changefreq}</changefreq>\n        <priority>${priority}</priority>\n    </url>\n`;
}

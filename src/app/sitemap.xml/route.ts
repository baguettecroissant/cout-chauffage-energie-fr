import { NextResponse } from 'next/server';
import { getAllDepartments } from '@/lib/cities';

/**
 * Sitemap Index — /sitemap.xml
 * Lists main.xml + one sub-sitemap per department code (01, 02, ..., 95, 2A, 2B)
 * Mirrors cout-monte-escalier.fr structure exactly.
 */
export async function GET() {
    const departments = getAllDepartments();
    const BASE_URL = 'https://www.cout-chauffage-energie.fr';

    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

    // Main sitemap (static pages, guides, brands, department hubs)
    xml += `\n    <sitemap>\n        <loc>${BASE_URL}/sitemap/main.xml</loc>\n    </sitemap>\n`;

    // One sub-sitemap per department
    for (const dept of departments) {
        if (dept && dept.code) {
            xml += `    <sitemap>\n        <loc>${BASE_URL}/sitemap/${dept.code}.xml</loc>\n    </sitemap>\n`;
        }
    }

    xml += `</sitemapindex>`;

    return new NextResponse(xml, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, max-age=3600, s-maxage=86400',
        },
    });
}

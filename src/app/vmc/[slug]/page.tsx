import { Metadata } from "next";
import { getCityFromSlug, getAllCitySlugs, generateCityMetadata } from "@/lib/seo-utils";
import { CATEGORIES } from "@/data/categories";
import { CategoryCityPage } from "@/components/psea/CategoryCityPage";

const category = CATEGORIES["vmc"];

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const city = getCityFromSlug(slug);
    if (!city) return {};
    return generateCityMetadata(city, category.label, category.slug);
}

export const dynamic = 'force-dynamic';
export const dynamicParams = true;

export async function generateStaticParams() {
    const allSlugs = getAllCitySlugs();
    return allSlugs.slice(0, 200).map((slug) => ({ slug }));
}

export default async function Page({ params }: Props) {
    const { slug } = await params;
    return <CategoryCityPage slug={slug} category={category} />;
}

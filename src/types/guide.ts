export interface Guide {
    id: number;
    title: string;
    slug: string;
    metaTitle: string;
    metaDescription: string;
    category: GuideCategory;
    readTime: string;
    updatedAt: string;
    excerpt: string;
    heroImage?: string;
    heroAlt?: string;
    content: string;
}

export type GuideCategory =
    | 'geothermie'
    | 'chauffe-eau'
    | 'vmc'
    | 'chaudiere'
    | 'aides'
    | 'renovation'
    | 'comparatifs'
    | 'energie';

export const GUIDE_CATEGORIES: Record<GuideCategory, { label: string; emoji: string; color: string }> = {
    geothermie: { label: 'Géothermie', emoji: '🌍', color: 'teal' },
    'chauffe-eau': { label: 'Chauffe-eau', emoji: '🚿', color: 'blue' },
    vmc: { label: 'VMC', emoji: '💨', color: 'cyan' },
    chaudiere: { label: 'Chaudière', emoji: '🔥', color: 'orange' },
    aides: { label: 'Aides & Financement', emoji: '🏛️', color: 'purple' },
    renovation: { label: 'Rénovation', emoji: '🏠', color: 'green' },
    comparatifs: { label: 'Comparatifs', emoji: '🏆', color: 'amber' },
    energie: { label: 'Énergie', emoji: '⚡', color: 'yellow' },
};

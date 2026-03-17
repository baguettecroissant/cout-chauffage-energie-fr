# cout-chauffage-energie.fr — Project Spec

## Identité
- **Domaine** : `cout-chauffage-energie.fr`
- **Type** : Cluster multi-niche (5 catégories)
- **Baseline** : Géothermie, chauffe-eau, VMC, chaudière bois — Prix et installateurs
- **Ton éditorial** : Spécialiste énergie. Vocabulaire technique accessible, focus sur le rendement (COP, kWh), les économies chiffrées. Ton d'ingénieur vulgarisateur.
- **Persona** : Propriétaire 40-60 ans, chauffage vétuste, projet de remplacement

## Catégories ViteUnDevis
| # | Catégorie | CPL moy | Rev/100 leads |
|---|-----------|---------|--------------|
| #93 | Chauffage géothermique | 15.6€ | 851€ |
| #139 | Chauffe-eau | 10.1€ | 426€ |
| #98 | VMC | 8.3€ | 279€ |
| #64 | Chaudière bois/granulés | 12.5€ | 247€ |
| #104 | Chauffe-eau thermodynamique | 14.8€ | 142€ |

---

## 🎨 Design System (UNIQUE)

### Typographie
- **Headings** : `Manrope` (semi-rounded, tech friendly)
- **Body** : `Crimson Pro` (serif élégant, editorial premium)
- **Data** : `Fira Code`

### Palette
```css
--primary: #EA580C;        /* Orange-600 — flamme/chaleur */
--primary-light: #FFF7ED;  /* Orange-50 */
--secondary: #9A3412;      /* Orange-800 — braise */
--accent: #0D9488;         /* Teal-600 — éco/rendement */
--text: #27272A;           /* Zinc-800 */
--bg: #FFFBF5;             /* Warm off-white */
--card-bg: #FFFFFF;
```

### Layout Homepage
- **Hero** : Fond radial gradient (orange-50 centre → warm-white bords), titre centré avec compteur animé "économies moyennes : X€/an"
- **Style** : Cards avec icônes grandes (48px), fond blanc, shadow-md, hover translate-y
- **Icônes** : Lucide React mais style filled pour les catégories énergie
- **Section separators** : Flamme/vague de chaleur SVG en orange-100

### Style des composants
- **Cards** : `border-radius: 8px`, shadow-md, hover -translate-y-1, bordure gauche 4px orange
- **Boutons CTA** : Rounded-md, gradient orange→red, text white, hover scale
- **Badges** : "COP ≥ 4" "Éligible CEE" en teal pastille
- **Footer** : Gradient zinc-800 → zinc-900, 4 colonnes, accent orange en liens

---

## 📄 Template Page Ville (UNIQUE wording)

### Pattern titre H1
```
{TYPE_CHAUFFAGE} à {VILLE} — Coût d'installation et chauffagistes {CODE_POSTAL}
```

### Pattern intro (spintax)
```
Quel budget prévoir pour installer {ARTICLE} {TYPE} à {VILLE} ? {VARIANTE_INTRO}. 
Les chauffagistes certifiés du {DEPT_NOM} proposent des tarifs entre {PRIX_MIN}€ et {PRIX_MAX}€ 
pour ce type d'équipement, matériel et pose compris.
```

Variantes intro :
1. "C'est un investissement rentable dès la {N}ème année grâce aux économies d'énergie"
2. "Avec un COP moyen de {COP}, vous divisez vos factures de chauffage par {FACTEUR}"
3. "Les aides MaPrimeRénov' et CEE réduisent significativement le reste à charge"
4. "En zone climatique {ZONE}, ce choix est particulièrement pertinent pour votre confort"

### Pattern CTA
```
Faire chiffrer mon projet à {VILLE}
```

---

## Structure
```
/                                  → Homepage
/devis                             → Widget #93
/geothermie/[slug]                 → Pages villes géothermie (#93)
/chauffe-eau/[slug]                → Pages villes chauffe-eau (#139)
/vmc/[slug]                        → Pages villes VMC (#98)
/chaudiere-bois/[slug]             → Pages villes chaudière bois (#64)
/chauffe-eau-thermodynamique/[slug] → Pages villes CET (#104)
/guides + /guides/[slug]
/marques + /marques/[slug]
/annuaire + /annuaire/[slug]
/faq · /mentions-legales · /sitemap.xml + /sitemap/[id]
```

## Guides (8)
1. Chauffage géothermique : prix, forage et retour sur investissement
2. Chauffe-eau : électrique, gaz, solaire, thermodynamique — le comparatif
3. VMC simple vs double flux : prix, débit et consommation
4. Chaudière bois/granulés : rendement, autonomie et prix
5. Chauffe-eau thermodynamique : fonctionnement et économies réelles
6. Géothermie horizontale vs verticale : quelle solution choisir ?
7. MaPrimeRénov' chauffage : barème 2026, simulation en ligne
8. Quel chauffage pour une maison ancienne ? Guide complet

## Marques : Viessmann, Bosch, De Dietrich, Atlantic, Thermor, Aldes (VMC), Stiebel Eltron

## Maillage externe
- `ta-pompe-a-chaleur.fr` → "géothermie vs aérothermie"
- `cout-isolation-maison.fr` → "isoler d'abord, chauffer ensuite"

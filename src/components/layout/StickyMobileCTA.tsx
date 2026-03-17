"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";

/**
 * Sticky bottom CTA bar visible only on mobile devices.
 * Hidden on the /devis page (already has the form).
 */
export function StickyMobileCTA() {
    const pathname = usePathname();

    // Don't show on devis page or mentions-legales
    if (pathname === "/devis" || pathname === "/mentions-legales") {
        return null;
    }

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
            <div className="bg-gradient-to-r from-orange-600 to-red-600 shadow-[0_-4px_20px_rgba(0,0,0,0.15)] px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
                <Link
                    href="/devis"
                    className="flex items-center justify-center gap-2 bg-white text-orange-700 font-bold text-base py-3 px-6 rounded-xl shadow-md active:scale-[0.98] transition-transform w-full"
                >
                    Devis Gratuit
                    <ArrowRight className="h-4 w-4" />
                </Link>
            </div>
        </div>
    );
}

import type { MetadataRoute } from "next";
import { projects } from "@/.velite";

const SITE_URL = "https://sebastian-canales.quanthia.cl";

export default function sitemap(): MetadataRoute.Sitemap {
    const staticPages: MetadataRoute.Sitemap = [
        { url: SITE_URL, changeFrequency: "weekly", priority: 1 },
        { url: `${SITE_URL}/services`, changeFrequency: "monthly", priority: 0.8 },
        { url: `${SITE_URL}/projects`, changeFrequency: "weekly", priority: 0.9 },
        { url: `${SITE_URL}/contact`, changeFrequency: "monthly", priority: 0.6 },
        { url: `${SITE_URL}/privacy`, changeFrequency: "yearly", priority: 0.2 },
        { url: `${SITE_URL}/terms`, changeFrequency: "yearly", priority: 0.2 },
    ];

    const projectPages: MetadataRoute.Sitemap = projects
        .filter((p) => p.published)
        .map((p) => {
            // `date` es opcional y pudo venir en un formato no ISO, así que validamos
            // antes de emitirlo como <lastmod> para no romper el sitemap.
            const parsed = p.date ? new Date(p.date) : undefined;
            const lastModified =
                parsed && !Number.isNaN(parsed.getTime()) ? parsed : undefined;

            return {
                url: `${SITE_URL}/projects/${p.slugAsParams}`,
                lastModified,
                changeFrequency: "monthly" as const,
                priority: 0.7,
            };
        });

    return [...staticPages, ...projectPages];
}

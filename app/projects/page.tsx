import React from "react";
import { projects } from "@/.velite";
import { Navigation } from "../components/nav";
import { Redis } from "@upstash/redis";
import { ProjectsView } from "./projects-view"; // Importamos el componente cliente

const redis = Redis.fromEnv();
export const revalidate = 60;

export default async function ProjectsPage() {
    const views = (
        await redis.mget<number[]>(
            ...projects.map((p) => ["pageviews", "projects", p.slugAsParams].join(":")),
        )
    ).reduce((acc, v, i) => {
        acc[projects[i].slugAsParams] = v ?? 0;
        return acc;
    }, {} as Record<string, number>);

    const featured = projects.find((project) => project.slugAsParams === "unkey") || projects[0];
    const top2 = projects.find((project) => project.slugAsParams === "planetfall") || projects[1];
    const top3 = projects.find((project) => project.slugAsParams === "highstorm") || projects[2];

    const sorted = projects
        .filter((p) => p.published)
        .filter(
            (project) =>
                project.slug !== featured?.slug &&
                project.slug !== top2?.slug &&
                project.slug !== top3?.slug,
        )
        .sort(
            (a, b) =>
                new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
                new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
        );

    return (
        <div className="relative pb-16">
            <Navigation />
            {/* Delegamos la renderización y animación al componente Cliente */}
            <ProjectsView
                featured={featured}
                top2={top2}
                top3={top3}
                sorted={sorted}
                views={views}
            />
        </div>
    );
}
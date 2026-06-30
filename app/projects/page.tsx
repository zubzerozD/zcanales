import React from "react";
import { projects } from "@/.velite";
import { Redis } from "@upstash/redis";
import { ProjectsView } from "./projects-view";

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

    // Ordenamos TODOS los proyectos por fecha (Más reciente primero)
    const allProjects = projects
        .filter((p) => p.published)
        .sort(
            (a, b) =>
                new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
                new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
        );

    return (
        <div className="relative pb-16">
            {/* Pasamos la lista única ordenada */}
            <ProjectsView projects={allProjects} views={views} />
        </div>
    );
}
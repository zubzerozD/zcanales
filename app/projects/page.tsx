import React from "react";
import { projects } from "@/.velite";
import { ProjectsView } from "./projects-view";
import { getViews } from "@/util/views";

export const revalidate = 60;

export default async function ProjectsPage() {
    // Redis nunca tira esta página: si falla, todas las vistas quedan en 0.
    const views = await getViews(projects.map((p) => p.slugAsParams));

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
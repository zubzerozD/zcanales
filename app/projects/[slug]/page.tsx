import { notFound } from "next/navigation";
import { projects } from "@/.velite";
import { Mdx } from "@/app/components/mdx";
import { Header } from "./header";
import { ReportView } from "./view";
import { ArticleContent } from "./article-content"; // <--- Importamos el nuevo componente
import { getView } from "@/util/views";

export const revalidate = 60;

type Props = {
    params: Promise<{
        slug: string;
    }>;
};

export async function generateStaticParams() {
    return projects
        .filter((p) => p.published)
        .map((p) => ({
            slug: p.slugAsParams,
        }));
}

export default async function PostPage(props: Props) {
    const params = await props.params;
    const slug = params.slug;

    const project = projects.find((project) => project.slugAsParams === slug);

    if (!project) {
        notFound();
    }

    const views = await getView(slug);

    return (
        <div className="bg-zinc-900 min-h-screen">
            <Header project={project} views={views} />
            <ReportView slug={slug} />

            {/* Usamos el wrapper animado en lugar del <article> directo */}
            <ArticleContent>
                <Mdx code={project.body} />
            </ArticleContent>
        </div>
    );
}
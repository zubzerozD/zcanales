import { notFound } from "next/navigation";
import { projects } from "@/.velite";
import { Mdx } from "@/app/components/mdx";
import { Header } from "./header";
import { ReportView } from "./view";
import { Redis } from "@upstash/redis";
import { ArticleContent } from "./article-content"; // <--- Importamos el nuevo componente

export const revalidate = 60;

type Props = {
    params: Promise<{
        slug: string;
    }>;
};

const redis = Redis.fromEnv();

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

    const views =
        (await redis.get<number>(["pageviews", "projects", slug].join(":"))) ?? 0;

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
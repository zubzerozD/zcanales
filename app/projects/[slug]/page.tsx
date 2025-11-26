import { notFound } from "next/navigation";
import { projects } from "@/.velite";
import { Mdx } from "@/app/components/mdx";
import { Header } from "./header";
import { ReportView } from "./view";
import { Redis } from "@upstash/redis";

export const revalidate = 60;

type Props = {
    params: {
        slug: string;
    };
};

const redis = Redis.fromEnv();

// Generar rutas estáticas
export async function generateStaticParams(): Promise<Props["params"][]> {
    return projects
        .filter((p) => p.published)
        .map((p) => ({
            slug: p.slugAsParams,
        }));
}

export default async function PostPage({ params }: Props) {
    const slug = params?.slug;
    const project = projects.find((project) => project.slugAsParams === slug);

    if (!project) {
        notFound();
    }

    const views =
        (await redis.get<number>(["pageviews", "projects", slug].join(":"))) ?? 0;

    return (
        <div className="bg-zinc-50 min-h-screen">
            <Header project={project} views={views} />
            <ReportView slug={slug} />

            <article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
                <Mdx code={project.body} />
            </article>
        </div>
    );
}
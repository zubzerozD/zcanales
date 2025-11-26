import { notFound } from "next/navigation";
import { projects } from "@/.velite";
import { Mdx } from "@/app/components/mdx";
import { Header } from "./header";
import { ReportView } from "./view";
import { Redis } from "@upstash/redis";

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
  // CORRECCIÓN: Esperamos a que se resuelvan los params
  const params = await props.params;
  const slug = params.slug;
  
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
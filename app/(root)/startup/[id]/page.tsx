import { formatDate } from "@/lib/utils";
import { client } from "@/sanity/lib/client";
import { STARTUP_BY_ID_QUERY } from "@/sanity/lib/queries";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import markdownit from "markdown-it";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import View from "@/components/View";


const md = markdownit();
export const experimental_ppr = true;

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  const post = await client.fetch(STARTUP_BY_ID_QUERY, { id });

  if (!post) return notFound();

  const parseContent = md.render(post?.pitch || "");

  return (
    <>
      <section className="pink_container !min-h-[230px]">
        <p className="tag"> {formatDate(post?._createdAt)}</p>
        <h1 className="heading">{post.title}</h1>

        <p className="sub-heading !max-w-5xl">{post.description}</p>
      </section>

      <section className="section_container">
        <div className="w-full h-auto flex justify-center items-center">
          <Image
            src={post.image}
            alt={post.title || "thumnail"}
            className="max-w-[800px] max-h-[600px] rounded-xl "
            width={800}
            height={200}
          />
        </div>

        <div className="space-y-5 mt-10 max-w-4xl mx-auto">
          <div className="flex-between gap-5">
            <Link
              href={`/user/${post.author?._id}`}
              className="flex gap-2 items-center"
            >
              <Image
                src={post.author.image}
                alt={"avatar"}
                width={48}
                height={48}
                className="rounded-full drop-shadow-lg w-12 h-12"
              />

              <div>
                <p className="text-20-medium">{post.author.name}</p>
                <p className="text-16-medium !text-black-300">
                  @{post.author.username}
                </p>
              </div>
            </Link>

            <Link href={`/?query=${post.category?.toLocaleLowerCase()}`}>
              <p className="category-tag"> {post.category}</p>
            </Link>
          </div>

          <h3 className="text-30-bold">Pitch Details</h3>

          {parseContent ? (
            <article
              className="prose max-w-4xl font-work-sans break-all"
              dangerouslySetInnerHTML={{ __html: parseContent }}
            />
          ) : (
            <p className="text-16-medium !text-black-300">
              No pitch details provided 😞
            </p>
          )}
        </div>

        <hr className="divider" />
        {/* TODO: Editor seleted startups */}
      </section>

      <Suspense fallback={<Skeleton className="view_skeleton" />}>
        <View id={id} />
      </Suspense>
    </>
  );
};
export default Page;
import Navbar from "@/components/Navbar";
import MDX from "@/utils/MDX";
import { allChangelogPosts } from "contentlayer/generated";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MdKeyboardBackspace } from "react-icons/md";

export async function generateStaticParams() {
  return allChangelogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// export async function generateMetadata({
//   params,
// }: {
//   params: { slug: string };
// }): Promise<Metadata | undefined> {
//   const post = allChangelogPosts.find((post) => post.slug === params.slug);
//   if (!post) {
//     return;
//   }
// }

const ChangelogPost = ({ params }: { params: { slug: string } }) => {
  const post = allChangelogPosts.find(
    (post) => post.slug.replace("\r", "") === params.slug
  );

  if (!post) {
    notFound();
  }
  return (
    <div>
      <title>{post.title}</title>
      <div className="border-b border-white/20 w-full sticky top-0 z-50 bg-[#040404]">
        <Navbar />
      </div>
      <div className="p-4">
        <Link
          href={"/changelog"}
          className="hover:text-accent flex items-center gap-2 w-fit mb-5"
        >
          <MdKeyboardBackspace />
          Back to Changelog
        </Link>
        <div className="min-h-screen">
          <h1 className="text-white text-5xl text-center font-bold">
            {post.title}
          </h1>
          <div className="mt-10 text-lg lg:w-[50%] px-7 mx-auto">
            <MDX code={post.body.code} />
          </div>
          <p className="text-xs font-semibold text-accent/80 mt-5">
            {new Date(post.publishedAt).toDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChangelogPost;

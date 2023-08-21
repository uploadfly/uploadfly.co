import Navbar from "@/components/Navbar";
import { allChangelogPosts } from "contentlayer/generated";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return allChangelogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const post = allChangelogPosts.find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  const { title, summary: description } = post;
}

const ChangelogPost = ({ params }: { params: { slug: string } }) => {
  const post = allChangelogPosts.find(
    (post) => post.slug.replace("\r", "") === params.slug
  );

  if (!post) {
    notFound();
  }
  return (
    <div>
      <div className="border-b border-white/20 w-full">
        <Navbar />
      </div>
    </div>
  );
};

export default ChangelogPost;

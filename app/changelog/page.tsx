import Navbar from "@/components/Navbar";
import MDX from "@/utils/MDX";
import { allChangelogPosts, ChangelogPost } from "contentlayer/generated";
import Link from "next/link";

const Changelog = () => {
  return (
    <div>
      <div className="border-b border-white/20 w-full sticky top-0 bg-[#040404]">
        <Navbar />
      </div>
      <div
        className="w-full flex items-center justify-center flex-col py-32 gap-3"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(/grid-bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-white text-6xl font-bold">Changelog</h1>
        <p>All the new stuff with Uploadfly...</p>
      </div>
      <div className="flex items-center flex-col lg:w-[60%] px-7 mx-auto my-10 gap-10">
        {allChangelogPosts
          .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
          .map((post: ChangelogPost) => {
            return (
              <div
                className="border-b border-accent/50 py-3 w-full"
                key={post._id}
              >
                <div className="">
                  <p className="mb-5 font-semibold text-accent/80">
                    {post.tag}
                  </p>
                  <p className="text-sm font-semibold">
                    {new Date(post.publishedAt).toDateString()}
                  </p>

                  <Link href={post.url} className="hover:underline">
                    <h1 className="text-3xl font-bold">{post.title}</h1>
                  </Link>
                  <div className="mt-5 text-lg content">
                    <MDX code={post.body.code} />
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Changelog;

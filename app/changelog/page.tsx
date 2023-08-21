"use client";

import Navbar from "@/components/Navbar";
import { allChangelogPosts, ChangelogPost } from "contentlayer/generated";
import { useLiveReload } from "next-contentlayer/hooks";

const Changelog = () => {
  // useLiveReload();
  return (
    <div>
      <div className="border-b border-white/20 w-full">
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
      <div className="flex items-center flex-col w-[60%] mx-auto my-10">
        {allChangelogPosts.map((post: ChangelogPost) => (
          <div className="border-b border-accent/50 py-3">
            <div className="">
              <p className="mb-5 font-semibold text-accent/80">{post.tag}</p>
              <p className="text-sm font-semibold">
                {new Date(post.publishedAt).toDateString()}
              </p>
              <h1 className="text-3xl font-bold">{post.title}</h1>
              <div
                className="text-lg mt-3"
                dangerouslySetInnerHTML={{ __html: post.body.raw }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Changelog;

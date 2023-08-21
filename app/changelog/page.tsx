import Navbar from "@/components/Navbar";
import { allPosts } from "";
import { useLiveReload } from "next-contentlayer/hooks";

const Changelog = () => {
  useLiveReload();
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
    </div>
  );
};

export default Changelog;

import Link from "next/link";
import { SiGithub } from "react-icons/si";
import { BsArrowRightShort } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="flex flex-col items-center mt-10 relative pb-36">
      <Link
        href="https://github.com/uploadfly/uploadfly"
        target="_blank"
        className="border-2 text-sm border-slate-200 py-2 px-3 rounded-full text-slate-200 flex items-center hover:text-accent transition-colors group hover:border-accent"
      >
        {`We're Opensource!`}
        <div className="h-[20px] w-[1px] bg-slate-200 mx-2 group-hover:bg-accent" />
        <div className="flex items-center">
          <SiGithub className="mr-1" /> Star us on GitHub
          <BsArrowRightShort className="text-2xl ml-1 group-hover:translate-x-2 transition-all" />
        </div>
      </Link>
      <h1 className="lg:text-7xl text-4xl font-bold text-center lg:w-[65%] w-[90%] mt-8">
        Expovoluminously awesome file uploads.
      </h1>
      <p className="my-5 lg:w-[60%] text-center lg:text-xl text-slate-200 w-[90%] text-lg">
        UploadFly makes it easy to add file uploads and optimization to websites
        and apps.
      </p>
    </div>
  );
};

export default Hero;

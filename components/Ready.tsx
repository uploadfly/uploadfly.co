import Link from "next/link";

const Ready = () => {
  return (
    <div
      className="flex items-center flex-col gap-5 py-36"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(/footer-backdrop.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-3xl p-1 md:text-5xl lg:w-[50%] mb-5 text-center font-semibold my-5">
        Start uploading with Uploadfly 
        today.
      </h1>

      <Link
        href={"https://beta.uploadfly.cloud/signup"}
        target="_blank"
        className="bg-accent px-10 py-3 font-semibold text-lg rounded-full my-5"
      >
        Get started
      </Link>
    </div>
  );
};

export default Ready;

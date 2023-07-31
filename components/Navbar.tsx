import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-6 lg:px-10 px-4 bg-[rgba(0,0,0,0.05)] backdrop-blur-[10px]">
      <a href="">
        <img src="/logo.svg" alt="Logo" className="lg:w-12 w-10" />
      </a>
      <div className=""></div>
      <div className="flex items-center gap-4">
        <Link
          href="https://beta.uploadfly.cloud/login"
          target="_blank"
          className="font-semibold hover:text-accent transition-colors"
        >
          Login
        </Link>
        <Link
          href="https://beta.uploadfly.cloud/signup"
          target="_blank"
          className="px-5 py-2 font-semibold rounded-full bg-accent hover:translate-y-1 transition-all"
        >
          Get started
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

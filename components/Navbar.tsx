import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-6 lg:px-10 px-4">
      <a href="">
        <img src="/logo.svg" alt="Logo" className="lg:w-12 w-10" />
      </a>
      <div className=""></div>
      <div className="flex items-center gap-4">
        <Link
          href="https://github.com/uploadfly"
          target="_blank"
          className="font-semibold hover:text-accent transition-colors"
        >
          Login
        </Link>
        <Link
          href="https://app.uploadfly.cloud/request"
          target="_blank"
          className="px-5 py-2 font-semibold border-2 rounded-full hover:border-accent transition-colors"
        >
          Get started
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const links = [
    {
      title: "Docs",
      href: "/docs",
    },
    {
      title: "Changelog",
      href: "/changelog",
    },
  ];

  const pathname = usePathname();

  return (
    <div className="flex items-center justify-between py-6 lg:px-10 px-4">
      <Link href="/" className="flex items-center gap-2">
        <img src="/logo.svg" alt="Logo" className="lg:w-12 w-10" />
        <small className="text-sm">Beta ✧･ﾟ</small>
      </Link>

      <div className="flex gap-5">
        {links.map((link, i) => (
          <Link
            href={link.href}
            key={i}
            className={`hover:text-accent transition-colors ${
              pathname === link.href ? "text-accent" : ""
            }`}
          >
            {link.title}
          </Link>
        ))}
      </div>
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

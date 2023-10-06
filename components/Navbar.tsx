"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const links = [
    {
      title: "Docs",
      href: "/docs",
    },
    {
      title: "Pricing",
      href: "/pricing",
    },
    {
      title: "Changelog",
      href: "/changelog",
    },
  ];

  const pathname = usePathname();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between py-6 lg:px-10 px-4">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="Logo" className="lg:w-12 w-10" />
          <small className="text-sm">Beta ✧･ﾟ</small>
        </Link>

        <div className="hidden lg:flex gap-10">
          {links.map((link, i) => (
            <Link
              href={link.href}
              key={i}
              className={`hover:text-accent font-semibold transition-colors ${
                pathname.includes(link.href) ? "text-accent" : ""
              }`}
            >
              {link.title}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex items-center gap-4">
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
        <button
          className="text-2xl lg:hidden"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <HiOutlineMenuAlt4 />
        </button>
      </div>
      <div
        className={`h-screen w-full bg-black/80 lg:hidden fixed top-0 left-0 z-50 opacity-100 transition-all duration-300 ease-in-out backdrop-blur-md ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-[200%]"
        }`}
      >
        <button
          className="absolute top-6 right-5 text-2xl"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <IoClose />
        </button>
        <div className="flex flex-col items-start gap-14 w-full mt-20">
          {links.map((link, i) => (
            <Link
              href={link.href}
              key={i}
              className="font-semibold border-b border-accent/50 w-full pl-5 pb-1"
            >
              {link.title}
            </Link>
          ))}
          <Link
            href="https://beta.uploadfly.cloud/login"
            target="_blank"
            className="font-semibold border-b border-accent/50 w-full pl-5 pb-1"
          >
            Login
          </Link>
          <Link
            href="https://beta.uploadfly.cloud/signup"
            target="_blank"
            className="px-5 py-3 font-semibold rounded-full bg-accent w-[80%] mx-auto text-center"
          >
            Get started
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;

"use client";

import Link from "next/link";

export default function Header() {
  return (
    /* FULL-WIDTH BACKGROUND */
    <header className="w-full bg-purple-950 text-gray-200 sticky top-0 z-50">
      
      {/* CONSTRAINED CONTENT */}
      <div className="max-w-screen-xl mx-auto flex items-center justify-between flex-nowrap px-3 sm:px-4 md:px-16 py-4 shadow-md">
        
        {/* LOGO / TITLE */}
        <div className="font-bold text-white-600 whitespace-nowrap
                        text-sm sm:text-base md:text-xl lg:text-2xl">
          MY PORTFOLIO
        </div>

        {/* NAVIGATION */}
        <nav
          className="
            flex flex-nowrap items-center
            gap-x-2 sm:gap-x-4 md:gap-x-6
            text-xs sm:text-sm md:text-base
            font-medium text-right
          "
        >
          <Link href="/" className="hover:text-indigo-400 transition whitespace-nowrap">
            Home
          </Link>

          <Link href="/about" className="hover:text-indigo-400 transition whitespace-nowrap">
            About
          </Link>

          <Link href="/projects" className="hover:text-indigo-400 transition whitespace-nowrap">
            Projects
          </Link>

          <a
            href="#contact-footer"
            className="hover:text-indigo-400 transition whitespace-nowrap"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contact-footer")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

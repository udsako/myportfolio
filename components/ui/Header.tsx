"use client";

import Link from "next/link";

export default function Header() {
  return (
    /* FULL-WIDTH BACKGROUND */
    <header className="w-full bg-gray-900 text-gray-200 sticky top-0 z-50">
      
      {/* CONSTRAINED CONTENT */}
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 sm:px-6 md:px-16 py-6 shadow-md">
        
        {/* LOGO / TITLE */}
        <div className="text-2xl font-bold text-indigo-400 whitespace-nowrap">
          MY PORTFOLIO
        </div>

        {/* NAVIGATION */}
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium justify-end text-right">
          <Link href="/" className="hover:text-indigo-400 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-indigo-400 transition">
            About
          </Link>
          <Link href="/projects" className="hover:text-indigo-400 transition">
            Projects
          </Link>
          <a
            href="#contact-footer"
            className="hover:text-indigo-400 transition"
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

"use client";

import { Phone, Mail, MessageCircle, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="contact-footer"
      className="w-full bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-gray-200 rounded-t-2xl"
    >
      <div
        className="
          max-w-screen-xl
          mx-auto
          flex
          flex-col
          md:flex-row
          justify-between
          gap-6
          px-4 sm:px-6 md:px-16
          py-10
        "
      >
        {/* COPYRIGHT */}
        <p className="text-xs sm:text-sm md:text-base text-left">
        © {new Date().getFullYear()} Blessing Sako
        </p>

        {/* CONTACT LINKS */}
        <div
          className="
            flex
            flex-wrap
            md:flex-nowrap
            flex-col
            sm:flex-col
            md:flex-row
            gap-3 sm:gap-4 md:gap-6
            items-end
            md:items-center
            text-right
            md:text-left
            text-xs
            sm:text-sm
            md:text-base
          "
        >
          <a
            href="tel:+2349165397315"
            className="flex items-center justify-end md:justify-start hover:text-indigo-400 transition"
          >
            <Phone className="mr-2 h-4 w-4 text-indigo-400" />
            +234 9165397315
          </a>

          <a
            href="https://wa.me/2349081439022"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-end md:justify-start hover:text-green-400 transition"
          >
            <MessageCircle className="mr-2 h-4 w-4 text-green-400" />
            +234 9081439022
          </a>

          <a
            href="mailto:udsako@gmail.com"
            className="flex items-center justify-end md:justify-start hover:text-red-400 transition"
          >
            <Mail className="mr-2 h-4 w-4 text-red-400" />
            udsako@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/blessing-sako-0b8b92280"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-end md:justify-start hover:text-blue-500 transition"
          >
            <Linkedin className="mr-2 h-4 w-4 text-blue-500" />
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { motion } from "framer-motion";

export default function HomePage() {
  return (
    /* FULL VIEWPORT BACKGROUND */
    <div className="w-screen min-h-screen bg-gradient-to-br from-black via-zinc-900 to-neutral-950 text-gray-200">
      
      {/* CONTENT WRAPPER (CONSTRAINED, NOT BACKGROUND) */}
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 md:px-16 lg:px-20 py-16 sm:py-20 flex items-center min-h-screen">
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center w-full"
        >
          {/* TEXT CONTENT */}
          <div className="order-2 md:order-1 flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-indigo-400">Blessing Sako</span>
            </h1>

            <p className="mt-3 sm:mt-4 text-[10px] sm:text-xs md:text-sm lg:text-base uppercase tracking-[0.18em] sm:tracking-[0.25em] text-indigo-300">
              Data Analyst • Software Developer • Product Management
            </p>

            <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-full md:max-w-2xl leading-relaxed">
              I design and build clean, reliable, and human-centered digital
              products. My focus is on turning complex ideas into practical,
              scalable solutions through thoughtful engineering and clear design.
            </p>

            <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-full md:max-w-2xl leading-relaxed">
              My work spans modern web applications, system-level thinking, and
              data-driven software always with usability, performance, and
              long-term impact in mind.
            </p>

            <div className="mt-6 sm:mt-8 md:mt-10">
              <h3 className="text-[9px] sm:text-xs md:text-sm font-bold uppercase tracking-widest text-gray-300 mb-2 sm:mb-3">
                My Core Values
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3 text-[0.55rem] sm:text-[0.65rem] md:text-xs uppercase tracking-widest font-semibold text-gray-200">
                <span>Clarity</span>
                <span>•</span>
                <span>Reliability</span>
                <span>•</span>
                <span>Impact</span>
                <span>•</span>
                <span>Continuous Learning</span>
              </div>
            </div>

            <p className="mt-4 sm:mt-6 text-[10px] sm:text-xs md:text-sm font-bold text-white-400 italic">
              Explore my background, projects, and experience using the navigation above.
            </p>
          </div>

          {/* IMAGE */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
            className="order-1 md:order-2 relative w-full max-w-[22rem] sm:max-w-[28rem] md:max-w-[34rem] h-80 sm:h-96 md:h-[34rem] mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl"
          >
            <img
              src="/image1.jpg"
              alt="Blessing Sako"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-indigo-500/15 mix-blend-overlay" />
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}

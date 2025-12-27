"use client";

import { Card, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-neutral-950 text-white px-6 md:px-16 py-12">

      <h1 className="text-5xl md:text-6xl font-bold mb-12">
        My Profile
      </h1>

      {/* WRAPPED IMAGE + TEXT */}
      <div className="text-zinc-300 text-lg leading-relaxed max-w-6xl">

        {/* FLOATING IMAGE */}
        <img
          src="/image2.jpeg"
          alt="Blessing Sako"
          className="
            float-none
            sm:float-left
            w-full
            sm:w-[320px]
            md:w-[400px]
            h-auto
            sm:h-[450px]
            object-cover
            rounded-2xl
            shadow-xl
            mb-8
            sm:mb-4
            sm:mr-8
          "
        />

        {/* TEXT THAT WRAPS BESIDE IMAGE */}
        <p className="mb-10">
          I build software with intent where data drives decisions, systems
          scale with clarity, and solutions are designed to solve real problems,
          not just demonstrate code.
        </p>

        <p className="mb-10">
          I am Blessing Sako, a final-year Computer Science undergraduate at
          Pan-Atlantic University (400 level), focused on developing data-driven
          and production-ready software systems. My work sits at the intersection
          of data analysis, full-stack development, and structured problem solving.
        </p>

        <p className="mb-10">
          What sets me apart is not just technical ability, but how I approach
          problems. I think in systems, measure outcomes with data, and design
          solutions that are maintainable, efficient, and aligned with real-world
          use cases. I work comfortably across the full development lifecycle from breaking
          down ambiguous problems and analyzing data, to designing interfaces,
          implementing backend logic, and deploying reliable applications.
        </p>

        {/* CLEAR FLOAT — EVERYTHING BELOW IS FULL WIDTH */}
        {/* <div className="clear-both" />

        <p className="mb-6">
          I work comfortably across the full development lifecycle from breaking
          down ambiguous problems and analyzing data, to designing interfaces,
          implementing backend logic, and deploying reliable applications.
        </p> */}

        <p className="mb-6">
          Through academic training, internships, and independent projects, I
          have built experience developing web applications, deploying systems,
          and delivering analytics solutions using tools such as React, Java, Python,
          Excel, Power BI, and modern deployment workflows.
        </p>

        <p className="mb-6">
          I am particularly drawn to data-oriented work, where insights inform
          decisions and technology is used to create clarity, efficiency, and
          measurable impact.
        </p>

        <p className="mb-6">
          Beyond technical skills, I value structure, clear communication, and
          thoughtful collaboration. I am always open to challenges that encourage
          growth, innovation, and meaningful contribution as I transition into
          the professional technology industry.
        </p>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-2xl px-6 h-11 border border-zinc-700 text-white text-sm font-medium hover:bg-zinc-800 transition"
        >
          <FileText className="mr-2 h-4 w-4" />
          View Resume
        </a>
      </div>

      {/* PROJECTS */}
      <section className="mt-24">
        <h2 className="text-4xl font-semibold mb-12">
          Recent Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <Card
              key={i}
              className="rounded-2xl bg-zinc-900 border-zinc-800 hover:border-indigo-400 transition"
            >
              <CardContent className="p-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-xl mb-4 h-40 w-full object-cover"
                />
                <h3 className="text-xl font-medium">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-400 mt-2">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

const projects = [
  {
    title: "Struqtura AI Data Cleaner",
    description:
      "A drag-and-drop AI-powered platform for cleaning, merging, and transforming enterprise datasets.",
    image: "/struqtura.jpeg",
  },
  {
    title: "PAU Staff Management System",
    description:
      "Java-based staff management system for managing staff records, roles, authentication, and workflows.",
    image: "/pau-staff.jpeg",
  },
  {
    title: "Spiritual Gifts Web App & Deployment",
    description:
      "Web application developed during internship to assess spiritual gifts and deploy to production.",
    image: "/spiritual-gifts.jpeg",
  },
  {
    title: "CSC 419 Deployment",
    description:
      "Production deployment of CSC 419 academic project with server configuration and hosting.",
    image: "/csc419deploymenttest.png",
  },
  {
    title: "PAU Cafeteria Management System",
    description:
      "Java Swing-based system with role-based access for ticketing, kitchen, and serving staff.",
    image: "/cafeteria.jpeg",
  },
];

import { Github, Figma } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "PAU Staff Management System",
    description:
      "A Java-based staff management system developed as a 300-level project. The application enables staff to record attendance upon arrival and departure, ensuring accurate tracking of working hours and promoting accountability. The system also helps management monitor staff activity, maintain records, and enforce proper workplace ethics.",
    github: "https://github.com/udsako/backend.git",
    image: "/pau-staff.jpeg",
  },
  {
    title: "Spiritual Gifts Web App & Deployment",
    description:
      "A collaborative web application designed and built during my 2025 internship, focused on assessing spiritual gifts, managing users, and deploying a production-ready system as part of a team-based development workflow.",
    github: "https://github.com/udsako/spiritualgiftsweb.git",
    image: "/spiritual-gifts.jpeg",
  },
  {
    title: "Class Deployment Test",
    description:
      "Development and deployment testing of a Next.js application for CSC 419, including environment configuration, build optimization, and validation of production readiness.",
    github: "https://github.com/udsako/CSC-419-DEPLOYMENT.git",
    image: "/csc419deploymenttest.png",
  },
  {
    title: "CBT Design",
    description:
      "A UI/UX design project completed in my 200-level System Analysis and Design course. The project involved designing a Computer-Based Test (CBT) interface that allows students to sign in, take exams by selecting answers from multiple-choice questions, submit their tests, and instantly view their results upon completion.",
    figma:
      "https://www.figma.com/design/gVd8JHHJAi8299HCTheiNv/Blessing-s-assignment",
    image: "/CBT.png",
  },
  {
    title: "Data Analysis with Excel",
    description:
      "A data analysis project focused on cleaning, structuring, analyzing, and visualizing datasets in Microsoft Excel to present insights in a clear, intuitive, and user-friendly format for non-technical audiences.",
    github: "https://github.com/udsako/eddyy.sako.git",
    image: "/excel-analysis.jpeg",
  },
  {
    title: "Data Analysis with Power BI",
    description:
      "A data analytics project focused on cleaning, structuring, analyzing, and visualizing data using Power BI to deliver clear, interactive, and easily understandable insights for both technical and non-technical users.",
    github: "https://github.com/udsako/eddyy.sako.git",
    image: "/powerbi-analysis.jpeg",
  },
  {
    title: "Struqtura AI Data Cleaner",
    description:
      "An innovation-focused project developed in my 300-level coursework to identify and solve a real-world problem in data handling. The project addressed the challenge of manually cleaning large datasets by introducing a Python-based application that automates data cleaning, generates meaningful insights from the cleaned data, and enables users to export structured datasets for accurate visualization and analysis.",
    github: "https://github.com/YOUR_USERNAME/struqtura",
    image: "/struqtura.jpeg",
  },
  {
    title: "PAU Cafeteria Management System",
    description:
      "Role-based Java Swing system that allows staff and students to place food orders online directly from the school cafeterias, eliminating the need for paper-based order records and preventing reuse of order slips. The system streamlines order processing, inventory management, and ensures a more efficient and reliable cafeteria experience.",
    github: "https://github.com/udsako/backend.git",
    image: "/cafeteria.jpeg",
  },
  {
    title: "Meal Ordering System",
    description:
      "A meal ordering system with a dual-login interface for admins and customers. Admins can manage meal details, view recent orders within a selected time range, analyze customer ratings, and track customer activity including order counts and total spending. Customers log in to place and manage meal orders.",
    github: "https://github.com/udsako/pythonprojects.git",
    image: "/mealsystem.jpeg",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-neutral-950 text-white px-6 md:px-16 py-12">
      <h1 className="text-5xl font-bold mb-10">All Projects</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, i) => {
          const isFigma = !!project.figma;
          const link = project.github || project.figma;

          return (
            <div
              key={i}
              className="rounded-2xl border border-zinc-800 bg-zinc-900 overflow-hidden hover:border-indigo-400 transition"
            >
              {/* PROJECT IMAGE */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-70 object-cover"
              />

              {/* PROJECT CONTENT */}
              <div className="p-6">
                <h2 className="text-2xl font-semibold">{project.title}</h2>
                <p className="text-zinc-400 mt-3">{project.description}</p>

                {link && (
                  <Link
                    href={link}
                    target="_blank"
                    className="inline-flex items-center gap-2 mt-6 text-indigo-400 hover:underline"
                  >
                    {isFigma ? (
                      <>
                        <Figma className="h-5 w-5" />
                        View on Figma
                      </>
                    ) : (
                      <>
                        <Github className="h-5 w-5" />
                        View on GitHub
                      </>
                    )}
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

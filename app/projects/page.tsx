import { Github, Figma } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "PAU Staff Management System",
    description:
      "A Java-based staff management system developed as a 300-level project. The application enables staff to record attendance upon arrival and departure, ensuring accurate tracking of working hours and promoting accountability.",
    github: "https://github.com/udsako/backend.git",
    image: "/pau-staff.jpeg",
  },
  {
    title: "Spiritual Gifts Web App & Deployment",
    description:
      "A collaborative web application designed and built during my 2025 internship, focused on assessing spiritual gifts, managing users, and deploying a production-ready system.",
    github: "https://github.com/udsako/spiritualgiftsweb.git",
    image: "/spiritual-gifts.jpeg",
  },
  {
    title: "Class Deployment Test",
    description:
      "Development and deployment testing of a Next.js application for CSC 419, including environment configuration and production readiness validation.",
    github: "https://github.com/udsako/CSC-419-DEPLOYMENT.git",
    image: "/csc419deploymenttest.png",
  },
  {
    title: "CBT Design",
    description:
      "A UI/UX design project completed in my 200-level System Analysis and Design course, focused on designing a Computer-Based Test (CBT) interface.",
    figma:
      "https://www.figma.com/design/gVd8JHHJAi8299HCTheiNv/Blessing-s-assignment",
    image: "/CBT.png",
  },
  {
    title: "Data Analysis with Excel",
    description:
      "A data analysis project focused on cleaning, structuring, and visualizing datasets in Microsoft Excel for non-technical users.",
    github: "https://github.com/udsako/eddyy.sako.git",
    image: "/excel-analysis.jpeg",
  },
  {
    title: "Data Analysis with Power BI",
    description:
      "A data analytics project focused on transforming raw data into clear, interactive dashboards using Power BI.",
    github: "https://github.com/udsako/eddyy.sako.git",
    image: "/powerbi-analysis.jpeg",
  },
  {
    title: "Struqtura AI Data Cleaner",
    description:
      "An innovation-focused project that automates data cleaning, insight generation, and export of structured datasets for analysis.",
    github: "https://github.com/YOUR_USERNAME/struqtura",
    image: "/struqtura.jpeg",
  },
  {
    title: "PAU Cafeteria Management System",
    description:
      "A role-based Java Swing system enabling online food ordering, inventory management, and elimination of paper-based records.",
    github: "https://github.com/udsako/backend.git",
    image: "/cafeteria.jpeg",
  },
  {
    title: "Meal Ordering System",
    description:
      "A dual-login meal ordering system for admins and customers with analytics and order tracking.",
    github: "https://github.com/udsako/pythonprojects.git",
    image: "/mealsystem.jpeg",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-neutral-950 text-white px-6 md:px-16 py-12">
      <h1 className="text-5xl font-bold mb-12">Projects</h1>

      {/* PROJECT GRID */}
      <div className="grid md:grid-cols-2 gap-8 mb-24">
        {projects.map((project, i) => {
          const isFigma = !!project.figma;
          const link = project.github || project.figma;

          return (
            <div
              key={i}
              className="rounded-2xl border border-zinc-800 bg-zinc-900 overflow-hidden hover:border-indigo-400 transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h2 className="text-2xl font-semibold">{project.title}</h2>
                <p className="text-zinc-400 mt-3 leading-relaxed">
                  {project.description}
                </p>

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

      {/* ================= CASE STUDIES ================= */}
      <section className="max-w-5xl mx-auto space-y-16">
        <h2 className="text-4xl font-bold mb-12">Selected Case Studies</h2>

        {/* CASE STUDY 1: PAU STAFF MANAGEMENT */}
        <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 shadow-lg">
          <h3 className="text-3xl font-semibold mb-6">
            PAU Staff Management System
          </h3>

          <h4 className="text-2xl font-semibold mb-2">Project Overview</h4>
          <p className="text-zinc-300 mb-4">
            The PAU Staff Management System is a desktop-based application
            developed to address inefficiencies in manual staff attendance
            tracking and record management within an institutional environment.
            The system was designed to digitize attendance logging, improve
            accountability, and provide management with structured access to
            staff activity data.
          </p>

          <h4 className="text-2xl font-semibold mb-2">Problem Statement</h4>
          <p className="text-zinc-300 mb-4">
            Before this system, staff attendance and working hours were typically
            recorded manually. This approach led to:
          </p>
          <ul className="list-disc list-inside text-zinc-400 mb-4 space-y-1">
            <li>Inconsistent attendance records</li>
            <li>Difficulty tracking arrival and departure times</li>
            <li>Limited visibility for management into staff activity</li>
            <li>Increased risk of errors and data manipulation</li>
          </ul>
          <p className="text-zinc-300 mb-4">
            The challenge was to design a system that ensures accurate attendance
            tracking, role-based access, and centralized record management, while
            remaining simple enough for daily use by staff and administrators.
          </p>

          <h4 className="text-2xl font-semibold mb-2">My Role</h4>
          <ul className="list-disc list-inside text-zinc-400 mb-4 space-y-1">
            <li>System analysis and requirement definition</li>
            <li>Designing the application workflow and user roles</li>
            <li>Implementing backend logic and database interaction</li>
            <li>Building core features such as authentication, attendance logging, and record retrieval</li>
          </ul>
          <p className="text-zinc-300 mb-4">
            This project strengthened my ability to translate real-world
            administrative problems into functional software solutions.
          </p>

          <h4 className="text-2xl font-semibold mb-2">Solution</h4>
          <p className="text-zinc-300 mb-4">
            I developed a Java-based staff management system that allows:
          </p>
          <ul className="list-disc list-inside text-zinc-400 mb-4 space-y-1">
            <li>Staff members to log attendance on arrival and departure</li>
            <li>Secure authentication to prevent unauthorized access</li>
            <li>Management to view, monitor, and manage staff records centrally</li>
            <li>Structured storage of attendance data for accountability and reporting</li>
            <li>The system enforces consistent data entry and eliminates the need for paper-based records</li>
          </ul>

          <h4 className="text-2xl font-semibold mb-2">Key Features</h4>
          <ul className="list-disc list-inside text-zinc-400 mb-4 space-y-1">
            <li>Staff authentication system</li>
            <li>Attendance logging (check-in and check-out)</li>
            <li>Centralized staff records management</li>
            <li>Admin-level access for monitoring and oversight</li>
            <li>Structured database-backed storage</li>
          </ul>

          <h4 className="text-2xl font-semibold mb-2">Tools & Technologies</h4>
          <p className="text-zinc-300 mb-4">
            Java · Java Swing (GUI) · MySQL · JDBC for database connectivity
          </p>

          <h4 className="text-2xl font-semibold mb-2">Impact & Learning Outcomes</h4>
          <p className="text-zinc-300">
            Improved understanding of system analysis and design principles,
            hands-on experience building a role-based application, practical
            exposure to database-backed desktop applications, and strengthened
            problem-solving and debugging skills. Demonstrated how software can
            improve operational transparency and efficiency within an organization.
          </p>
        </div>

        {/* CASE STUDY 2: STRUQTURA */}
        <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 shadow-lg">
          <h3 className="text-3xl font-semibold mb-6">
            Struqtura – AI Data Cleaner
          </h3>

          <h4 className="text-2xl font-semibold mb-2">Project Overview</h4>
          <p className="text-zinc-300 mb-4">
            Struqtura is a data cleaning and analysis tool developed to address
            the challenge of manually cleaning large datasets before analysis.
            The project focuses on automating repetitive data preparation tasks
            to reduce errors and improve efficiency in data-driven workflows.
          </p>

          <h4 className="text-2xl font-semibold mb-2">Problem Statement</h4>
          <p className="text-zinc-300 mb-4">
            Data analysts and students often spend a significant amount of time:
          </p>
          <ul className="list-disc list-inside text-zinc-400 mb-4 space-y-1">
            <li>Cleaning inconsistent datasets</li>
            <li>Handling missing or duplicate values</li>
            <li>Structuring data before visualization or analysis</li>
          </ul>
          <p className="text-zinc-300 mb-4">
            Manual data cleaning is time-consuming, error-prone, and discouraging
            for non-technical users. The absence of intelligent assistance makes
            the process inefficient, especially when dealing with large datasets.
          </p>

          <h4 className="text-2xl font-semibold mb-2">My Role</h4>
          <ul className="list-disc list-inside text-zinc-400 mb-4 space-y-1">
            <li>Identifying the problem through coursework and practical data analysis tasks</li>
            <li>Designing the system logic and cleaning workflow</li>
            <li>Implementing automated data cleaning functionality</li>
            <li>Ensuring the tool produces structured, analysis-ready datasets</li>
          </ul>
          <p className="text-zinc-300 mb-4">
            This project allowed me to explore the intersection of data analysis,
            automation, and problem-driven software design.
          </p>

          <h4 className="text-2xl font-semibold mb-2">Solution</h4>
          <p className="text-zinc-300 mb-4">
            I developed Struqtura, a Python-based data cleaning tool that:
          </p>
          <ul className="list-disc list-inside text-zinc-400 mb-4 space-y-1">
            <li>Automatically detects and cleans missing or inconsistent data</li>
            <li>Structures raw datasets into analysis-ready formats</li>
            <li>Generates meaningful insights from cleaned data</li>
            <li>Allows users to export cleaned datasets for visualization and reporting</li>
            <li>Reduces the technical barrier for users who want accurate data without manual preprocessing</li>
          </ul>

          <h4 className="text-2xl font-semibold mb-2">Key Features</h4>
          <ul className="list-disc list-inside text-zinc-400 mb-4 space-y-1">
            <li>Automated data cleaning and preprocessing</li>
            <li>Detection of missing and inconsistent values</li>
            <li>Dataset structuring for analysis and visualization</li>
            <li>Export functionality for cleaned data</li>
            <li>Insight generation from cleaned datasets</li>
          </ul>

          <h4 className="text-2xl font-semibold mb-2">Tools & Technologies</h4>
          <p className="text-zinc-300 mb-4">
            Python · Pandas · Data preprocessing techniques · File-based dataset handling (CSV, Excel formats)
          </p>

          <h4 className="text-2xl font-semibold mb-2">Impact & Learning Outcomes</h4>
          <p className="text-zinc-300">
            Deeper understanding of data quality challenges, experience automating repetitive analytical tasks,
            improved skills in Python-based data processing, and strengthened ability to design tools around
            real user pain points. Struqtura reflects my interest in building systems that improve efficiency,
            accuracy, and accessibility in data-driven work.
          </p>
        </div>
      </section>
    </div>
  );
}

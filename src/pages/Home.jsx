import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

const projectsSample = [
  {
    id: 1,
    title: "User Management Portal",
    tech: "React, Node, PostgreSQL",
    desc: "Developed full-stack user management system with Excel import/export, auth, filters.",
  },
  {
    id: 2,
    title: "ERP Migration",
    tech: "React, Node, PostgreSQL",
    desc: "Migrated legacy PHP ERP to modern stack. Improved performance by 30%.",
  },
  {
    id: 3,
    title: "Food Delivery Admin",
    tech: "React, Node, PostgreSQL",
    desc: "Admin panel with analytics, product CRUD, order mgmt, emails.",
  },
];



export default function Home() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <h1 className="text-4xl font-bold mb-4">
            Hi, I'm <span className="text-accent">Shashank</span>.
          </h1>
          <p className="text-lg">
            MCA (2021–2023) · Associate Software Engineer. I build full-stack
            web apps using React, Node.js and PostgreSQL.
          </p>
          <div className="mt-6 flex gap-4">
            <a
              href="/projects"
              className="px-5 py-2 bg-accent text-white rounded-md"
            >
              View Projects
            </a>
            <a href="/contact" className="px-5 py-2 border rounded-md">
              Contact
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className=""
        >
          <div className="rounded-2xl p-6 bg-white shadow-lg">
            <h3 className="font-semibold mb-2">Recent Projects</h3>
            <div className="space-y-4">
              {projectsSample.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
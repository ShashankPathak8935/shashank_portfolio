import React from "react";
import ProjectCard from "../components/ProjectCard";

const allProjects = [
  {
    id: 1,
    title: "User Management Portal",
    tech: "React, Node, PostgreSQL",
    desc: "Excel import/export, auth, filters, PDF/Excel download.",
  },
  {
    id: 2,
    title: "ERP Migration",
    tech: "React, Node, PostgreSQL",
    desc: "Legacy PHP -> modern stack migration. Performance tuning.",
  },
  {
    id: 3,
    title: "Food Delivery System",
    tech: "React, Node, PostgreSQL",
    desc: "Admin panel, analytics, order mgmt, GST calc.",
  },
  {
    id: 4,
    title: "Chat App",
    tech: "React, Node, MongoDB, Socket.io",
    desc: "Realtime group chat with Socket.io.",
  },
];

export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {allProjects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}

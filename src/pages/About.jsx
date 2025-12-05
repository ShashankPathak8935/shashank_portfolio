import React from "react";

export default function About() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      <p className="mb-4">
        I am Shashank Pathak, MCA (2021–2023). Experienced in building
        full-stack applications using React, Node.js, PostgreSQL and migrating
        legacy systems.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-white rounded-lg shadow">
          Skills: React, Node.js, Express, PostgreSQL, Tailwind CSS, JWT, RBAC
        </div>
        <div className="p-4 bg-white rounded-lg shadow">
          Experience: Blossoms Aroma Ltd (Oct 2023 – Mar 14, 2024), Mawai
          Infotech (Associate Software Engineer)
        </div>
      </div>
    </section>
  );
}
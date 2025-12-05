import React from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];




export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120 }}
      className="bg-white/80 backdrop-blur sticky top-0 z-40 shadow-sm"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="font-semibold text-xl">
          Shashank Pathak
        </Link>
        <div className="space-x-4 hidden md:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                isActive ? "text-accent font-medium" : "text-gray-700"
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
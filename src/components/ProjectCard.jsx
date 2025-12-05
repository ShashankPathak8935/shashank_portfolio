import React from "react";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";


export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="p-4 border rounded-lg bg-gray-50 flex items-start justify-between"
    >
      <div>
        <h4 className="font-semibold">{project.title}</h4>
        <p className="text-sm text-gray-600">{project.tech}</p>
        <p className="mt-2 text-sm">{project.desc}</p>
      </div>
      <div className="ml-4">
        <ArrowForwardIcon />
      </div>
    </motion.div>
  );
}
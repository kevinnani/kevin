import { FaHtml5 } from "react-icons/fa6";
import { PiFileCssLight } from "react-icons/pi";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact, FaNode, FaBootstrap } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { RiTailwindCssLine } from "react-icons/ri";
import { DiMaterializecss } from "react-icons/di";
import "../styles/TechStack.css";

import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, duration: 1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

export const TechStack = () => {
  const techStack = [
    { icon: <FaHtml5 className="html" />, name: "HTML" },
    { icon: <PiFileCssLight className="css" />, name: "CSS" },
    { icon: <TbBrandJavascript className="js" />, name: "JavaScript" },
    { icon: <FaReact className="react" />, name: "React.js" },
    { icon: <FaNode className="node" />, name: "Node.js" },
    { icon: <SiMysql className="mysql" />, name: "MySQL" },
    { icon: <RiTailwindCssLine className="tailwind" />, name: "Tailwind CSS" },
    { icon: <FaBootstrap className="bootstrap" />, name: "Bootstrap" },
    { icon: <DiMaterializecss className="mui" />, name: "Material UI" },
  ];

  return (
    <div className="container mt-4 min-vh-50">
      <h3 className="mb-4">Tech Stack</h3>
      <motion.div
        className="tech_stack_container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Ensures animation triggers only once
      >
        <div className="row teck_cords_contnainer justify-content-center">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              className="col-md-2 col-8 teck_cord text-center"
              variants={itemVariants}
            >
              {tech.icon}
              <h4>{tech.name}</h4>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

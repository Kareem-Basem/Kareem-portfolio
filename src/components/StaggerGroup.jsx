import { motion } from "framer-motion";
import { createStaggerContainer, darkEntryViewport } from "../utils/motion";

function StaggerGroup({
  children,
  className,
  as = "div",
  staggerChildren = 0.1,
  delayChildren = 0,
}) {
  const Component = motion[as];

  return (
    <Component
      className={className}
      variants={createStaggerContainer({ delayChildren, staggerChildren })}
      initial="hidden"
      whileInView="show"
      viewport={darkEntryViewport}
    >
      {children}
    </Component>
  );
}

export default StaggerGroup;

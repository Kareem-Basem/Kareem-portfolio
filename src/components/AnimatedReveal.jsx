import { motion } from "framer-motion";
import { createFadeUp, darkEntryViewport } from "../utils/motion";

function AnimatedReveal({
  children,
  className,
  as = "div",
  duration = 1,
  delay = 0,
  distance = 100,
  variants,
}) {
  const Component = motion[as];

  return (
    <Component
      className={className}
      variants={variants ?? createFadeUp({ duration, delay, distance })}
      initial="hidden"
      whileInView="show"
      viewport={darkEntryViewport}
    >
      {children}
    </Component>
  );
}

export default AnimatedReveal;

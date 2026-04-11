import { motion } from "framer-motion";
import useDeviceMode from "../hooks/useDeviceMode";
import {
  createAdaptiveStaggerContainer,
  getAdaptiveViewport,
} from "../utils/motion";

function StaggerGroup({
  children,
  className,
  as = "div",
  staggerChildren = 0.1,
  delayChildren = 0,
}) {
  const Component = motion[as];
  const { motionLevel } = useDeviceMode();

  return (
    <Component
      className={className}
      variants={createAdaptiveStaggerContainer({
        motionLevel,
        delayChildren,
        staggerChildren,
      })}
      initial="hidden"
      whileInView="show"
      viewport={getAdaptiveViewport(motionLevel)}
    >
      {children}
    </Component>
  );
}

export default StaggerGroup;

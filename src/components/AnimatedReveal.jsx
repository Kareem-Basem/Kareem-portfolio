import { motion } from "framer-motion";
import useDeviceMode from "../hooks/useDeviceMode";
import {
  createAdaptiveFadeUp,
  getAdaptiveViewport,
} from "../utils/motion";

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
  const { useCompactMotion } = useDeviceMode();

  return (
    <Component
      className={className}
      variants={
        variants ??
        createAdaptiveFadeUp({
          isCompact: useCompactMotion,
          duration,
          delay,
          distance,
        })
      }
      initial="hidden"
      whileInView="show"
      viewport={getAdaptiveViewport(useCompactMotion)}
    >
      {children}
    </Component>
  );
}

export default AnimatedReveal;

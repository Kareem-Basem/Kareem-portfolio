import useDeviceMode from "../hooks/useDeviceMode";
import { useMotionProps, useMotionTag } from "./MotionSafe";
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
  const Component = useMotionTag(as);
  const { motionLevel } = useDeviceMode();

  return (
    <Component
      className={className}
      {...useMotionProps({
        variants: createAdaptiveStaggerContainer({
          motionLevel,
          delayChildren,
          staggerChildren,
        }),
        initial: "hidden",
        whileInView: "show",
        viewport: getAdaptiveViewport(motionLevel),
      })}
    >
      {children}
    </Component>
  );
}

export default StaggerGroup;

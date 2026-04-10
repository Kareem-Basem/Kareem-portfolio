import useDeviceMode from "../hooks/useDeviceMode";
import { useMotionProps, useMotionTag } from "./MotionSafe";
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
  const Component = useMotionTag(as);
  const { motionLevel } = useDeviceMode();

  return (
    <Component
      className={className}
      {...useMotionProps({
        variants:
          variants ??
          createAdaptiveFadeUp({
            motionLevel,
            duration,
            delay,
            distance,
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

export default AnimatedReveal;

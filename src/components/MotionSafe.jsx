import { Fragment } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useDeviceMode from "../hooks/useDeviceMode";

export function useMotionTag(tag) {
  const { motionLevel } = useDeviceMode();
  return motionLevel === "reduced" ? tag : motion[tag];
}

export function useMotionProps(props) {
  const { motionLevel } = useDeviceMode();
  return motionLevel === "reduced" ? {} : props;
}

export function MotionSafePresence({ children, ...props }) {
  const { motionLevel } = useDeviceMode();
  const Component = motionLevel === "reduced" ? Fragment : AnimatePresence;

  return <Component {...(motionLevel === "reduced" ? {} : props)}>{children}</Component>;
}

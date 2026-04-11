import { useEffect, useState } from "react";

const MOBILE_BREAKPOINT = 768;

function getDeviceSnapshot() {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return {
      isMobile: false,
      isDesktop: true,
      canHover: true,
      prefersReducedMotion: false,
      motionLevel: "full",
    };
  }

  const isMobile = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`).matches;
  const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const motionLevel = isMobile || prefersReducedMotion ? "reduced" : "full";

  return {
    isMobile,
    isDesktop: !isMobile,
    canHover,
    prefersReducedMotion,
    motionLevel,
  };
}

export default function useDeviceMode() {
  const [device, setDevice] = useState(getDeviceSnapshot);

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
      return undefined;
    }

    const mobileQuery = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const hoverQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateDevice = () => setDevice(getDeviceSnapshot());

    updateDevice();

    mobileQuery.addEventListener("change", updateDevice);
    hoverQuery.addEventListener("change", updateDevice);
    motionQuery.addEventListener("change", updateDevice);

    return () => {
      mobileQuery.removeEventListener("change", updateDevice);
      hoverQuery.removeEventListener("change", updateDevice);
      motionQuery.removeEventListener("change", updateDevice);
    };
  }, []);

  return {
    ...device,
    enableRichMotion:
      device.motionLevel === "full" && device.isDesktop && device.canHover,
    useCompactMotion: device.motionLevel === "reduced",
  };
}

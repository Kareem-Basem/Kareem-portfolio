export const darkEntryViewport = {
  once: true,
  margin: "0px 0px -120px 0px",
};

const EASE = "ease";
const REDUCED_VIEWPORT = {
  once: true,
  amount: 0.2,
  margin: "0px 0px -40px 0px",
};

function isReducedMotionLevel(motionLevel) {
  return motionLevel === "reduced";
}

export function createFadeUp({
  duration = 1,
  delay = 0,
  distance = 100,
} = {}) {
  return {
    hidden: { opacity: 0, y: distance },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration, delay, ease: EASE },
    },
  };
}

export function createAdaptiveFadeUp({
  motionLevel = "full",
  duration,
  delay = 0,
  distance,
} = {}) {
  const reduced = isReducedMotionLevel(motionLevel);
  const resolvedDuration = duration ?? (reduced ? 0.25 : 0.6);

  return createFadeUp({
    duration: reduced ? Math.min(resolvedDuration, 0.25) : resolvedDuration,
    delay,
    distance: distance ?? (reduced ? 10 : 40),
  });
}

export function createFadeLeft({
  duration = 1,
  delay = 0,
  distance = 100,
} = {}) {
  return {
    hidden: { opacity: 0, x: distance },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration, delay, ease: EASE },
    },
  };
}

export function createAdaptiveFadeLeft({
  motionLevel = "full",
  duration,
  delay = 0,
  distance,
} = {}) {
  const reduced = isReducedMotionLevel(motionLevel);
  const resolvedDuration = duration ?? (reduced ? 0.25 : 0.6);

  return createFadeLeft({
    duration: reduced ? Math.min(resolvedDuration, 0.25) : resolvedDuration,
    delay,
    distance: distance ?? (reduced ? 10 : 40),
  });
}

export function createStaggerContainer({
  delayChildren = 0,
  staggerChildren = 0.1,
} = {}) {
  return {
    hidden: {},
    show: {
      transition: {
        delayChildren,
        staggerChildren,
      },
    },
  };
}

export function createAdaptiveStaggerContainer({
  motionLevel = "full",
  delayChildren = 0,
  staggerChildren,
} = {}) {
  const reduced = isReducedMotionLevel(motionLevel);
  const resolvedStagger = staggerChildren ?? 0.1;

  return createStaggerContainer({
    delayChildren,
    staggerChildren: reduced
      ? Math.min(resolvedStagger, 0.06)
      : Math.max(resolvedStagger, 0.12),
  });
}

export function getAdaptiveViewport(motionLevel = "full") {
  return isReducedMotionLevel(motionLevel)
    ? REDUCED_VIEWPORT
    : darkEntryViewport;
}

export function getCardHoverMotion(enabled, shadow) {
  if (!enabled) {
    return undefined;
  }

  return {
    y: -8,
    ...(shadow ? { boxShadow: shadow } : {}),
    transition: { duration: 0.3, ease: EASE },
  };
}

export function getAdaptiveTapMotion(motionLevel = "full") {
  return undefined;
}

export function getButtonMotionProps(enabled, motionLevel = "full") {
  if (!enabled) {
    return {
      initial: false,
      whileHover: undefined,
      whileTap: undefined,
      variants: undefined,
    };
  }

  return {
    initial: "rest",
    whileHover: "hover",
    whileTap: "tap",
    variants: darkEntryButtonHover,
  };
}

export const darkEntryHover = {
  rest: {
    y: 0,
    scale: 1,
    boxShadow: "0 24px 80px rgba(15, 23, 42, 0.42)",
    transition: {
      duration: 0.3,
      ease: EASE,
    },
  },
  hover: {
    y: -8,
    scale: 1.02,
    boxShadow:
      "0 30px 90px rgba(15, 23, 42, 0.48), 0 0 24px rgba(56, 189, 248, 0.14)",
    transition: {
      duration: 0.3,
      ease: EASE,
    },
  },
};

export const darkEntryButtonHover = {
  rest: {
    y: 0,
    scale: 1,
    boxShadow: "0 0 0 rgba(36, 58, 255, 0)",
    transition: {
      duration: 0.3,
      ease: EASE,
    },
  },
  hover: {
    y: -4,
    scale: 1.015,
    boxShadow: "0 0 24px rgba(56, 189, 248, 0.22)",
    transition: {
      duration: 0.3,
      ease: EASE,
    },
  },
  tap: {
    scale: 0.985,
    transition: {
      duration: 0.2,
      ease: EASE,
    },
  },
};

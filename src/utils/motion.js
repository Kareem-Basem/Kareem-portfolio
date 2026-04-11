export const darkEntryViewport = {
  once: true,
  margin: "0px 0px -120px 0px",
};

const EASE = "ease";

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
  isCompact = false,
  duration,
  delay = 0,
  distance,
} = {}) {
  const resolvedDuration = duration ?? 1;

  return createFadeUp({
    duration: isCompact ? Math.min(resolvedDuration, 0.42) : resolvedDuration,
    delay,
    distance: distance ?? (isCompact ? 24 : 100),
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
  isCompact = false,
  duration,
  delay = 0,
  distance,
} = {}) {
  const resolvedDuration = duration ?? 1;

  return createFadeLeft({
    duration: isCompact ? Math.min(resolvedDuration, 0.45) : resolvedDuration,
    delay,
    distance: distance ?? (isCompact ? 24 : 100),
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
  isCompact = false,
  delayChildren = 0,
  staggerChildren,
} = {}) {
  const resolvedStagger = staggerChildren ?? 0.1;

  return createStaggerContainer({
    delayChildren,
    staggerChildren: isCompact ? Math.min(resolvedStagger, 0.04) : resolvedStagger,
  });
}

export function getAdaptiveViewport(isCompact = false) {
  return isCompact
    ? { once: true, amount: 0.08, margin: "0px 0px -40px 0px" }
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

export function getButtonMotionProps(enabled) {
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

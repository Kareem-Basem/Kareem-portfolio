import { useEffect, useRef } from "react";
import useDeviceMode from "../hooks/useDeviceMode";

const intensityMap = {
  default: { rotateX: 6, rotateY: 8, lift: 2 },
  subtle: { rotateX: 3.5, rotateY: 4.5, lift: 1 },
};

function TiltCard({
  className = "",
  children,
  disabled = false,
  intensity = "default",
}) {
  const { enableRichMotion } = useDeviceMode();
  const rootRef = useRef(null);
  const frameRef = useRef(null);
  const pointerRef = useRef({ x: 0.5, y: 0.5, active: false });

  const isInteractiveTarget = (target) =>
    target instanceof Element &&
    Boolean(
      target.closest(
        'a, button, input, textarea, select, summary, [role="button"], [data-interactive="true"]',
      ),
    );

  useEffect(() => {
    const element = rootRef.current;

    if (!element || disabled || !enableRichMotion) {
      return undefined;
    }

    const content = element.querySelector("[data-tilt-content]");
    const config = intensityMap[intensity] ?? intensityMap.default;

    if (!content) {
      return undefined;
    }

    const applyTransform = () => {
      frameRef.current = null;
      const { x, y, active } = pointerRef.current;
      const rotateX = active ? (0.5 - y) * config.rotateX : 0;
      const rotateY = active ? (x - 0.5) * config.rotateY : 0;
      const translateY = active ? -config.lift : 0;
      element.style.setProperty("--ratio-x", x);
      element.style.setProperty("--ratio-y", y);
      content.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate3d(0, ${translateY}px, 0)`;
    };

    const scheduleFrame = () => {
      if (frameRef.current) return;
      frameRef.current = window.requestAnimationFrame(applyTransform);
    };

    const handleMouseMove = (event) => {
      if (isInteractiveTarget(event.target)) {
        pointerRef.current = { x: 0.5, y: 0.5, active: false };
        scheduleFrame();
        return;
      }

      const bounds = element.getBoundingClientRect();
      const x = Math.min(Math.max((event.clientX - bounds.left) / bounds.width, 0), 1);
      const y = Math.min(Math.max((event.clientY - bounds.top) / bounds.height, 0), 1);
      pointerRef.current = { x, y, active: true };
      scheduleFrame();
    };

    const handleMouseEnter = (event) => {
      if (isInteractiveTarget(event.target)) {
        pointerRef.current = { x: 0.5, y: 0.5, active: false };
        scheduleFrame();
      }
    };

    const handleMouseLeave = () => {
      pointerRef.current = { x: 0.5, y: 0.5, active: false };
      scheduleFrame();
    };

    element.addEventListener("mouseover", handleMouseEnter, { passive: true });
    element.addEventListener("mousemove", handleMouseMove, { passive: true });
    element.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    return () => {
      element.removeEventListener("mouseover", handleMouseEnter);
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, [disabled, enableRichMotion, intensity]);

  return (
    <div
      ref={rootRef}
      className={`tilt-card relative ${className}`.trim()}
      style={{ touchAction: "pan-y", overflow: "visible" }}
      data-tilt-enabled={enableRichMotion && !disabled ? "true" : "false"}
    >
      <div aria-hidden="true" className="tilt-card__glow" />
      <div data-tilt-content className="tilt-card__content relative z-[1]">
        {children}
      </div>
    </div>
  );
}

export default TiltCard;

import { memo } from "react";
import useDeviceMode from "../hooks/useDeviceMode";
import { getAdaptiveTapMotion, getCardHoverMotion } from "../utils/motion";
import { useMotionProps, useMotionTag } from "./MotionSafe";
import TiltCard from "./TiltCard";

function ContactLinkCard({ href, label, value, external = false }) {
  const { enableRichMotion, motionLevel } = useDeviceMode();
  const MotionAnchor = useMotionTag("a");

  return (
    <MotionAnchor
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer noopener" : undefined}
      {...useMotionProps({
        whileHover: getCardHoverMotion(enableRichMotion),
        whileTap: getAdaptiveTapMotion(motionLevel),
      })}
      className="block rounded-[1.35rem] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
    >
      <TiltCard
        intensity="subtle"
        disabled={!enableRichMotion}
        className="rounded-[1.35rem]"
      >
        <div className="rounded-[1.35rem] border border-white/10 bg-white/5 p-4 sm:p-5">
          <p className="mb-3 text-xs uppercase tracking-[0.24em] text-slate-400">
            {label}
          </p>
          <p className="break-words text-sm font-medium text-white sm:text-base">
            {value}
          </p>
        </div>
      </TiltCard>
    </MotionAnchor>
  );
}

export default memo(ContactLinkCard);

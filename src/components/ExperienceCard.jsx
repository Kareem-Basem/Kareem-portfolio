import { motion } from "framer-motion";
import { createFadeUp } from "../utils/motion";
import TiltCard from "./TiltCard";

function ExperienceCard({ item, index }) {
  const isActive = item.period.includes("Present");

  return (
    <motion.article
      variants={createFadeUp({ duration: 1 + index * 0.05 })}
      whileHover={{
        y: -8,
        transition: { duration: 0.3, ease: "ease" },
      }}
      className="glass-panel rounded-[1.75rem]"
    >
      <TiltCard className="h-full rounded-[inherit]">
        <div className="p-5 sm:p-6">
          <div className="mb-4 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white sm:text-xl">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-neon-blue">{item.company}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-neon-blue/20 bg-neon-blue/10 px-3 py-1 text-xs text-neon-blue">
                {item.type}
              </span>
              {isActive && (
                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                  Active
                </span>
              )}
            </div>
          </div>

          <div className="mb-4 flex flex-col gap-1 text-sm text-slate-400 sm:flex-row sm:flex-wrap sm:gap-3">
            <span>{item.period}</span>
            <span className="hidden text-white/20 sm:inline">&bull;</span>
            <span>{item.location}</span>
          </div>

          <ul className="space-y-3 text-sm leading-7 text-slate-300">
            {item.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-400" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </TiltCard>
    </motion.article>
  );
}

export default ExperienceCard;

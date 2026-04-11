import { motion } from "framer-motion";
import {
  createFadeUp,
  darkEntryViewport,
} from "../utils/motion";
import { createImageFallback } from "../utils/imageFallback";
import TiltCard from "./TiltCard";

function handleImageError(event, title) {
  event.currentTarget.onerror = null;
  event.currentTarget.src = createImageFallback(title, "Certificate");
}

function CertificateCard({ certificate, featured = false }) {
  return (
    <motion.article
      initial="hidden"
      whileInView="show"
      viewport={darkEntryViewport}
      variants={createFadeUp({ duration: 1 })}
      whileHover={{
        y: -8,
        boxShadow:
          "0 30px 90px rgba(15, 23, 42, 0.48), 0 0 24px rgba(56, 189, 248, 0.14)",
        transition: { duration: 0.3, ease: "ease" },
      }}
      className={`glass-panel rounded-[1.75rem] ${
        featured
          ? "border-neon-purple/30 shadow-[0_0_0_1px_rgba(139,92,246,0.24),0_30px_90px_rgba(15,23,42,0.48),0_0_30px_rgba(56,189,248,0.12)]"
          : ""
      }`}
    >
      <TiltCard className={`h-full rounded-[inherit] ${featured ? "scale-[1.02] md:scale-[1.05]" : ""}`}>
        <motion.div
          variants={createFadeUp({ duration: 1.1 })}
          className="aspect-[4/3] overflow-hidden border-b border-white/10"
        >
          <motion.img
            src={certificate.image}
            alt={certificate.title}
            loading="lazy"
            draggable={false}
            className="h-full w-full object-cover"
            onError={(event) => handleImageError(event, certificate.title)}
            variants={createFadeUp({ duration: 1.2 })}
          />
        </motion.div>
        <div className="p-4 sm:p-5">
          {featured && (
            <motion.div
              variants={createFadeUp({ duration: 1.15 })}
              className="mb-3"
            >
              <span className="rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-xs font-medium text-amber-200">
                ⭐ Featured
              </span>
            </motion.div>
          )}
          <motion.div
            variants={createFadeUp({ duration: 1.2 })}
            className="mb-3 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between"
          >
            <h3 className="text-base font-semibold text-white sm:text-lg">{certificate.title}</h3>
            <span
              className={`rounded-full px-3 py-1 text-xs font-medium ${
                certificate.status === "In Progress"
                  ? "bg-amber-400/15 text-amber-300"
                  : "bg-emerald-400/15 text-emerald-300"
              }`}
            >
              {certificate.status}
            </span>
          </motion.div>
          <motion.div
            variants={createFadeUp({ duration: 1.25 })}
            className="mb-3"
          >
            <span className="rounded-full border border-neon-blue/20 bg-neon-blue/10 px-3 py-1 text-xs text-neon-blue">
              {certificate.category}
            </span>
          </motion.div>
          <motion.p
            variants={createFadeUp({ duration: 1.3 })}
            className="text-sm leading-7 text-slate-300"
          >
            {certificate.subtitle}
          </motion.p>
        </div>
      </TiltCard>
    </motion.article>
  );
}

export default CertificateCard;

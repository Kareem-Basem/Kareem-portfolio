import { motion } from "framer-motion";
import {
  createFadeUp,
  createStaggerContainer,
  darkEntryViewport,
} from "../utils/motion";
import { createImageFallback } from "../utils/imageFallback";
import TiltCard from "./TiltCard";

function handleImageError(event, title) {
  event.currentTarget.onerror = null;
  event.currentTarget.src = createImageFallback(title, "Project Preview");
}

function ProjectCard({ project }) {
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
      className="glass-panel rounded-[1.75rem]"
    >
      <TiltCard className="rounded-[inherit]">
        <motion.div
          variants={createFadeUp({ duration: 1.1 })}
          className="relative aspect-[16/10] overflow-hidden border-b border-white/10"
        >
          <motion.img
            src={project.image}
            alt={project.imageAlt || project.title}
            loading="lazy"
            draggable={false}
            className="h-full w-full object-cover"
            onError={(event) => handleImageError(event, project.title)}
            variants={createFadeUp({ duration: 1.2 })}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
        </motion.div>

        <div className="flex flex-col p-5 sm:p-6">
          <motion.div
            variants={createFadeUp({ duration: 1.2 })}
            className="mb-4 flex flex-wrap items-start justify-between gap-3"
          >
            <div>
              <h3 className="text-xl font-semibold text-white sm:text-2xl">{project.title}</h3>
              <p className="mt-2 text-slate-300">{project.description}</p>
            </div>
          </motion.div>

          <motion.div
            variants={createFadeUp({ duration: 1.3 })}
            className="order-1 mb-5 flex flex-wrap gap-2"
          >
            {project.tech.map((item) => (
              <span
                key={item}
                className="rounded-full border border-neon-blue/20 bg-neon-blue/10 px-3 py-1 text-xs text-neon-blue"
              >
                {item}
              </span>
            ))}
          </motion.div>

          <motion.ul
            variants={createStaggerContainer({ staggerChildren: 0.1 })}
            className="order-3 space-y-3 text-sm leading-7 text-slate-300 sm:order-2"
          >
            {project.features.map((feature) => (
              <motion.li
                key={feature}
                variants={createFadeUp({ duration: 1.4 })}
                className="flex gap-3"
              >
                <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400" />
                <span>{feature}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </TiltCard>

      <motion.div
        variants={createFadeUp({ duration: 1.4 })}
        className="relative z-20 order-2 flex flex-col gap-3 px-5 pb-5 sm:order-3 sm:flex-row sm:flex-wrap sm:px-6 sm:pb-6"
      >
        {project.liveDemo && (
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex w-full cursor-pointer justify-center rounded-xl bg-gradient-to-r from-neon-blue to-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(56,189,248,0.22)] active:scale-[0.985] sm:w-auto"
          >
            Live Demo
          </a>
        )}
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex w-full cursor-pointer justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-white/10 hover:shadow-[0_0_24px_rgba(56,189,248,0.14)] active:scale-[0.985] sm:w-auto"
        >
          GitHub
        </a>
        {project.videoDocumentation && (
          <a
            href={project.videoDocumentation}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex w-full cursor-pointer justify-center rounded-xl border border-neon-purple/20 bg-neon-purple/10 px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-neon-purple/20 hover:shadow-[0_0_24px_rgba(139,92,246,0.2)] active:scale-[0.985] sm:w-auto"
          >
            Video Docs
          </a>
        )}
      </motion.div>
    </motion.article>
  );
}

export default ProjectCard;

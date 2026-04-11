import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useDeviceMode from "./hooks/useDeviceMode";
import AnimatedReveal from "./components/AnimatedReveal";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import ProjectCard from "./components/ProjectCard";
import CertificateCard from "./components/CertificateCard";
import ContactLinkCard from "./components/ContactLinkCard";
import ExperienceCard from "./components/ExperienceCard";
import StaggerGroup from "./components/StaggerGroup";
import { projects } from "./data/projects";
import { certificates } from "./data/certificates";
import { experience } from "./data/experience";
import kareemCv from "../assets/kareem-cv.pdf";
import {
  createAdaptiveFadeLeft,
  createAdaptiveFadeUp,
  getAdaptiveViewport,
  getButtonMotionProps,
  getCardHoverMotion,
} from "./utils/motion";

const skills = [
  {
    title: "Core Technical Skills",
    items: [
      "Python (Problem Solving & Basics)",
      "Database Design & Management (Microsoft Access & SQL Server)",
      "Web Development Fundamentals",
      "AI Tools & Prompt Engineering",
    ],
  },
  {
    title: "Tools & Technologies",
    items: [
      "Microsoft Excel (Data Handling & Analysis)",
      "PowerPoint (Technical Presentations)",
      "Git & GitHub",
      "Basic Cybersecurity Concepts",
      "Linux (Basics)",
    ],
  },
  {
    title: "Professional Skills",
    items: [
      "Problem Solving & Analytical Thinking",
      "Team Collaboration",
      "Communication & Presentation",
      "Adaptability & Fast Learning",
    ],
  },
];

const contactLinks = [
  {
    label: "Email",
    value: "karemalwy1@gmail.com",
    href: "mailto:karemalwy1@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/karem-basem",
  },
  {
    label: "GitHub",
    value: "View GitHub Profile",
    href: "https://github.com/Kareem-Basem",
  },
  {
    label: "Resume",
    value: "Open CV PDF",
    href: kareemCv,
  },
];

function App() {
  const { enableRichMotion, useCompactMotion } = useDeviceMode();
  const [activeCertificateCategory, setActiveCertificateCategory] = useState(
    "AI & Generative AI",
  );
  const buttonMotionProps = getButtonMotionProps(enableRichMotion);

  const featuredCertificates = useMemo(
    () => certificates.filter((certificate) => certificate.featured),
    [],
  );

  const certificateCategories = useMemo(
    () => [
      "AI & Generative AI",
      "Cybersecurity & Technical Tools",
      "Business, Marketing & Professional Skills",
    ],
    [],
  );

  const filteredCertificates = useMemo(
    () =>
      certificates.filter(
        (certificate) =>
          !certificate.featured &&
          certificate.category === activeCertificateCategory,
      ),
    [activeCertificateCategory],
  );

  return (
    <div className="relative min-h-screen">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-neon-blue/15 blur-[120px]" />
        <div className="absolute right-0 top-32 h-80 w-80 rounded-full bg-neon-purple/15 blur-[140px]" />
      </div>

      <Navbar />

      <main className="relative z-10 mx-auto flex max-w-7xl flex-col gap-8 px-4 pb-20 pt-28 sm:px-6 sm:pt-32 lg:px-8">
        <Section id="home" className="min-h-[calc(100vh-8rem)]">
          <div className="relative mt-4 grid-fade section-shell clip-overflow sm:mt-6">
            <div className="pointer-events-none absolute inset-0 opacity-60" />
            <StaggerGroup className="relative grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
              <div className="space-y-6 sm:space-y-8">
                <AnimatedReveal className="space-y-4" duration={1}>
                  <span className="inline-flex w-fit rounded-full border border-neon-blue/30 bg-neon-blue/10 px-4 py-2 text-sm text-neon-blue shadow-glow">
                    Software Engineer Student
                  </span>
                  <h1 className="max-w-3xl text-4xl font-extrabold leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-7xl">
                    Kareem Basem
                  </h1>
                  <p className="text-base text-slate-200 sm:text-xl">
                    <span className="gradient-text font-semibold">
                      Full-Stack Developer | Tech Learner
                    </span>
                  </p>
                  <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                    Passionate about building real-world web applications,
                    exploring game modding, and learning cybersecurity
                    concepts, with a strong focus on performance, clean
                    structure, and user-friendly experiences.
                  </p>
                </AnimatedReveal>

                <motion.div
                  variants={createAdaptiveFadeUp({
                    isCompact: useCompactMotion,
                    duration: 1.1,
                  })}
                  className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
                >
                  <motion.a
                    href="#projects"
                    {...buttonMotionProps}
                    className="w-full rounded-2xl bg-gradient-to-r from-neon-blue to-cyan-400 px-6 py-3 text-center font-semibold text-slate-950 sm:w-auto"
                  >
                    View Projects
                  </motion.a>
                  <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-4">
                    <motion.a
                      href="#contact"
                      {...buttonMotionProps}
                      className="glass-panel rounded-2xl px-4 py-3 text-center font-semibold text-white sm:px-6"
                    >
                      Contact
                    </motion.a>
                    <motion.a
                      href={kareemCv}
                      target="_blank"
                      rel="noreferrer noopener"
                      {...buttonMotionProps}
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center font-semibold text-white sm:px-6"
                    >
                      View CV
                    </motion.a>
                  </div>
                </motion.div>

                <StaggerGroup className="grid gap-3 sm:grid-cols-3 sm:gap-4">
                  {[
                    "Web Applications",
                    "Game Modding",
                    "Cybersecurity",
                  ].map((item, index) => (
                    <motion.div
                      key={item}
                      variants={createAdaptiveFadeUp({
                        isCompact: useCompactMotion,
                        duration: 1 + index * 0.1,
                      })}
                      className="glass-panel rounded-2xl px-4 py-3 text-center text-sm text-slate-200 sm:py-4 sm:text-left"
                    >
                      {item}
                    </motion.div>
                  ))}
                </StaggerGroup>
              </div>

              <AnimatedReveal
                className="order-2 relative mx-auto w-full max-w-sm sm:max-w-md lg:order-none"
                variants={createAdaptiveFadeLeft({
                  isCompact: useCompactMotion,
                  duration: 1.1,
                })}
              >
                <div className="glass-panel animate-float relative rounded-[2rem] p-4 sm:p-6">
                  <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />
                  <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-5 sm:p-6">
                    <div className="mb-6 flex items-center justify-between">
                      <span className="text-sm uppercase tracking-[0.3em] text-slate-400">
                        Focus
                      </span>
                      <span className="h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.9)]" />
                    </div>
                    <div className="space-y-4">
                      {[
                        "Building responsive frontend applications using modern technologies",
                        "Developing structured systems and database-driven projects",
                        "Exploring performance optimization and user experience improvements",
                      ].map((line) => (
                        <div
                          key={line}
                          className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm leading-7 text-slate-300"
                        >
                          {line}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedReveal>
            </StaggerGroup>
          </div>
        </Section>

        <Section
          id="about"
          eyebrow="About"
          title="Building practical, user-focused systems with a real-world mindset."
          description="I'm Kareem Basem, a Management Information Systems student at Sadat Academy, passionate about building practical, user-focused tech solutions."
        >
          <StaggerGroup className="grid gap-4 md:grid-cols-3">
            {[
              "I focus on developing real-world projects that strengthen my skills in problem-solving, system design, and performance optimization.",
              "I have a solid understanding of software, operating systems, and database management, along with hands-on experience in building structured and efficient systems.",
              "I'm continuously learning, experimenting, and improving, aiming to grow into a professional who builds scalable, high-quality applications.",
            ].map((text, index) => (
              <motion.div
                key={text}
                variants={createAdaptiveFadeUp({
                  isCompact: useCompactMotion,
                  duration: 1 + index * 0.1,
                })}
                className="glass-panel rounded-2xl p-5 text-slate-300"
              >
                {text}
              </motion.div>
            ))}
          </StaggerGroup>
        </Section>

        <Section
          id="skills"
          eyebrow="Skills"
          title="A structured skill set across technical depth, tools, and collaboration."
          description="Core capabilities are grouped to stay easier to scan while preserving the same card-based presentation."
        >
          <StaggerGroup className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {skills.map((group, index) => (
              <motion.div
                key={group.title}
                variants={createAdaptiveFadeUp({
                  isCompact: useCompactMotion,
                  duration: 1 + index * 0.1,
                })}
                whileHover={getCardHoverMotion(enableRichMotion)}
                className="glass-panel rounded-2xl p-5"
              >
                <h3 className="mb-4 text-lg font-semibold text-white">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </StaggerGroup>
        </Section>

        <Section
          id="experience"
          eyebrow="Experience"
          title="Training and leadership experience grounded in real environments."
          description="A growing mix of banking, IT support, operations, and leadership experience across internships, training programs, and student team responsibilities."
        >
          <StaggerGroup className="grid gap-6 lg:grid-cols-2">
            {experience.map((item, index) => (
              <ExperienceCard key={`${item.company}-${item.title}`} item={item} index={index} />
            ))}
          </StaggerGroup>
        </Section>

        <Section
          id="projects"
          eyebrow="Projects"
          title="Selected work across full-stack systems and game modding."
          description="High-impact projects that combine product thinking, engineering detail, and hands-on implementation."
        >
          <StaggerGroup className="grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </StaggerGroup>
        </Section>

        <Section
          id="certifications"
          eyebrow="Certifications"
          title="Continuous learning with stronger highlights and clearer grouping."
          description="Featured certifications stay visible at the top, while the rest are organized into focused categories for easier scanning."
        >
          <div className="space-y-10">
            <div>
              <motion.div
                variants={createAdaptiveFadeUp({
                  isCompact: useCompactMotion,
                  duration: 1,
                })}
                initial="hidden"
                whileInView="show"
                viewport={getAdaptiveViewport(useCompactMotion)}
                className="mb-5"
              >
                <h3 className="text-xl font-semibold text-white">
                  Featured Certifications
                </h3>
              </motion.div>
              <StaggerGroup className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                {featuredCertificates.map((certificate) => (
                  <CertificateCard
                    key={certificate.id || certificate.title}
                    certificate={certificate}
                    featured
                  />
                ))}
              </StaggerGroup>
            </div>

            <div>
              <motion.div
                variants={createAdaptiveFadeUp({
                  isCompact: useCompactMotion,
                  duration: 1.05,
                })}
                initial="hidden"
                whileInView="show"
                viewport={getAdaptiveViewport(useCompactMotion)}
                className="mb-5 flex flex-wrap gap-3"
              >
                {certificateCategories.map((category, index) => (
                  <motion.button
                    key={category}
                    type="button"
                    variants={createAdaptiveFadeUp({
                      isCompact: useCompactMotion,
                      duration: 1 + index * 0.05,
                    })}
                    onClick={() => setActiveCertificateCategory(category)}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition duration-300 ${
                      activeCertificateCategory === category
                        ? "border border-neon-blue/30 bg-neon-blue/15 text-neon-blue"
                        : "border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
                    }`}
                  >
                    {category}
                  </motion.button>
                ))}
              </motion.div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCertificateCategory}
                  variants={createAdaptiveFadeUp({
                    isCompact: useCompactMotion,
                    duration: 1,
                  })}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                >
                  <StaggerGroup className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {filteredCertificates.map((certificate) => (
                      <CertificateCard
                        key={certificate.id || certificate.title}
                        certificate={certificate}
                      />
                    ))}
                  </StaggerGroup>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Section>

        <Section
          id="contact"
          eyebrow="Contact"
          title="Let's build something thoughtful, fast, and secure."
          description="Reach out directly or jump to the main professional links from one clean contact hub."
        >
          <div className="max-w-5xl">
            <motion.div
              variants={createAdaptiveFadeUp({
                isCompact: useCompactMotion,
                duration: 1,
              })}
              initial="hidden"
              whileInView="show"
              viewport={getAdaptiveViewport(useCompactMotion)}
              whileHover={getCardHoverMotion(enableRichMotion)}
              className="glass-panel block rounded-[1.75rem] p-6 sm:p-8"
            >
              <p className="mb-3 text-sm uppercase tracking-[0.28em] text-neon-blue">
                Primary Contact
              </p>
              <a
                href="mailto:karemalwy1@gmail.com"
                className="mb-6 block break-all text-xl font-semibold text-white transition duration-300 hover:text-cyan-300 sm:text-3xl sm:break-normal"
              >
                karemalwy1@gmail.com
              </a>

              <StaggerGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {contactLinks
                  .filter((item) => item.label !== "Email")
                  .map((item, index) => (
                    <motion.span
                      key={item.label}
                      variants={createAdaptiveFadeUp({
                        isCompact: useCompactMotion,
                        duration: 1 + index * 0.1,
                      })}
                      className="block"
                    >
                      <ContactLinkCard
                        href={item.href}
                        label={item.label}
                        value={item.value}
                        external={
                          item.href.startsWith("http") || item.href.endsWith(".pdf")
                        }
                      />
                    </motion.span>
                  ))}
              </StaggerGroup>

              <div className="mt-6 flex justify-end">
                <p className="signature-font text-lg text-slate-300/65">
                  Designed by KeMoO
                </p>
              </div>
            </motion.div>
          </div>
        </Section>
      </main>
    </div>
  );
}

export default App;

import AnimatedReveal from "./AnimatedReveal";

function Section({ id, eyebrow, title, description, className = "", children }) {
  return (
    <section id={id} className={className}>
      {(eyebrow || title || description) && (
        <AnimatedReveal className="mb-8 max-w-3xl px-1 sm:px-0" duration={1}>
          {eyebrow && (
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-neon-blue">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
              {title}
            </h2>
          )}
          {description && (
            <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">
              {description}
            </p>
          )}
        </AnimatedReveal>
      )}
      {children}
    </section>
  );
}

export default Section;

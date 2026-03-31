"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ButtonLink } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const rotateX = useTransform(
    scrollYProgress,
    [0, 0.35],
    shouldReduceMotion ? [0, 0] : [0, 18],
  );
  const rotateY = useTransform(
    scrollYProgress,
    [0, 0.35],
    shouldReduceMotion ? [0, 0] : [0, -10],
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.35],
    shouldReduceMotion ? [1, 1] : [1, 0.88],
  );
  const translateZ = useTransform(
    scrollYProgress,
    [0, 0.35],
    shouldReduceMotion ? [0, 0] : [0, -60],
  );

  return (
    <Section className="pt-20 sm:pt-28">
      <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_1fr]">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
            ML Research Club · MITS Gwalior
          </p>
          <div className="[perspective:1200px]">
            <motion.h1
              style={{ rotateX, rotateY, scale, translateZ }}
              className="text-balance text-5xl font-extrabold leading-tight tracking-tight text-black sm:text-6xl lg:text-7xl [transform-style:preserve-3d]"
            >
              Machine <span className="accent-gradient">Learning</span> at MITS, shaping the{" "}
              <span className="accent-gradient">Future</span>.
            </motion.h1>
          </div>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
            Pushing the boundaries of machine learning at MITS Gwalior through deep
            collaboration, practical research, and high-impact student-led projects.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/events" variant="primary">
              View Ideathon
            </ButtonLink>
            <ButtonLink href="/join" variant="outline">
              Join Recruitments
            </ButtonLink>
          </div>
        </div>
        <div className="soft-shadow rounded-2xl border border-[var(--color-border)] bg-white p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
            Current Focus
          </p>
          <h2 className="mt-2 text-2xl font-bold text-black">ML IDEATHON 1.0</h2>
          <p className="mt-3 text-zinc-600">
            Upcoming in Summer 2026. Two focused days of model building, algorithm
            optimization, and intelligent solution pitching.
          </p>
          <div className="mt-5 inline-flex rounded-full bg-[var(--color-bg-soft)] px-3 py-1 text-xs font-medium text-zinc-700">
            Prize pool: TBA
          </div>
        </div>
      </div>
    </Section>
  );
}

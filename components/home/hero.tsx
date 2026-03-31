"use client";

import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

export function Hero() {
  return (
    <Section className="pt-16 sm:pt-20">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
            ML Research Club · MITS Gwalior
          </p>

          <h1 className="text-balance text-5xl font-extrabold leading-tight tracking-tight text-black sm:text-6xl lg:text-7xl">
            Machine{" "}
            <span className="accent-gradient" aria-hidden="true">
              Learning
            </span>{" "}
            at MITS
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
            Pushing the boundaries of machine learning at MITS Gwalior through applied
            research, hands-on building, and a community of curious students.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/events" variant="primary">
              Ideathon 1.0
            </ButtonLink>
            <ButtonLink href="/join" variant="outline">
              Join / Recruitments
            </ButtonLink>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.08 }}
          className="rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-sm"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
            Upcoming
          </p>
          <h2 className="mt-2 text-2xl font-bold text-black">ML IDEATHON 1.0</h2>
          <p className="mt-3 text-zinc-600">
            Summer 2026 · A deep-dive challenge to build models, optimize algorithms, and pitch intelligent
            solutions.
          </p>
          <div className="mt-5 inline-flex rounded-full bg-[var(--color-bg-soft)] px-3 py-1 text-xs font-medium text-zinc-700">
            Prize pool: TBA
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

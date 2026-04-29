"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Collapse() {
  return (
    <section className="bg-[#0A0A0A] text-[#F5F5F5] min-h-[100dvh] relative flex flex-col justify-center items-center py-40 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/collapse.png"
          alt="Fall of Constantinople"
          fill
          className="object-cover opacity-30 grayscale"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[900px] mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-32"
        >
          <h2 className="font-serif text-5xl md:text-8xl leading-[1.1] tracking-tight mb-12">
            &ldquo;Kota ini jatuh, dan aku masih hidup.&rdquo;
          </h2>
          <p className="font-sans text-sm uppercase tracking-widest text-[#A3A3A3]">
            — Konstantinus XI Palaiologos
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.5, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-16"
        >
          <p className="font-serif text-3xl md:text-5xl text-[#F5F5F5]">
            Tembok Theodosian runtuh.
          </p>
          <p className="font-serif text-3xl md:text-5xl text-[#A3A3A3]">
            Bendera bulan sabit berkibar di atas Hagia Sophia.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

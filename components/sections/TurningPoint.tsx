"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionNumber } from "@/components/SectionNumber";

export function TurningPoint() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const backgroundColor = useTransform(scrollYProgress, [0.3, 0.8], ["#FFFFFF", "#0A0A0A"]);
  const textColor = useTransform(scrollYProgress, [0.3, 0.8], ["#0A0A0A", "#F5F5F5"]);
  const mutedColor = useTransform(scrollYProgress, [0.3, 0.8], ["#6B6B6B", "#A3A3A3"]);

  return (
    <motion.section
      ref={ref}
      style={{ backgroundColor, color: textColor }}
      className="relative py-40 md:py-60 px-6 transition-colors duration-0"
    >
      <div className="max-w-[720px] mx-auto relative z-10">
        <motion.div style={{ color: mutedColor }}>
          <SectionNumber number="VII" title="Turning Point" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-5xl md:text-7xl leading-[1.05] tracking-tight mb-12"
        >
          Kapal yang Melintasi Daratan
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8 font-sans text-xl md:text-2xl leading-[1.7] max-w-[62ch]"
        >
          <p>
            Tanduk Emas dilindungi oleh rantai baja raksasa di mulutnya. Selama Tanduk Emas aman, Konstantinopel masih memiliki ruang untuk bernapas. Kesadaran inilah yang melahirkan manuver paling berani dalam seluruh pengepungan itu.
          </p>
          <p>
            Mehmed memerintahkan 70 kapal perangnya dipindahkan bukan melalui laut, melainkan melintasi daratan berbukit di kawasan Pera, menggunakan papan kayu yang dilumuri lemak.
          </p>
        </motion.div>
      </div>

      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center opacity-20">
        <svg
          viewBox="0 0 1000 400"
          className="w-full min-w-[1200px] absolute top-1/2 -translate-y-1/2"
        >
          <motion.path
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 4, ease: "easeInOut" }}
            d="M-100,300 Q300,100 500,200 T1100,100"
            fill="none"
            stroke="#8B0000"
            strokeWidth="3"
            strokeDasharray="10 10"
          />
        </svg>
      </div>
    </motion.section>
  );
}

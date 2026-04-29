"use client";

import { motion } from "framer-motion";
import { SectionNumber } from "@/components/SectionNumber";
import { SourceNote } from "@/components/ui/SourceNote";

export function Walls() {
  return (
    <section className="py-32 md:py-40 px-6 max-w-[1200px] mx-auto overflow-hidden">
      <div className="max-w-[720px] mx-auto mb-16">
        <SectionNumber number="III" title="Tembok yang Tak Tertembus" />
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight mb-8"
        >
          Sistem Pertahanan Theodosian
        </motion.h2>
        <p className="font-sans text-lg leading-[1.8] text-foreground/90">
          Berdiri sejak abad ke-5, sistem tiga lapis ini telah menahan pengepungan dari bangsa Avar, Arab, Rus, dan Bulgar. Ia membentang nyaris 6 kilometer dari laut ke laut, tebalnya mencapai 60 meter dari ujung parit terluar hingga bagian belakang tembok utama.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="w-full overflow-x-auto"
      >
        <div className="min-w-[800px] max-w-5xl mx-auto py-12 relative border border-border bg-muted/20">
          <svg viewBox="0 0 1000 400" className="w-full h-auto">
            <path d="M50,350 L950,350" stroke="#0A0A0A" strokeWidth="1" />

            <path
              d="M100,350 L120,380 L250,380 L270,350"
              fill="#F5F5F5"
              stroke="#0A0A0A"
              strokeWidth="1"
            />
            <text
              x="175"
              y="340"
              textAnchor="middle"
              className="font-sans text-[10px] uppercase tracking-widest fill-[#6B6B6B]"
            >
              Parit (Moat)
            </text>
            <text
              x="175"
              y="395"
              textAnchor="middle"
              className="font-serif italic text-xs fill-[#6B6B6B]"
            >
              lebar 20m, dalam 7m
            </text>

            <rect x="320" y="310" width="10" height="40" fill="#E5E5E5" stroke="#0A0A0A" strokeWidth="1" />
            <text
              x="325"
              y="295"
              textAnchor="middle"
              className="font-sans text-[10px] uppercase tracking-widest fill-[#6B6B6B]"
            >
              Dinding Rendah
            </text>

            <rect x="450" y="200" width="30" height="150" fill="#E5E5E5" stroke="#0A0A0A" strokeWidth="1" />
            <path d="M450,200 L455,180 L465,180 L465,200 Z" fill="#E5E5E5" stroke="#0A0A0A" strokeWidth="1" />
            <path d="M465,200 L470,180 L480,180 L480,200 Z" fill="#E5E5E5" stroke="#0A0A0A" strokeWidth="1" />
            <text
              x="465"
              y="150"
              textAnchor="middle"
              className="font-sans text-[10px] uppercase tracking-widest fill-[#6B6B6B]"
            >
              Tembok Luar
            </text>
            <text
              x="465"
              y="165"
              textAnchor="middle"
              className="font-serif italic text-xs fill-[#6B6B6B]"
            >
              tinggi 8.5m
            </text>

            <text
              x="560"
              y="340"
              textAnchor="middle"
              className="font-sans text-[10px] uppercase tracking-widest fill-[#6B6B6B]"
            >
              Parateichion
            </text>
            <text
              x="560"
              y="365"
              textAnchor="middle"
              className="font-serif italic text-xs fill-[#6B6B6B]"
            >
              lebar 15-20m
            </text>

            <rect x="650" y="100" width="80" height="250" fill="#E5E5E5" stroke="#0A0A0A" strokeWidth="1" />
            <path d="M650,100 L660,80 L675,80 L675,100 Z" fill="#E5E5E5" stroke="#0A0A0A" strokeWidth="1" />
            <path d="M675,100 L685,80 L700,80 L700,100 Z" fill="#E5E5E5" stroke="#0A0A0A" strokeWidth="1" />
            <path d="M700,100 L710,80 L725,80 L730,100 Z" fill="#E5E5E5" stroke="#0A0A0A" strokeWidth="1" />
            <text
              x="690"
              y="50"
              textAnchor="middle"
              className="font-sans text-[10px] uppercase tracking-widest fill-[#6B6B6B]"
            >
              Tembok Dalam
            </text>
            <text
              x="690"
              y="65"
              textAnchor="middle"
              className="font-serif italic text-xs fill-[#6B6B6B]"
            >
              tinggi 12m, tebal 5m
            </text>

            <rect x="420" y="325" width="4" height="25" fill="#0A0A0A" />
            <circle cx="422" cy="320" r="3" fill="#0A0A0A" />

            <path d="M100,420 L730,420" stroke="#6B6B6B" strokeWidth="0.5" strokeDasharray="2 2" />
            <path d="M100,415 L100,425" stroke="#6B6B6B" strokeWidth="1" />
            <path d="M730,415 L730,425" stroke="#6B6B6B" strokeWidth="1" />
            <text
              x="415"
              y="440"
              textAnchor="middle"
              className="font-serif italic text-sm fill-[#6B6B6B]"
            >
              Total kedalaman ~60 meter
            </text>
          </svg>
        </div>
        <SourceNote
          sources="Tsangadas, The Fortifications and Defense of Constantinople (1980); Turnbull, The Walls of Constantinople AD 324–1453 (2004)."
          note="Dimensi diukur dari sisa-sisa arkeologis sektor Mesoteichion; sebagian tembok telah mengalami restorasi modern."
        />
      </motion.div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { SectionNumber } from "@/components/SectionNumber";
import { SourceNote } from "@/components/ui/SourceNote";

export function MapSection() {
  return (
    <section className="py-32 md:py-40 px-6 max-w-[1200px] mx-auto">
      <div className="max-w-[720px] mx-auto mb-16">
        <SectionNumber number="V" title="Geografi" />
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight"
        >
          Pengepungan Terstruktur
        </motion.h2>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="w-full aspect-[4/3] md:aspect-video bg-muted/20 border border-border relative overflow-hidden"
      >
        <svg
          viewBox="0 0 1000 600"
          className="w-full h-full opacity-90"
          preserveAspectRatio="xMidYMid slice"
        >
          <path d="M0,0 L1000,0 L1000,600 L0,600 Z" fill="#F9F9F9" />
          <path
            d="M600,0 Q650,200 800,300 T1000,350 L1000,600 L200,600 Q300,450 450,300 Q500,250 200,100 L0,100 L0,0 Z"
            fill="#EAEAEA"
          />

          <path d="M350,230 L250,550" fill="none" stroke="#0A0A0A" strokeWidth="4" />
          <path
            d="M360,230 L260,550"
            fill="none"
            stroke="#0A0A0A"
            strokeWidth="2"
            strokeDasharray="4 4"
          />

          <text x="450" y="380" className="font-serif text-3xl fill-[#0A0A0A]">
            Konstantinopel
          </text>
          <text
            x="250"
            y="150"
            className="font-sans text-xs uppercase tracking-widest fill-[#6B6B6B]"
          >
            Tanduk Emas
          </text>
          <text
            x="750"
            y="150"
            className="font-sans text-xs uppercase tracking-widest fill-[#6B6B6B]"
          >
            Selat Bosporus
          </text>
          <text
            x="600"
            y="550"
            className="font-sans text-xs uppercase tracking-widest fill-[#6B6B6B]"
          >
            Laut Marmara
          </text>
          <text x="450" y="50" className="font-serif italic text-sm fill-[#6B6B6B]">
            Pera (Genoa)
          </text>

          <path
            d="M400,200 L450,150"
            fill="none"
            stroke="#8B0000"
            strokeWidth="3"
            strokeDasharray="3 3"
          />
          <text x="440" y="140" className="font-sans text-[9px] uppercase tracking-widest fill-[#8B0000]">
            Rantai Baja
          </text>

          <circle cx="150" cy="300" r="15" fill="#8B0000" fillOpacity="0.2" stroke="#8B0000" />
          <text
            x="150"
            y="304"
            textAnchor="middle"
            className="font-sans text-[10px] font-bold fill-[#8B0000]"
          >
            80k
          </text>

          <path
            d="M300,580 Q600,500 800,400"
            fill="none"
            stroke="#8B0000"
            strokeWidth="2"
            strokeDasharray="5 5"
            opacity="0.6"
          />
          <circle cx="700" cy="420" r="10" fill="#8B0000" fillOpacity="0.2" stroke="#8B0000" />
          <text
            x="700"
            y="424"
            textAnchor="middle"
            className="font-sans text-[8px] font-bold fill-[#8B0000]"
          >
            126
          </text>

          <motion.path
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 4, delay: 1, ease: "easeInOut" }}
            d="M600,80 Q400,60 300,100"
            fill="none"
            stroke="#8B0000"
            strokeWidth="2"
            strokeDasharray="6 6"
          />
          <motion.text
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 4 }}
            x="400"
            y="50"
            className="font-sans text-[10px] uppercase tracking-widest fill-[#8B0000]"
          >
            70 Kapal dipindahkan
          </motion.text>
        </svg>
      </motion.div>
      <SourceNote
        sources="Pertusi, La Caduta di Costantinopoli (1976); peta rekonstruksi Müller-Wiener, Bildlexikon zur Topographie Istanbuls (1977)."
        note="Posisi pasukan dan armada disederhanakan untuk kejelasan visual; jumlah 70 kapal yang dilintaskan adalah rentang umum (sumber menyebut 67–80)."
      />
    </section>
  );
}

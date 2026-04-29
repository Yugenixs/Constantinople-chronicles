"use client";

import { motion } from "framer-motion";
import { SectionNumber } from "@/components/SectionNumber";
import { SourceNote } from "@/components/ui/SourceNote";

export function Cannon() {
  return (
    <section className="py-32 md:py-40 px-6 max-w-[1200px] mx-auto overflow-hidden">
      <div className="max-w-[720px] mx-auto mb-16">
        <SectionNumber number="VI" title="Senjata Pamungkas" />
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight mb-8"
        >
          Basilica, Sang Penghancur Tembok
        </motion.h2>
        <p className="font-sans text-lg leading-[1.8] text-foreground/90">
          Insinyur Hungaria bernama Orban merancang meriam perunggu raksasa untuk Mehmed II. Skalanya jauh melampaui artileri standar abad ke-15, mengubah secara permanen paradigma peperangan pengepungan.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="w-full overflow-x-auto"
      >
        <div className="min-w-[800px] max-w-4xl mx-auto py-16 relative border border-border bg-muted/10 flex justify-center">
          <svg viewBox="0 0 1000 300" className="w-full h-auto">
            <path d="M50,250 L950,250" stroke="#E5E5E5" strokeWidth="2" />

            <rect x="150" y="235" width="80" height="15" fill="#6B6B6B" />
            <circle cx="170" cy="245" r="10" fill="#0A0A0A" />
            <circle cx="210" cy="245" r="10" fill="#0A0A0A" />
            <circle cx="240" cy="240" r="3" fill="#0A0A0A" />
            <text
              x="190"
              y="215"
              textAnchor="middle"
              className="font-sans text-[10px] uppercase tracking-widest fill-[#6B6B6B]"
            >
              Meriam Standar
            </text>
            <text
              x="190"
              y="275"
              textAnchor="middle"
              className="font-serif italic text-xs fill-[#6B6B6B]"
            >
              Peluru 3kg
            </text>

            <rect x="280" y="195" width="8" height="55" fill="#0A0A0A" />
            <circle cx="284" cy="185" r="6" fill="#0A0A0A" />

            <rect x="350" y="150" width="500" height="80" rx="5" fill="#8B0000" opacity="0.9" />
            <rect x="340" y="140" width="30" height="100" rx="2" fill="#8B0000" />
            <rect x="830" y="160" width="40" height="60" fill="#8B0000" />
            <circle cx="500" cy="230" r="40" fill="#0A0A0A" fillOpacity="0.8" />
            <circle cx="700" cy="230" r="40" fill="#0A0A0A" fillOpacity="0.8" />

            <circle cx="920" cy="190" r="25" fill="#0A0A0A" />

            <path d="M350,120 L850,120" stroke="#0A0A0A" strokeWidth="0.5" strokeDasharray="2 2" />
            <path d="M350,115 L350,125" stroke="#0A0A0A" strokeWidth="1" />
            <path d="M850,115 L850,125" stroke="#0A0A0A" strokeWidth="1" />
            <text
              x="600"
              y="110"
              textAnchor="middle"
              className="font-serif italic text-sm fill-[#0A0A0A]"
            >
              Panjang 8.2 meter
            </text>

            <text
              x="600"
              y="280"
              textAnchor="middle"
              className="font-sans text-[10px] uppercase tracking-widest fill-[#8B0000]"
            >
              Meriam Basilica
            </text>
            <text
              x="600"
              y="295"
              textAnchor="middle"
              className="font-serif italic text-xs fill-[#0A0A0A]"
            >
              Berat 16.800 kg · Jarak tembak 1,6 km
            </text>

            <text
              x="920"
              y="240"
              textAnchor="middle"
              className="font-sans text-[10px] uppercase tracking-widest fill-[#0A0A0A]"
            >
              Peluru Batu
            </text>
            <text
              x="920"
              y="255"
              textAnchor="middle"
              className="font-serif italic text-xs fill-[#0A0A0A]"
            >
              Berat 544 - 600 kg
            </text>
          </svg>
        </div>
        <SourceNote
          sources='DeVries, "Gunpowder Weaponry and the Rise of the Early Modern State" (1998); deskripsi Kritovoulos dari Imbros (1453).'
          note="Dimensi berdasarkan replika Meriam Dardanella (1464) yang masih ada, bobot saudaranya yang lebih tua; spesifikasi asli Basilica tidak ada yang bertahan."
        />
      </motion.div>
    </section>
  );
}

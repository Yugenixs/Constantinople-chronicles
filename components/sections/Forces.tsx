"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionNumber } from "@/components/SectionNumber";
import { SourceNote } from "@/components/ui/SourceNote";

export function Forces() {
  return (
    <section className="py-32 md:py-40 px-6 max-w-[1200px] mx-auto">
      <div className="max-w-[720px] mx-auto mb-24">
        <SectionNumber number="II" title="Dua Sisi yang Tak Seimbang" />
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight"
        >
          Kekuatan di Ambang Batas
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-end gap-6"
        >
          <Image
            src="/images/mehmed-ii.png"
            alt="Mehmed II"
            width={96}
            height={96}
            className="w-24 h-24 object-cover grayscale rounded-full border border-border"
          />
          <div>
            <h3 className="font-serif text-3xl">Mehmed II</h3>
            <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground mt-1">
              Sultan Utsmani · Usia 21
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-end gap-6"
        >
          <Image
            src="/images/konstantinus-xi.png"
            alt="Konstantinus XI"
            width={96}
            height={96}
            className="w-24 h-24 object-cover grayscale rounded-full border border-border"
          />
          <div>
            <h3 className="font-serif text-3xl">Konstantinus XI</h3>
            <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground mt-1">
              Kaisar Bizantium · Usia 48
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-16"
      >
        <div>
          <h3 className="font-serif text-2xl mb-4 border-b border-border pb-4">
            Pasukan Darat (1 Ikon = 1.000 Prajurit)
          </h3>
          <div className="grid grid-cols-[120px_1fr] gap-4 items-center">
            <span className="font-sans text-sm uppercase tracking-widest">Utsmani</span>
            <div className="flex flex-wrap gap-1">
              {Array.from({ length: 80 }).map((_, i) => (
                <div key={i} className="w-2 h-4 bg-[#8B0000] opacity-80" />
              ))}
            </div>
          </div>
          <div className="grid grid-cols-[120px_1fr] gap-4 items-center mt-4">
            <span className="font-sans text-sm uppercase tracking-widest">Bizantium</span>
            <div className="flex flex-wrap gap-1">
              {Array.from({ length: 7 }).map((_, i) => (
                <div key={i} className="w-2 h-4 bg-foreground opacity-80" />
              ))}
            </div>
          </div>
          <p className="font-sans text-xs text-muted-foreground mt-4 italic">
            7.000 prajurit Bizantium harus mempertahankan tembok sepanjang 20km (1 prajurit per 2,9 meter).
          </p>
        </div>

        <div>
          <h3 className="font-serif text-2xl mb-4 border-b border-border pb-4">
            Kapal Perang (1 Ikon = 2 Kapal)
          </h3>
          <div className="grid grid-cols-[120px_1fr] gap-4 items-center">
            <span className="font-sans text-sm uppercase tracking-widest">Utsmani</span>
            <div className="flex flex-wrap gap-1">
              {Array.from({ length: 63 }).map((_, i) => (
                <div key={i} className="w-3 h-3 bg-[#8B0000] opacity-80 rounded-sm" />
              ))}
            </div>
          </div>
          <div className="grid grid-cols-[120px_1fr] gap-4 items-center mt-4">
            <span className="font-sans text-sm uppercase tracking-widest">Bizantium</span>
            <div className="flex flex-wrap gap-1">
              {Array.from({ length: 13 }).map((_, i) => (
                <div key={i} className="w-3 h-3 bg-foreground opacity-80 rounded-sm" />
              ))}
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-serif text-2xl mb-4 border-b border-border pb-4">
            Artileri Pengepungan (1 Ikon = 1 Meriam)
          </h3>
          <div className="grid grid-cols-[120px_1fr] gap-4 items-center">
            <span className="font-sans text-sm uppercase tracking-widest">Utsmani</span>
            <div className="flex flex-wrap gap-2">
              {Array.from({ length: 69 }).map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full ${
                    i === 0 ? "bg-[#8B0000] scale-150" : "bg-[#8B0000] opacity-60"
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="grid grid-cols-[120px_1fr] gap-4 items-center mt-4">
            <span className="font-sans text-sm uppercase tracking-widest">Bizantium</span>
            <div className="flex flex-wrap gap-2">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="w-3 h-3 rounded-full bg-foreground opacity-60" />
              ))}
            </div>
          </div>
          <p className="font-sans text-xs text-muted-foreground mt-4 italic">
            Titik terbesar merah melambangkan meriam raksasa Basilica.
          </p>
        </div>

        <SourceNote
          sources="Runciman, The Fall of Constantinople 1453 (1965); Crowley, Constantinople: The Last Great Siege (2005); kronik Sphrantzes dan Barbaro."
          note="Jumlah pasukan Utsmani bervariasi antara 80.000–200.000 dalam sumber primer; 80.000 adalah estimasi konservatif sejarawan modern."
        />
      </motion.div>
    </section>
  );
}
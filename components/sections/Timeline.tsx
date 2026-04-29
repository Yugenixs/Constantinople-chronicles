"use client";

import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { SectionNumber } from "@/components/SectionNumber";
import { SourceNote } from "@/components/ui/SourceNote";
import { timelineData } from "@/data/historical";

const TimelineTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-background border border-border p-4 max-w-[200px] shadow-sm">
        <p className="font-serif text-lg mb-1">{data.date}</p>
        <p className="font-sans text-xs font-semibold mb-2">{data.title}</p>
        <p className="font-sans text-xs text-muted-foreground leading-relaxed">{data.desc}</p>
        <p className="font-sans text-xs uppercase tracking-widest text-[#8B0000] mt-3 border-t border-border pt-2">
          {data.intensity} tembakan meriam
        </p>
      </div>
    );
  }
  return null;
};

export function Timeline() {
  return (
    <section className="py-32 md:py-40 px-6 max-w-[1000px] mx-auto">
      <SectionNumber number="IV" title="Linimasa" />

      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight mb-24 max-w-[720px]"
      >
        Intensitas Pengepungan 53 Hari
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="w-full"
      >
        <div className="flex justify-between items-end mb-4 border-b border-border pb-4">
          <h3 className="font-serif text-xl md:text-2xl text-muted-foreground">
            Frekuensi Tembakan Meriam per Hari
          </h3>
          <span className="font-sans text-[10px] uppercase tracking-widest text-muted-foreground">
            April — Mei 1453
          </span>
        </div>

        <div className="h-[300px] w-full mb-8">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={timelineData} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
              <XAxis
                dataKey="date"
                stroke="#6B6B6B"
                tick={{ fill: "#6B6B6B", fontSize: 10, fontFamily: "Inter" }}
                tickLine={false}
                axisLine={{ strokeWidth: 1 }}
                interval={0}
              />
              <Tooltip cursor={{ fill: "#F5F5F5", opacity: 0.5 }} content={<TimelineTooltip />} />
              <Bar dataKey="intensity" radius={[2, 2, 0, 0]}>
                {timelineData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.intensity > 300 ? "#8B0000" : "#0A0A0A"}
                    fillOpacity={entry.intensity > 300 ? 1 : 0.6 + entry.intensity / 500}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {timelineData
            .filter((d) => [1, 17, 32, 54].includes(d.day))
            .map((event, i) => (
              <div key={i} className="border-t border-border pt-4">
                <span className="font-serif text-xl text-[#8B0000]">{event.date}</span>
                <h4 className="font-sans font-semibold text-sm mt-1 mb-2">{event.title}</h4>
                <p className="font-sans text-xs text-muted-foreground leading-relaxed">{event.desc}</p>
              </div>
            ))}
        </div>

        <SourceNote
          sources="Buku harian Nicolò Barbaro (saksi mata Venesia); Kronik Sphrantzes; Doukas, Historia Turco-Byzantina."
          note="Frekuensi tembakan harian adalah perkiraan berdasarkan catatan Barbaro; angka pasti tidak tercatat secara sistematis."
        />
      </motion.div>
    </section>
  );
}

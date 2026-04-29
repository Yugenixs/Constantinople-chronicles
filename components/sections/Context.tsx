"use client";

import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  CartesianGrid,
  LineChart,
  Line,
} from "recharts";
import { SectionNumber } from "@/components/SectionNumber";
import { SourceNote } from "@/components/ui/SourceNote";
import { areaData, populationData } from "@/data/historical";

const CustomTooltip = ({ active, payload, label, unit }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background border border-border p-3 shadow-none">
        <p className="font-serif text-lg mb-1">{label}</p>
        <p className="font-sans text-sm text-foreground">
          {payload[0].value.toLocaleString()} {unit}
        </p>
        {payload[0].payload.label && (
          <p className="font-sans text-xs text-muted-foreground mt-2 italic">
            {payload[0].payload.label}
          </p>
        )}
      </div>
    );
  }
  return null;
};

export function Context() {
  return (
    <section className="py-32 md:py-40 px-6 max-w-[1000px] mx-auto">
      <SectionNumber number="I" title="Kemunduran Selama 9 Abad" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="mb-24 max-w-[720px]"
      >
        <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight mb-8">
          Menyusut Menjadi Sebuah Kota
        </h2>
        <p className="font-sans text-lg leading-[1.8] text-foreground/90">
          Kekaisaran Romawi Timur yang pada masa Yustinianus I (abad ke-6) menguasai hampir seluruh basin Mediterania, secara perlahan tergerus oleh invasi Arab, kekacauan internal, kekalahan di Manzikert, dan pukulan fatal Perang Salib Keempat. Pada 1453, &ldquo;kekaisaran&rdquo; itu hanyalah kota Konstantinopel dan beberapa permukiman di sekitarnya.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="mb-32"
      >
        <div className="mb-6 flex flex-col md:flex-row md:justify-between md:items-end gap-4">
          <h3 className="font-serif text-2xl md:text-3xl">
            Penyusutan Wilayah Bizantium (565–1453)
          </h3>
          <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
            Area dalam km²
          </p>
        </div>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={areaData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
              <XAxis
                dataKey="year"
                stroke="#6B6B6B"
                tick={{ fill: "#6B6B6B", fontSize: 12, fontFamily: "Inter" }}
                tickLine={false}
                axisLine={{ strokeWidth: 1 }}
              />
              <YAxis
                stroke="#6B6B6B"
                tick={{ fill: "#6B6B6B", fontSize: 12, fontFamily: "Inter" }}
                tickLine={false}
                axisLine={false}
                tickFormatter={(val) => `${val / 1000000}M`}
                width={40}
                orientation="right"
              />
              <Tooltip content={<CustomTooltip unit="km²" />} />
              <Area
                type="monotone"
                dataKey="area"
                stroke="#0A0A0A"
                strokeWidth={1.5}
                fill="#0A0A0A"
                fillOpacity={0.08}
              />

              <ReferenceLine x={1071} stroke="#6B6B6B" strokeDasharray="3 3" />
              <ReferenceLine x={1204} stroke="#6B6B6B" strokeDasharray="3 3" />
              <ReferenceLine x={1453} stroke="#8B0000" strokeWidth={1.5} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 flex flex-wrap gap-4 text-xs uppercase tracking-widest text-muted-foreground font-sans">
          <div className="flex items-center gap-2">
            <div className="w-4 h-0 border-t border-dashed border-[#6B6B6B]"></div> 1071: Manzikert
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-0 border-t border-dashed border-[#6B6B6B]"></div> 1204: Penjarahan Salib IV
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-0 border-t-2 border-[#8B0000]"></div> 1453: Kejatuhan
          </div>
        </div>
        <SourceNote
          sources="Treadgold, A History of the Byzantine State and Society (1997); Haldon, The Palgrave Atlas of Byzantine History (2005)."
          note="Estimasi luas wilayah pada tahun-tahun kunci; rentang ketidakpastian ±15% untuk periode sebelum tahun 1000."
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mb-6 flex flex-col md:flex-row md:justify-between md:items-end gap-4">
          <h3 className="font-serif text-2xl md:text-3xl">
            Populasi Konstantinopel (330–1453)
          </h3>
          <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
            Jumlah Jiwa
          </p>
        </div>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={populationData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F5F5F5" vertical={false} />
              <XAxis
                dataKey="year"
                stroke="#6B6B6B"
                tick={{ fill: "#6B6B6B", fontSize: 12, fontFamily: "Inter" }}
                tickLine={false}
                axisLine={{ strokeWidth: 1 }}
              />
              <YAxis
                stroke="#6B6B6B"
                tick={{ fill: "#6B6B6B", fontSize: 12, fontFamily: "Inter" }}
                tickLine={false}
                axisLine={false}
                tickFormatter={(val) => `${val / 1000}k`}
                width={40}
                orientation="right"
              />
              <Tooltip content={<CustomTooltip unit="jiwa" />} />
              <Line
                type="monotone"
                dataKey="pop"
                stroke="#0A0A0A"
                strokeWidth={1.5}
                dot={{ r: 3, fill: "#FFFFFF", stroke: "#0A0A0A", strokeWidth: 1.5 }}
                activeDot={{ r: 5, fill: "#0A0A0A" }}
              />

              <ReferenceLine x={1347} stroke="#6B6B6B" strokeDasharray="3 3" />
              <ReferenceLine x={1453} stroke="#8B0000" strokeWidth={1.5} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 flex flex-wrap gap-4 text-xs uppercase tracking-widest text-muted-foreground font-sans">
          <div className="flex items-center gap-2">
            <div className="w-4 h-0 border-t border-dashed border-[#6B6B6B]"></div> 1347: Wabah Hitam
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-0 border-t-2 border-[#8B0000]"></div> 1453: Kejatuhan
          </div>
        </div>
        <SourceNote
          sources='Mango, "The Development of Constantinople as an Urban Centre" (1985); Magdalino, Constantinople Médiévale (1996).'
          note="Perkiraan populasi berdasarkan luas kota berpenghuni dan kepadatan; estimasi modern bervariasi hingga ±30%."
        />
      </motion.div>
    </section>
  );
}

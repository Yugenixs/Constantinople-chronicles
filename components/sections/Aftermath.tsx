"use client";

import { motion } from "framer-motion";
import { SourceNote } from "@/components/ui/SourceNote";

export function Aftermath() {
  return (
    <section className="bg-background text-foreground py-32 md:py-40 px-6 max-w-[1200px] mx-auto overflow-hidden">
      <div className="max-w-[720px] mx-auto mb-24">
        <span className="font-sans text-xs uppercase tracking-widest text-muted-foreground border-b border-border pb-2 mb-8 inline-block">
          Setelah Tembok Runtuh
        </span>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight mb-8"
        >
          Gelombang Kejut Global
        </motion.h2>
        <p className="font-sans text-lg leading-[1.8] text-foreground/90">
          Jatuhnya Konstantinopel bukan hanya akhir Romawi Timur. Ia mengubah orientasi perdagangan Eropa dan memicu eksodus intelektual yang melahirkan Renaissance.
        </p>
      </div>

      <div className="flex flex-col gap-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <h3 className="font-serif text-2xl md:text-3xl mb-2">Pergeseran Jalur Perdagangan</h3>
          <p className="font-sans text-sm text-muted-foreground mb-8">
            Eropa dipaksa mencari rute alternatif ke Asia.
          </p>

          <div className="w-full aspect-[21/9] bg-muted/10 border border-border relative">
            <svg
              viewBox="0 0 1200 500"
              className="w-full h-full opacity-80"
              preserveAspectRatio="xMidYMid slice"
            >
              <path d="M0,0 L600,0 L600,200 L400,250 L200,400 L0,500 Z" fill="#F5F5F5" />
              <path d="M700,0 L1200,0 L1200,500 L800,500 L650,250 Z" fill="#F5F5F5" />
              <path d="M200,450 L400,300 L600,450 L650,500 L200,500 Z" fill="#F5F5F5" />

              <text x="300" y="100" className="font-serif italic text-lg fill-[#A3A3A3]">
                Eropa
              </text>
              <text x="900" y="150" className="font-serif italic text-lg fill-[#A3A3A3]">
                Asia
              </text>
              <text x="500" y="400" className="font-serif italic text-lg fill-[#A3A3A3]">
                Afrika
              </text>

              <circle cx="650" cy="200" r="4" fill="#0A0A0A" />
              <text
                x="650"
                y="185"
                textAnchor="middle"
                className="font-sans text-[10px] uppercase tracking-widest fill-[#0A0A0A]"
              >
                Konstantinopel
              </text>

              <path
                d="M250,150 Q450,180 650,200 T1100,200"
                fill="none"
                stroke="#6B6B6B"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
              <text
                x="450"
                y="170"
                className="font-sans text-[9px] uppercase tracking-widest fill-[#6B6B6B]"
              >
                Jalur Lama (Sutra)
              </text>

              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 3, ease: "easeInOut", delay: 0.5 }}
                d="M200,180 Q100,300 300,480 Q500,500 700,400 Q800,350 1100,350"
                fill="none"
                stroke="#0A0A0A"
                strokeWidth="2"
              />
              <motion.text
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 3.5 }}
                x="300"
                y="490"
                className="font-sans text-[9px] uppercase tracking-widest fill-[#0A0A0A]"
              >
                1498 Vasco da Gama (Timur)
              </motion.text>

              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 3, ease: "easeInOut", delay: 1 }}
                d="M150,180 Q80,250 20,260"
                fill="none"
                stroke="#0A0A0A"
                strokeWidth="2"
              />
              <motion.text
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 4 }}
                x="30"
                y="250"
                className="font-sans text-[9px] uppercase tracking-widest fill-[#0A0A0A]"
              >
                1492 Columbus (Barat)
              </motion.text>
            </svg>
          </div>
          <SourceNote
            sources="Inalcik, The Ottoman Empire: The Classical Age 1300–1600 (1973); Findlay & O'Rourke, Power and Plenty (2007)."
            note="Pergeseran jalur perdagangan adalah proses bertahap selama 1453–1500-an; tahun penemuan jalur baru ditandai sebagai titik kunci."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <h3 className="font-serif text-2xl md:text-3xl mb-2">Migrasi Cendekiawan Yunani</h3>
          <p className="font-sans text-sm text-muted-foreground mb-8">
            Membawa ~3.500 manuskrip kuno, memicu Renaissance di Italia.
          </p>

          <div className="w-full aspect-[21/9] bg-muted/10 border border-border relative">
            <svg
              viewBox="0 0 1200 500"
              className="w-full h-full opacity-80"
              preserveAspectRatio="xMidYMid slice"
            >
              <path d="M400,0 L600,0 L700,200 L600,400 L400,300 L200,100 Z" fill="#F5F5F5" />
              <path d="M800,100 L1200,100 L1200,500 L900,400 L750,200 Z" fill="#F5F5F5" />

              <circle cx="850" cy="250" r="5" fill="#0A0A0A" />
              <text
                x="850"
                y="270"
                textAnchor="middle"
                className="font-sans text-[10px] uppercase tracking-widest fill-[#0A0A0A]"
              >
                Konstantinopel
              </text>

              <circle cx="550" cy="150" r="3" fill="#6B6B6B" />
              <text
                x="540"
                y="145"
                textAnchor="end"
                className="font-serif italic text-sm fill-[#6B6B6B]"
              >
                Venesia
              </text>

              <circle cx="450" cy="200" r="3" fill="#6B6B6B" />
              <text
                x="440"
                y="195"
                textAnchor="end"
                className="font-serif italic text-sm fill-[#6B6B6B]"
              >
                Florence
              </text>

              <circle cx="500" cy="250" r="3" fill="#6B6B6B" />
              <text
                x="490"
                y="245"
                textAnchor="end"
                className="font-serif italic text-sm fill-[#6B6B6B]"
              >
                Roma
              </text>

              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
                d="M840,240 Q700,200 560,150"
                fill="none"
                stroke="#8B0000"
                strokeWidth="1.5"
              />
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 2, ease: "easeOut", delay: 0.7 }}
                d="M840,245 Q650,220 460,200"
                fill="none"
                stroke="#8B0000"
                strokeWidth="1.5"
              />
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 2, ease: "easeOut", delay: 0.9 }}
                d="M840,250 Q650,260 510,250"
                fill="none"
                stroke="#8B0000"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <SourceNote
            sources="Geanakoplos, Greek Scholars in Venice (1962); Wilson, From Byzantium to Italy (1992)."
            note="Estimasi 3.500 manuskrip mencakup koleksi Bessarion (482 manuskrip ke Venesia, 1468) dan akumulasi pribadi cendekiawan lainnya."
          />
        </motion.div>
      </div>
    </section>
  );
                }
                                                          

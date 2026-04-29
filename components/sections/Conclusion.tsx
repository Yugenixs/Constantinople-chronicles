"use client";

import { motion } from "framer-motion";
import { SectionNumber } from "@/components/SectionNumber";

const points = [
  { 
    num: "I", title: "Penyusutan Wilayah", desc: "Kehilangan Anatolia dan Balkan menghapus basis pajak, logistik, dan rekrutmen militer." 
  },
  { 
    num: "II", title: "Erosi Kedaulatan Ekonomi", desc: "Dominasi dagang oleh Venesia dan Genoa membuat negara kehilangan kontrol atas pemasukan utama." 
  },
  { 
    num: "III", title: "Kerapuhan Militer", desc: "Jumlah pasukan terbatas dan tanpa cadangan besar, sehingga pertahanan tidak mampu menahan tekanan jangka panjang." 
  },
  { 
    num: "IV", title: "Isolasi Politik dan Religius", desc: "Konflik Ortodoks–Katolik dan prioritas Barat membuat bantuan eksternal sangat minim." 
  },
  { 
    num: "V", title: "Disrupsi Teknologi Artileri", desc: "Meriam Utsmani merusak Tembok Theodosian dan menghilangkan keunggulan pertahanan klasik." 
  },
  { 
    num: "VI", title: "Eksekusi Strategis Mehmed II", desc: "Pengepungan terintegrasi yang memutus suplai, menekan terus-menerus, dan menutup semua opsi bertahan." 
  }
]
export function Conclusion() {
  return (
    <section className="bg-background text-foreground py-32 md:py-40 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="max-w-[720px] mx-auto mb-24">
          <SectionNumber number="VIII" title="Konklusi" />
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight"
          >
            Mengapa Konstantinopel Jatuh?
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 max-w-[1000px] mx-auto mb-32 border-t border-border pt-16">
          {points.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-4"
            >
              <span className="font-serif text-2xl text-muted-foreground">{p.num}.</span>
              <h3 className="font-sans font-semibold text-lg">{p.title}</h3>
              <p className="font-sans text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[720px] mx-auto text-center border-t border-border pt-24"
        >
          <p className="font-sans text-lg md:text-xl leading-[1.8] text-foreground/90 mb-24 text-left md:text-center">
            Walaupun bukan penyebab utama, kejatuhan Konstantinopel pada 1453 merupakan faktor penting yang mempercepat perubahan di Eropa, baik dalam bidang intelektual maupun ekonomi. Perpindahan cendekiawan Bizantium ke Italia memperkaya perkembangan Renaissance yang telah muncul sebelumnya, sementara dominasi Kesultanan Utsmaniyah atas jalur perdagangan mendorong pencarian rute alternatif yang berkontribusi pada eksplorasi oleh Christopher Columbus dan Vasco da Gama. Dengan demikian, peristiwa ini lebih tepat dipahami sebagai katalis yang mempercepat transformasi yang telah berlangsung, bukan sebagai titik awalnya.
          </p>

          <footer className="font-sans text-xs uppercase tracking-widest text-muted-foreground/60">
            Developed by Ilyas Tio Afrilian (Yugenix)
          </footer>
        </motion.div>
      </div>
    </section>
  );
}

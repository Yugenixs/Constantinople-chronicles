"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden px-6">
      
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900 to-black opacity-90" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
        className="text-center z-10"
      >
        <span className="block font-sans text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
          29 MEI 1453
        </span>

        <h1 className="font-serif text-5xl md:text-8xl lg:text-[9rem] leading-[0.95] tracking-tight mb-8">
          Kejatuhan
          <br />
          <span className="text-red-500/90">Konstantinopel</span>
        </h1>

        <p className="font-sans text-lg md:text-xl text-muted-foreground max-w-lg mx-auto leading-relaxed">
          Runtuhnya benteng terakhir Romawi Timur, dan pergeseran pusat kekuasaan global.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 w-full flex flex-col items-center gap-6 z-10"
      >
        <div className="flex flex-col items-center gap-4">
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground/60">
            Scroll
          </span>

          <div className="relative w-px h-12 bg-muted-foreground/30 overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-full h-1/2 bg-muted-foreground"
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: "200%", opacity: [0, 1, 0] }}
              transition={{
                duration: 1.2,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
          </div>
        </div>

        <div className="w-full flex flex-wrap justify-center gap-4 text-[10px] uppercase tracking-widest text-muted-foreground/60 border-t border-border pt-4 px-6 md:px-12 text-center">
          <span className="text-white/90">53 hari</span>
          <span>·</span>
          <span className="text-white/90">80.000 prajurit</span>
          <span>·</span>
          <span>1 kota</span>
          <span>·</span>
          <span className="text-white/90">1.123 tahun</span>
        </div>
      </motion.div>
    </section>
  );
}
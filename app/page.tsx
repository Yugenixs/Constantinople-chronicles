import { Hero } from "@/components/sections/Hero";
import { Context } from "@/components/sections/Context";
import { Forces } from "@/components/sections/Forces";
import { Walls } from "@/components/sections/Walls";
import { Timeline } from "@/components/sections/Timeline";
import { MapSection } from "@/components/sections/MapSection";
import { Cannon } from "@/components/sections/Cannon";
import { TurningPoint } from "@/components/sections/TurningPoint";
import { Collapse } from "@/components/sections/Collapse";
import { Aftermath } from "@/components/sections/Aftermath";
import { Conclusion } from "@/components/sections/Conclusion";

export default function Page() {
  return (
    <main className="bg-background text-foreground antialiased font-sans overflow-x-hidden">
      <Hero />
      <Context />
      <Forces />
      <Walls />
      <Timeline />
      <MapSection />
      <Cannon />
      <TurningPoint />
      <Collapse />
      <Aftermath />
      <Conclusion />
    </main>
  );
}

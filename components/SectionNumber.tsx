"use client";

export function SectionNumber({ number, title }: { number: string; title?: string }) {
  return (
    <div className="flex items-baseline gap-4 mb-12">
      <span className="font-serif text-3xl text-muted-foreground">{number}.</span>
      {title && (
        <span className="font-sans text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {title}
        </span>
      )}
    </div>
  );
}

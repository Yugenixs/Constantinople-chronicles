interface SourceNoteProps {
  sources: string;
  note: string;
  theme?: "light" | "dark";
}

export function SourceNote({ sources, note, theme = "light" }: SourceNoteProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={`mt-6 pt-4 border-t w-full max-w-full ${
        isDark ? "border-white/10" : "border-[#E5E5E5]"
      }`}
    >
      <div
        className={`font-sans text-[11px] leading-[1.6] ${
          isDark ? "text-[#888888]" : "text-[#6B6B6B]"
        }`}
      >
        <p className="mb-1">
          <span className="font-serif italic mr-1">Sumber:</span>
          {sources}
        </p>
        <p>
          <span className="font-serif italic mr-1">Catatan:</span>
          {note}
        </p>
      </div>
    </div>
  );
        }

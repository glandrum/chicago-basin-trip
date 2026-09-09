interface Stat {
  value: string;
  label: string;
}

interface StatBlockProps {
  stats: Stat[];
}

export function StatBlock({ stats }: StatBlockProps) {
  return (
    <div className="grid grid-cols-3 gap-x-4 border-t-2 border-mt-400 pt-3">
      {stats.map((s, i) => (
        <div key={i}>
          <b className="block font-cond text-[clamp(24px,6vw,32px)] font-semibold leading-none whitespace-nowrap text-rail-light">
            {s.value}
          </b>
          <span className="text-[12px] text-mt-300 mt-1 block leading-[1.3]">{s.label}</span>
        </div>
      ))}
    </div>
  );
}

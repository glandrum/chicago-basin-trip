import type { ReactNode } from 'react';

export interface TimetableEntry {
  time: string;
  timeLabel?: string;
  content: ReactNode;
  rail?: boolean;
}

interface TimetableProps {
  entries: TimetableEntry[];
}

export function Timetable({ entries }: TimetableProps) {
  return (
    <dl className="border-t-2 border-mt-400 m-0">
      {entries.map((entry, i) => (
        <div
          key={i}
          className="tt-row"
          style={entry.rail ? { borderLeftColor: '#D4933A' } : undefined}
        >
          <dt
            className="font-cond text-[20px] font-semibold leading-[1.1] pt-[2px]"
            style={{ color: entry.rail ? '#D4933A' : '#E6EDE8' }}
          >
            {entry.time}
            {entry.timeLabel && (
              <small className="block text-[12px] font-medium text-contour font-sans">
                {entry.timeLabel}
              </small>
            )}
          </dt>
          <dd className="m-0 text-mt-100">{entry.content}</dd>
        </div>
      ))}
    </dl>
  );
}

import { Timetable } from '../ui/Timetable';
import { Figure } from '../ui/Figure';
import { StatBlock } from '../ui/StatBlock';

const WC = 'https://commons.wikimedia.org/wiki/Special:FilePath';

export function EolusSection() {
  return (
    <section className="day-section" id="eolus-day" data-section="eolus-day">
      <div className="wrap">
        <div className="grid gap-[18px] items-end mb-[clamp(20px,3vw,40px)]">
          <div>
            <div className="kicker">Optional third day · Eolus</div>
            <h2 className="text-[clamp(28px,5.5vw,52px)] font-cond font-semibold text-mt-50">
              Eolus and the Catwalk
            </h2>
            <p className="text-[clamp(16px,1.8vw,18px)] text-mt-200 mt-3 max-w-[52ch]">
              The third 14er sits across the basin on the west side of Twin Lakes. It needs its own
              summit day and a third night, which turns Sunday into a climb, Monday into the
              walk-out, and Tuesday morning into the flight home.
            </p>
          </div>
          <StatBlock stats={[
            { value: '~5 mi', label: 'camp to camp' },
            { value: '+3,000\'', label: 'total gain' },
            { value: 'Class 3', label: 'exposed ridge crest' },
          ]} />
        </div>

        <div className="cols">
          <div>
            <Timetable entries={[
              { time: '5:00a', content: "Same start. Twin Lakes, then follow cairns northwest up a ramp system and slabs toward the Eolus–North Eolus saddle at ~13,850'. Easy to lose in fog; the cairns matter." },
              { time: '7:45a', content: "North Eolus, 14,039', is a 10-minute Class 2+ scramble from the saddle. Not an official ranked 14er, worth it anyway." },
              { time: '8:00a', content: <><b>The Catwalk.</b> A ridge crest two to three feet wide for about a hundred yards, big drops both sides. Walking, technically, but not casual walking. Not a place for wind or ice.</> },
              { time: '8:45a', content: <><b>Mt. Eolus, 14,083'.</b> From the end of the Catwalk, cairned ledges and short Class 3 steps angle up and left. If it feels harder than Class 3, back up and find the cairn.</> },
              { time: 'Noon', content: 'Back at camp. Monday: hike out for the afternoon train. Tuesday: first flight home.' },
            ]} />
          </div>
          <div>
            <Figure
              src={`${WC}/The_ridge_from_N._Eolus_over_to_Eolus.jpg?width=1000`}
              alt="The narrow rocky ridge connecting North Eolus to Mount Eolus"
              caption="The ridge from North Eolus toward Eolus. The Catwalk is the narrowest part of it."
              credit="Photo: Wikimedia Commons (CC BY)"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

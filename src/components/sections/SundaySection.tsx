import { Note } from '../ui/Note';
import { Timetable } from '../ui/Timetable';
import { Figure } from '../ui/Figure';
import { StatBlock } from '../ui/StatBlock';
import { useEolus } from '../../context/EolusContext';

const WC = 'https://commons.wikimedia.org/wiki/Special:FilePath';

export function SundaySection(_: Record<string, never>) {
  const { withEolus, setWithEolus } = useEolus();
  const handleToggle = () => setWithEolus(!withEolus);
  const outDay   = withEolus ? 'Monday'  : 'Sunday';
  const townDay  = withEolus ? 'Tuesday' : 'Monday';

  return (
    <section className="day-section" id="sun" data-section="sun">
      <div className="wrap">

        {/* ── Header ── */}
        <div className="grid gap-[18px] items-end mb-[clamp(20px,3vw,40px)]">
          <div>
            <div className="kicker">
              {outDay} · <span className="pto-badge" style={{ background: '#8B6020' }}>Train day out</span>
            </div>
            <h2 className="text-[clamp(28px,5.5vw,52px)] font-cond font-semibold text-mt-50">
              Walk down, flag the train, spend a day in town
            </h2>
            <p className="text-[clamp(16px,1.8vw,18px)] text-mt-200 mt-3 max-w-[52ch]">
              The descent takes longer than tired legs want it to. The only unforgiving moment is
              the afternoon train — miss it and you spend another night on the platform. Once
              you're back in Durango, you have {townDay} to yourself before the evening flight home.
            </p>
          </div>
          <StatBlock stats={[
            { value: '6 mi', label: `${outDay} descent` },
            { value: '−2,900\'', label: 'to Needleton' },
            { value: '~8:00p', label: `${townDay} evening flight` },
          ]} />
        </div>

        {/* ── Two-column ── */}
        <div className="cols">
          <div>
            {/* Sunday timetable */}
            <Timetable entries={[
              {
                time: '6:00a',
                content: "Up, coffee, pack. Wipe down the tent; pee on rocks away from camp so the goats don't dig up the meadow after you leave.",
              },
              {
                time: '8:00a',
                content: 'Leave camp. 2.5 to 3.5 hours down. Start early — there is nothing to gain from lingering and the train waits for no one.',
              },
              {
                time: '11:30a',
                content: 'Needleton. Lunch on the platform, feet in the Animas, and stand where the engineer can see you. Be there at least 30 minutes early.',
              },
              {
                time: '3:30p',
                timeLabel: '±',
                rail: true,
                content: (
                  <><b>Flag the southbound.</b> It's the same train coming down from Silverton, running all day. Pack into the baggage car, find a seat, watch the gorge unwind in the other direction.</>
                ),
              },
              {
                time: '6:00p',
                rail: true,
                content: 'Durango depot. Shower, dinner, and a real bed. The heavy work is done.',
              },
            ]} />

            {/* Monday Durango day */}
            <div className="mt-6">
              <h3 className="sub-heading" style={{ marginTop: 0 }}>
                {townDay} · A day in Durango
              </h3>
              <Timetable entries={[
                {
                  time: '8:00a',
                  content: (
                    <>
                      Sleep in. Actual breakfast at a table — <b>Carver Brewing</b> (1022 Main)
                      opens at 6:30 a.m. and does the best breakfast burrito in the San Juans.
                      Real coffee. No camp stove.
                    </>
                  ),
                },
                {
                  time: '9:30a',
                  content: (
                    <>
                      <b>Trimble Hot Springs</b>, 6 miles north on US-550. Three outdoor thermal
                      pools at 104–108°F, mountain views over the Animas Valley, and nobody in a
                      hurry. $18–22 day use, no reservation needed on weekdays. Bring the clothes
                      you wore out of the wilderness — you will want to shower before you soak,
                      and the locker room has hot water. This is what your legs need after
                      descending 2,900 feet on tired ankles.
                    </>
                  ),
                },
                {
                  time: '11:30a',
                  content: (
                    <>
                      Back downtown. Walk through the <b>D&amp;SNG depot complex</b> — the 1882
                      roundhouse behind the station is still fully operational, with K-36 and K-28
                      locomotives in various states of service. This is the only place in North
                      America where you can watch century-old steam engines being maintained as
                      daily working equipment. No admission needed to see the yard through the fence;
                      ask at the ticket counter about roundhouse tours if they're running.
                    </>
                  ),
                },
                {
                  time: '1:00p',
                  content: (
                    <>
                      Lunch. <b>Steamworks Brewing</b> (801 E 2nd Ave) handles the combination of
                      good food and the fact that you haven't been clean in four days without
                      judgment. Or walk Main Ave and find whatever looks right — the historic
                      district has enough restaurants that you won't need a reservation for lunch
                      on a weekday.
                    </>
                  ),
                },
                {
                  time: '3:00p',
                  content: (
                    <>
                      Optional: the <b>Animas River Trail</b> runs 7 paved miles from downtown
                      through Oxbow Park and back — flat, river alongside, no elevation change.
                      Easy on the legs, good way to see the town from the water side. Or walk Main
                      Ave: the gear shops (Backcountry Experience, Pine Needle Mountaineering)
                      are worth browsing for what you'd do differently next time.
                    </>
                  ),
                },
                {
                  time: '5:30p',
                  content: 'Return rental car if you have one — the airport is 14 miles southeast, allow extra time. Check in, get through security. DRO is a small airport; 45 minutes before departure is enough.',
                },
                {
                  time: '~8:00p',
                  rail: true,
                  content: (
                    <>
                      <b>Evening nonstop to DFW.</b> The last American departure runs around
                      8–9 p.m. depending on the season; confirm the exact schedule when you
                      book the outbound. You land around 10:30–11:00 p.m. in Dallas —
                      late enough that traffic is gone, early enough that it's still {townDay}.
                    </>
                  ),
                },
              ]} />
            </div>

            <Note title="Why the evening flight is the right call" variant="water">
              The train reaches Durango around 6 p.m. An 8:20 a.m. departure the next morning
              means waking at 5:30 a.m. in the same clothes, half-recovered, sprinting to an
              airport that has nothing to offer at that hour. The evening flight gives you the
              hot springs, a real meal, the roundhouse, and the unhurried version of the whole
              trip. You land home late on {townDay} instead of midday — the difference is one
              night's sleep, not one day's work.
            </Note>
          </div>

          <div>
            <div className="reel two">
              <Figure
                src={`${WC}/Durango_and_Silverton_NGRR_May_2024-m1.jpg?width=1000`}
                alt="The Durango & Silverton train in the Animas canyon, seen from trackside"
                caption="The southbound comes down the gorge mid-afternoon. Stand on the platform where the engineer can see you — it will not stop for someone still tying a boot."
                credit="Photo: Wikimedia Commons"
              />
              <Figure
                src={`${WC}/Blue_Winter_Skies_Hug_the_Durango_Skyline.JPG?width=1000`}
                alt="Downtown Durango's historic buildings under a blue sky"
                caption="Durango on a clear afternoon. The hot springs are 6 miles up US-550; the roundhouse is behind the depot at the south end of Main. You have the whole day."
                credit="Photo: Wikimedia Commons (CC BY-SA)"
              />
            </div>
            <p className="text-[12.5px] text-mt-400 mt-2 md:hidden">Swipe for more</p>
          </div>
        </div>

        {/* ── Eolus toggle ── */}
        <div className="toggle-wrap">
          <label
            htmlFor="eolus-toggle"
            className="font-cond text-[18px] font-semibold cursor-pointer flex items-center gap-3"
            style={{ minHeight: '44px' }}
          >
            <input
              id="eolus-toggle"
              type="checkbox"
              checked={withEolus}
              onChange={handleToggle}
              className="sr-only"
            />
            <span className={`switch-track${withEolus ? ' on' : ''}`} aria-hidden="true" />
            Add a third night and climb Eolus
          </label>
          <span className="text-[14px] text-mt-300 md:ml-auto w-full md:w-auto">
            Adds Sunday as a third summit day, Monday as the walk-out, Tuesday in Durango, Tuesday evening flight home.
          </span>
        </div>
      </div>
    </section>
  );
}

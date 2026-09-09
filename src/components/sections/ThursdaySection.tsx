import { Note } from '../ui/Note';
import { Timetable } from '../ui/Timetable';
import { Figure } from '../ui/Figure';
import { StatBlock } from '../ui/StatBlock';

const WC = 'https://commons.wikimedia.org/wiki/Special:FilePath';

export function ThursdaySection() {
  return (
    <section className="day-section" id="thu" data-section="thu">
      <div className="wrap">

        {/* ── Header ── */}
        <div className="grid gap-[18px] items-end mb-[clamp(20px,3vw,40px)]">
          <div>
            <div className="kicker">Thursday evening</div>
            <h2 className="text-[clamp(28px,5.5vw,52px)] font-cond font-semibold text-mt-50">
              Leave work, land in the mountains
            </h2>
            <p className="text-[clamp(16px,1.8vw,18px)] text-mt-200 mt-3 max-w-[52ch]">
              The whole trip hangs on one logistics fact: you cannot fly into Durango and catch
              the train the same morning. The earliest DFW nonstop lands at 9:46 a.m.;
              the Needleton trains have already left. So the flight goes Thursday evening,
              and you sleep at 6,500 feet before jumping to 11,000.
            </p>
          </div>
          <StatBlock stats={[
            { value: '2h 10m', label: 'DFW → DRO nonstop' },
            { value: '6,512\'', label: 'Durango elevation' },
            { value: '1880', label: 'Durango founded' },
          ]} />
        </div>

        {/* ── Wide hero photo ── */}
        <Figure
          src={`${WC}/Historic_Main_in_Downtown_Durango.JPG?width=1600`}
          sizes="(min-width:1140px) 1140px, 100vw"
          alt="Main Avenue in downtown Durango, brick storefronts under a mountain sky"
          caption="Main Avenue's twelve blocks of Victorian brick are a National Historic Landmark. The depot anchors the south end; the hotels, gear shops, and restaurants are a ten-minute walk north. The buildings date from 1880–1895, the same silver-boom decade that built the railroad."
          credit="Photo: Wikimedia Commons"
          aspectRatio="16/10"
        />

        {/* ── Durango history band ── */}
        <div
          className="my-8 p-5 border border-mt-600"
          style={{ background: '#0F1C26' }}
        >
          <h3 className="sub-heading" style={{ marginTop: 0 }}>Durango: built by a railroad, saved by one</h3>
          <div className="three mt-4">
            <div>
              <h4 className="font-cond text-[18px] font-semibold text-rail mb-2">Founded 1880</h4>
              <p className="text-mt-200 text-[15px]">
                Durango does not exist by accident. The Denver &amp; Rio Grande Railroad platted the
                town in September 1880 on a river bench at the confluence of Lightner Creek and the
                Animas, specifically to serve as the smelting and supply hub for the silver mines
                forty miles north in Silverton. Within a year it had 2,000 residents, four hotels,
                and a newspaper. The Victorian commercial blocks you see on Main Avenue today were
                built almost entirely between 1880 and 1895, during the height of the silver boom.
              </p>
            </div>
            <div>
              <h4 className="font-cond text-[18px] font-semibold text-rail mb-2">The Narrow Gauge, 1882</h4>
              <p className="text-mt-200 text-[15px]">
                The D&amp;RG pushed 45 miles of three-foot-gauge track north to Silverton in 1882,
                through canyon terrain so sheer that no wagon road could follow. The High
                Line — a shelf blasted from solid granite 400 feet above the Animas — cost
                what the railroad called "the most expensive mile ever built." At the peak of
                silver production in the late 1880s, ore trains ran daily. When silver prices
                collapsed in 1893, the narrow gauge had already woven itself into the landscape
                too deeply to pull out. It carried freight, passengers, and eventually Hollywood
                film crews (Butch Cassidy, Around the World in 80 Days), emerging as a tourist
                railroad by the 1950s. It has run continuously ever since.
              </p>
            </div>
            <div>
              <h4 className="font-cond text-[18px] font-semibold text-rail mb-2">What it is today</h4>
              <p className="text-mt-200 text-[15px]">
                The Durango &amp; Silverton Narrow Gauge Railroad is a National Historic Landmark.
                The K-36 locomotives — the ones that pull your train — were built by Baldwin
                Locomotive Works in Philadelphia in 1925, burning bituminous coal in fireboxes
                designed for mountain grades. The roundhouse and repair shops behind the Durango
                depot are still fully operational, restoring and maintaining equipment that is now
                a century old. There are fewer than a dozen coal-fired steam railroads still
                running in North America; this is one of the finest. Ride in the open gondola
                if the weather allows — the cinders in your hair are part of the deal.
              </p>
            </div>
          </div>
        </div>

        {/* ── Two-column: timetable + photos/notes ── */}
        <div className="cols">
          <div>
            <Timetable entries={[
              {
                time: '5:00p',
                content: 'Out of the office. Bag is already packed except the fuel canister. Poles, stove, and everything sharp go in the checked pack.',
              },
              {
                time: '7:00p',
                timeLabel: '±',
                content: (
                  <>
                    American nonstop from Terminal E, a CRJ. Take the earliest evening departure
                    your calendar allows; the 9:00 p.m. is the last one, and a cancelled final
                    flight means a missed, non-refundable, sold-out train.
                  </>
                ),
              },
              {
                time: '8:30p',
                content: (
                  <>
                    Land DRO. The airport sits 14 miles southeast of downtown on US-160 — about
                    15 minutes. Rental car or shuttle. <b>If the Walmart on US-160 is still open,
                    buy the isobutane canister tonight</b>; the gear shops open at 8 a.m.,
                    which is tight against an 8:30 train.
                  </>
                ),
              },
              {
                time: '9:15p',
                content: (
                  <>
                    Hotel on or near Main Ave so you can walk to the depot in the morning. The
                    <b> Strater Hotel</b> (1887) is two blocks from the depot — Henry Strater
                    built it the same year the silver boom peaked; Louis L'Amour wrote westerns
                    in room 222 above the Diamond Belle Saloon piano. The{' '}
                    <b>General Palmer</b> next door is quieter and dates to 1898. Either one puts
                    the depot at a seven-minute walk. Confirm late check-in when you book.
                  </>
                ),
              },
              {
                time: '10:00p',
                content: (
                  <>
                    A full liter of water, a big glass more, then sleep. From 430 feet in Dallas
                    to 6,512 feet in one flight is manageable; the jump to 11,000 feet tomorrow
                    is not. Tonight's sleep at altitude is the only preparation you get.
                  </>
                ),
              },
            ]} />

            <Note title="Flight logistics" variant="water">
              36 weekly American nonstops run DFW–DRO between 8:20 a.m. and 9:00 p.m. None of
              the morning departures beat the Needleton train. A Thursday-evening arrival gives
              you a real bed at altitude before the big day, and keeps all of Friday free for
              the train and the hike in. Book trip insurance that covers the train fare — a
              weather-cancelled regional jet is the one thing that can unravel the whole trip.
            </Note>
          </div>

          <div>
            <div className="reel two">
              <Figure
                src={`${WC}/Strater_Hotel_-_Durango,_CO.jpg?width=1000`}
                alt="The red-brick Victorian Strater Hotel on Main Avenue in Durango"
                caption="The Strater, 1887. Henry Strater built it the same year Colorado's silver production peaked. Four stories of Romanesque brick; Louis L'Amour lived here off and on for decades."
                credit="Photo: Wikimedia Commons"
              />
              <Figure
                src={`${WC}/Animas_River_just_north_of_downtown_Durango,_CO.jpg?width=1000`}
                alt="The Animas River flowing past cottonwoods just north of downtown Durango"
                caption="The Animas north of Main Ave. 'Río de las Ánimas Perdidas' — River of Lost Souls — named by Spanish explorers in the 1760s. Tomorrow you follow it 30 miles into the mountains."
                credit="Photo: Wikimedia Commons"
              />
            </div>
            <p className="text-[12.5px] text-mt-400 mt-2 md:hidden">Swipe for more</p>

            <Note title="The depot in the morning">
              The D&amp;SNG depot at 479 Main Ave has operated continuously since 1882. The
              building you check into is the original — brick, gingerbread trim, a covered
              platform above the Animas. Arrive by 7:30 a.m. to check the pack into the baggage
              car and find a seat in the open gondola before it fills. The train boards without
              the ceremony of a modern rail terminal; pay attention to the crew.
            </Note>

            <Note title="Fuel, the one thing that can't fly">
              Isobutane canisters are banned on aircraft under any circumstance. Backcountry
              Experience (780 Main) and Pine Needle Mountaineering (835 Main) open around 8 a.m.
              — tight against an 8:30 departure. Walmart on US-160 is open until midnight.
              A pickup order placed from Dallas before you leave removes all the risk.
            </Note>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Note } from '../ui/Note';
import { Timetable } from '../ui/Timetable';
import { Figure } from '../ui/Figure';
import { StatBlock } from '../ui/StatBlock';

const WC = 'https://commons.wikimedia.org/wiki/Special:FilePath';

export function SaturdaySection() {
  return (
    <section className="day-section" id="sat" data-section="sat">
      <div className="wrap">
        <div className="grid gap-[18px] items-end mb-[clamp(20px,3vw,40px)]">
          <div>
            <div className="kicker">Saturday · Summit day</div>
            <h2 className="text-[clamp(28px,5.5vw,52px)] font-cond font-semibold text-mt-50">
              Windom, then Sunlight, then back for lunch
            </h2>
            <p className="text-[clamp(16px,1.8vw,18px)] text-mt-200 mt-3 max-w-[52ch]">
              Both peaks are climbed from Twin Lakes at 12,500'. The trail is excellent to 13,000'
              and then turns into cairned scrambling with no continuous path. Storms build by noon;
              the target is both summits before 11 a.m.
            </p>
          </div>
          <StatBlock stats={[
            { value: '~7 mi', label: 'camp to camp' },
            { value: '+4,000\'', label: 'total gain' },
            { value: 'Class 3', label: 'Class 4 block optional' },
          ]} />
        </div>

        <div className="reel two">
          <Figure
            src={`${WC}/Sunlight_Peak.jpg?width=1000`}
            alt="Sunlight Peak seen across an alpine lake"
            caption="Sunlight Peak from the Twin Lakes side. The South Face route climbs the gully system to the notch, then blocks to the summit."
            credit="Photo: Wikimedia Commons (public domain)"
          />
          <Figure
            src={`${WC}/Sunlight_Peak_from_Windom_Peak.jpg?width=1000`}
            alt="Sunlight Peak seen from the summit of Windom Peak with the connecting basin below"
            caption="Sunlight from the top of Windom. The crossover drops to ~13,300' and traverses Class 2 slabs, not the loose northwest face."
            credit="Photo: Wikimedia Commons (CC BY 2.0)"
          />
        </div>
        <p className="text-[12.5px] text-mt-400 mt-2 md:hidden">Swipe for more</p>

        <div className="cols mt-8">
          <div>
            <Timetable entries={[
              { time: '4:00a', content: 'Alarm. Water, food, summit pack: layers, shell, 2 L, snacks, headlamp, first aid, satellite messenger, sun protection.' },
              { time: '5:00a', content: 'Moving by headlamp. Trail NE up the basin, left at the signed Twin Lakes junction at 11,200\', switchbacks past two stream crossings.' },
              { time: '6:20a', content: <><b>Twin Lakes, 12,500'.</b> Right around the first lake, switchback up, continue to the big cairn above 13,000'. Sunlight's cairns branch left here; go right for Windom.</> },
              { time: '7:15a', content: 'Angled slabs to ~13,300\', turn right up to the Windom–Peak 18 saddle at 13,450\'. West ridge from here: 650 feet, mostly on the left side of the crest, cairned.' },
              { time: '8:00a', content: <><b>Windom Peak, 14,089'.</b> Highest point in La Plata County and the whole San Juan River drainage. Photos, ten minutes, then down.</> },
              { time: '8:45a', content: 'Back to the saddle. Drop north ~150\' to flatter ground near 13,300\', traverse NE across slabs, angle up to join the Sunlight South Face route at ~13,500\'.' },
              { time: '10:00a', content: <><b>Sunlight Peak, 14,059'.</b> The leaning summit block is an exposed Class 4 step and mantle with a serious drop behind it. Decide at camp, not on the block, whether you're touching it or standing on it.</> },
              { time: '10:30a', content: 'Down the gully, back past Twin Lakes. Clouds usually start stacking about now.' },
              { time: '1:00p', content: 'Camp. Eat, filter, rehydrate, feet up. Pack everything you won\'t need in the morning so tomorrow starts fast.' },
            ]} />
          </div>
          <div>
            <Note title="Compared to the Keyhole on Longs">
              Shorter and less sustained scrambling than the Ledges–Trough–Narrows–Homestretch
              sequence, but harder route-finding: cairns instead of painted bullseyes. The rock is
              quartzite-heavy and more broken than Longs' granite: better friction, more loose
              stuff. Test holds. Your X Ultra Mids are right; edge in cracks and avoid the polished
              streaks on any wet slab.
            </Note>
            <Note title="Lightning is the hazard, not the rock" variant="water">
              Monsoon-season storms form fast over the Needles. Sunlight's summit block and Windom's
              ridge are the worst places to be when they do. Off the summits by 11 a.m. is the
              rule, and a 5 a.m. start is what makes it possible.
            </Note>
            <Note title="Rope? No." variant="forest">
              There is nothing to anchor to on these routes and two scramblers tied together with no
              anchor are worse off than unroped. If conditions make you want one, that is your
              turnaround signal.
            </Note>
          </div>
        </div>
      </div>
    </section>
  );
}

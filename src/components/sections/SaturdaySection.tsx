import { Note } from '../ui/Note';
import { Timetable } from '../ui/Timetable';
import { Figure } from '../ui/Figure';
import { StatBlock } from '../ui/StatBlock';
import { RouteCard } from '../ui/RouteCard';
import { PhotoGroup } from '../ui/PhotoGroup';
import windomHero from '../../assets/windom/windom-hero.jpg';
import windom1 from '../../assets/windom/windom-1.jpg';
import windom2 from '../../assets/windom/windom-2.jpg';
import windom3 from '../../assets/windom/windom-3.jpg';
import windom4 from '../../assets/windom/windom-4.jpg';
import windom5 from '../../assets/windom/windom-5.jpg';
import windom6 from '../../assets/windom/windom-6.jpg';
import windom7 from '../../assets/windom/windom-7.jpg';
import windom8 from '../../assets/windom/windom-8.jpg';
import sunlightTopo from '../../assets/sunlight/sunlight-topo.jpg';
import sunlightBoth from '../../assets/sunlight/sunlight-both-routes-one-image.jpg';
import sunlight1 from '../../assets/sunlight/sunlight-1.jpg';
import sunlight2 from '../../assets/sunlight/sunlight-2.jpg';
import sunlight3 from '../../assets/sunlight/sunlight-3.jpg';
import sunlight4 from '../../assets/sunlight/sunlight-4.jpg';
import sunlight5 from '../../assets/sunlight/sunlight-5.jpg';
import sunlight6 from '../../assets/sunlight/sunlight-6.jpg';
import sunlight7 from '../../assets/sunlight/sunlight-7.jpg';
import sunlight8 from '../../assets/sunlight/sunlight-8.jpg';
import sunlight9 from '../../assets/sunlight/sunlight-9.jpg';
import sunlight10 from '../../assets/sunlight/sunlight-10.jpg';
import sunlight11 from '../../assets/sunlight/sunlight-11.jpg';
import sunlight12 from '../../assets/sunlight/sunlight-12.jpg';
import sunlight13 from '../../assets/sunlight/sunlight-13.jpg';
import sunlight14 from '../../assets/sunlight/sunlight-14.jpg';
import sunlight15 from '../../assets/sunlight/sunlight-15.jpg';
import sunlight16 from '../../assets/sunlight/sunlight-16.jpg';
import sunlight17 from '../../assets/sunlight/sunlight-17.jpg';
import sunlight18 from '../../assets/sunlight/sunlight-18.jpg';
import sunlight19 from '../../assets/sunlight/sunlight-19.jpg';
import sunlight20 from '../../assets/sunlight/sunlight-20.jpg';
import sunlight21 from '../../assets/sunlight/sunlight-21.jpg';

const WC = 'https://commons.wikimedia.org/wiki/Special:FilePath';

const WC_REEL = [
  `${WC}/Glacier_Point_from_Windom_Peak.JPG?width=1000`,
  `${WC}/Sunlight_Peak_from_Windom_Peak.jpg?width=1000`,
];

const WINDOM_PHOTOS = [windom1, windom2, windom3, windom4, windom5, windom6, windom7, windom8];
const SUNLIGHT_PHOTOS = [
  sunlight1, sunlight2, sunlight3, sunlight4, sunlight5, sunlight6, sunlight7,
  sunlight8, sunlight9, sunlight10, sunlight11, sunlight12, sunlight13, sunlight14,
  sunlight15, sunlight16, sunlight17, sunlight18, sunlight19, sunlight20, sunlight21,
];

const WINDOM_GROUP = [windomHero, ...WINDOM_PHOTOS];
const SUNLIGHT_GROUP = [sunlightBoth, ...SUNLIGHT_PHOTOS];

export function SaturdaySection() {
  return (
    <section className="day-section" id="sat" data-section="sat">
      <div className="wrap">
        <div className="grid gap-[18px] items-end mb-[clamp(20px,3vw,40px)]">
          <div>
            <div className="kicker">Saturday, Sep 4 · Summit day</div>
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
            { value: "+4,000'", label: 'total gain' },
            { value: 'Class 3', label: 'Class 4 block optional' },
          ]} />
        </div>

        <PhotoGroup images={WC_REEL}>
          <div className="reel two">
            <Figure
              src={WC_REEL[0]}
              alt="View from the summit of Windom Peak showing jagged rock towers, an alpine lake below, and a massive peak in the background"
              caption="Looking west from Windom's summit. The jagged towers are the Needle Mountains skyline; the lake below sits in the basin you climbed out of. This is the view at 8 a.m."
              credit="Photo: Wikimedia Commons (CC BY-SA)"
            />
            <Figure
              src={WC_REEL[1]}
              alt="Sunlight Peak seen from the summit of Windom Peak with the connecting basin below"
              caption="Sunlight from Windom's summit. The crossover drops to the flat terrain at 13,300' (center), then angles up right to the South Face gully."
              credit="Photo: Wikimedia Commons (CC BY 2.0)"
            />
          </div>
        </PhotoGroup>
        <p className="text-[12.5px] text-mt-400 mt-2 md:hidden">Swipe for more</p>

        <div className="cols mt-8">
          <div>
            <Timetable entries={[
              { time: '4:00a', content: 'Alarm. Water, food, summit pack: layers, shell, 2 L, snacks, headlamp, first aid, satellite messenger, sun protection.' },
              { time: '5:00a', content: 'Moving by headlamp. Trail NE up the basin, left at the signed Twin Lakes junction at 11,200\', switchbacks past two stream crossings.' },
              { time: '6:20a', content: <><b>Twin Lakes, 12,500'.</b> Right around the first lake, switchback up, continue to the big cairn above 13,000'. Sunlight's cairns branch left here; go right for Windom.</> },
              { time: '7:15a', content: "Angled slabs to ~13,300', turn right up to the Windom–Peak 18 saddle at 13,450'. West ridge from here: 650 feet, mostly on the left side of the crest, cairned." },
              { time: '8:00a', content: <><b>Windom Peak, 14,089'.</b> Highest point in La Plata County and the whole San Juan River drainage. Photos, ten minutes, then down.</> },
              { time: '8:45a', content: "Back to the saddle. Drop north ~150' to flatter ground near 13,300', traverse NE across slabs, angle up to join the Sunlight South Face route at ~13,500'." },
              { time: '10:00a', content: <><b>Sunlight Peak, 14,059'.</b> The leaning summit block is an exposed Class 4 step and mantle with a serious drop behind it. Decide at camp, not on the block, whether you're touching it or standing on it.</> },
              { time: '10:30a', content: 'Down the gully, back past Twin Lakes. Clouds usually start stacking about now.' },
              { time: '1:00p', content: "Camp. Eat, filter, rehydrate, feet up. Pack everything you won't need in the morning so tomorrow starts fast." },
            ]} />
          </div>
          <div>
            <Note title="Compared to the Keyhole on Longs">
              Shorter and less sustained scrambling than the Ledges–Trough–Narrows–Homestretch
              sequence, but harder route-finding: cairns instead of painted bullseyes. The rock is
              quartzite-heavy and more broken than Longs' granite: better friction, more loose
              stuff. Test holds. Hiking shoes edge well in cracks; avoid the polished
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

        {/* ── Route detail ── */}
        <h3 className="sub-heading mt-10">Route detail</h3>
        <Figure
          src={sunlightTopo}
          alt="14ers.com topographic map of the Sunlight Peak south face route showing Twin Lakes, the upper basin, and the routes to both summits"
          caption="Sunlight + Windom topo (14ers.com). Windom is to the right; the Sunlight route (orange) climbs from Twin Lakes up the gully system. Start dot (green, bottom left) = camp."
          credit="Map: 14ers.com"
          aspectRatio="4/3"
        />

        <div className="grid gap-4 md:grid-cols-2 mt-6">

          {/* ── Sunlight (first) ── */}
          <RouteCard
            defaultOpen
            title={<>Sunlight Peak 14,059' <span className="grade grade-c3">Class 3</span><span className="grade grade-c4">Class 4 block</span></>}
            meta="South Face via the Windom crossover · adds ~1 mi / 1,000' · the summit block is the only Class 4 move of the trip"
          >
            <PhotoGroup images={SUNLIGHT_GROUP}>
              <Figure
                src={sunlightBoth}
                alt="Google Earth 3D view showing Sunlight Peak and Windom Peak with the crossover route in blue and the individual routes annotated"
                caption="The crossover (blue) between the two peaks. From the Windom saddle, drop north to 13,300', then traverse east to join the Sunlight South Face route."
                aspectRatio="16/9"
              />
              <ol className="pl-5 mt-4 mb-2 space-y-2 text-mt-100 text-[15px]">
                <li>From the Windom–Peak 18 saddle drop north about 150' to flatter terrain near 13,300'. Traverse northeast across Class 2 slabs and angle up an easy slope to intersect the standard Sunlight route around 13,500'.</li>
                <li>Follow cairns up the broad gully system to the notch, then a short series of Class 3 moves through boulders — including a well-known squeeze between two blocks — to the summit area.</li>
                <li>The true summit is a leaning block requiring an exposed Class 4 step-across and mantle onto a smooth top with a serious drop on the far side. Decide at camp, not on the block. Many people touch it rather than stand on it; the block immediately below is a legitimate summit.</li>
                <li>Descend the way you came. Windom plus Sunlight via the crossover is about 7 miles and 4,000' from camp.</li>
              </ol>
              <div className="reel mt-4">
                {SUNLIGHT_PHOTOS.map((src, i) => (
                  <Figure key={i} src={src} alt={`Sunlight Peak route photo ${i + 1}`} />
                ))}
              </div>
              <p className="text-[12.5px] text-mt-400 mt-1 md:hidden">Swipe for more</p>
            </PhotoGroup>
          </RouteCard>

          {/* ── Windom (second) ── */}
          <RouteCard
            defaultOpen
            title={<>Windom Peak 14,089' <span className="grade grade-c3">Easy Class 3</span></>}
            meta="West Ridge · 6 mi / 3,000' from camp · considerable exposure, rockfall, and route-finding above 13,000'"
          >
            <PhotoGroup images={WINDOM_GROUP}>
              <Figure
                src={windomHero}
                alt="Windom Peak summit ridge with the annotated west ridge route shown in pink"
                caption="The west ridge from the saddle. The route follows the left (north) side of the crest, then threads two breaks near the top for the final Class 3 pitch."
                aspectRatio="16/9"
              />
              <ol className="pl-5 mt-4 mb-2 space-y-2 text-mt-100 text-[15px]">
                <li>From Twin Lakes stay right around the first lake, switchback up, and continue to a prominent cairn above 13,000' in the center of the upper basin, then a second cairn just east. Sunlight's cairns branch left here.</li>
                <li>For Windom, drop slightly and traverse the angled slabs right of the basin's center. This avoids the loose gully further right that people use as a shortcut and shouldn't.</li>
                <li>Follow slabs east to ~13,300', turn right, and climb to the Windom–Peak 18 saddle at 13,450'.</li>
                <li>West ridge: 650 feet, mostly on the left (north) side of the crest, following cairns to a small notch at 13,800'. Above the notch the blocks get bigger and the summit stays hidden until the last few moves.</li>
                <li>Near 13,900' stay left of the ridge. Two breaks in the ridge give Class 3 access to the final pitch. Scramble the summit blocks.</li>
                <li><b>Do not descend the northwest face toward Sunlight</b> in summer — steep and loose. Return to the saddle and use the crossover described above.</li>
              </ol>
              <div className="reel mt-4">
                {WINDOM_PHOTOS.map((src, i) => (
                  <Figure key={i} src={src} alt={`Windom Peak route photo ${i + 1}`} />
                ))}
              </div>
              <p className="text-[12.5px] text-mt-400 mt-1 md:hidden">Swipe for more</p>
            </PhotoGroup>
          </RouteCard>

        </div>
      </div>
    </section>
  );
}

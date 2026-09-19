import { RouteCard } from '../ui/RouteCard';
import { Figure } from '../ui/Figure';
import { StatBlock } from '../ui/StatBlock';
import { useEolus } from '../../context/EolusContext';
import sunlightTopo from '../../assets/sunlight/sunlight-topo.jpg';
import sunlightBoth from '../../assets/sunlight/sunlight-both-routes-one-image.jpg';
import sunlight1 from '../../assets/sunlight/sunlight-1.jpg';
import sunlight2 from '../../assets/sunlight/sunlight-2.jpg';
import sunlight5 from '../../assets/sunlight/sunlight-5.jpg';
import sunlight7 from '../../assets/sunlight/sunlight-7.jpg';
import sunlight10 from '../../assets/sunlight/sunlight-10.jpg';
import sunlight12 from '../../assets/sunlight/sunlight-12.jpg';
import sunlight15 from '../../assets/sunlight/sunlight-15.jpg';
import sunlight18 from '../../assets/sunlight/sunlight-18.jpg';
import sunlight20 from '../../assets/sunlight/sunlight-20.jpg';
import windomHero from '../../assets/windom/windom-hero.jpg';
import windom1 from '../../assets/windom/windom-1.jpg';
import windom2 from '../../assets/windom/windom-2.jpg';
import windom3 from '../../assets/windom/windom-3.jpg';
import windom4 from '../../assets/windom/windom-4.jpg';
import windom5 from '../../assets/windom/windom-5.jpg';
import windom6 from '../../assets/windom/windom-6.jpg';
import windom7 from '../../assets/windom/windom-7.jpg';
import windom8 from '../../assets/windom/windom-8.jpg';

const WC = 'https://commons.wikimedia.org/wiki/Special:FilePath';

const WINDOM_PHOTOS = [
  { src: windom1, alt: 'Traversing the slab field toward Windom Peak with the annotated route in pink' },
  { src: windom2, alt: "Near 13,300' ascending south toward Windom's west ridge saddle with Peak 18 labeled and route annotated" },
  { src: windom3, alt: "A notch in the ridge at 13,800' with the route continuing left along the north side of the crest" },
  { src: windom4, alt: "Boulder field approaching Windom's summit with the route marked in pink" },
  { src: windom5, alt: 'Two breaks in the ridge just below the summit providing Class 3 access to the final pitch' },
  { src: windom6, alt: "View from Windom's summit looking northwest toward Sunlight Peak with Sunlight Spire visible" },
  { src: windom7, alt: 'Back at the saddle notch with Twin Lakes, Mt. Eolus, North Eolus, and the crossover line toward Sunlight all labeled' },
  { src: windom8, alt: "At the Windom–Peak 18 saddle with the route dropping north to 13,300' before traversing toward Sunlight, annotated in orange" },
];

const SUNLIGHT_PHOTOS = [
  { src: sunlight1, alt: 'Alpine lake at Twin Lakes with Sunlight Peak and Peak 18 labeled and the route shown in orange' },
  { src: sunlight2, alt: 'Above the lake, the trail switchbacks up the slope toward Sunlight with Peak 18 and the route annotated' },
  { src: sunlight5, alt: "The climb to Sunlight seen from Windom's west ridge, with Sunlight Peak and Sunlight Spire labeled and route shown" },
  { src: sunlight7, alt: 'Near the saddle, a notch in the ridge to climb through; the remaining route to the summit is Class 3' },
  { src: sunlight10, alt: "Passing below a cliff band on Sunlight's approach, the route cairned through the boulders" },
  { src: sunlight12, alt: 'A hole in the ridge on Sunlight circled to show it is not necessary to pass through, with the easier route annotated' },
  { src: sunlight15, alt: 'The famous squeeze passage between two boulders on the Sunlight summit ridge' },
  { src: sunlight18, alt: 'A climber mantling onto the exposed Class 4 summit block of Sunlight Peak with the San Juan skyline far below' },
  { src: sunlight20, alt: 'A climber sitting on the tiny summit of Sunlight Peak wearing a red helmet' },
];

export function RoutesSection() {
  const { withEolus } = useEolus();

  return (
    <section className="day-section" id="routes" data-section="routes">
      <div className="wrap">
        <div className="grid gap-[18px] items-end mb-[clamp(20px,3vw,40px)]">
          <div>
            <div className="kicker">Route details</div>
            <h2 className="text-[clamp(28px,5.5vw,52px)] font-cond font-semibold text-mt-50">
              Above 13,000' there is no trail. Read this before the basin.
            </h2>
            <p className="text-[clamp(16px,1.8vw,18px)] text-mt-200 mt-3 max-w-[52ch]">
              Descriptions follow the 14ers.com standard routes. Download the app and the GPX
              tracks before you leave the hotel — there is no cell signal past Rockwood.
            </p>
          </div>
          <StatBlock stats={[
            { value: "12,500'", label: 'Twin Lakes — where trail ends' },
            { value: '5:00 a', label: 'Leave camp by this time' },
            { value: 'Class 3–4', label: 'Technical difficulty range' },
          ]} />
        </div>

        <Figure
          src={sunlightTopo}
          alt="14ers.com topographic map of the Sunlight Peak south face route showing Twin Lakes, the upper basin, and the route to the summit"
          caption="Sunlight Peak south face topo (14ers.com). Windom is to the right; the Sunlight route (orange) climbs from Twin Lakes up the gully system. Start dot (green, bottom left) = camp."
          credit="Map: 14ers.com"
          aspectRatio="4/3"
        />

        <div className="grid gap-4 md:grid-cols-2 mt-6">

          {/* ── Windom ── */}
          <RouteCard
            defaultOpen
            title={<>Windom Peak 14,089' <span className="grade grade-c3">Easy Class 3</span></>}
            meta="West Ridge · 6 mi / 3,000' from camp · considerable exposure, rockfall, and route-finding above 13,000'"
          >
            <Figure
              src={windomHero}
              alt="Windom Peak summit ridge with the annotated west ridge route shown in pink, including the saddle approach and final pitch"
              caption="The west ridge from the saddle. The route follows the left (north) side of the crest, then threads two breaks near the top for the final Class 3 pitch."
              credit="Photo: Greg Landrum"
              aspectRatio="16/9"
            />
            <ol className="pl-5 mt-4 mb-2 space-y-2 text-mt-100 text-[15px]">
              <li>From Twin Lakes stay right around the first lake, switchback up, and continue to a prominent cairn above 13,000' in the center of the upper basin, then a second cairn just east. Sunlight's cairns branch left here.</li>
              <li>For Windom, drop slightly and traverse the angled slabs right of the basin's center. This avoids the loose gully further right that people use as a shortcut and shouldn't.</li>
              <li>Follow slabs east to ~13,300', turn right, and climb to the Windom–Peak 18 saddle at 13,450'.</li>
              <li>West ridge: 650 feet, mostly on the left (north) side of the crest, following cairns to a small notch at 13,800'. Above the notch the blocks get bigger and the summit stays hidden until the last few moves.</li>
              <li>Near 13,900' stay left of the ridge. Two breaks in the ridge give Class 3 access to the final pitch. Scramble the summit blocks.</li>
              <li><b>Do not descend the northwest face toward Sunlight</b> in summer — steep and loose. Return to the saddle and use the crossover described below.</li>
            </ol>
            <div className="reel mt-4">
              {WINDOM_PHOTOS.map((p) => (
                <Figure key={p.alt} src={p.src} alt={p.alt} credit="Photo: Greg Landrum" />
              ))}
            </div>
            <p className="text-[12.5px] text-mt-400 mt-1 md:hidden">Swipe for more</p>
          </RouteCard>

          {/* ── Sunlight ── */}
          <RouteCard
            defaultOpen
            title={<>Sunlight Peak 14,059' <span className="grade grade-c3">Class 3</span><span className="grade grade-c4">Class 4 block</span></>}
            meta="South Face via the Windom crossover · adds ~1 mi / 1,000' · the summit block is the only Class 4 move of the trip"
          >
            <Figure
              src={sunlightBoth}
              alt="Google Earth 3D view showing Sunlight Peak and Windom Peak with the crossover route in blue and the Sunlight and Windom routes in orange and pink"
              caption="The crossover (blue) between the two peaks. From the Windom saddle, drop north to 13,300', then traverse east to join the Sunlight South Face route."
              credit="Photo: Greg Landrum"
              aspectRatio="16/9"
            />
            <ol className="pl-5 mt-4 mb-2 space-y-2 text-mt-100 text-[15px]">
              <li>From the Windom–Peak 18 saddle drop north about 150' to flatter terrain near 13,300'. Traverse northeast across Class 2 slabs and angle up an easy slope to intersect the standard Sunlight route around 13,500'.</li>
              <li>Follow cairns up the broad gully system to the notch, then a short series of Class 3 moves through boulders — including a well-known squeeze between two blocks — to the summit area.</li>
              <li>The true summit is a leaning block requiring an exposed Class 4 step-across and mantle onto a smooth top with a serious drop on the far side. Decide at camp, not on the block. Many people touch it rather than stand on it; the block immediately below is a legitimate summit.</li>
              <li>Descend the way you came. Windom plus Sunlight via the crossover is about 7 miles and 4,000' from camp.</li>
            </ol>
            <div className="reel mt-4">
              {SUNLIGHT_PHOTOS.map((p) => (
                <Figure key={p.alt} src={p.src} alt={p.alt} credit="Photo: Greg Landrum" />
              ))}
            </div>
            <p className="text-[12.5px] text-mt-400 mt-1 md:hidden">Swipe for more</p>
          </RouteCard>

          {/* ── Eolus (conditional) ── */}
          {withEolus ? (
            <RouteCard
              title={<>Mt. Eolus 14,083' <span className="grade grade-c3">Class 3</span></>}
              meta="Northeast Ridge via the Catwalk · 5 mi / 3,000' from camp · the most sustained exposure of the three"
            >
              <Figure
                src={`${WC}/The_ridge_from_N._Eolus_over_to_Eolus.jpg?width=1000`}
                alt="The narrow rocky Catwalk ridge connecting North Eolus to Mount Eolus"
                caption="The Catwalk from North Eolus toward the Eolus summit. Two to three feet wide, hundred yards long, big drops both sides. This is where the route earns its reputation."
                credit="Photo: Wikimedia Commons (CC BY)"
                aspectRatio="16/10"
              />
              <ol className="pl-5 mt-4 mb-2 space-y-2 text-mt-100 text-[15px]">
                <li>From Twin Lakes follow the trail and cairns northwest up a ramp system and slabs to the saddle between Eolus and North Eolus, ~13,850'.</li>
                <li>The Catwalk: a two- to three-foot-wide crest, about a hundred yards, with big drops both sides. Class 2+/3 walking with real consequences. Skip it in wind or with any ice.</li>
                <li>From the end of the Catwalk, ledges and short Class 3 steps angle up and left to the summit. Cairned but easy to drift onto harder ground — if it feels harder than Class 3, back up and find the cairn.</li>
                <li>North Eolus, 14,039', is a 10-minute Class 2+ scramble from the saddle — worth the detour.</li>
              </ol>
            </RouteCard>
          ) : (
            <RouteCard
              title={<>Mt. Eolus 14,083' <span className="grade grade-skip">Not in this plan</span></>}
              meta="Needs its own summit day and a third night · toggle the switch in the section above to add it"
            >
              <p className="mt-4 text-mt-100 text-[15px]">
                Eolus is climbed from the same Twin Lakes trail via the Eolus–North Eolus saddle
                and the Catwalk — a narrow Class 3 ridge with big drops on both sides — then
                cairned ledges up the east face. Attempting it as a third peak on the
                Windom/Sunlight day isn't realistic on one night of acclimatization from sea level.
                Leave it as the reason to come back.
              </p>
            </RouteCard>
          )}
        </div>
      </div>
    </section>
  );
}

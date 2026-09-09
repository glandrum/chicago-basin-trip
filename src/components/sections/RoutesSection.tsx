import { RouteCard } from '../ui/RouteCard';
import { Figure } from '../ui/Figure';
import { StatBlock } from '../ui/StatBlock';
import { useEolus } from '../../context/EolusContext';

const WC = 'https://commons.wikimedia.org/wiki/Special:FilePath';

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
            { value: '12,500\'', label: 'Twin Lakes — where trail ends' },
            { value: '5:00 a', label: 'Leave camp by this time' },
            { value: 'Class 3–4', label: 'Technical difficulty range' },
          ]} />
        </div>

        <div className="grid gap-4 md:grid-cols-2 mt-6">

          {/* ── Windom ── */}
          <RouteCard
            defaultOpen
            title={<>Windom Peak 14,089' <span className="grade grade-c3">Easy Class 3</span></>}
            meta="West Ridge · 6 mi / 3,000' from camp · considerable exposure, rockfall, and route-finding above 13,000'"
          >
            <Figure
              src={`${WC}/Windom_Peak_and_Unnamed_above_Chicago_Basin.jpg?width=1000`}
              alt="Windom Peak rising above the green floor of Chicago Basin, with the West Ridge skyline visible"
              caption="Looking up at Windom from Chicago Basin. The West Ridge is the left skyline; the route ascends slabs right of center to the Peak 18 saddle, then follows the ridge crest."
              credit="Photo: Wikimedia Commons (CC BY)"
              aspectRatio="16/10"
            />
            <ol className="pl-5 mt-4 mb-2 space-y-2 text-mt-100 text-[15px]">
              <li>From Twin Lakes stay right around the first lake, switchback up, and continue to a prominent cairn above 13,000' in the center of the upper basin, then a second cairn just east. Sunlight's cairns branch left here.</li>
              <li>For Windom, drop slightly and traverse the angled slabs right of the basin's center. This avoids the loose gully further right that people use as a shortcut and shouldn't.</li>
              <li>Follow slabs east to ~13,300', turn right, and climb to the Windom–Peak 18 saddle at 13,450'.</li>
              <li>West ridge: 650 feet, mostly on the left (north) side of the crest, following cairns to a small notch at 13,800'. Above the notch the blocks get bigger and the summit stays hidden until the last few moves.</li>
              <li>Near 13,900' stay left of the ridge. Two breaks in the ridge give Class 3 access to the final pitch. Scramble the summit blocks.</li>
              <li><b>Do not descend the northwest face toward Sunlight</b> in summer — steep and loose. Return to the saddle and use the crossover described below.</li>
            </ol>
          </RouteCard>

          {/* ── Sunlight ── */}
          <RouteCard
            defaultOpen
            title={<>Sunlight Peak 14,059' <span className="grade grade-c3">Class 3</span><span className="grade grade-c4">Class 4 block</span></>}
            meta="South Face via the Windom crossover · adds ~1 mi / 1,000' · the summit block is the only Class 4 move of the trip"
          >
            {/* Two-photo grid */}
            <div className="grid grid-cols-2 gap-2 mt-1">
              <Figure
                src={`${WC}/Sunlight_Peak.jpg?width=1000`}
                alt="Sunlight Peak seen across an alpine lake from the Twin Lakes side"
                caption="Sunlight from Twin Lakes. The South Face gully is the broad couloir left of center leading to the notch."
                credit="Photo: Wikimedia Commons (public domain)"
                aspectRatio="4/3"
              />
              <Figure
                src={`${WC}/Sunlight_Peak_from_Windom_Peak.jpg?width=1000`}
                alt="Sunlight Peak seen from the summit of Windom, showing the connecting Class 2 crossover slabs"
                caption="Sunlight from Windom's summit. The crossover drops to the flat terrain at 13,300' (center), then angles up right to the South Face gully."
                credit="Photo: Wikimedia Commons (CC BY 2.0)"
                aspectRatio="4/3"
              />
            </div>
            <ol className="pl-5 mt-4 mb-2 space-y-2 text-mt-100 text-[15px]">
              <li>From the Windom–Peak 18 saddle drop north about 150' to flatter terrain near 13,300'. Traverse northeast across Class 2 slabs and angle up an easy slope to intersect the standard Sunlight route around 13,500'.</li>
              <li>Follow cairns up the broad gully system to the notch, then a short series of Class 3 moves through boulders — including a well-known squeeze between two blocks — to the summit area.</li>
              <li>The true summit is a leaning block requiring an exposed Class 4 step-across and mantle onto a smooth top with a serious drop on the far side. Decide at camp, not on the block. Many people touch it rather than stand on it; the block immediately below is a legitimate summit.</li>
              <li>Descend the way you came. Windom plus Sunlight via the crossover is about 7 miles and 4,000' from camp.</li>
            </ol>
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

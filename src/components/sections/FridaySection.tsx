import { Note } from '../ui/Note';
import { Timetable } from '../ui/Timetable';
import { Figure } from '../ui/Figure';
import { StatBlock } from '../ui/StatBlock';
import { PhotoGroup } from '../ui/PhotoGroup';
import chiBasinHero from '../../assets/sunlight/chicago-basin-hero.jpg';
import approachTopo from '../../assets/chicago-bason-hike/topography-with-route.jpg';
import routeImg1 from '../../assets/chicago-bason-hike/route-image-1.jpg';
import routeImg2 from '../../assets/chicago-bason-hike/route-image-2.jpg';
import routeImg3 from '../../assets/chicago-bason-hike/route-image-3.jpg';
import routeImg4 from '../../assets/chicago-bason-hike/route-image-4.jpg';
import routeImg5 from '../../assets/chicago-bason-hike/route-image-5.jpg';
import routeImg6 from '../../assets/chicago-bason-hike/route-image-6.jpg';
import routeImg7 from '../../assets/chicago-bason-hike/route-image-7.jpg';
import routeImg8 from '../../assets/chicago-bason-hike/route-image-8.jpg';
import routeImg9 from '../../assets/chicago-bason-hike/route-image-9.jpg';
import routeImg10 from '../../assets/chicago-bason-hike/route-image-10.jpg';
import routeImg11 from '../../assets/chicago-bason-hike/route-image-11.jpg';

const WC = 'https://commons.wikimedia.org/wiki/Special:FilePath';

const RIDE_PHOTOS = [
  { src: `${WC}/K-37_-493_in_Durango,_Colorado.jpg?width=1000`, alt: 'A black narrow-gauge steam locomotive in the Durango yard', mile: 'Mile 0', caption: 'Durango yard, 7:30 a.m. Pack into the baggage car, then find the open gondola.', credit: 'Photo: Wikimedia Commons' },
  { src: routeImg1, alt: 'The Durango & Silverton train at the depot with a plume of black coal smoke rising from the locomotive', mile: 'Mile 0', caption: 'Leaving the station.' },
  { src: `${WC}/Steaming_beside_the_Animas_River_(48721221381).jpg?width=1000`, alt: 'The steam train running beside the Animas River through the valley north of Durango', mile: 'Miles 1–17', caption: 'The Animas Valley: ranch land, cottonwoods, red cliffs, the river alongside. The engine settles into 15 mph.', credit: 'Photo: Wikimedia Commons (CC BY)' },
  { src: `${WC}/Coming_Around_the_Bend_-_Flickr_-_G._Lamar.jpg?width=1000`, alt: 'The train rounding a curve in the Animas canyon with steep forested walls', mile: 'Mile 18', caption: 'Rockwood. The last road. The track turns into the gorge and the grade steepens.', credit: 'Photo: G. Lamar, Wikimedia Commons (CC BY)' },
  { src: `${WC}/Steam_on_the_Animas_-_September_2013.jpg?width=1000`, alt: 'Steam train on a narrow ledge above the Animas River in the canyon', mile: 'Mile 19', caption: 'The High Line. A shelf blasted into the granite 400 feet above the river, nothing between the gondola rail and the drop. Be on the right side of the car.', credit: 'Photo: Wikimedia Commons' },
  { src: routeImg2, alt: 'The train hugging a narrow shelf cut into the canyon wall hundreds of feet above the Animas River', mile: 'Miles 19–26', caption: 'One of many shelf locations where the train crawls above the Animas River.' },
  { src: routeImg3, alt: 'The D&S train crossing a bridge over the Animas River with emerald-green water below', mile: 'Miles 19–26', caption: 'A bridge crossing during the long train ride.' },
  { src: `${WC}/Coming_Around_the_Bend_(15114074572).jpg?width=1000`, alt: 'The train following the river deep in the Animas canyon', mile: 'Miles 20–26', caption: 'Deep in the gorge. The river is beside the track, then far below, then beside again. Tacoma power plant, Tank Creek, Cascade Creek.', credit: 'Photo: Wikimedia Commons (CC BY)' },
  { src: `${WC}/K-28_-473_at_Cascade_Canyon_Wye.jpg?width=1000`, alt: 'A K-28 locomotive on the wye at Cascade Canyon', mile: 'Mile 26', caption: 'Cascade Canyon wye, where the winter trains turn around. The Needle Mountains start showing above the canyon rim. Needleton is 15 minutes on.', credit: 'Photo: Wikimedia Commons (CC BY)' },
  { src: routeImg4, alt: 'D&S locomotive No. 481 approaching through the narrow gorge at the Needleton stop', mile: 'Mile 41', caption: 'The train passing through Needleton. Be at the door — the stop is brief.' },
];

const WALK_PHOTOS = [
  { src: routeImg5, alt: 'The Needleton train platform and suspension bridge over the Animas River', caption: 'The Needleton stop: a platform, a footbridge, and the sound of the train pulling away.' },
  { src: routeImg6, alt: 'Trail junction sign and rock cairn in the pines, green arrow indicating the left turn for Needle Creek', caption: 'Turn left for Needle Creek here — approx. 0.8 mi from the bridge.' },
  { src: routeImg7, alt: 'Weminuche Wilderness trailhead sign and information board in the forest', caption: "Entering the Weminuche Wilderness near 8,300'." },
  { src: routeImg8, alt: 'Wooden footbridge over New York Creek with a waterfall cascading behind it', caption: "New York Creek bridge, near 9,300'. Water everywhere — filter as you go instead of carrying it." },
  { src: routeImg9, alt: 'Trail opening into Chicago Basin with Sunlight Peak, Peak 18, Windom Peak, and Jupiter Mountain labeled', caption: "Leaving the trees and entering Chicago Basin near 10,950'. All three peaks now visible." },
  { src: routeImg10, alt: 'Looking toward the northeast end of Chicago Basin with Peak 18, Windom Peak, and Jupiter Mountain labeled, camp tents visible in the meadow', caption: "Near 11,000', approaching camp at the northeast end of Chicago Basin." },
  { src: routeImg11, alt: 'Rocky trail at the Twin Lakes junction with Windom Peak labeled in the background', caption: 'The Twin Lakes trail junction — this is where tomorrow starts. Note the fork.' },
  { src: `${WC}/Alpenglow_on_the_Eolus_Peaks.jpg?width=1000`, alt: 'Alpenglow lighting the summits of Mount Eolus and North Eolus above the basin', caption: "Evening from camp: alpenglow on Eolus and North Eolus, across the basin from tomorrow's peaks.", credit: 'Photo: Wikimedia Commons (CC BY)' },
];

const RIDE_SRCS = RIDE_PHOTOS.map(p => p.src);
const WALK_GROUP = [chiBasinHero, ...WALK_PHOTOS.map(p => p.src)];

export function FridaySection() {
  return (
    <section className="day-section" id="fri" data-section="fri">
      <div className="wrap">
        <div className="grid gap-[18px] items-end mb-[clamp(20px,3vw,40px)]">
          <div>
            <div className="kicker">
              Friday, Sep 3{' '}
              <span className="pto-badge" style={{ background: '#8B6020' }}>Train day</span>
            </div>
            <h2 className="text-[clamp(28px,5.5vw,52px)] font-cond font-semibold text-mt-50">
              Two and a half hours of steam, six miles of trail
            </h2>
            <p className="text-[clamp(16px,1.8vw,18px)] text-mt-200 mt-3 max-w-[52ch]">
              Between Rockwood and Silverton there is no road at all. The train is the only way into
              the Animas Gorge, and Needleton is a wood platform where it stops just long enough to
              hand you your pack.
            </p>
          </div>
          <StatBlock stats={[
            { value: '30 mi', label: 'by rail to Needleton' },
            { value: '6 mi', label: 'Needle Creek Trail' },
            { value: "+2,900'", label: 'to camp at ~11,000\'' },
          ]} />
        </div>

        <h3 className="sub-heading">The ride, mile by mile</h3>

        <Timetable entries={[
          { time: '7:30a', rail: true, content: <>Depot at 479 Main Ave. Check the pack into the baggage car, pick up your boarding pass. You booked the <b>backpacker fare to Needleton</b>, not a Silverton ticket, and you booked it months ago.</> },
          { time: '8:30a', timeLabel: '±', rail: true, content: 'Depart. Coal-fired K-36 up front, cinders in your hair, 20 mph. The High Line comes about 40 minutes in. Rockwood is the last road you\'ll see until Sunday.' },
          { time: '11:00a', rail: true, content: <><b>Needleton, 8,200'.</b> Be at the door with your things; the stop is brief. Grab the pack from the baggage car, watch the train pull away, and it gets very quiet.</> },
        ]} />

        <PhotoGroup images={RIDE_SRCS}>
          <div className="reel">
            {RIDE_PHOTOS.map((p) => (
              <Figure
                key={p.alt}
                src={p.src}
                alt={p.alt}
                caption={<><span className="mile">{p.mile}</span>{p.caption}</>}
                credit={p.credit}
              />
            ))}
          </div>
        </PhotoGroup>
        <p className="text-[12.5px] text-mt-400 mt-2 md:hidden">Swipe through the ride</p>

        {/* ── Transition: off the train ── */}
        <div className="my-10 flex items-center gap-4">
          <div className="h-px flex-1" style={{ background: 'rgba(212,147,58,.22)' }} />
          <span
            className="shrink-0 font-cond font-semibold uppercase tracking-[0.15em] text-[11px]"
            style={{ color: '#D4933A' }}
          >
            Needleton, 8,200' · The hike in
          </span>
          <div className="h-px flex-1" style={{ background: 'rgba(212,147,58,.22)' }} />
        </div>

        <div className="mb-6">
          <h3
            className="font-cond font-semibold text-mt-50"
            style={{ fontSize: 'clamp(24px,4.5vw,40px)' }}
          >
            Six miles and 2,900 feet to camp
          </h3>
          <p className="text-mt-300 mt-2 max-w-[52ch]" style={{ fontSize: 'clamp(15px,1.6vw,17px)' }}>
            The train pulls away and it gets quiet. Cross the Animas on the suspension bridge,
            turn onto Needle Creek, and start climbing.
          </p>
        </div>

        {/* ── Full-route 3D overview ── */}
        <figure className="m-0 mb-8">
          <video
            src="/route-3d-map.mov"
            controls
            playsInline
            preload="metadata"
            className="w-full border border-mt-600 block"
            style={{ background: '#0B1520', aspectRatio: '16/9', objectFit: 'contain' }}
          />
          <figcaption className="text-[13px] text-mt-300 mt-2 leading-[1.4]">
            3D route flyover: Needleton flag stop (8,200') → Needle Creek Trail → Chicago Basin
            → Windom saddle → Sunlight Peak summit (14,059'). Two days, ~12 miles, 5,800' total gain.
          </figcaption>
        </figure>

        <PhotoGroup images={WALK_GROUP}>
          <Figure
            src={chiBasinHero}
            alt="A narrow single-track trail winding through alpine meadows into Chicago Basin, with the jagged Needle Mountain peaks rising on both sides under a blue sky"
            caption="The basin opens up at the end of the Needle Creek Trail — Windom is the left skyline, the Needle cluster to the right. Camp is in the meadows below."
            aspectRatio="16/9"
          />

          <div className="cols mt-8">
            <div>
              <Timetable entries={[
                { time: '11:15a', content: 'Cross the Animas on the suspension bridge, turn right (south) along the river to the Needle Creek junction, ~0.8 mi. Stay left and enter the Weminuche.' },
                { time: 'Noon–3p', content: 'Needle Creek Trail. Well built, steady grade through aspen and then spruce, bridge over New York Creek at ~2 miles, three more miles to the basin. Water is everywhere; filter as you go instead of carrying it.' },
                { time: '3:30p', content: <><b>Chicago Basin.</b> Sites between 10,800' and 11,100' on the benches near the upper end of the basin. 100 feet from water and trail. Respect the "no camping beyond this point" sign below Twin Lakes.</> },
                { time: 'Evening', content: "Tent up, filter water, eat, drink more than you want to. Study Windom and Sunlight from camp; you can see the whole of tomorrow from your tent door. Bed early." },
              ]} />
              <Note title="First night at 11,000'" variant="forest">
                From 430' in Dallas to 11,000' in under 24 hours is the biggest jump of the trip. A
                dull headache and a restless night are normal. Headache that keeps getting worse,
                vomiting, or breathlessness at rest are not: the trail down is right there, and the
                train runs daily.
              </Note>
            </div>
            <div>
              <Figure
                src={approachTopo}
                alt="14ers.com topographic map showing the Needle Creek Trail approach from Needleton to Chicago Basin with the route traced in green"
                caption="The Needle Creek approach — 6 miles, 2,900' gain. Green start dot (left) = Needleton trailhead. Route follows Needle Creek east into the basin."
                credit="Map: 14ers.com"
                aspectRatio="4/3"
              />
              <h3 className="sub-heading">The walk in</h3>
              <div className="reel two">
                {WALK_PHOTOS.map((p) => (
                  <Figure key={p.alt} src={p.src} alt={p.alt} caption={p.caption} credit={p.credit} />
                ))}
              </div>
              <p className="text-[12.5px] text-mt-400 mt-2 md:hidden">Swipe for more</p>
            </div>
          </div>
        </PhotoGroup>
      </div>
    </section>
  );
}

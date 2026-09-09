import { Note } from '../ui/Note';
import { Timetable } from '../ui/Timetable';
import { Figure } from '../ui/Figure';
import { StatBlock } from '../ui/StatBlock';

const WC = 'https://commons.wikimedia.org/wiki/Special:FilePath';

const RIDE_PHOTOS = [
  { src: `${WC}/K-37_-493_in_Durango,_Colorado.jpg?width=1000`, alt: 'A black narrow-gauge steam locomotive in the Durango yard', mile: 'Mile 0', caption: 'Durango yard, 7:30 a.m. Pack into the baggage car, then find the open gondola.', credit: 'Photo: Wikimedia Commons' },
  { src: `${WC}/Steaming_beside_the_Animas_River_(48721221381).jpg?width=1000`, alt: 'The steam train running beside the Animas River through the valley north of Durango', mile: 'Miles 1–17', caption: 'The Animas Valley: ranch land, cottonwoods, red cliffs, the river alongside. The engine settles into 15 mph.', credit: 'Photo: Wikimedia Commons (CC BY)' },
  { src: `${WC}/Coming_Around_the_Bend_-_Flickr_-_G._Lamar.jpg?width=1000`, alt: 'The train rounding a curve in the Animas canyon with steep forested walls', mile: 'Mile 18', caption: 'Rockwood. The last road. The track turns into the gorge and the grade steepens.', credit: 'Photo: G. Lamar, Wikimedia Commons (CC BY)' },
  { src: `${WC}/Steam_on_the_Animas_-_September_2013.jpg?width=1000`, alt: 'Steam train on a narrow ledge above the Animas River in the canyon', mile: 'Mile 19', caption: 'The High Line. A shelf blasted into the granite 400 feet above the river, nothing between the gondola rail and the drop. Be on the right side of the car.', credit: 'Photo: Wikimedia Commons' },
  { src: `${WC}/Coming_Around_the_Bend_(15114074572).jpg?width=1000`, alt: 'The train following the river deep in the Animas canyon', mile: 'Miles 20–26', caption: 'Deep in the gorge. The river is beside the track, then far below, then beside again. Tacoma power plant, Tank Creek, Cascade Creek.', credit: 'Photo: Wikimedia Commons (CC BY)' },
  { src: `${WC}/K-28_-473_at_Cascade_Canyon_Wye.jpg?width=1000`, alt: "A K-28 locomotive on the wye at Cascade Canyon", mile: 'Mile 26', caption: 'Cascade Canyon wye, where the winter trains turn around. The Needle Mountains start showing above the canyon rim. Needleton is 15 minutes on.', credit: 'Photo: Wikimedia Commons (CC BY)' },
];

const WALK_PHOTOS = [
  { src: `${WC}/Canyon_of_the_Rio_las_Animas,_Colorado_LCCN2017658707.jpg?width=1000`, alt: 'Historic photograph of the Animas canyon with the river far below the rail line', caption: "Needleton is a platform, a footbridge, and the sound of the train leaving. This is the same gorge W.H. Jackson photographed for the railroad in the 1880s.", credit: 'Photo: Library of Congress via Wikimedia Commons (public domain)' },
  { src: `${WC}/Continental_divide_trail_in_Weminuche_Wilderness.jpg?width=1000`, alt: 'A trail through open high country in the Weminuche Wilderness', caption: 'Weminuche high country. Needle Creek climbs through aspen, then spruce, then opens up like this at the mouth of the basin around mile 5.', credit: 'Photo: Wikimedia Commons' },
  { src: `${WC}/Windom_Peak_and_Unnamed_above_Chicago_Basin.jpg?width=1000`, alt: 'Windom Peak and a neighboring unnamed summit rising above the green floor of Chicago Basin', caption: 'The reward at mile 6: Windom Peak above Chicago Basin. Camp is in the meadows and benches at the bottom of this view.', credit: 'Photo: Wikimedia Commons (CC BY)' },
  { src: `${WC}/Alpenglow_on_the_Eolus_Peaks.jpg?width=1000`, alt: 'Alpenglow lighting the summits of Mount Eolus and North Eolus above the basin', caption: 'Evening from camp: alpenglow on Eolus and North Eolus, across the basin from tomorrow\'s peaks.', credit: 'Photo: Wikimedia Commons (CC BY)' },
];

export function FridaySection() {
  return (
    <section className="day-section" id="fri" data-section="fri">
      <div className="wrap">
        <div className="grid gap-[18px] items-end mb-[clamp(20px,3vw,40px)]">
          <div>
            <div className="kicker">
              Friday{' '}
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
            { value: '+2,900\'', label: 'to camp at ~11,000\'' },
          ]} />
        </div>

        <h3 className="sub-heading">The ride, mile by mile</h3>

        <div className="reel">
          {RIDE_PHOTOS.map((p) => (
            <Figure
              key={p.src}
              src={p.src}
              alt={p.alt}
              caption={<><span className="mile">{p.mile}</span>{p.caption}</>}
              credit={p.credit}
            />
          ))}
        </div>
        <p className="text-[12.5px] text-mt-400 mt-2 md:hidden">Swipe through the ride</p>

        <div className="cols mt-8">
          <div>
            <Timetable entries={[
              { time: '7:30a', rail: true, content: <>Depot at 479 Main Ave. Check the pack into the baggage car, pick up your boarding pass. You booked the <b>backpacker fare to Needleton</b>, not a Silverton ticket, and you booked it months ago.</> },
              { time: '8:30a', timeLabel: '±', rail: true, content: 'Depart. Coal-fired K-36 up front, cinders in your hair, 20 mph. The High Line comes about 40 minutes in. Rockwood is the last road you\'ll see until Sunday.' },
              { time: '11:00a', rail: true, content: <><b>Needleton, 8,200'.</b> Be at the door with your things; the stop is brief. Grab the pack from the baggage car, watch the train pull away, and it gets very quiet.</> },
              { time: '11:15a', content: 'Cross the Animas on the suspension bridge, turn right (south) along the river to the Needle Creek junction, ~0.8 mi. Stay left and enter the Weminuche.' },
              { time: 'Noon–3p', content: 'Needle Creek Trail. Well built, steady grade through aspen and then spruce, bridge over New York Creek at ~2 miles, three more miles to the basin. Water is everywhere; filter as you go instead of carrying it.' },
              { time: '3:30p', content: <><b>Chicago Basin.</b> Sites between 10,800' and 11,100' on the benches near the upper end of the basin. 100 feet from water and trail. Respect the "no camping beyond this point" sign below Twin Lakes.</> },
              { time: 'Evening', content: 'Tent up, filter water, eat, drink more than you want to. Study Windom and Sunlight from camp; you can see the whole of tomorrow from your tent door. Bed early.' },
            ]} />
            <Note title="First night at 11,000'" variant="forest">
              From 430' in Dallas to 11,000' in under 24 hours is the biggest jump of the trip. A
              dull headache and a restless night are normal. Headache that keeps getting worse,
              vomiting, or breathlessness at rest are not: the trail down is right there, and the
              train runs daily.
            </Note>
          </div>
          <div>
            <h3 className="sub-heading" style={{ marginTop: 0 }}>The walk in</h3>
            <div className="reel two">
              {WALK_PHOTOS.map((p) => (
                <Figure key={p.src} src={p.src} alt={p.alt} caption={p.caption} credit={p.credit} />
              ))}
            </div>
            <p className="text-[12.5px] text-mt-400 mt-2 md:hidden">Swipe for more</p>
          </div>
        </div>
      </div>
    </section>
  );
}

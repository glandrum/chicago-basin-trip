import { Note } from '../ui/Note';
import { Timetable } from '../ui/Timetable';
import { Figure } from '../ui/Figure';
import { StatBlock } from '../ui/StatBlock';
import { PhotoGroup } from '../ui/PhotoGroup';
import { useLanguage } from '../../context/LanguageContext';
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

const RIDE_PHOTOS = {
  en: [
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
  ],
  es: [
    { src: `${WC}/K-37_-493_in_Durango,_Colorado.jpg?width=1000`, alt: 'A black narrow-gauge steam locomotive in the Durango yard', mile: 'Milla 0', caption: 'Patio de Durango, 7:30 a.m. Deja la mochila en el vagón de equipajes y encuentra el vagón abierto.', credit: 'Photo: Wikimedia Commons' },
    { src: routeImg1, alt: 'The Durango & Silverton train at the depot with a plume of black coal smoke rising from the locomotive', mile: 'Milla 0', caption: 'Saliendo de la estación.' },
    { src: `${WC}/Steaming_beside_the_Animas_River_(48721221381).jpg?width=1000`, alt: 'The steam train running beside the Animas River through the valley north of Durango', mile: 'Millas 1–17', caption: 'El Valle del Animas: ranchos, álamos, acantilados rojos, el río al costado. La locomotora alcanza los 15 mph.', credit: 'Photo: Wikimedia Commons (CC BY)' },
    { src: `${WC}/Coming_Around_the_Bend_-_Flickr_-_G._Lamar.jpg?width=1000`, alt: 'The train rounding a curve in the Animas canyon with steep forested walls', mile: 'Milla 18', caption: 'Rockwood. La última carretera. La vía entra al cañón y la pendiente aumenta.', credit: 'Photo: G. Lamar, Wikimedia Commons (CC BY)' },
    { src: `${WC}/Steam_on_the_Animas_-_September_2013.jpg?width=1000`, alt: 'Steam train on a narrow ledge above the Animas River in the canyon', mile: 'Milla 19', caption: 'La High Line. Una repisa volada en el granito a 400 pies sobre el río, sin nada entre el vagón y el vacío. Colócate en el lado derecho del vagón.', credit: 'Photo: Wikimedia Commons' },
    { src: routeImg2, alt: 'The train hugging a narrow shelf cut into the canyon wall hundreds of feet above the Animas River', mile: 'Millas 19–26', caption: 'Una de varias repisas donde el tren avanza sobre el río Animas.' },
    { src: routeImg3, alt: 'The D&S train crossing a bridge over the Animas River with emerald-green water below', mile: 'Millas 19–26', caption: 'Cruzando un puente durante el recorrido en tren.' },
    { src: `${WC}/Coming_Around_the_Bend_(15114074572).jpg?width=1000`, alt: 'The train following the river deep in the Animas canyon', mile: 'Millas 20–26', caption: 'En lo profundo del cañón. El río aparece a un lado, luego muy abajo, luego de vuelta. Planta de Tacoma, Tank Creek, Cascade Creek.', credit: 'Photo: Wikimedia Commons (CC BY)' },
    { src: `${WC}/K-28_-473_at_Cascade_Canyon_Wye.jpg?width=1000`, alt: 'A K-28 locomotive on the wye at Cascade Canyon', mile: 'Milla 26', caption: 'Desvío de Cascade Canyon, donde los trenes de invierno dan la vuelta. Las Needle Mountains comienzan a asomarse sobre el borde del cañón. Needleton está a 15 minutos.', credit: 'Photo: Wikimedia Commons (CC BY)' },
    { src: routeImg4, alt: 'D&S locomotive No. 481 approaching through the narrow gorge at the Needleton stop', mile: 'Milla 41', caption: 'El tren pasando por Needleton. Sé el primero en la puerta — la parada es breve.' },
  ],
};

const WALK_PHOTOS = {
  en: [
    { src: routeImg5, alt: 'The Needleton train platform and suspension bridge over the Animas River', caption: 'The Needleton stop: a platform, a footbridge, and the sound of the train pulling away.' },
    { src: routeImg6, alt: 'Trail junction sign and rock cairn in the pines, green arrow indicating the left turn for Needle Creek', caption: 'Turn left for Needle Creek here — approx. 0.8 mi from the bridge.' },
    { src: routeImg7, alt: 'Weminuche Wilderness trailhead sign and information board in the forest', caption: "Entering the Weminuche Wilderness near 8,300'." },
    { src: routeImg8, alt: 'Wooden footbridge over New York Creek with a waterfall cascading behind it', caption: "New York Creek bridge, near 9,300'. Water everywhere — filter as you go instead of carrying it." },
    { src: routeImg9, alt: 'Trail opening into Chicago Basin with Sunlight Peak, Peak 18, Windom Peak, and Jupiter Mountain labeled', caption: "Leaving the trees and entering Chicago Basin near 10,950'. All three peaks now visible." },
    { src: routeImg10, alt: 'Looking toward the northeast end of Chicago Basin with Peak 18, Windom Peak, and Jupiter Mountain labeled, camp tents visible in the meadow', caption: "Near 11,000', approaching camp at the northeast end of Chicago Basin." },
    { src: routeImg11, alt: 'Rocky trail at the Twin Lakes junction with Windom Peak labeled in the background', caption: 'The Twin Lakes trail junction — this is where tomorrow starts. Note the fork.' },
    { src: `${WC}/Alpenglow_on_the_Eolus_Peaks.jpg?width=1000`, alt: 'Alpenglow lighting the summits of Mount Eolus and North Eolus above the basin', caption: "Evening from camp: alpenglow on Eolus and North Eolus, across the basin from tomorrow's peaks.", credit: 'Photo: Wikimedia Commons (CC BY)' },
  ],
  es: [
    { src: routeImg5, alt: 'The Needleton train platform and suspension bridge over the Animas River', caption: 'La parada de Needleton: un andén, un puente colgante y el sonido del tren alejándose.' },
    { src: routeImg6, alt: 'Trail junction sign and rock cairn in the pines', caption: 'Dobla a la izquierda hacia Needle Creek aquí — aprox. 0.8 mi desde el puente.' },
    { src: routeImg7, alt: 'Weminuche Wilderness trailhead sign and information board in the forest', caption: "Entrando al Weminuche Wilderness cerca de los 8,300 pies." },
    { src: routeImg8, alt: 'Wooden footbridge over New York Creek with a waterfall cascading behind it', caption: "Puente sobre New York Creek, cerca de los 9,300 pies. Agua en abundancia — filtra sobre la marcha." },
    { src: routeImg9, alt: 'Trail opening into Chicago Basin with peaks labeled', caption: "Saliendo de los árboles y entrando a la Cuenca de Chicago cerca de los 10,950 pies. Los tres picos ya son visibles." },
    { src: routeImg10, alt: 'Looking toward the northeast end of Chicago Basin with camp tents visible in the meadow', caption: "Cerca de los 11,000 pies, acercándose al campamento en el extremo noreste de la Cuenca de Chicago." },
    { src: routeImg11, alt: 'Rocky trail at the Twin Lakes junction with Windom Peak in the background', caption: 'La bifurcación de Twin Lakes — aquí comienza el mañana. Nota el desvío.' },
    { src: `${WC}/Alpenglow_on_the_Eolus_Peaks.jpg?width=1000`, alt: 'Alpenglow on the summits above the basin', caption: "Tarde desde el campamento: alpenglow sobre Eolus y North Eolus, al otro lado de la cuenca.", credit: 'Photo: Wikimedia Commons (CC BY)' },
  ],
};

const T = {
  en: {
    kicker: 'Friday, Sep 3', badge: 'Train day',
    heading: 'Two and a half hours of steam, six miles of trail',
    desc: 'Between Rockwood and Silverton there is no road at all. The train is the only way into the Animas Gorge, and Needleton is a wood platform where it stops just long enough to hand you your pack.',
    stats: [
      { value: '30 mi', label: 'by rail to Needleton' },
      { value: '6 mi',  label: 'Needle Creek Trail' },
      { value: "+2,900'", label: "to camp at ~11,000'" },
    ],
    rideHeading: 'The ride, mile by mile',
    swipeRide: 'Swipe through the ride',
    transitionLabel: "Needleton, 8,200' · The hike in",
    hikeHeading: 'Six miles and 2,900 feet to camp',
    hikeDesc: 'The train pulls away and it gets quiet. Cross the Animas on the suspension bridge, turn onto Needle Creek, and start climbing.',
    basinCaption: "The basin opens up at the end of the Needle Creek Trail — Windom is the left skyline, the Needle cluster to the right. Camp is in the meadows below.",
    topoCaption: "The Needle Creek approach — 6 miles, 2,900' gain. Green start dot (left) = Needleton trailhead. Route follows Needle Creek east into the basin.",
    walkInHeading: 'The walk in',
    swipeWalk: 'Swipe for more',
    noteTitle: "First night at 11,000'",
    noteText: "From 430' in Dallas to 11,000' in under 24 hours is the biggest jump of the trip. A dull headache and a restless night are normal. Headache that keeps getting worse, vomiting, or breathlessness at rest are not: the trail down is right there, and the train runs daily.",
    videoCaption: "3D route flyover: Needleton flag stop (8,200') → Needle Creek Trail → Chicago Basin → Windom saddle → Sunlight Peak summit (14,059'). Two days, ~12 miles, 5,800' total gain.",
  },
  es: {
    kicker: 'Viernes, 3 de sep', badge: 'Día del tren',
    heading: 'Dos horas y media de vapor, seis millas de sendero',
    desc: 'Entre Rockwood y Silverton no hay ninguna carretera. El tren es el único acceso al Cañón del Animas, y Needleton es un andén de madera donde el tren se detiene apenas lo suficiente para entregarte tu mochila.',
    stats: [
      { value: '30 mi', label: 'en tren a Needleton' },
      { value: '6 mi',  label: 'Sendero Needle Creek' },
      { value: "+2,900'", label: "hasta el campamento a ~11,000'" },
    ],
    rideHeading: 'El recorrido, milla a milla',
    swipeRide: 'Desliza para ver el recorrido',
    transitionLabel: "Needleton, 8,200' · La caminata de ingreso",
    hikeHeading: 'Seis millas y 2,900 pies hasta el campamento',
    hikeDesc: 'El tren se aleja y todo queda en silencio. Cruza el Animas por el puente colgante, toma el sendero Needle Creek y comienza a subir.',
    basinCaption: "La cuenca se abre al final del sendero Needle Creek — Windom es el horizonte izquierdo, las agujas a la derecha. El campamento está en los prados de abajo.",
    topoCaption: "El acceso por Needle Creek — 6 millas, 2,900 pies de desnivel. Punto de inicio (verde, izquierda) = inicio en Needleton. La ruta sigue Needle Creek hacia el este hasta la cuenca.",
    walkInHeading: 'La caminata de ingreso',
    swipeWalk: 'Desliza para ver más',
    noteTitle: "Primera noche a 11,000 pies",
    noteText: "Pasar de 430 pies en Dallas a 11,000 pies en menos de 24 horas es el mayor salto del viaje. Un leve dolor de cabeza y una noche inquieta son normales. Un dolor de cabeza que empeora, vómitos o dificultad para respirar en reposo no lo son: el sendero de bajada está justo ahí, y el tren sale a diario.",
    videoCaption: "Sobrevuelo 3D de la ruta: parada de bandera de Needleton (8,200') → Sendero Needle Creek → Cuenca de Chicago → Collado Windom → Cumbre del Sunlight Peak (14,059'). Dos días, ~12 millas, 5,800 pies de desnivel total.",
  },
};

const RIDE_TIMETABLE = {
  en: [
    { time: '7:30a', rail: true, content: <>Depot at 479 Main Ave. Check the pack into the baggage car, pick up your boarding pass. You booked the <b>backpacker fare to Needleton</b>, not a Silverton ticket, and you booked it months ago.</> },
    { time: '8:30a', timeLabel: '±', rail: true, content: "Depart. Coal-fired K-36 up front, cinders in your hair, 20 mph. The High Line comes about 40 minutes in. Rockwood is the last road you'll see until Sunday." },
    { time: '11:00a', rail: true, content: <><b>Needleton, 8,200'.</b> Be at the door with your things; the stop is brief. Grab the pack from the baggage car, watch the train pull away, and it gets very quiet.</> },
  ],
  es: [
    { time: '7:30a', rail: true, content: <>Depósito en 479 Main Ave. Deja la mochila en el vagón de equipajes, recoge tu pase de abordaje. Reservaste la <b>tarifa de mochilero a Needleton</b>, no un boleto a Silverton, y lo hiciste con meses de anticipación.</> },
    { time: '8:30a', timeLabel: '±', rail: true, content: "Salida. K-36 a carbón al frente, hollín en el cabello, 20 mph. La High Line llega unos 40 minutos después. Rockwood es la última carretera que verás hasta el domingo." },
    { time: '11:00a', rail: true, content: <><b>Needleton, 8,200 pies.</b> Sé el primero en la puerta; la parada es breve. Recoge la mochila del vagón, ve alejarse el tren y todo queda muy silencioso.</> },
  ],
};

const HIKE_TIMETABLE = {
  en: [
    { time: '11:15a', content: 'Cross the Animas on the suspension bridge, turn right (south) along the river to the Needle Creek junction, ~0.8 mi. Stay left and enter the Weminuche.' },
    { time: 'Noon–3p', content: 'Needle Creek Trail. Well built, steady grade through aspen and then spruce, bridge over New York Creek at ~2 miles, three more miles to the basin. Water is everywhere; filter as you go instead of carrying it.' },
    { time: '3:30p', content: <><b>Chicago Basin.</b> Sites between 10,800' and 11,100' on the benches near the upper end of the basin. 100 feet from water and trail. Respect the "no camping beyond this point" sign below Twin Lakes.</> },
    { time: 'Evening', content: "Tent up, filter water, eat, drink more than you want to. Study Windom and Sunlight from camp; you can see the whole of tomorrow from your tent door. Bed early." },
  ],
  es: [
    { time: '11:15a', content: 'Cruza el Animas por el puente colgante, gira a la derecha (sur) a lo largo del río hasta el cruce con Needle Creek, aprox. 0.8 mi. Mantente a la izquierda y entra al Weminuche.' },
    { time: 'Mediodía–3p', content: 'Sendero Needle Creek. Bien construido, pendiente constante entre álamos y luego abetos, puente sobre New York Creek a unas 2 millas, tres millas más hasta la cuenca. Hay agua en abundancia; filtra sobre la marcha en vez de cargarla.' },
    { time: '3:30p', content: <><b>Cuenca de Chicago.</b> Sitios de acampada entre los 10,800 y 11,100 pies en las terrazas cerca del extremo superior de la cuenca. A 100 pies del agua y del sendero. Respeta el cartel "prohibido acampar más allá de este punto" debajo de Twin Lakes.</> },
    { time: 'Noche', content: "Arma la carpa, filtra agua, come y bebe más de lo que crees necesitar. Estudia el Windom y el Sunlight desde el campamento; desde la puerta de tu carpa puedes ver todo lo que harás mañana. Acuéstate temprano." },
  ],
};

export function FridaySection() {
  const { lang } = useLanguage();
  const t = T[lang];
  const ridePhotos = RIDE_PHOTOS[lang];
  const walkPhotos = WALK_PHOTOS[lang];
  const rideSrcs = ridePhotos.map(p => p.src);
  const walkGroup = [chiBasinHero, ...walkPhotos.map(p => p.src)];

  return (
    <section className="day-section" id="fri" data-section="fri">
      <div className="wrap">
        <div className="grid gap-[18px] items-end mb-[clamp(20px,3vw,40px)]">
          <div>
            <div className="kicker">
              {t.kicker}{' '}
              <span className="pto-badge" style={{ background: '#8B6020' }}>{t.badge}</span>
            </div>
            <h2 className="text-[clamp(28px,5.5vw,52px)] font-cond font-semibold text-mt-50">{t.heading}</h2>
            <p className="text-[clamp(16px,1.8vw,18px)] text-mt-200 mt-3 max-w-[52ch]">{t.desc}</p>
          </div>
          <StatBlock stats={t.stats} />
        </div>

        <h3 className="sub-heading">{t.rideHeading}</h3>
        <Timetable entries={RIDE_TIMETABLE[lang]} />

        <PhotoGroup images={rideSrcs}>
          <div className="reel">
            {ridePhotos.map((p) => (
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
        <p className="text-[12.5px] text-mt-400 mt-2 md:hidden">{t.swipeRide}</p>

        {/* ── Transition: off the train ── */}
        <div className="my-10 flex items-center gap-4">
          <div className="h-px flex-1" style={{ background: 'rgba(212,147,58,.22)' }} />
          <span className="shrink-0 font-cond font-semibold uppercase tracking-[0.15em] text-[11px]" style={{ color: '#D4933A' }}>
            {t.transitionLabel}
          </span>
          <div className="h-px flex-1" style={{ background: 'rgba(212,147,58,.22)' }} />
        </div>

        <div className="mb-6">
          <h3 className="font-cond font-semibold text-mt-50" style={{ fontSize: 'clamp(24px,4.5vw,40px)' }}>
            {t.hikeHeading}
          </h3>
          <p className="text-mt-300 mt-2 max-w-[52ch]" style={{ fontSize: 'clamp(15px,1.6vw,17px)' }}>
            {t.hikeDesc}
          </p>
        </div>

        <PhotoGroup images={walkGroup}>
          <Figure
            src={chiBasinHero}
            alt="A narrow single-track trail winding through alpine meadows into Chicago Basin, with the jagged Needle Mountain peaks rising on both sides under a blue sky"
            caption={t.basinCaption}
            aspectRatio="16/9"
          />

          <div className="cols mt-8">
            <div>
              <Timetable entries={HIKE_TIMETABLE[lang]} />
              <Note title={t.noteTitle} variant="forest">{t.noteText}</Note>
            </div>
            <div>
              <Figure
                src={approachTopo}
                alt="14ers.com topographic map showing the Needle Creek Trail approach from Needleton to Chicago Basin with the route traced in green"
                caption={t.topoCaption}
                credit="Map: 14ers.com"
                aspectRatio="4/3"
              />
              <h3 className="sub-heading">{t.walkInHeading}</h3>
              <div className="reel two">
                {walkPhotos.map((p) => (
                  <Figure key={p.alt} src={p.src} alt={p.alt} caption={p.caption} credit={p.credit} />
                ))}
              </div>
              <p className="text-[12.5px] text-mt-400 mt-2 md:hidden">{t.swipeWalk}</p>
            </div>
          </div>
        </PhotoGroup>

        {/* ── Full-route 3D overview ── */}
        <figure className="m-0 mt-10">
          <video
            src="/route-3d-map.mp4"
            poster={chiBasinHero}
            controls
            playsInline
            preload="metadata"
            className="w-full border border-mt-600 block"
            style={{ background: '#0B1520', aspectRatio: '16/9', objectFit: 'contain' }}
          />
          <figcaption className="text-[13px] text-mt-300 mt-2 leading-[1.4]">
            {t.videoCaption}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

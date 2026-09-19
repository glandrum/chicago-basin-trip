import { Note } from '../ui/Note';
import { Timetable } from '../ui/Timetable';
import { Figure } from '../ui/Figure';
import { StatBlock } from '../ui/StatBlock';
import { RouteCard } from '../ui/RouteCard';
import { PhotoGroup } from '../ui/PhotoGroup';
import { useLanguage } from '../../context/LanguageContext';
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

const T = {
  en: {
    kicker: 'Saturday, Sep 4 · Summit day',
    heading: 'Windom, then Sunlight, then back for lunch',
    desc: "Both peaks are climbed from Twin Lakes at 12,500'. The trail is excellent to 13,000' and then turns into cairned scrambling with no continuous path. Storms build by noon; the target is both summits before 11 a.m.",
    stats: [
      { value: '~7 mi', label: 'camp to camp' },
      { value: "+4,000'", label: 'total gain' },
      { value: 'Class 3', label: 'Class 4 block optional' },
    ],
    wcCaption0: "Looking west from Windom's summit. The jagged towers are the Needle Mountains skyline; the lake below sits in the basin you climbed out of. This is the view at 8 a.m.",
    wcCaption1: "Sunlight from Windom's summit. The crossover drops to the flat terrain at 13,300' (center), then angles up right to the South Face gully.",
    swipe: 'Swipe for more',
    noteCompTitle: 'Compared to the Keyhole on Longs',
    noteComp: "Shorter and less sustained scrambling than the Ledges–Trough–Narrows–Homestretch sequence, but harder route-finding: cairns instead of painted bullseyes. The rock is quartzite-heavy and more broken than Longs' granite: better friction, more loose stuff. Test holds. Hiking shoes edge well in cracks; avoid the polished streaks on any wet slab.",
    noteLightningTitle: 'Lightning is the hazard, not the rock',
    noteLightning: "Monsoon-season storms form fast over the Needles. Sunlight's summit block and Windom's ridge are the worst places to be when they do. Off the summits by 11 a.m. is the rule, and a 5 a.m. start is what makes it possible.",
    noteRopeTitle: 'Rope? No.',
    noteRope: "There is nothing to anchor to on these routes and two scramblers tied together with no anchor are worse off than unroped. If conditions make you want one, that is your turnaround signal.",
    routeDetailHeading: 'Route detail',
    topoCaption: "Sunlight + Windom topo (14ers.com). Windom is to the right; the Sunlight route (orange) climbs from Twin Lakes up the gully system. Start dot (green, bottom left) = camp.",
    sunlightCardTitle: <>Sunlight Peak 14,059' <span className="grade grade-c3">Class 3</span><span className="grade grade-c4">Class 4 block</span></>,
    sunlightMeta: "South Face via the Windom crossover · adds ~1 mi / 1,000' · the summit block is the only Class 4 move of the trip",
    sunlightBothCaption: "The crossover (blue) between the two peaks. From the Windom saddle, drop north to 13,300', then traverse east to join the Sunlight South Face route.",
    sunlightSteps: [
      "From the Windom–Peak 18 saddle drop north about 150' to flatter terrain near 13,300'. Traverse northeast across Class 2 slabs and angle up an easy slope to intersect the standard Sunlight route around 13,500'.",
      "Follow cairns up the broad gully system to the notch, then a short series of Class 3 moves through boulders — including a well-known squeeze between two blocks — to the summit area.",
      "The true summit is a leaning block requiring an exposed Class 4 step-across and mantle onto a smooth top with a serious drop on the far side. Decide at camp, not on the block. Many people touch it rather than stand on it; the block immediately below is a legitimate summit.",
      "Descend the way you came. Windom plus Sunlight via the crossover is about 7 miles and 4,000' from camp.",
    ],
    windomCardTitle: <>Windom Peak 14,089' <span className="grade grade-c3">Easy Class 3</span></>,
    windomMeta: "West Ridge · 6 mi / 3,000' from camp · considerable exposure, rockfall, and route-finding above 13,000'",
    windomHeroCaption: "The west ridge from the saddle. The route follows the left (north) side of the crest, then threads two breaks near the top for the final Class 3 pitch.",
    windomSteps: [
      "From Twin Lakes stay right around the first lake, switchback up, and continue to a prominent cairn above 13,000' in the center of the upper basin, then a second cairn just east. Sunlight's cairns branch left here.",
      "For Windom, drop slightly and traverse the angled slabs right of the basin's center. This avoids the loose gully further right that people use as a shortcut and shouldn't.",
      "Follow slabs east to ~13,300', turn right, and climb to the Windom–Peak 18 saddle at 13,450'.",
      "West ridge: 650 feet, mostly on the left (north) side of the crest, following cairns to a small notch at 13,800'. Above the notch the blocks get bigger and the summit stays hidden until the last few moves.",
      "Near 13,900' stay left of the ridge. Two breaks in the ridge give Class 3 access to the final pitch. Scramble the summit blocks.",
      <><b>Do not descend the northwest face toward Sunlight</b> in summer — steep and loose. Return to the saddle and use the crossover described above.</>,
    ],
  },
  es: {
    kicker: 'Sábado, 4 de sep · Día de cumbres',
    heading: 'Windom, luego Sunlight, de vuelta para el almuerzo',
    desc: "Ambos picos se suben desde Twin Lakes a 12,500 pies. El sendero es excelente hasta los 13,000 pies y luego se convierte en escalada marcada con cairns sin una ruta continua. Las tormentas se forman al mediodía; el objetivo es alcanzar ambas cumbres antes de las 11 a.m.",
    stats: [
      { value: '~7 mi', label: 'campamento a campamento' },
      { value: "+4,000'", label: 'desnivel total' },
      { value: 'Clase 3', label: 'bloque Clase 4 opcional' },
    ],
    wcCaption0: "Vista al oeste desde la cumbre del Windom. Las agujas son el horizonte de las Needle Mountains; el lago de abajo está en la cuenca que acabas de escalar. Esta es la vista a las 8 a.m.",
    wcCaption1: "El Sunlight desde la cumbre del Windom. El cruce desciende al terreno plano a 13,300 pies (centro), luego sube a la derecha hacia la couloir de la cara sur.",
    swipe: 'Desliza para ver más',
    noteCompTitle: 'Comparado con el Keyhole del Longs',
    noteComp: "Más corto y menos sostenido que la secuencia Ledges–Trough–Narrows–Homestretch, pero con búsqueda de ruta más difícil: cairns en vez de marcas pintadas. La roca es más cuarcítica y fracturada que el granito del Longs: mejor fricción, más material suelto. Prueba los agarres. Las zapatillas de trekking agarran bien en fisuras; evita las zonas pulidas en cualquier losa mojada.",
    noteLightningTitle: 'El peligro es el rayo, no la roca',
    noteLightning: "Las tormentas de monzón se forman rápido sobre las Needles. El bloque cumbre del Sunlight y la cresta del Windom son los peores lugares donde estar cuando ocurren. Estar fuera de las cumbres antes de las 11 a.m. es la regla, y una salida a las 5 a.m. es lo que lo hace posible.",
    noteRopeTitle: '¿Cuerda? No.',
    noteRope: "No hay nada a lo que anclarse en estas rutas y dos escaladores encordados sin anclaje están peor que sin cuerda. Si las condiciones te hacen querer una, esa es tu señal de dar media vuelta.",
    routeDetailHeading: 'Detalle de la ruta',
    topoCaption: "Topo del Sunlight + Windom (14ers.com). Windom está a la derecha; la ruta del Sunlight (naranja) sube desde Twin Lakes por el sistema de couloirs. Punto de inicio (verde, abajo a la izquierda) = campamento.",
    sunlightCardTitle: <>Sunlight Peak 14,059' <span className="grade grade-c3">Clase 3</span><span className="grade grade-c4">Bloque Clase 4</span></>,
    sunlightMeta: "Cara Sur por el cruce desde Windom · añade ~1 mi / 1,000' · el bloque cumbre es el único movimiento de Clase 4 del viaje",
    sunlightBothCaption: "El cruce (azul) entre los dos picos. Desde el collado del Windom, baja al norte hasta los 13,300 pies, luego cruza al este para unirte a la ruta estándar de la cara sur del Sunlight.",
    sunlightSteps: [
      "Desde el collado Windom–Pico 18, baja al norte unos 150 pies hasta el terreno más plano cerca de los 13,300 pies. Cruza al noreste por losas de Clase 2 y sube por una pendiente fácil hasta interceptar la ruta estándar del Sunlight alrededor de los 13,500 pies.",
      "Sigue los cairns por el amplio sistema de couloirs hasta la muesca, luego una serie de movimientos de Clase 3 entre bloques — incluyendo un conocido apretón entre dos rocas — hasta la zona de cumbre.",
      "La cumbre verdadera es un bloque inclinado que requiere un paso expuesto de Clase 4 y un mantle sobre una superficie lisa con una caída seria al otro lado. Decide en el campamento, no sobre el bloque. Muchos lo tocan en vez de pararse encima; el bloque inmediatamente debajo es una cumbre legítima.",
      "Desciende por donde subiste. Windom más Sunlight por el cruce son unas 7 millas y 4,000 pies desde el campamento.",
    ],
    windomCardTitle: <>Windom Peak 14,089' <span className="grade grade-c3">Clase 3 fácil</span></>,
    windomMeta: "Cresta Oeste · 6 mi / 3,000 pies desde el campamento · exposición considerable, piedras sueltas y búsqueda de ruta por encima de los 13,000 pies",
    windomHeroCaption: "La cresta oeste desde el collado. La ruta sigue el lado izquierdo (norte) de la cresta, luego pasa por dos brechas cerca de la cima para el tramo final de Clase 3.",
    windomSteps: [
      "Desde Twin Lakes, rodea el primer lago por la derecha, sube en zigzag y continúa hasta un cairn prominente por encima de los 13,000 pies en el centro de la cuenca superior, luego un segundo cairn justo al este. Los cairns del Sunlight se bifurcan a la izquierda aquí.",
      "Para el Windom, baja ligeramente y cruza las losas inclinadas a la derecha del centro de la cuenca. Esto evita la couloir suelta más a la derecha que la gente usa como atajo y no debería.",
      "Sigue las losas hacia el este hasta ~13,300 pies, gira a la derecha y sube hasta el collado Windom–Pico 18 a 13,450 pies.",
      "Cresta oeste: 650 pies, mayormente por el lado izquierdo (norte) de la cresta, siguiendo cairns hasta una pequeña muesca a 13,800 pies. Por encima de la muesca los bloques se hacen más grandes y la cumbre permanece oculta hasta los últimos movimientos.",
      "Cerca de los 13,900 pies, mantente a la izquierda de la cresta. Dos brechas en la cresta dan acceso de Clase 3 al tramo final. Escala los bloques de cumbre.",
      <><b>No desciendas por la cara noroeste hacia el Sunlight</b> en verano — empinada y con material suelto. Regresa al collado y usa el cruce descrito arriba.</>,
    ],
  },
};

const TIMETABLE = {
  en: [
    { time: '4:00a', content: 'Alarm. Water, food, summit pack: layers, shell, 2 L, snacks, headlamp, first aid, satellite messenger, sun protection.' },
    { time: '5:00a', content: 'Moving by headlamp. Trail NE up the basin, left at the signed Twin Lakes junction at 11,200\', switchbacks past two stream crossings.' },
    { time: '6:20a', content: <><b>Twin Lakes, 12,500'.</b> Right around the first lake, switchback up, continue to the big cairn above 13,000'. Sunlight's cairns branch left here; go right for Windom.</> },
    { time: '7:15a', content: "Angled slabs to ~13,300', turn right up to the Windom–Peak 18 saddle at 13,450'. West ridge from here: 650 feet, mostly on the left side of the crest, cairned." },
    { time: '8:00a', content: <><b>Windom Peak, 14,089'.</b> Highest point in La Plata County and the whole San Juan River drainage. Photos, ten minutes, then down.</> },
    { time: '8:45a', content: "Back to the saddle. Drop north ~150' to flatter ground near 13,300', traverse NE across slabs, angle up to join the Sunlight South Face route at ~13,500'." },
    { time: '10:00a', content: <><b>Sunlight Peak, 14,059'.</b> The leaning summit block is an exposed Class 4 step and mantle with a serious drop behind it. Decide at camp, not on the block, whether you're touching it or standing on it.</> },
    { time: '10:30a', content: 'Down the gully, back past Twin Lakes. Clouds usually start stacking about now.' },
    { time: '1:00p', content: "Camp. Eat, filter, rehydrate, feet up. Pack everything you won't need in the morning so tomorrow starts fast." },
  ],
  es: [
    { time: '4:00a', content: 'Alarma. Agua, comida, mochila de cumbre: capas, chubasquero, 2 L, snacks, linterna frontal, primeros auxilios, comunicador satelital, protección solar.' },
    { time: '5:00a', content: 'En marcha con linterna frontal. Sendero al NE por la cuenca, a la izquierda en el cruce señalizado de Twin Lakes a 11,200 pies, zigzags más allá de dos cruces de arroyos.' },
    { time: '6:20a', content: <><b>Twin Lakes, 12,500 pies.</b> A la derecha del primer lago, sube en zigzag, continúa hasta el gran cairn por encima de los 13,000 pies. Los cairns del Sunlight se bifurcan a la izquierda; ve a la derecha para el Windom.</> },
    { time: '7:15a', content: "Losas inclinadas hasta ~13,300 pies, gira a la derecha hasta el collado Windom–Pico 18 a 13,450 pies. Cresta oeste desde aquí: 650 pies, mayormente por el lado izquierdo de la cresta, marcada con cairns." },
    { time: '8:00a', content: <><b>Windom Peak, 14,089 pies.</b> Punto más alto del condado de La Plata y de toda la cuenca del río San Juan. Fotos, diez minutos, y a bajar.</> },
    { time: '8:45a', content: "De vuelta al collado. Baja al norte ~150 pies hasta el terreno más plano cerca de los 13,300 pies, cruza al NE por las losas, sube en ángulo para unirte a la ruta de la cara sur del Sunlight a ~13,500 pies." },
    { time: '10:00a', content: <><b>Sunlight Peak, 14,059 pies.</b> El bloque cumbre inclinado requiere un paso expuesto de Clase 4 y un mantle con una caída seria al otro lado. Decide en el campamento, no sobre el bloque, si lo vas a tocar o a pararte encima.</> },
    { time: '10:30a', content: 'Baja por la couloir, de vuelta pasando Twin Lakes. Las nubes suelen empezar a acumularse alrededor de esta hora.' },
    { time: '1:00p', content: "Campamento. Come, filtra, rehidrátate, pies en alto. Empaca todo lo que no necesitarás mañana para que la salida sea rápida." },
  ],
};

export function SaturdaySection() {
  const { lang } = useLanguage();
  const t = T[lang];

  return (
    <section className="day-section" id="sat" data-section="sat">
      <div className="wrap">
        <div className="grid gap-[18px] items-end mb-[clamp(20px,3vw,40px)]">
          <div>
            <div className="kicker">{t.kicker}</div>
            <h2 className="text-[clamp(28px,5.5vw,52px)] font-cond font-semibold text-mt-50">{t.heading}</h2>
            <p className="text-[clamp(16px,1.8vw,18px)] text-mt-200 mt-3 max-w-[52ch]">{t.desc}</p>
          </div>
          <StatBlock stats={t.stats} />
        </div>

        <PhotoGroup images={WC_REEL}>
          <div className="reel two">
            <Figure src={WC_REEL[0]} alt="View from the summit of Windom Peak showing jagged rock towers, an alpine lake below, and a massive peak in the background" caption={t.wcCaption0} credit="Photo: Wikimedia Commons (CC BY-SA)" />
            <Figure src={WC_REEL[1]} alt="Sunlight Peak seen from the summit of Windom Peak with the connecting basin below" caption={t.wcCaption1} credit="Photo: Wikimedia Commons (CC BY 2.0)" />
          </div>
        </PhotoGroup>
        <p className="text-[12.5px] text-mt-400 mt-2 md:hidden">{t.swipe}</p>

        <div className="cols mt-8">
          <div>
            <Timetable entries={TIMETABLE[lang]} />
          </div>
          <div>
            <Note title={t.noteCompTitle}>{t.noteComp}</Note>
            <Note title={t.noteLightningTitle} variant="water">{t.noteLightning}</Note>
            <Note title={t.noteRopeTitle} variant="forest">{t.noteRope}</Note>
          </div>
        </div>

        {/* ── Route detail ── */}
        <h3 className="sub-heading mt-10">{t.routeDetailHeading}</h3>
        <Figure
          src={sunlightTopo}
          alt="14ers.com topographic map of the Sunlight Peak south face route showing Twin Lakes, the upper basin, and the routes to both summits"
          caption={t.topoCaption}
          credit="Map: 14ers.com"
          aspectRatio="4/3"
        />

        <div className="grid gap-4 md:grid-cols-2 mt-6">

          {/* ── Sunlight (first) ── */}
          <RouteCard defaultOpen title={t.sunlightCardTitle} meta={t.sunlightMeta}>
            <PhotoGroup images={SUNLIGHT_GROUP}>
              <Figure src={sunlightBoth} alt="Google Earth 3D view showing Sunlight Peak and Windom Peak with the crossover route in blue and the individual routes annotated" caption={t.sunlightBothCaption} aspectRatio="16/9" />
              <ol className="pl-5 mt-4 mb-2 space-y-2 text-mt-100 text-[15px]">
                {t.sunlightSteps.map((step, i) => <li key={i}>{step}</li>)}
              </ol>
              <div className="reel mt-4">
                {SUNLIGHT_PHOTOS.map((src, i) => (
                  <Figure key={i} src={src} alt={`Sunlight Peak route photo ${i + 1}`} />
                ))}
              </div>
              <p className="text-[12.5px] text-mt-400 mt-1 md:hidden">{t.swipe}</p>
            </PhotoGroup>
          </RouteCard>

          {/* ── Windom (second) ── */}
          <RouteCard defaultOpen title={t.windomCardTitle} meta={t.windomMeta}>
            <PhotoGroup images={WINDOM_GROUP}>
              <Figure src={windomHero} alt="Windom Peak summit ridge with the annotated west ridge route shown in pink" caption={t.windomHeroCaption} aspectRatio="16/9" />
              <ol className="pl-5 mt-4 mb-2 space-y-2 text-mt-100 text-[15px]">
                {t.windomSteps.map((step, i) => <li key={i}>{step}</li>)}
              </ol>
              <div className="reel mt-4">
                {WINDOM_PHOTOS.map((src, i) => (
                  <Figure key={i} src={src} alt={`Windom Peak route photo ${i + 1}`} />
                ))}
              </div>
              <p className="text-[12.5px] text-mt-400 mt-1 md:hidden">{t.swipe}</p>
            </PhotoGroup>
          </RouteCard>

        </div>
      </div>
    </section>
  );
}

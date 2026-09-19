import { Note } from '../ui/Note';
import { Timetable } from '../ui/Timetable';
import { Figure } from '../ui/Figure';
import { StatBlock } from '../ui/StatBlock';
import { useLanguage } from '../../context/LanguageContext';

const WC = 'https://commons.wikimedia.org/wiki/Special:FilePath';

const T = {
  en: {
    kicker: 'Thursday, Sep 2',
    heading: 'Leave work, land in the mountains',
    desc: 'You cannot fly into Durango and catch the train the same morning — the earliest DFW nonstop lands at 9:46 a.m. and the Needleton trains have already left. A Thursday evening flight gets you in by 9 p.m., a real night of sleep at altitude, and a relaxed walk to the depot Friday morning.',
    stats: [
      { value: '2h 10m', label: 'DFW → DRO nonstop' },
      { value: "6,512'", label: 'Durango elevation' },
      { value: '1880',   label: 'Durango founded' },
    ],
    mainCaption: "Main Avenue's twelve blocks of Victorian brick are a National Historic Landmark. The depot anchors the south end; the hotels, gear shops, and restaurants are a ten-minute walk north. The buildings date from 1880–1895, the same silver-boom decade that built the railroad.",
    historyHeading: 'Durango: built by a railroad, saved by one',
    h4_1: 'Founded 1880',
    p_1: 'Durango does not exist by accident. The Denver & Rio Grande Railroad platted the town in September 1880 on a river bench at the confluence of Lightner Creek and the Animas, specifically to serve as the smelting and supply hub for the silver mines forty miles north in Silverton. Within a year it had 2,000 residents, four hotels, and a newspaper. The Victorian commercial blocks you see on Main Avenue today were built almost entirely between 1880 and 1895, during the height of the silver boom.',
    h4_2: 'The Narrow Gauge, 1882',
    p_2: 'The D&RG pushed 45 miles of three-foot-gauge track north to Silverton in 1882, through canyon terrain so sheer that no wagon road could follow. The High Line — a shelf blasted from solid granite 400 feet above the Animas — cost what the railroad called "the most expensive mile ever built." At the peak of silver production in the late 1880s, ore trains ran daily. When silver prices collapsed in 1893, the narrow gauge had already woven itself into the landscape too deeply to pull out. It carried freight, passengers, and eventually Hollywood film crews (Butch Cassidy, Around the World in 80 Days), emerging as a tourist railroad by the 1950s. It has run continuously ever since.',
    h4_3: 'What it is today',
    p_3: 'The Durango & Silverton Narrow Gauge Railroad is a National Historic Landmark. The K-36 locomotives — the ones that pull your train — were built by Baldwin Locomotive Works in Philadelphia in 1925, burning bituminous coal in fireboxes designed for mountain grades. The roundhouse and repair shops behind the Durango depot are still fully operational, restoring and maintaining equipment that is now a century old. There are fewer than a dozen coal-fired steam railroads still running in North America; this is one of the finest. Ride in the open gondola if the weather allows — the cinders in your hair are part of the deal.',
    straterCaption: "The Strater, 1887. Henry Strater built it the same year Colorado's silver production peaked. Four stories of Romanesque brick; Louis L'Amour lived here off and on for decades.",
    animasCaption: "The Animas north of Main Ave. 'Río de las Ánimas Perdidas' — River of Lost Souls — named by Spanish explorers in the 1760s. Tomorrow you follow it 30 miles into the mountains.",
    swipe: 'Swipe for more',
    note1Title: 'Flight logistics',
    note1: '36 weekly American nonstops run DFW–DRO between 8:20 a.m. and 9:00 p.m. None of the morning departures beat the Needleton train. A Thursday-evening arrival gives you a real bed at altitude before the big day, and keeps all of Friday free for the train and the hike in. Book trip insurance that covers the train fare — a weather-cancelled regional jet is the one thing that can unravel the whole trip.',
    note2Title: 'The depot in the morning',
    note2: 'The D&SNG depot at 479 Main Ave has operated continuously since 1882. The building you check into is the original — brick, gingerbread trim, a covered platform above the Animas. Arrive by 7:30 a.m. to check the pack into the baggage car and find a seat in the open gondola before it fills. The train boards without the ceremony of a modern rail terminal; pay attention to the crew.',
    note3Title: "Fuel, the one thing that can't fly",
    note3: "Isobutane canisters are banned on aircraft under any circumstance. Backcountry Experience (780 Main) and Pine Needle Mountaineering (835 Main) open around 8 a.m. — tight against an 8:30 departure. Walmart on US-160 is open until midnight. A pickup order placed from Dallas before you leave removes all the risk.",
  },
  es: {
    kicker: 'Jueves, 2 de sep',
    heading: 'Sal del trabajo, aterriza en las montañas',
    desc: 'No puedes volar a Durango y tomar el tren esa misma mañana — el vuelo directo más temprano desde DFW llega a las 9:46 a.m. y los trenes a Needleton ya salieron. Un vuelo el jueves por la noche te llega a las 9 p.m., con una noche real de descanso a altitud y una caminata tranquila hasta la estación el viernes por la mañana.',
    stats: [
      { value: '2h 10m', label: 'DFW → DRO sin escala' },
      { value: "6,512'", label: 'altitud de Durango' },
      { value: '1880',   label: 'fundación de Durango' },
    ],
    mainCaption: 'Los doce bloques de ladrillo victoriano de Main Avenue son un Monumento Histórico Nacional. La estación ancla el extremo sur; hoteles, tiendas de equipamiento y restaurantes están a diez minutos a pie hacia el norte. Los edificios datan de 1880–1895, la misma década del auge de la plata que construyó el ferrocarril.',
    historyHeading: 'Durango: construida por un ferrocarril, salvada por él',
    h4_1: 'Fundada en 1880',
    p_1: 'Durango no existe por accidente. El ferrocarril Denver & Rio Grande trazó la ciudad en septiembre de 1880 a orillas del río Animas, específicamente para servir como centro de fundición y suministro para las minas de plata a cuarenta millas al norte en Silverton. En menos de un año contaba con 2,000 habitantes, cuatro hoteles y un periódico. Los edificios comerciales victorianos que ves hoy en Main Avenue fueron construidos casi en su totalidad entre 1880 y 1895, durante el apogeo del auge de la plata.',
    h4_2: 'El Ferrocarril de Vía Estrecha, 1882',
    p_2: 'La D&RG extendió 45 millas de vía de tres pies de ancho hacia el norte hasta Silverton en 1882, a través de un terreno tan escarpado que ningún camino de carretas podía seguirlo. La High Line — una repisa volada en el granito macizo a 400 pies sobre el Animas — costó lo que el ferrocarril llamó "la milla más cara jamás construida". Cuando los precios de la plata se derrumbaron en 1893, el ferrocarril de vía estrecha ya estaba tan entretejido en el paisaje que era imposible retirarlo. Transportó carga, pasajeros y eventualmente equipos de rodaje de Hollywood (Butch Cassidy, La vuelta al mundo en 80 días), convirtiéndose en ferrocarril turístico en los años 50. Ha funcionado sin interrupciones desde entonces.',
    h4_3: 'Lo que es hoy',
    p_3: 'El Ferrocarril de Vía Estrecha Durango & Silverton es un Monumento Histórico Nacional. Las locomotoras K-36 — las que tiran de tu tren — fueron fabricadas por Baldwin Locomotive Works en Filadelfia en 1925, quemando carbón bituminoso en hogares diseñados para pendientes de montaña. Las instalaciones de mantenimiento detrás del depósito de Durango siguen siendo totalmente operativas, restaurando equipos que ahora tienen un siglo de antigüedad. Hay menos de una docena de ferrocarriles de vapor a carbón que todavía funcionan en América del Norte; este es uno de los mejores. Viaja en el vagón abierto si el tiempo lo permite — el hollín en el cabello es parte del trato.',
    straterCaption: 'El Strater, 1887. Henry Strater lo construyó el mismo año que alcanzó su pico la producción de plata en Colorado. Cuatro pisos de ladrillo románico; Louis L\'Amour vivió aquí intermitentemente durante décadas.',
    animasCaption: "El Animas al norte de Main Ave. 'Río de las Ánimas Perdidas', así llamado por los exploradores españoles en la década de 1760. Mañana lo seguirás 30 millas adentro de las montañas.",
    swipe: 'Desliza para ver más',
    note1Title: 'Logística del vuelo',
    note1: '36 vuelos directos semanales de American operan DFW–DRO entre las 8:20 a.m. y las 9:00 p.m. Ninguna salida matutina bate el tren a Needleton. Una llegada el jueves por la noche te da una cama real a altitud antes del gran día y mantiene todo el viernes libre para el tren y la caminata de ingreso. Contrata un seguro de viaje que cubra la tarifa del tren — un vuelo regional cancelado por el clima es lo único que puede arruinar todo el viaje.',
    note2Title: 'La estación por la mañana',
    note2: 'El depósito del D&SNG en 479 Main Ave ha funcionado sin interrupciones desde 1882. El edificio donde te presentas es el original: ladrillo, detalles de madera, un andén cubierto sobre el Animas. Llega antes de las 7:30 a.m. para dejar la mochila en el vagón de equipajes y encontrar un asiento en el vagón abierto antes de que se llene. El tren aborda sin la ceremonia de una terminal ferroviaria moderna; presta atención al personal.',
    note3Title: 'El combustible, lo único que no puede volar',
    note3: 'Los cartuchos de isobutano están prohibidos en los aviones bajo cualquier circunstancia. Backcountry Experience (780 Main) y Pine Needle Mountaineering (835 Main) abren alrededor de las 8 a.m. — muy ajustado para una salida a las 8:30. El Walmart en US-160 está abierto hasta la medianoche. Un pedido de recogida desde Dallas antes de salir elimina todo el riesgo.',
  },
};

const TIMETABLE = {
  en: [
    { time: '5:00p', content: 'Out of the office. Bag is already packed except the fuel canister. Poles, stove, and everything sharp go in the checked pack.' },
    { time: '7:00p', timeLabel: '±', content: <>American nonstop from Terminal E, a CRJ. Take the earliest evening departure your calendar allows; the 9:00 p.m. is the last one, and a cancelled final flight means a missed, non-refundable, sold-out train.</> },
    { time: '8:30p', content: <>Land DRO. The airport sits 14 miles southeast of downtown on US-160 — about 15 minutes. Rental car or shuttle. <b>If the Walmart on US-160 is still open, buy the isobutane canister tonight</b>; the gear shops open at 8 a.m., which is tight against an 8:30 train.</> },
    { time: '9:15p', content: <>Hotel on or near Main Ave so you can walk to the depot in the morning. The <b>Strater Hotel</b> (1887) is two blocks from the depot — Henry Strater built it the same year the silver boom peaked; Louis L'Amour wrote westerns in room 222 above the Diamond Belle Saloon piano. The <b>General Palmer</b> next door is quieter and dates to 1898. Either one puts the depot at a seven-minute walk. Confirm late check-in when you book.</> },
    { time: '10:00p', content: <>A full liter of water, a big glass more, then sleep. From 430 feet in Dallas to 6,512 feet in one flight is manageable; the jump to 11,000 feet tomorrow is not. Tonight's sleep at altitude is the only preparation you get.</> },
  ],
  es: [
    { time: '5:00p', content: 'Sal de la oficina. La mochila ya está lista excepto el cartucho de gas. Los bastones, el hornillo y todo lo afilado van en el equipaje documentado.' },
    { time: '7:00p', timeLabel: '±', content: <>Vuelo directo de American desde la Terminal E, en un CRJ. Toma el vuelo más temprano de la tarde que tu agenda permita; el de las 9:00 p.m. es el último, y un vuelo cancelado significa perder el tren no reembolsable y sin plazas disponibles.</> },
    { time: '8:30p', content: <>Aterriza en DRO. El aeropuerto está a 14 millas al sureste del centro, unos 15 minutos. Alquiler de auto o transporte. <b>Si el Walmart en US-160 sigue abierto, compra el cartucho de isobutano esta noche</b>; las tiendas de equipamiento abren a las 8 a.m., muy ajustado para el tren de las 8:30.</> },
    { time: '9:15p', content: <>Hotel en o cerca de Main Ave para poder caminar hasta la estación por la mañana. El <b>Strater Hotel</b> (1887) está a dos cuadras de la estación — Henry Strater lo construyó el mismo año que alcanzó su pico el auge de la plata; Louis L'Amour escribió novelas del oeste en la habitación 222 sobre el piano del Diamond Belle Saloon. El <b>General Palmer</b> al lado es más tranquilo y data de 1898. Ambos quedan a siete minutos a pie de la estación. Confirma el check-in tardío al reservar.</> },
    { time: '10:00p', content: <>Un litro completo de agua, un vaso más, y a dormir. Pasar de 430 pies en Dallas a 6,512 pies en un vuelo es manejable; el salto a 11,000 pies mañana no lo es. El sueño de esta noche a altitud es la única preparación que tendrás.</> },
  ],
};

export function ThursdaySection() {
  const { lang } = useLanguage();
  const t = T[lang];

  return (
    <section className="day-section" id="thu" data-section="thu">
      <div className="wrap">

        <div className="grid gap-[18px] items-end mb-[clamp(20px,3vw,40px)]">
          <div>
            <div className="kicker">{t.kicker}</div>
            <h2 className="text-[clamp(28px,5.5vw,52px)] font-cond font-semibold text-mt-50">
              {t.heading}
            </h2>
            <p className="text-[clamp(16px,1.8vw,18px)] text-mt-200 mt-3 max-w-[52ch]">{t.desc}</p>
          </div>
          <StatBlock stats={t.stats} />
        </div>

        <Figure
          src={`${WC}/Historic_Main_in_Downtown_Durango.JPG?width=1600`}
          sizes="(min-width:1140px) 1140px, 100vw"
          alt="Main Avenue in downtown Durango, brick storefronts under a mountain sky"
          caption={t.mainCaption}
          credit="Photo: Wikimedia Commons"
          aspectRatio="16/10"
        />

        <div className="my-8 p-5 border border-mt-600" style={{ background: '#0F1C26' }}>
          <h3 className="sub-heading" style={{ marginTop: 0 }}>{t.historyHeading}</h3>
          <div className="three mt-4">
            <div>
              <h4 className="font-cond text-[18px] font-semibold text-rail mb-2">{t.h4_1}</h4>
              <p className="text-mt-200 text-[15px]">{t.p_1}</p>
            </div>
            <div>
              <h4 className="font-cond text-[18px] font-semibold text-rail mb-2">{t.h4_2}</h4>
              <p className="text-mt-200 text-[15px]">{t.p_2}</p>
            </div>
            <div>
              <h4 className="font-cond text-[18px] font-semibold text-rail mb-2">{t.h4_3}</h4>
              <p className="text-mt-200 text-[15px]">{t.p_3}</p>
            </div>
          </div>
        </div>

        <div className="cols">
          <div>
            <Timetable entries={TIMETABLE[lang]} />
            <Note title={t.note1Title} variant="water">{t.note1}</Note>
          </div>
          <div>
            <div className="reel two">
              <Figure
                src={`${WC}/Strater_Hotel_-_Durango,_CO.jpg?width=1000`}
                alt="The red-brick Victorian Strater Hotel on Main Avenue in Durango"
                caption={t.straterCaption}
                credit="Photo: Wikimedia Commons"
              />
              <Figure
                src={`${WC}/Animas_River_just_north_of_downtown_Durango,_CO.jpg?width=1000`}
                alt="The Animas River flowing past cottonwoods just north of downtown Durango"
                caption={t.animasCaption}
                credit="Photo: Wikimedia Commons"
              />
            </div>
            <p className="text-[12.5px] text-mt-400 mt-2 md:hidden">{t.swipe}</p>
            <Note title={t.note2Title}>{t.note2}</Note>
            <Note title={t.note3Title}>{t.note3}</Note>
          </div>
        </div>
      </div>
    </section>
  );
}

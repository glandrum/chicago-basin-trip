import { Note } from '../ui/Note';
import { Timetable } from '../ui/Timetable';
import { Figure } from '../ui/Figure';
import { StatBlock } from '../ui/StatBlock';
import { useLanguage } from '../../context/LanguageContext';

const WC = 'https://commons.wikimedia.org/wiki/Special:FilePath';

const T = {
  en: {
    outDay: 'Sunday, Sep 5',
    townDay: 'Monday, Sep 6',
    kicker: 'Train day out',
    heading: 'Walk down, flag the train, spend a day in town',
    desc: (townDay: string) =>
      `The descent takes longer than tired legs want it to. The only unforgiving moment is the afternoon train — miss it and you spend another night on the platform. Once you're back in Durango, you have ${townDay} to yourself before the evening flight home.`,
    stats: (outDay: string, townDay: string) => [
      { value: '6 mi', label: `${outDay} descent` },
      { value: "−2,900'", label: 'to Needleton' },
      { value: '~8:00p', label: `${townDay} evening flight` },
    ],
    mondayHeading: (townDay: string) => `${townDay} · A day in Durango`,
    noteTitle: 'Why the evening flight is the right call',
    noteBody: (townDay: string) =>
      `The train reaches Durango around 6 p.m. An 8:20 a.m. departure the next morning means waking at 5:30 a.m. in the same clothes, half-recovered, sprinting to an airport that has nothing to offer at that hour. The evening flight gives you the hot springs, a real meal, the roundhouse, and the unhurried version of the whole trip. You land home late on ${townDay} instead of midday — the difference is one night's sleep, not one day's work.`,
    swipe: 'Swipe for more',
    trainCaption: 'The southbound comes down the gorge mid-afternoon. Stand on the platform where the engineer can see you — it will not stop for someone still tying a boot.',
    durangoCaption: 'Durango on a clear afternoon. The hot springs are 6 miles up US-550; the roundhouse is behind the depot at the south end of Main. You have the whole day.',
  },
  es: {
    outDay: 'Domingo, 5 de sep',
    townDay: 'Lunes, 6 de sep',
    kicker: 'Día del tren de vuelta',
    heading: 'Baja a pie, para el tren, pasa el día en el pueblo',
    desc: (townDay: string) =>
      `El descenso tarda más de lo que las piernas cansadas quisieran. El único momento sin margen de error es el tren de la tarde — si lo pierdes, pasas otra noche en el andén. Una vez de vuelta en Durango, tienes el ${townDay} para ti antes del vuelo nocturno a casa.`,
    stats: (outDay: string, townDay: string) => [
      { value: '6 mi', label: `descenso del ${outDay}` },
      { value: "−2,900'", label: 'hasta Needleton' },
      { value: '~8:00p', label: `vuelo nocturno del ${townDay}` },
    ],
    mondayHeading: (townDay: string) => `${townDay} · Un día en Durango`,
    noteTitle: 'Por qué el vuelo nocturno es la mejor opción',
    noteBody: (townDay: string) =>
      `El tren llega a Durango alrededor de las 6 p.m. Un vuelo a las 8:20 a.m. al día siguiente significa despertarse a las 5:30 a.m. con la misma ropa, a medio recuperarse, corriendo a un aeropuerto que no ofrece nada a esa hora. El vuelo nocturno te da las aguas termales, una comida de verdad, la rotonda de locomotoras, y la versión relajada de todo el viaje. Llegas a casa tarde el ${townDay} en vez de al mediodía — la diferencia es una noche de sueño, no un día de trabajo.`,
    swipe: 'Desliza para ver más',
    trainCaption: 'El tren en dirección sur baja por el cañón a media tarde. Párate en el andén donde el maquinista pueda verte — no parará por alguien que todavía está atando las botas.',
    durangoCaption: 'Durango en una tarde despejada. Las aguas termales están a 6 millas por la US-550; la rotonda de locomotoras está detrás de la estación al sur de Main. Tienes todo el día.',
  },
};

const TIMETABLE_SUNDAY = {
  en: [
    {
      time: '6:00a',
      content: "Up, coffee, pack. Wipe down the tent; pee on rocks away from camp so the goats don't dig up the meadow after you leave.",
    },
    {
      time: '8:00a',
      content: 'Leave camp. 2.5 to 3.5 hours down. Start early — there is nothing to gain from lingering and the train waits for no one.',
    },
    {
      time: '11:30a',
      content: 'Needleton. Lunch on the platform, feet in the Animas, and stand where the engineer can see you. Be there at least 30 minutes early.',
    },
    {
      time: '3:30p',
      timeLabel: '±',
      rail: true,
      content: (
        <><b>Flag the southbound.</b> It's the same train coming down from Silverton, running all day. Pack into the baggage car, find a seat, watch the gorge unwind in the other direction.</>
      ),
    },
    {
      time: '6:00p',
      rail: true,
      content: 'Durango depot. Shower, dinner, and a real bed. The heavy work is done.',
    },
  ],
  es: [
    {
      time: '6:00a',
      content: "Levantarse, café, empacar. Limpia la tienda; orina sobre rocas lejos del campamento para que las cabras no excaven el prado después de que te vayas.",
    },
    {
      time: '8:00a',
      content: 'Sal del campamento. 2.5 a 3.5 horas bajando. Empieza temprano — no hay nada que ganar quedándose y el tren no espera a nadie.',
    },
    {
      time: '11:30a',
      content: 'Needleton. Almuerza en el andén, pies en el Animas, y párate donde el maquinista pueda verte. Llega al menos 30 minutos antes.',
    },
    {
      time: '3:30p',
      timeLabel: '±',
      rail: true,
      content: (
        <><b>Para el tren en dirección sur.</b> Es el mismo tren que baja desde Silverton, circulando todo el día. Mete el equipo en el vagón de equipaje, busca un asiento, contempla cómo el cañón se despliega en la otra dirección.</>
      ),
    },
    {
      time: '6:00p',
      rail: true,
      content: 'Estación de Durango. Ducha, cena y una cama de verdad. El trabajo duro está hecho.',
    },
  ],
};

const TIMETABLE_MONDAY = {
  en: [
    {
      time: '8:00a',
      content: (
        <>
          Sleep in. Actual breakfast at a table — <b>Carver Brewing</b> (1022 Main)
          opens at 6:30 a.m. and does the best breakfast burrito in the San Juans.
          Real coffee. No camp stove.
        </>
      ),
    },
    {
      time: '9:30a',
      content: (
        <>
          <b>Trimble Hot Springs</b>, 6 miles north on US-550. Three outdoor thermal
          pools at 104–108°F, mountain views over the Animas Valley, and nobody in a
          hurry. $18–22 day use, no reservation needed on weekdays. Bring the clothes
          you wore out of the wilderness — you will want to shower before you soak,
          and the locker room has hot water. This is what your legs need after
          descending 2,900 feet on tired ankles.
        </>
      ),
    },
    {
      time: '11:30a',
      content: (
        <>
          Back downtown. Walk through the <b>D&amp;SNG depot complex</b> — the 1882
          roundhouse behind the station is still fully operational, with K-36 and K-28
          locomotives in various states of service. This is the only place in North
          America where you can watch century-old steam engines being maintained as
          daily working equipment. No admission needed to see the yard through the fence;
          ask at the ticket counter about roundhouse tours if they're running.
        </>
      ),
    },
    {
      time: '1:00p',
      content: (
        <>
          Lunch. <b>Steamworks Brewing</b> (801 E 2nd Ave) handles the combination of
          good food and the fact that you haven't been clean in four days without
          judgment. Or walk Main Ave and find whatever looks right — the historic
          district has enough restaurants that you won't need a reservation for lunch
          on a weekday.
        </>
      ),
    },
    {
      time: '3:00p',
      content: (
        <>
          Optional: the <b>Animas River Trail</b> runs 7 paved miles from downtown
          through Oxbow Park and back — flat, river alongside, no elevation change.
          Easy on the legs, good way to see the town from the water side. Or walk Main
          Ave: the gear shops (Backcountry Experience, Pine Needle Mountaineering)
          are worth browsing for what you'd do differently next time.
        </>
      ),
    },
    {
      time: '5:30p',
      content: 'Return rental car if you have one — the airport is 14 miles southeast, allow extra time. Check in, get through security. DRO is a small airport; 45 minutes before departure is enough.',
    },
    {
      time: '~8:00p',
      rail: true,
      content: (
        <>
          <b>Evening nonstop to DFW.</b> The last American departure runs around
          8–9 p.m. depending on the season; confirm the exact schedule when you
          book the outbound. You land around 10:30–11:00 p.m. in Dallas —
          late enough that traffic is gone, early enough that it's still Monday, Sep 6.
        </>
      ),
    },
  ],
  es: [
    {
      time: '8:00a',
      content: (
        <>
          Levántate tarde. Desayuno de verdad en una mesa — <b>Carver Brewing</b> (1022 Main)
          abre a las 6:30 a.m. y tiene el mejor burrito de desayuno de los San Juans.
          Café de verdad. Sin hornillo de campamento.
        </>
      ),
    },
    {
      time: '9:30a',
      content: (
        <>
          <b>Trimble Hot Springs</b>, 6 millas al norte por la US-550. Tres piscinas
          termales al aire libre a 40–42°C, vistas a las montañas sobre el Valle del
          Animas, y nadie con prisa. $18–22 de entrada diaria, sin reserva necesaria entre
          semana. Trae la ropa que llevaste al salir de la naturaleza — querrás ducharte
          antes de bañarte, y el vestuario tiene agua caliente. Esto es lo que necesitan
          tus piernas después de descender 900 metros con los tobillos cansados.
        </>
      ),
    },
    {
      time: '11:30a',
      content: (
        <>
          De vuelta al centro. Pasea por el <b>complejo de la estación D&amp;SNG</b> —
          la rotonda de 1882 detrás de la estación sigue totalmente operativa, con
          locomotoras K-36 y K-28 en distintos estados de servicio. Este es el único
          lugar en Norteamérica donde puedes ver locomotoras de vapor centenarias siendo
          mantenidas como equipo de trabajo diario. No necesitas entrada para ver el
          patio desde la valla; pregunta en taquilla sobre visitas guiadas a la rotonda
          si están disponibles.
        </>
      ),
    },
    {
      time: '1:00p',
      content: (
        <>
          Almuerzo. <b>Steamworks Brewing</b> (801 E 2nd Ave) combina buena comida y el
          hecho de que llevas cuatro días sin lavarte, sin juzgarte. O pasea por Main Ave
          y elige lo que mejor te parezca — el distrito histórico tiene suficientes
          restaurantes para no necesitar reserva en almuerzo entre semana.
        </>
      ),
    },
    {
      time: '3:00p',
      content: (
        <>
          Opcional: el <b>Animas River Trail</b> recorre 11 km pavimentados desde el
          centro pasando por Oxbow Park y de vuelta — llano, con el río al lado, sin
          cambio de altitud. Fácil para las piernas, buena forma de ver el pueblo desde
          el lado del agua. O pasea por Main Ave: las tiendas de equipo (Backcountry
          Experience, Pine Needle Mountaineering) merecen una visita para pensar en lo
          que harías diferente la próxima vez.
        </>
      ),
    },
    {
      time: '5:30p',
      content: 'Devuelve el coche de alquiler si tienes uno — el aeropuerto está a 22 km al sureste, deja tiempo extra. Factura y pasa el control de seguridad. DRO es un aeropuerto pequeño; 45 minutos antes de la salida es suficiente.',
    },
    {
      time: '~8:00p',
      rail: true,
      content: (
        <>
          <b>Vuelo directo nocturno a DFW.</b> La última salida de American opera
          alrededor de las 8–9 p.m. según la temporada; confirma el horario exacto cuando
          reserves el vuelo de ida. Llegas a Dallas alrededor de las 10:30–11:00 p.m. —
          suficientemente tarde para que no haya tráfico, suficientemente temprano para
          que todavía sea el lunes, 6 de sep.
        </>
      ),
    },
  ],
};

export function SundaySection() {
  const { lang } = useLanguage();
  const t = T[lang];
  const { outDay, townDay } = t;

  return (
    <section className="day-section" id="sun" data-section="sun">
      <div className="wrap">

        <div className="grid gap-[18px] items-end mb-[clamp(20px,3vw,40px)]">
          <div>
            <div className="kicker">
              {outDay} · <span className="pto-badge" style={{ background: '#8B6020' }}>{t.kicker}</span>
            </div>
            <h2 className="text-[clamp(28px,5.5vw,52px)] font-cond font-semibold text-mt-50">
              {t.heading}
            </h2>
            <p className="text-[clamp(16px,1.8vw,18px)] text-mt-200 mt-3 max-w-[52ch]">
              {t.desc(townDay)}
            </p>
          </div>
          <StatBlock stats={t.stats(outDay, townDay)} />
        </div>

        <div className="cols">
          <div>
            <Timetable entries={TIMETABLE_SUNDAY[lang]} />

            <div className="mt-6">
              <h3 className="sub-heading" style={{ marginTop: 0 }}>
                {t.mondayHeading(townDay)}
              </h3>
              <Timetable entries={TIMETABLE_MONDAY[lang]} />
            </div>

            <Note title={t.noteTitle} variant="water">
              {t.noteBody(townDay)}
            </Note>
          </div>

          <div>
            <div className="reel two">
              <Figure
                src={`${WC}/Durango_and_Silverton_NGRR_May_2024-m1.jpg?width=1000`}
                alt="The Durango & Silverton train in the Animas canyon, seen from trackside"
                caption={t.trainCaption}
                credit="Photo: Wikimedia Commons"
              />
              <Figure
                src={`${WC}/Blue_Winter_Skies_Hug_the_Durango_Skyline.JPG?width=1000`}
                alt="Downtown Durango's historic buildings under a blue sky"
                caption={t.durangoCaption}
                credit="Photo: Wikimedia Commons (CC BY-SA)"
              />
            </div>
            <p className="text-[12.5px] text-mt-400 mt-2 md:hidden">{t.swipe}</p>
          </div>
        </div>

      </div>
    </section>
  );
}

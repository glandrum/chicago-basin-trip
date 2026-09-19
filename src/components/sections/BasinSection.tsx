import { Note } from '../ui/Note';
import { useLanguage } from '../../context/LanguageContext';

const T = {
  en: {
    kicker: 'Altitude, weather, goats, money',
    heading: 'The basin has rules of its own',
    altitudeHeading: 'Altitude',
    altitude1: "Dallas is 430'. Camp is 11,000' and the summits are over 14,000', and you climb on your second morning up there, which is the roughest timing for acclimatization there is. The Durango night helps. Water helps more than anything: drink from the moment you land, skip alcohol until Sunday night.",
    altitude2: "Some people ask their doctor about acetazolamide for trips like this. That's a conversation for you and your physician.",
    weatherHeading: 'Weather',
    weather1: "July and August are monsoon: clear mornings, storms by noon, often earlier. Early to mid-September is usually the best window, drier and quieter with cold nights, and the first snow can land any day. Check 14ers.com Peak Conditions the week before and the NOAA point forecast for 37.62, −107.59 before you board; there are no updates once you're on the train.",
    weather2: "Rain the day before doesn't shut these routes down. Slabs dry within a couple of hours of sun. The Sunlight gully holds moisture longest.",
    goatsHeading: 'Mountain goats',
    goats1: "A resident herd, habituated to people, relentless about salt. They lick sweaty straps, chew pole grips, and dig up the ground where anyone has urinated. Pee on bare rock well away from camp, never leave gear outside the tent unattended, and don't feed or approach them. Marmots take the hip belts and boots you leave out at night.",
    budgetHeading: 'Budget, per person, flying',
    budgetRows: [
      { label: 'DFW–DRO round trip, Thursday evening / Monday early', val: '$350–650' },
      { label: 'Rental car, Thursday to Monday', val: '$120–200' },
      { label: 'Durango hotel, Thursday and Sunday', val: '$300–450' },
      { label: 'Train, backpacker fare to Needleton, round trip', val: '$130–160' },
      { label: 'Fuel, food, incidentals', val: '$100–150' },
    ],
    budgetTotal: 'Total',
    budgetTotalVal: '$1,000–1,600',
    bookHeading: 'Book, in this order',
    bookItems: [
      <>
        <a href="https://www.durangotrain.com" target="_blank" rel="noopener">
          Durango &amp; Silverton
        </a>
        : the Needleton backpacker fare sells out weeks to months ahead in July and August.
        This ticket sets every other date.
      </>,
      'American nonstops, Thursday evening out and the first Monday flight back.',
      'Main Ave hotel for Thursday and Sunday, late check-in confirmed.',
      'Rental car or airport shuttle.',
      <>
        The week before:{' '}
        <a
          href="https://www.14ers.com/php14ers/peakstatus_peak.php?peakparm=10033"
          target="_blank"
          rel="noopener"
        >
          peak conditions
        </a>
        , forecast, and a pickup order for one fuel canister.
      </>,
    ],
    permitTitle: 'Permits and rules',
    permitBody: "No permit is currently required for Weminuche backcountry travel; confirm with the San Juan National Forest, Columbine Ranger District, before you go. Party limit 15. No campfires in Chicago Basin. Camp 100' from water. No dogs on the train.",
  },
  es: {
    kicker: 'Altitud, clima, cabras, presupuesto',
    heading: 'La cuenca tiene sus propias reglas',
    altitudeHeading: 'Altitud',
    altitude1: "Dallas está a 130 m. El campamento está a 3,350 m y las cumbres superan los 4,270 m, y subes en tu segunda mañana allí arriba, que es el peor momento para la aclimatación. La noche en Durango ayuda. El agua ayuda más que cualquier cosa: bebe desde el momento en que aterrizas, evita el alcohol hasta el domingo por la noche.",
    altitude2: "Algunas personas consultan a su médico sobre la acetazolamida para viajes como este. Esa es una conversación entre tú y tu médico.",
    weatherHeading: 'Clima',
    weather1: "Julio y agosto son monzón: mañanas despejadas, tormentas al mediodía, a menudo antes. Principios o mediados de septiembre suelen ser la mejor ventana, más seco y tranquilo con noches frías, y la primera nieve puede caer cualquier día. Revisa las condiciones del pico en 14ers.com la semana anterior y el pronóstico puntual de la NOAA para 37.62, −107.59 antes de embarcar; no habrá actualizaciones una vez en el tren.",
    weather2: "La lluvia del día anterior no cierra estas rutas. Las losas se secan en un par de horas de sol. La couloir del Sunlight retiene la humedad más tiempo.",
    goatsHeading: 'Cabras montesas',
    goats1: "Una manada residente, habituada a las personas, implacable con la sal. Lamen las correas sudadas, mastican los mangos de los bastones y excavan el suelo donde alguien ha orinado. Orina sobre roca desnuda bien lejos del campamento, nunca dejes el equipo fuera de la tienda sin vigilancia, y no les des de comer ni te acerques a ellas. Las marmotas se llevan los cinturones de cadera y las botas que dejas fuera por la noche.",
    budgetHeading: 'Presupuesto, por persona, en avión',
    budgetRows: [
      { label: 'DFW–DRO ida y vuelta, jueves por la noche / lunes temprano', val: '$350–650' },
      { label: 'Coche de alquiler, jueves a lunes', val: '$120–200' },
      { label: 'Hotel en Durango, jueves y domingo', val: '$300–450' },
      { label: 'Tren, tarifa mochilero a Needleton, ida y vuelta', val: '$130–160' },
      { label: 'Combustible, comida, imprevistos', val: '$100–150' },
    ],
    budgetTotal: 'Total',
    budgetTotalVal: '$1,000–1,600',
    bookHeading: 'Reserva, en este orden',
    bookItems: [
      <>
        <a href="https://www.durangotrain.com" target="_blank" rel="noopener">
          Durango &amp; Silverton
        </a>
        : la tarifa mochilero a Needleton se agota semanas o meses antes en julio y agosto.
        Este billete determina todas las demás fechas.
      </>,
      'Vuelos directos de American, salida el jueves por la noche y regreso en el primer vuelo del lunes.',
      'Hotel en Main Ave para el jueves y el domingo, con check-in tardío confirmado.',
      'Coche de alquiler o transporte al aeropuerto.',
      <>
        La semana anterior:{' '}
        <a
          href="https://www.14ers.com/php14ers/peakstatus_peak.php?peakparm=10033"
          target="_blank"
          rel="noopener"
        >
          condiciones del pico
        </a>
        , pronóstico meteorológico, y encarga un cartucho de combustible para recoger.
      </>,
    ],
    permitTitle: 'Permisos y normas',
    permitBody: "Actualmente no se requiere permiso para el senderismo en el Weminuche; confirma con el San Juan National Forest, Columbine Ranger District, antes de ir. Límite de grupo: 15 personas. No se permiten hogueras en la Cuenca de Chicago. Campa a más de 30 m del agua. No se admiten perros en el tren.",
  },
};

export function BasinSection() {
  const { lang } = useLanguage();
  const t = T[lang];

  return (
    <section className="day-section" id="basin" data-section="basin">
      <div className="wrap">
        <div className="mb-[clamp(20px,3vw,40px)]">
          <div className="kicker">{t.kicker}</div>
          <h2 className="text-[clamp(28px,5.5vw,52px)] font-cond font-semibold text-mt-50">
            {t.heading}
          </h2>
        </div>

        <div className="three">
          <div>
            <h3 className="font-cond text-[clamp(20px,3vw,26px)] font-semibold mb-3 pb-2 border-b border-mt-600 text-mt-100">
              {t.altitudeHeading}
            </h3>
            <p className="text-mt-200">{t.altitude1}</p>
            <p className="text-mt-200">{t.altitude2}</p>
          </div>
          <div>
            <h3 className="font-cond text-[clamp(20px,3vw,26px)] font-semibold mb-3 pb-2 border-b border-mt-600 text-mt-100">
              {t.weatherHeading}
            </h3>
            <p className="text-mt-200">{t.weather1}</p>
            <p className="text-mt-200">{t.weather2}</p>
          </div>
          <div>
            <h3 className="font-cond text-[clamp(20px,3vw,26px)] font-semibold mb-3 pb-2 border-b border-mt-600 text-mt-100">
              {t.goatsHeading}
            </h3>
            <p className="text-mt-200">{t.goats1}</p>
          </div>
        </div>

        <div className="cols mt-10">
          <div>
            <h3 className="font-cond text-[clamp(20px,3vw,26px)] font-semibold mb-4 text-mt-100">
              {t.budgetHeading}
            </h3>
            <dl className="border-t-2 border-mt-400 m-0">
              {t.budgetRows.map((row) => (
                <div key={row.label} className="budget-row">
                  <dt className="text-mt-200">{row.label}</dt>
                  <dd className="budget-value m-0">{row.val}</dd>
                </div>
              ))}
              <div className="budget-row total">
                <dt className="text-mt-50">{t.budgetTotal}</dt>
                <dd className="budget-value m-0">{t.budgetTotalVal}</dd>
              </div>
            </dl>
          </div>

          <div>
            <h3 className="font-cond text-[clamp(20px,3vw,26px)] font-semibold mb-4 text-mt-100">
              {t.bookHeading}
            </h3>
            <ul className="pl-5 text-mt-200 space-y-2 text-[15px]">
              {t.bookItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <Note title={t.permitTitle} variant="water">
              {t.permitBody}
            </Note>
          </div>
        </div>
      </div>
    </section>
  );
}

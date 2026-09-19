import { useState, useCallback } from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface GearItem {
  label: string;
  note?: string;
}

interface GearGroup {
  legend: string;
  items: GearItem[];
}

const GEAR_GROUPS: { en: GearGroup[]; es: GearGroup[] } = {
  en: [
    {
      legend: 'Carry',
      items: [
        { label: '55–65 L pack with rain cover or liner' },
        { label: '18–25 L summit pack', note: 'or a stuffable one' },
        { label: 'Trekking poles', note: 'approach and descent; checked baggage' },
      ],
    },
    {
      legend: 'Sleep',
      items: [
        { label: '3-season tent, full fly, extra stakes', note: 'thin soil, nightly storms' },
        { label: 'Bag rated 15–25°F' },
        { label: 'Inflatable pad, R-value 3+' },
        { label: 'Dry sleep layer and clean socks', note: 'does more than washing' },
      ],
    },
    {
      legend: 'Wear',
      items: [
        { label: 'Hiking shoes', note: 'edge in cracks, avoid polished streaks' },
        { label: 'Camp shoes or sandals' },
        { label: 'Synthetic base layers, fleece or light puffy' },
        { label: 'Hardshell jacket and pants', note: 'real rain gear, not a windbreaker' },
        { label: 'Warm hat, sun hat, light gloves, 3 pairs wool socks' },
      ],
    },
    {
      legend: 'Kitchen & water',
      items: [
        { label: 'Canister stove, pot, spoon, lighter + backup' },
        { label: '1 × 8 oz isobutane', note: "buy in Durango, can't fly" },
        { label: 'Filter plus chemical backup, 3 L capacity', note: 'goats and marmots are upstream of everything' },
        { label: '2 dinners, 2 breakfasts, summit snacks, electrolytes', note: '~1.5–2 lb per day' },
        { label: 'Bear canister or hang kit', note: 'goats chew salty straps' },
      ],
    },
    {
      legend: 'Navigate & call',
      items: [
        { label: '14ers.com app with routes offline, GPX files' },
        { label: 'Trails Illustrated #140 and compass' },
        { label: 'Satellite messenger', note: 'inReach, or iPhone satellite SOS enabled' },
        { label: 'Headlamp + spare batteries, battery bank' },
        { label: "Train times written down; someone at home has them too" },
      ],
    },
    {
      legend: 'Body',
      items: [
        { label: 'SPF 50, lip balm, sunglasses' },
        { label: 'First aid and blister kit' },
        { label: 'Unscented body wipes', note: 'this is the shower; pack them out' },
        { label: 'Trowel, TP, WAG bags, hand sanitizer' },
        { label: 'Emergency bivy and whistle' },
        { label: 'Helmet', note: 'reasonable in the Sunlight gully; your call' },
      ],
    },
  ],
  es: [
    {
      legend: 'Mochila',
      items: [
        { label: 'Mochila de 55–65 L con cubierta o forro impermeable' },
        { label: 'Mochila de cima de 18–25 L', note: 'o una comprimible' },
        { label: 'Bastones de trekking', note: 'aproximación y descenso; equipaje facturado' },
      ],
    },
    {
      legend: 'Dormir',
      items: [
        { label: 'Tienda 3 estaciones, doble techo, estacas extra', note: 'suelo fino, tormentas nocturnas' },
        { label: 'Saco valorado para −9 a −4°C' },
        { label: 'Colchoneta inflable, valor R 3+' },
        { label: 'Capa de dormir seca y calcetines limpios', note: 'hace más que lavarse' },
      ],
    },
    {
      legend: 'Ropa',
      items: [
        { label: 'Zapatillas de trekking', note: 'agarre en fisuras, evita zonas pulidas' },
        { label: 'Zapatillas de campamento o sandalias' },
        { label: 'Capas base sintéticas, polar o plumón ligero' },
        { label: 'Chaqueta y pantalón de lluvia', note: 'ropa de lluvia de verdad, no un cortaviento' },
        { label: 'Gorro de abrigo, gorro solar, guantes finos, 3 pares de calcetines de lana' },
      ],
    },
    {
      legend: 'Cocina y agua',
      items: [
        { label: 'Hornillo de cartucho, olla, cuchara, mechero + repuesto' },
        { label: '1 × cartucho de isobutano de 230 g', note: 'comprar en Durango, no se puede volar con él' },
        { label: 'Filtro más purificación química de respaldo, capacidad 3 L', note: 'cabras y marmotas están aguas arriba de todo' },
        { label: '2 cenas, 2 desayunos, snacks de cumbre, electrolitos', note: '~700–900 g por día' },
        { label: 'Contenedor anti-osos o sistema de colgado', note: 'las cabras mastican las correas saladas' },
      ],
    },
    {
      legend: 'Navegación y comunicación',
      items: [
        { label: 'App 14ers.com con rutas offline, archivos GPX' },
        { label: 'Mapa Trails Illustrated #140 y brújula' },
        { label: 'Comunicador satelital', note: 'inReach, o SOS satelital del iPhone activado' },
        { label: 'Linterna frontal + pilas de repuesto, batería portátil' },
        { label: 'Horarios del tren escritos; alguien en casa también los tiene' },
      ],
    },
    {
      legend: 'Cuerpo',
      items: [
        { label: 'FPS 50, bálsamo labial, gafas de sol' },
        { label: 'Kit de primeros auxilios y ampollas' },
        { label: 'Toallitas corporales sin perfume', note: 'esta es la ducha; llévate el residuo' },
        { label: 'Palita, papel higiénico, bolsas WAG, gel desinfectante' },
        { label: 'Vivac de emergencia y silbato' },
        { label: 'Casco', note: 'razonable en la couloir del Sunlight; tú decides' },
      ],
    },
  ],
};

const UI = {
  en: {
    kicker: 'Gear',
    heading: 'One pack, two nights, 28 to 32 pounds',
    desc: 'Everything rides the baggage car and then your back for six miles. Check things off as they go in; the list keeps itself while the page is open.',
    packedOf: (n: number, total: number) => `${n} of ${total} packed`,
    clearBtn: 'Clear the list',
  },
  es: {
    kicker: 'Equipo',
    heading: 'Una mochila, dos noches, 13 a 15 kilos',
    desc: 'Todo viaja en el vagón de equipaje y luego en tu espalda por diez kilómetros. Marca cada cosa al meterla; la lista se gestiona sola mientras la página esté abierta.',
    packedOf: (n: number, total: number) => `${n} de ${total} empacado`,
    clearBtn: 'Reiniciar la lista',
  },
};

export function GearSection() {
  const { lang } = useLanguage();
  const ui = UI[lang];
  const groups = GEAR_GROUPS[lang];
  const totalItems = groups.reduce((n, g) => n + g.items.length, 0);

  const [checked, setChecked] = useState<Set<string>>(new Set());

  const toggle = useCallback((key: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  }, []);

  const reset = () => setChecked(new Set());
  const packedCount = checked.size;

  return (
    <section className="day-section" id="gear" data-section="gear">
      <div className="wrap">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
          <div>
            <div className="kicker">{ui.kicker}</div>
            <h2 className="text-[clamp(28px,5.5vw,52px)] font-cond font-semibold text-mt-50">
              {ui.heading}
            </h2>
            <p className="text-[clamp(16px,1.8vw,18px)] text-mt-200 mt-3 max-w-[52ch]">
              {ui.desc}
            </p>
          </div>

          <div className="flex-1 min-w-[200px] max-w-[320px]">
            <div className="h-2 bg-mt-700 border border-mt-600 relative">
              <div
                className="absolute inset-0 bg-alpine transition-all duration-300"
                style={{ width: `${(packedCount / totalItems) * 100}%` }}
              />
            </div>
            <span className="text-[13px] text-mt-300 mt-2 block">
              {ui.packedOf(packedCount, totalItems)}
            </span>
          </div>
        </div>

        <div className="gear-grid">
          {groups.map((group, groupIdx) => (
            <fieldset key={groupIdx} className="gear-fieldset">
              <legend className="font-cond text-[19px] font-semibold px-1 text-mt-50">
                {group.legend}
              </legend>
              {group.items.map((item, itemIdx) => {
                const key = `${groupIdx}:${itemIdx}`;
                const isChecked = checked.has(key);
                return (
                  <label key={key} className="gear-label">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => toggle(key)}
                    />
                    <span className="text-mt-100">
                      {item.label}
                      {item.note && (
                        <small className="block text-[12.5px] text-mt-400 mt-0.5">{item.note}</small>
                      )}
                    </span>
                  </label>
                );
              })}
            </fieldset>
          ))}
        </div>

        <p className="mt-5">
          <button
            type="button"
            onClick={reset}
            className="font-cond text-[16px] font-semibold bg-transparent border border-mt-400 px-4 py-2 cursor-pointer text-mt-200 transition-colors duration-150 hover:border-mt-200 hover:text-mt-50"
            style={{ minHeight: '44px' }}
          >
            {ui.clearBtn}
          </button>
        </p>
      </div>
    </section>
  );
}

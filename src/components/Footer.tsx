export function Footer() {
  return (
    <footer
      className="border-t border-mt-600 text-[14px] text-mt-300"
      style={{ paddingBottom: 'calc(40px + env(safe-area-inset-bottom, 0px))', paddingTop: '40px' }}
    >
      <div className="wrap">
        <h4 className="font-cond text-[17px] font-semibold mb-3 text-mt-200">Photos</h4>
        <p className="mb-5 text-mt-400">
          All photographs are from Wikimedia Commons under Creative Commons or public-domain
          licenses and are loaded from there, so the page needs an internet connection to display
          them. Files used: Above the Animas (40897274470); Historic Main in Downtown Durango;
          Strater Hotel – Durango, CO; Animas River just north of downtown Durango, CO; K-37 493
          in Durango, Colorado; Steaming beside the Animas River (48721221381); Coming Around the
          Bend (G. Lamar); Steam on the Animas – September 2013; Coming Around the Bend
          (15114074572); K-28 473 at Cascade Canyon Wye; Canyon of the Rio las Animas, Colorado
          (LCCN2017658707); Continental divide trail in Weminuche Wilderness; Windom Peak and
          Unnamed above Chicago Basin; Alpenglow on the Eolus Peaks; Sunlight Peak; Sunlight Peak
          from Windom Peak; The ridge from N. Eolus over to Eolus; Durango and Silverton NGRR May
          2024-m1; Blue Winter Skies Hug the Durango Skyline. Each file's Commons page carries
          the photographer's credit and license.
        </p>

        <h4 className="font-cond text-[17px] font-semibold mb-3 text-mt-200">
          Sources and caveats
        </h4>
        <ul className="pl-5 space-y-1 text-mt-400">
          <li>
            Route descriptions follow 14ers.com (Bill Middlebrook), routes wind1, sunl2, eolu1
            and chib1. Read the originals; they have photos of every turn.
          </li>
          <li>
            Train times, fares, and flight schedules were checked in September 2026 and change
            every season. Verify each before committing money.
          </li>
          <li>
            Mountains change; web pages don't. Conditions reports the week you go beat anything
            written here.
          </li>
        </ul>
      </div>
    </footer>
  );
}

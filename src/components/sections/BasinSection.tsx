import { Note } from '../ui/Note';

export function BasinSection() {
  return (
    <section className="day-section" id="basin" data-section="basin">
      <div className="wrap">
        <div className="mb-[clamp(20px,3vw,40px)]">
          <div className="kicker">Altitude, weather, goats, money</div>
          <h2 className="text-[clamp(28px,5.5vw,52px)] font-cond font-semibold text-mt-50">
            The basin has rules of its own
          </h2>
        </div>

        <div className="three">
          <div>
            <h3 className="font-cond text-[clamp(20px,3vw,26px)] font-semibold mb-3 pb-2 border-b border-mt-600 text-mt-100">
              Altitude
            </h3>
            <p className="text-mt-200">
              Dallas is 430'. Camp is 11,000' and the summits are over 14,000', and you climb on
              your second morning up there, which is the roughest timing for acclimatization there
              is. The Durango night helps. Water helps more than anything: drink from the moment
              you land, skip alcohol until Sunday night.
            </p>
            <p className="text-mt-200">
              Some people ask their doctor about acetazolamide for trips like this. That's a
              conversation for you and your physician.
            </p>
          </div>
          <div>
            <h3 className="font-cond text-[clamp(20px,3vw,26px)] font-semibold mb-3 pb-2 border-b border-mt-600 text-mt-100">
              Weather
            </h3>
            <p className="text-mt-200">
              July and August are monsoon: clear mornings, storms by noon, often earlier. Early to
              mid-September is usually the best window, drier and quieter with cold nights, and the
              first snow can land any day. Check 14ers.com Peak Conditions the week before and the
              NOAA point forecast for 37.62, −107.59 before you board; there are no updates once
              you're on the train.
            </p>
            <p className="text-mt-200">
              Rain the day before doesn't shut these routes down. Slabs dry within a couple of
              hours of sun. The Sunlight gully holds moisture longest.
            </p>
          </div>
          <div>
            <h3 className="font-cond text-[clamp(20px,3vw,26px)] font-semibold mb-3 pb-2 border-b border-mt-600 text-mt-100">
              Mountain goats
            </h3>
            <p className="text-mt-200">
              A resident herd, habituated to people, relentless about salt. They lick sweaty
              straps, chew pole grips, and dig up the ground where anyone has urinated. Pee on bare
              rock well away from camp, never leave gear outside the tent unattended, and don't
              feed or approach them. Marmots take the hip belts and boots you leave out at night.
            </p>
          </div>
        </div>

        <div className="cols mt-10">
          <div>
            <h3 className="font-cond text-[clamp(20px,3vw,26px)] font-semibold mb-4 text-mt-100">
              Budget, per person, flying
            </h3>
            <dl className="border-t-2 border-mt-400 m-0">
              {[
                { label: 'DFW–DRO round trip, Thursday evening / Monday early', val: '$350–650' },
                { label: 'Rental car, Thursday to Monday', val: '$120–200' },
                { label: 'Durango hotel, Thursday and Sunday', val: '$300–450' },
                { label: 'Train, backpacker fare to Needleton, round trip', val: '$130–160' },
                { label: 'Fuel, food, incidentals', val: '$100–150' },
              ].map((row) => (
                <div key={row.label} className="budget-row">
                  <dt className="text-mt-200">{row.label}</dt>
                  <dd className="budget-value m-0">{row.val}</dd>
                </div>
              ))}
              <div className="budget-row total">
                <dt className="text-mt-50">Total</dt>
                <dd className="budget-value m-0">$1,000–1,600</dd>
              </div>
            </dl>
          </div>

          <div>
            <h3 className="font-cond text-[clamp(20px,3vw,26px)] font-semibold mb-4 text-mt-100">
              Book, in this order
            </h3>
            <ul className="pl-5 text-mt-200 space-y-2 text-[15px]">
              <li>
                <a href="https://www.durangotrain.com" target="_blank" rel="noopener">
                  Durango &amp; Silverton
                </a>
                : the Needleton backpacker fare sells out weeks to months ahead in July and August.
                This ticket sets every other date.
              </li>
              <li>American nonstops, Thursday evening out and the first Monday flight back.</li>
              <li>Main Ave hotel for Thursday and Sunday, late check-in confirmed.</li>
              <li>Rental car or airport shuttle.</li>
              <li>
                The week before:{' '}
                <a
                  href="https://www.14ers.com/php14ers/peakstatus_peak.php?peakparm=10033"
                  target="_blank"
                  rel="noopener"
                >
                  peak conditions
                </a>
                , forecast, and a pickup order for one fuel canister.
              </li>
            </ul>
            <Note title="Permits and rules" variant="water">
              No permit is currently required for Weminuche backcountry travel; confirm with the
              San Juan National Forest, Columbine Ranger District, before you go. Party limit 15.
              No campfires in Chicago Basin. Camp 100' from water. No dogs on the train.
            </Note>
          </div>
        </div>
      </div>
    </section>
  );
}

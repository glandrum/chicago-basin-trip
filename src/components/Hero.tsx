interface HeroProps {
  withEolus: boolean;
}

const HERO_IMG = 'https://commons.wikimedia.org/wiki/Special:FilePath/Above_the_Animas_(40897274470).jpg';

function StripItems({ withEolus }: { withEolus: boolean }) {
  const items = [
    { t: 'Thu 7:00p', l: 'Depart DFW, Terminal E' },
    { t: 'Fri 8:30a', l: 'Train leaves Durango depot' },
    { t: 'Fri 11:00a', l: "Off at Needleton, 8,200'" },
    { t: 'Sat 8:00a', l: "Windom summit, 14,089'" },
    { t: withEolus ? 'Tue ~8:00p' : 'Mon ~8:00p', l: 'Night flight DRO → DFW' },
  ];
  const divider = 'rgba(230,237,232,.20)';

  return (
    <>
      <style>{`
        .key-strip { display:grid; grid-template-columns:repeat(2,1fr); border-top:2px solid #D4933A; }
        .key-strip-item { padding:10px 10px 10px 0; border-bottom:1px solid ${divider}; }
        .key-strip-item.even-col { padding-left:10px; }
        .key-strip-item.has-right { border-right:1px solid ${divider}; }
        .key-strip-item.full-row { grid-column:1/-1; border-right:none; }
        @media(min-width:640px){
          .key-strip { grid-template-columns:repeat(5,1fr); border-bottom:1px solid ${divider}; }
          .key-strip-item { border-bottom:none; grid-column:auto !important; }
          .key-strip-item:not(:last-child){ border-right:1px solid ${divider}; }
          .key-strip-item.even-col { padding-left:0; }
        }
      `}</style>
      <div className="key-strip" aria-label="Key times">
        {items.map((item, i) => {
          const isOdd = i % 2 === 0;
          const isLast = i === items.length - 1;
          const oddItems = items.length % 2 !== 0;
          return (
            <div
              key={i}
              className={[
                'key-strip-item',
                !isOdd ? 'even-col' : '',
                isOdd && !isLast ? 'has-right' : '',
                isLast && oddItems ? 'full-row' : '',
              ].filter(Boolean).join(' ')}
            >
              <div
                className="font-cond font-semibold leading-none text-mt-50"
                style={{ fontSize: 'clamp(18px,4.5vw,30px)' }}
              >
                {item.t}
              </div>
              <div className="text-[13px] mt-1" style={{ color: '#A8B8B4' }}>{item.l}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export function Hero({ withEolus }: HeroProps) {
  return (
    <header
      id="top"
      className="relative bg-mt-950 overflow-hidden"
      style={{ minHeight: 'min(88svh, 880px)', display: 'grid', alignItems: 'end', color: '#E6EDE8', isolation: 'isolate' }}
    >
      {/* Background image */}
      <img
        src={`${HERO_IMG}?width=1600`}
        srcSet={`${HERO_IMG}?width=900 900w, ${HERO_IMG}?width=1600 1600w, ${HERO_IMG}?width=2400 2400w`}
        sizes="100vw"
        alt="A Durango & Silverton steam train on the High Line ledge above the Animas River gorge"
        fetchPriority="high"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: '62% 55%', zIndex: -2 }}
      />

      {/* Cinematic dark gradient */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: -1,
          background: 'linear-gradient(180deg, rgba(8,14,18,.32) 0%, rgba(8,14,18,.05) 28%, rgba(8,14,18,.72) 65%, rgba(8,14,18,.97) 100%)',
        }}
      />

      {/* Topo texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 0,
          opacity: 0.3,
          backgroundImage: `
            repeating-radial-gradient(ellipse 900px 520px at 18% 14%, transparent 0 46px, rgba(212,147,58,.06) 46px 47px),
            repeating-radial-gradient(ellipse 760px 480px at 82% 78%, transparent 0 52px, rgba(212,147,58,.05) 52px 53px)
          `,
        }}
      />

      <span
        className="absolute right-3 top-3 text-[11px] z-10"
        style={{ color: 'rgba(230,237,232,.50)' }}
      >
        Photo: Wikimedia Commons (CC BY)
      </span>

      <div
        className="wrap w-full"
        style={{
          paddingBottom: 'clamp(22px,5vw,64px)',
          paddingTop: '110px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <h1
          className="font-cond font-bold"
          style={{
            fontSize: 'clamp(40px,10vw,138px)',
            maxWidth: '11ch',
            lineHeight: 0.92,
            letterSpacing: '-0.01em',
          }}
        >
          <span
            className="font-medium block mb-3"
            style={{ fontSize: '0.46em', letterSpacing: '0.01em', color: '#D4933A', lineHeight: 1.05 }}
          >
            Dallas to the Weminuche by steam train and foot
          </span>
          Chicago Basin by steam train
        </h1>

        <p
          className="max-w-[52ch] mt-4 mb-6 text-mt-100"
          style={{ fontSize: 'clamp(15px,1.8vw,20px)' }}
        >
          Fly to Durango Thursday after work. Ride an 1882 narrow gauge into a roadless gorge
          Friday, get dropped at a wilderness flag stop, and sleep at 11,000 feet. Climb Windom
          and Sunlight Saturday. Flag the train home Sunday.
        </p>

        <StripItems withEolus={withEolus} />
      </div>
    </header>
  );
}

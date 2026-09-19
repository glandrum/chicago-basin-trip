import heroImg from '../assets/hero.jpg';
const HERO_IMG = heroImg;

function StripItems() {
  const items = [
    { t: 'Sep 2, 7p', l: 'Depart DFW, Terminal E' },
    { t: 'Sep 3, 8:30a', l: 'Train leaves Durango depot' },
    { t: 'Sep 3, 11a', l: "Off at Needleton, 8,200'" },
    { t: 'Sep 4, 8a', l: "Windom summit, 14,089'" },
    { t: 'Sep 6, ~8p', l: 'Night flight DRO → DFW' },
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

export function Hero() {
  return (
    <header
      id="top"
      className="relative bg-mt-950 overflow-hidden"
      style={{ minHeight: 'min(88svh, 880px)', display: 'grid', alignItems: 'end', color: '#E6EDE8', isolation: 'isolate' }}
    >
      {/* Background image */}
      <img
        src={HERO_IMG}
        alt="Durango & Silverton locomotive No. 473 alongside the Animas River in the San Juan Mountains"
        fetchPriority="high"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: '50% 40%', zIndex: -2 }}
      />

      {/* Cinematic dark gradient */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: -1,
          background: 'linear-gradient(180deg, rgba(8,14,18,.08) 0%, rgba(8,14,18,.00) 30%, rgba(8,14,18,.38) 62%, rgba(8,14,18,.82) 100%)',
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

        <StripItems />
      </div>
    </header>
  );
}

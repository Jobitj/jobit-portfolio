// Theme-coloured illustrations used as project thumbnails (pure SVG, no image files needed).
const rows = (n) => Array.from({ length: n }, (_, i) => i);

const ARTS = {
  tickets: (
    <g>
      {rows(3).map((i) => (
        <g key={i} transform={`translate(${24 + i * 98},26)`}>
          <rect width="88" height="148" rx="6" className="fw sw" />
          <rect x="8" y="9" width="42" height="6" rx="3" className={i === 1 ? 'f1' : 'fd'} />
          {rows(3 - (i % 2)).map((j) => (
            <rect key={j} x="8" y={26 + j * 38} width="72" height="30" rx="4" className={i === 1 && j === 0 ? 'fa s1 pulse' : 'fw sw'} />
          ))}
        </g>
      ))}
    </g>
  ),
  assets: (
    <g>
      <rect x="20" y="24" width="190" height="152" rx="6" className="fw sw" />
      {rows(5).map((i) => (
        <g key={i}>
          <rect x="30" y={40 + i * 27} width="30" height="8" rx="4" className="fd" />
          <rect x="74" y={40 + i * 27} width="70" height="8" rx="4" className="fw" />
          <rect x="160" y={40 + i * 27} width="40" height="8" rx="4" className={i % 2 ? 'fa' : 'f1'} />
        </g>
      ))}
      <circle cx="262" cy="80" r="34" className="sw" style={{ strokeWidth: 10 }} />
      <circle cx="262" cy="80" r="34" className="s1" style={{ strokeWidth: 10, strokeDasharray: '150 214' }} transform="rotate(-90 262 80)" />
      <rect x="232" y="132" width="60" height="8" rx="4" className="fd" />
      <rect x="240" y="148" width="44" height="8" rx="4" className="fw" />
    </g>
  ),
  network: (
    <g>
      {[[70, 50], [250, 50], [60, 152], [260, 152], [160, 30], [160, 172]].map(([x, y], i) => (
        <g key={i}>
          <path d={`M160 100L${x} ${y}`} className="s1 flow" />
          <circle cx={x} cy={y} r="9" className="fa s1" />
        </g>
      ))}
      <path d="M70 50L160 30L250 50M60 152L160 172L260 152" className="sw" />
      <circle cx="160" cy="100" r="26" className="fa s1 pulse" />
      <path d="M160 86l12 5v8c0 8-5 12-12 14-7-2-12-6-12-14v-8z" className="s2" />
    </g>
  ),
  backup: (
    <g>
      {[0, 1].map((i) => (
        <g key={i} transform={`translate(${44 + i * 156},50)`}>
          <path d="M0 0v60a40 12 0 0080 0V0" className="fw s1" />
          <ellipse cx="40" cy="0" rx="40" ry="12" className="fa s1" />
          <path d="M0 30a40 12 0 0080 0" className="s1" />
        </g>
      ))}
      <path d="M134 96h50" className="s2 flow" />
      <path d="M176 88l8 8-8 8" className="s2" />
      <circle cx="160" cy="156" r="16" className="sw" />
      <path d="M160 146v10l7 4" className="s1" />
    </g>
  ),
  automation: (
    <g>
      {rows(3).map((i) => (
        <rect key={i} x={22 + i * 100} y="78" width="76" height="44" rx="8" className={i === 1 ? 'fa s1 pulse' : 'fw sw'} />
      ))}
      <path d="M98 100h24M198 100h24" className="s2 flow" />
      <path d="M116 94l6 6-6 6M216 94l6 6-6 6" className="s2" />
      <circle cx="160" cy="44" r="14" className="s1" />
      <path d="M160 34v4M160 50v4M150 44h4M166 44h4" className="s1" />
      {rows(5).map((i) => (
        <rect key={i} x={40 + i * 48} y={150 - (i % 3) * 10} width="26" height={(i % 3) * 10 + 14} rx="3" className={i % 2 ? 'fa' : 'f1'} />
      ))}
    </g>
  ),
  kb: (
    <g>
      <rect x="40" y="22" width="240" height="26" rx="13" className="fw s1" />
      <circle cx="58" cy="35" r="6" className="s1" />
      <path d="M63 40l5 5" className="s1" />
      {rows(3).map((i) => (
        <g key={i} transform={`translate(${34 + i * 90},64)`}>
          <rect width="80" height="108" rx="6" className={i === 0 ? 'fa s1' : 'fw sw'} />
          <rect x="10" y="12" width="40" height="6" rx="3" className="f1" />
          {rows(5).map((j) => <rect key={j} x="10" y={30 + j * 14} width={60 - (j % 2) * 16} height="5" rx="2.5" className="fd" />)}
        </g>
      ))}
    </g>
  ),
  remote: (
    <g>
      {[0, 1].map((i) => (
        <g key={i} transform={`translate(${28 + i * 168},50)`}>
          <rect width="96" height="66" rx="6" className="fw s1" />
          <rect x="8" y="8" width="80" height="50" rx="3" className="fa" />
          <path d="M34 76h28M48 66v10" className="sw" />
        </g>
      ))}
      <path d="M126 83h68" className="s2 flow" />
      <path d="M150 140l10 24 5-9 9-4z" className="f1" />
      <circle cx="160" cy="83" r="5" className="f2 pulse" />
    </g>
  ),
  poster: (
    <g>
      <rect x="92" y="18" width="136" height="164" rx="6" className="fw s1" />
      <circle cx="160" cy="76" r="32" className="fa s2" />
      <path d="M128 76h64M160 44v64" className="sw" />
      <rect x="112" y="124" width="96" height="9" rx="4.5" className="f1" />
      <rect x="112" y="142" width="64" height="6" rx="3" className="fd" />
      <rect x="112" y="156" width="78" height="6" rx="3" className="fd" />
      <path d="M44 120l14 8-14 8z" className="f2" />
      <rect x="252" y="40" width="28" height="28" rx="6" className="fa s1" />
    </g>
  ),
  video: (
    <g>
      <rect x="40" y="18" width="240" height="96" rx="6" className="fw s1" />
      <path d="M150 50l32 16-32 16z" className="f1" />
      <rect x="40" y="128" width="240" height="14" rx="3" className="fw sw" />
      <rect x="40" y="148" width="240" height="14" rx="3" className="fw sw" />
      <rect x="52" y="131" width="90" height="8" rx="2" className="f1" />
      <rect x="150" y="131" width="60" height="8" rx="2" className="fa" />
      <rect x="70" y="151" width="70" height="8" rx="2" className="f2" />
      <rect x="148" y="151" width="100" height="8" rx="2" className="fd" />
      <path d="M176 122v50" className="s2" />
    </g>
  ),
  ui: (
    <g>
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${34 + i * 86},${i === 1 ? 14 : 28})`}>
          <rect width="68" height="136" rx="10" className={i === 1 ? 'fa s1' : 'fw sw'} />
          <rect x="8" y="12" width="52" height="38" rx="5" className={i === 1 ? 'f1' : 'fd'} />
          <rect x="8" y="58" width="36" height="6" rx="3" className="fd" />
          <rect x="8" y="72" width="52" height="6" rx="3" className="fw" />
          <rect x="8" y="86" width="44" height="6" rx="3" className="fw" />
          <rect x="14" y="110" width="40" height="14" rx="7" className={i === 1 ? 'f2' : 'fa'} />
        </g>
      ))}
    </g>
  ),
  counseling: (
    <g>
      <rect x="30" y="28" width="150" height="72" rx="14" className="fa s1" />
      <path d="M62 100l-6 20 24-14" className="fa s1" />
      <rect x="50" y="48" width="92" height="7" rx="3.5" className="fd" />
      <rect x="50" y="64" width="62" height="7" rx="3.5" className="fw" />
      <rect x="140" y="92" width="150" height="66" rx="14" className="fw s2" />
      <path d="M262 158l8 18-22-12" className="fw s2" />
      <rect x="158" y="110" width="100" height="7" rx="3.5" className="fd" />
      <rect x="158" y="126" width="70" height="7" rx="3.5" className="fw" />
      <path d="M250 52c0-7 10-9 12-2 2-7 12-5 12 2 0 10-12 17-12 17s-12-7-12-17z" className="f2 pulse" />
    </g>
  ),
  tour: (
    <g>
      <rect x="24" y="24" width="272" height="152" rx="8" className="fw sw" />
      <path d="M24 108l60-32 50 26 60-42 102 32" className="sw" />
      <path d="M50 150C100 90 140 150 190 92S260 84 280 54" className="s2 flow" />
      <circle cx="50" cy="150" r="6" className="f1" />
      <path d="M280 28c-9 0-15 7-15 15 0 11 15 26 15 26s15-15 15-26c0-8-6-15-15-15z" className="fa s1" />
      <circle cx="280" cy="43" r="5" className="f1" />
      <path d="M126 58l24 9-24 9 6-9z" className="f2" />
    </g>
  ),
  restaurant: (
    <g>
      <circle cx="116" cy="100" r="58" className="fw s1" />
      <circle cx="116" cy="100" r="38" className="fa sw" />
      <path d="M40 54v92M32 54v24a8 8 0 0016 0V54" className="s2" />
      <path d="M194 56c14 12 14 76 0 88M194 100v46" className="s2" />
      {[0, 1, 2].map((i) => <rect key={i} x="224" y={34 + i * 42} width="64" height="30" rx="6" className={i === 0 ? 'fa s1' : 'fw sw'} />)}
      <rect x="234" y="44" width="30" height="6" rx="3" className="f1" />
      <rect x="234" y="86" width="22" height="6" rx="3" className="fd" />
      <rect x="234" y="128" width="26" height="6" rx="3" className="fd" />
    </g>
  ),
  doctor: (
    <g>
      <rect x="34" y="26" width="172" height="148" rx="8" className="fw s1" />
      <path d="M34 54h172" className="sw" />
      {Array.from({ length: 20 }, (_, i) => (
        <rect key={i} x={46 + (i % 5) * 30} y={66 + Math.floor(i / 5) * 26} width="20" height="16" rx="3" className={i === 7 ? 'f1' : i === 12 ? 'fa s2' : 'fw'} />
      ))}
      <rect x="226" y="38" width="70" height="70" rx="14" className="fa s1" />
      <path d="M261 54v38M242 73h38" className="s2" style={{ strokeWidth: 6 }} />
      <rect x="226" y="126" width="70" height="8" rx="4" className="fd" />
      <rect x="226" y="142" width="48" height="8" rx="4" className="fw" />
    </g>
  ),
  web: (
    <g>
      <rect x="28" y="24" width="264" height="152" rx="8" className="fw sw" />
      <path d="M28 46h264" className="sw" />
      {[0, 1, 2].map((i) => <circle key={i} cx={42 + i * 14} cy="35" r="3.5" className={i === 0 ? 'f2' : 'fd'} />)}
      {rows(6).map((i) => (
        <rect key={i} x={44 + (i % 3) * 14} y={62 + i * 18} width={70 + ((i * 37) % 90)} height="6" rx="3" className={i % 3 === 0 ? 'f1' : 'fd'} />
      ))}
      <rect x="200" y="62" width="76" height="96" rx="6" className="fa s1" />
    </g>
  ),
};

export default function ProjectArt({ kind }) {
  return (
    <svg className="art" viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <pattern id="pg" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M20 0H0V20" className="sw" /></pattern>
        <radialGradient id="pgl" cx="50%" cy="40%" r="70%"><stop offset="0" stopColor="rgba(255,255,255,.07)" /><stop offset="1" stopColor="rgba(0,0,0,0)" /></radialGradient>
      </defs>
      <rect width="320" height="200" className="bgf" />
      <rect width="320" height="200" className="gp" />
      <rect width="320" height="200" className="gl" />
      {ARTS[kind] || ARTS.web}
    </svg>
  );
}

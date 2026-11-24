export default function Marquee({ items, reverse = false, big = false }) {
  const row = [...items, ...items];
  return (
    <div className={`marquee ${reverse ? 'rev' : ''} ${big ? 'big' : ''}`}>
      <div className="marquee-track">
        {row.map((t, i) => <span key={i}>{t}<em>✦</em></span>)}
      </div>
    </div>
  );
}

import { useEffect, useState } from 'react';

export default function TypeText({ words }) {
  const [i, setI] = useState(0);
  const [t, setT] = useState('');
  const [del, setDel] = useState(false);
  useEffect(() => {
    const w = words[i];
    let to;
    if (!del && t === w) to = setTimeout(() => setDel(true), 1600);
    else if (del && t === '') { setDel(false); setI((i + 1) % words.length); }
    else to = setTimeout(() => setT(del ? w.slice(0, t.length - 1) : w.slice(0, t.length + 1)), del ? 35 : 70);
    return () => clearTimeout(to);
  }, [t, del, i, words]);
  return <span className="typed">{t}<i className="caret" /></span>;
}

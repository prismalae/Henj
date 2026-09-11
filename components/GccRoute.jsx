import Icon from './Icon';

/**
 * The overland GCC run, compressed to a single strip for the hero: a truck, the
 * dashed road, and the three destinations it actually reaches.
 *
 * The flags are drawn rather than loaded, so the strip costs no request and
 * stays crisp at any size. Each is simplified to the structure that survives a
 * 30px disc — the field division and the official colours — because the fine
 * serration on the Qatari and Bahraini flags is sub-pixel at this scale. They
 * are decorative: the destinations are named in the sentence underneath and in
 * the screen-reader line, so nothing depends on reading a flag.
 */
const FLAGS = {
  qa: {
    name: 'Qatar',
    art: (
      <>
        <rect width="24" height="24" fill="#fff" />
        <path fill="#8d1b3d" d="M7 0h17v24H7l4.6-1.85L7 20.3l4.6-1.85L7 16.6l4.6-1.85L7 12.9l4.6-1.85L7 9.2l4.6-1.85L7 5.5l4.6-1.85L7 1.8Z" />
      </>
    ),
  },
  kw: {
    name: 'Kuwait',
    art: (
      <>
        <rect width="24" height="8" fill="#007a3d" />
        <rect y="8" width="24" height="8" fill="#fff" />
        <rect y="16" width="24" height="8" fill="#ce1126" />
        <path fill="#000" d="M0 0h8L5 8v8l3 8H0Z" />
      </>
    ),
  },
  bh: {
    name: 'Bahrain',
    art: (
      <>
        <rect width="24" height="24" fill="#fff" />
        <path fill="#ce1126" d="M6 0h18v24H6l5-2.4L6 19.2l5-2.4L6 14.4l5-2.4L6 9.6l5-2.4L6 4.8l5-2.4Z" />
      </>
    ),
  },
};

export default function GccRoute({
  stops = ['qa', 'kw', 'bh'],
  note = 'Shipments dispatched by road from Dubai to Qatar, Kuwait and Bahrain.',
}) {
  const names = stops.map((s) => FLAGS[s].name);
  return (
    <div className="hero-route">
      <div className="hero-route-line" aria-hidden="true">
        <span className="hero-route-truck"><Icon name="truck" size={24} strokeWidth={1.5} /></span>
        {stops.map((s) => (
          <span className="hero-route-leg" key={s}>
            <span className="hero-route-dash" />
            <span className="hero-route-flag">
              <svg viewBox="0 0 24 24" role="presentation" focusable="false">{FLAGS[s].art}</svg>
            </span>
          </span>
        ))}
      </div>
      {note && <p className="hero-route-note">{note}</p>}
      <p className="sr-only">{`Road route: Dubai to ${names.slice(0, -1).join(', ')} and ${names.at(-1)}.`}</p>
    </div>
  );
}

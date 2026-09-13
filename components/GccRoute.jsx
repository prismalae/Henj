import Icon from './Icon';
import Flag, { flagName } from './Flag';

/**
 * The overland GCC run, compressed to a single strip for the hero: a truck, the
 * dashed road, and the three destinations it actually reaches.
 *
 * Flags come from components/Flag.jsx, shared with the group cards. They are
 * decorative: the destinations are named in the sentence underneath and in the
 * screen-reader line, so nothing depends on reading a flag.
 */

export default function GccRoute({
  stops = ['qa', 'kw', 'bh'],
  note = 'Shipments dispatched by road from Dubai to Qatar, Kuwait and Bahrain.',
}) {
  const names = stops.map((s) => flagName(s));
  return (
    <div className="hero-route">
      <div className="hero-route-line" aria-hidden="true">
        <span className="hero-route-truck"><Icon name="truck" size={24} strokeWidth={1.5} /></span>
        {stops.map((s) => (
          <span className="hero-route-leg" key={s}>
            <span className="hero-route-dash" />
            <span className="hero-route-flag">
              <Flag code={s} />
            </span>
          </span>
        ))}
      </div>
      {note && <p className="hero-route-note">{note}</p>}
      <p className="sr-only">{`Road route: Dubai to ${names.slice(0, -1).join(', ')} and ${names.at(-1)}.`}</p>
    </div>
  );
}

import { site } from '@/content/site';

/**
 * Credibility counters. Static numbers by design — a count-up animation costs
 * JavaScript and does nothing for a reduced-motion user.
 * Figures come from content/site.js and are listed in docs/ASSUMPTIONS.md.
 */
export default function StatStrip({ tone = 'cream' }) {
  return (
    <section className={`section section--${tone}`} style={{ paddingBlock: 'clamp(2.5rem, 5vw, 3.5rem)' }}>
      <div className="wrap">
        <ul className="stats">
          {site.stats.map((s) => (
            <li key={s.label}>
              <b>{s.value}</b>
              <span>{s.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

import Icon from './Icon';
import TornEdge from './TornEdge';
import GccRoute from './GccRoute';

const BADGE_ICONS = {
  'Carefully Sourced': 'sourced', 'Premium Quality': 'quality',
  'Hygienically Processed': 'hygienic', 'Timely Delivered': 'time',
  'Farm Fresh': 'leaf', 'Hygienically Handled': 'hygienic',
  'Quality Assured': 'shield', 'Timely Delivery': 'time',
  'Farm Sourced': 'leaf', 'Air Freighted': 'plane',
  'Cold Chain': 'shield', 'Daily Supply': 'time',
};

export default function Hero({ image = null, tone = 'cool', title, strapline, lede, badges = [], route = false, center = false, tornColor = 'var(--paper)' }) {
  return (
    <section className={`hero${center ? ' hero--center' : ''}${image ? '' : ` hero--plain hero--plain-${tone}`}`}>
      <div className="hero-bg">
        {/* No photograph: some pages are about process, not produce, and every
            photo on this site is used exactly once. */}
        {image ? <img src={image} alt="" /> : null}
      </div>
      <div className="wrap">
        <div className="hero-inner">
          <h1>{title}</h1>
          {strapline && <p className="hero-strapline">{strapline}</p>}
          {lede && <p className="hero-lede">{lede}</p>}
          {route && <GccRoute />}
          {badges.length > 0 && (
            <ul className="badges">
              {badges.map((b) => (
                <li className="badge" key={b}>
                  <Icon name={BADGE_ICONS[b] || 'quality'} size={30} strokeWidth={1.3} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <TornEdge color={tornColor} />
    </section>
  );
}

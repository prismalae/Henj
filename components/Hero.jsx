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

/**
 * `focus` overrides where the photograph is cropped. The default (set in CSS)
 * is centre-right, which suits a picture composed with a quiet left third for
 * the copy; a photograph whose subject sits in the middle needs 'center' or it
 * gets cropped straight off the frame.
 */
export default function Hero({ image = null, tone = 'cool', title, strapline, lede, badges = [], route = false, center = false, scrim = null, focus = null, tall = false, tornColor = 'var(--paper)' }) {
  return (
    <section className={`hero${tall ? ' hero--tall' : ''}${center ? ' hero--center' : ''}${scrim ? ` hero--scrim-${scrim}` : ''}${image ? '' : ` hero--plain hero--plain-${tone}`}`}>
      <div className="hero-bg">
        {/* No photograph: some pages are about process, not produce, and every
            photo on this site is used exactly once. */}
        {image ? <img src={image} alt="" style={focus ? { objectPosition: focus } : undefined} /> : null}
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

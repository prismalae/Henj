import Icon from './Icon';

/**
 * `eyebrow` sits above the title, `sub` below it. A company name wants the
 * qualifier underneath — the name is the heading and "the supermarket in Ajman"
 * reads as its caption, not its label.
 */
export default function SectionHeading({ eyebrow, title, sub, lede, align = 'center', ornament = true, gold = false, level = 2 }) {
  const Title = `h${level}`;
  return (
    <div className={`sec-head${align === 'left' ? ' sec-head--left' : ''}`}>
      {eyebrow && <p className={`eyebrow${gold ? ' eyebrow--gold' : ''}`}>{eyebrow}</p>}
      {title && <Title>{title}</Title>}
      {sub && <p className="sec-sub">{sub}</p>}
      {ornament && (
        <div className="ornament" aria-hidden="true">
          <Icon name="sparkle" size={13} strokeWidth={1.2} />
        </div>
      )}
      {lede && <p>{lede}</p>}
    </div>
  );
}

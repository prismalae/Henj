import Icon from './Icon';

export default function SectionHeading({ eyebrow, title, lede, align = 'center', ornament = true, gold = false, level = 2 }) {
  const Title = `h${level}`;
  return (
    <div className={`sec-head${align === 'left' ? ' sec-head--left' : ''}`}>
      {eyebrow && <p className={`eyebrow${gold ? ' eyebrow--gold' : ''}`}>{eyebrow}</p>}
      {title && <Title>{title}</Title>}
      {ornament && (
        <div className="ornament" aria-hidden="true">
          <Icon name="sparkle" size={13} strokeWidth={1.2} />
        </div>
      )}
      {lede && <p>{lede}</p>}
    </div>
  );
}

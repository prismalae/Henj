import Icon from './Icon';

/**
 * A product tile. Renders an empty, correctly-proportioned image slot until
 * `image` is set in content/products.js — no layout change when photos arrive.
 *
 * `specs` renders as a native <details> disclosure: no JavaScript, keyboard
 * accessible for free, and it keeps a 16-tile grid from becoming a wall of text.
 * Cards without `specs` render exactly as before.
 */
export default function ProductCard({ name, description, image, specs }) {
  return (
    <article className="card">
      {/* slot--photo suits the white-background product cutouts we have: it shows
          the whole item rather than cropping a square into a 4:3 box. */}
      <div className={`slot${image ? ' slot--photo' : ''}`}>
        {image ? <img src={image} alt={name} loading="lazy" /> : <Icon name="leaf" size={34} strokeWidth={1.2} />}
      </div>
      <div className="card-body">
        <h3>{name}</h3>
        {description && <p>{description}</p>}
        {specs && (
          <details className="spec">
            <summary>
              Specifications
              <Icon name="chevron" size={15} />
            </summary>
            <dl>
              {Object.entries(specs).map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </details>
        )}
      </div>
    </article>
  );
}

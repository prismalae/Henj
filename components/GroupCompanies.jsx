import Icon from './Icon';
import Flag from './Flag';
import SectionHeading from './SectionHeading';
import { site, sisterConcerns } from '@/content/site';

/**
 * The group's sister concerns. Rendered as plain cards rather than links — none
 * of them has a website of its own yet, so the address and phone are the whole
 * point of the listing.
 */
export default function GroupCompanies({ tone = 'paper-deep', heading = true }) {
  return (
    <section className={`section section--${tone}`}>
      <div className="wrap">
        {heading && (
          <SectionHeading
            eyebrow="Our group"
            title="Sister Concerns"
            lede={`${site.shortName} trades alongside three associated companies across the UAE, India and Oman — which is how we buy at origin and deliver in three markets under one relationship.`}
          />
        )}
        <div className="grid grid--3">
          {sisterConcerns.map((c) => (
            <div className="card" key={c.name} style={{ padding: '1.75rem' }}>
              <div className="company-mark">
                <div className="feature-icon" style={{ margin: 0 }}>
                  <Icon name="building" size={28} />
                </div>
                {c.country && <span className="company-flag"><Flag code={c.country} /></span>}
              </div>
              <h3 style={{ color: 'var(--green-900)', fontSize: '1.05rem' }}>{c.name}</h3>
              <p className="eyebrow" style={{ marginBottom: '0.85rem' }}>{c.role}</p>
              <address style={{ fontStyle: 'normal', color: 'var(--ink-soft)', fontSize: '0.88rem', lineHeight: 1.6 }}>
                {c.lines.map((l) => (
                  <div key={l}>{l}</div>
                ))}
                <div style={{ marginTop: '0.6rem' }}>
                  {c.phones.map((p) => (
                    <div key={p.tel}>
                      <a href={`tel:${p.tel}`}>{p.display}</a>
                    </div>
                  ))}
                </div>
              </address>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

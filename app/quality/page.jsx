import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import CtaBand from '@/components/CtaBand';
import Icon from '@/components/Icon';
import { qualityPillars } from '@/content/products';

export const metadata = {
  title: 'Quality & Certifications',
  description:
    'How HENJ Trading LLC inspects at origin, holds the cold chain, meets UAE and destination food-safety requirements, and issues documentation with every shipment.',
};

const DOCS = [
  { icon: 'doc', title: 'Certificate of Origin', body: 'Issued for every consignment, attested where the destination requires it.' },
  { icon: 'leaf', title: 'Phytosanitary Certificate', body: 'For fresh produce, confirming the consignment meets plant-health requirements.' },
  { icon: 'shield', title: 'Health Certificate', body: 'For eggs and other products of animal origin, from the competent authority at source.' },
  { icon: 'box', title: 'Packing List & Invoice', body: 'Prepared ahead of arrival so clearance is not waiting on paperwork.' },
];

export default function QualityPage() {
  return (
    <>
      <Hero
        image="/img/hero-quality.jpg"
        focus="center"
        scrim="center"
        title="Quality & Certifications"
        strapline="We stand behind what we ship."
        lede={<><strong className="co co--onDark">HENJ</strong> trades on its own account. That means the grade you approved is our responsibility — from inspection at origin to the moment it reaches your door.</>}
        center
      />

      <section className="section section--paper">
        <div className="wrap">
          <SectionHeading
            eyebrow="How we work"
            title="Six Things We Control"
            lede="Quality in this trade is not a certificate on a wall. It is a series of decisions made before the goods move."
          />
          <div className="grid grid--3">
            {qualityPillars.map((p) => (
              <div className="card" key={p.title} style={{ padding: '1.75rem' }}>
                <div className="feature-icon" style={{ margin: '0 0 1rem' }}><Icon name={p.icon} size={28} /></div>
                <h3 style={{ color: 'var(--green-900)', fontSize: '1.05rem' }}>{p.title}</h3>
                <p style={{ color: 'var(--ink-soft)', fontSize: '0.88rem' }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--green">
        <div className="wrap">
          <SectionHeading
            eyebrow="With every shipment"
            title="Documentation Issued"
            lede="Which documents apply depends on the product and the destination. We prepare what the consignment needs."
            gold
          />
          <div className="grid grid--4">
            {DOCS.map((d) => (
              <div key={d.title}>
                <div className="feature-icon" style={{ margin: '0 0 1rem', background: 'rgba(201,162,39,0.14)', color: 'var(--gold)' }}>
                  <Icon name={d.icon} size={26} />
                </div>
                <h3 style={{ color: '#fff', fontSize: '1rem', fontWeight: 600 }}>{d.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: '0.86rem' }}>{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--paper-deep">
        <div className="wrap split">
          <div>
            <p className="eyebrow">Being on the market floor</p>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.6vw, 2rem)' }}>We see the goods before you do.</h2>
            <p>
              HENJ operates from Al Aweer Fruits &amp; Vegetables Market in Ras Al Khor — the point where
              the region&apos;s fresh trade actually happens. Being on the floor is itself a quality
              control: we inspect what lands, reject what does not meet the grade, and move the rest
              the same day.
            </p>
            <p>
              You are welcome to inspect any consignment at Al Aweer before it moves. For dry goods we
              send samples from the exact lot you would be buying, so what you approve is what ships.
            </p>
          </div>
          <div className="grid grid--2">
            {[
              { icon: 'search', title: 'Inspect Before Buying' },
              { icon: 'shield', title: 'Reject Off-Grade Stock' },
              { icon: 'time', title: 'Same-Day Movement' },
              { icon: 'handshake', title: 'Consistent Between Lots' },
            ].map((i) => (
              <div key={i.title} style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
                <div className="feature-icon" style={{ margin: 0, width: 52, height: 52 }}>
                  <Icon name={i.icon} size={24} />
                </div>
                <span style={{ fontSize: '0.92rem', fontWeight: 500, color: 'var(--green-900)' }}>{i.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Want to See the Goods First?"
        body="Inspect a consignment at Al Aweer, or ask us for a sample from the exact lot. We would rather you check than take our word for it."
        action="Arrange an Inspection"
        message="Hello HENJ Trading, I would like to arrange an inspection or request a sample."
      />
    </>
  );
}

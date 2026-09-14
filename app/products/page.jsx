import Link from 'next/link';
import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import CtaBand from '@/components/CtaBand';
import Icon from '@/components/Icon';
import { categories } from '@/content/products';

export const metadata = {
  title: 'Products',
  description:
    'Fresh fruits and vegetables, pulses, rice, grains and spices, and fresh eggs — supplied by HENJ Trading LLC across the UAE and the Gulf.',
};

export default function ProductsPage() {
  return (
    <>
      <Hero
        image="/img/hero-products.jpg"
        title="Our Products"
        strapline="Sourced with care. Delivered with consistency."
        lede="Four core ranges, each handled the way that category demands — from daily air freight for fresh produce to container loads of dry goods."
        center
      />

      <section className="section section--paper">
        <div className="wrap">
          {/* The old lede duplicated the opening sentence of the copy below it, so
              the heading now runs straight into the three paragraphs. */}
          <SectionHeading
            eyebrow="Explore the range"
            title="Quality Products for Every Market"
          />
          <div style={{ maxWidth: '68ch', margin: '0 auto clamp(2rem, 4vw, 3rem)', textAlign: 'center' }}>
            <p style={{ color: 'var(--ink-soft)' }}>
              From fresh produce to essential food staples, <strong className="co">HENJ Trading LLC</strong> offers a carefully
              sourced portfolio for wholesale, retail, food-service and institutional requirements.
            </p>
            <p style={{ color: 'var(--ink-soft)' }}>
              Explore our core categories — fruits and vegetables; rice, pulses, grains and spices;
              dried fruits and nuts; and eggs. Each range is managed with the appropriate sourcing,
              handling, storage and delivery to ensure dependable quality.
            </p>
            <p style={{ color: 'var(--ink-soft)' }}>
              With one trusted point of contact across every category, sourcing becomes simpler,
              faster and more reliable.
            </p>
          </div>
          <div className="grid grid--2">
            {categories.map((c) => (
              <Link key={c.slug} href={c.href} className="card card--glow" style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="slot" style={{ aspectRatio: '4 / 3' }}>
                  <img src={c.hero} alt="" loading="lazy" />
                </div>
                <div className="card-body" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3>{c.title}</h3>
                  <p style={{ fontStyle: 'italic', color: 'var(--gold-deep)', marginBottom: '0.6rem' }}>{c.strapline}</p>
                  <p style={{ flex: 1 }}>{c.summary}</p>
                  <span className="btn btn--ghost" style={{ marginTop: '1rem', alignSelf: 'center', padding: '0.55rem 1.2rem', fontSize: '0.85rem' }}>
                    View Range <Icon name="arrow" size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Not Sure Which Range You Need?"
        body="Most of our customers buy across more than one. Tell us what you sell and who you sell it to, and we will suggest what is worth carrying."
        action="Talk to Us"
        message="Hello HENJ Trading, I would like to discuss which of your ranges suit my business."
      />
    </>
  );
}

import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import ProductGrid from '@/components/ProductGrid';
import FeatureRow from '@/components/FeatureRow';
import CtaBand from '@/components/CtaBand';
import MetaStrip from '@/components/MetaStrip';
import Icon from '@/components/Icon';
import { categories, eggs } from '@/content/products';

const category = categories.find((c) => c.slug === 'eggs');

export const metadata = {
  title: 'Fresh Eggs',
  description:
    'White and brown table eggs in every common grade, in trays, cartons or container loads — imported by HENJ Trading L.L.C. from India, Turkey and other trusted origins.',
};

const ASSURANCES = [
  { icon: 'sourced', title: 'Carefully Sourced' },
  { icon: 'quality', title: 'Strict Quality Checks' },
  { icon: 'hygienic', title: 'Hygienic Handling & Packaging' },
  { icon: 'time', title: 'Consistent Supply Assurance' },
];

const WHY = [
  { icon: 'building', title: 'Direct Sourcing', body: 'We work with trusted farms to bring you the freshest and finest eggs.' },
  { icon: 'shield', title: 'Assured Quality', body: 'Rigorous quality checks at every step ensure safety, freshness and nutrition.' },
  { icon: 'truck', title: 'Efficient Logistics', body: 'Temperature-controlled logistics for timely and safe delivery.' },
  { icon: 'people', title: 'Reliable Distribution', body: 'Wide distribution network to serve businesses across the UAE and beyond.' },
];

export default function EggsPage() {
  return (
    <>
      <Hero
        image={category.hero}
        title="Fresh Eggs"
        strapline={category.strapline}
        lede={category.intro}
        badges={category.badges}
      />

      <section className="section section--paper">
        <div className="wrap">
          <SectionHeading title="Our Egg Range" />
          <MetaStrip items={category.meta} />
          <ProductGrid items={eggs} columns={2} />
        </div>
      </section>

      <section className="section section--paper" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta" style={{ alignItems: 'stretch' }}>
            <div className="cta-text">
              <h2 style={{ color: '#fff' }}>Quality You Can Trust, Supply You Can Rely On</h2>
              <p style={{ marginBottom: '1.5rem' }}>
                We are committed to delivering eggs that meet the highest standards of quality and food
                safety. From farm to table, our processes ensure hygiene, freshness and reliability in
                every egg we supply.
              </p>
              <div className="grid grid--4" style={{ gap: '1rem' }}>
                {ASSURANCES.map((a) => (
                  <div key={a.title} style={{ textAlign: 'center' }}>
                    <Icon name={a.icon} size={26} strokeWidth={1.3} style={{ color: 'var(--gold)', margin: '0 auto 0.5rem' }} />
                    <span style={{ fontSize: '0.76rem', lineHeight: 1.4, color: 'rgba(255,255,255,0.85)', display: 'block' }}>{a.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--paper-deep">
        <div className="wrap split">
          <div>
            <p className="eyebrow">Import Sourcing</p>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.6vw, 2rem)' }}>Sourced from India, Turkey and beyond.</h2>
            <p>
              We import eggs from established producers in India and Turkey, along with other origins
              as season and price make sense. Multiple sources means supply holds steady when any
              single market tightens.
            </p>
            <p>
              Supply runs from single trays for retail through to full container loads for wholesale
              and institutional buyers, in white and brown, across small, medium, large and
              extra-large grades — sorted by weight to the specification you sell against.
            </p>
          </div>
          <div className="grid grid--2">
            {[
              { icon: 'globe', title: 'Multiple Origins' },
              { icon: 'box', title: 'Tray & Bulk Supply' },
              { icon: 'quality', title: 'All Size Grades' },
              { icon: 'shield', title: 'Food-Safety Checked' },
              { icon: 'truck', title: 'Temperature Controlled' },
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

      <section className="section section--paper">
        <div className="wrap">
          <SectionHeading title="Why Partner with HENJ?" />
          <FeatureRow items={WHY} />
        </div>
      </section>

      <CtaBand
        body="Looking for a dependable egg supply partner? Partner with HENJ Trading L.L.C. for quality you can trust and service you can rely on."
        message="Hello HENJ Trading, I would like to enquire about your egg supply."
      />
    </>
  );
}

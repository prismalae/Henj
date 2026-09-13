import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import ProductGrid from '@/components/ProductGrid';
import MetaStrip from '@/components/MetaStrip';
import FeatureRow from '@/components/FeatureRow';
import CtaBand from '@/components/CtaBand';
import Icon from '@/components/Icon';
import { categories, driedFruitsNuts } from '@/content/products';

const category = categories.find((c) => c.slug === 'dried-fruits-nuts');

export const metadata = {
  title: 'Dried Fruits & Nuts',
  description:
    'Cashews, almonds, pistachios, walnuts, raisins, dates, figs, apricots and seeds — graded by count and packed for retail or bulk by HENJ Trading L.L.C.',
};

const WHY = [
  { icon: 'globe', title: 'Origin Matters', body: 'Cashew from India and Vietnam, almonds from California, pistachios from Iran — we buy where each grows best.' },
  { icon: 'quality', title: 'Graded by Count', body: 'W180 through W450, 21/25 pistachios, sized apricots — you get the grade you priced, not an approximation.' },
  { icon: 'shield', title: 'Condition Held', body: 'Vacuum and lined packing, with reefer where kernels need it. Nuts turn rancid in Gulf heat if handled carelessly.' },
  { icon: 'box', title: 'Retail or Bulk', body: 'Bulk cartons for processors and repackers, or private-label retail packs to your own specification.' },
];

export default function DriedFruitsNutsPage() {
  return (
    <>
      <Hero
        image={category.hero}
        title={<>Dried Fruits<br />&amp; Nuts</>}
        strapline={category.strapline}
        lede={category.intro}
      />

      <section className="section section--paper">
        <div className="wrap">
          <SectionHeading
            title="Our Range"
            lede="Nuts, dried fruit and seeds, graded to count and packed to hold condition."
          />
          <MetaStrip items={category.meta} />
          <ProductGrid items={driedFruitsNuts} columns={4} />
        </div>
      </section>

      <section className="section section--green">
        <div className="wrap split">
          <div>
            <p className="eyebrow eyebrow--gold">Why condition matters here</p>
            <h2 style={{ color: '#fff' }}>Nuts fail quietly.</h2>
            <p style={{ color: 'rgba(255,255,255,0.85)' }}>
              A kernel that has gone rancid still looks fine in the bag. It is discovered by the
              customer, not by the buyer — which is why we care more about how nuts are packed and
              stored than about how they photograph.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.85)' }}>
              Vacuum tins for cashew, lined cartons for walnut and almond, and reefer transit where
              the season and the destination call for it.
            </p>
          </div>
          <div className="grid grid--2">
            {[
              { icon: 'shield', title: 'Vacuum & Lined Packing' },
              { icon: 'time', title: 'Reefer Where Needed' },
              { icon: 'quality', title: 'Count & Grade Verified' },
              { icon: 'doc', title: 'Full Documentation' },
            ].map((i) => (
              <div key={i.title} style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
                <div className="feature-icon" style={{ margin: 0, width: 52, height: 52, background: 'rgba(201,162,39,0.14)', color: 'var(--gold)' }}>
                  <Icon name={i.icon} size={24} />
                </div>
                <span style={{ fontSize: '0.92rem', fontWeight: 500 }}>{i.title}</span>
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
        title="Buying by Count or by Container?"
        body="Retail packs, bulk cartons or a full load — tell us the grade and the volume and we will price it against the origins that suit your season."
        action="Enquire Now"
        message="Hello HENJ Trading, I would like to enquire about dried fruits and nuts."
      />
    </>
  );
}

import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import ProductGrid from '@/components/ProductGrid';
import FeatureRow from '@/components/FeatureRow';
import CtaBand from '@/components/CtaBand';
import MetaStrip from '@/components/MetaStrip';
import Icon from '@/components/Icon';
import { categories, fruitsVegetables } from '@/content/products';

const category = categories.find((c) => c.slug === 'fruits-vegetables');

export const metadata = {
  title: 'Fruits & Vegetables',
  description:
    'Fresh fruits, vegetables, coconuts, onions, pomegranates, chilli, drumsticks, curry leaves, mint and banana leaves — air freighted daily by HENJ Trading LLC',
};

const WHY = [
  { icon: 'sourced', title: 'Picked at Source', body: 'Bought close to harvest so the clock starts as late as possible.' },
  { icon: 'shield', title: 'Cold Chain Held', body: 'Pre-cooled and kept cold through packing, transit and handover.' },
  { icon: 'plane', title: 'Air Freighted Daily', body: 'Same-week movement so leaves and herbs arrive still worth selling.' },
  { icon: 'truck', title: 'Reliable Distribution', body: 'Onward delivery across the UAE and into the wider Gulf.' },
];

export default function FruitsVegetablesPage() {
  return (
    <>
      <Hero
        image={category.hero}
        title="Fruits & Vegetables"
        strapline={category.strapline}
        lede={category.intro}
      />

      <section className="section section--paper">
        <div className="wrap">
          <SectionHeading
            title="Our Fresh Range"
            lede="A daily selection of fresh produce, leaves and herbs, packed for export and market supply."
          />
          <MetaStrip items={category.meta} />
          <ProductGrid items={fruitsVegetables} columns={4} />
        </div>
      </section>

      <section className="section section--green">
        <div className="wrap split">
          <div>
            <p className="eyebrow eyebrow--gold">Why air freight matters here</p>
            <h2 style={{ color: '#fff' }}>Freshness is a deadline, not a claim.</h2>
            <p style={{ color: 'rgba(255,255,255,0.85)' }}>
              Curry leaves, mint, drumsticks and banana leaves lose their value in days, not weeks.
              That is why this range moves by air: packed at source, flown out, cleared and delivered
              while it is still the product the buyer paid for.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.85)' }}>
              Heavier lines — onions, coconuts, pomegranates — move by sea or air depending on volume,
              season and how quickly you need them on the shelf.
            </p>
          </div>
          <div className="grid grid--2">
            {[
              { icon: 'plane', title: 'Daily Air Shipments' },
              { icon: 'shield', title: 'Cold Chain Handling' },
              { icon: 'box', title: 'Export-Grade Packing' },
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
        title="Tell Us What You Need This Week"
        body="Fresh produce is a weekly conversation, not an annual contract. Send us your list and we will tell you what is good right now, what is worth waiting on, and what it costs."
        action="Start a Weekly Supply"
        message="Hello HENJ Trading, I would like to enquire about fresh fruits and vegetables."
      />
    </>
  );
}

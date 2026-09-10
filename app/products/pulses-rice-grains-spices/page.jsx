import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import ProductGrid from '@/components/ProductGrid';
import FeatureRow from '@/components/FeatureRow';
import CtaBand from '@/components/CtaBand';
import MetaStrip from '@/components/MetaStrip';
import { categories, pulsesSpices } from '@/content/products';

const category = categories.find((c) => c.slug === 'pulses-rice-grains-spices');

export const metadata = {
  title: 'Pulses, Rice, Grains & Spices',
  description:
    'Rice, moong dal, toor dal, chana dal, chickpeas, lentils, cumin, cardamom, cloves, black pepper, turmeric and more — sourced and supplied by HENJ Trading L.L.C.',
};

const WHY = [
  { icon: 'globe', title: 'Global Sourcing', body: 'We work directly with trusted farmers and producers to bring you the best quality.' },
  { icon: 'quality', title: 'Stringent Quality', body: 'Rigorous quality checks at every stage to ensure purity, freshness and food safety.' },
  { icon: 'box', title: 'Premium Packaging', body: 'Hygienic packing solutions that preserve quality and extend shelf life.' },
  { icon: 'people', title: 'Reliable Distribution', body: 'Efficient logistics network ensuring timely delivery across the UAE and beyond.' },
];

export default function PulsesPage() {
  return (
    <>
      <Hero
        image={category.hero}
        title={<>Pulses, Rice<br />&amp; Spices</>}
        strapline={category.strapline}
        lede={category.intro}
        badges={category.badges}
      />

      <section className="section section--paper">
        <div className="wrap">
          <SectionHeading
            title="Our Premium Range"
            lede="A wide selection of high-quality staples and spices, sourced with care and delivered with consistency."
          />
          <MetaStrip items={category.meta} />
          <ProductGrid items={pulsesSpices} columns={4} />

        </div>
      </section>

      <section className="section section--paper-deep">
        <div className="wrap">
          <SectionHeading title="Why Partner with HENJ?" />
          <FeatureRow items={WHY} />
        </div>
      </section>

      <CtaBand
        title="Send Us Your Specification"
        body="Give us the variety, the grade, the packing and the destination. We will come back with origins, a price and a shipping window — and a sample from the exact lot before you commit."
        action="Request a Quote"
        message="Hello HENJ Trading, I would like to enquire about pulses, rice, grains and spices."
      />
    </>
  );
}

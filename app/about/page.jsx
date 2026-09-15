import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import FeatureRow from '@/components/FeatureRow';
import CtaBand from '@/components/CtaBand';
import StatStrip from '@/components/StatStrip';
import GroupCompanies from '@/components/GroupCompanies';
import Icon from '@/components/Icon';
import { site } from '@/content/site';

export const metadata = {
  title: 'About Us',
  description:
    'HENJ Trading LLC is a Dubai-based importer, exporter and distributor of fresh produce, pulses, rice, grains, spices and eggs, operating from Al Aweer Market, Ras Al Khor.',
};

const STRENGTHS = [
  { icon: 'globe', title: 'Global Sourcing', body: 'Direct relationships with farms, mills and packers across India, Turkey and beyond.' },
  { icon: 'truck', title: 'UAE Distribution', body: 'Our own road distribution reaches wholesalers, retailers and kitchens across the Emirates.' },
  { icon: 'shield', title: 'Quality & Reliability', body: 'Consistent grading, honest specifications and shipments that arrive when we said they would.' },
  { icon: 'handshake', title: 'Long-Term Partnership', body: 'We price and plan for the relationship, not the single order.' },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        image="/img/hero-about.jpg"
        title="About Us"
        strapline="Import & Export – Distribution"
        lede="Bridging global farms to Gulf markets, with freshness, consistency and value in every shipment."
      />

      <section className="section section--paper">
        <div className="wrap split split--wide-left">
          <div>
            <p className="eyebrow">Our story</p>
            <h2>Built Close to the Market. Connected Beyond Borders.</h2>
            <p>
              <strong className="co">HENJ Trading LLC</strong> operates from Al Aweer Fruits &amp; Vegetables Market in Dubai,
              connecting trusted growers and producers with wholesalers, retailers, restaurants and
              commercial kitchens across the UAE.
            </p>
            <p>
              Through daily air shipments from Kerala, we bring fresh fruits, vegetables, leafy greens
              and herbs to Dubai, supported by a wider portfolio of rice, pulses, grains, spices, dried
              goods and eggs.
            </p>
            {/* The closing claim carries the page's weight, so it is set like the
                other closing lines on the site rather than as another body paragraph. */}
            <p style={{ fontWeight: 600, color: 'var(--green-900)' }}>
              Built on careful sourcing, reliable service and lasting partnerships,{' '}
              <strong className="co">HENJ Trading LLC</strong> supplies businesses across the UAE and dispatches shipments
              by road from Dubai to Qatar, Kuwait and Bahrain.
            </p>
          </div>
          <div className="slot slot--square" style={{ borderRadius: 'var(--r-lg)', border: '1px solid var(--line)' }}>
            <img src="/img/about-grains.jpg" alt="" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="section section--paper-deep">
        <div className="wrap">
          <SectionHeading title="What We Do" align="left" />
          <div className="grid grid--3">
            {[
              { icon: 'search', title: 'Product Sourcing', body: 'We find the grade, origin and price point a customer actually needs, then hold suppliers to it shipment after shipment.' },
              { icon: 'plane', title: 'Import & Export', body: 'Air and sea freight in both directions, with documentation and clearance handled end to end.' },
              { icon: 'truck', title: 'Distribution', body: 'Road distribution across the UAE and onward supply to Qatar, Bahrain, Kuwait and Saudi Arabia.' },
            ].map((c) => (
              <div className="card" key={c.title} style={{ padding: '1.75rem' }}>
                <div className="feature-icon" style={{ margin: '0 0 1rem' }}><Icon name={c.icon} size={28} /></div>
                <h3 style={{ color: 'var(--green-900)' }}>{c.title}</h3>
                <p style={{ color: 'var(--ink-soft)', fontSize: '0.9rem' }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <div className="wrap">
          <div className="panel split">
            <div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 2.6vw, 2rem)' }}>How We Trade</h2>
              <p>
                <strong className="co">HENJ</strong> trades on its own account, taking direct responsibility for every
                consignment we purchase and supply. From selecting the source to delivering the order,
                every decision is guided by quality, market suitability and customer requirements.
              </p>
              <p>
                Fresh produce is sourced close to harvest and transported by air when speed and shelf
                life are critical. Rice, pulses, grains and spices move efficiently by container, while
                eggs receive suitable temperature-controlled handling. Each product follows the route
                and process required to protect its quality.
              </p>
              <p>
                We choose consistency over short-term volume. Products that do not meet our standards do
                not enter our supply chain. This disciplined approach, together with honest service and
                dependable delivery, is what turns first orders into lasting business relationships.
              </p>
            </div>
            <div className="slot slot--square" style={{ borderRadius: 'var(--r-lg)', border: '1px solid var(--line)' }}>
              <img src="/img/about-nuts.jpg" alt="" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--green">
        <div className="wrap">
          <div className="vm">
            <div className="vm-item">
              <div className="vm-icon"><Icon name="eye" size={28} /></div>
              <div>
                <h3>Our Vision</h3>
                <p>To be the most trusted food import and distribution partner in the region, empowering communities with safe, healthy and premium-quality food.</p>
              </div>
            </div>
            <div className="vm-rule" />
            <div className="vm-item">
              <div className="vm-icon"><Icon name="target" size={28} /></div>
              <div>
                <h3>Our Mission</h3>
                <p>To source the best produce from around the globe and deliver it reliably across the UAE and beyond, driven by integrity, innovation and long-term partnerships.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatStrip tone="paper-deep" />

      <section className="section section--paper">
        <div className="wrap">
          <SectionHeading title="Our Strengths" lede={`Supplying ${site.markets.join(', ')}.`} />
          <FeatureRow items={STRENGTHS} />
        </div>
      </section>

      <GroupCompanies />

      <CtaBand
        title="Come and See for Yourself"
        body="You are welcome at Al Aweer. Look at the goods, meet the people handling them, and decide whether this is how you want your supply run."
        action="Arrange a Visit"
        message="Hello HENJ Trading, I would like to visit you at Al Aweer or learn more about working together."
      />
    </>
  );
}

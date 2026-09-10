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
    'HENJ Trading L.L.C. is a Dubai-based importer, exporter and distributor of fresh produce, pulses, rice, grains, spices and eggs, operating from Al Aweer Market, Ras Al Khor.',
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
        image="/img/hero-vegetables.jpg"
        title="About Us"
        strapline="Import & Export – Distribution"
        lede="Bridging global farms to Gulf markets — with freshness, consistency and value in every shipment."
        center
      />

      <section className="section section--paper">
        <div className="wrap split split--wide-left">
          <div>
            <p className="eyebrow">Our story</p>
            <h2>A Trading House Built on the Market Floor.</h2>
            <p>
              Most food importers work from an office and take their supplier&apos;s word for it. HENJ
              was built the other way round — from a stand at Al Aweer Fruits &amp; Vegetables Market in
              Ras Al Khor, where the region&apos;s fresh trade is actually done, in person, every morning.
            </p>
            <p>
              That is not nostalgia. It is how we know what a crate really contains before it is
              bought, why a price moved this week, and which supplier quietly changed his grade. The
              things that decide whether a shipment is worth having are visible on the floor and
              invisible on a spec sheet.
            </p>
            <p>
              From that base we buy, import and distribute four ranges — fresh produce, pulses and
              grains, spices, dried fruit and nuts, and eggs — to wholesalers, retailers, hotels and
              processors across the Emirates and the wider Gulf.
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
              { icon: 'search', title: 'Product Sourcing', body: 'We find the grade, origin and price point a customer actually needs — then hold suppliers to it shipment after shipment.' },
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
              <h2 style={{ fontSize: 'clamp(1.5rem, 2.6vw, 2rem)' }}>How We Actually Trade</h2>
              <p>
                We buy on our own account rather than broking someone else&apos;s cargo. If a consignment
                is wrong, it is our money and our name — which is the only reason a buyer should believe
                a supplier who says quality matters to them.
              </p>
              <p>
                Fresh produce is bought close to harvest and flown, because a week of sea freight is a
                week of shelf life gone. Rice, pulses and spices move by container, where the economics
                belong. Eggs travel temperature-controlled. Each range gets the route it needs, not the
                route that happens to be cheapest for us.
              </p>
              <p>
                We would rather turn down an order than fill it with stock we would not sell twice. Most
                of our business is repeat business, and that only works one way.
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
                <p>To source the best produce from around the globe and deliver it reliably across the UAE and beyond — driven by integrity, innovation and long-term partnerships.</p>
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

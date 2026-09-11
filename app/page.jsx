import Link from 'next/link';
import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import FeatureRow from '@/components/FeatureRow';
import CtaBand from '@/components/CtaBand';
import StatStrip from '@/components/StatStrip';
import RoadFreightBand from '@/components/RoadFreightBand';
import Icon from '@/components/Icon';
import { site } from '@/content/site';
import Faq from '@/components/Faq';
import GroupCompanies from '@/components/GroupCompanies';
import { categories, faqs } from '@/content/products';

export const metadata = {
  title: 'Food Import, Export & Distribution in Dubai',
  description:
    'HENJ Trading L.L.C. imports, exports and distributes premium fruits, vegetables, pulses, rice, grains, spices and eggs from Al Aweer Market, Dubai, across the UAE and the Gulf.',
};

const WHY = [
  { icon: 'sourced', title: 'Direct Sourcing', body: 'We work directly with trusted farms and manufacturers worldwide.' },
  { icon: 'quality', title: 'Assured Quality', body: 'Rigorous quality checks and compliance with international food standards.' },
  { icon: 'truck', title: 'Seamless Logistics', body: 'Efficient import, storage and distribution ensuring freshness and on-time delivery.' },
  { icon: 'people', title: 'Market-Focused Supply', body: 'We understand regional needs and deliver products that keep your business ahead.' },
];

export default function HomePage() {
  return (
    <>
      <Hero
        image="/img/hero-home.jpg"
        title="Fresh From the World. Delivered Across the Gulf."
        strapline="Import & Export – Distribution"
        lede="HENJ Trading L.L.C. supplies fruits, vegetables, pulses, rice, grains, spices and eggs to wholesalers, retailers and kitchens across the UAE and beyond."
        route
        badges={['Carefully Sourced', 'Premium Quality', 'Air Freighted', 'Timely Delivered']}
      />

      {/* Intro + experience seal */}
      <section className="section section--paper">
        <div className="wrap split split--wide-left">
          <div>
            <p className="eyebrow">Welcome to HENJ Trading</p>
            <h2>Premium Food Import &amp; Distribution for Seamless Regional Supply.</h2>
            <p>
              HENJ Trading L.L.C. is a trusted importer and distributor of high-quality fruits &amp;
              vegetables, pulses, rice, grains, spices and eggs across the UAE and the wider region.
            </p>
            <p>
              With a strong commitment to quality, reliability and long-term partnerships, we bridge
              global farms to local markets — ensuring freshness, consistency and value in every shipment.
            </p>
            <Link href="/about" className="btn btn--green" style={{ marginTop: '0.5rem' }}>
              About HENJ <Icon name="arrow" size={18} />
            </Link>
          </div>
          <div style={{ position: 'relative' }}>
            <div className="slot slot--square" style={{ borderRadius: 'var(--r-lg)', border: '1px solid var(--line)' }}>
              <img src="/img/farm-vegetables.jpg" alt="" loading="lazy" />
            </div>
            <div className="seal" style={{ position: 'absolute', top: '-18px', right: '-10px' }}>
              <b>12</b>
              <span>Years of<br />Experience</span>
            </div>
          </div>
        </div>
      </section>

      <StatStrip tone="green" />

      {/* Trust panel */}
      <section className="section section--paper" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="panel split">
            <div className="grid grid--2">
              {['hero-vegetables', 'about-grains', 'about-nuts', 'hero-services'].map((img) => (
                <div key={img} className="slot slot--square" style={{ borderRadius: 'var(--r-md)', border: '1px solid var(--line)' }}>
                  <img src={`/img/${img}.jpg`} alt="" loading="lazy" />
                </div>
              ))}
            </div>
            <div>
              <p className="eyebrow">Across every range</p>
              <h2 style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.1rem)' }}>The Same Standard, Four Different Trades</h2>
              <p>
                Fresh produce, grains and pulses, dried fruit and nuts, eggs. Four trades that are bought
                differently, priced differently and moved differently — a crate of curry leaves and a
                container of chickpeas have almost nothing in common except who is answerable for them.
              </p>
              <p>
                What does not change is the standard. Every line is bought against a written grade, checked
                before it moves rather than after it lands, and packed for the journey it actually has to
                make. A 5 kg carton of cardamom gets the same attention as a full reefer of onions.
              </p>
              <p style={{ fontWeight: 600, color: 'var(--green-900)' }}>
                Reliable supply. Consistent quality. Built on trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product categories */}
      <section className="section section--paper-deep">
        <div className="wrap">
          <SectionHeading
            eyebrow="Our Products"
            title="What We Supply"
            lede="Four core ranges, each sourced, handled and shipped to the standard that category demands."
          />
          <div className="grid grid--3">
            {categories.map((c) => (
              <Link key={c.slug} href={c.href} className="card card--glow" style={{ display: 'block' }}>
                <div className="slot" style={{ padding: 0 }}>
                  <img src={c.hero} alt="" loading="lazy" />
                </div>
                <div className="card-body">
                  <h3>{c.title}</h3>
                  <p>{c.summary}</p>
                  <span className="btn btn--ghost" style={{ marginTop: '0.9rem', padding: '0.55rem 1.2rem', fontSize: '0.85rem' }}>
                    Explore <Icon name="arrow" size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Who we supply */}
      <section className="section section--paper">
        <div className="wrap">
          <SectionHeading
            eyebrow="Who we supply"
            title="Built for the People Who Move Food"
            lede="Different buyers need different things from a supplier. Tell us which one you are and the conversation gets shorter."
          />
          <div className="grid grid--3">
            {[
              { icon: 'building', title: 'Wholesalers & Traders', body: 'Market-floor volumes at consistent grades, priced to leave you room.' },
              { icon: 'box', title: 'Supermarkets & Retail', body: 'Retail-ready packing, dependable replenishment and shelf life you can plan around.' },
              { icon: 'people', title: 'Hotels, Catering & HORECA', body: 'Daily fresh delivery, plus full containers of rice, dal and sugar for hospitality catering companies in Abu Dhabi and beyond.' },
              { icon: 'search', title: 'Food Processors', body: 'Bulk raw material bought to a written specification, lot after lot.' },
              { icon: 'ship', title: 'Re-exporters', body: 'Consolidated mixed loads for onward shipment into Saudi Arabia, Qatar, Bahrain and Kuwait.' },
              { icon: 'shield', title: 'Institutional Buyers', body: 'Camps, canteens and contract caterers needing steady volume at a held price.' },
            ].map((a) => (
              <div className="card" key={a.title} style={{ padding: '1.6rem' }}>
                <div className="feature-icon" style={{ margin: '0 0 0.9rem' }}><Icon name={a.icon} size={26} /></div>
                <h3 style={{ color: 'var(--green-900)', fontSize: '1.02rem' }}>{a.title}</h3>
                <p style={{ color: 'var(--ink-soft)', fontSize: '0.87rem' }}>{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catering supply — the one offer with its own commercial shape, so it
          gets a slab here rather than staying a line in the buyer grid above. */}
      <section className="section section--paper-deep">
        <div className="wrap split split--wide-left">
          <div>
            <p className="eyebrow">Catering supply</p>
            <h2>Full Container Loads for Hospitality Kitchens.</h2>
            <p>
              Catering companies in Abu Dhabi and across the Emirates take rice, dal, sugar and
              spices from us by the container rather than the pallet — the grade fixed, the price
              held for the contract term, and deliveries released against consumption instead of
              dumped on the store at once.
            </p>
            <p>
              Where one line will not fill a container, we consolidate several staples into a
              single load, so a kitchen gets container economics without a year of one commodity
              sitting in the dry store.
            </p>
            <Link href="/catering-supply" className="btn btn--green" style={{ marginTop: '0.5rem' }}>
              See how catering supply works <Icon name="arrow" size={18} />
            </Link>
          </div>
          <div className="panel">
            <p className="eyebrow">What fills a container</p>
            <div style={{ display: 'grid', gap: '0.7rem', marginTop: '0.25rem' }}>
              {[
                'Rice — by grade and origin',
                'Dal, pulses and chickpeas',
                'Sugar, oil and cooking staples',
                'Spices, whole and ground',
              ].map((t) => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <Icon name="box" size={18} style={{ color: 'var(--gold-deep)', flex: 'none' }} />
                  <span style={{ fontSize: '0.88rem', fontWeight: 500, color: 'var(--green-900)' }}>{t}</span>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '0.86rem', color: 'var(--ink-soft)', marginTop: '1.25rem', marginBottom: 0 }}>
              Priced for the term, delivered by our own vehicles, scheduled around your menu cycle.
            </p>
          </div>
        </div>
      </section>

      {/* Markets + shipment modes */}
      <section className="section section--green">
        <div className="wrap">
          <SectionHeading
            eyebrow="Where We Deliver"
            title="Supplying the UAE and the Gulf"
            lede="From our base at Al Aweer Fruits & Vegetables Market in Ras Al Khor, Dubai."
            gold
          />
          <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center', marginBottom: '3rem' }}>
            {site.markets.map((m) => (
              <li
                key={m}
                style={{
                  border: '1px solid rgba(201,162,39,0.45)', borderRadius: '999px',
                  padding: '0.5rem 1.25rem', fontSize: '0.9rem', color: 'rgba(255,255,255,0.9)',
                }}
              >
                {m}
              </li>
            ))}
          </ul>
          <div className="grid grid--2">
            {[
              { icon: 'plane', title: 'Air Shipments', body: 'Daily air freight for fresh produce, leaves and herbs — packed at source and moving within hours so shelf life reaches the customer, not the runway.' },
              { icon: 'ship', title: 'Sea Shipments', body: 'Container loads of rice, pulses, grains and spices, consolidated and documented for efficient, economical bulk supply.' },
            ].map((s) => (
              <div key={s.title} style={{ display: 'flex', gap: '1.25rem' }}>
                <div className="vm-icon"><Icon name={s.icon} size={28} /></div>
                <div>
                  <h3 style={{ color: 'var(--gold)', fontSize: '1.1rem', fontWeight: 600 }}>{s.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: '0.9rem' }}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Road to the Gulf — the third mode, and the one buyers outside the UAE scan for */}
      <RoadFreightBand />

      {/* What goes wrong */}
      <section className="section section--paper">
        <div className="wrap split split--wide-left">
          <div>
            <p className="eyebrow">The honest part</p>
            <h2>Three Ways a Food Shipment Goes Wrong.</h2>
            <ul style={{ display: 'grid', gap: '1.1rem', marginTop: '1.5rem' }}>
              {[
                { title: 'It arrives tired.', body: 'The cold chain broke somewhere between the farm and the aircraft, and nobody logged it. The produce looks fine on arrival and fails two days later on your shelf.' },
                { title: 'The second load is not the first.', body: 'You approved a sample, agreed a price, and the grade quietly drifted once the order was repeating.' },
                { title: 'You hear about the delay from your customer.', body: 'The shipment slipped days ago. The supplier hoped to make it up and said nothing.' },
              ].map((x) => (
                <li key={x.title} style={{ display: 'flex', gap: '0.9rem' }}>
                  <span style={{ color: 'var(--red)', flex: 'none', marginTop: '2px' }}><Icon name="close" size={20} strokeWidth={2} /></span>
                  <span>
                    <strong style={{ display: 'block', color: 'var(--green-900)', fontSize: '0.98rem' }}>{x.title}</strong>
                    <span style={{ fontSize: '0.88rem', color: 'var(--ink-soft)' }}>{x.body}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="panel">
            <p className="eyebrow">How we prevent it</p>
            <h3 style={{ fontSize: '1.35rem', color: 'var(--green-900)' }}>We buy where we can see the goods.</h3>
            <p style={{ fontSize: '0.92rem' }}>
              HENJ works from the floor of Al Aweer Fruits &amp; Vegetables Market. We inspect what
              lands, reject what misses the grade, and move the rest the same day — so the problem is
              caught before it becomes your problem.
            </p>
            <p style={{ fontSize: '0.92rem' }}>
              We trade on our own account, which means the grade you approved is our responsibility,
              not a supplier&apos;s excuse. And if a shipment is going to be late, you hear it from us
              first — early enough to do something about it.
            </p>
            <div style={{ display: 'grid', gap: '0.7rem', marginTop: '1.25rem' }}>
              {['Inspected before it moves', 'Same grade, shipment after shipment', 'Told early when something slips'].map((t) => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <Icon name="shield" size={18} style={{ color: 'var(--gold-deep)', flex: 'none' }} />
                  <span style={{ fontSize: '0.88rem', fontWeight: 500, color: 'var(--green-900)' }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Short services intro */}
      <section className="section section--paper-deep">
        <div className="wrap">
          <SectionHeading
            eyebrow="What We Do"
            title="More Than Supply"
            lede="We handle the whole chain — or just the part you need."
          />
          <div className="grid grid--3">
            {[
              { icon: 'globe', title: 'Import & Export', body: 'Two-way trade with sourcing, buying and compliance handled by us.' },
              { icon: 'plane', title: 'Air & Sea Freight', body: 'Perishables by air, dry goods by container — whichever the cargo demands.' },
              { icon: 'truck', title: 'Road Distribution', body: 'Our own vehicles moving stock across the Emirates from Al Aweer.' },
              { icon: 'search', title: 'Product Sourcing', body: 'Tell us the grade, origin and price point — we find it and hold suppliers to it.' },
              { icon: 'box', title: 'Packaging', body: 'Export cartons, retail packs and custom packing to your specification.' },
              { icon: 'doc', title: 'Documentation', body: 'Certificates, clearance and shipment coordination, prepared ahead of arrival.' },
            ].map((s) => (
              <div key={s.title} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div className="feature-icon" style={{ margin: 0, width: 52, height: 52, flex: 'none' }}>
                  <Icon name={s.icon} size={24} />
                </div>
                <div>
                  <h3 style={{ color: 'var(--green-900)', fontSize: '1rem', fontWeight: 600, marginBottom: '0.25rem' }}>{s.title}</h3>
                  <p style={{ color: 'var(--ink-soft)', fontSize: '0.86rem', margin: 0 }}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link href="/services" className="btn btn--green">
              View All Services <Icon name="arrow" size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="section section--green">
        <div className="wrap">
          <SectionHeading
            eyebrow="How we work"
            title="From Enquiry to Delivery"
            lede="Four steps, one point of contact throughout."
            gold
          />
          <div className="grid grid--4">
            {[
              { n: '01', title: 'Tell Us What You Need', body: 'Product, grade, volume and destination. We come back with origin options, timing and a price.' },
              { n: '02', title: 'We Source and Inspect', body: 'We buy to the agreed grade and lay eyes on it at origin or on the floor before it ships.' },
              { n: '03', title: 'Freight and Clearance', body: 'Flown or shipped according to what the cargo can survive, with paperwork ready before it lands.' },
              { n: '04', title: 'Delivered On the Date Agreed', body: 'Across the UAE by our own vehicles, or forwarded into the wider Gulf.' },
            ].map((s2) => (
              <div key={s2.n}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.4rem', color: 'var(--gold)', lineHeight: 1, marginBottom: '0.6rem' }}>{s2.n}</div>
                <h3 style={{ color: '#fff', fontSize: '1rem', fontWeight: 600 }}>{s2.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: '0.86rem' }}>{s2.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="section section--paper">
        <div className="wrap">
          <SectionHeading title="Why Choose HENJ?" />
          <FeatureRow items={WHY} />
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--paper-deep">
        <div className="wrap">
          <SectionHeading
            eyebrow="Before you enquire"
            title="Questions Buyers Ask First"
            lede="Quantities, timing and terms — answered plainly."
          />
          <Faq items={faqs.slice(0, 5)} />
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link href="/faq" className="btn btn--green">
              Read all questions <Icon name="arrow" size={18} />
            </Link>
          </div>
        </div>
      </section>

      <GroupCompanies tone="paper" />

      <CtaBand
        title="Let's Build a Stronger Food Supply Chain Together"
        body="Partner with HENJ Trading L.L.C. for quality you can trust and service you can rely on."
        action="Partner With Us"
      />
    </>
  );
}

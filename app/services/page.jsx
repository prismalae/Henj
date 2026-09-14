import Link from 'next/link';
import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import CtaBand from '@/components/CtaBand';
import RoadFreightBand from '@/components/RoadFreightBand';
import Icon from '@/components/Icon';
import { site } from '@/content/site';

export const metadata = {
  title: 'Services',
  description:
    'Import and export, air and sea shipments, road and UAE distribution, catering and contract supply, GCC supply, product sourcing, packaging, logistics and shipment documentation from HENJ Trading LLC',
};

const SERVICES = [
  { icon: 'globe', title: 'Import & Export', body: 'Two-way trade in fresh produce, dry goods and eggs, with the sourcing, buying and compliance handled by us.' },
  { icon: 'plane', title: 'Air Shipments', body: 'Fast air freight for perishables — the difference between produce that sells and produce that gets marked down.' },
  { icon: 'ship', title: 'Sea Shipments', body: 'Container loads of rice, pulses, grains and spices, consolidated for economical bulk supply.' },
  { icon: 'truck', title: 'Road Distribution', body: 'Our own vehicles moving stock from Al Aweer across the Emirates, and overland into Qatar, Bahrain and Kuwait.' },
  { icon: 'pin', title: 'UAE Distribution', body: 'Wholesale, retail and institutional supply throughout Dubai, Abu Dhabi, Sharjah and the northern Emirates.' },
  { icon: 'building', title: 'Catering & Contract Supply', body: 'Full container loads of rice, dal, sugar and other dry staples for hospitality catering companies in Abu Dhabi and across the Emirates, delivered on a standing schedule.' },
  { icon: 'people', title: 'GCC Supply', body: `Onward supply to ${site.markets.filter((m) => m !== 'United Arab Emirates').join(', ')}.` },
  { icon: 'search', title: 'Product Sourcing', body: 'Tell us the grade, origin, spec and price point — we find it and hold the supplier to it.' },
  { icon: 'box', title: 'Packaging', body: 'Export cartons, retail packs, private-label and custom packing to your specification.' },
  { icon: 'shield', title: 'Logistics', body: 'Cold chain, warehousing and consolidation — the unglamorous work that decides whether food arrives sellable.' },
  { icon: 'doc', title: 'Documentation & Coordination', body: 'Certificates, clearance and shipment coordination, so your consignment does not sit waiting on paperwork.' },
];

export default function ServicesPage() {
  return (
    <>
      <Hero
        image="/img/hero-services.jpg"
        title="Our Services"
        strapline="Import & Export – Distribution"
        lede="Everything between a farm somewhere in the world and a shelf somewhere in the Gulf — sourcing, freight, clearance, packing and delivery."
        center
      />

      <section className="section section--paper">
        <div className="wrap">
          <SectionHeading
            eyebrow="What we handle"
            title="End-to-End Supply"
            lede="Take the whole chain or just the part you need."
          />
          <div className="grid grid--3">
            {SERVICES.map((s) => (
              <div className="card" key={s.title} style={{ padding: '1.75rem' }}>
                <div className="feature-icon" style={{ margin: '0 0 1rem' }}><Icon name={s.icon} size={28} /></div>
                <h3 style={{ color: 'var(--green-900)', fontSize: '1.05rem' }}>{s.title}</h3>
                <p style={{ color: 'var(--ink-soft)', fontSize: '0.88rem' }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--paper-deep">
        <div className="wrap">
          <div className="panel split">
            <div>
              <p className="eyebrow">Catering &amp; contract supply</p>
              <h2 style={{ fontSize: 'clamp(1.5rem, 2.6vw, 2rem)' }}>Container Loads for Catering Kitchens.</h2>
              <p>
                Hospitality catering companies in Abu Dhabi and across the Emirates take dry staples
                from us by the full container — rice, dal, sugar and spices — rather than pallet by
                pallet. It is the cheapest way to buy volume that is going to be consumed anyway, and
                it takes the weekly reordering off the kitchen.
              </p>
              <p>
                We hold the grade and the price for the term agreed, schedule deliveries against your
                consumption rather than our convenience, and consolidate mixed staples into one load
                where a full container of a single line would sit too long.
              </p>
              <Link className="btn btn--ghost" href="/catering-supply" style={{ marginTop: '0.5rem' }}>
                Catering supply in detail <Icon name="arrow" size={18} />
              </Link>
            </div>
            <div style={{ display: 'grid', gap: '0.7rem' }}>
              {[
                'Full container loads of rice, dal, sugar and dry staples',
                'Standing delivery schedules for camps, canteens and hotel kitchens',
                'Grade and price held for the contract term',
                'Mixed consolidation when one line will not fill a container',
              ].map((t) => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <Icon name="shield" size={18} style={{ color: 'var(--gold-deep)', flex: 'none' }} />
                  <span style={{ fontSize: '0.88rem', fontWeight: 500, color: 'var(--green-900)' }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <RoadFreightBand />

      <section className="section section--green">
        <div className="wrap">
          <SectionHeading
            eyebrow="How a shipment runs"
            title="From Enquiry to Delivery"
            lede="Four steps, one point of contact throughout."
            gold
          />
          <div className="grid grid--4">
            {[
              { n: '01', title: 'Enquiry & Spec', body: 'You tell us the product, grade, volume and destination. We come back with origin options and pricing.' },
              { n: '02', title: 'Sourcing & Inspection', body: 'We buy against the agreed spec and check it before it moves — not after it lands.' },
              { n: '03', title: 'Freight & Clearance', body: 'Air or sea as the cargo demands, with documentation prepared ahead of arrival.' },
              { n: '04', title: 'Delivery', body: 'Distributed across the UAE or forwarded into the wider Gulf, on the date agreed.' },
            ].map((s) => (
              <div key={s.n}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.4rem', color: 'var(--gold)', lineHeight: 1, marginBottom: '0.6rem' }}>{s.n}</div>
                <h3 style={{ color: '#fff', fontSize: '1rem', fontWeight: 600 }}>{s.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: '0.86rem' }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Tell Us What You Need Supplied"
        body="Send us the product, the volume and the destination — we will come back with origins, timing and a price."
        action="Request a Quote"
        message="Hello HENJ Trading, I would like to request a quote."
      />
    </>
  );
}

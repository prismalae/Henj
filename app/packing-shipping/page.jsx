import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import SpecTable from '@/components/SpecTable';
import CtaBand from '@/components/CtaBand';
import RoadFreightBand from '@/components/RoadFreightBand';
import Icon from '@/components/Icon';
import { packingTable, containerGuide, modeGuide } from '@/content/products';

export const metadata = {
  title: 'Packing & Shipping',
  description:
    'Packing formats, palletisation and container loadability by product family, plus when HENJ Trading LLC ships by air, by sea reefer or by road across the UAE and the Gulf.',
};

export default function PackingShippingPage() {
  return (
    <>
      <Hero
        image="/img/hero-shipping.jpg"
        title="Packing & Shipping"
        strapline="What fits in a container, and how it travels."
        lede="A working reference for buyers sizing an order: packing formats, pallet configuration, container loadability and the honest trade-off between air and sea."
      />

      <section className="section section--paper">
        <div className="wrap">
          <SectionHeading
            eyebrow="Reference"
            title="Packing by Product Family"
            lede="Standard formats. Private label and custom packing are available on most dry lines."
          />
          <SpecTable
            columns={packingTable.columns}
            rows={packingTable.rows}
            caption="Indicative formats: final packing is confirmed per order."
          />
        </div>
      </section>

      <section className="section section--paper-deep">
        <div className="wrap">
          <SectionHeading
            eyebrow="Loadability"
            title="What Fits in a Container"
            lede="Approximate, and dependent on packing density and pallet configuration."
          />
          <div className="grid grid--4">
            {containerGuide.map((c) => (
              <div className="card" key={c.format} style={{ padding: '1.5rem' }}>
                <div className="feature-icon" style={{ margin: '0 0 0.9rem' }}><Icon name="box" size={26} /></div>
                <h3 style={{ color: 'var(--green-900)', fontSize: '1rem' }}>{c.format}</h3>
                <p style={{ color: 'var(--ink-soft)', fontSize: '0.86rem' }}>{c.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RoadFreightBand />

      <section className="section section--green">
        <div className="wrap">
          <SectionHeading
            eyebrow="Choosing a mode"
            title="Air, Sea or Road"
            lede="The right answer is set by shelf life and volume, not by preference."
            gold
          />
          <div className="grid grid--3">
            {modeGuide.map((m) => (
              <div key={m.mode}>
                <div className="feature-icon" style={{ margin: '0 0 1rem', background: 'rgba(201,162,39,0.14)', color: 'var(--gold)' }}>
                  <Icon name={m.mode.startsWith('Air') ? 'plane' : m.mode.startsWith('Sea') ? 'ship' : 'truck'} size={28} />
                </div>
                <h3 style={{ color: 'var(--gold)', fontSize: '1.1rem', fontWeight: 600 }}>{m.mode}</h3>
                <dl style={{ margin: '0 0 0.9rem', display: 'grid', gap: '0.5rem' }}>
                  <div>
                    <dt style={{ fontSize: '0.68rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)' }}>Best for</dt>
                    <dd style={{ margin: 0, fontSize: '0.88rem', color: 'rgba(255,255,255,0.9)' }}>{m.best}</dd>
                  </div>
                  <div>
                    <dt style={{ fontSize: '0.68rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)' }}>Transit</dt>
                    <dd style={{ margin: 0, fontSize: '0.88rem', color: 'rgba(255,255,255,0.9)' }}>{m.transit}</dd>
                  </div>
                </dl>
                <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '0.85rem' }}>{m.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Tell Us the Volume and Destination"
        body="Send the product, the grade, the quantity and where it is going. We will come back with packing, mode, transit time and a price."
        action="Request a Quote"
        message="Hello HENJ Trading, I would like a quote including packing and shipping details."
      />
    </>
  );
}

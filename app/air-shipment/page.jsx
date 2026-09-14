import Link from 'next/link';
import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import SpecTable from '@/components/SpecTable';
import MetaStrip from '@/components/MetaStrip';
import CtaBand from '@/components/CtaBand';
import RoadFreightBand from '@/components/RoadFreightBand';
import Icon from '@/components/Icon';
import { site } from '@/content/site';

export const metadata = {
  title: 'Air Shipment',
  description:
    'Daily air freight of fruits, vegetables, leafy greens and herbs from Kerala to Dubai: packed at source, flown out overnight, cleared at Al Aweer and delivered the same day by HENJ Trading LLC',
};

/* The lines that actually justify a seat on an aircraft. Shelf life and packing
   are read from the catalogue in content/products.js so the two pages cannot
   drift apart; the mode column is the honest answer, not the flattering one. */
const FLOWN = {
  columns: ['Line', 'Why it flies', 'Packing', 'Mode'],
  rows: [
    ['Curry leaves, mint & coriander', 'Days of shelf life, not weeks: value is lost on the ground', '100 / 200 g bunches in vented cartons', 'Air only'],
    ['Banana leaves', 'Bruise and dry out quickly; sold on appearance', 'Folded, lined cartons', 'Air only'],
    ['Drumsticks (moringa)', 'Tender pods stiffen and shrivel within days of picking', 'Bundled, 5 / 10 kg cartons', 'Air only'],
    ['Tender coconut', 'Cut-to-drink window is short and the water spoils first', 'Trimmed, cartoned by count', 'Air only'],
    ['Green chilli, beans & gourds', 'Firmness and colour carry the price', '5 / 10 kg vented cartons', 'Air, sea reefer in volume'],
    ['Seasonal fruit', 'Ripeness peaks in transit, so days matter at both ends', '3 / 5 / 10 kg cartons', 'Air, sea reefer in volume'],
    ['Cardamom & aromatic spice', 'Aroma is the product, and it fades with time and heat', 'Lined cartons and vacuum packs', 'Air preferred'],
    ['Samples & urgent top-ups', 'A gap on the shelf costs more than the freight', 'As per line', 'Air'],
  ],
};

/* One shipment, end to end. The clock is the point of the page, so each step
   carries the hour it happens rather than a vague adjective. */
const DAY = [
  { n: '01', title: 'Picked That Morning', body: 'Harvested at farm level in Kerala and moved to the pack house the same morning, while field heat is still coming out of the produce.' },
  { n: '02', title: 'Graded & Packed at Source', body: 'Sorted to grade, trimmed, bunched and packed into vented export cartons at origin, so nothing is repacked later in a warmer room.' },
  { n: '03', title: 'Documented & Uplifted', body: 'Phytosanitary certificate, invoice and packing list raised against the booking, then delivered to the airline for the evening departure.' },
  { n: '04', title: 'Overnight Flight', body: 'Four hours in the air from Kerala to Dubai. The produce is in the destination market before it would otherwise have left the district.' },
  { n: '05', title: 'Cleared on Arrival', body: 'Customs and food-control clearance handled on landing, with cool storage at the airport if a consignment has to wait for the run.' },
  { n: '06', title: 'Delivered the Same Day', body: 'Broken down at Al Aweer and out to the customer on our own vehicles, on the day the aircraft lands wherever the schedule allows.' },
];

const GUARDS = [
  { icon: 'leaf', title: 'Packed at Origin', body: 'Every carton is made up in Kerala, so the produce is handled once and travels in the box it was graded into.' },
  { icon: 'shield', title: 'Cold Chain Held', body: 'Cool storage before uplift, cool storage on arrival, refrigerated vehicles for the last leg. The gaps are where freshness is lost.' },
  { icon: 'doc', title: 'Papers With the Freight', body: 'Phytosanitary certificate, certificate of origin, invoice and packing list travel with the consignment, not behind it.' },
  { icon: 'eye', title: 'Checked on Arrival', body: 'Consignments are inspected at Al Aweer before release. Anything that did not travel well is taken out, not passed on.' },
];

export default function AirShipmentPage() {
  return (
    <>
      <Hero
        image="/img/hero-air.jpg"
        title="Air Shipment"
        strapline="Freshness Takes the Fastest Route."
        lede="Every day, HENJ Trading LLC airlifts carefully selected fruits, vegetables, leafy greens and herbs from Kerala to Dubai, shortening the distance between harvest and market while protecting freshness at every stage."
        badges={['Farm Sourced', 'Air Freighted', 'Cold Chain', 'Daily Supply']}
      />

      <section className="section section--paper">
        <div className="wrap split split--wide-left">
          <div>
            <p className="eyebrow">The Kerala run</p>
            <h2>A Day Old, Not a Week Old.</h2>
            <p>
              Curry leaves picked in Kerala on Monday morning are on a Dubai counter on Tuesday. By
              sea the same bunch would arrive with most of its shelf life already spent, and the buyer
              would be marking it down before it ever reached a kitchen. That gap, between what was
              harvested and what is worth selling, is the whole reason this range flies.
            </p>
            <p>
              We run it daily rather than weekly. A daily uplift means a buyer orders against what the
              week actually needs instead of forecasting a container, and a short crop or a sudden
              order can be answered the next morning rather than the next shipment.
            </p>
            <p>
              Air freight costs more per kilogram and we do not pretend otherwise. For a product with
              a five-day life it is the only mode that delivers something still worth paying for,
              which is why the heavy, long-life lines stay on the water where they belong.
            </p>
            <MetaStrip
              items={[
                'Daily uplift from Kerala',
                'Roughly four hours in the air',
                'Cleared and delivered on arrival day',
                'Cold chain held end to end',
              ]}
            />
          </div>
          <div className="panel">
            <p className="eyebrow">At a glance</p>
            <dl className="panel-facts">
              {[
                ['Origin', 'Kerala, India: farm level and pack house'],
                ['Destination', 'Dubai, United Arab Emirates'],
                ['Frequency', 'Daily, including urgent top-ups'],
                ['Transit', '1–3 days from harvest to customer'],
                ['Range', 'Fruit, vegetables, leafy greens, herbs and aromatic spice'],
                ['Onward', `Road distribution across the UAE and into ${site.markets.filter((m) => m !== 'United Arab Emirates' && m !== 'Saudi Arabia').join(', ')}`],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="section section--paper-deep">
        <div className="wrap">
          <SectionHeading
            eyebrow="What flies"
            title="The Lines That Earn Their Seat"
            lede="Air freight is worth paying for where shelf life is measured in days. Everything else moves by sea reefer, and we will tell you which is which."
          />
          <SpecTable
            columns={FLOWN.columns}
            rows={FLOWN.rows}
            caption="Indicative: availability, grade and packing are confirmed per shipment and by season."
          />
        </div>
      </section>

      <section className="section section--green">
        <div className="wrap">
          <SectionHeading
            eyebrow="One shipment, end to end"
            title="From Field to Dubai in a Day"
            lede="Six steps, one point of contact, and a clock running through all of them."
            gold
          />
          <div className="grid grid--3">
            {DAY.map((s) => (
              <div key={s.n}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.4rem', color: 'var(--gold)', lineHeight: 1, marginBottom: '0.6rem' }}>{s.n}</div>
                <h3 style={{ color: 'var(--gold)', fontSize: '1.05rem', fontWeight: 600 }}>{s.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: '0.86rem' }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <div className="wrap">
          <SectionHeading
            eyebrow="Protecting freshness"
            title="Where Freshness Is Actually Lost"
            lede="Rarely in the air. It goes in the waiting: on a hot loading bay, in a repack, or in a consignment held back for paperwork."
          />
          <div className="grid grid--4">
            {GUARDS.map((g) => (
              <div className="card" key={g.title} style={{ padding: '1.5rem' }}>
                <div className="feature-icon" style={{ margin: '0 0 0.9rem' }}><Icon name={g.icon} size={26} /></div>
                <h3 style={{ color: 'var(--green-900)', fontSize: '1rem' }}>{g.title}</h3>
                <p style={{ color: 'var(--ink-soft)', fontSize: '0.86rem' }}>{g.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RoadFreightBand tone="paper-deep" />

      <section className="section section--paper">
        <div className="wrap">
          <div className="panel split">
            <div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 2.6vw, 2rem)' }}>Who Buys This Way</h2>
              <p>
                Retailers and supermarkets whose produce aisle is judged on how the leaves look;
                restaurant and catering kitchens cooking South Indian menus that need the real
                ingredient rather than the nearest substitute; and wholesalers at Al Aweer supplying
                both.
              </p>
              <p>
                Most start with a short weekly list of leaves, herbs and drumsticks, then add lines as the
                run proves itself. Fresh produce is a weekly conversation, not an annual contract.
              </p>
              <Link className="btn btn--ghost" href="/products/fruits-vegetables" style={{ marginTop: '0.5rem' }}>
                See the fresh produce range <Icon name="arrow" size={18} />
              </Link>
            </div>
            <div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 2.6vw, 2rem)' }}>When Sea Is the Better Answer</h2>
              <p>
                Onions, coconuts, potatoes, rice, pulses and spices in volume do not need an aircraft,
                and paying for one only makes the landed cost worse. Those move by sea reefer or
                ventilated dry container, and the loadability is set out on the packing page.
              </p>
              <p>
                Where a customer takes both, the two arrive on the same delivery run: the container
                staples and the daily fresh order from one supplier.
              </p>
              <Link className="btn btn--ghost" href="/packing-shipping" style={{ marginTop: '0.5rem' }}>
                Packing &amp; shipping reference <Icon name="arrow" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Send Us This Week's List"
        body="Tell us the lines, the grades and the quantities you need landed in Dubai. We will come back with what is good right now, what it costs air freighted, and the day it arrives."
        action="Book an Air Shipment"
        message="Hello HENJ Trading, I would like to enquire about air shipment of fresh produce from Kerala to Dubai."
      />
    </>
  );
}

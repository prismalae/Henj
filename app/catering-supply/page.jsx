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
  title: 'Catering Foodstuff Supply',
  description:
    'Full container loads of rice, dal, sugar, spices and dry staples for hospitality catering companies, camps, canteens and hotel kitchens in Abu Dhabi, Dubai and across the UAE.',
};

/* The staples a catering kitchen buys by the container rather than the pallet.
   Grades and pack sizes match the catalogue in content/products.js; the per-20 ft
   figures are the loadability approximations from the Packing & Shipping page. */
const STAPLES = {
  columns: ['Staple', 'Grades & varieties', 'Packing', 'Approx. per 20 ft FCL'],
  rows: [
    ['Rice', 'Basmati 1121 & 1509, Sona Masoori, IR64, Parboiled, Sella', '5 / 10 / 25 / 50 kg PP and jute bags', '25–27 MT'],
    ['Dals & pulses', 'Toor, chana, moong and urad dal; chickpeas, black chana, lentils', '1 / 5 / 25 / 50 kg PP bags', '25–27 MT'],
    ['Sugar', 'Refined white, ICUMSA 45', '25 / 50 kg PP bags', '25–27 MT'],
    ['Whole & ground spices', 'Chilli, turmeric, coriander, cumin, pepper, garam masala', '10 / 25 / 50 kg PP bags and lined cartons', '20–24 MT'],
    ['Dried fruit & nuts', 'Cashew, almond, raisins, dates — for bulk kitchen use', '10 / 12.5 / 25 kg cartons and vacuum packs', 'By volume, usually consolidated'],
    ['Mixed consolidation', 'Any combination of the above in one load', 'As per line', 'One container, several staples'],
  ],
};

const BUYERS = [
  {
    icon: 'building',
    title: 'Hospitality Catering Companies',
    body: 'Abu Dhabi contract caterers running multiple sites off one central store — the volume that makes container buying obvious.',
  },
  {
    icon: 'people',
    title: 'Camps & Site Canteens',
    body: 'Labour accommodation and remote site kitchens feeding a fixed headcount, where consumption is predictable and running short is not an option.',
  },
  {
    icon: 'quality',
    title: 'Hotel & Restaurant Kitchens',
    body: 'Standing dry-store replenishment on the same grade every month, so a recipe costed in January still costs the same in June.',
  },
  {
    icon: 'shield',
    title: 'Institutional Buyers',
    body: 'Schools, hospitals, staff canteens and government contracts needing steady volume against a held price and clean paperwork.',
  },
];

const STEPS = [
  { n: '01', title: 'Your Consumption', body: 'Tell us what the kitchens actually get through in a month — by line, by grade, by pack size. That is what sizes the container, not a guess.' },
  { n: '02', title: 'Grade & Price Agreed', body: 'We quote against the specific grade, send samples from the lot for dry goods, and hold the price for the term agreed.' },
  { n: '03', title: 'Container Booked', body: 'One line if it fills a container, or several staples consolidated into one load where a single line would sit too long in your store.' },
  { n: '04', title: 'Delivered on Schedule', body: `Released against your delivery schedule from Al Aweer by our own vehicles, across Abu Dhabi, Dubai and the northern Emirates.` },
];

export default function CateringSupplyPage() {
  return (
    <>
      <Hero
        tone="warm"
        title="Catering Foodstuff Supply"
        strapline="Full container loads for hospitality kitchens."
        lede="Hospitality catering companies in Abu Dhabi and across the Emirates take rice, dal, sugar and spices from us by the container rather than the pallet. Here is how that works, and what goes in it."
        center
      />

      <section className="section section--paper">
        <div className="wrap split split--wide-left">
          <div>
            <p className="eyebrow">Why the container</p>
            <h2>Buy the Volume You Were Going to Cook Anyway.</h2>
            <p>
              A catering kitchen&apos;s dry store is the most predictable thing in the business. The
              headcount is known, the menu cycle repeats, and the rice, dal and sugar going out of the
              store this month will go out again next month. Buying that by the pallet, weekly, at
              whatever the market moved to, is paying a premium for volume you had already committed to.
            </p>
            <p>
              We supply it at container level instead: the grade fixed, the price held for the term,
              and deliveries released against your consumption rather than dumped on you at once. The
              weekly reordering stops being the chef&apos;s problem.
            </p>
            <p>
              Where a single line will not fill a container — and for most kitchens sugar alone will
              not — we consolidate several staples into one load, so you get container economics
              without a year of one commodity sitting in the store.
            </p>
            <MetaStrip
              items={[
                'Full container loads, FCL and consolidated',
                'Price held for the contract term',
                'Scheduled release against consumption',
                'Delivered by our own vehicles',
              ]}
            />
          </div>
          <div className="panel">
            <p className="eyebrow">At a glance</p>
            <dl style={{ display: 'grid', gap: '1.1rem', margin: 0 }}>
              {[
                ['Typical load', '20 ft or 40 ft FCL, single line or consolidated'],
                ['Staples', 'Rice, dals and pulses, sugar, spices, dried fruit and nuts'],
                ['Pricing', 'Held for the agreed contract term'],
                ['Delivery', 'Scheduled release across Abu Dhabi, Dubai and the northern Emirates'],
                ['Also available', 'Daily fresh produce and eggs on the same delivery run'],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt style={{ fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold-deep)', marginBottom: '0.25rem' }}>{k}</dt>
                  <dd style={{ margin: 0, fontSize: '0.92rem', color: 'var(--green-900)', lineHeight: 1.55 }}>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="section section--paper-deep">
        <div className="wrap">
          <SectionHeading
            eyebrow="What goes in it"
            title="The Catering Dry Store"
            lede="The lines catering kitchens take from us in volume. Cooking oil, flour and other dry-store items are available on request."
          />
          <SpecTable
            columns={STAPLES.columns}
            rows={STAPLES.rows}
            caption="Indicative grades and loadability — final packing and quantity are confirmed per contract."
          />
        </div>
      </section>

      <section className="section section--green">
        <div className="wrap">
          <SectionHeading
            eyebrow="Who we supply"
            title="Kitchens That Cannot Run Short"
            lede="Wherever a fixed headcount has to be fed to the same standard every day."
            gold
          />
          <div className="grid grid--4">
            {BUYERS.map((b) => (
              <div key={b.title}>
                <div className="feature-icon" style={{ margin: '0 0 1rem', background: 'rgba(201,162,39,0.14)', color: 'var(--gold)' }}>
                  <Icon name={b.icon} size={28} />
                </div>
                <h3 style={{ color: 'var(--gold)', fontSize: '1.05rem', fontWeight: 600 }}>{b.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: '0.86rem' }}>{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RoadFreightBand tone="paper" />

      <section className="section section--paper">
        <div className="wrap">
          <SectionHeading
            eyebrow="How a contract runs"
            title="From Consumption to Delivery"
            lede="Four steps, one point of contact throughout."
          />
          <div className="grid grid--4">
            {STEPS.map((s) => (
              <div key={s.n}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.4rem', color: 'var(--gold-deep)', lineHeight: 1, marginBottom: '0.6rem' }}>{s.n}</div>
                <h3 style={{ color: 'var(--green-900)', fontSize: '1rem', fontWeight: 600 }}>{s.title}</h3>
                <p style={{ color: 'var(--ink-soft)', fontSize: '0.86rem' }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--paper-deep">
        <div className="wrap">
          <div className="panel split">
            <div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 2.6vw, 2rem)' }}>What a Catering Buyer Actually Gets</h2>
              <p>
                The reason kitchens move to container supply is rarely the headline price. It is that
                three recurring problems stop happening: the grade drifting once the order repeats, the
                price moving mid-contract, and a delivery arriving on a day the store cannot take it.
              </p>
              <div style={{ display: 'grid', gap: '0.7rem', marginTop: '1.25rem' }}>
                {[
                  'The same grade in month six as in month one',
                  'A price held for the term, not requoted each order',
                  'Deliveries scheduled to your store, not to our convenience',
                  'Samples from the actual lot before a dry-goods contract starts',
                  'One point of contact for every line in the load',
                ].map((t) => (
                  <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <Icon name="shield" size={18} style={{ color: 'var(--gold-deep)', flex: 'none' }} />
                    <span style={{ fontSize: '0.88rem', fontWeight: 500, color: 'var(--green-900)' }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 2.6vw, 2rem)' }}>Beyond the Dry Store</h2>
              <p>
                Catering customers rarely need only staples. The same delivery run that brings your
                rice and dal carries fresh fruit and vegetables from Al Aweer, and eggs by the pallet —
                so one supplier covers the dry store and the daily fresh order.
              </p>
              <p>
                We supply the same way across {site.markets.filter((m) => m !== 'United Arab Emirates').join(', ')},
                for catering groups operating in more than one Gulf market.
              </p>
              <Link className="btn btn--ghost" href="/products" style={{ marginTop: '0.5rem' }}>
                See the full catalogue <Icon name="arrow" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Send Us a Month of Consumption"
        body="Tell us what your kitchens get through in a month and where they are. We will come back with grades, a container plan, a delivery schedule and a held price."
        action="Request a Catering Quote"
        message="Hello HENJ Trading, I would like a quote for catering foodstuff supply — full container loads of rice, dal, sugar and dry staples."
      />
    </>
  );
}

import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import GroupCompanies from '@/components/GroupCompanies';
import CtaBand from '@/components/CtaBand';
import MetaStrip from '@/components/MetaStrip';
import Icon from '@/components/Icon';
import { site } from '@/content/site';

export const metadata = {
  title: 'Our Group',
  description:
    'HENJ Trading L.L.C. trades alongside Aidan Arab General Trading in Ajman, Nihal Traders in India and Nihal Investments in Oman — buying at origin and delivering across three markets under one relationship.',
};

/* The retail floor at Aidan Arab, photographed in Ajman. Captions describe what
   is actually in frame rather than making a claim about the business. */
const STORE = [
  { src: 'aidan-canned-goods', alt: 'Canned goods and breakfast cereals along the main aisle' },
  { src: 'aidan-confectionery', alt: 'Confectionery and snack shelves beside the drinks chiller' },
  { src: 'aidan-snack-baskets', alt: 'Open baskets of crisps and biscuits on the shop floor', wide: true },
  { src: 'aidan-noodles', alt: 'Instant noodles stocked by the case and the pack' },
  { src: 'aidan-spreads', alt: 'Oats, spreads and preserves above canned pulses' },
  { src: 'aidan-dry-store', alt: 'The back store: bulk grain jars, cased dry goods and disposables', wide: true },
  { src: 'aidan-crisps', alt: 'Crisps and fresh bread on the end stand' },
  { src: 'aidan-freezer', alt: 'Chest freezer holding frozen vegetables and poultry' },
  { src: 'aidan-water', alt: 'Cases of bottled water stacked in the shopfront window', wide: true },
  { src: 'aidan-counter', alt: 'The counter: toiletries, phone accessories and confectionery' },
];

export default function OurGroupPage() {
  return (
    <>
      <Hero
        image="/img/group/aidan-storefront.jpg"
        title="One Group, Three Markets."
        strapline="Our Group"
        lede={`${site.shortName} does not trade alone. Three associated companies stand alongside it — one at origin, one on a shop floor in Ajman, one in Muscat.`}
      />

      <section className="section section--paper">
        <div className="wrap split split--wide-left">
          <div>
            <p className="eyebrow">Why it matters to a buyer</p>
            <h2>Buying at Origin, Delivering in Three Markets.</h2>
            <p>
              Most of what separates a supplier from an agent is where they stand in the chain. HENJ
              trades on its own account and works alongside three associated companies, so a
              conversation that starts in Dubai does not have to be handed to a stranger at the other
              end of it.
            </p>
            <p>
              Nihal Traders is at origin in Hosur&ndash;Bangalore. Aidan Arab General Trading is in
              Ajman, where it runs the shop pictured below. Nihal Investments is in Muscat. Between
              them the group has people in three markets, which is why we can answer for what
              happens in each.
            </p>
            <MetaStrip
              items={[
                'Three associated companies',
                'Present at origin in India',
                'Trading and retail in the UAE',
                'Trading and distribution in Oman',
              ]}
            />
          </div>
          <div className="panel">
            <p className="eyebrow">The group at a glance</p>
            <div style={{ display: 'grid', gap: '0.9rem', marginTop: '0.25rem' }}>
              {[
                { icon: 'globe', label: 'Four companies', body: 'HENJ Trading and three associated concerns.' },
                { icon: 'pin', label: 'Three countries', body: 'United Arab Emirates, India and the Sultanate of Oman.' },
                { icon: 'shield', label: 'One relationship', body: 'A single point of contact across all of it.' },
              ].map((r) => (
                <div key={r.label} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <Icon name={r.icon} size={20} style={{ color: 'var(--gold-deep)', flex: 'none', marginTop: '2px' }} />
                  <span>
                    <strong style={{ display: 'block', color: 'var(--green-900)', fontSize: '0.95rem' }}>{r.label}</strong>
                    <span style={{ fontSize: '0.87rem', color: 'var(--ink-soft)' }}>{r.body}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <GroupCompanies tone="paper-deep" />

      {/* The retail floor. Photographs earn their place here because "we also run
          a shop" is a claim a buyer can otherwise only take on trust. */}
      <section className="section section--paper">
        <div className="wrap">
          <SectionHeading
            eyebrow="Aidan Arab General Trading"
            title="The Retail Floor in Ajman"
            lede="The group's shop on Hafiz Ibrahim Street in Ajman — groceries, dry goods and household lines over the counter."
          />
          <div className="gallery">
            {STORE.map((p) => (
              <figure className={`gallery-item${p.wide ? ' gallery-item--wide' : ''}`} key={p.src}>
                <img src={`/img/group/${p.src}.jpg`} alt={p.alt} loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Talk to the Group, Not a Middleman"
        body="Whichever market you are buying into, the conversation starts in one place and stays there."
        action="Start a Conversation"
        message="Hello HENJ Trading, I would like to talk about supply across your group companies."
      />
    </>
  );
}

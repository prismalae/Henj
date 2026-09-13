import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import PhotoGallery from '@/components/PhotoGallery';
import GroupCompanies from '@/components/GroupCompanies';
import CtaBand from '@/components/CtaBand';
import Icon from '@/components/Icon';

export const metadata = {
  title: 'Our Group',
  description:
    'HENJ Trading L.L.C. trades alongside Aidan Arab General Trading in Ajman, Nihal Traders in India and Nihal Investments in Oman — buying at origin and delivering across three markets under one relationship.',
};

/* The supermarket at Aidan Arab, photographed in Ajman. Captions describe what
   is actually in frame rather than making a claim about the business. */
const FARM = [
  { src: 'oman-coriander', alt: 'Coriander growing under shade net at the Oman farm', wide: true },
  { src: 'oman-mint', alt: 'Mint in crates, ready to cut' },
  { src: 'oman-seedlings', alt: 'Cucurbit seedlings in propagation trays' },
  { src: 'oman-watermelon', alt: 'Watermelons ripening on the vine under the shade house', wide: true },
  { src: 'oman-propagation', alt: 'Propagation trays running the length of the house' },
];

const STORE = [
  { src: 'aidan-storefront', alt: 'The Aidan Arab General Trading shopfront on Hafiz Ibrahim Street, Ajman', wide: true },
  { src: 'aidan-canned-goods', alt: 'Canned goods and breakfast cereals along the main aisle' },
  { src: 'aidan-confectionery', alt: 'Confectionery and snack shelves beside the drinks chiller' },
  { src: 'aidan-snack-baskets', alt: 'Open baskets of crisps and biscuits on the supermarket floor', wide: true },
  { src: 'aidan-noodles', alt: 'Instant noodles stocked by the case and the pack' },
  { src: 'aidan-spreads', alt: 'Oats, spreads and preserves above canned pulses' },
  { src: 'aidan-crisps', alt: 'Crisps and fresh bread on the end stand' },
  { src: 'aidan-freezer', alt: 'Chest freezer holding frozen vegetables and poultry' },
  { src: 'aidan-water', alt: 'Cases of bottled water stacked in the shopfront window', wide: true },
  { src: 'aidan-counter', alt: 'The counter: toiletries, phone accessories and confectionery' },
];

export default function OurGroupPage() {
  return (
    <>
      <Hero
        image="/img/hero-group.jpg"
        scrim="heavy"
        title="One Group, Three Markets."
        strapline="Our Group"
        lede="Connecting Trade, Farming and Retail Across India, Oman and the UAE — one at origin, one running a supermarket in Ajman, one in Muscat."
      />

      <section className="section section--paper">
        <div className="wrap split split--wide-left">
          <div>
            <p className="eyebrow">Why it matters to a buyer</p>
            <h2>Buying at Origin, Delivering in Three Markets.</h2>
            <p>
              Most of what separates a supplier from an agent is where they stand in the chain.{' '}
              <strong className="co">HENJ</strong> trades on its own account and works alongside three associated companies, so a
              conversation that starts in Dubai does not have to be handed to a stranger at the other
              end of it.
            </p>
            <p>
              <strong className="co">Nihal Traders</strong> is at origin in Hosur&ndash;Bangalore.{' '}
              <strong className="co">Aidan Arab General Trading</strong> is in Ajman, where it runs
              the supermarket pictured below. <strong className="co">Nihal Investments</strong> is in
              Muscat. Between them the group has people in three markets, which is why we can answer
              for what happens in each.
            </p>
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

      {/* No heading: the section above already introduces the group, and the
          component's own "Sister Concerns" block restated it. */}
      <GroupCompanies tone="paper-deep" heading={false} />

      {/* The supermarket. Photographs earn their place here because "we also run
          a supermarket" is a claim a buyer can otherwise only take on trust. */}
      <section className="section section--paper section--named">
        <div className="wrap">
          <SectionHeading
            title="Aidan Arab General Trading"
            sub="The supermarket in Ajman"
          />
          <PhotoGallery items={STORE} />
        </div>
      </section>

      {/* The Oman growing operation. Confirmed by the owner: the farm runs under
          Nihal Investments, which content/site.js still lists only as trading
          and distribution — see docs/ASSUMPTIONS.md. */}
      <section className="section section--paper-deep section--named">
        <div className="wrap">
          <SectionHeading
            title="Nihal Investments"
            sub="Grown in Oman"
            lede="Through our farming operations in Oman, we grow fresh mint, coriander, watermelon, and a variety of leafy green vegetables. The produce is carefully harvested and transported regularly to Dubai&rsquo;s Al Aweer Fruits and Vegetables Market, ensuring a consistent supply of farm-fresh quality."
          />
          <PhotoGallery items={FARM} />
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

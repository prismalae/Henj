import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import PhotoGallery from '@/components/PhotoGallery';
import GroupCompanies from '@/components/GroupCompanies';
import CtaBand from '@/components/CtaBand';

export const metadata = {
  title: 'Our Group',
  description:
    'HENJ Trading LLC trades alongside Aidan Arab General Trading in Ajman, Nihal Traders in India and Nihal Investments in Oman — buying at origin and delivering across three markets under one relationship.',
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
        title={<>One Group<br /><span className="h1-sm">Three Markets.</span></>}
        strapline="Our Group"
        lede="Our group connects three complementary operations across India, Oman and the UAE, bringing together international trade, fresh farming and modern retail."
      />

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

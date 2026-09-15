import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import Faq from '@/components/Faq';
import CtaBand from '@/components/CtaBand';
import { faqs } from '@/content/products';
import { site } from '@/content/site';

export const metadata = {
  title: 'Frequently Asked Questions',
  description:
    'Minimum order quantities, lead times, payment terms, samples, private label and documentation: common questions about trading with HENJ Trading LLC in Dubai.',
};

/** FAQPage structured data — the questions are the same array the page renders. */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Hero
        image="/img/hero-faq.jpg"
        veil="light"
        title="Frequently Asked Questions"
        strapline="The things buyers ask before the first order."
        lede="Straight answers on quantities, timing, terms and paperwork. If yours is not here, ask us directly. We would rather answer than have you guess."
      />

      <section className="section section--paper">
        <div className="wrap">
          <SectionHeading eyebrow="Before you enquire" title="Common Questions" />
          <Faq items={faqs} />
        </div>
      </section>

      <CtaBand
        title="Still Have a Question?"
        body={`Call or WhatsApp ${site.phones[0].display}, or send us the details and we will come back to you.`}
        action="Ask Us Directly"
        message="Hello HENJ Trading, I have a question about your products and terms."
      />
    </>
  );
}

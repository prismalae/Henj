import SectionHeading from '@/components/SectionHeading';
import FeatureRow from '@/components/FeatureRow';
import EnquiryForm from '@/components/EnquiryForm';
import Icon from '@/components/Icon';
import { site } from '@/content/site';

export const metadata = {
  title: 'Contact Us',
  description:
    'Contact HENJ Trading L.L.C. at Al Aweer Fruits & Vegetables Market, Ras Al Khor, Dubai. Call or WhatsApp +971 54 404 3463 / +971 50 482 6424, or email info@henj-uae.com.',
};

const ASSURANCES = [
  { icon: 'chat', title: 'Quick Response', body: 'We value your time and respond promptly.' },
  { icon: 'handshake', title: 'Trusted Partner', body: 'Building long-term relationships with trust and reliability.' },
  { icon: 'globe', title: 'Global Reach', body: 'Supplying premium quality products to global markets.' },
  { icon: 'shield', title: 'Quality Assurance', body: 'Committed to delivering the best quality, every time.' },
];

export default function ContactPage() {
  return (
    <>
      <section className="section ground-spices">
        <div className="wrap">
          <SectionHeading
            eyebrow="Get In Touch"
            title="We're Here to Help You"
            level={1}
            lede="Have a question, need a quote, or want to explore business opportunities? Our team is ready to assist you."
          />

          <dl className="contact-strip">
            <div className="contact-cell">
              <Icon name="whatsapp" size={30} strokeWidth={1.3} />
              <dt>Call / WhatsApp</dt>
              <dd>
                {site.phones.map((p) => (
                  <div key={p.tel}><a href={`tel:${p.tel}`}>{p.display}</a></div>
                ))}
              </dd>
            </div>
            <div className="contact-cell">
              <Icon name="phone" size={30} strokeWidth={1.3} />
              <dt>Office Landline</dt>
              <dd><a href={`tel:${site.landline.tel}`}>{site.landline.display}</a></dd>
            </div>
            <div className="contact-cell">
              <Icon name="pin" size={30} strokeWidth={1.3} />
              <dt>Location</dt>
              <dd>{site.address.line1},<br />{site.address.line2}</dd>
            </div>
            <div className="contact-cell">
              <Icon name="mail" size={30} strokeWidth={1.3} />
              <dt>Email</dt>
              <dd><a href={`mailto:${site.email}`}>{site.email}</a></dd>
            </div>
            <div className="contact-cell">
              <Icon name="time" size={30} strokeWidth={1.3} />
              <dt>Working Hours</dt>
              <dd>{site.hours.days}<br />{site.hours.time}<br />{site.hours.closed}</dd>
            </div>
            <div className="contact-cell">
              <Icon name="globe" size={30} strokeWidth={1.3} />
              <dt>We Export To</dt>
              <dd style={{ fontWeight: 500, fontSize: '0.85rem' }}>
                UAE, Saudi Arabia, Qatar, Bahrain, Kuwait &amp; Beyond
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* A little room above the heading — flush against the band above read as cramped. */}
      <section className="section section--cream" style={{ paddingTop: 'clamp(2rem, 4vw, 3rem)' }}>
        <div className="wrap split">
          <div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.6vw, 2rem)', color: 'var(--green-900)' }}>Send Us a Message</h2>
            <div className="ornament" style={{ justifyContent: 'flex-start' }} aria-hidden="true" />
            <p style={{ color: 'var(--ink-soft)', marginBottom: '1.5rem' }}>
              Fill in the details below and our team will get back to you as soon as possible.
            </p>
            <EnquiryForm />
          </div>

          <div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.6vw, 2rem)', color: 'var(--green-900)' }}>Find Us</h2>
            <div className="ornament" style={{ justifyContent: 'flex-start' }} aria-hidden="true" />
            <p style={{ color: 'var(--ink-soft)', marginBottom: '1.5rem' }}>
              Visit our office or reach out to us. We look forward to building a strong business
              relationship with you.
            </p>
            <div className="map-frame">
              <iframe
                src={site.mapEmbed}
                title={`Map showing ${site.address.full}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <a
              className="btn btn--ghost"
              style={{ marginTop: '1rem' }}
              href={site.mapLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="pin" size={18} /> Open in Google Maps
            </a>
          </div>
        </div>
      </section>

      <section className="section section--cream-deep">
        <div className="wrap">
          <FeatureRow items={ASSURANCES} />
        </div>
      </section>
    </>
  );
}

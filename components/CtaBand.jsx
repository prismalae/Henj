import Link from 'next/link';
import Icon from './Icon';
import { whatsappHref } from '@/content/site';

export default function CtaBand({
  title = "Let's Grow Together",
  body = 'Looking for a reliable partner for your business? Partner with HENJ Trading L.L.C. for quality you can trust and service you can rely on.',
  action = 'Enquire Now',
  message = 'Hello HENJ Trading, I would like to enquire about your products.',
}) {
  return (
    <section className="section section--paper">
      <div className="wrap">
        <div className="cta">
          <div className="cta-icon"><Icon name="handshake" size={40} strokeWidth={1.3} /></div>
          <div className="cta-text">
            <h2>{title}</h2>
            <p>{body}</p>
          </div>
          <div className="cta-actions">
            <Link href="/contact" className="btn btn--gold">
              {action} <Icon name="arrow" size={18} />
            </Link>
            <a className="btn btn--white-ghost" href={whatsappHref(message)} target="_blank" rel="noopener noreferrer">
              <Icon name="whatsapp" size={18} /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

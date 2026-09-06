import Link from 'next/link';
import Icon from './Icon';
import { primaryPhone, whatsappHref } from '@/content/site';

/**
 * Floating sticky action bar, centred at the bottom of the viewport on every
 * breakpoint. The site's job is lead capture, so call and WhatsApp stay one tap
 * away no matter how far down a product page someone has scrolled.
 */
export default function CallBar() {
  return (
    <div className="callbar" role="complementary" aria-label="Contact HENJ">
      <a href={`tel:${primaryPhone.tel}`}>
        <Icon name="phone" size={17} />
        <span>Call</span>
      </a>
      <a
        href={whatsappHref('Hello HENJ Trading, I would like to enquire about your products.')}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="whatsapp" size={17} />
        <span>WhatsApp</span>
      </a>
      <Link href="/contact" className="callbar-cta">
        <Icon name="send" size={16} />
        <span>Enquire</span>
      </Link>
    </div>
  );
}

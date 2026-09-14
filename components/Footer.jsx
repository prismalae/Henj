import Link from 'next/link';
import Icon from './Icon';
import Logo from './Logo';
import { site, nav, sisterConcerns, mailtoHref } from '@/content/site';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="newsletter">
          <div className="newsletter-copy">
            <Icon name="mail" size={38} />
            <div>
              <p className="eyebrow eyebrow--gold">Join our community</p>
              <h2>Subscribe to newsletter</h2>
            </div>
          </div>
          <form action={mailtoHref('Newsletter signup')} method="get">
            <label className="sr-only" htmlFor="nl-email">Email address</label>
            <input id="nl-email" name="body" type="email" placeholder="Email address" required />
            <button type="submit" aria-label="Subscribe">
              <Icon name="send" size={20} />
            </button>
          </form>
        </div>

        <div className="footer-cols">
          <div className="footer-brand">
            <Logo gradientId="henj-logo-footer" />
            <div className="name">HENJ TRADING LLC</div>
            <div className="sub">{site.tagline}</div>
            <p>{site.strapline}</p>
            <div className="socials">
              {site.socials.map((s) => (
                <a key={s.name} href={s.href} aria-label={s.name}>
                  <Icon name={s.icon} size={18} />
                </a>
              ))}
              <a href={`https://wa.me/${site.phones[0].wa}`} aria-label="WhatsApp">
                <Icon name="whatsapp" size={18} />
              </a>
              <a href={`mailto:${site.email}`} aria-label="Email">
                <Icon name="mail" size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3>Explore</h3>
            <ul className="footer-links">
              {/* Flattened so pages that live only inside a dropdown are still reachable —
                  minus the Products group, which has its own column below. Including it
                  listed every product page twice and made this column 11 items long. */}
              {[...new Map(
                nav
                  .filter((n) => n.href !== '/products')
                  .flatMap((n) => (n.children ? n.children : [n]))
                  .map((n) => [n.href, n])
              ).values()].map((n) => (
                <li key={n.href}><Link href={n.href}>{n.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Our Products</h3>
            <ul className="footer-links">
              {/* Anchor on the Products entry explicitly — `n.children` alone now
                  matches About Us, which also has a dropdown. */}
              {nav.find((n) => n.href === '/products').children.map((c) => (
                <li key={c.href}><Link href={c.href}>{c.label}</Link></li>
              ))}
              <li><Link href="/products">All Products</Link></li>
            </ul>
          </div>

          <div>
            <h3>Contact</h3>
            <ul className="footer-contact">
              <li><Icon name="building" size={18} /><span>{site.name}</span></li>
              <li>
                <Icon name="pin" size={18} />
                <span>{site.address.line1},<br />{site.address.line2}</span>
              </li>
              <li>
                <Icon name="whatsapp" size={18} />
                <span>
                  Call / WhatsApp:<br />
                  {site.phones.map((p, i) => (
                    <span key={p.tel}>
                      <a href={`tel:${p.tel}`}>{p.display}</a>
                      {i < site.phones.length - 1 && ' | '}
                    </span>
                  ))}
                </span>
              </li>
              <li>
                <Icon name="phone" size={18} />
                <span>Office Landline: <a href={`tel:${site.landline.tel}`}>{site.landline.display}</a></span>
              </li>
              <li>
                <Icon name="mail" size={18} />
                <span><a href={`mailto:${site.email}`}>{site.email}</a></span>
              </li>
            </ul>
          </div>
        </div>

        {/* The group is worth naming here as well as on About — buyers who know one
            of these companies should be able to connect it to HENJ from any page. */}
        <div className="footer-group">
          <span>Group companies</span>
          <p>
            {sisterConcerns.map((c) => c.name).join(' · ')}
          </p>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {site.name} All Rights Reserved.</span>
          {/* Terms & Privacy appear in the comps but have no copy yet — add pages, then link here. */}
          <span className="credit">
            Website by{' '}
            <a href={site.credit.href} target="_blank" rel="noopener noreferrer">
              {site.credit.label}
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

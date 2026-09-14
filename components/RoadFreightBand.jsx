import Link from 'next/link';
import Icon from './Icon';
import { whatsappHref } from '@/content/site';

const STOPS = ['Qatar', 'Bahrain', 'Kuwait'];

/**
 * Overland GCC delivery, given its own slab because it is the thing buyers in
 * Doha, Manama and Kuwait City are looking for and it was previously buried in
 * a services card. Deliberately the loudest block on any page it appears on.
 */
export default function RoadFreightBand({ tone = 'paper' }) {
  return (
    <section className={`section section--${tone}`} style={{ paddingBlock: 'clamp(2rem, 4vw, 3rem)' }}>
      <div className="wrap">
        <div className="roadband">
          <div className="roadband-head">
            <div className="roadband-icon"><Icon name="truck" size={44} strokeWidth={1.4} /></div>
            <div>
              <p className="eyebrow eyebrow--gold">Overland GCC delivery</p>
              <h2>By Road to Qatar, Bahrain &amp; Kuwait</h2>
              <p className="roadband-lede">
                Our own trucks, loaded at Al Aweer and running overland through Saudi Arabia,
                so the last leg of your order is not handed to a third party.
              </p>
            </div>
          </div>

          <div className="roadband-route" aria-hidden="true">
            <span className="road-stop road-stop--origin">Dubai</span>
            <span className="road-dash">
              <span className="road-truck"><Icon name="truck" size={24} strokeWidth={1.7} /></span>
            </span>
            {/* Stands in for the dashed run once it is dropped on narrow screens,
                so the chips still read as a route rather than a list of places. */}
            <span className="road-to">to</span>
            <span className="road-stops">
              {STOPS.map((s) => (
                <span className="road-stop" key={s}>{s}</span>
              ))}
            </span>
          </div>
          {/* The route above is decorative; this states it once for a screen reader. */}
          <p className="sr-only">Road route: Dubai to Qatar, Bahrain and Kuwait.</p>

          <div className="roadband-foot">
            <ul className="roadband-facts">
              <li><Icon name="truck" size={18} /><span>Our own vehicles, not a broker&apos;s</span></li>
              <li><Icon name="time" size={18} /><span>1–3 days overland, same day across the UAE</span></li>
              <li><Icon name="doc" size={18} /><span>Border paperwork prepared before departure</span></li>
              <li><Icon name="box" size={18} /><span>Full loads or mixed consolidation</span></li>
            </ul>
            <div className="roadband-actions">
              <Link href="/contact" className="btn btn--gold">
                Ask about a road shipment <Icon name="arrow" size={18} />
              </Link>
              <a
                className="btn btn--white-ghost"
                href={whatsappHref('Hello HENJ Trading, I would like to ask about road delivery to Qatar, Bahrain or Kuwait.')}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="whatsapp" size={18} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

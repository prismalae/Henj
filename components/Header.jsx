'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icon from './Icon';
import Logo from './Logo';
import { nav, site, primaryPhone } from '@/content/site';

/** Pages whose first section is a light band need the header to reserve its own space. */
const LIGHT_TOP_ROUTES = ['/contact'];

/** Exact page match — routes export with a trailing slash, hrefs are written without one. */
function here(pathname, href) {
  const strip = (v) => (v.length > 1 ? v.replace(/\/$/, '') : v);
  return strip(pathname) === strip(href);
}

function isActive(pathname, item) {
  if (item.href === '/') return pathname === '/';
  if (pathname.startsWith(item.href)) return true;
  // A group is active when any of its children is — /quality lights up "About Us".
  return (item.children || []).some((c) => c.href !== '/' && pathname.startsWith(c.href));
}

/* Contact Us is dropped from the header and drawer: the Get In Touch button goes
   to the same route, so listing both is a duplicate link. It stays in `nav` so the
   footer's Explore column and the sitemap still carry it. */
const headerNav = nav.filter((item) => item.href !== '/contact');

export default function Header() {
  const pathname = usePathname();
  const onDark = !LIGHT_TOP_ROUTES.some((r) => pathname.startsWith(r));
  const [openMenu, setOpenMenu] = useState(null);   // href of the open desktop dropdown
  const [openGroups, setOpenGroups] = useState({}); // per-group state in the mobile drawer
  const [drawer, setDrawer] = useState(false);
  const [stuck, setStuck] = useState(false);
  const navRef = useRef(null);
  const drawerRef = useRef(null);
  const burgerRef = useRef(null);

  // Close everything whenever the route changes.
  useEffect(() => {
    setDrawer(false);
    setOpenMenu(null);
  }, [pathname]);

  // Lock body scroll while the drawer is open.
  useEffect(() => {
    document.body.style.overflow = drawer ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [drawer]);

  /* The drawer is aria-modal, so it must behave like one: Escape closes it,
     focus moves inside on open, Tab cannot walk out to the page behind, and
     focus returns to the trigger on close. */
  useEffect(() => {
    if (!drawer) return;
    const node = drawerRef.current;
    if (!node) return;

    const FOCUSABLE = 'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const visible = () => [...node.querySelectorAll(FOCUSABLE)].filter((el) => el.offsetParent !== null);

    // land on the close button rather than the logo — it is the obvious way out
    (node.querySelector('.burger') || visible()[0])?.focus();

    const onKey = (e) => {
      if (e.key === 'Escape') { setDrawer(false); return; }
      if (e.key !== 'Tab') return;
      const items = visible();
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };

    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      burgerRef.current?.focus();
    };
  }, [drawer]);

  useEffect(() => {
    if (!onDark) return;
    const onScroll = () => setStuck(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [onDark]);

  // Escape closes the open dropdown; so does a click outside the nav.
  useEffect(() => {
    if (!openMenu) return;
    const onKey = (e) => { if (e.key === 'Escape') setOpenMenu(null); };
    const onClick = (e) => { if (navRef.current && !navRef.current.contains(e.target)) setOpenMenu(null); };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, [openMenu]);

  /* The SVG lockup already carries the HENJ wordmark, so the name is not
     repeated as text. The link keeps an accessible name for screen readers. */
  /* Two instances render (header + drawer), so each needs its own gradient id —
     duplicate ids in one document all resolve to the first definition. */
  const brandLink = (id) => (
    <Link href="/" className="brand" aria-label={`${site.name} home`}>
      <Logo gradientId={id} />
    </Link>
  );
  const brand = brandLink('henj-logo-header');

  return (
    <>
      <header className={`header${onDark ? ' header--onDark' : ''}${stuck ? ' is-stuck' : ''}`}>
        <div className="wrap header-inner">
          {brand}

          <nav className="nav" aria-label="Primary" ref={navRef}>
            {headerNav.map((item) =>
              item.children ? (
                <div
                  key={item.href}
                  className="nav-item"
                  data-open={openMenu === item.href || undefined}
                  onMouseEnter={() => setOpenMenu(item.href)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <button
                    type="button"
                    className="nav-link"
                    aria-expanded={openMenu === item.href}
                    aria-haspopup="true"
                    data-active={isActive(pathname, item)}
                    onClick={() => setOpenMenu((v) => (v === item.href ? null : item.href))}
                  >
                    {item.label}
                    <Icon name="chevron" size={15} className="nav-caret" />
                  </button>
                  {openMenu === item.href && (
                    item.mega ? (
                      <div className="mega">
                        <div className="mega-grid">
                          {item.children.map((c) => (
                            <Link key={c.href} href={c.href} className="mega-item">
                              <span className="mega-icon"><Icon name={c.icon} size={22} /></span>
                              <span>
                                <strong>{c.label}</strong>
                                <small>{c.blurb}</small>
                              </span>
                            </Link>
                          ))}
                        </div>
                        <Link href={item.href} className="mega-all">
                          View all products <Icon name="arrow" size={16} />
                        </Link>
                      </div>
                    ) : (
                      <div className="dropdown">
                        {item.children.map((c) => (
                          <Link key={c.href} href={c.href}>{c.label}</Link>
                        ))}
                      </div>
                    )
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="nav-link"
                  data-active={isActive(pathname, item)}
                >
                  {item.label}
                </Link>
              )
            )}
            <Link href="/contact" className="btn btn--green">Get In Touch</Link>
          </nav>

          <button
            type="button"
            className="burger"
            ref={burgerRef}
            aria-label="Open menu"
            aria-expanded={drawer}
            onClick={() => setDrawer(true)}
          >
            <Icon name="menu" size={28} />
          </button>
        </div>
      </header>
      {!onDark && <div className="header-spacer" aria-hidden="true" />}

      {drawer && (
        <div className="drawer" role="dialog" aria-modal="true" aria-label="Site menu" ref={drawerRef}>
          <div className="drawer-top">
            {brandLink('henj-logo-drawer')}
            <button type="button" className="burger" aria-label="Close menu" onClick={() => setDrawer(false)}>
              <Icon name="close" size={28} />
            </button>
          </div>

          <nav aria-label="Mobile">
            {headerNav.map((item) =>
              item.children ? (
                <div key={item.href}>
                  <button
                    type="button"
                    className="drawer-group"
                    aria-expanded={!!openGroups[item.href]}
                    data-active={isActive(pathname, item)}
                    onClick={() => setOpenGroups((g) => ({ ...g, [item.href]: !g[item.href] }))}
                  >
                    <span>{item.label}</span>
                    <Icon name="chevron" size={20} />
                  </button>
                  {openGroups[item.href] && (
                    <div className="sub">
                      {item.mega && (
                        <Link href={item.href} data-active={here(pathname, item.href)}>All Products</Link>
                      )}
                      {item.children.map((c) => (
                        <Link key={c.href} href={c.href} data-active={here(pathname, c.href)}>{c.label}</Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={item.href} href={item.href} data-active={here(pathname, item.href)}>
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="drawer-cta">
            <a className="btn btn--gold" href={`tel:${primaryPhone.tel}`}>
              <Icon name="phone" size={18} /> {primaryPhone.display}
            </a>
            <Link className="btn btn--white-ghost" href="/contact">Get In Touch</Link>
          </div>

          <ul className="drawer-contact">
            <li><Icon name="mail" size={16} /><a href={`mailto:${site.email}`}>{site.email}</a></li>
            <li><Icon name="pin" size={16} /><span>{site.address.line1}, {site.address.line2}</span></li>
            <li><Icon name="time" size={16} /><span>{site.hours.days} · {site.hours.time}</span></li>
          </ul>
        </div>
      )}
    </>
  );
}

export const site = {
  name: 'HENJ Trading L.L.C.',
  /** Absolute base for canonical/OG URLs. Override with NEXT_PUBLIC_SITE_URL at build time. */
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://henj-uae.com',
  shortName: 'HENJ',
  tagline: 'Import & Export – Distribution',
  strapline: 'Premium Food Import & Distribution for a Healthier Tomorrow.',
  description:
    'HENJ Trading L.L.C. imports, exports and distributes premium fruits, vegetables, pulses, rice, grains, spices and eggs across the UAE and the wider Gulf.',

  phones: [
    { label: 'Call / WhatsApp', display: '+971 54 404 3463', tel: '+971544043463', wa: '971544043463' },
    { label: 'Call / WhatsApp', display: '+971 50 482 6424', tel: '+971504826424', wa: '971504826424' },
  ],
  landline: { display: '04 558 9196', tel: '+97145589196' },
  email: 'info@henj-uae.com',

  address: {
    line1: 'Al Aweer Fruits & Vegetables Market',
    line2: 'Ras Al Khor, Dubai, United Arab Emirates',
    full: 'Al Aweer Fruits & Vegetables Market, Ras Al Khor, Dubai, UAE',
  },
  mapEmbed:
    'https://www.google.com/maps?q=Al+Aweer+Fruits+and+Vegetables+Market,+Ras+Al+Khor,+Dubai&output=embed',
  mapLink: 'https://www.google.com/maps/search/?api=1&query=Al+Aweer+Fruits+and+Vegetables+Market+Ras+Al+Khor+Dubai',

  hours: { days: 'Mon – Sat', time: '8:00 AM – 6:00 PM', closed: 'Sunday Closed' },
  markets: ['United Arab Emirates', 'Saudi Arabia', 'Qatar', 'Bahrain', 'Kuwait'],

  /**
   * Credibility counters. "12 years" comes from the design comps, not from a
   * verified source; product lines and markets are counted from this repo.
   * All four are listed in docs/ASSUMPTIONS.md for confirmation before launch.
   */
  stats: [
    { value: '12+', label: 'Years in the trade' },
    { value: '35+', label: 'Product lines supplied' },
    { value: '5', label: 'Markets served' },
    { value: 'Daily', label: 'Air shipments handled' },
  ],

  /** Build credit shown in the footer bottom bar. */
  credit: { label: 'Prismal', href: 'https://prismal.ae' },

  socials: [
    { name: 'Facebook', href: '#', icon: 'facebook' },
    { name: 'Instagram', href: '#', icon: 'instagram' },
    { name: 'LinkedIn', href: '#', icon: 'linkedin' },
  ],
};

/**
 * Group companies. Supplied by the owner (Sept 2026); addresses and numbers are
 * as given and should be confirmed with each office before launch — see
 * docs/ASSUMPTIONS.md.
 */
export const sisterConcerns = [
  {
    name: 'Aidan Arab General Trading L.L.C.',
    country: 'ae',
    role: 'General trading — United Arab Emirates',
    lines: ['Hafiz Ibrahim Street', 'Al Nuaimiya 1, Ajman', 'United Arab Emirates'],
    phones: [
      { display: '06 881 0055', tel: '+97168810055' },
      { display: '+971 52 762 9767', tel: '+971527629767' },
    ],
  },
  {
    name: 'Nihal Traders',
    country: 'in',
    role: 'Sourcing & procurement — India',
    lines: ['Hosur – Bangalore', 'India'],
    phones: [{ display: '+91 80563 71276', tel: '+918056371276' }],
  },
  {
    name: 'Nihal Investments',
    country: 'om',
    role: 'Trading & distribution — Oman',
    lines: ['Madinat Qaboos', 'Ghala Industrial Estate', 'Muscat, Sultanate of Oman'],
    phones: [{ display: '+968 7958 2463', tel: '+96879582463' }],
  },
];

export const primaryPhone = site.phones[0];

export const nav = [
  { label: 'Home', href: '/' },
  {
    label: 'About Us',
    href: '/about',
    children: [
      { label: 'Our Story', href: '/about' },
      { label: 'Quality & Certifications', href: '/quality' },
      { label: 'FAQ', href: '/faq' },
    ],
  },
  { label: 'Group', href: '/our-group' },
  {
    label: 'Products',
    href: '/products',
    /** `mega` renders the wide panel in Header.jsx; children carry an icon and a blurb. */
    mega: true,
    /* Menu labels are deliberately shorter than the page titles they lead to: a nav
       has to be scannable, and 'Pulses, Rice, Grains & Spices' wrapped to two lines
       in both the panel and the mobile drawer. */
    children: [
      {
        label: 'Fresh Produce',
        href: '/products/fruits-vegetables',
        icon: 'leaf',
        blurb: 'Fruit, vegetables, leaves and herbs — air freighted daily.',
      },
      {
        label: 'Rice, Pulses & Spices',
        href: '/products/pulses-rice-grains-spices',
        icon: 'box',
        blurb: 'Basmati, dals, chickpeas, lentils and ground spices.',
      },
      {
        label: 'Dried Fruits & Nuts',
        href: '/products/dried-fruits-nuts',
        icon: 'nut',
        blurb: 'Cashews, almonds, dates, raisins, figs and seeds.',
      },
      {
        label: 'Eggs',
        href: '/products/eggs',
        icon: 'egg',
        blurb: 'White and brown, in every common size grade.',
      },
    ],
  },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'All Services', href: '/services' },
      { label: 'Catering Supply', href: '/catering-supply' },
      { label: 'Packing & Shipping', href: '/packing-shipping' },
    ],
  },
  { label: 'Contact Us', href: '/contact' },
];

/** Builds a WhatsApp deep link. Message text lives only in the wa.me target. */
export function whatsappHref(message, wa = primaryPhone.wa) {
  const base = `https://wa.me/${wa}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function mailtoHref(subject, body) {
  const q = [];
  if (subject) q.push(`subject=${encodeURIComponent(subject)}`);
  if (body) q.push(`body=${encodeURIComponent(body)}`);
  return `mailto:${site.email}${q.length ? '?' + q.join('&') : ''}`;
}

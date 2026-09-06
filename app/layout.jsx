import { Playfair_Display, Poppins } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallBar from '@/components/CallBar';
import FruitCursor from '@/components/FruitCursor';
import { site } from '@/content/site';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'], weight: ['600', '700'], variable: '--font-playfair', display: 'swap',
});
const poppins = Poppins({
  subsets: ['latin'], weight: ['300', '400', '500', '600'], variable: '--font-poppins', display: 'swap',
});

export const metadata = {
  metadataBase: new URL(site.url),
  alternates: { canonical: '/' },
  title: {
    default: `${site.name} — Food Import, Export & Distribution in Dubai`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  keywords: [
    'food import Dubai', 'fruits and vegetables supplier UAE', 'pulses rice spices exporter',
    'egg supplier Dubai', 'Al Aweer market', 'GCC food distribution',
  ],
  openGraph: {
    type: 'website',
    siteName: site.name,
    title: `${site.name} — Food Import, Export & Distribution in Dubai`,
    description: site.description,
    images: [{ url: '/img/hero-home.jpg', width: 1800, height: 1013 }],
  },
  twitter: { card: 'summary_large_image', images: ['/img/hero-home.jpg'] },
};

export const viewport = { themeColor: '#0e3b21' };

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: site.name,
  url: site.url,
  description: site.description,
  telephone: site.phones.map((p) => p.display),
  email: site.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.line1,
    addressLocality: 'Ras Al Khor, Dubai',
    addressCountry: 'AE',
  },
  openingHours: 'Mo-Sa 08:00-18:00',
  areaServed: site.markets,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a href="#main" className="sr-only">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <CallBar />
        <FruitCursor />
      </body>
    </html>
  );
}

/**
 * Product catalogue.
 *
 * Every tile renders an empty image slot until an `image` field is added here —
 * no layout change is needed when photography arrives. Add e.g.
 * image: '/img/products/rice.jpg'.
 *
 * `specs` renders as a native <details> disclosure inside the card. Keys are shown
 * in the order written. All spec values are INDUSTRY-STANDARD TRADE DEFAULTS and are
 * not yet verified against HENJ's actual sourcing — see docs/ASSUMPTIONS.md.
 */

export const categories = [
  {
    slug: 'fruits-vegetables',
    title: 'Fruits & Vegetables',
    href: '/products/fruits-vegetables',
    hero: '/img/hero-fruits.jpg',
    strapline: 'Freshness You Can Trust.',
    summary:
      'Daily air shipments of fresh fruits, vegetables, leaves and herbs — picked, packed and flown so they arrive market-ready.',
    intro:
      'At HENJ Trading L.L.C., we handle fresh produce the way it deserves to be handled — sourced close to harvest, cold-chained through packing, and moved by air so freshness survives the journey.',
    badges: ['Farm Sourced', 'Air Freighted', 'Cold Chain', 'Daily Supply'],
    meta: ['Pre-cooled at source', 'Cold chain maintained', 'Phytosanitary certificate issued', 'MOQ: 100 kg per line'],
  },
  {
    slug: 'pulses-rice-grains-spices',
    title: 'Pulses, Rice, Grains & Spices',
    href: '/products/pulses-rice-grains-spices',
    hero: '/img/hero-pulses.jpg',
    strapline: 'Essentials of Purity. Flavors of Trust.',
    summary:
      'Rice, dals, chickpeas, lentils and whole or ground spices, sourced from trusted mills and cleaned to specification.',
    intro:
      'At HENJ Trading L.L.C., we source the finest pulses, rice, and spices from trusted farms and producers around the world—ensuring purity, authenticity, and unmatched quality in every grain and every spice.',
    badges: ['Carefully Sourced', 'Premium Quality', 'Hygienically Processed', 'Timely Delivered'],
    meta: ['Sortex cleaned', 'Moisture tested', 'Private label available', 'MOQ: 1 MT per variety'],
  },
  {
    slug: 'dried-fruits-nuts',
    title: 'Dried Fruits & Nuts',
    href: '/products/dried-fruits-nuts',
    hero: '/img/hero-nuts.jpg',
    strapline: 'Naturally Sweet. Carefully Graded.',
    summary:
      'Cashews, almonds, pistachios and walnuts alongside raisins, dates, figs and seeds — graded, sorted and packed for retail or bulk.',
    intro:
      'At HENJ Trading L.L.C., we source nuts, dried fruit and seeds from the origins that grow them best — graded to count, sorted for uniformity, and packed to hold condition through the Gulf summer.',
    badges: ['Carefully Sourced', 'Premium Quality', 'Hygienically Processed', 'Timely Delivered'],
    meta: ['Grade and count verified', 'Moisture tested', 'Vacuum and bulk packing', 'MOQ: 100 kg per variety'],
  },
  {
    slug: 'eggs',
    title: 'Eggs',
    href: '/products/eggs',
    hero: '/img/hero-eggs.jpg',
    strapline: 'Pure Freshness. Reliable Supply.',
    summary:
      'White and brown table eggs in every common grade, supplied by the tray, the carton or the container load.',
    intro:
      'At HENJ Trading L.L.C., we source premium eggs from trusted farms, ensuring superior quality, food safety, and consistent supply to meet global demands.',
    badges: ['Farm Fresh', 'Hygienically Handled', 'Quality Assured', 'Timely Delivery'],
    meta: ['Candled and washed', 'Weight graded', 'Temperature controlled', 'MOQ: 1 pallet'],
  },
];

export const fruitsVegetables = [
  {
    name: 'Fresh Fruits',
    description: 'Seasonal fruit sourced at peak ripeness for market and retail.',
    image: '/img/products/fresh-fruits.png',
    specs: {
      Origin: 'India, Egypt, Kenya, South Africa',
      Range: 'Mango, pomegranate, grapes, banana, papaya, guava, citrus',
      Packing: '3 / 4 / 5 kg corrugated cartons, tray or loose fill',
      Shipment: 'Air freight; sea reefer for long-shelf-life lines',
    },
  },
  {
    name: 'Vegetables',
    description: 'A broad daily range of everyday and specialty vegetables.',
    image: '/img/products/vegetables.png',
    specs: {
      Origin: 'India, Egypt, Jordan, local UAE farms',
      Range: 'Okra, brinjal, gourds, beans, tomato, capsicum, cucumber',
      Packing: '5 / 10 kg cartons and crates, perforated for airflow',
      Shipment: 'Air freight, daily',
    },
  },
  {
    name: 'Tomatoes',
    description: 'Firm, even-coloured tomatoes graded for market and retail supply.',
    image: '/img/products/tomatoes.png',
    specs: {
      Origin: 'India, Jordan, Turkey, local UAE farms',
      Grades: 'Round and roma, graded by size and colour stage',
      Packing: '5 / 10 kg single-layer cartons and crates',
      Shipment: 'Air freight; road for regional supply',
    },
  },
  {
    name: 'Capsicum',
    description: 'Green, red and yellow bell peppers with thick, glossy walls.',
    image: '/img/products/capsicum.png',
    specs: {
      Origin: 'India, Jordan, Netherlands, local UAE farms',
      Grades: 'Green, red, yellow; 150–250 g typical',
      Packing: '5 kg perforated cartons, single layer',
      Shipment: 'Air freight, daily',
    },
  },
  {
    name: 'Carrots',
    description: 'Sweet, straight carrots washed and graded for length.',
    image: '/img/products/carrots.png',
    specs: {
      Origin: 'India, Pakistan, China, Netherlands',
      Grades: 'Washed and topped, or bunched with tops',
      Packing: '10 / 20 kg mesh bags and cartons',
      Shipment: 'Sea reefer for volume, air for topped bunches',
    },
  },
  {
    name: 'Potatoes',
    description: 'Table and processing potatoes, washed and size graded.',
    image: '/img/products/potatoes.png',
    specs: {
      Origin: 'India, Pakistan, Egypt, Netherlands',
      Grades: '40–60 mm, 55–75 mm; table and processing varieties',
      Packing: '10 / 20 / 25 kg mesh and jute bags',
      Shipment: 'Sea — FCL, ventilated container',
    },
  },
  {
    name: 'Coconuts',
    description: 'Mature and tender coconuts, husked or semi-husked to order.',
    image: '/img/products/coconuts.png',
    specs: {
      Origin: 'India (Tamil Nadu, Kerala), Sri Lanka',
      Grades: 'Semi-husked, fully husked, tender green',
      Packing: 'Mesh bags or 20 kg cartons; 25–30 pcs per bag',
      Shipment: 'Sea reefer for volume, air for tender coconut',
    },
  },
  {
    name: 'Onions',
    description: 'Red and white onions graded by size and packed for bulk trade.',
    image: '/img/products/onions.png',
    specs: {
      Origin: 'India (Nashik), Egypt, Netherlands',
      Grades: '40–60 mm, 55–75 mm, 70 mm+',
      Packing: '5 / 10 / 20 / 25 kg mesh or jute bags',
      Shipment: 'Sea — FCL, ventilated container',
    },
  },
  {
    name: 'Pomegranates',
    description: 'Deep-coloured, high-arils pomegranates in export cartons.',
    image: '/img/products/pomegranates.png',
    specs: {
      Origin: 'India (Maharashtra), Egypt',
      Varieties: 'Bhagwa, Ganesh, Wonderful',
      Packing: '3.5 kg export cartons, count 6–12 per box',
      Shipment: 'Air freight; sea reefer in peak season',
    },
  },
  {
    name: 'Chilli',
    description: 'Green and red fresh chilli in a range of heat levels.',
    image: '/img/products/chilli.png',
    specs: {
      Origin: 'India, Oman, local UAE farms',
      Varieties: 'Green long, bird’s eye, jwala, capsicum-type mild',
      Packing: '3 / 5 kg perforated cartons',
      Shipment: 'Air freight, daily',
    },
  },
  {
    name: 'Drumsticks',
    description: 'Tender moringa drumsticks, bundled and air freighted.',
    image: '/img/products/drumsticks.png',
    specs: {
      Origin: 'India (Tamil Nadu, Andhra Pradesh)',
      Season: 'Year-round, peak February to June',
      Packing: '5 kg cartons, bundled and moisture-wrapped',
      Shipment: 'Air freight only — short shelf life',
    },
  },
  {
    name: 'Curry Leaves',
    description: 'Aromatic fresh curry leaves picked and packed the same day.',
    image: '/img/products/curry-leaves.png',
    specs: {
      Origin: 'India (Tamil Nadu, Karnataka)',
      Season: 'Year-round',
      Packing: '2 / 5 kg cartons, poly-lined, pre-cooled',
      Shipment: 'Air freight only — same-week movement',
    },
  },
  {
    name: 'Mint / Pudina',
    description: 'Fresh pudina bunches kept cold from field to flight.',
    image: '/img/products/mint.png',
    specs: {
      Origin: 'India, Jordan, local UAE farms',
      Season: 'Year-round',
      Packing: 'Bunched, 3 / 5 kg cartons, pre-cooled and poly-lined',
      Shipment: 'Air freight only',
    },
  },
  {
    name: 'Banana Leaves',
    description: 'Large, unblemished leaves cut and packed flat for transit.',
    image: '/img/products/banana-leaves.png',
    specs: {
      Origin: 'India (Kerala, Tamil Nadu)',
      Grades: 'Full leaf and cut-to-size, 1.5–2.5 m',
      Packing: 'Folded flat in 10 / 20 kg cartons',
      Shipment: 'Air freight only',
    },
  },
  {
    name: 'Leafy Vegetables',
    description: 'Spinach, coriander, fenugreek and other leafy greens.',
    image: '/img/products/spinach.png',
    specs: {
      Origin: 'India, Jordan, local UAE farms',
      Range: 'Spinach, coriander, fenugreek (methi), dill, amaranth',
      Packing: 'Bunched, 3 / 5 kg pre-cooled cartons',
      Shipment: 'Air freight only',
    },
  },
  {
    name: 'Other Fresh Items',
    description: 'Additional fresh air-shipment lines sourced on request.',
    image: '/img/products/other-fresh-items.png',
    specs: {
      Origin: 'Sourced to requirement',
      Range: 'Ginger, garlic, turmeric root, raw mango, specialty herbs',
      Packing: 'To buyer specification',
      Shipment: 'Air or sea, depending on the line',
    },
  },
];

export const pulsesSpices = [
  {
    name: 'Rice',
    description: 'Long grain, Basmati, Non-Basmati & Parboiled varieties.',
    image: '/img/products/rice.jpg',
    specs: {
      Origin: 'India, Pakistan',
      Varieties: 'Basmati 1121 & 1509, Sona Masoori, IR64, Parboiled, Sella',
      Packing: '5 / 10 / 25 / 50 kg PP and jute bags; private label available',
      Shipment: 'Sea — FCL and LCL',
    },
  },
  {
    name: 'Toor Dal',
    description: 'Pure, clean and nutritious toor dal (Arhar dal).',
    specs: {
      Origin: 'India, Myanmar, Tanzania, Mozambique',
      Grades: 'Machine-cleaned and sortex, polished or unpolished',
      Packing: '1 / 5 / 25 / 50 kg PP bags',
      Shipment: 'Sea — FCL and LCL',
    },
  },
  {
    name: 'Chana Dal',
    description: 'Rich in protein and perfect for everyday cooking.',
    image: '/img/products/chana-dal.jpg',
    specs: {
      Origin: 'India, Australia',
      Grades: 'Sortex-cleaned, standard and premium polish',
      Packing: '1 / 5 / 25 / 50 kg PP bags',
      Shipment: 'Sea — FCL and LCL',
    },
  },
  {
    name: 'Black Chana',
    description: 'High-quality kala chana, sourced and cleaned with care.',
    specs: {
      Origin: 'India, Tanzania',
      Grades: 'Counts per 100 g: 42/44, 44/46, 58/60',
      Packing: '25 / 50 kg PP and jute bags',
      Shipment: 'Sea — FCL',
    },
  },
  {
    name: 'Chickpeas',
    description: 'Premium kabuli chickpeas (white chana).',
    image: '/img/products/chickpeas.jpg',
    specs: {
      Origin: 'India, Turkey, Argentina, Mexico',
      Grades: '7 mm, 8 mm, 9 mm, 10 mm, 12 mm calibre',
      Packing: '25 / 50 kg PP and jute bags',
      Shipment: 'Sea — FCL',
    },
  },
  {
    name: 'Lentils',
    description: 'Red and green lentils in retail and bulk packing.',
    image: '/img/products/lentils.jpg',
    specs: {
      Origin: 'Canada, Australia, Turkey, India',
      Varieties: 'Red split (masoor), whole red, green, brown',
      Packing: '1 / 5 / 25 / 50 kg PP bags',
      Shipment: 'Sea — FCL and LCL',
    },
  },
  {
    name: 'Cumin Seeds',
    description: 'Aromatic and flavorful cumin seeds of the finest grade.',
    image: '/img/products/cumin.jpg',
    specs: {
      Origin: 'India (Gujarat, Rajasthan), Syria',
      Grades: '99% / 99.5% purity, singapore & europe quality, sortex-cleaned',
      Packing: '10 / 25 / 50 kg PP bags and cartons',
      Shipment: 'Sea — FCL and LCL; air for small lots',
    },
  },
  {
    name: 'Cardamom',
    description: 'Naturally aromatic green cardamom (elaichi).',
    specs: {
      Origin: 'India (Kerala, Idukki), Guatemala',
      Grades: '6 mm, 7 mm, 7.5 mm, 8 mm bold — AGEB and similar',
      Packing: '5 / 10 / 20 kg vacuum or laminated cartons',
      Shipment: 'Air freight preferred — aroma retention',
    },
  },
  {
    name: 'Cloves',
    description: 'Whole cloves with strong, clean aroma and dark colour.',
    image: '/img/products/cloves.jpg',
    specs: {
      Origin: 'Indonesia, Madagascar, Sri Lanka, India',
      Grades: 'Hand-picked, headless below 2%, moisture below 12%',
      Packing: '10 / 25 / 50 kg PP bags and cartons',
      Shipment: 'Sea — FCL and LCL',
    },
  },
  {
    name: 'Bay Leaves',
    description: 'Hand-sorted bay leaves, dried to hold their fragrance.',
    image: '/img/products/bay-leaves.jpg',
    specs: {
      Origin: 'India, Turkey',
      Grades: 'Whole hand-selected, semi-broken, tea-cut',
      Packing: '5 / 10 / 20 kg cartons, poly-lined',
      Shipment: 'Sea — LCL; air for small lots',
    },
  },
  {
    name: 'Star Anise',
    description: 'Whole star anise with intact points and deep aroma.',
    specs: {
      Origin: 'Vietnam, China',
      Grades: 'Whole 95% intact, autumn and spring crop',
      Packing: '10 / 20 / 25 kg cartons and PP bags',
      Shipment: 'Sea — FCL and LCL',
    },
  },
  {
    name: 'Black Pepper',
    description: 'Bold, pungent and high-piperine black peppercorns.',
    image: '/img/products/black-pepper.jpg',
    specs: {
      Origin: 'India (Malabar), Vietnam, Indonesia',
      Grades: 'MG1, ASTA, 500 / 550 / 570 g/l bulk density',
      Packing: '25 / 50 kg PP and jute bags',
      Shipment: 'Sea — FCL and LCL',
    },
  },
  {
    name: 'Turmeric',
    description: 'Bright, pure and finely ground turmeric.',
    image: '/img/products/turmeric.jpg',
    specs: {
      Origin: 'India (Erode, Nizamabad, Sangli)',
      Grades: 'Finger and bulb, whole or ground; 2–5% curcumin',
      Packing: '10 / 25 / 50 kg PP bags; retail packs to order',
      Shipment: 'Sea — FCL and LCL',
    },
  },
  {
    name: 'Chilli Powder',
    description: 'Vibrant colour and authentic heat in every pinch.',
    image: '/img/products/chilli-powder.jpg',
    specs: {
      Origin: 'India (Guntur, Byadgi), Pakistan',
      Grades: 'By heat and colour — Guntur hot, Byadgi high-colour (ASTA 60–120)',
      Packing: '10 / 25 / 50 kg PP bags; retail packs to order',
      Shipment: 'Sea — FCL and LCL',
    },
  },
  {
    name: 'Mixed Spices',
    description: 'A perfect blend of whole spices for authentic taste and aroma.',
    image: '/img/products/mixed-spices.jpg',
    specs: {
      Origin: 'Blended in India to your recipe',
      Blends: 'Garam masala, curry, tandoori, biryani and custom mixes',
      Packing: '10 / 25 kg PP bags; retail packs and private label to order',
      Shipment: 'Sea — FCL and LCL',
    },
  },
  {
    name: 'Coriander',
    description: 'Freshly ground coriander with rich aroma — seed and powder.',
    image: '/img/products/coriander.jpg',
    specs: {
      Origin: 'India (Rajasthan, Madhya Pradesh)',
      Grades: 'Eagle and Scooter seed, single or double parrot; whole or ground',
      Packing: '25 / 50 kg PP bags',
      Shipment: 'Sea — FCL and LCL',
    },
  },
];

export const eggs = [
  {
    name: 'White Eggs',
    description: 'Clean, fresh, and high-quality white eggs rich in nutrition.',
    image: '/img/products/white-eggs.jpg',
    specs: {
      Origin: 'India, Turkey',
      Grades: 'Small, medium, large, extra-large by weight',
      Packing: '30-egg trays; 360 eggs per carton (12 trays)',
      Shipment: 'Sea reefer and air, temperature controlled',
    },
  },
  {
    name: 'Brown Eggs',
    description: 'Naturally rich brown eggs with great taste and quality.',
    image: '/img/products/brown-eggs.jpg',
    specs: {
      Origin: 'India, Turkey',
      Grades: 'Small, medium, large, extra-large by weight',
      Packing: '30-egg trays; 360 eggs per carton (12 trays)',
      Shipment: 'Sea reefer and air, temperature controlled',
    },
  },
];

/* ------------------------------------------------------------------
 * Packing & shipping reference (/packing-shipping)
 * ------------------------------------------------------------------ */

export const packingTable = {
  columns: ['Product family', 'Packing formats', 'Palletisation', 'Mode'],
  rows: [
    ['Fresh fruit', '3 / 4 / 5 kg corrugated cartons, tray or loose fill', '80–100 cartons per pallet', 'Air; sea reefer for long-shelf lines'],
    ['Fresh vegetables', '5 / 10 kg perforated cartons and crates', '80–120 cartons per pallet', 'Air, daily'],
    ['Leaves & herbs', '2 / 3 / 5 kg pre-cooled poly-lined cartons', 'Loose-stacked, air ULD', 'Air only'],
    ['Onions & coconuts', '5 / 10 / 20 / 25 kg mesh or jute bags', '1,000–1,250 kg per pallet', 'Sea, ventilated container'],
    ['Rice & pulses', '1 / 5 / 25 / 50 kg PP and jute bags', '20 bags per pallet (50 kg)', 'Sea — FCL and LCL'],
    ['Whole & ground spices', '10 / 25 / 50 kg PP bags and lined cartons', '18–24 bags per pallet', 'Sea; air for cardamom and small lots'],
    ['Eggs', '30-egg trays, 360 eggs per carton', '36 cartons per pallet', 'Sea reefer and air, temperature controlled'],
  ],
};

export const containerGuide = [
  { format: '40 ft reefer', detail: 'Approx. 380,000–400,000 eggs, or 24–26 MT of palletised fresh produce.' },
  { format: '20 ft dry', detail: 'Approx. 25–27 MT of bagged rice, pulses or spices.' },
  { format: '40 ft dry', detail: 'Approx. 26–28 MT bagged — volume-limited rather than weight-limited.' },
  { format: 'Air ULD', detail: 'Per-shipment consolidation for perishables; no minimum container commitment.' },
];

export const modeGuide = [
  {
    mode: 'Air freight',
    best: 'Leaves, herbs, drumsticks, tender coconut, cardamom, samples and urgent top-ups',
    transit: '1–3 days to the UAE',
    note: 'Costs more per kilo, but for a product with a five-day shelf life it is the only mode that delivers something still worth selling.',
  },
  {
    mode: 'Sea freight',
    best: 'Rice, pulses, spices, onions, coconuts, eggs and all bulk dry goods',
    transit: '7–21 days depending on origin',
    note: 'The economical default. Reefer where temperature matters, ventilated dry for onions and coconuts.',
  },
  {
    mode: 'Road distribution',
    best: 'Onward delivery inside the UAE and into Saudi Arabia, Qatar, Bahrain and Kuwait',
    transit: 'Same day to 3 days',
    note: 'Our own vehicles from Al Aweer, so the last leg is not handed to a third party.',
  },
];

/* ------------------------------------------------------------------
 * FAQ (/faq)
 * ------------------------------------------------------------------ */

export const faqs = [
  {
    q: 'What is your minimum order quantity?',
    a: 'It depends on the line. Fresh produce starts at around 100 kg per item because we consolidate air shipments. Rice, pulses and spices are typically 1 MT per variety, and full container loads are the most economical. Eggs start at one pallet. If your requirement is smaller, ask anyway — we consolidate mixed orders regularly.',
  },
  {
    q: 'How quickly can you ship?',
    a: 'Fresh produce moves on daily air shipments and reaches the UAE in one to three days. Dry goods by sea take seven to twenty-one days depending on origin and whether the stock is already positioned. For anything held at Al Aweer we can deliver across the UAE the same day.',
  },
  {
    q: 'Which markets do you supply?',
    a: 'The United Arab Emirates is our home market, distributed by our own vehicles from Al Aweer. We also supply Saudi Arabia, Qatar, Bahrain and Kuwait, and we export beyond the Gulf on request.',
  },
  {
    q: 'Can I get a sample before ordering?',
    a: 'Yes. For dry goods we send samples of the exact lot you would be buying, so what you approve is what ships. For fresh produce a sample is less meaningful than an inspection — you are welcome to see the goods at Al Aweer before they move.',
  },
  {
    q: 'What are your payment terms?',
    a: 'Terms depend on the product, the volume and whether we have traded before. We work with advance payment, letters of credit and agreed credit terms for established customers. Tell us what suits your business and we will tell you honestly whether we can accommodate it.',
  },
  {
    q: 'Do you handle documentation and customs clearance?',
    a: 'Yes. Certificates of origin, phytosanitary and health certificates, packing lists and invoices are prepared ahead of arrival, and we coordinate clearance so consignments are not sitting at the port waiting on paperwork.',
  },
  {
    q: 'Can you supply under our own brand?',
    a: 'Yes, for rice, pulses, spices and egg packing. Private label and custom print are available; minimums are higher than for standard packing because print runs have their own economics.',
  },
  {
    q: 'How do I request a quote?',
    a: 'Send us the product, the grade or variety, the volume and the destination. Use the enquiry form, WhatsApp us on +971 54 404 3463, or call the office on 04 558 9196. The more specific you are about grade and packing, the faster the price comes back.',
  },
];

/* ------------------------------------------------------------------
 * Quality & certifications (/quality)
 * ------------------------------------------------------------------ */

export const qualityPillars = [
  {
    icon: 'search',
    title: 'Inspection at Origin',
    body: 'We check goods before they move, not after they land. For dry goods that means verifying the lot against the agreed grade; for fresh produce it means seeing the pack-out.',
  },
  {
    icon: 'shield',
    title: 'Food Safety Compliance',
    body: 'Shipments are prepared to meet UAE import requirements and the standards of the destination market, with testing arranged where a buyer or an authority requires it.',
  },
  {
    icon: 'time',
    title: 'Cold Chain Integrity',
    body: 'Perishables are pre-cooled at source and kept cold through packing, transit and handover. A break in the chain is the single most common reason produce arrives unsellable.',
  },
  {
    icon: 'doc',
    title: 'Documentation Per Shipment',
    body: 'Certificate of origin, phytosanitary or health certificate as the product requires, packing list and commercial invoice — prepared ahead of arrival.',
  },
  {
    icon: 'box',
    title: 'Packing to Specification',
    body: 'Export-grade cartons and bags chosen for the product and the journey, with private label and custom print where you need it.',
  },
  {
    icon: 'handshake',
    title: 'Consistency Between Shipments',
    body: 'The grade you approved is the grade that keeps arriving. Where a crop or a market forces a change, we tell you before we ship, not after.',
  },
];

export const driedFruitsNuts = [
  {
    name: 'Cashew Nuts',
    description: 'Whole white kernels graded by count, plus splits and pieces.',
    image: '/img/products/cashews.jpg',
    specs: {
      Origin: 'India, Vietnam, Ivory Coast',
      Grades: 'W180, W210, W240, W320, W450; splits, butts and pieces',
      Packing: '10 / 22.68 kg vacuum tins and cartons',
      Shipment: 'Sea — FCL and LCL; air for small lots',
    },
  },
  {
    name: 'Almonds',
    description: 'Sweet, uniform almond kernels in shelled and inshell form.',
    image: '/img/products/almonds.jpg',
    specs: {
      Origin: 'USA (California), Australia, Iran',
      Grades: 'Nonpareil, Independence, Carmel; 23/25, 27/30 count',
      Packing: '10 / 25 kg cartons and PP bags',
      Shipment: 'Sea — FCL and LCL',
    },
  },
  {
    name: 'Pistachios',
    description: 'Naturally opened pistachios, roasted and salted or raw.',
    image: '/img/products/pistachios.jpg',
    specs: {
      Origin: 'Iran, USA, Turkey',
      Grades: '21/25, 26/30 count; jumbo and standard',
      Packing: '10 / 25 kg cartons, vacuum or bulk',
      Shipment: 'Sea — FCL and LCL',
    },
  },
  {
    name: 'Walnuts',
    description: 'Light-coloured walnut kernels, halves and quarters.',
    image: '/img/products/walnuts.jpg',
    specs: {
      Origin: 'Chile, USA, India, Ukraine',
      Grades: 'Light halves, light amber, quarters and pieces',
      Packing: '10 / 25 kg cartons, vacuum lined',
      Shipment: 'Sea reefer preferred — kernels hold better cold',
    },
  },
  {
    name: 'Raisins',
    description: 'Golden and black raisins, seedless and cleaned.',
    image: '/img/products/raisins.jpg',
    specs: {
      Origin: 'India, Iran, Turkey, Afghanistan',
      Grades: 'Golden, black, sultana; seedless',
      Packing: '10 / 12.5 / 25 kg cartons and PP bags',
      Shipment: 'Sea — FCL and LCL',
    },
  },
  {
    name: 'Dates',
    description: 'Soft and semi-dry dates in retail and bulk packing.',
    image: '/img/products/dates.jpg',
    specs: {
      Origin: 'UAE, Saudi Arabia, Iran, Tunisia',
      Varieties: 'Medjool, Khalas, Fard, Zahidi, Deglet Nour',
      Packing: '5 / 10 kg cartons; retail packs to order',
      Shipment: 'Sea and road; air for premium Medjool',
    },
  },
  {
    name: 'Figs',
    description: 'Whole dried figs, sun-dried and sorted by diameter.',
    specs: {
      Origin: 'Turkey, Afghanistan, Iran',
      Grades: 'Lerida, Protoben; sorted by diameter and colour',
      Packing: '5 / 10 kg cartons, layered or loose',
      Shipment: 'Sea — LCL; air for small lots',
    },
  },
  {
    name: 'Apricots',
    description: 'Dried apricots, sulphured for colour or natural.',
    specs: {
      Origin: 'Turkey (Malatya), Afghanistan',
      Grades: 'Number 1 to 6 by size; sulphured or natural',
      Packing: '5 / 10 / 12.5 kg cartons',
      Shipment: 'Sea — FCL and LCL',
    },
  },
  {
    name: 'Prunes',
    description: 'Pitted and unpitted dried plums with soft texture.',
    specs: {
      Origin: 'Chile, USA, France',
      Grades: '30/40, 40/50, 60/70 count per 500 g',
      Packing: '10 / 12.5 kg cartons',
      Shipment: 'Sea — FCL and LCL',
    },
  },
  {
    name: 'Seeds',
    description: 'Pumpkin, sunflower, chia and flax seeds, cleaned and sorted.',
    specs: {
      Origin: 'China, India, Argentina, Ukraine',
      Range: 'Pumpkin (AA, A, GWS), sunflower, chia, flax, sesame',
      Packing: '25 / 50 kg PP bags; retail packs to order',
      Shipment: 'Sea — FCL and LCL',
    },
  },
];

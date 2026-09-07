# Assumptions to confirm before launch

Everything in this file was written by me to industry-standard trade practice. **None of it has been
verified against how HENJ actually sources, grades, packs or ships.** It is plausible and internally
consistent, which makes it more dangerous than an obvious placeholder — a buyer will treat it as a
commitment. Please correct anything wrong before the site goes public.

Each item names the file to edit. Most live in one place.

---

## 1. Claims presented as fact on the site

| Claim | Where it appears | Source |
|---|---|---|
| "12+ years in the trade" | Homepage seal, stats strip | Taken from the design comps. **Never verified with you.** |
| "35+ product lines supplied" | Stats strip | Counted from the catalogue in this repo — true of the website, not necessarily of the business. |
| "5 markets served" | Stats strip | UAE, Saudi, Qatar, Bahrain, Kuwait, per your brief. |
| "Daily air shipments" | Stats strip, several pages | Inferred from the Al Aweer / fresh-produce positioning. |
| "Our own vehicles" for UAE road distribution | Services, Packing & Shipping, Quality | Inferred. If you use third-party transport, this must change. |
| Al Aweer as the base of operations | About, Quality, several pages | From your brief. |
| Egg sourcing from India and Turkey | Eggs page | From your brief. |

**Edit:** `content/site.js` (`site.stats`), `app/page.jsx` (the seal).

---

## 2. Product specifications — all 35 items

`content/products.js`. Every product carries four spec lines. The values are trade-standard, not
HENJ-specific. The ones most likely to be wrong, because they are the most specific:

- **Origins.** I assigned plausible sourcing countries per commodity (Nashik onions, Guntur chilli,
  Idukki cardamom, Malabar pepper, Canadian lentils, and so on). Replace with where you actually buy.
- **Grades and calibres.** Chickpeas 7–12 mm, cardamom 6–8 mm bold, black pepper 500–570 g/l,
  black chana counts 42/44–58/60, chilli ASTA 60–120, turmeric 2–5% curcumin. These are real
  industry grades but I do not know which ones you trade.
- **Packing sizes.** 5/10/25/50 kg bags for dry goods, 3–5 kg cartons for fruit, 30-egg trays at
  360 per carton. Adjust to your actual formats.
- **Shipment mode per product.** My air-versus-sea split is based on shelf life, not on your routing.
- **Rice varieties.** Basmati 1121 and 1509, Sona Masoori, IR64, Parboiled, Sella.
- **Egg weight bands.** Small 45–52 g, Medium 53–62 g, Large 63–72 g, XL 73 g+.

---

## 3. Minimum order quantities

Shown as a chip under each product range and repeated in the FAQ. **These are commercial commitments
and are the single most important thing on this list to get right.**

| Category | Stated MOQ |
|---|---|
| Fruits & Vegetables | 100 kg per line |
| Pulses, Rice, Grains & Spices | 1 MT per variety |
| Eggs | 1 pallet |

**Edit:** `content/products.js` — `categories[].meta`, and the first FAQ answer in `faqs`.

---

## 4. Packing, palletisation and container loadability

`content/products.js` — `packingTable` and `containerGuide`. Pallet counts (80–120 cartons per
pallet, 20 bags per pallet at 50 kg, 36 egg cartons per pallet) and container figures
(380,000–400,000 eggs per 40 ft reefer, 25–28 MT of bagged dry goods) are industry approximations.
The page labels them "indicative", but a buyer will still plan against them.

---

## 5. Transit times and commercial terms

`content/products.js` — `modeGuide` and `faqs`.

- Air 1–3 days to the UAE; sea 7–21 days; road same-day to 3 days.
- Payment terms: the FAQ says advance payment, letters of credit, and credit terms for established
  customers. **I invented this.** Confirm what you actually offer.
- Sampling: the FAQ offers samples from the exact lot for dry goods, and inspection at Al Aweer for
  fresh produce.
- Private label: offered for rice, pulses, spices and egg packing.

---

## 6. Quality and certification wording

`app/quality/page.jsx` and `content/products.js` (`qualityPillars`).

I deliberately made **no specific certification claims** — no ISO, HACCP, FSSAI or ESMA numbers
appear anywhere, because I cannot verify them. The page describes processes ("we inspect at origin",
"documentation is prepared ahead of arrival") rather than credentials.

If HENJ holds real certifications, they belong here and would strengthen the page considerably.
Conversely, if any process described does not match how you work, it needs to come out.

Documents named as issued per shipment: certificate of origin, phytosanitary certificate, health
certificate, packing list and commercial invoice.

---

## 7. Still outstanding from Phase 1

- **Four product lines I added because you supplied photos of them.** Tomatoes, Capsicum, Carrots
  and Potatoes were not in your original 8-page spec — I created them because a photo of a product
  is a strong signal you trade it. Their specs are trade defaults like all the others. Delete any
  you do not actually supply; they are in `fruitsVegetables` in `content/products.js`.
- **Dried Fruits & Nuts is a new category** (10 lines: cashew, almond, pistachio, walnut, raisins,
  dates, figs, apricots, prunes, seeds). Added because your own design comps listed "Fresh & Dry
  Fruits" in the footer and you confirmed HENJ trades it. Every grade and origin is a trade default:
  cashew W180–W450, pistachio 21/25, almond Nonpareil, apricot sizes 1–6. Correct as needed.
  I deliberately did **not** add the reference site's frozen vegetables, FMCG packaged foods or
  white-label chemicals.
- **Product photography** — Fruits & Vegetables is **complete** (16/16). Spices is 8/17.
  Still empty: 9 on Pulses/Spices (rice, the four dals, black chana, chickpeas, lentils, cardamom,
  star anise), all 10 on Dried Fruits & Nuts, and all 7 on Eggs.
- **A cinnamon photograph is sitting unused.** It arrived labelled "cardamom" but shows cinnamon
  quills. Cinnamon is not in HENJ's catalogue, so nothing was wired. Either send a real cardamom
  photo (small pale-green pods), or say the word and I will add Cinnamon as a product line —
  the reference site carries it as Cassia and Ceylon.
- **The "Other Fresh Items" photograph shows more than you sell.** It includes milk, yoghurt, cheese
  and bread. HENJ's catalogue lists none of those — only eggs overlap. On a tile that means "ask us
  about anything else" that breadth may be intentional, but it does suggest dairy and bakery lines.
  Swap it if that is not a direction you want to imply. Add an `image` field to a
  product in `content/products.js` and the slot fills itself. (The Home and About mosaic and feature
  slots are now filled with the five farm photographs.)
- **The olives photograph.** `farm-olives.jpg` sits in the About page's sourcing mosaic. HENJ's
  catalogue contains no olives or olive oil, so it reads as Mediterranean *sourcing* imagery rather
  than a product claim — but a buyer could reasonably infer you trade it. Swap it if that is wrong;
  the other four map directly onto ranges you do supply.
- **Sister concerns.** Aidan Arab General Trading L.L.C. (Ajman), Nihal Traders (Hosur–Bangalore,
  India) and Nihal Investments (Muscat, Oman) are listed on About, Contact and in the footer from
  the details you sent — including the one-line role I wrote for each ("general trading", "sourcing
  & procurement", "trading & distribution"). Confirm the trading names, the legal suffixes and
  those roles. Two numbers were normalised for `tel:` links: `068810055` as the Ajman landline
  **+971 6 881 0055**, and `0527629767` as the mobile **+971 52 762 9767**. They are in
  `sisterConcerns` in `content/site.js`.
- **Catering foodstuff supply — a new page and a new product claim.** `/catering-supply`
  (`app/catering-supply/page.jsx`) sells full container loads of dry staples to hospitality catering
  companies in Abu Dhabi and across the UAE, with a summary panel on Services and an echo on the
  homepage HORECA card. Three things in it are mine, not yours, and should be checked:
  - **Sugar is not in the catalogue.** The page lists it as a headline staple at "refined white,
    ICUMSA 45" in 25/50 kg bags, because you named it. Confirm the grade, or say what you actually
    ship. Cooking oil and flour appear once, as "available on request" — delete that line if you do
    not supply them.
  - **The commercial terms are trade-standard, written by me.** Prices held for the contract term,
    scheduled release against consumption, samples from the lot before a dry-goods contract, mixed
    consolidation into one container. Plausible, and none of it confirmed with you.
  - **Loadability figures** (25–27 MT per 20 ft for bagged goods, 20–24 MT for spices) reuse the
    approximations already on the Packing & Shipping page — see section 4 above.
- **Overland delivery to Qatar, Bahrain and Kuwait.** Now its own highlighted band
  (`components/RoadFreightBand.jsx`) on the homepage, Services, Packing & Shipping and the catering
  page. It states three things as fact: the trucks are **ours, not a broker's**; transit is
  **1–3 days overland** (matching the road figure already in `modeGuide`); and **border paperwork is
  prepared before departure**. It also says the route runs **through Saudi Arabia**, which is
  geographically true but implies you hold the transit permissions to do it. Confirm all four, or
  tell me which to soften.
- **Social profile URLs** — `site.socials` points every icon at `#`.
- **Domain** — defaults to `https://henj-uae.com`, inferred from the email in the comps. Override with
  `NEXT_PUBLIC_SITE_URL=https://yourdomain.com npm run build`.
- **Terms & Conditions and Privacy Policy** — no copy, so no pages and no footer links.

## 8. Recommended, not built

- **Arabic.** The reference site runs 12 languages. For a Dubai importer serving the GCC, Arabic is
  the one that would actually pay. It is a real project, not a toggle — say the word and I will scope it.
- **A blog.** The reference site's 29 long-form commodity posts ("mango export from India",
  "onion export") are its entire search engine — that is where its traffic comes from, not the
  catalogue. It is the highest-leverage thing HENJ could add next. I did not build an empty shell.

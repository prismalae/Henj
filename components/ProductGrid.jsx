import ProductCard from './ProductCard';

/**
 * Renders a product range.
 *
 * Once a category has any photography, only the photographed tiles are shown, so
 * a finished card never sits beside a grey placeholder. Products stay in
 * content/products.js either way — adding an `image` brings a tile straight back
 * with its specs intact.
 *
 * A category with no photos yet shows its full range rather than rendering an
 * empty page: with nothing to compare against, placeholders read as a catalogue,
 * not as missing images.
 */
export default function ProductGrid({ items, columns = 4 }) {
  const photographed = items.filter((item) => item.image);
  const shown = photographed.length > 0 ? photographed : items;

  return (
    <div className={`grid grid--${columns}`}>
      {shown.map((item) => (
        <ProductCard key={item.name} {...item} />
      ))}
    </div>
  );
}

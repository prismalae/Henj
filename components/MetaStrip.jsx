import Icon from './Icon';

/** Category-level trade facts (testing, grading, MOQ) shown under a product hero. */
export default function MetaStrip({ items }) {
  return (
    <ul className="meta-strip">
      {items.map((t) => (
        <li key={t}>
          <Icon name="shield" size={16} strokeWidth={1.6} />
          {t}
        </li>
      ))}
    </ul>
  );
}

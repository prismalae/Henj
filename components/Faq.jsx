import Icon from './Icon';

/** Native <details> accordion — no JavaScript, keyboard accessible by default. */
export default function Faq({ items }) {
  return (
    <div className="faq">
      {items.map((item) => (
        <details key={item.q}>
          <summary>
            <span>{item.q}</span>
            <Icon name="chevron" size={20} />
          </summary>
          <p>{item.a}</p>
        </details>
      ))}
    </div>
  );
}

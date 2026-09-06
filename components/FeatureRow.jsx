import Icon from './Icon';

export default function FeatureRow({ items }) {
  return (
    <div className="features">
      {items.map((f) => (
        <div className="feature" key={f.title}>
          <div className="feature-icon"><Icon name={f.icon} size={28} /></div>
          <h3>{f.title}</h3>
          <p>{f.body}</p>
        </div>
      ))}
    </div>
  );
}

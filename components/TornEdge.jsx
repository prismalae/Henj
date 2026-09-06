/**
 * The hand-torn paper edge that separates every dark hero from the page below.
 * `flip` puts the tear at the top of a section instead of the bottom.
 */
export default function TornEdge({ color = 'var(--cream)', flip = false, className = '' }) {
  return (
    <div className={`torn ${className}`} style={flip ? { transform: 'scaleY(-1)' } : undefined} aria-hidden="true">
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
        <path
          fill={color}
          d="M0 60V17.9L27.1 17.9L63.3 15.9L96.3 23.5L115.9 27.2L135.0 25.3L154.9 16.4L184.8 35.5L206.3 19.8L241.8 38.6L276.0 24.3L321.3 15.2L363.4 21.5L385.4 17.1L412.1 35.2L435.1 29.1L471.0 23.7L504.3 15.6L524.0 19.4L561.1 25.1L587.9 29.2L618.5 21.8L658.8 32.2L683.6 28.9L716.3 36.8L754.8 21.5L800.2 17.1L829.9 33.7L852.2 26.7L871.3 31.4L910.7 28.9L953.2 22.2L990.7 29.5L1024.9 25.9L1066.4 38.6L1097.7 31.3L1117.4 32.2L1153.5 39.8L1194.5 21.4L1223.3 31.4L1241.9 26.0L1264.7 17.0L1284.3 34.0L1305.9 20.4L1334.9 36.7L1355.1 25.7L1388.5 37.0L1429.5 36.5L1440 24.8L1440 60Z"
        />
      </svg>
    </div>
  );
}

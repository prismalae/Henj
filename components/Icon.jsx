/**
 * Inline line-art icon set. Stroke-based so it inherits `color`
 * and reads as the gold engraving used throughout the comps.
 */
const paths = {
  sourced: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3" /><path d="M12 4V2M12 22v-2M4 12H2M22 12h-2" /></>,
  quality: <><circle cx="12" cy="9" r="6" /><path d="M9 14.5 8 22l4-2 4 2-1-7.5" /></>,
  hygienic: <><path d="M12 2s6 4 6 9a6 6 0 1 1-12 0c0-5 6-9 6-9Z" /><path d="M9.5 13a2.5 2.5 0 0 0 5 0" /></>,
  time: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></>,
  leaf: <><path d="M4 20c0-8 6-14 16-14 0 10-6 14-13 14Z" /><path d="M4 20c4-4 7-6 11-8" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 3 2.5 15 0 18M12 3c-2.5 3-2.5 15 0 18" /></>,
  truck: <><path d="M2 7h11v9H2zM13 10h4l4 3.5V16h-8z" /><circle cx="6" cy="18" r="2" /><circle cx="17" cy="18" r="2" /></>,
  people: <><circle cx="9" cy="9" r="3" /><circle cx="17" cy="10" r="2.4" /><path d="M3 19c0-3 2.7-5 6-5s6 2 6 5M16 14.5c2.7.3 5 2.1 5 4.5" /></>,
  eye: <><path d="M2 12s3.6-6 10-6 10 6 10 6-3.6 6-10 6-10-6-10-6Z" /><circle cx="12" cy="12" r="2.8" /></>,
  target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.4" /></>,
  handshake: <><path d="M2 11.5 6 8l4 1 2-1 2 1 4-1 4 3.5" /><path d="M6 12.5 9.5 16l1.5-1.5L13 16l1.5-1.5L18 12.5" /></>,
  plane: <><path d="M2 13.5 22 5l-6.5 15-3-6.5z" /><path d="M12.5 13.5 9 17v4l3-3.5" /></>,
  ship: <><path d="M3 16.5 5 11h14l2 5.5" /><path d="M12 11V5H8" /><path d="M2.5 17.5c2 1.5 3.5 1.5 5 0s3.5-1.5 5 0 3.5 1.5 5 0 2-1 3-1" /></>,
  box: <><path d="M12 3 3 7.5v9L12 21l9-4.5v-9L12 3Z" /><path d="M3 7.5 12 12l9-4.5M12 12v9" /></>,
  doc: <><path d="M6 3h8l4 4v14H6z" /><path d="M14 3v4h4M9 12h6M9 16h6" /></>,
  search: <><circle cx="11" cy="11" r="6.5" /><path d="M16 16l5 5" /></>,
  phone: <><path d="M4 4h4l2 5-2.5 1.5a12 12 0 0 0 6 6L15 14l5 2v4a15 15 0 0 1-16-16Z" /></>,
  whatsapp: <><path d="M3 21l1.6-4.4A8.5 8.5 0 1 1 8 20l-5 1Z" /><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5.6 0 1.2-.6 1.2-1.2l-1.6-.8-.9 1a5.6 5.6 0 0 1-2.7-2.7l1-.9-.8-1.6c-.6 0-1.7.4-1.7 1.7Z" /></>,
  pin: <><path d="M12 21s7-5.8 7-11a7 7 0 1 0-14 0c0 5.2 7 11 7 11Z" /><circle cx="12" cy="10" r="2.6" /></>,
  mail: <><rect x="2.5" y="5" width="19" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  building: <><path d="M4 21V6l7-3 7 3v15" /><path d="M8 9h2M14 9h2M8 13h2M14 13h2M10 21v-4h4v4" /></>,
  chat: <><path d="M4 5h16v10H9l-5 4z" /><path d="M8 9h8M8 12h5" /></>,
  shield: <><path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" /><path d="m9 12 2 2 4-4" /></>,
  arrow: <><path d="M4 12h15" /><path d="m13 6 6 6-6 6" /></>,
  chevron: <><path d="m6 9 6 6 6-6" /></>,
  close: <><path d="M6 6l12 12M18 6 6 18" /></>,
  menu: <><path d="M3 6h18M3 12h18M3 18h18" /></>,
  send: <><path d="M22 2 11 13" /><path d="M22 2 15 22l-4-9-9-4Z" /></>,
  facebook: <><path d="M14 8h3V4.5h-3c-2 0-3.5 1.5-3.5 3.5v2H8v3.5h2.5V21H14v-7.5h2.7l.5-3.5H14V8.4c0-.3.2-.4.5-.4Z" /></>,
  instagram: <><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="3.8" /><circle cx="16.8" cy="7.2" r="0.9" fill="currentColor" /></>,
  linkedin: <><rect x="3.5" y="3.5" width="17" height="17" rx="3" /><path d="M8 10.5V17M8 7.4v.1M12 17v-3.6c0-1.4.9-2.4 2.2-2.4s2.3 1 2.3 2.4V17" /></>,
  nut: <><path d="M12 3c4 0 7 3.6 7 8s-3 10-7 10-7-5.6-7-10 3-8 7-8Z" /><path d="M12 5.5c-1.8 2.2-2.6 5-2.6 7.8 0 2.4.7 4.6 2.6 5.9" /></>,
  egg: <><path d="M12 3c3.3 0 6 4.7 6 9a6 6 0 0 1-12 0c0-4.3 2.7-9 6-9Z" /><path d="M9.4 13.6a2.7 2.7 0 0 0 2.6 2.6" /></>,
  sparkle: <><path d="M12 3v18M3 12h18" /><path d="m6.5 6.5 11 11M17.5 6.5l-11 11" /></>,
};

export default function Icon({ name, size = 24, strokeWidth = 1.5, ...rest }) {
  const d = paths[name];
  if (!d) return null;
  return (
    <svg
      width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true" focusable="false" {...rest}
    >
      {d}
    </svg>
  );
}

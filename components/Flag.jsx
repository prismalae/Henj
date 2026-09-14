/**
 * Small drawn flags, shared by the hero GCC route strip and the group cards.
 *
 * Each is simplified to what survives a ~30px disc: the field division and the
 * official colours. Fine detail is approximated deliberately — the serration on
 * the Qatari and Bahraini flags is sub-pixel at this size, India's chakra is a
 * ticked ring rather than 24 drawn spokes, and Oman's national emblem is a
 * suggestion of the khanjar and crossed swords rather than the real device.
 * They are decorative everywhere they are used: the country is always named in
 * adjacent text, so nothing depends on identifying a flag.
 *
 * viewBox is 24x24 and the artwork bleeds to the edges, so callers can crop to a
 * circle, a rounded rect or leave it square.
 */
const FLAGS = {
  ae: {
    name: 'United Arab Emirates',
    art: (
      <>
        <rect y="0" width="24" height="8" fill="#00732f" />
        <rect y="8" width="24" height="8" fill="#fff" />
        <rect y="16" width="24" height="8" fill="#000" />
        <rect width="6" height="24" fill="#ce1126" />
      </>
    ),
  },
  in: {
    name: 'India',
    art: (
      <>
        <rect width="24" height="8" fill="#f93" />
        <rect y="8" width="24" height="8" fill="#fff" />
        <rect y="16" width="24" height="8" fill="#138808" />
        <circle cx="12" cy="12" r="3.1" fill="none" stroke="#000080" strokeWidth="0.45" />
        {/* the spokes, as ticks around a thick-stroked ring */}
        <circle
          cx="12" cy="12" r="1.85" fill="none" stroke="#000080"
          strokeWidth="2.1" strokeDasharray="0.38 0.59"
        />
        <circle cx="12" cy="12" r="0.55" fill="#000080" />
      </>
    ),
  },
  om: {
    name: 'Oman',
    art: (
      <>
        <rect x="8" width="16" height="8" fill="#fff" />
        <rect x="8" y="8" width="16" height="8" fill="#c8102e" />
        <rect x="8" y="16" width="16" height="8" fill="#0d9e4a" />
        <rect width="8" height="24" fill="#c8102e" />
        <g stroke="#fff" strokeWidth="0.75" strokeLinecap="round" fill="none">
          <path d="M2.1 3.1 6 6.7M5.9 3.1 2 6.7" />
          <path d="M2.6 5.3c1.5 1.4 3.3 1.4 4.8 0" />
        </g>
      </>
    ),
  },
  qa: {
    name: 'Qatar',
    art: (
      <>
        <rect width="24" height="24" fill="#fff" />
        <path
          fill="#8d1b3d"
          d="M7 0h17v24H7l4.6-1.85L7 20.3l4.6-1.85L7 16.6l4.6-1.85L7 12.9l4.6-1.85L7 9.2l4.6-1.85L7 5.5l4.6-1.85L7 1.8Z"
        />
      </>
    ),
  },
  kw: {
    name: 'Kuwait',
    art: (
      <>
        <rect width="24" height="8" fill="#007a3d" />
        <rect y="8" width="24" height="8" fill="#fff" />
        <rect y="16" width="24" height="8" fill="#ce1126" />
        <path fill="#000" d="M0 0h8L5 8v8l3 8H0Z" />
      </>
    ),
  },
  sa: {
    name: 'Saudi Arabia',
    art: (
      <>
        <rect width="24" height="24" fill="#006c35" />
        {/* The shahada, as the two ticked bands the script reads as at this
            size, over the sword. Drawing the calligraphy is pointless below
            about 60px — it turns to grey mush. */}
        <g stroke="#fff" strokeLinecap="round" fill="none">
          <path d="M4.2 8.2h15.6" strokeWidth="1.7" strokeDasharray="2.1 1.4" />
          <path d="M6.6 12h10.8" strokeWidth="1.3" strokeDasharray="1.5 1.2" />
        </g>
        {/* the sword: blade, tip and hilt, which is what stops the three white
            marks reading as a menu icon at pill size */}
        <path fill="#fff" d="M3.3 16.9 6.8 15.95v1.9L3.3 16.9Z" />
        <path stroke="#fff" strokeWidth="1.9" strokeLinecap="butt" d="M6 16.9h11" />
        <path stroke="#fff" strokeWidth="1.3" strokeLinecap="round" d="M17.9 15.1v3.6" />
      </>
    ),
  },
  bh: {
    name: 'Bahrain',
    art: (
      <>
        <rect width="24" height="24" fill="#fff" />
        <path
          fill="#ce1126"
          d="M6 0h18v24H6l5-2.4L6 19.2l5-2.4L6 14.4l5-2.4L6 9.6l5-2.4L6 4.8l5-2.4Z"
        />
      </>
    ),
  },
};

export const flagName = (code) => FLAGS[code]?.name;

/** Reverse lookup, so a list that carries country names (site.markets) can show
    a flag without keeping a second copy of the codes beside it. */
export const flagCode = (name) =>
  Object.keys(FLAGS).find((c) => FLAGS[c].name === name);

export default function Flag({ code, className = '' }) {
  const f = FLAGS[code];
  if (!f) return null;
  return (
    <svg className={className} viewBox="0 0 24 24" role="presentation" focusable="false" aria-hidden="true">
      {f.art}
    </svg>
  );
}

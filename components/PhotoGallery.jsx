'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Icon from './Icon';

/**
 * A tiled photo grid where any tile opens full size.
 *
 * The tiles are buttons rather than figures, because they do something. That
 * matters for the grid underneath them: `.gallery` uses `grid-auto-flow: dense`
 * to stop a two-column tile stranding an empty cell, and dense flow lets a later
 * item backfill an earlier gap — so DOM order and visual order can differ by a
 * tile. Harmless for reading order (these are unordered photographs) but it does
 * move focus order, which is why the lightbox is keyboard-complete: arrows step,
 * Escape closes, and focus returns to the tile you opened.
 *
 * The overlay is portalled to <body>. Sections on this site carry an identity
 * transform from their scroll reveal, and a transformed ancestor becomes the
 * containing block for position:fixed — rendered in place, the overlay pinned
 * itself to the section instead of the viewport and covered only part of it.
 */
export default function PhotoGallery({ items, dir = '/img/group' }) {
  const [open, setOpen] = useState(null); // index, or null
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const openerRef = useRef(null);
  const closeRef = useRef(null);

  const close = useCallback(() => {
    setOpen(null);
    // hand focus back to the tile that opened it, not the top of the document
    if (openerRef.current) openerRef.current.focus();
  }, []);

  const step = useCallback(
    (delta) => setOpen((i) => (i === null ? i : (i + delta + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (open === null) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowRight') step(1);
      else if (e.key === 'ArrowLeft') step(-1);
    };
    document.addEventListener('keydown', onKey);
    // the page behind must not scroll while the overlay is up
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close, step]);

  const current = open === null ? null : items[open];

  return (
    <>
      <div className="gallery">
        {items.map((p, i) => (
          <button
            type="button"
            className={`gallery-item${p.wide ? ' gallery-item--wide' : ''}`}
            key={p.src}
            onClick={(e) => {
              openerRef.current = e.currentTarget;
              setOpen(i);
            }}
            aria-label={`${p.alt} — view larger`}
          >
            <img src={`${dir}/${p.src}.jpg`} alt={p.alt} loading="lazy" />
            <span className="gallery-zoom" aria-hidden="true"><Icon name="search" size={18} /></span>
          </button>
        ))}
      </div>

      {current && mounted && createPortal(
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          onClick={(e) => { if (e.target === e.currentTarget) close(); }}
        >
          <button type="button" className="lightbox-close" onClick={close} aria-label="Close" ref={closeRef}>
            <Icon name="close" size={22} strokeWidth={1.8} />
          </button>
          {items.length > 1 && (
            <button type="button" className="lightbox-nav lightbox-nav--prev" onClick={() => step(-1)} aria-label="Previous photo">
              <Icon name="arrow" size={22} />
            </button>
          )}
          <figure className="lightbox-figure">
            <img src={`${dir}/${current.src}.jpg`} alt={current.alt} />
            <figcaption>
              {current.alt}
              <span className="lightbox-count">{open + 1} / {items.length}</span>
            </figcaption>
          </figure>
          {items.length > 1 && (
            <button type="button" className="lightbox-nav lightbox-nav--next" onClick={() => step(1)} aria-label="Next photo">
              <Icon name="arrow" size={22} />
            </button>
          )}
        </div>,
        document.body,
      )}
    </>
  );
}

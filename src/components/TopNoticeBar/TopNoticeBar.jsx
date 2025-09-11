// src/components/TopNoticeBar/TopNoticeBar.jsx
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./TopNoticeBar.css";

const TRANSITION_MS = 700; // keep in sync with CSS transition duration

function formatTags(input) {
  if (!input) return [];
  const arr = Array.isArray(input) ? input : String(input).split(",");
  return arr
    .map((s) => s.trim())
    .filter(Boolean)
    .map((tag) => {
      const handle = tag.startsWith("@") ? tag.slice(1) : tag;
      return {
        raw: tag.startsWith("@") ? tag : `@${handle}`,
        url: `https://instagram.com/${handle}`,
      };
    });
}

export default function TopNoticeBar({
  variant = "home", // 'home' | 'tags'
  delay = 1000,     // ms before opening
  tags,             // array or comma-separated string (for 'tags' variant)
}) {
  const [mounted, setMounted] = useState(true);      // unmount once fully closed
  const [open, setOpen] = useState(false);           // controls .open class
  const [closing, setClosing] = useState(false);     // true during close anim
  const [spacerH, setSpacerH] = useState(0);         // animated spacer height

  const barRef = useRef(null);
  const closeTimerRef = useRef(null);
  const roRef = useRef(null); // ResizeObserver

  // Open after delay
  useEffect(() => {
    const t = setTimeout(() => setOpen(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  // When opening: animate spacer 0 → measured height (next frame)
  useEffect(() => {
    if (!open) return;

    const measure = () => (barRef.current ? barRef.current.offsetHeight || 0 : 0);
    const h = measure();
    setSpacerH(0); // ensure a 0 start so CSS can animate height

    const raf = requestAnimationFrame(() => setSpacerH(h));

    // Keep spacer synced with bar height while open (handles line wraps/responsive)
    if ("ResizeObserver" in window && barRef.current) {
      roRef.current = new ResizeObserver(() => {
        const newH = measure();
        // Setting to same value is fine; CSS will only animate when value changes
        setSpacerH((prev) => (prev !== newH ? newH : prev));
      });
      roRef.current.observe(barRef.current);
    }

    return () => {
      cancelAnimationFrame(raf);
      if (roRef.current) {
        roRef.current.disconnect();
        roRef.current = null;
      }
    };
  }, [open]);

  // Ensure initial spacer height if component renders already-open (edge cases)
  useLayoutEffect(() => {
    if (open && barRef.current) {
      setSpacerH(barRef.current.offsetHeight || 0);
    }
  }, [open]);

  // Close handler: slide bar up and animate spacer to 0; unmount after transition
  const handleClose = () => {
    if (!open || closing) return;
    setClosing(true);
    setOpen(false);

    // Animate spacer from current height → 0
    const currentH = barRef.current ? barRef.current.offsetHeight || spacerH : spacerH;
    setSpacerH(currentH);
    requestAnimationFrame(() => setSpacerH(0));

    // Unmount after CSS transition completes
    closeTimerRef.current = window.setTimeout(() => {
      setMounted(false);
      // cleanup observer if still attached
      if (roRef.current) {
        roRef.current.disconnect();
        roRef.current = null;
      }
    }, TRANSITION_MS + 60); // small safety buffer
  };

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
      if (roRef.current) {
        roRef.current.disconnect();
        roRef.current = null;
      }
    };
  }, []);

  // Tags variant: hide if no tags
  const parsedTags = variant === "tags" ? formatTags(tags) : [];
  if (variant === "tags" && parsedTags.length === 0) return null;
  if (!mounted) return null;

  // Content by variant
  const content =
    variant === "home" ? (
      <>
        <a 
            className="line link" 
            href="https://www.google.com/maps/d/u/0/edit?mid=10MuipRQ-aIahCTg_r92ldEDmz1mc_PE&usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer">
          <span>Find a full map <b>here</b>.</span>
        </a>
        <a
          className="line link"
          href="https://instagram.com/joelexperience"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Follow on <b>Instagram</b> for updates (@joelexperience)</span>
        </a>
      </>
    ) : (
      <>
        <div className="line">
          <strong>tag on <b>Instagram:</b></strong>
        </div>
        <div className="line tag-row">
          {parsedTags.map(({ raw, url }) => (
            <a key={raw} className="tag-chip" href={url} target="_blank" rel="noopener noreferrer">
              {raw}
            </a>
          ))}
        </div>
      </>
    );

  return (
    <>
      <div
        ref={barRef}
        className={`top-notice ${open ? "open" : ""}`}
        role="region"
        aria-label="Site notice"
      >
        <div className="top-notice__content">{content}</div>

        <button
          className="top-notice__close"
          onClick={handleClose}
          aria-label="Close notice"
          title="Close"
        >
          ×
        </button>
      </div>

      {/* Smooth spacer: add CSS .top-notice-spacer { transition: height 700ms ... } */}
      <div
        className="top-notice-spacer"
        style={{ height: open || closing ? spacerH : 0 }}
        aria-hidden="true"
      />
    </>
  );
}

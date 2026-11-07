import { useEffect, useRef } from "react";

// Animated background lines. A tiny animation loop (no library) updates each
// line on every screen refresh: the visible stretch grows from 30% to the
// full line while sliding along it and back, and the line fades
// 0.3 -> 0.6 -> 0.3. Each line loops every 20-30s so they drift out of sync.

function buildPaths(position) {
  return Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.5 + i * 0.03,
    duration: 20 + ((i * 7) % 11),
  }));
}

const PATHS = [...buildPaths(1), ...buildPaths(-1)];
const SPLIT = PATHS.length / 2;

// Where a line is at progress p (0 -> 1 through one loop).
function frame(p) {
  const tri = p < 0.5 ? p * 2 : 2 - p * 2; // 0 -> 1 -> 0
  return { visible: 0.3 + 0.7 * p, offset: tri, opacity: 0.3 + 0.3 * tri };
}

function drawLine(el, len, p) {
  const f = frame(p);
  el.setAttribute("stroke-dasharray", `${f.visible * len} ${len}`);
  el.setAttribute("stroke-dashoffset", `${-f.offset * len}`);
  el.setAttribute("opacity", f.opacity);
}

function Svg({ paths, refs }) {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 696 316" fill="none">
        {paths.map((path, i) => (
          <path
            key={path.id}
            ref={(el) => { refs.current[i] = el; }}
            d={path.d}
            stroke="#00C8FF"
            strokeWidth={path.width}
            strokeOpacity={0.06 + path.id * 0.012}
            visibility="hidden"
          />
        ))}
      </svg>
    </div>
  );
}

export function BackgroundPaths() {
  const a = useRef([]);
  const b = useRef([]);

  useEffect(() => {
    const els = [...a.current, ...b.current];
    const lens = els.map((el) => el.getTotalLength());
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Visitors who've asked their device to reduce motion get still lines.
    if (still) {
      els.forEach((el) => {
        el.setAttribute("opacity", 0.45);
        el.setAttribute("visibility", "visible");
      });
      return;
    }

    let raf;
    const tick = (now) => {
      els.forEach((el, i) => {
        const dur = PATHS[i].duration * 1000;
        drawLine(el, lens[i], (now % dur) / dur);
      });
      raf = requestAnimationFrame(tick);
    };
    // Draw the first frame straight away, then reveal and start looping.
    els.forEach((el, i) => {
      drawLine(el, lens[i], 0);
      el.setAttribute("visibility", "visible");
    });
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden z-0 pointer-events-none" aria-hidden="true">
      <Svg paths={PATHS.slice(0, SPLIT)} refs={a} />
      <Svg paths={PATHS.slice(SPLIT)} refs={b} />
    </div>
  );
}

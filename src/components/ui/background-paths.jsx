import { motion, useReducedMotion } from "framer-motion";

// Built once at module load, so renders stay pure and every path keeps the
// same speed between renders. Durations spread from 20s to 30s.
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

const MotionPath = motion.path;

const PATHS = { 1: buildPaths(1), [-1]: buildPaths(-1) };

function FloatingPaths({ position, still }) {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 696 316" fill="none">
        {PATHS[position].map((path) =>
          still ? (
            <path
              key={path.id}
              d={path.d}
              stroke="#00C8FF"
              strokeWidth={path.width}
              strokeOpacity={(0.06 + path.id * 0.012) * 0.45}
            />
          ) : (
            <MotionPath
              key={path.id}
              d={path.d}
              stroke="#00C8FF"
              strokeWidth={path.width}
              strokeOpacity={0.06 + path.id * 0.012}
              initial={{ pathLength: 0.3, opacity: 0.6 }}
              animate={{
                pathLength: 1,
                opacity: [0.3, 0.6, 0.3],
                pathOffset: [0, 1, 0],
              }}
              transition={{
                duration: path.duration,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          )
        )}
      </svg>
    </div>
  );
}

export function BackgroundPaths() {
  // Visitors who've asked their device to reduce motion get a still version.
  const still = useReducedMotion();
  return (
    <div className="fixed inset-0 overflow-hidden z-0 pointer-events-none" aria-hidden="true">
      <FloatingPaths position={1} still={still} />
      <FloatingPaths position={-1} still={still} />
    </div>
  );
}

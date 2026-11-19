import { useEffect, useRef, useState } from 'react'

// Returns [ref, inView]. inView flips to true the first time the element
// scrolls into view and stays true (sections reveal once, never re-hide).
export function useReveal({ threshold = 0.15, rootMargin = '0px 0px -10% 0px' } = {}) {
  const ref = useRef(null)
  // Browsers without IntersectionObserver just show everything.
  const [inView, setInView] = useState(() => typeof IntersectionObserver === 'undefined')

  useEffect(() => {
    const el = ref.current
    if (!el || inView) return
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        io.disconnect()
      }
    }, { threshold, rootMargin })
    io.observe(el)
    return () => io.disconnect()
  }, [threshold, rootMargin, inView])

  return [ref, inView]
}

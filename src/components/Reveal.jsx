import { Children } from 'react'
import { useReveal } from '../hooks/useReveal'

// Fades and lifts its content in the first time it scrolls into view.
//
// <Reveal>…</Reveal>                       one block
// <Reveal stagger className="grid …">      each child rises in turn. Children are
//   {cards}                                wrapped in their own div so the reveal
// </Reveal>                                never fights the child's hover transitions.
export default function Reveal({ stagger = false, step = 80, className = '', itemClassName = '', children }) {
  const [ref, inView] = useReveal()
  const state = inView ? ' is-in' : ''

  if (!stagger) {
    return (
      <div ref={ref} className={`reveal${state} ${className}`}>
        {children}
      </div>
    )
  }

  return (
    <div ref={ref} className={className}>
      {Children.toArray(children).map((child, i) => (
        <div
          key={child.key ?? i}
          className={`reveal${state} ${itemClassName}`}
          style={{ transitionDelay: `${i * step}ms` }}
        >
          {child}
        </div>
      ))}
    </div>
  )
}

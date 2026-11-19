export default function Chip({ label, active, onClick }) {
  return (
    <button
      type="button"
      aria-pressed={!!active}
      onClick={onClick}
      className={[
        'rounded-full border px-3.5 py-1.5 text-[13px] font-medium cursor-pointer',
        'transition-[color,background-color,border-color,transform] duration-fast active:scale-95',
        active
          ? 'bg-accent-tint border-accent text-accent'
          : 'bg-tagbg border-border text-muted hover:border-accent',
      ].join(' ')}
    >
      {label}
    </button>
  )
}

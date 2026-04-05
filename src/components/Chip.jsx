export default function Chip({ label, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="transition-all duration-150 font-medium"
      style={{
        background: active ? '#FEF3C7' : '#F5F4F0',
        border: `1px solid ${active ? '#C96A2A' : '#E7E5E0'}`,
        color: active ? '#92400E' : '#6B7280',
        borderRadius: 999,
        padding: '6px 14px',
        fontSize: 13,
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        if (!active) e.currentTarget.style.borderColor = '#C96A2A'
      }}
      onMouseLeave={(e) => {
        if (!active) e.currentTarget.style.borderColor = '#E7E5E0'
      }}
    >
      {label}
    </button>
  )
}

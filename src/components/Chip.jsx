export default function Chip({ label, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="transition-all duration-150 font-medium"
      style={{
        background: active ? '#003D52' : '#1A2D40',
        border: `1px solid ${active ? '#00C8FF' : '#223344'}`,
        color: active ? '#00C8FF' : '#7895A8',
        borderRadius: 999,
        padding: '6px 14px',
        fontSize: 13,
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        if (!active) e.currentTarget.style.borderColor = '#00C8FF'
      }}
      onMouseLeave={(e) => {
        if (!active) e.currentTarget.style.borderColor = '#223344'
      }}
    >
      {label}
    </button>
  )
}

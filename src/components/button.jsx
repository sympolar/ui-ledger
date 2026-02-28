export default function Button({ children }) {
  return (
    <button
      className="
        px-6 py-3
        rounded-xl2
        bg-zengine-gradient-primary
        text-zengine-navy-900
        font-primary
        shadow-zengine-glow-soft
        hover:shadow-zengine-glow-strong
        transition-all duration-300
      "
    >
      {children}
    </button>
  )
}

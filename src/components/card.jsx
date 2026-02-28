export default function Card({ children }) {
  return (
    <div
      className="
        bg-zengine-bg-mid
        border border-zengine-navy-800
        rounded-xl2
        p-6
        shadow-lg
      "
    >
      {children}
    </div>
  )
}

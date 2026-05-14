function ResultCard({ title, value }) {
  return (
    <div className="glass-card p-6 hover:-translate-y-1 transition">
      <h3 className="text-slate-400 mb-2">{title}</h3>

      <p className="text-3xl font-bold">
        {value}
      </p>
    </div>
  )
}

export default ResultCard
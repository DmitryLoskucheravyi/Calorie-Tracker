function Loader() {
  return (
    <div className="grid sm:grid-cols-2 gap-4 animate-pulse">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="
            glass-card
            p-6
            space-y-4
          "
        >
          <div className="h-4 w-24 rounded bg-slate-300 dark:bg-slate-700" />

          <div className="h-10 w-32 rounded bg-slate-300 dark:bg-slate-700" />

          <div className="h-3 w-full rounded bg-slate-200 dark:bg-slate-800" />
        </div>
      ))}
    </div>
  )
}

export default Loader
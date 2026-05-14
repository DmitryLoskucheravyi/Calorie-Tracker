function WaterProgress({
  consumed,
  target
}) {
  const progress = Math.min(
    (consumed / target) * 100,
    100
  )

  const remaining = Math.max(
    target - consumed,
    0
  )

  return (
    <div className="glass-card p-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">
          Daily Progress
        </h2>

        <span className="text-primary font-bold">
          {Math.round(progress)}%
        </span>
      </div>

      <div className="w-full h-5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden mb-6">
        <div
          style={{
            width: `${progress}%`
          }}
          className="
            h-full
            rounded-full
            bg-gradient-to-r
            from-primary
            to-secondary
            transition-all
            duration-500
          "
        />
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <div className="glass-card p-4 rounded-2xl">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Consumed
          </p>

          <h3 className="text-2xl font-bold">
            {consumed} ml
          </h3>
        </div>

        <div className="glass-card p-4 rounded-2xl">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Remaining
          </p>

          <h3 className="text-2xl font-bold">
            {remaining} ml
          </h3>
        </div>

        <div className="glass-card p-4 rounded-2xl">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Goal
          </p>

          <h3 className="text-2xl font-bold">
            {target} ml
          </h3>
        </div>
      </div>

      {progress >= 100 && (
        <div
          className="
            mt-6
            p-4
            rounded-2xl
            bg-emerald-500/10
            border
            border-emerald-500/20
            text-emerald-500
            font-semibold
          "
        >
          Daily hydration goal completed 🎉
        </div>
      )}
    </div>
  )
}

export default WaterProgress
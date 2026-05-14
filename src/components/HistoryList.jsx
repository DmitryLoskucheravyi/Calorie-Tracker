function HistoryList({ history }) {
  if (!history.length) {
    return (
      <div
        className="
          text-center
          py-12
        "
      >
        <div className="text-5xl mb-4">
          📊
        </div>

        <h3 className="text-2xl font-bold mb-2">
          No History Yet
        </h3>

        <p className="text-slate-500 dark:text-slate-400">
          Start calculating your calories to see
          history here.
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {history.map((item) => (
        <div
          key={item.id}
          className="
            p-5
            rounded-3xl
            border
            border-slate-200
            dark:border-white/10
            bg-white/40
            dark:bg-slate-900/40
            hover:-translate-y-1
            hover:shadow-xl
            transition-all
            duration-300
          "
        >
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {item.date}
            </p>

            <span
              className="
                px-3
                py-1
                rounded-full
                bg-primary/10
                text-primary
                text-sm
                font-medium
              "
            >
              {item.data.goal}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                Calories
              </p>

              <h3 className="text-2xl font-bold">
                {
                  item.result
                    .recommendedCalories
                }
              </h3>
            </div>

            <div>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                BMI
              </p>

              <h3 className="text-2xl font-bold">
                {item.result.bmi}
              </h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default HistoryList
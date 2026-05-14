const stories = [
  'Started tracking water intake and improved daily energy levels significantly.',
  'Maintaining calorie balance helped achieve healthier eating habits and better fitness.',
  'Regular hydration tracking reduced headaches and improved focus during work.',
  'Tracking nutrition and water intake helped improve sleep quality and recovery.',
  'Daily health monitoring increased motivation for physical activity and healthier routines.',
  'Monitoring calories and hydration helped build a more balanced lifestyle.'
]

function StatisticCard({ user, index }) {
  const story =
    stories[index % stories.length]

  return (
    <div
      className="
        relative
        overflow-hidden
        glass-card
        p-8
        hover:-translate-y-2
        hover:shadow-2xl
        transition-all
        duration-500
      "
    >
      <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />

      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-8">
          <img
            src={user.image}
            alt={user.firstName}
            className="
              w-20
              h-20
              rounded-3xl
              object-cover
              border
              border-white/10
              shadow-lg
            "
          />

          <div>
            <h2 className="text-2xl font-bold">
              {user.firstName}{' '}
              {user.lastName}
            </h2>

            <p className="text-slate-600 dark:text-slate-400">
              Wellness Community Member
            </p>
          </div>
        </div>

        <div
          className="
            glass-card
            p-6
            rounded-3xl
            mb-8
            border
            border-primary/10
          "
        >
          <p className="text-lg leading-8 text-slate-700 dark:text-slate-300">
            “{story}”
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="glass-card p-4 rounded-2xl text-center">
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
              Age
            </p>

            <h3 className="text-2xl font-black">
              {user.age}
            </h3>
          </div>

          <div className="glass-card p-4 rounded-2xl text-center">
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
              Water Goal
            </p>

            <h3 className="text-2xl font-black">
              {2200 + index * 100}
            </h3>

            <p className="text-xs text-slate-500 dark:text-slate-400">
              ml
            </p>
          </div>

          <div className="glass-card p-4 rounded-2xl text-center">
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
              Activity
            </p>

            <h3 className="text-lg font-bold">
              Active
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatisticCard
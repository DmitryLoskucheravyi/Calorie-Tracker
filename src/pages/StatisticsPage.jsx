import { useEffect, useState } from 'react'
import Loader from '../components/Loader'
import StatisticCard from '../components/StatisticCard'
import { statisticsService } from '../services/statisticsService'

function StatisticsPage() {
  const [users, setUsers] = useState([])

  const [loading, setLoading] = useState(true)

  const [error, setError] = useState('')

  useEffect(() => {
    loadStories()
  }, [])

  const loadStories = async () => {
    try {
      setLoading(true)

      const data =
        await statisticsService.getStatistics()

      setUsers(data)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="relative overflow-hidden min-h-screen">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 text-primary font-medium mb-8">
            Wellness Community Stories
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
            Healthy Habits
            <br />

            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Change Lives
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-9">
            Discover real wellness stories and see
            how hydration, calorie tracking and
            healthy routines improve energy,
            productivity and overall wellbeing.
          </p>
        </div>

        {loading && <Loader />}

        {error && (
          <div className="glass-card p-10 text-center text-red-400">
            {error}
          </div>
        )}

        {!loading && !error && (
          <div className="space-y-12">
            {users.map((user, index) => (
              <StatisticCard
                key={user.id}
                user={user}
                index={index}
              />
            ))}
          </div>
        )}

        {!loading && !error && (
          <div className="glass-card p-12 mt-20 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Small Habits Create Big Results
            </h2>

            <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-8 text-lg">
              Drinking enough water, tracking
              nutrition and maintaining healthy
              daily routines can significantly
              improve both physical and mental
              wellbeing over time.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

export default StatisticsPage
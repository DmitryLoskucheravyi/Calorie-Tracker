import { Link } from 'react-router-dom'

function HomePage() {
  const features = [
    {
      title: 'Calorie Tracking',
      text: 'Personalized daily calorie recommendations based on your body metrics.'
    },
    {
      title: 'Hydration Goals',
      text: 'Track daily water intake and build healthy hydration habits.'
    },
    {
      title: 'BMI & Health',
      text: 'Monitor BMI and wellness indicators with modern analytics.'
    },
    {
      title: 'Macro Planning',
      text: 'Balanced proteins, fats and carbohydrates recommendations.'
    }
  ]

  const stats = [
    {
      value: '15K+',
      label: 'Calculations'
    },
    {
      value: '98%',
      label: 'User Satisfaction'
    },
    {
      value: '24/7',
      label: 'Available'
    }
  ]

  return (
    <section className="relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl" />

      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="min-h-[90vh] grid lg:grid-cols-2 gap-16 items-center py-20">
          <div>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium mb-8">
              Modern Wellness Platform
            </div>

            <h1 className="text-6xl md:text-7xl font-black leading-[1.05] mb-8">
              Build
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {' '}
                Better
              </span>
              <br />
              Health Habits
            </h1>

            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-9 max-w-2xl mb-10">
              Smart calorie tracking, hydration
              monitoring and wellness analytics
              designed with a modern user
              experience and clean frontend
              architecture.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-14">
              <Link
                to="/calculator"
                className="
                  inline-flex
                  items-center
                  justify-center
                  px-8
                  h-14
                  rounded-2xl
                  bg-gradient-to-r
                  from-primary
                  to-secondary
                  text-white
                  font-bold
                  shadow-2xl
                  shadow-primary/20
                  hover:scale-105
                  hover:shadow-primary/40
                  transition-all
                  duration-300
                "
              >
                Start Calculating
              </Link>

              <Link
                to="/hydration"
                className="
                  inline-flex
                  items-center
                  justify-center
                  px-8
                  h-14
                  rounded-2xl
                  border
                  border-slate-300
                  dark:border-slate-700
                  hover:bg-white/40
                  dark:hover:bg-slate-800/40
                  transition-all
                  duration-300
                "
              >
                Open Hydration Tracker
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card p-5 rounded-3xl"
                >
                  <h2 className="text-3xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </h2>

                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl rounded-full" />

            <div className="relative glass-card p-8 rounded-[40px] overflow-hidden">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <p className="text-slate-500 dark:text-slate-400 mb-2">
                    Daily Calories
                  </p>

                  <h2 className="text-5xl font-black">
                    2240
                  </h2>
                </div>

                <div
                  className="
                    w-16
                    h-16
                    rounded-3xl
                    bg-gradient-to-r
                    from-primary
                    to-secondary
                  "
                />
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <p className="text-slate-500 dark:text-slate-400">
                      Water Progress
                    </p>

                    <p className="font-semibold">
                      78%
                    </p>
                  </div>

                  <div className="h-4 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                    <div className="h-full w-[78%] bg-gradient-to-r from-primary to-secondary rounded-full" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="glass-card p-5 rounded-3xl">
                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-2">
                      BMI
                    </p>

                    <h3 className="text-3xl font-black">
                      22.4
                    </h3>
                  </div>

                  <div className="glass-card p-5 rounded-3xl">
                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-2">
                      Hydration
                    </p>

                    <h3 className="text-3xl font-black">
                      2400ml
                    </h3>
                  </div>
                </div>

                <div className="glass-card p-6 rounded-3xl">
                  <div className="flex justify-between mb-4">
                    <p className="font-semibold">
                      Macronutrients
                    </p>

                    <p className="text-primary font-semibold">
                      Balanced
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Protein</span>
                        <span>30%</span>
                      </div>

                      <div className="h-3 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                        <div className="h-full w-[30%] bg-primary rounded-full" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Fats</span>
                        <span>25%</span>
                      </div>

                      <div className="h-3 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                        <div className="h-full w-[25%] bg-secondary rounded-full" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Carbs</span>
                        <span>45%</span>
                      </div>

                      <div className="h-3 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                        <div className="h-full w-[45%] bg-emerald-500 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-24">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-6">
              Everything You Need
            </h2>

            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-9">
              Powerful wellness tools with clean
              UI, responsive layouts and modern
              user experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="
                  glass-card
                  p-8
                  rounded-[32px]
                  hover:-translate-y-2
                  hover:shadow-2xl
                  transition-all
                  duration-500
                "
              >
                <div
                  className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-gradient-to-r
                    from-primary
                    to-secondary
                    mb-6
                  "
                />

                <h3 className="text-2xl font-bold mb-4">
                  {feature.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 leading-8">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="pb-24">
          <div className="glass-card rounded-[40px] p-12 md:p-20 text-center overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10" />

            <div className="relative z-10">
              <h2 className="text-5xl md:text-6xl font-black mb-8">
                Start Your
                <br />

                Wellness Journey
              </h2>

              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-9 mb-12">
                Track calories, hydration and
                healthy habits with a modern
                wellness dashboard experience.
              </p>

              <Link
                to="/calculator"
                className="
                  inline-flex
                  items-center
                  justify-center
                  px-10
                  h-16
                  rounded-3xl
                  bg-gradient-to-r
                  from-primary
                  to-secondary
                  text-white
                  text-lg
                  font-bold
                  shadow-2xl
                  shadow-primary/20
                  hover:scale-105
                  hover:shadow-primary/40
                  transition-all
                  duration-300
                "
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePage
import { Link } from 'react-router-dom'

function HomePage() {
  const features = [
    {
      title: 'Calorie Tracking',
      text: 'Calculate daily calorie needs based on your body metrics and activity level.'
    },
    {
      title: 'BMI Analysis',
      text: 'Instant BMI calculation with automatic health category detection.'
    },
    {
      title: 'Macronutrients',
      text: 'Get personalized proteins, fats and carbohydrates recommendations.'
    },
    {
      title: 'Water Intake',
      text: 'Daily hydration recommendations based on your body weight.'
    }
  ]

  const stats = [
    {
      value: '24/7',
      label: 'Always Available'
    },
    {
      value: '100%',
      label: 'Frontend Only'
    },
    {
      value: 'Fast',
      label: 'Instant Calculations'
    }
  ]

  return (
    <section className="relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-medium mb-6">
            Modern Health Calculator
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
            Smart
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {' '}
              Calorie
            </span>
            <br />
            Tracker App
          </h1>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-9 mb-10">
            Calculate calories, BMI, water intake
            and macronutrients with a modern
            responsive interface and clean frontend
            architecture.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/calculator"
              className="
                inline-flex
                items-center
                justify-center
                px-8
                py-4
                rounded-2xl
                bg-gradient-to-r
                from-primary
                to-secondary
                text-white
                font-bold
                shadow-xl
                shadow-primary/20
                hover:scale-105
                hover:shadow-primary/40
                transition-all
                duration-300
              "
            >
              Open Calculator
            </Link>

            <Link
              to="/about"
              className="
                inline-flex
                items-center
                justify-center
                px-8
                py-4
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
              Learn More
            </Link>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mb-20">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="
                glass-card
                p-8
                text-center
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              <h2 className="text-4xl font-black mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {stat.value}
              </h2>

              <p className="text-slate-600 dark:text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Main Features
            </h2>

            <p className="text-slate-600 dark:text-slate-400">
              Everything you need for daily health
              calculations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="
                  glass-card
                  p-8
                  hover:-translate-y-1
                  hover:shadow-2xl
                  transition-all
                  duration-300
                "
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-primary to-secondary mb-6" />

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

        <div className="glass-card p-10 md:p-14 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Start Tracking Your Health Today
          </h2>

          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-8 mb-10">
            Use the calculator to discover your
            recommended calorie intake, BMI,
            hydration goals and nutrition balance.
          </p>

          <Link
            to="/calculator"
            className="
              inline-flex
              items-center
              justify-center
              px-10
              py-5
              rounded-2xl
              bg-gradient-to-r
              from-primary
              to-secondary
              text-white
              font-bold
              text-lg
              shadow-xl
              shadow-primary/20
              hover:scale-105
              hover:shadow-primary/40
              transition-all
              duration-300
            "
          >
            Calculate Now
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HomePage
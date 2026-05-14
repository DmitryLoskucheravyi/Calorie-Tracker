function AboutPage() {
  const sections = [
    {
      title: 'What Are Calories?',
      text: 'Calories are units of energy that your body uses to perform daily activities such as breathing, walking, training and digestion. Tracking calories helps maintain a healthy balance between food intake and energy expenditure.',
      link: 'https://www.healthline.com/nutrition/what-are-calories',
      linkText: 'Read about calories'
    },
    {
      title: 'Why BMI Matters',
      text: 'Body Mass Index (BMI) helps estimate whether your body weight is healthy for your height. While BMI is not perfect, it is one of the most common indicators used in health and fitness.',
      link: 'https://www.cdc.gov/bmi/adult-calculator/index.html',
      linkText: 'Learn more about BMI'
    },
    {
      title: 'Healthy Water Intake',
      text: 'Water is essential for metabolism, energy levels, digestion and overall health. Daily water intake depends on body weight, activity level and climate conditions.',
      link: 'https://www.medicalnewstoday.com/articles/how-much-water-should-you-drink-a-day',
      linkText: 'Water intake guide'
    },
    {
      title: 'Understanding Macronutrients',
      text: 'Proteins help muscle recovery, fats support hormones and brain health, while carbohydrates provide energy. A balanced ratio of macronutrients is important for fitness goals and general wellbeing.',
      link: 'https://www.healthline.com/nutrition/what-are-macronutrients',
      linkText: 'Macronutrients explained'
    }
  ]

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Health & Nutrition Guide
        </h1>

        <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-8">
          Learn the basics of calories, BMI,
          hydration and macronutrients to better
          understand your body and improve your
          lifestyle.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {sections.map((section) => (
          <div
            key={section.title}
            className="glass-card p-8 hover:-translate-y-1 transition duration-300"
          >
            <h2 className="text-2xl font-bold mb-4">
              {section.title}
            </h2>

            <p className="text-slate-600 dark:text-slate-400 leading-8 mb-6">
              {section.text}
            </p>

            <a
              href={section.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              {section.linkText}
              →
            </a>
          </div>
        ))}
      </div>

      <div className="glass-card p-10 mt-12 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Healthy Lifestyle Tips
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <div>
            <h3 className="font-semibold mb-2">
              Balanced Diet
            </h3>

            <p className="text-sm text-slate-600 dark:text-slate-400">
              Eat whole foods with proper nutrient
              balance.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">
              Regular Exercise
            </h3>

            <p className="text-sm text-slate-600 dark:text-slate-400">
              Stay active to improve physical and
              mental health.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">
              Hydration
            </h3>

            <p className="text-sm text-slate-600 dark:text-slate-400">
              Drink enough water throughout the
              day.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">
              Good Sleep
            </h3>

            <p className="text-sm text-slate-600 dark:text-slate-400">
              Recovery and sleep are essential for
              wellbeing.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPage
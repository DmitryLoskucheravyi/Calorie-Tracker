import { useState } from 'react'
import { activityLevels } from '../data/activityLevels'
import { GOALS } from '../utils/constants'
import { validateForm } from '../utils/validators'

function CalculatorForm({ onCalculate, initialData }) {
    const [form, setForm] = useState(initialData)

    const [error, setError] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target

        setForm({
            ...form,
            [name]:
                name === 'gender' || name === 'goal'
                    ? value
                    : Number(value)
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const validationError = validateForm(form)

        if (validationError) {
            setError(validationError)
            return
        }

        setError('')

        onCalculate(form)
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="
        relative
        overflow-hidden
        glass-card
        p-8
        md:p-10
        space-y-8
        hover:shadow-2xl
        transition-all
        duration-500
      "
        >
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary rounded-full blur-3xl" />

                <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-secondary rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-2">
                    Calorie Calculator
                </h2>

                <p className="text-slate-600 dark:text-slate-400">
                    Calculate your daily calories, BMI,
                    water intake and macronutrients.
                </p>
            </div>

            <div className="relative z-10 space-y-6">
                <div className="flex flex-wrap gap-3">
                    {['male', 'female'].map((gender) => (
                        <button
                            key={gender}
                            type="button"
                            onClick={() =>
                                setForm({
                                    ...form,
                                    gender
                                })
                            }
                            className={`
          px-5
          h-11
          rounded-2xl
          text-sm
          font-semibold
          capitalize
          transition-all
          duration-300

          ${form.gender === gender
                                    ? 'bg-primary text-white shadow-lg shadow-primary/20'
                                    : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700'
                                }
        `}
                        >
                            {gender}
                        </button>
                    ))}
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm text-slate-500 dark:text-slate-400">
                            Age
                        </label>

                        <input
                            type="number"
                            name="age"
                            placeholder="Years"
                            value={form.age}
                            onChange={handleChange}
                            className="input h-12"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm text-slate-500 dark:text-slate-400">
                            Height
                        </label>

                        <input
                            type="number"
                            name="height"
                            placeholder="cm"
                            value={form.height}
                            onChange={handleChange}
                            className="input h-12"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm text-slate-500 dark:text-slate-400">
                            Weight
                        </label>

                        <input
                            type="number"
                            name="weight"
                            placeholder="kg"
                            value={form.weight}
                            onChange={handleChange}
                            className="input h-12"
                        />
                    </div>
                </div>

                <div className="space-y-3">
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        Activity Level
                    </p>

                    <div className="flex flex-wrap gap-3">
                        {activityLevels.map((level) => (
                            <button
                                key={level.label}
                                type="button"
                                onClick={() =>
                                    setForm({
                                        ...form,
                                        activity: level.value
                                    })
                                }
                                className={`
            px-4
            h-11
            rounded-2xl
            text-sm
            font-medium
            transition-all
            duration-300

            ${form.activity === level.value
                                        ? 'bg-primary text-white shadow-lg shadow-primary/20'
                                        : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700'
                                    }
          `}
                            >
                                {level.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="space-y-3">
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        Goal
                    </p>

                    <div className="flex flex-wrap gap-3">
                        {Object.values(GOALS).map((goal) => (
                            <button
                                key={goal}
                                type="button"
                                onClick={() =>
                                    setForm({
                                        ...form,
                                        goal
                                    })
                                }
                                className={`
            px-5
            h-11
            rounded-2xl
            text-sm
            font-semibold
            transition-all
            duration-300

            ${form.goal === goal
                                        ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/20'
                                        : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700'
                                    }
          `}
                            >
                                {goal}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {error && (
                <div
                    className="
            relative
            z-10
            p-4
            rounded-2xl
            border
            border-red-500/30
            bg-red-500/10
            text-red-400
            animate-pulse
          "
                >
                    {error}
                </div>
            )}

            <button
                className="
          relative
          z-10
          w-full
          py-4
          rounded-2xl
          bg-gradient-to-r
          from-primary
          to-secondary
          font-bold
          text-white
          shadow-lg
          shadow-primary/20
          hover:shadow-primary/40
          hover:scale-[1.02]
          active:scale-[0.99]
          transition-all
          duration-300
        "
            >
                Calculate Now
            </button>
        </form>
    )
}

export default CalculatorForm
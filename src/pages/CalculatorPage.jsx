import { useState } from 'react'
import CalculatorForm from '../components/CalculatorForm'
import ResultCard from '../components/ResultCard'
import Loader from '../components/Loader'
import HistoryList from '../components/HistoryList'
import { calculatorFactory } from '../services/calculatorService'
import { STORAGE_KEYS, GOALS } from '../utils/constants'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { createHistoryItem } from '../utils/helpers'

function CalculatorPage() {
    const [result, setResult] = useState(null)

    const [loading, setLoading] = useState(false)

    const [history, setHistory] = useLocalStorage(
        STORAGE_KEYS.HISTORY,
        []
    )

    const [savedForm, setSavedForm] =
        useLocalStorage(STORAGE_KEYS.FORM, {
            gender: 'male',
            age: 20,
            height: 180,
            weight: 75,
            activity: 1.2,
            goal: GOALS.MAINTAIN
        })

    const calculator = calculatorFactory()

    const handleCalculate = (form) => {
        setLoading(true)

        setSavedForm(form)

        setTimeout(() => {
            const calculatedResult =
                calculator.calculate(form)

            setResult(calculatedResult)
            localStorage.setItem(
                'last-water',
                calculatedResult.water
            )

            const historyItem = createHistoryItem(
                form,
                calculatedResult
            )

            setHistory([
                historyItem,
                ...history.slice(0, 4)
            ])

            setLoading(false)
        }, 800)
    }

    const handleClearHistory = () => {
        setHistory([])
    }

    return (
        <section className="max-w-6xl mx-auto px-6 py-12">
            <div className="grid lg:grid-cols-2 gap-10">
                <CalculatorForm
                    onCalculate={handleCalculate}
                    initialData={savedForm}
                />

                <div className="space-y-6">
                    {loading && <Loader />}

                    {result && !loading && (
                        <div className="grid sm:grid-cols-2 gap-4">
                            <ResultCard
                                title="BMR"
                                value={result.bmr}
                            />

                            <ResultCard
                                title="Daily Calories"
                                value={result.dailyCalories}
                            />

                            <ResultCard
                                title="Recommended Calories"
                                value={
                                    result.recommendedCalories
                                }
                            />

                            <ResultCard
                                title="BMI"
                                value={`${result.bmi} (${result.bmiCategory})`}
                            />

                            <ResultCard
                                title="Water Intake"
                                value={`${result.water} ml`}
                            />

                            <ResultCard
                                title="Macros"
                                value={`${result.macros.protein}P / ${result.macros.fats}F / ${result.macros.carbs}C`}
                            />
                        </div>
                    )}

                    <div className="glass-card p-6">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h2 className="text-2xl font-bold">
                                    Calculation History
                                </h2>

                                <p className="text-slate-500 dark:text-slate-400 mt-1">
                                    Your recent calorie calculations
                                </p>
                            </div>

                            {history.length > 0 && (
                                <button
                                    onClick={handleClearHistory}
                                    className="
          px-5
          py-3
          rounded-2xl
          bg-red-500/10
          border
          border-red-500/20
          text-red-400
          hover:bg-red-500/20
          transition-all
          duration-300
        "
                                >
                                    Clear
                                </button>
                            )}
                        </div>

                        <HistoryList history={history} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CalculatorPage
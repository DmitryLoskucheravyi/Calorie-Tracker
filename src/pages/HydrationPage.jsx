import { useMemo } from 'react'
import WaterProgress from '../components/WaterProgress'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { profileService } from '../services/profileService'

function HydrationPage() {
  const [glasses, setGlasses] =
    useLocalStorage('water-glasses', 0)

  const [glassSize, setGlassSize] =
    useLocalStorage('glass-size', 250)

  const targetWater =
    Number(localStorage.getItem('last-water')) ||
    2500

  const consumedWater = useMemo(() => {
    return glasses * glassSize
  }, [glasses, glassSize])

  const addGlass = () => {
    setGlasses(glasses + 1)
     profileService.updateHydrationStreak()
  }

  const removeGlass = () => {
    if (glasses === 0) return

    setGlasses(glasses - 1)
  }

  const resetProgress = () => {
    setGlasses(0)
  }

  return (
    <section className="relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-6">
            Hydration Tracker
          </div>

          <h1 className="text-5xl font-black mb-6">
            Daily Water Progress
          </h1>

          <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-8">
            Track your hydration progress and
            achieve your recommended daily water
            intake.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-10">
          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold mb-8">
              Water Tracker
            </h2>

            <div className="mb-8">
              <label className="block mb-3 text-slate-600 dark:text-slate-400">
                Glass Size (ml)
              </label>

              <input
                type="number"
                min="50"
                value={glassSize}
                onChange={(e) =>
                  setGlassSize(
                    Number(e.target.value)
                  )
                }
                className="input"
              />
            </div>

            <div className="glass-card p-6 rounded-3xl mb-8 text-center">
              <p className="text-slate-500 dark:text-slate-400 mb-3">
                Glasses Drank Today
              </p>

              <h2 className="text-6xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {glasses}
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <button
                onClick={addGlass}
                className="
                  py-4
                  rounded-2xl
                  bg-gradient-to-r
                  from-primary
                  to-secondary
                  text-white
                  font-bold
                  hover:scale-[1.02]
                  active:scale-[0.98]
                  transition-all
                  duration-300
                "
              >
                + Add Glass
              </button>

              <button
                onClick={removeGlass}
                className="
                  py-4
                  rounded-2xl
                  border
                  border-slate-300
                  dark:border-slate-700
                  hover:bg-slate-100
                  dark:hover:bg-slate-800
                  transition-all
                  duration-300
                "
              >
                − Remove
              </button>
            </div>

            <button
              onClick={resetProgress}
              className="
                w-full
                py-4
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
              Reset Progress
            </button>
          </div>

          <WaterProgress
            consumed={consumedWater}
            target={targetWater}
          />
        </div>
      </div>
    </section>
  )
}

export default HydrationPage
import { useEffect, useState } from 'react'
import { settingsService } from '../services/settingsService'

function SettingsPage() {
  const [settings, setSettings] = useState(
    settingsService.getSettings()
  )

  useEffect(() => {
    settingsService.applyTheme(
      settings.theme
    )

    settingsService.saveSettings(settings)
  }, [settings])

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <div className="inline-flex px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-6">
          Personalization
        </div>

        <h1 className="text-5xl font-black mb-6">
          Settings
        </h1>

        <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-8">
          Customize application appearance and
          interface preferences.
        </p>
      </div>

      <div className="space-y-8">
        <div className="glass-card p-8">
          <h2 className="text-2xl font-bold mb-8">
            Theme
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <button
              onClick={() =>
                setSettings({
                  ...settings,
                  theme: 'light'
                })
              }
              className={`
                p-8
                rounded-[32px]
                border
                transition-all
                duration-300

                ${
                  settings.theme ===
                  'light'
                    ? 'border-primary scale-[1.02] shadow-xl shadow-primary/20'
                    : 'border-slate-200 dark:border-white/10'
                }
              `}
            >
              <div className="h-32 rounded-3xl bg-gradient-to-br from-slate-100 to-slate-300 mb-6" />

              <h3 className="text-2xl font-bold">
                Light Theme
              </h3>
            </button>

            <button
              onClick={() =>
                setSettings({
                  ...settings,
                  theme: 'dark'
                })
              }
              className={`
                p-8
                rounded-[32px]
                border
                transition-all
                duration-300

                ${
                  settings.theme ===
                  'dark'
                    ? 'border-primary scale-[1.02] shadow-xl shadow-primary/20'
                    : 'border-slate-200 dark:border-white/10'
                }
              `}
            >
              <div className="h-32 rounded-3xl bg-gradient-to-br from-slate-800 to-slate-950 mb-6" />

              <h3 className="text-2xl font-bold">
                Dark Theme
              </h3>
            </button>
          </div>
        </div>

        <div className="glass-card p-8">
          <h2 className="text-2xl font-bold mb-8">
            Interface
          </h2>

          <div className="space-y-5">
            <button
              onClick={() =>
                setSettings({
                  ...settings,
                  compactMode:
                    !settings.compactMode
                })
              }
              className="
                w-full
                flex
                items-center
                justify-between
                p-5
                rounded-3xl
                border
                border-slate-200
                dark:border-white/10
                hover:bg-slate-100
                dark:hover:bg-slate-800
                transition-all
              "
            >
              <div className="text-left">
                <h3 className="text-lg font-bold mb-1">
                  Compact Mode
                </h3>

                <p className="text-slate-500 dark:text-slate-400">
                  Reduce spacing and component
                  sizes.
                </p>
              </div>

              <div
                className={`
                  w-14
                  h-8
                  rounded-full
                  transition-all
                  duration-300
                  flex
                  items-center
                  px-1

                  ${
                    settings.compactMode
                      ? 'bg-primary justify-end'
                      : 'bg-slate-300 dark:bg-slate-700 justify-start'
                  }
                `}
              >
                <div className="w-6 h-6 rounded-full bg-white" />
              </div>
            </button>

            <button
              onClick={() =>
                setSettings({
                  ...settings,
                  reducedMotion:
                    !settings.reducedMotion
                })
              }
              className="
                w-full
                flex
                items-center
                justify-between
                p-5
                rounded-3xl
                border
                border-slate-200
                dark:border-white/10
                hover:bg-slate-100
                dark:hover:bg-slate-800
                transition-all
              "
            >
              <div className="text-left">
                <h3 className="text-lg font-bold mb-1">
                  Reduced Motion
                </h3>

                <p className="text-slate-500 dark:text-slate-400">
                  Reduce animations and effects.
                </p>
              </div>

              <div
                className={`
                  w-14
                  h-8
                  rounded-full
                  transition-all
                  duration-300
                  flex
                  items-center
                  px-1

                  ${
                    settings.reducedMotion
                      ? 'bg-primary justify-end'
                      : 'bg-slate-300 dark:bg-slate-700 justify-start'
                  }
                `}
              >
                <div className="w-6 h-6 rounded-full bg-white" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SettingsPage
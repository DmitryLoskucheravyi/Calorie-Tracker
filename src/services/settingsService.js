const SETTINGS_KEY = 'app-settings'

const defaultSettings = {
  theme: 'dark',
  compactMode: false,
  reducedMotion: false
}

export const settingsService = {
  getSettings() {
    const saved = localStorage.getItem(
      SETTINGS_KEY
    )

    return saved
      ? JSON.parse(saved)
      : defaultSettings
  },

  saveSettings(settings) {
    localStorage.setItem(
      SETTINGS_KEY,
      JSON.stringify(settings)
    )
  },

  applyTheme(theme) {
    document.documentElement.classList.remove(
      'dark'
    )

    if (theme === 'dark') {
      document.documentElement.classList.add(
        'dark'
      )
    }
  }
}
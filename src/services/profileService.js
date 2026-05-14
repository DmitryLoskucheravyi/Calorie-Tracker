const PROFILE_KEY = 'user-profile'
const STREAK_KEY = 'hydration-streak'
const LAST_DATE_KEY = 'last-hydration-date'

export const profileService = {
  getProfile() {
    const data = localStorage.getItem(
      PROFILE_KEY
    )

    return data
      ? JSON.parse(data)
      : {
          name: '',
          age: '',
          weight: '',
          goal: ''
        }
  },

  saveProfile(profile) {
    localStorage.setItem(
      PROFILE_KEY,
      JSON.stringify(profile)
    )
  },

  updateHydrationStreak() {
    const today = new Date()
      .toISOString()
      .split('T')[0]

    const lastDate = localStorage.getItem(
      LAST_DATE_KEY
    )

    let streak = Number(
      localStorage.getItem(STREAK_KEY) || 0
    )

    if (!lastDate) {
      streak = 1
    } else {
      const last = new Date(lastDate)
      const current = new Date(today)

      const diffTime =
        current - last

      const diffDays = Math.floor(
        diffTime / (1000 * 60 * 60 * 24)
      )

      if (diffDays === 1) {
        streak += 1
      }

      if (diffDays > 1) {
        streak = 1
      }

      if (diffDays === 0) {
        return
      }
    }

    localStorage.setItem(
      STREAK_KEY,
      streak
    )

    localStorage.setItem(
      LAST_DATE_KEY,
      today
    )
  },

  getStreak() {
    return Number(
      localStorage.getItem(STREAK_KEY) || 0
    )
  }
}
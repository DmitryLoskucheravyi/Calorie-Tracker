export const statisticsService = {
  async getStatistics() {
    const response = await fetch(
      'https://dummyjson.com/users?limit=12'
    )

    if (!response.ok) {
      throw new Error(
        'Failed to fetch statistics'
      )
    }

    const data = await response.json()

    return data.users
  }
}
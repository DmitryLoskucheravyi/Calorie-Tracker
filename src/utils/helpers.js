export const round = (value) => Math.round(value)

export const createHistoryItem = (data, result) => ({
  id: Date.now(),
  date: new Date().toLocaleString(),
  data,
  result
})
const storageService = (() => {
  const save = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
  }

  const get = (key, defaultValue) => {
    const data = localStorage.getItem(key)

    return data ? JSON.parse(data) : defaultValue
  }

  return {
    save,
    get
  }
})()

export default storageService
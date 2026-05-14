import { useEffect } from 'react'
import { STORAGE_KEYS } from '../utils/constants'
import { useLocalStorage } from './useLocalStorage'

export const useTheme = () => {
  const [theme, setTheme] = useLocalStorage(
    STORAGE_KEYS.THEME,
    'dark'
  )

  useEffect(() => {
    document.documentElement.className = theme
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return {
    theme,
    toggleTheme
  }
}
import { useTheme } from '../hooks/useTheme'

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded-xl bg-primary hover:scale-105 transition"
    >
      {theme === 'dark' ? 'Light' : 'Dark'}
    </button>
  )
}

export default ThemeToggle
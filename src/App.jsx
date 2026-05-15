import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import CalculatorPage from './pages/CalculatorPage'
import AboutPage from './pages/AboutPage'
import StatisticsPage from './pages/StatisticsPage'
import HydrationPage from './pages/HydrationPage'
import ProfilePage from './pages/ProfilePage'
import SettingsPage from './pages/SettingsPage'
function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-white transition-all duration-300">
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/statistics" element={<StatisticsPage />} />
          <Route path="/hydration" element={<HydrationPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
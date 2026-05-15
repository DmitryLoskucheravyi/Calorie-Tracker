import { NavLink } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    {
      label: 'Home',
      path: '/'
    },
    {
      label: 'Calculator',
      path: '/calculator'
    },
    {
      label: 'Hydration',
      path: '/hydration'
    },
    {
      label: 'Stories',
      path: '/statistics'
    },
    {
      label: 'Profile',
      path: '/profile'
    },
    {
      label: 'About',
      path: '/about'
    },
    {
      label: 'Settings',
      path: '/settings'
    }
  ]

  return (
    <>
      <header
        className="
          sticky
          top-0
          z-50
          border-b
          border-slate-200
          dark:border-white/10
          bg-white/70
          dark:bg-slate-900/70
          backdrop-blur-xl
        "
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="h-20 flex items-center justify-between">
            <NavLink
              to="/"
              className="
                text-2xl
                font-black
                bg-gradient-to-r
                from-primary
                to-secondary
                bg-clip-text
                text-transparent
              "
            >
              CalorieTracker
            </NavLink>

            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) => `
    relative
    px-1
    py-2
    transition-all
    duration-300
    after:absolute
    after:left-0
    after:-bottom-1
    after:h-[2px]
    after:bg-primary
    after:transition-all
    after:duration-300

    ${isActive
                      ? 'text-primary after:w-full'
                      : 'text-slate-700 dark:text-slate-200 hover:text-primary after:w-0 hover:after:w-full'
                    }
  `}
                >
                  {link.label}
                </NavLink>
              ))}

            </nav>

            <div className="lg:hidden flex items-center gap-4">

              <button
                onClick={() =>
                  setIsOpen(true)
                }
                className="
                  w-12
                  h-12
                  rounded-2xl
                  glass-card
                  flex
                  items-center
                  justify-center
                "
              >
                <div className="space-y-1.5">
                  <span className="block w-6 h-0.5 bg-slate-800 dark:bg-white rounded-full" />

                  <span className="block w-6 h-0.5 bg-slate-800 dark:bg-white rounded-full" />

                  <span className="block w-6 h-0.5 bg-slate-800 dark:bg-white rounded-full" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`
          fixed
          inset-0
          z-[100]
          lg:hidden
          transition-all
          duration-500
          ${isOpen
            ? 'pointer-events-auto'
            : 'pointer-events-none'
          }
        `}
      >
        <div
          onClick={() =>
            setIsOpen(false)
          }
          className={`
            absolute
            inset-0
            bg-black/50
            backdrop-blur-sm
            transition-opacity
            duration-500
            ${isOpen
              ? 'opacity-100'
              : 'opacity-0'
            }
          `}
        />

        <div
          className={`
            absolute
            top-0
            right-0
            w-[85%]
            max-w-[380px]
            h-full
            bg-white
            dark:bg-slate-950
            border-l
            border-slate-200
            dark:border-white/10
            p-8
            transition-transform
            duration-500
            flex
            flex-col
            ${isOpen
              ? 'translate-x-0'
              : 'translate-x-full'
            }
          `}
        >
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl font-black">
              Menu
            </h2>

            <button
              onClick={() =>
                setIsOpen(false)
              }
              className="
                w-12
                h-12
                rounded-2xl
                glass-card
                text-2xl
              "
            >
              ×
            </button>
          </div>

          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                onClick={() =>
                  setIsOpen(false)
                }
                className={({ isActive }) => `
  group
  p-5
  rounded-3xl
  flex
  items-center
  justify-between
  transition-all
  duration-300

  ${isActive
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-xl'
                    : 'glass-card hover:-translate-y-1 hover:shadow-xl'
                  }
`}
              >
                <span className="text-lg font-semibold">
                  {link.label}
                </span>

                <span
                  className="
  text-xl
  transition-transform
  duration-300
  group-hover:translate-x-1
"
                >
                  ›
                </span>
              </NavLink>
            ))}
          </nav>

          <div className="mt-auto">
            <div className="glass-card p-6 rounded-3xl">
              <p className="text-slate-500 dark:text-slate-400 mb-2">
                Wellness Tracker
              </p>

              <h3 className="text-2xl font-black">
                Stay Healthy Every Day
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
import { useMemo, useState } from 'react'
import { profileService } from '../services/profileService'
import { useLocalStorage } from '../hooks/useLocalStorage'

function ProfilePage() {
    const [profile, setProfile] = useState(
        profileService.getProfile()
    )

    const [savedMessage, setSavedMessage] =
        useState(false)

    const [glasses] = useLocalStorage(
        'water-glasses',
        0
    )

    const [glassSize] = useLocalStorage(
        'glass-size',
        250
    )

    const totalWater = useMemo(() => {
        return glasses * glassSize
    }, [glasses, glassSize])

    const streak = profileService.getStreak()

    const handleChange = (e) => {
        const { name, value } = e.target

        setProfile({
            ...profile,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        profileService.saveProfile(profile)

        setSavedMessage(true)

        setTimeout(() => {
            setSavedMessage(false)
        }, 2000)
    }

    return (
        <section className="relative overflow-hidden">
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />

            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
                <div className="text-center mb-16">
                    <div className="inline-flex px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-6">
                        User Dashboard
                    </div>

                    <h1 className="text-5xl font-black mb-6">
                        Your Profile
                    </h1>

                    <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-8">
                        Manage your profile and track your
                        hydration progress.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    <form
                        onSubmit={handleSubmit}
                        className="glass-card p-8"
                    >
                        <h2 className="text-2xl font-bold mb-8">
                            Personal Information
                        </h2>

                        <div className="space-y-6">
                            <div>
                                <label className="block mb-2 text-slate-600 dark:text-slate-400">
                                    Name
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    value={profile.name}
                                    onChange={handleChange}
                                    className="input"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 text-slate-600 dark:text-slate-400">
                                    Age
                                </label>

                                <input
                                    type="number"
                                    name="age"
                                    value={profile.age}
                                    onChange={handleChange}
                                    className="input"
                                    placeholder="Your age"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 text-slate-600 dark:text-slate-400">
                                    Weight
                                </label>

                                <input
                                    type="number"
                                    name="weight"
                                    value={profile.weight}
                                    onChange={handleChange}
                                    className="input"
                                    placeholder="Your weight"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 text-slate-600 dark:text-slate-400">
                                    Goal
                                </label>

                                <input
                                    type="text"
                                    name="goal"
                                    value={profile.goal}
                                    onChange={handleChange}
                                    className="input"
                                    placeholder="Fitness goal"
                                />
                            </div>

                            <button
                                className="
                  w-full
                  py-4
                  rounded-2xl
                  bg-gradient-to-r
                  from-primary
                  to-secondary
                  text-white
                  font-bold
                  hover:scale-[1.02]
                  transition-all
                  duration-300
                "
                            >
                                Save Profile
                            </button>

                            {savedMessage && (
                                <div className="text-emerald-500 text-center font-medium">
                                    Profile saved successfully
                                </div>
                            )}
                        </div>
                    </form>

                    <div className="space-y-8">
                        <div className="glass-card p-8 text-center">
                            <p className="text-slate-500 dark:text-slate-400 mb-4">
                                Current Hydration Streak
                            </p>

                            <h2 className="text-7xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
                                {streak}
                            </h2>

                            <p className="text-xl font-semibold">
                                Days in a Row 🔥
                            </p>
                        </div>
                        <div className="glass-card p-8">
                            <h2 className="text-2xl font-bold mb-8">
                                Hydration Statistics
                            </h2>

                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="glass-card p-6 rounded-3xl text-center">
                                    <p className="text-slate-500 dark:text-slate-400 mb-3">
                                        Glasses Today
                                    </p>

                                    <h3 className="text-5xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                        {glasses}
                                    </h3>
                                </div>

                                <div className="glass-card p-6 rounded-3xl text-center">
                                    <p className="text-slate-500 dark:text-slate-400 mb-3">
                                        Water Consumed
                                    </p>

                                    <h3 className="text-5xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                        {totalWater}
                                    </h3>

                                    <p className="text-slate-500 dark:text-slate-400 mt-2">
                                        ml
                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProfilePage
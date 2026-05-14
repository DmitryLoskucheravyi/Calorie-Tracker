# Calorie Tracker

Modern frontend-only wellness and calorie tracking application built with React, Vite and Tailwind CSS.

The application helps users calculate calories, BMI, macronutrients and water intake while also providing hydration tracking, wellness stories and personal progress management.

---

# Preview

Features a modern SaaS-inspired UI with:

- Responsive layout
- Dark / Light mode
- Glassmorphism cards
- Smooth transitions
- Interactive hydration tracker
- Wellness dashboard
- Modern mobile navigation

---

# Tech Stack

- React
- JavaScript
- Vite
- Tailwind CSS
- React Router

---

# Main Features

## Calorie Calculator

Users can calculate:

- BMR (Basal Metabolic Rate)
- Daily calories
- Recommended calories
- BMI
- Water intake
- Macronutrients

The calculator supports:

- Gender selection
- Age
- Height
- Weight
- Activity level
- Goal selection:
  - Weight loss
  - Maintenance
  - Muscle gain

---

## Hydration Tracker

Interactive hydration tracking page:

- Set custom glass size
- Add water glasses
- Remove glasses
- Reset progress
- Progress bar
- Remaining water calculation
- Daily hydration goal tracking

Hydration goals are automatically connected to the calculator results.

---

## Profile Dashboard

User dashboard with:

- Personal profile information
- Hydration statistics
- Water consumption tracking
- Daily streak system
- Local data persistence

---

## Wellness Stories

Modern wellness-inspired page using external API data.

Features:

- Async API requests
- Loading states
- Error handling
- Wellness story cards
- Responsive editorial layout

---

## History System

Recent calculation history:

- Stored in localStorage
- Modern dashboard UI
- Empty states
- Clear history functionality

---

# Architecture

The project follows clean frontend architecture principles while keeping the file structure compact and scalable.

## Folder Structure

```txt
src/
│
├── components/
├── pages/
├── services/
├── hooks/
├── utils/
├── data/
├── styles/
│
├── App.jsx
├── main.jsx
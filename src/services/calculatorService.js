import { round } from '../utils/helpers'

const goalStrategies = {
  'Weight Loss': (calories) => calories - 400,
  Maintain: (calories) => calories,
  'Muscle Gain': (calories) => calories + 300
}

const calculateBMR = ({ gender, weight, height, age }) => {
  if (gender === 'male') {
    return 10 * weight + 6.25 * height - 5 * age + 5
  }

  return 10 * weight + 6.25 * height - 5 * age - 161
}

const calculateBMI = ({ weight, height }) => {
  return weight / ((height / 100) * (height / 100))
}

const getBMICategory = (bmi) => {
  if (bmi < 18.5) return 'Underweight'
  if (bmi < 25) return 'Normal'
  if (bmi < 30) return 'Overweight'

  return 'Obese'
}

const calculateMacros = (calories) => ({
  protein: round((calories * 0.3) / 4),
  fats: round((calories * 0.25) / 9),
  carbs: round((calories * 0.45) / 4)
})

export const calculatorFactory = () => {
  const calculate = (form) => {
    const bmr = calculateBMR(form)

    const dailyCalories = bmr * form.activity

    const recommendedCalories =
      goalStrategies[form.goal](dailyCalories)

    const bmi = calculateBMI(form)

    return {
      bmr: round(bmr),
      dailyCalories: round(dailyCalories),
      recommendedCalories: round(recommendedCalories),
      bmi: bmi.toFixed(1),
      bmiCategory: getBMICategory(bmi),
      water: round(form.weight * 35),
      macros: calculateMacros(recommendedCalories)
    }
  }

  return {
    calculate
  }
}
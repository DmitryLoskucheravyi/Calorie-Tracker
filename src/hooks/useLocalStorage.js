import { useState } from 'react'
import storageService from '../services/storageService'

export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(
    storageService.get(key, initialValue)
  )

  const updateValue = (newValue) => {
    setValue(newValue)
    storageService.save(key, newValue)
  }

  return [value, updateValue]
}
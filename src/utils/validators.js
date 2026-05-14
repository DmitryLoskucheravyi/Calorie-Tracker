export const validateForm = (form) => {
  if (!form.age || form.age < 10) {
    return 'Invalid age'
  }

  if (!form.weight || form.weight < 30) {
    return 'Invalid weight'
  }

  if (!form.height || form.height < 100) {
    return 'Invalid height'
  }

  return ''
}
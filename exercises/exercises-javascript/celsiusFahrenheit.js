function transformDegree(degree) {
  const celsiusExists = degree.toUpperCase().includes('C')
  const fahrenheitExists = degree.toUpperCase().includes('F')

  // Error flux
  if (!celsiusExists && !fahrenheitExists) {
    throw new Error('Invalid Input')
  }

  // Ideal flux, F -> C
  let updatedDegree = Number(degree.toUpperCase().replace('F', ''))
  let formula = fahrenheit => ((fahrenheit - 32) * 5) / 9
  let degreeSign = 'C'

  // Alternative flux, C -> F
  if (celsiusExists) {
    updatedDegree = Number(degree.toUpperCase().replace('C', ''))
    formula = celsius => (celsius * 9) / 5 + 32
    degreeSign = 'F'
  }

  return formula(updatedDegree) + degreeSign
}

try {
  console.log(transformDegree('30C'))
} catch (error) {
  console.log(error.message)
}

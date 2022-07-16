let family = {
  incomes: [199999, 12500, 13300],
  expenses: [10000, 9000, 500]
}

function sum(array) {
  let total = 0

  for (let value of array) {
    total += value
  }

  return total
}

function calculateBalance() {
  const calculateIncomes = sum(family.incomes)
  const calculateExpenses = sum(family.expenses)

  const total = calculateIncomes - calculateExpenses

  const positiveBalance = total >= 0

  let balanceText = 'negative'

  if (positiveBalance) {
    balanceText = 'positive'
  }
  console.log(`Your balance is ${balanceText}: ${total}`)
}

calculateBalance()

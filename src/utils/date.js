const getHumanDate = (date) => (
  new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1).toLocaleDateString('pt-br')
)

export { getHumanDate }

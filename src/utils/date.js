const getHumanDate = (date) => (
  date.getDate().toString() + '/' + date.getMonth().toString() + '/' + date.getFullYear().toString()
)

export { getHumanDate }

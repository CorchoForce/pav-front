const getHumanDate = (date) => (
  date.getDate().toString() + '/' + (date.getMonth() + 1).toString() + '/' + date.getFullYear().toString()
)

export { getHumanDate }

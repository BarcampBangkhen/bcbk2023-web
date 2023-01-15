export const getDateInBangkokTimezone = (date: Date) => {
  const offset = date.getTimezoneOffset()
  const bangkokOffset = (offset + 7 * 60) * 60000
  const bangkokDate = new Date(date.getTime() + bangkokOffset)
  return bangkokDate
}
export const displaydateFormat = (date: Date) => {
  const dateString =
    date.getDate() +
    ' ' +
    date.toLocaleString('default', { month: 'long' }) +
    ' ' +
    date.getFullYear()
  return dateString
}

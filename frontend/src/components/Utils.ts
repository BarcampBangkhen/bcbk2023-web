export const getDateInBangkokTimezone = (date: Date) => {
  const offset = date.getTimezoneOffset()
  const bangkokOffset = (offset + 7 * 60) * 60000
  const bangkokDate = new Date(date.getTime() + bangkokOffset)
  return bangkokDate
}

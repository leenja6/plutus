export default function timeChat(value) {
  const date = new Date(value)
  const h = date.getHours()
  const m = function minute() {
    if (date.getMinutes() < 10) {
      return `0${date.getMinutes()}`
    }
    return date.getMinutes()
  }

  return `${h}:${m()}`
}

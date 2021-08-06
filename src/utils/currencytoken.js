export default function CurrencyToken(value) {
  const n = value.toFixed(2).toString()
  const separator = ' '
  return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, `$1${separator}`)
}

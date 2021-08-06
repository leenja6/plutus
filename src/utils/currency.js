const format = Intl.NumberFormat('ru-RU', { minimumSignificantDigits: 3, maximumSignificantDigits: 10 })

export default function CurrencyToken(value) {
  return format.format(value)
}

export default function Status(value) {
  if (value === 'Пополнение') {
    return 'green'
  } if (value === 'Вывод') {
    return 'red'
  }
  return 'orange'
}

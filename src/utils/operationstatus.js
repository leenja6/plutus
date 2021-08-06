export default function operationStatus(value) {
  if (value === 'Отменено') {
    return 'red-status'
  } if (value === 'В процессе') {
    return 'orange-status'
  }
  return 'green-status'
}

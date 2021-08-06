export default function chatClass(val1, val2) {
  if (val1 === val2) {
    return 'chat-left'
  } if (val1 === 100) {
    return 'chat-center'
  }
  return 'chat-right'
}

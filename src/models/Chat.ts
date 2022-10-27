export default interface Chat {
  message: string,
  time: number,
  type: 'sender' | 'receiver',
}
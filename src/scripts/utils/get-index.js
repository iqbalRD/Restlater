export const getIndex = (str) => {
  const length = str.length - (str.length + 1)
  return str.slice(-length) - 1
}

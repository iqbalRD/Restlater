const getInitial = (text) => {
  text = text.split('')
  text = text.slice(4)
  text = text.join('')
  return text
}

export default getInitial

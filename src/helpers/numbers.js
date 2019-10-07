export const isDigitNumber = (v) => {
  // eslint-disable-next-line no-restricted-globals
  return !Number.isNaN(parseFloat(v)) && isFinite(v)
}

export const isWholeDigitNumber = (v) => {
  return parseFloat(v) % 1 === 0
}

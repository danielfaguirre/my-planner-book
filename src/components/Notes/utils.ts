export const getRandomNoteColor = (colors: string[]) => {
  const { length } = colors
  const randomIndex = Math.floor(Math.random() * length)
  return colors[randomIndex]
}

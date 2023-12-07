type Tags = {
  tags: string[]
  sentence: string
}

export const extractTags = (input: string): Tags => {
  const words = input.split(' ')
  const tags: string[] = []

  const sentenceWords = words.filter((word) => {
    if (word.startsWith('#')) {
      if (!tags.includes(word)) {
        tags.push(word)
      }
      return false
    }
    return true
  })

  const sentence = sentenceWords.join(' ')

  return { tags, sentence }
}

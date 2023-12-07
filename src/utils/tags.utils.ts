type Tags = {
  tags: string[]
  sentence: string
  validated: boolean
}

export const validate = (input: string) => {
  return /[@$%^&!*(),.?":{}|<>]/g.test(input) ? false : true
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
  const validated = validate(input)

  return { tags, sentence, validated }
}

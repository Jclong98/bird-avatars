import { randomChoice } from '~/assets/utils/randomChoice'

describe('randomChoice', () => {
  it('should return a random choice from an array', () => {
    const choices = ['a', 'b', 'c']
    const result = randomChoice(choices)
    expect(choices).toContain(result)
  })

  it('should return a random choice from an array with a seed', () => {
    const choices = ['a', 'b', 'c']
    const result = randomChoice(choices, 'test seed')
    expect(result).toMatchInlineSnapshot('"c"')
  })
})

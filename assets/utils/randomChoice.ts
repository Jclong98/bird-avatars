import seedrandom from 'seedrandom'

export const randomChoice = (choices: any[], seed?: string) => {
  if (!seed) seed = Math.random().toString()

  const rng = seedrandom(seed)
  const index = Math.floor(rng() * choices.length)
  return choices[index]
}

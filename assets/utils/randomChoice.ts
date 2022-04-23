import seedrandom from 'seedrandom'

export function randomChoice<T>(choices: T[], seed?: string) {
  if (!seed) seed = Math.random().toString()

  const rng = seedrandom(seed)
  const index = Math.floor(rng() * choices.length)
  return choices[index]
}

import { defineHandler, appendHeader } from 'h3'
import seedrandom from 'seedrandom'

import Bird1 from '~/assets/birds/Bird1'
import Bird2 from '~/assets/birds/Bird2'
import Bird3 from '~/assets/birds/Bird3'
import Bird4 from '~/assets/birds/Bird4'
import Bird5 from '~/assets/birds/Bird5'
import Bird6 from '~/assets/birds/Bird6'
import Bird7 from '~/assets/birds/Bird7'

const randomChoice = (choices: any[], seed: string) => {
  const rng = seedrandom(seed)
  const index = Math.floor(rng() * choices.length)
  return choices[index]
}

const birds = [Bird1, Bird2, Bird3, Bird4, Bird5, Bird6, Bird7]

const primaryColors = [
  '#FF7043', // orange
  '#01BBE4', // blue
  '#BE6DE4', // purple
  '#7DD866', // green
  '#E477FF', // pink
  '#F0B51D', // yellow
  '#81BDE9', // light blue
]

const secondaryColors = [
  '#FF4343', // red
  '#006096', // dark blue
  '#974CBA', // dark purple
  '#D0DB4F', // yellow green
  '#B62DD9', // dark pink
  '#D95B00', // dark orange'
  '#3279AD', // medium blue
]

const outlineColors = [
  '#AE1818', // red
  '#00283F', // dark blue
  '#601D80', // dark purple
  '#36662B', // dark green
  '#791A90', // dark pink
  '#592500', // brown
]

const bgColors = [
  '#FFF2F2', // red
  '#DBEAFE', // blue
  '#FAE8FF', // purple
  '#ECFCCB', // green
  '#FFEDD5', // orange
]

export default defineHandler(async event => {
  await appendHeader(event, 'Content-Type', 'image/svg+xml')
  const { seed }: { seed: string } = event.context.params

  const bird = randomChoice(birds, seed)

  return bird(
    randomChoice(primaryColors, seed.toUpperCase()),
    randomChoice(secondaryColors, seed[seed.length - 1]),
    randomChoice(outlineColors, seed[0]),
    randomChoice(bgColors, seed)
  )
})

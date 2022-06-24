const letters = 'abcdefghijklmnopqrstuvwxyz'

const randomLetter = () => {
  return letters[Math.floor(Math.random() * letters.length)]
}

const randomLetters = (length: number) => {
  return Array.from({ length }, () => randomLetter()).join('')
}

export default function useBirds() {
  const route = useRoute()
  const searchParams = useUrlSearchParams()

  const imageId = computed({
    get(): string {
      // first check if vueuse's search params are set
      // if not, use the route's params from the server
      // if that isn't set, use a random string
      return (
        (searchParams.id as string) ??
        (route.query.id as string) ??
        randomLetters(3)
      )
    },
    set(id: string) {
      searchParams.id = id
    },
  })

  const imagePath = computed(() => `/api/${imageId.value}`)
  const fullImagePath = computed(
    () => `bird-avatars.jacoblong.dev/api/${imageId.value}`
  )

  const history = useState('bird-history', () => [])

  const randomize = () => {
    history.value.push({ id: imageId.value, timeStamp: Date.now() })
    if (history.value.length > 5) {
      history.value.shift()
    }
    imageId.value = randomLetters(3)
  }

  return {
    imageId,
    imagePath,
    fullImagePath,
    randomize,
    history,
  }
}

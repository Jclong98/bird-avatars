export const useSavedBirds = () => {
  return useState<string[]>('birds', () => ['asd', 'ayy'])
}

import themeColors from '~/assets/themeColors'
import { randomChoice } from '~/assets/utils/randomChoice'

export default function useThemeColor() {
  const themeColor = useState('bird-theme-color', () => {
    return randomChoice(themeColors)
  })

  return themeColor
}

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {
  cyan500,
  grey100, grey300, grey400, grey500,
  darkBlack, fullBlack,
} from 'material-ui/styles/colors'
import { fade } from 'material-ui/utils/colorManipulator'
import spacing from 'material-ui/styles/spacing'

const eplaTheme = getMuiTheme({
  spacing: spacing,
  fontFamily: 'Capriola, sans-serif',
  palette: {
    primary1Color: '#3c6382',
    primary2Color: '#6a89cc',
    primary3Color: grey400,
    accent1Color: '#f6b93b',
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: '#fff',
    alternateTextColor: '#fff',
    canvasColor: '#3c6382',
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: cyan500,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  }
})

export default eplaTheme
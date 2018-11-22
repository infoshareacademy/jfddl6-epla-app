import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {
  cyan500, cyan700,
  pinkA200,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack,
} from 'material-ui/styles/colors'
import { fade } from 'material-ui/utils/colorManipulator'
import spacing from 'material-ui/styles/spacing'

const eplaTheme = getMuiTheme({
  appBar: {
    color: '#3c6382',
  },
  drawer: {
    color: '#3c6382'
  },
  palette: {
    spacing: spacing,
    fontFamily: 'Capriola',
    borderRadius: 2,
    palette: {
      primary1Color: '#3c6382',
      primary2Color: '#3c6382',
      primary3Color: grey400,
      accent1Color: pinkA200,
      accent2Color: grey100,
      accent3Color: grey500,
      textColor: darkBlack,
      alternateTextColor: white,
      canvasColor: white,
      borderColor: grey300,
      disabledColor: fade(darkBlack, 0.3),
      pickerHeaderColor: cyan500,
      clockCircleColor: fade(darkBlack, 0.07),
      shadowColor: fullBlack,
    }
  }
});

export default eplaTheme
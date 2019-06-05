import { createMuiTheme } from '@material-ui/core/styles';
import Colors from './Colors';

const fontLight = 300;
const fontRegular = 400;
// const fontMedium = 500;
const fontBold = 700;
const fontColor = Colors.grey900;
const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    h1: {
      fontWeight: fontLight,
      fontSize: 44,
      lineHeight: '50px',
      letterSpacing: -0.4,
      color: fontColor
    },
    h2: {
      fontWeight: fontLight,
      fontSize: 32,
      lineHeight: '36px',
      letterSpacing: -0.4,
      color: fontColor
    },
    h3: {
      fontWeight: fontLight,
      fontSize: 24,
      lineHeight: '28px',
      letterSpacing: -0.3,
      color: fontColor
    },
    h4: {
      fontWeight: fontLight,
      fontSize: 20,
      lineHeight: '22px',
      letterSpacing: 0,
      color: fontColor
    },
    h5: {
      fontWeight: fontBold,
      fontSize: 18,
      lineHeight: '20px',
      letterSpacing: 0,
      color: fontColor
    },
    h6: {
      fontWeight: fontBold,
      fontSize: 16,
      lineHeight: '20px',
      letterSpacing: 0,
      color: fontColor
    },
    caption: {
      fontWeight: fontRegular,
      fontSize: 12,
      lineHeight: '17px',
      letterSpacing: 0,
      color: fontColor
    },
    body1: {
      fontWeight: fontLight,
      fontSize: 16,
      lineHeight: '24px',
      letterSpacing: 0,
      color: fontColor
    },
    body2: {
      fontWeight: fontLight,
      fontSize: 14,
      lineHeight: '21px',
      letterSpacing: 0,
      color: fontColor
    }
  }
});

export default theme;
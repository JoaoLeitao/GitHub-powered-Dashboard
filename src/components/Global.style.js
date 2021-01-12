import { createGlobalStyle } from 'styled-components/macro';
import * as Style from '../config/style';
import RobotoRegular from '../fonts/Roboto-Regular.ttf';

export const theme = {
  // Colors
  primary: Style.BLUE,

  // Typography
  baseFont: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif`,
};

export default createGlobalStyle`
  @font-face {
    font-family: "Roboto";
    src: local("Roboto-Regular"), url(${RobotoRegular}) format("truetype");
  }

  * {
    margin: 0;
    padding: 0;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
  }
`;

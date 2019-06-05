import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme/theme'
import CreateMultiUserCoupon from './containers/CreateCoupon/CreateMultiUserCoupon';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CreateMultiUserCoupon />
      </MuiThemeProvider>
      
    );
  }
}

export default App;

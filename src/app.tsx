import * as React from 'react';
// import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
// import purple from 'material-ui/colors/purple';
// import green from 'material-ui/colors/green';
// import Reboot from 'material-ui/Reboot';
import Routes from '@src/router';

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//         light: purple[300],
//         main: purple[500],
//         dark: purple[700],
//     },
//     secondary: {
//         light: green[300],
//         main: green[500],
//         dark: green[700],
//     },
//   },
// });

class App extends React.Component<{}, {}> {
    render() {
        return (
            <Routes />
        );
    }
}

export default App;

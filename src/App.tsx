import React from 'react';
import {ThemeProvider} from 'styled-components';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import {StartComponent, SinglePlayerComponent, MultiPlayerComponent} from './components';
import theme from './utils/theme';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <StartComponent/>
                    </Route>
                    <Route path='/multiplayer'>
                        <MultiPlayerComponent/>
                    </Route>
                    <Route parh='/singleplayer'>
                        <SinglePlayerComponent/>
                    </Route>
                </Switch>
            </Router>
        </ThemeProvider>

    );
}

export default App;

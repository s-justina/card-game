import React from 'react';
import {ThemeProvider} from 'styled-components';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Provider} from "react-redux";

import {StartComponent, MultiPlayerComponent} from './components';
import SinglePlayerComponent from './containers/SinglePlayerContainer'
import {createStore} from 'redux';
import reducers from './reducers'

import theme from './utils/theme';

function App() {
    const store = createStore(reducers);
    return (
        <Provider store={store}>
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
        </Provider>


    );
}

export default App;

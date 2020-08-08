import React from 'react';
import {ThemeProvider} from 'styled-components';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Provider} from "react-redux";
import {createStore} from 'redux';

import {MultiPlayerComponent} from './components';
import StartComponent from '../src/containers/StartContainer'
import SinglePlayerComponent from './containers/SinglePlayerContainer'
import reducers from './reducers'
import theme from './utils/theme';
import GlobalStyles from './index.css';

function App() {
    const store = createStore(reducers);
    return (
        <ThemeProvider theme={theme}>

            <Provider store={store}>
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

                <GlobalStyles/>
            </Provider>
        </ThemeProvider>


    );
}

export default App;

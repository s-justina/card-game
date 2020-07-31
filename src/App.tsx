import React from 'react';
import {ThemeProvider} from 'styled-components';

import {StartComponent} from './components';
import theme from './utils/theme';

function App() {
  return (
      <ThemeProvider theme={theme}>
          <div className="App">
              <StartComponent/>
          </div>
      </ThemeProvider>

  );
}

export default App;

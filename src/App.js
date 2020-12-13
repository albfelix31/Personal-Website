import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Homepage from './components/Homepage';

class App extends React.Component {
  render() {
    return (
      <body>
        <Router>
              <Switch>
                {/* HomePage */}
                <Route exact path="/" component={Homepage} />
              </Switch>
        </Router>
      </body>
    );
  }
}

export default App;
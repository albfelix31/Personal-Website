import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Home from './components/Homepage';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Container fluid>
          <Row className="justify-content-center">
            <Switch>
              {/* HomePage */}
              <Route exact path="/" component={Home} />
            </Switch>
          </Row>
        </Container>
      </Router>
    );
  }
}

export default App;
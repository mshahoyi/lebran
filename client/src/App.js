import React, { Component } from 'react';
import Checkin from './components/checkin';
import Dashboard from './components/dashboard';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/login' render={(props) => <Login {...props} submit={this.props.submit} />} />
            {/* <Route path='/checkin' render={(props) => <Checkin {...props} />} /> */}
          </div>
        </Router>     
      </div>
    );
  }
}

export default App;
